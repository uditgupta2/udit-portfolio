import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('complete content, project navigation, reload, and not-found recovery', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Thoughtful code.',
  )
  for (const title of [
    'Curiosity is my compass.',
    'A few meaningful milestones.',
    'Growing with every challenge.',
    'The right tools for the terrain.',
    'There’s a world beyond the screen.',
  ]) {
    await expect(page.getByRole('heading', { name: title })).toBeVisible()
  }
  for (const [slug, name] of [
    ['casefox', 'CaseFox'],
    ['mattersuite', 'MatterSuite'],
    ['roostercal', 'RoosterCal'],
  ]) {
    await page.goto('/')
    await page.locator('.project-title-link').filter({ hasText: name }).click()
    await expect(page).toHaveURL(`/projects/${slug}`)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(name)
    await page.reload()
    await expect(
      page.getByRole('heading', { name: 'Where I made a difference.' }),
    ).toBeVisible()
  }
  await page.goto('/projects/unknown')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'This path ends here.',
  )
  await page.getByRole('link', { name: 'Back to the portfolio' }).click()
  await expect(page).toHaveURL('/')
})

test('theme survives reload and the system motion preference is respected', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Switch to dark mode' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'off')
  await expect(
    page.getByRole('button', { name: 'Motion reduced by system preference' }),
  ).toBeDisabled()
  expect(
    await page
      .locator('.water-ripples')
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none')
})

test('contact actions and resume download use the provided details', async ({
  page,
}) => {
  await page.goto('/')
  await expect(
    page.locator('#contact a[href="mailto:udit204gupta@gmail.com"]'),
  ).toBeVisible()
  await expect(page.locator('#contact a[href="tel:+918319227454"]')).toHaveText(
    '+91 8319227454',
  )
  await expect(
    page.getByRole('link', { name: 'Connect on LinkedIn' }),
  ).toHaveAttribute('href', 'https://www.linkedin.com/in/udit-gupta-87bb04135')
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('link', { name: 'Download résumé' }).click()
  expect((await downloadPromise).suggestedFilename()).toBe(
    'Udit_Gupta_Resume.pdf',
  )
  const resume = await page.request.get('/Udit_Gupta_Resume.pdf')
  expect(resume.headers()['content-type']).toContain('application/pdf')
  expect((await resume.body()).subarray(0, 4).toString()).toBe('%PDF')
})

test('layouts have no horizontal overflow and light/dark pages are accessible', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  for (const theme of ['light', 'dark']) {
    if (theme === 'dark')
      await page.getByRole('button', { name: 'Switch to dark mode' }).click()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    const report = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    expect(
      report.violations.map(({ id, nodes }) => ({
        id,
        nodes: nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      })),
    ).toEqual([])
    await page.screenshot({
      path: `test-results/${testInfo.project.name}-${theme}-hero.png`,
    })
    await page.screenshot({
      path: `test-results/${testInfo.project.name}-${theme}.png`,
      fullPage: true,
    })
  }
  await page.goto('/projects/mattersuite')
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
  const report = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  expect(
    report.violations.map(({ id, nodes }) => ({
      id,
      nodes: nodes.map((node) => ({
        target: node.target,
        summary: node.failureSummary,
      })),
    })),
  ).toEqual([])
})

test('animation control, mobile navigation, and runtime stay healthy', async ({
  page,
}, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Pause animations' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'off')
  await page.getByRole('button', { name: 'Resume animations' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'on')
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'Work', exact: true })
      .click()
    await expect(
      page.getByRole('button', { name: 'Open navigation' }),
    ).toHaveAttribute('aria-expanded', 'false')
  } else {
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Work', exact: true })
      .click()
  }
  await expect(page).toHaveURL('/#work')
  await page.getByRole('link', { name: 'MatterSuite', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'MatterSuite.',
  )
  expect(errors).toEqual([])
})

test('small screens and tablet layouts retain readable content and controls', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
  await page.goto('/')
  for (const width of [320, 360, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    await expect(
      page.getByRole('button', { name: 'Switch to dark mode' }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: 'Motion reduced by system preference' }),
    ).toBeVisible()
  }
})

test('keyboard users can skip navigation and dismiss the mobile menu', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'About', exact: true })
      .focus()
    await page.keyboard.press('Escape')
    await expect(
      page.getByRole('button', { name: 'Open navigation' }),
    ).toBeFocused()
    await expect(
      page.getByRole('navigation', { name: 'Mobile navigation' }),
    ).toHaveCount(0)
  }
})

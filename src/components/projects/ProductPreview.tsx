import type { ProjectSlug } from '../../data/portfolio'
import {
  CalendarDays,
  Check,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Plus,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'

export function ProductPreview({ kind }: { kind: ProjectSlug }) {
  return (
    <div className={`product-preview preview-${kind}`} aria-hidden="true">
      <div className="preview-orbit orbit-one" />
      <div className="preview-orbit orbit-two" />
      <div className="product-window">
        <div className="window-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>
            {kind === 'casefox'
              ? 'casefox'
              : kind === 'mattersuite'
                ? 'MatterSuite'
                : 'RoosterCal'}
            <b>®</b>
          </span>
          <div className="window-avatar">U</div>
        </div>
        <div className="window-content">
          <div className="window-sidebar">
            <LayoutDashboard />
            <FileText />
            <Users />
            <CalendarDays />
            <div />
          </div>
          {kind === 'casefox' ? (
            <div className="window-main">
              <div className="flex items-center justify-between">
                <strong>Billing overview</strong>
                <span className="mock-button">
                  <Plus size={8} /> New invoice
                </span>
              </div>
              <div className="mock-metrics">
                <div>
                  <span>Billable hours</span>
                  <strong>
                    128.5 <small>hrs</small>
                  </strong>
                </div>
                <div>
                  <span>Collection rate</span>
                  <strong>
                    94.2<small>%</small>
                  </strong>
                </div>
              </div>
              <div className="mock-chart">
                {[35, 57, 43, 76, 55, 88, 67, 93, 78, 100, 85, 116].map(
                  (height, i) => (
                    <i key={i} style={{ height: `${height / 1.7}px` }} />
                  ),
                )}
              </div>
              <div className="mock-list">
                <span>Recent invoices</span>
                <ChevronDown size={8} />
              </div>
              {[1, 2].map((i) => (
                <div className="mock-invoice" key={i}>
                  <FileText size={10} />
                  <span>Invoice #00{i}</span>
                  <i>Paid</i>
                </div>
              ))}
            </div>
          ) : kind === 'mattersuite' ? (
            <div className="window-main document-main">
              <div className="flex items-center justify-between">
                <strong>Document workspace</strong>
                <Search size={10} />
              </div>
              <div className="document-toolbar">
                File <span>Edit</span>
                <span>View</span>
                <span>•</span>
                <b>B</b>
                <i>I</i>
                <span>≡</span>
              </div>
              <div className="document-paper">
                <p>Service Agreement</p>
                <span>OVERVIEW & TERMS</span>
                <div className="document-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span>SCOPE OF SERVICES</span>
                <div className="document-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          ) : (
            <div className="window-main">
              <div className="flex items-center justify-between">
                <strong>Your week, organized.</strong>
                <span className="mock-button">+ New</span>
              </div>
              <div className="calendar-heading">
                <CalendarDays size={10} />
                <span>A week at a glance</span>
                <ChevronDown size={8} />
              </div>
              <div className="mock-calendar">
                {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, i) => (
                  <div key={day}>
                    <span>{day}</span>
                    <b>{12 + i}</b>
                    {[0, 1, 2].map((row) => (
                      <i
                        key={row}
                        className={(i + row) % 3 === 0 ? 'has-event' : ''}
                      >
                        {(i + row) % 3 === 0 && (
                          <>
                            <small>{row === 0 ? 'Team sync' : 'Meeting'}</small>
                            <small>30 min</small>
                          </>
                        )}
                      </i>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {kind === 'mattersuite' ? (
        <div className="floating-note ai-note">
          <span>
            <Sparkles size={13} /> A little intelligence. A lot of possibility.
          </span>
          <p>Document summarized</p>
          <div className="note-lines">
            <i />
            <i />
          </div>
          <span className="ai-note-status">
            <Check size={10} /> Ready to review
          </span>
        </div>
      ) : kind === 'roostercal' ? (
        <div className="floating-note booking-note">
          <span className="booking-check">
            <Check size={16} />
          </span>
          <div>
            <strong>Space for what matters.</strong>
            <p>A simpler way to schedule.</p>
          </div>
        </div>
      ) : (
        <div className="floating-note billing-note">
          <span className="booking-check">
            <Check size={15} />
          </span>
          <div>
            <strong>Less admin. More focus.</strong>
            <p>Built for legal professionals.</p>
          </div>
        </div>
      )}
    </div>
  )
}

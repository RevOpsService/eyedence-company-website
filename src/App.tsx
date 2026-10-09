import {
  ArrowUpRight,
  Check,
  Layers3,
  Search,
  GitBranch,
  CircleDot,
  ScanLine,
  Database,
  Sparkles,
} from "lucide-react";
import ProductPreview from "./ProductPreview";

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`brand ${inverse ? "brand-inverse" : ""}`}
      href="#top"
      aria-label="Eyedence home"
    >
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M3 20C12 5 28 5 37 20 28 35 12 35 3 20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="20" cy="20" r="6" fill="currentColor" />
      </svg>
      eyedence<span className="brand-dot">.</span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header id="top" className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#platform">Platform</a>
            <a href="#approach">Our approach</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-cta" href="#platform">
            Meet Eyedence <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-topline">
            <span className="eyebrow">
              <span className="orange-dot" /> A CLEARER PICTURE OF REVENUE
            </span>
            <span className="edition">
              BUILT FOR THE PEOPLE BEHIND THE PIPELINE
            </span>
          </div>
          <div className="hero-grid">
            <div>
              <h1 id="hero-heading">
                Revenue operations,
                <br />
                backed by{" "}
                <span className="accent-word">
                  evidence
                  <svg
                    viewBox="0 0 500 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M3 13Q220 -4 497 9M100 18Q280 6 420 13" />
                  </svg>
                </span>
                .
              </h1>
            </div>
            <div className="hero-aside">
              <p>
                Bring your CRM, pipeline and data-quality checks into one clear
                view. Understand what needs attention — and the records behind
                the numbers.
              </p>
              <a className="button button-primary" href="#platform">
                Explore the platform <ArrowUpRight size={18} />
              </a>
              <span className="hero-footnote">
                Less guesswork. More perspective.
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-top">
              <span>
                <span className="tiny-cross">+</span> CONNECT THE DOTS
              </span>
              <span>CONTEXT → CLARITY → ACTION</span>
            </div>
            <div className="hero-product">
              <div className="context-card">
                <span className="context-symbol">
                  <ScanLine size={23} />
                </span>
                <span className="overline">LOOK A LITTLE CLOSER</span>
                <h2>
                  Your next decision
                  <br />
                  starts with
                  <br />
                  <em>better context.</em>
                </h2>
                <p>
                  From scattered records
                  <br />
                  to a connected view.
                </p>
                <div className="context-trace" aria-hidden="true">
                  <span />
                  <i />
                  <span />
                  <i />
                  <span />
                </div>
              </div>
              <ProductPreview />
            </div>
            <div className="visual-bottom">
              <span>
                <Check size={14} /> CRM context
              </span>
              <span>
                <Check size={14} /> Pipeline visibility
              </span>
              <span>
                <Check size={14} /> Data-quality review
              </span>
            </div>
          </div>
        </section>
        <section
          id="platform"
          className="platform container"
          aria-labelledby="platform-heading"
        >
          <div className="section-heading">
            <span className="eyebrow">01 / THE PLATFORM</span>
            <div>
              <h2 id="platform-heading">
                See the whole picture.
                <br />
                <span className="muted">Then look closer.</span>
              </h2>
              <p>
                Revenue work doesn’t happen in a single chart.
                <br />
                Connect the opportunities, records and actions behind it.
              </p>
            </div>
          </div>
          <div className="feature-grid">
            <article className="feature">
              <span className="feature-number">01</span>
              <div className="feature-art pipeline-art" aria-hidden="true">
                <span>DISCOVER</span>
                <div className="pipeline-line">
                  <i />
                  <i />
                  <i />
                </div>
                <span>EVALUATE</span>
                <div className="pipeline-line short">
                  <i />
                  <i />
                </div>
                <span>PROPOSE</span>
                <div className="pipeline-line shortest">
                  <i />
                </div>
                <GitBranch size={26} />
              </div>
              <h3>A clearer pipeline.</h3>
              <p>
                See where opportunities stand. Keep deal stages, ownership and
                follow-up work in view, without losing the wider context.
              </p>
              <span className="feature-tag">PIPELINE VISIBILITY</span>
            </article>
            <article className="feature">
              <span className="feature-number">02</span>
              <div className="feature-art quality-art" aria-hidden="true">
                <div>
                  <Database size={17} />
                  <span>Record details</span>
                  <Check size={15} />
                </div>
                <div className="quality-highlight">
                  <ScanLine size={17} />
                  <span>Needs a closer look</span>
                  <span className="orange-dot" />
                </div>
                <div>
                  <Layers3 size={17} />
                  <span>Source context</span>
                  <Check size={15} />
                </div>
              </div>
              <h3>Data worth reviewing.</h3>
              <p>
                Make incomplete records and conflicting details easier to spot.
                Understand what needs a second look before you act.
              </p>
              <span className="feature-tag">DATA QUALITY</span>
            </article>
            <article className="feature">
              <span className="feature-number">03</span>
              <div className="feature-art action-art" aria-hidden="true">
                <span className="action-node">
                  <CircleDot size={20} />
                </span>
                <span className="action-dash" />
                <div className="action-detail">
                  <span>THE NEXT STEP</span>
                  <strong>
                    Move forward
                    <br />
                    with context.
                  </strong>
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h3>Context for the next action.</h3>
              <p>
                Connect the finding to the record, the conversation and the
                task. Give your team a clearer starting point for what comes
                next.
              </p>
              <span className="feature-tag">CONNECTED WORK</span>
            </article>
          </div>
        </section>
        <section
          id="approach"
          className="approach"
          aria-labelledby="approach-heading"
        >
          <div className="container approach-inner">
            <div className="approach-intro">
              <span className="eyebrow">02 / OUR APPROACH</span>
              <h2 id="approach-heading">
                Good decisions
                <br />
                have a <em>paper trail.</em>
              </h2>
              <p>
                A number is a starting point. The useful part is understanding
                what sits behind it.
              </p>
              <div className="approach-mark" aria-hidden="true">
                <svg viewBox="0 0 180 110">
                  <path d="M5 55Q90 -35 175 55Q90 145 5 55Z" />
                  <circle cx="90" cy="55" r="24" />
                  <path d="M90 0V110M0 55H180" />
                </svg>
              </div>
            </div>
            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Bring context together.</h3>
                  <p>
                    Start with the CRM records, opportunities and activity that
                    shape your revenue work.
                  </p>
                </div>
                <Layers3 aria-hidden="true" />
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Review the evidence.</h3>
                  <p>
                    Look into gaps and inconsistencies. Distinguish what the
                    record says from what still needs checking.
                  </p>
                </div>
                <Search aria-hidden="true" />
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Decide what comes next.</h3>
                  <p>
                    Use that context to choose a follow-up, prepare a
                    conversation or focus your next review.
                  </p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </li>
            </ol>
          </div>
        </section>
        <section
          id="about"
          className="about container"
          aria-labelledby="about-heading"
        >
          <div className="about-top">
            <span className="eyebrow">03 / MEET EYEDENCE</span>
            <Sparkles size={25} aria-hidden="true" />
          </div>
          <h2 id="about-heading">
            For people who ask
            <br />
            <span className="muted">“What’s behind that number?”</span>
          </h2>
          <div className="about-bottom">
            <p>
              Eyedence brings CRM, pipeline visibility and data-quality review
              into one working view. Built around a simple idea: your next
              revenue decision deserves context you can examine.
            </p>
            <a className="button button-dark" href="#platform">
              Take a closer look <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <Brand />
          <span>Clarity is a better starting point.</span>
          <a href="#top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Eyedence</span>
          <span>REVENUE OPERATIONS, BACKED BY EVIDENCE.</span>
        </div>
      </footer>
    </>
  );
}

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Layers3,
  Search,
  GitBranch,
  CircleDot,
  ShieldCheck,
  ScanLine,
  ChartNoAxesCombined,
  Database,
} from "lucide-react";

const views = [
  {
    label: "Pipeline",
    title: "Your pipeline, with context.",
    caption: "A shared view of the work behind each opportunity.",
    columns: ["Opportunity", "Stage", "Next step"],
    rows: [
      ["Orchard Studio", "Discovery", "Review brief"],
      ["Northstar Works", "Evaluation", "Align stakeholders"],
      ["Forma Collective", "Proposal", "Confirm scope"],
    ],
  },
  {
    label: "Data quality",
    title: "Know what needs a second look.",
    caption:
      "Make gaps and conflicting details visible before the next decision.",
    columns: ["Record", "Review signal", "Next step"],
    rows: [
      ["Orchard Studio", "Missing contact", "Check owner"],
      ["Northstar Works", "Conflicting details", "Compare sources"],
      ["Forma Collective", "Review due", "Check record"],
    ],
  },
  {
    label: "Activity",
    title: "Turn context into a next step.",
    caption:
      "Keep conversations and follow-up work connected to the right records.",
    columns: ["Account", "Focus", "Next step"],
    rows: [
      ["Orchard Studio", "Next conversation", "Prepare questions"],
      ["Northstar Works", "Stakeholder review", "Gather context"],
      ["Forma Collective", "Follow-up", "Review proposal"],
    ],
  },
];

export default function ProductPreview() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[selected];
  return (
    <div className="product-window">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>THE EYEDENCE WORKSPACE</span>
        <span className="window-live">
          <CircleDot size={12} /> Illustrative view
        </span>
      </div>
      <div className="product-body">
        <div className="product-sidebar" aria-hidden="true">
          <span className="sidebar-logo">e.</span>
          <Layers3 />
          <ChartNoAxesCombined />
          <Database />
          <GitBranch />
          <span className="sidebar-bottom">E</span>
        </div>
        <div className="product-content">
          <div className="product-breadcrumb">
            Workspace <ChevronRight size={12} /> Revenue overview{" "}
            <Search size={15} />
          </div>
          <div className="preview-heading">
            <div>
              <span className="overline">CLARITY STARTS HERE</span>
              <h3>One view. More perspective.</h3>
            </div>
            <span className="preview-badge">
              <ShieldCheck size={14} /> Evidence first
            </span>
          </div>
          <div
            className="tabs"
            role="tablist"
            aria-label="Explore the illustrative workspace"
          >
            {views.map((item, i) => (
              <button
                key={item.label}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`tab-${i}`}
                role="tab"
                aria-selected={selected === i}
                aria-controls="product-panel"
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(event) => {
                  let next = i;
                  if (event.key === "ArrowRight") next = (i + 1) % views.length;
                  else if (event.key === "ArrowLeft")
                    next = (i + views.length - 1) % views.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = views.length - 1;
                  else return;
                  event.preventDefault();
                  setSelected(next);
                  tabs.current[next]?.focus();
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`tab-${selected}`}
            tabIndex={0}
          >
            <div className="panel-title">
              <span className="panel-icon">
                <GitBranch size={19} />
              </span>
              <div>
                <h4>{view.title}</h4>
                <p>{view.caption}</p>
              </div>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    {view.columns.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {view.rows.map((row, i) => (
                    <tr key={row[0]}>
                      <td>
                        <span
                          className={`account-avatar avatar-${i}`}
                          aria-hidden="true"
                        >
                          {row[0][0]}
                        </span>
                        {row[0]}
                      </td>
                      <td>
                        <span className={`status status-${i}`}>{row[1]}</span>
                      </td>
                      <td>
                        {row[2]}
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="record-note">
              <ScanLine size={15} />
              <span>Behind every record, a reason to look closer.</span>
              <ArrowRight size={15} />
            </div>
          </div>
          <p className="illustration-note">
            Fictional records. A simplified illustration, not a live product
            session.
          </p>
        </div>
      </div>
    </div>
  );
}

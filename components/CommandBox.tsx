import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const commandFont =
  "\"Courier New\", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
const commandBoxClass =
  "mt-2 rounded-2xl border border-emerald-400/20 bg-slate-950/70 p-4 text-sm text-emerald-100 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.6)]";
const commandLineClass = "text-emerald-100";

type CommandBoxProps = {
  lines: string[];
  indexKey: string;
  variant?: "command" | "prompt";
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
};

const promptBoxClass =
  "mt-2 rounded-2xl border border-emerald-400/20 bg-slate-950/70 p-5 text-sm text-white/80 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.6)]";

export function CommandBox({
  lines,
  indexKey,
  variant = "command",
  expandable = false,
  expanded = false,
  onToggle,
}: CommandBoxProps) {
  const [copied, setCopied] = useState(false);
  const content = lines.join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const boxClass = variant === "prompt" ? promptBoxClass : commandBoxClass;
  const lineClass = variant === "prompt" ? "text-white/80" : commandLineClass;
  const isPrompt = variant === "prompt";

  return (
    <div
      className={`${boxClass} group relative`}
      style={{ fontFamily: commandFont }}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 opacity-0 transition group-hover:opacity-100"
        aria-label="Copy commands"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      {(() => {
        let listMode = false;
        return lines.map((line, lineIndex) => {
        if (isPrompt && line.trim() === "") {
          listMode = false;
          return <div key={`${indexKey}-${lineIndex}`} className="h-2" />;
        }

        const isHeading =
          isPrompt &&
          (line === line.toUpperCase() ||
            line.endsWith(":") ||
            line.startsWith("ROLE ") ||
            line.startsWith("TECH STACK") ||
            line.startsWith("SECURITY"));

        if (isPrompt && line.endsWith(":")) {
          listMode = true;
        }

        const isAlert =
          isPrompt &&
          (line === "STOP" ||
            line === "NEVER" ||
            line === "ALWAYS" ||
            line === "ABSOLUTE RESTRICTIONS (NEVER)");

        const lineStyles = isHeading
          ? "text-white/90 font-semibold"
          : isAlert
            ? "text-amber-200 font-semibold"
            : lineClass;

        const shouldBullet =
          isPrompt && listMode && !isHeading && !isAlert && line.trim() !== "";

        return (
          <div
            key={`${indexKey}-${lineIndex}`}
            className={shouldBullet ? "flex gap-3" : lineStyles}
          >
            {shouldBullet ? (
              <>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                <span className={lineStyles}>{line}</span>
              </>
            ) : (
              line
            )}
          </div>
        );
        });
      })()}
      {expandable ? (
        <button
          type="button"
          onClick={onToggle}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/10 bg-slate-950/90 p-1 text-white/70 shadow-sm transition hover:text-white"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? (
            <FiChevronUp aria-hidden="true" />
          ) : (
            <FiChevronDown aria-hidden="true" />
          )}
        </button>
      ) : null}
    </div>
  );
}

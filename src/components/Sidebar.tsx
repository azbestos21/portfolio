"use client";

import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import {
  CloseIcon,
  CollapseIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  navIcons,
} from "./icons";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  active: string;
  onToggle: () => void;
  onMobileToggle: () => void;
  onNavigate: (id: string) => void;
};

export function Sidebar({
  collapsed,
  mobileOpen,
  active,
  onToggle,
  onMobileToggle,
  onNavigate,
}: SidebarProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-line/80 bg-ink/80 px-4 backdrop-blur-xl md:hidden">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="font-serif text-lg tracking-tight text-cream"
        >
          {site.name}
        </button>
        <button
          type="button"
          onClick={onMobileToggle}
          className="rounded-full border border-line p-2 text-cream"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/25 md:hidden"
          aria-label="Close navigation"
          onClick={onMobileToggle}
        />
      ) : null}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 flex h-dvh flex-col border-r border-line bg-paper transition-[width,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          collapsed ? "md:w-20" : "md:w-72",
          mobileOpen ? "w-72 translate-x-0" : "-translate-x-full w-72 md:translate-x-0",
        )}
      >
        <div className={cn("flex items-center gap-3 px-4 pt-6", collapsed && "md:justify-center md:px-2")}>
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lime text-sm font-semibold tracking-wide text-ink"
            aria-label="Go to home"
          >
            {site.initials}
          </button>
          <div className={cn("min-w-0", collapsed && "md:hidden")}>
            <p className="truncate font-medium text-cream">{site.name}</p>
            <p className="truncate text-xs text-sand">{site.role}</p>
          </div>
        </div>

        <nav className="mt-8 flex-1 space-y-1 px-3" aria-label="Page sections">
          {nav.map((item, index) => {
            const Icon = navIcons[item.id];
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                title={item.label}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors duration-200",
                  isActive ? "bg-lime/10 text-cream" : "text-sand hover:bg-black/5 hover:text-cream",
                  collapsed && "md:justify-center md:px-0",
                )}
              >
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-6 w-0.5 -translate-y-1/2 rounded-full bg-lime transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                    collapsed && "md:hidden",
                  )}
                />
                <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-lime" : "text-current")} />
                <span className={cn("flex-1 text-sm font-medium", collapsed && "md:hidden")}>
                  {item.label}
                </span>
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-wider text-sand/70",
                    collapsed && "md:hidden",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </nav>

        <div className={cn("mt-auto space-y-4 px-4 pb-5", collapsed && "md:px-2")}>
          <div className={cn("flex items-center gap-2", collapsed && "md:flex-col")}>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-sand transition-colors hover:border-lime hover:text-lime"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-sand transition-colors hover:border-lime hover:text-lime"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-sand transition-colors hover:border-lime hover:text-lime"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="hidden w-full items-center justify-center gap-2 rounded-2xl border border-line px-3 py-2 text-xs text-sand transition-colors hover:border-lime hover:text-cream md:flex"
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <CollapseIcon className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
            <span className={cn(collapsed && "md:hidden")}>Collapse</span>
          </button>
        </div>
      </aside>
    </>
  );
}

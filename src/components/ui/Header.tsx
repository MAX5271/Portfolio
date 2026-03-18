export function Header() {
  return (
    <nav className="bg-base text-primary border-b-2 border-strong h-16 flex items-center justify-between px-4 md:px-12 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="font-mono text-xl md:text-2xl tracking-tight text-primary font-bold">
          ~/max
        </div>

        <div
          className="lg:hidden h-2 w-2 bg-accent-main rounded-full shadow-[0_0_8px_var(--theme-accent-glow)] animate-pulse"
          title="Available"
        ></div>
      </div>

      <div className="hidden md:flex items-center space-x-8 font-display text-sm uppercase tracking-widest text-secondary">
        <a
          href="#projects"
          className="group relative hover:text-primary transition-colors duration-300 py-2 font-bold"
        >
          Projects
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent-main transition-all duration-300 ease-out group-hover:w-full rounded-micro-curve"></span>
        </a>
        <a
          href="#skills"
          className="group relative hover:text-primary transition-colors duration-300 py-2 font-bold"
        >
          Skills
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent-main transition-all duration-300 ease-out group-hover:w-full rounded-micro-curve"></span>
        </a>
        <a
          href="#telemetry"
          className="group relative hover:text-primary transition-colors duration-300 py-2 font-bold"
        >
          Contact
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent-main transition-all duration-300 ease-out group-hover:w-full rounded-micro-curve"></span>
        </a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer font-bold uppercase">
          <div className="h-2 w-2 bg-accent-main rounded-full shadow-[0_0_8px_var(--theme-accent-glow)] animate-pulse"></div>
          available for work
        </div>
      </div>
    </nav>
  );
}
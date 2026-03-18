export function Header() {
  return (
    <nav className="bg-base text-primary border-b border-subtle h-16 flex items-center justify-between px-4 md:px-12 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="font-mono text-xl md:text-2xl tracking-tight text-primary">
          ~/nitigya
        </div>

        <div
          className="lg:hidden h-2 w-2 bg-green-500 rounded-full animate-pulse"
          title="Available"
        ></div>
      </div>

      <div className="hidden md:flex items-center space-x-8 font-sans text-sm uppercase tracking-widest text-secondary">
        <a
          href="#projects"
          className="group relative transition-all hover:text-primary transition-colors duration-100 py-2"
        >
          Projects
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#skills"
          className="group relative transition-all hover:text-primary transition-colors duration-100 py-2"
        >
          Skills
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#telemetry"
          className="group relative transition-all hover:text-primary transition-colors duration-100 py-2"
        >
          Contact
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer">
          <div className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
          available for work
        </div>
      </div>
    </nav>
  );
}

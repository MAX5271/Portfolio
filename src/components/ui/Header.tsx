export function Header() {
  return (
    <nav className="bg-base text-primary border-b border-subtle h-16 flex items-center justify-between px-4 md:px-12 sticky top-0 z-50">
      
      <div className="flex items-center gap-3">
        <div className="font-mono text-xl md:text-2xl tracking-tight text-primary">
          ~/nitigya
        </div>

        <div className="lg:hidden h-2 w-2 bg-green-500 rounded-full animate-pulse" title="Available"></div>
      </div>

      <div className="hidden md:flex items-center space-x-8 font-sans text-sm uppercase tracking-widest text-secondary">
        <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
        <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
        <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
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
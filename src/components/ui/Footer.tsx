export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t-4 border-strong bg-base py-8 px-4 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono text-xl font-bold text-primary tracking-tight">
            ~/max
          </span>
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">
            © {new Date().getFullYear()} // ALL_RIGHTS_RESERVED
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-secondary">
          <div className="w-2 h-2 rounded-full bg-accent-main animate-pulse shadow-[0_0_8px_var(--theme-accent-glow)]"></div>
          <span>sys.status: online</span>
        </div>

        <button
          onClick={scrollToTop}
          className="px-4 py-2 border-2 border-strong bg-surface text-primary font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:[filter:var(--skill-glow)] rounded-micro-curve active:translate-y-0 active:translate-x-0 cursor-pointer"
        >
          [ RETURN_TO_TOP ]
        </button>
        
      </div>
    </footer>
  );
}
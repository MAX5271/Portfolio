import GlyphGrid from "./GlyphGrid";

function HeroSection() {
  return (


    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-20 gap-12 lg:gap-24 max-w-7xl mx-auto">
      <div className="w-full lg:w-auto flex-1 max-w-2xl space-y-8 z-10">

        {/* Name and description */}
        <p className="font-mono text-accent-main tracking-[0.3em] uppercase text-xs md:text-sm">
          // Systems Engineer & Developer
        </p>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-primary tracking-tighter leading-[0.9]">
          NITIGYA <br /> <span className="text-secondary">Chandel.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-muted max-w-md leading-relaxed font-light">
          Building robust, full-stack applications with a focus on user
          experience and optimized performance.
        </p>


        <div className="flex gap-4 pt-4">
          {/* Navigation to project section */}
          <a
            href="#projects"
            className="px-6 py-3 md:px-8 border-2 border-btn-work-border bg-btn-work-bg text-btn-work-text font-mono text-xs md:text-sm font-bold transition-all active:translate-y-1 active:translate-x-1 [filter:var(--skill-glow)] hover:[filter:none] hover:bg-transparent hover:text-primary rounded-micro-curve"
          >
            [ VIEW_WORK ]
          </a>

          {/* Navigation to telemetry section */}
          <a
            href="#telemetry"
            className="px-6 py-3 md:px-8 border-2 border-btn-contact-border bg-btn-contact-bg text-btn-contact-text font-mono text-xs md:text-sm font-bold transition-all active:translate-y-1 active:translate-x-1 [filter:var(--skill-glow)] hover:[filter:none] hover:border-primary hover:bg-white/5 rounded-micro-curve"
          >
            CONTACT.exe
          </a>
        </div>
      </div>

      {/* Grid for the Kanji shown */}
      <div className="w-full max-w-md flex-shrink-0 relative border border-subtle bg-surface flex flex-col shadow-2xl overflow-hidden group aspect-square [filter:var(--matrix-glow)] rounded-structural-curve">

        {/* The outer layer of the grid */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-subtle bg-elevated">

          {/* Three buttons giving it a mac like theme */}
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-strong group-hover:bg-red-500 transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-strong group-hover:bg-yellow-500 transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-strong group-hover:bg-green-500 transition-colors"></div>
          </div>

          {/* Left showing title of the grid */}
          <p className="font-mono text-[10px] text-primary tracking-widest">
            max.matrix_render_v2
          </p>
        </div>

        {/* The trailing and randomly generated Kanji grid */}
        <div className="flex-1 w-full h-full flex items-center justify-center p-2">
          <GlyphGrid />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
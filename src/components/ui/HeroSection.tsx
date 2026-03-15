import GlyphGrid from "./GlyphGrid";

function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
      <div className="max-w-3xl space-y-6">
        <p className="font-mono text-accent-main tracking-[0.3em] uppercase text-xs">
          // Systems Engineer & Developer
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9]">
          NITIGYA <br /> <span className="text-secondary">Chandel.</span>
        </h1>
        <p className="font-sans text-xl text-secondary max-w-md leading-relaxed font-light">
          Building robust, full-stack applications with a focus on user
          experience and optimized performance.
        </p>
        <div className="flex gap-6 pt-4">
          <button className="px-8 py-3 bg-primary text-surface font-mono text-sm font-bold hover:bg-accent-main transition-colors">
            [ VIEW_WORK ]
          </button>
          <button className="px-8 py-3 border border-subtle text-primary font-mono text-sm hover:border-primary transition-colors">
            CONTACT.exe
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-96 mt-12 md:mt-0">
        <GlyphGrid />
      </div>
    </section>
  );
}

export default HeroSection;

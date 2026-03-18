import { useState } from "react";
import nectarImg from "../../assets/nectar.png";
import gamevaultImg from "../../assets/gamevault.png";

const PROJECTS = [
  {
    id: "gamevault",
    title: "GameVault",
    stack: "MERN Stack",
    description:
      "A full-stack application for tracking and managing video game collections. Engineered with React, Express, and a highly optimized MongoDB aggregation pipeline.",
    image: gamevaultImg,
    livelink: "https://game-vault-cyan.vercel.app",
    src: "https://github.com/MAX5271/GameVault",
  },
  {
    id: "nectar",
    title: "Nectar",
    stack: "PERN Stack + AI",
    description:
      "An AI-powered diet planner utilizing PostgreSQL, Express, React, and Node.js for dynamic macro tracking and intelligent meal generation.",
    image: nectarImg,
    livelink: "https://nectar-tau.vercel.app",
    src: "https://github.com/MAX5271/Nectar",
  },
];

export default function ProjectShelf() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 md:px-12 lg:px-24">
      <div className="w-full mb-12 flex justify-between items-end border-b border-subtle pb-6">
        <h2 className="text-5xl font-display font-black text-primary tracking-tighter">
          Personal_Projects.
        </h2>
        <p className="font-mono text-secondary text-sm hidden md:block uppercase tracking-widest">
          // 2025 - 2026
        </p>
      </div>

      <div 
        className="flex flex-col md:flex-row w-full h-[700px] md:h-[600px] gap-2"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {PROJECTS.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={project.id}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setActiveIndex(index);
              }}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`relative overflow-hidden rounded-sm cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-subtle bg-surface ${
                isActive ? "flex-[4] md:flex-[5]" : "flex-1"
              }`}
            >
              <div className="absolute inset-0 z-0 bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive ? "opacity-80 grayscale-0" : "opacity-40 grayscale"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-transparent"></div>
              </div>
              <div
                className={`absolute inset-0 z-10 p-6 md:p-12 flex flex-col justify-end transition-opacity duration-700 delay-100 ${
                  isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="max-w-xl">
                  <p className="font-mono text-accent-main text-xs md:text-sm mb-3 tracking-[0.2em] uppercase">
                    // {project.stack}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none whitespace-nowrap">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 md:px-6 bg-white text-black font-mono text-xs md:text-sm font-bold hover:bg-neutral-200 transition-colors"
                    >
                      [ VIEW_LIVE ]
                    </a>
                    <a
                      href={project.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 md:px-6 border border-white text-white font-mono text-xs md:text-sm hover:bg-white/10 transition-colors"
                    >
                      SOURCE.exe
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`absolute inset-0 z-10 p-6 flex flex-col items-center justify-center transition-opacity duration-500 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <h3
                  className="text-2xl font-black text-neutral-400 tracking-widest uppercase md:rotate-180 whitespace-nowrap [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]"
                >
                  {project.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
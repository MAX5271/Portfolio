import {
  DatabaseIcons,
  FrameworkIcons,
  LanguageIcons,
  ToolIcons,
} from "../../utils/icons";
import SkillButton from "../buttons/SkillButton";

// Skill set array for different skills
const SKILL_CATEGORIES = [
  {
    title: "~/languages",
    data: LanguageIcons,
    theme: "text-skill-lang",
    themeVar: "[filter:var(--shadow-skill-lang)]",
  },
  {
    title: "~/frameworks",
    data: FrameworkIcons,
    theme: "text-skill-frame",
    themeVar: "[filter:var(--shadow-skill-frame)]",
  },
  {
    title: "~/developer_tool",
    data: ToolIcons,
    theme: "text-skill-tool",
    themeVar: "[filter:var(--shadow-skill-tool)]",
  },
  {
    title: "~/databases",
    data: DatabaseIcons,
    theme: "text-skill-database",
    themeVar: "[filter:var(--shadow-skill-database)]",
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16 border-b-4 border-strong pb-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-primary tracking-tighter uppercase">
          Technical_Skills.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

        {/* Skill array map for different skill sections */}
        {SKILL_CATEGORIES.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-6">

        {/* Heading */}
            <h3
              className={`${category.theme} font-mono uppercase tracking-widest text-sm border-b-2 border-strong pb-3 font-bold`}
            >
              {category.title}
            </h3>

            {/* Skill buttons */}
            <div className="flex flex-wrap gap-3">
              {category.data.map((skill, index) => (
                <SkillButton
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                  themeVar={category.themeVar}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

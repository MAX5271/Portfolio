import { DatabaseIcons, FrameworkIcons, LanguageIcons, ToolIcons } from "../../utils/icons";
import SkillButton from "../buttons/SkillButton";

// 1. The Data Payload
// We map the titles directly to their respective arrays to completely eliminate repetitive JSX.
const SKILL_CATEGORIES = [
  { title: "~/languages", data: LanguageIcons },
  { title: "~/frameworks", data: FrameworkIcons },
  { title: "~/developer_tools", data: ToolIcons },
  { title: "~/databases", data: DatabaseIcons },
];

function Skills() {
  return (
    <section className="py-24 px-8 md:px-24">
      
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-display font-black text-primary tracking-tighter">
          Technical_Skills.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        
        {SKILL_CATEGORIES.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            
            <h3 className="text-secondary font-mono uppercase tracking-widest text-sm border-b border-subtle pb-3">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.data.map((skill, index) => (
                <SkillButton key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
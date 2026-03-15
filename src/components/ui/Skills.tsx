import { DatabaseIcons, FrameworkIcons, LanguageIcons, ToolIcons } from "../../utils/icons";
import SkillButton from "../buttons/SkillButton";

function Skills() {
  return (
    <div className="grid grid-cols-10 gap-y-8 p-6">
      
      <h1 className="text-primary font-display text-5xl font-black tracking-tighter col-span-10">
        Technical Skills.
      </h1>
      <div className="col-span-10 flex flex-col gap-4 p-4">
        <h3 className="text-secondary font-mono uppercase tracking-widest text-2xl">
          ~/languages:
        </h3>
        
        <div className="flex flex-wrap gap-4 p-2">
          {LanguageIcons.map((skill, index) => (
            <SkillButton key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>

      </div>
        
        <div className="col-span-10 flex flex-col gap-4 p-4">
        <h3 className="text-secondary font-mono uppercase tracking-widest text-2xl">
          ~/frameworks:
        </h3>
        
        <div className="flex flex-wrap gap-4 p-2">
          {FrameworkIcons.map((skill, index) => (
            <SkillButton key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>

      </div>

      <div className="col-span-10 flex flex-col gap-4 p-4">
        <h3 className="text-secondary font-mono uppercase tracking-widest text-2xl">
          ~/developer tools:
        </h3>
        
        <div className="flex flex-wrap gap-4 p-2">
          {ToolIcons.map((skill, index) => (
            <SkillButton key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>

      </div>

      <div className="col-span-10 flex flex-col gap-4 p-4">
        <h3 className="text-secondary font-mono uppercase tracking-widest text-2xl">
          ~/databases:
        </h3>
        
        <div className="flex flex-wrap gap-4 p-2">
          {DatabaseIcons.map((skill, index) => (
            <SkillButton key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Skills;
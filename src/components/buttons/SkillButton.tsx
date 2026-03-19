// Interface defining the Skill button requirements
interface SkillButtonProps {
    name: string;
    icon: string;
    themeVar:string;
}

function SkillButton({ name, icon,themeVar }: SkillButtonProps) {
  return (
    <div className={`flex justify-center items-center bg-[#121212] text-[#fafafa] border-subtle hover:bg-[#1e1e1e] hover:border-strong duration-200 rounded-structural-curve px-4 py-2 cursor-pointer ${themeVar}`}>
      <span className={`${icon} text-2xl`}></span>
      <span className="ml-2 text-[#fafafa]">{name}</span>
    </div>
  )
}

export default SkillButton
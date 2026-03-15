interface SkillButtonProps {
    skill: string;
    icon: string;
}

function SkillButton({ skill, icon }: SkillButtonProps) {
  return (
    <div className="flex justify-center items-center h-8 w-24 bg-surface text-primary border-subtle hover:bg-elevated hover:border-strong duration-200 rounded-md px-4 py-2 cursor-pointer">
      <span className={`${icon} text-2xl`}></span>
      <span className="ml-2 text-primary">{skill}</span>
    </div>
  )
}

export default SkillButton
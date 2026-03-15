interface SkillButtonProps {
    name: string;
    icon: string;
}

function SkillButton({ name, icon }: SkillButtonProps) {
  return (
    <div className="flex justify-center items-center bg-surface text-primary border-subtle hover:bg-elevated hover:border-strong duration-200 rounded-md px-4 py-2 cursor-pointer">
      <span className={`${icon} text-2xl`}></span>
      <span className="ml-2 text-primary">{name}</span>
    </div>
  )
}

export default SkillButton
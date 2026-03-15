function Header() {
  return (
    <div className="bg-surface text-primary border-b border-subtle h-14 flex items-center justify-between">
      <div className=" px-8 font-code text-2xl tracking-wider">~/nitigya</div>
      <div className="flex items-center space-x-4 px-8">
        <a href="#projects" className="text-secondary hover:text-primary duration-200">Projects</a>
        <a href="#skills" className="text-secondary hover:text-primary duration-200">Skills</a>
        <a href="#contact" className="text-secondary hover:text-primary duration-200">Contact</a>
      </div>
      <div className="flex flex-row items-center justify-center text-secondary hover:text-primary duration-200 px-8 cursor-pointer">
        <div className="h-[9px] w-[9px] mt-1 mr-1 font-medium bg-green-500 rounded-full mr-1"></div>
        available for work
        </div>
    </div>
  );
}

export default Header;

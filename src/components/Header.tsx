import { List } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  onSidebarOpened(): any;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full py-5 flex flex-row items-center justify-between flex bg-gray-700 border-b border-gray-600 px-5 lg:px-0 lg:justify-center">
      <Logo/>
      <div className="lg:hidden">
        <List 
          size={40} 
          className="right-1 hover:cursor-pointer"
          onClick={props.onSidebarOpened}
        />
      </div>
    </header>
  )
}
import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  onSidebarOpened(): any;
  sidebarOpened: boolean;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full py-5 flex flex-row items-center justify-between flex bg-gray-700 border-b border-gray-600 px-5 lg:px-0 lg:justify-center">
      <Logo/>
      <div className="lg:hidden flex flex-row items-center">
        <p
          className="text-sm"
        >
          Aulas
        </p>
        {!props.sidebarOpened ? (
          <List 
            size={40} 
            className="right-1 hover:cursor-pointer text-green-400"
            onClick={props.onSidebarOpened}
          />
        ) : (
          <X 
            size={40} 
            className="right-1 hover:cursor-pointer text-gray-200"
            onClick={props.onSidebarOpened}
          />
        )}
      </div>
    </header>
  )
}
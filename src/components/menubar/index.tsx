import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import logoImg from '/logo.jpg'
import { Menu } from 'lucide-react'

export function Menubar() {
  return (
    <nav className="flex items-center justify-between gap-y-3 mb-4 py-3">
      <a href="/" className="bg-slate-200 rounded-xl">
        <img className="max-h-11 max-w-24 rounded-xl" src={logoImg} alt="" />
      </a>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="bg-white p-2 rounded-full shadow-md"
            type="button"
            aria-label="Customise options"
          >
            <Menu className="text-gray-600" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-white flex flex-col z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            sideOffset={5}
          >
            <DropdownMenu.Item asChild>
              <a
                href="#about"
                className="leading-10 underline-offset-4 px-2 py-[2px] rounded-md hover:bg-sky-400/20"
              >
                Sobre
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <a
                href="#downloads"
                className="leading-10 underline-offset-4 px-2 py-[2px] rounded-md hover:bg-sky-400/20"
              >
                Downloads
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <a
                href="/"
                className="leading-10 underline-offset-4 px-2 py-[2px] rounded-md hover:bg-sky-400/20"
              >
                Programação
              </a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  )
}

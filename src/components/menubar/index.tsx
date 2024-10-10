import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import logoImg from '/logo.jpg'
import { Menu } from 'lucide-react'

export function Menubar() {
  return (
    <nav className="flex items-center justify-between gap-y-3 mb-4 py-3 relative">
      <a href="/" className="bg-slate-200 rounded-xl">
        <img
          className="max-h-11 max-w-24 rounded-xl"
          src={logoImg}
          alt="Logo"
        />
      </a>

      <div className="hidden lg:block">
        <a
          href="#about"
          className="leading-10 underline-offset-4 px-2 py-[2px] lg:p-2.5 rounded-md hover:bg-sky-400/20"
        >
          Sobre
        </a>
        <a
          href="#downloads"
          className="leading-10 underline-offset-4 px-2 py-[2px] lg:p-2.5 rounded-md hover:bg-sky-400/20"
        >
          Downloads
        </a>
        <a
          href="/"
          className="leading-10 underline-offset-4 px-2 py-[2px] lg:p-2.5 rounded-md hover:bg-sky-400/20"
        >
          Programação
        </a>
      </div>

      <div className="lg:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="bg-white p-2 rounded-full shadow-md"
              type="button"
              aria-label="Menu"
            >
              <Menu className="text-gray-600" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white flex flex-col z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md"
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
      </div>
    </nav>
  )
}

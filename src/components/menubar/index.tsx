import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import logoImg from '/logo.jpg'
import { Menu } from 'lucide-react'

export function Menubar() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const handleNavigation = (path: string, hash: string) => {
    navigate(path, { replace: true })
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0) // Timeout to ensure the page fully loads
  }

  return (
    <nav className="flex items-center justify-between gap-y-3 mb-4 lg:mb-8 py-3 relative">
      <a href="/" className="bg-slate-200 rounded-xl">
        <img
          className="max-h-11 rounded-xl lg:max-h-14"
          src={logoImg}
          alt="Logo"
        />
      </a>

      <div className="hidden lg:block">
        <button
          type="button"
          onClick={() => handleNavigation('/#about', '#about')}
          className="leading-10 underline-offset-4 px-2 py-[2px] lg:p-2.5 rounded-md hover:bg-sky-400/20"
        >
          Sobre
        </button>
        <button
          type="button"
          onClick={() => handleNavigation('/#downloads', '#downloads')}
          className="leading-10 underline-offset-4 px-2 py-[2px] lg:p-2.5 rounded-md hover:bg-sky-400/20"
        >
          Downloads
        </button>
        <button
          type="button"
          onClick={() => navigate('/programacao')}
          className="leading-10 underline-offset-4 px-2 py-[2px] lg:p-2.5 rounded-md hover:bg-sky-400/20"
        >
          Programação
        </button>
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
              className="bg-white flex flex-col items-start z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md"
              sideOffset={5}
            >
              <DropdownMenu.Item asChild>
                <button
                  type="button"
                  onClick={() => handleNavigation('/#about', '#about')}
                  className="leading-10 underline-offset-4 px-2 py-[2px] w-full text-start rounded-md hover:bg-sky-400/20"
                >
                  Sobre
                </button>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <button
                  type="button"
                  onClick={() => handleNavigation('/#downloads', '#downloads')}
                  className="leading-10 underline-offset-4 px-2 py-[2px] w-full text-start rounded-md hover:bg-sky-400/20"
                >
                  Downloads
                </button>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <button
                  type="button"
                  onClick={() => navigate('/programacao')}
                  className="leading-10 underline-offset-4 px-2 py-[2px] w-full text-start rounded-md hover:bg-sky-400/20"
                >
                  Programação
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  )
}

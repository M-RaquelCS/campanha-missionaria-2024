import logoImg from '/logo.jpg'

export function Menubar() {
  return (
    <nav className="flex items-center justify-center gap-y-3 mb-4 py-3 max-sm:flex-col">
      <a href="/" className="bg-slate-200 rounded-xl">
        <img className="max-h-10 max-w-24 rounded-xl" src={logoImg} alt="" />
      </a>
      <div className="flex justify-between">
        <a
          href="#about"
          className="leading-10 underline underline-offset-4 px-2 rounded-md hover:bg-cyan-600/80"
        >
          Sobre
        </a>
        <a
          href="#downloads"
          className="leading-10 underline underline-offset-4 px-2 rounded-md hover:bg-cyan-600/80"
        >
          Downloads
        </a>
        <a
          href="/cronograma"
          className="leading-10 underline underline-offset-4 px-2 rounded-md hover:bg-cyan-600/80"
        >
          Programação
        </a>
      </div>
    </nav>
  )
}

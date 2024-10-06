import logoImg from '/logo.jpg'

export function Menubar() {
  return (
    <nav className="flex items-center justify-center gap-2 mb-4 py-3 ">
      <a href="/" className="bg-slate-200 rounded-xl">
        <img className="h-10 w-24 rounded-xl" src={logoImg} alt="" />
      </a>
      <a
        href="/"
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
    </nav>
  )
}

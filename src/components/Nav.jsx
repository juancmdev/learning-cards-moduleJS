const links = ["Inicio","Verbo To Be", "Verbo To Have", "Pronombres Personales"];

export default function Nav() {
  return (
    <nav className="bg-blue-500 flex items-center justify-around p-4">
        {links.map((link, index) => <button className="rounded cursor-pointer p-2 bg-amber-200">{link}</button>)}
    </nav>
  )
}

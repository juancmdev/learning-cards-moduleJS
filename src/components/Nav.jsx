const links = ["Verbo To Be", "Verbo To Have", "Pronombres Personales"];

export default function Nav() {
  return (
    <nav className="bg-blue-500 flex items-center justify-around p-4">
        {links.map((link, index) => <h3>{link}</h3>)}
    </nav>
  )
}

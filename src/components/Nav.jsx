import { NavLink } from "react-router";

const links = [
  "Inicio",
  "Verbo To Be",
  "Verbo To Have",
  "Pronombres Personales",
];
const pages = ["home", "VerbToBe", "VerbToHave", "PersonalPronouns"];

export default function Nav() {
  return (
    <nav className="bg-blue-500 flex items-center justify-around p-4">
      {/* {links.map((link, index) => (
        <button className="rounded cursor-pointer p-2 bg-amber-200">
          {link}
        </button>
      ))} */}
      {links.map((link, index) => (
        <button className="rounded cursor-pointer p-2 bg-amber-200">
          <NavLink
            key={index}
            to={pages[index]}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {link}
          </NavLink>
        </button>
      ))}
    </nav>
  );
}

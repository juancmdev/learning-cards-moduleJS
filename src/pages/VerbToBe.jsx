const tobeDb = [
  {
    front: "Yo soy",
    back: "I am",
    example: "Yo soy estudiante.",
  },
  {
    front: "Tú eres",
    back: "You are (informal)",
    example: "Tú eres mi amigo.",
  },
  {
    front: "Él es",
    back: "He is",
    example: "Él es médico.",
  },
  {
    front: "Ella es",
    back: "She is",
    example: "Ella es profesora.",
  },
  {
    front: "Usted es",
    back: "You are (formal)",
    example: "Usted es muy amable.",
  },
  {
    front: "Nosotros somos",
    back: "We are",
    example: "Nosotros somos familia.",
  },
  {
    front: "Ellos son",
    back: "They are (masculine)",
    example: "Ellos son amigos.",
  },
  {
    front: "Ellas son",
    back: "They are (feminine)",
    example: "Ellas son estudiantes.",
  },
  {
    front: "Ustedes son",
    back: "You all are",
    example: "Ustedes son muy inteligentes.",
  }
]

export default function VerbToBe() {
  return (<>
    {tobeDb.map((item, index) => (<div key={index} className="w-72 h-48 mt-1 bg-amber-500 border-3 border-black-500">
      <div className="card-front">
        <h2>{item.front}</h2>
        <p>{item.example}</p>
      </div>
      <div className="card-back">
        <h2>{item.back}</h2>
        <p>{item.example}</p>
      </div>
    </div>))}
  </>);
}

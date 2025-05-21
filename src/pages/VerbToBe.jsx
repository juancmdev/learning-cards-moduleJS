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
    {/*  */}
      
      <div className="grid grid-cols-3 gap-4 m-4">
        {tobeDb.map(item => (
          <div className="card w-60 h-60 bg-amber-500 " key={item.front}>
            <div className="card-front border-2 border-black h-30 flex items-center justify-center">
              <h2 className="text-3xl">{item.front}</h2>
            </div>
            <div className="card-back">
              <h2>{item.back}</h2>
              <p>{item.example}</p>
            </div>
          </div>
        ))}
      </div>
      
    {/* </div>)} */}
  </>);
}

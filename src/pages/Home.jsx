import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl p-2">Tarjetas de Estudio</h1>
      <div className="container w-full mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Verbo To Be</h2>
            <p>Descripción del verbo To Be.</p>
          </div>
          <div className="bg-green-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Verbo To Have</h2>
            <p>Descripción del verbo To Have.</p>
          </div>
          <div className="bg-red-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Pronombres Personales</h2>
            <p>Descripción de los pronombres personales.</p>
          </div>
        </div>
      </div>
    </>
  );
}

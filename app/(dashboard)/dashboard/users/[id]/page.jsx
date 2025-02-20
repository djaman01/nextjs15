import React from 'react'

//Quand on extrait params, ça doit forcement etre une async function sinon ça fait uen erreur dans le terminale, meme si ça marche
const page = async ({params}) => {
  const {id} = await params;
  return (
    <h1 className="text-center text-3xl">USER: {id}</h1>
  )
}

export default page
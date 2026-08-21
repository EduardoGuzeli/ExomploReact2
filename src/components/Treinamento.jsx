import { useState } from "react"
  const Treinamento = ({id, nomeUsuario,emailUsuario,telefone}) => {
  const [contadorNota, setContadorNota] = useState(0);

  return (


   









    <>
    <h1>Nota do Paciente: {contadorNota}</h1>
      <button onClick={() => setContadorNota(contadorNota + 1)}>Aumentar Nota</button>
      <button onClick={() => setContadorNota(contadorNota - 1)}>Diminuir Nota</button>
    <p>Id do Usuário: {id}</p>
    <p>Nome do Usuário: {nomeUsuario}</p>
    <p>email do Usuário: {emailUsuario}</p>
    <p>telefone do Usuário: {telefone}</p>
  
    </>
  )
}

export default Treinamento

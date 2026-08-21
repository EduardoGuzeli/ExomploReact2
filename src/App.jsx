import Aluno from "./components/Aluno"
import Contador from "./components/Contador"
import Curso from "./components/Curso"
import Dados from "./components/Dados"
import Treinamento from "./components/Treinamento"

const App = () => {
  return (







    
    <>
      <Aluno nome="Fiap" idade="30"/>
      <Dados usuario="Dev" email="dev@email.com"/>
      <Contador/>
      <Treinamento id="01" nomeUsuario="Eduardo" emailUsuario="edu@gmail.com" telefone="11 91212-1212"/>
      <Curso nome1="Lucas" descricao="paciente esta triste" data="31/12/2007"/>
    </>
  )
}

export default App

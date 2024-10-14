import './App.css'
import Produto from './components/Produto'

function App() {

  return (
    <>
      <Produto descontoProduto={true}/>
      <Produto descontoProduto={false}/>
    </>
  )
}

export default App

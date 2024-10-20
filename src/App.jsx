import './App.css'
import { Button } from './componets/Button'
function App() {

  const buttonText = "Count : ";

  return (
    <>
      <h1>CONTADOR DE CINCO EN CINCO</h1>
      <Button text = {buttonText} />
    </>
  )
}

export default App
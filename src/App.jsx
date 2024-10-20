import './App.css'
import { Button } from './componets/Button'
function App() {

  const buttonText = "Count : ";

  return (
    <>
      <h1>Incrementar y Decrementar con Números Random</h1>
      <Button text = {buttonText} />
    </>
  )
}

export default App
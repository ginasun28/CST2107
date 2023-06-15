import './App.css'
import ControlledForm from './components/ControlledForm/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'

function App() {

  return (
    <div className='main'>
      <ControlledForm />
      <hr />
      <UncontrolledForm />

    </div>
    
  )
}

export default App

import './App.css'
import AdminButton from './components/AdminButton'
import Agendamento from './components/Agendamentos'

function App() {
  return (
    <>
      <div>
        <div className='adminbar'
              style={{position: 'absolute', left: '5%', top:'10%'}}>
          <AdminButton/>
        </div>
        <h2>FAST BARBER</h2>
        <Agendamento/>
      </div>
     
    </>
  )
}

export default App

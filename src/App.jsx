import './App.css'
import { MainRouter } from './Routes/MainRouter'
import { appRoutes } from './Routes/appRoutes'

function App() {
 
  return (
    <>
      <MainRouter  routes={appRoutes}/>
    </>
  )
}

export default App

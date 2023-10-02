import { Spiner } from "./components/Spiner";
import { Header } from "./components/layout/Header"
import { AppRouter } from "./router/AppRouter"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <Spiner />
      <AppRouter>
        
      </AppRouter>
        
    </>
  )
}

export default App

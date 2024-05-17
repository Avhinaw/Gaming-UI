import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Rules from './components/Rules'
import Modes from './components/Modes'
import Profile from './components/Profile'
import Game from './components/Game';



const App = () => {
  return(
    <div className='bg-[#1c1b1b] h-screen w-screen py-1 overflow-x-hidden flex gap-5'>
      <Header />

      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/modes" element={<Modes />} />
        <Route path="/rules" element={<Rules/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>

    </div>
  )
}


export default App

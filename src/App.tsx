/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import './App.css'
import AskedQuestions from './Componets/AskedQuestions'

import MoviesShow from './Componets/MoviesShow'
import Navbar from './Componets/Navbar'
import StrangerThings from './Componets/StrangerThings'
import Tv from './Componets/Tv'
import Footer from './Componets/Footer'

export type jaons = {
  title: string
  para: string,
  Watch: string
  P: string,
  childpara: string,
  child: string
  strengthings: string
  strengthingspara: string
  sign: string
}

interface MyContextType {
  json: jaons
  setjson: Dispatch<SetStateAction<jaons>>
}
const defultstate = {
  json: {
    title: '',
    para: '',
    Watch: '',
    P: '',
    childpara: '',
    child: '',
    strengthings: '',
    strengthingspara: '',
    sign: ''
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setjson: () => {}
} as MyContextType
                                                                                                                                                                                                                      
// Create the context
const data = createContext(defultstate);
function App() {

  const [json, setjson] = useState<jaons>({
    title: '',
    para: '',
    Watch: '',
    P: '',
    childpara: '',
    child: '',
    strengthings: '',
    strengthingspara: '',
    sign: ''
  })




  return (
    <>
      <div className=' container mx-auto'>
        <data.Provider value={{ json, setjson }}>
          <Navbar />
          <Tv />
          <MoviesShow />
          <StrangerThings />
          <AskedQuestions />
          <Footer />
        </data.Provider>

      </div>
    </>
  )
}

export default App
export { data }

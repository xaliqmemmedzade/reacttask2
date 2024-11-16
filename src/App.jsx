import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from '../../components/products'
import Basket from '../../components/basket'

function App() {
  const [cardList, setCardList] = useState([])

  return (
    <section>
     <Products
     cardList={cardList} 
     setCardList={setCardList}
     />
     <Basket
      cardList={cardList} 
      setCardList={setCardList}/>
    </section>
  )
}

export default App

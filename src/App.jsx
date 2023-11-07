
import { useState } from 'react'
import Navbar from './Component/Navbar'
import NewsBoard from './Component/NewsBoard'
import Newsitem from './Component/Newsitem'

const App = () => {
  const[category,setcategory]= useState('General')
  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
      
    </div>
  )
}

export default App

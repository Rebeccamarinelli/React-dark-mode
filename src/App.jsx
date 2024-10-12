import { post } from "./data/data"
import Btn from "./components/Btn/Btn"
import Card from "./components/Card/Card"
import { useEffect, useState} from "react"


function App() {

  const saveMode = ()=>{
    if(localStorage.getItem('theme')){
      return localStorage.getItem('theme')
    }
  }

 const [theme, setTheme] = useState(saveMode() || 'light-mode')
 
  const changeTheme = ()=>{
    if(theme === 'light-mode'){
      setTheme('dark-mode')
    }else{
      setTheme('light-mode')
    }
  }

  useEffect(()=>{
      document.body.className = theme;
      document.body.querySelectorAll('.card').forEach((el)=>{
        el.className = `card ${theme}`;
      });
      localStorage.setItem('theme', theme)
  }, [theme])

  

  console.log(theme)

  return (
    <>
     <div className="container">
      <Btn change = {changeTheme} theme = {`button ${theme}`}/>
      {post.map((post)=>(
          <Card key={post.id} {...post}/>
      ))}

      
     </div>
    </>
  )
}

export default App

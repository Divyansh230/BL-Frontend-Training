import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createContext } from "react";
import ChildA from "./components/ChildA";
const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div className='container' style={{backgroundColor:theme==='light'?'beige':'black'}}><ChildA/></div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export {ThemeContext}

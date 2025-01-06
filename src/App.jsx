import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CounterApp from "./pages/CounterApp";
import Contact from "./pages/contact";
import ThemeChange from "./pages/ThemeChange";
import TodoList from "./pages/TodoList";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="counterApp" element={<CounterApp/>} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="themechange" element={<ThemeChange/>}/>
            <Route path="todoApp"element={<TodoList/>}/>
            
            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App;
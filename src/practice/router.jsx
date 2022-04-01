import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"


const App = () => {
    return(
        <div>
            <Router>
                <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/about/:id" element={<About/>} />
                    
                </Routes>
            </Router>

        </div>
    )
}
export default App
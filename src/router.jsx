

import Home from "./App.jsx"

import Details from "./Details.jsx"

import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

const App = () => {

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/details/:id" element={<Details/>} />
                </Routes>
            </Router>
        </div>
    )
}


export default App
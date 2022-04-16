

import Home from "./App.jsx"

import Details from "./Details.jsx"

import Add from "./Addproducts.jsx"

import Load from "./load.jsx"

import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

const App = () => {

    return(
        <div>
            <Router>
                <Routes>


                    <Route path="/mart" element={<Home/>} />

                    <Route path="/mart/details/:name" element={<Details/>} />

                    <Route path="/mart/add" element={<Add/>} />

                    <Route exact path="/mart/loader" element={<Load/>} />


                </Routes>
            </Router>
        </div>
    )
}


export default App
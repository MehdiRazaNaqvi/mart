import { useNavigate } from "react-router-dom"


const App = () => {
    let navigate = useNavigate();
const name = "mehdi"
    return(
        <div>
            <h1>
                Home
                <button onClick={() => navigate(`/about/mehdi`) }>Name print krwao</button>
                
            </h1>
        </div>
    )
}


export default App
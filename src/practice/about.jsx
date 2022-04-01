import { useParams } from "react-router-dom";

const App = () => {

    const { id } = useParams()
    console.log(id);
    
    return(
        <div>
            <h1>
                About
            </h1>
        </div>
    )
}


export default App
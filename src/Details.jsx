import { useParams, Link } from "react-router-dom"
import { connect } from 'react-redux';


const Details = (props) => {


    const { id } = useParams()
    console.log(props.state)

    return (
        <div>
            <h1>{id}</h1>
            <Link to="/" >Go Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state : state.products
})

export default connect(mapStateToProps , null) (Details)
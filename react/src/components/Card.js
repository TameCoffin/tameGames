import { Link } from "react-router-dom"

const Card =(props)=> {

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`/images/${props.cover}`} alt={props.gameName} className="img-fluid image card-img card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title text-captialize"> 
                        <Link to={`/${props.endpoint}/${props.id}`}>
                            {props.game_title}
                        </Link></h3>
                        <p className="card-text display-3">{props.genre}</p>
                </div>
                <footer className="card-footer">
                        <p className="card-text price">Price ${props.price}</p>
                            <button className="btn btn-danger cart-btn">Add to Cart</button>
                </footer>
            </div>
        </div>
    )
}

export default Card
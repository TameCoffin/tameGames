import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const GamePage =()=> {

    const [ games, setGame ] = useState({})
    const params = useParams

    const url = `http://localhost:3005/api/games/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setGame(res.data))
    }, [])

    return (
        <main className="main" id="gamePageBody">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="text-capitalize game-title">{games.game_title}</h2>
                        <img src={`/images/${games.cover}`} alt={games.game_title} />
                    </div>
                    <div className="col-6">
                    <ul className="list-group">
                            <li className="list-group-item text-capitalize">Developer/Company: {games.developer_title || games.company_title || `${games.fName} ${games.lastName}`}</li>
                            <li className="list-group-item text-capitalize">year released: {album.yr_released}</li>
                            <li className="list-group-item">${album.price}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
import { useState, useEffect } from "react"
import axios from "axios"

import Card from "./Card"

const Store =()=> {

    const [ games, setGames] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3005/api/games')
            .then(res => {
                setGames(res.data)
            })
    }, [])

    const gameCards = games.map(games =>{
        return <Card 
            key={games.game_id}
            id={games.game_id}
            title={games.game_title}
            cover={games.cover}
        />
    })

    return (
        <main className="main" id="storeMain">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {gameCards}
                </div>
            </div>
        </main>
    )
}

export default Buy
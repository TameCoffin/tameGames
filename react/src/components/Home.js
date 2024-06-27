
import { useState, useEffect } from "react"
import axios from "axios"

import Card from "./Card"

const Home =()=> {

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

    console.log(gameCards);

    return (
        <main className="main" id="storeMain">
            <div className="container">
                <h2>Games</h2>
                <div className="row">
                    {gameCards}
                </div>
            </div>
        </main>
    )
}

export default Home
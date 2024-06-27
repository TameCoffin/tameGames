import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Error404 from './components/Error404'
import Buy from './components/Buy'

const App =()=> {

    const [ games, setGames ] = useState([])
    const [ users, setUsers ] = useState([])
    const [ formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    })

    useEffect(()=> {
        const url = 'http://localhost:3005/api/games'

        axios.get(url).then(res => setGames(res.data))
    }, [])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/users'

        axios.get(url).then(res => setUsers(res.data))
    }, [])

    const handleChange =(event)=> {

        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(regex.test(formData.password) === false) {
            alert('Password not valid.\nMust contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character\n-at leaset 8 charcters')
        } else {
            axios({
                // console.log("Axios Success")
            })
        }
    }

        return(
            <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="*" element={ <Error404 /> } />
            </Routes>
            </>
        )
}

export default App
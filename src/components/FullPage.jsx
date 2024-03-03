import React from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const FullPage = () => {
    return (
        <>
            <div id='Home'><Home /></div>
            <div id='Projects'><Projects /></div>
            <div id='About'><About /></div>
            <div id='Contact'><Contact /></div>
        </>
    )
}

export default FullPage
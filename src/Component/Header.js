import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    let nav={
        position:"sticky",
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={nav}>
                <div className="container-fluid">
                    <img src="logo.png" height={"60px"} width={"100px"} alt={"Img"} id="logo"/>
                    <h1 className="navbar-brand"><b>{props.title}</b></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#logo"><b>Home</b></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

Header.defaultProps = {
    title: "Yours Title Here",
}

Header.propTypes = {
    title: PropTypes.string
}
import React from 'react'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid px-5">
                <a className="navbar-brand text-white fw-bold" href="#">Dragon Ball</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <a className="nav-link active text-white" aria-current="page" href="#">Personajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Poderes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Esferas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Villanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
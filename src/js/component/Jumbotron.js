import React from 'react'

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 ">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-center ">Welcome to Dragon Ball</h1>
                <p className="col-md-12 fs-4 ">It is a martial arts series full of fantastic techniques and creatures with superhuman powers. The protagonists sometimes die and are resurrected thanks to the power of the Dragon Balls.</p>
                <button className="btn btn-primary btn-lg" type="button">Dragon button</button>
            </div>
        </div>
    )
}

export default Jumbotron
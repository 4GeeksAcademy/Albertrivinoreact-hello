import React from 'react'

const Card = ({ image, title, description }) => {
    return (
        <>
            <div className="card text-center mb-3 h-100" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt="..." />
                <div className="card-body d-flex flex-column" style={{ flex: "1 1 auto" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary mt-auto">Ver personaje</a>
                </div>

            </div>
        </>
    )
}

export default Card
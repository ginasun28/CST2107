import './Card.css'

const Card = ({ data }) => {
    return (
        <div className="card-container">
            <div className="card-avatar">
                <img className='avatar' src={data.avatar} alt="" />
            </div>
            <div className="card-body">
                <span className="name">
                    {data.first_name} {data.last_name}
                </span>
                <p className="email">
                    {data.email}
                </p>
            </div>
        </div>
    )
}

export default Card;
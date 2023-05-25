/* eslint-disable react/prop-types */
import './HotelCard.css'

const HotelCard = ({data}) => (
    <div className="card-container">
        <div className="card-header">
            <img src={data.image} alt="" />
        </div>
        <div className="card-body">
            <img width='20px' src="" alt="" />
            <span>{data.rating}</span>
            <img src="" alt="" />
            <span>{data.like}</span>
            <span>Location: {data.location}</span>
        </div>
        <p>Price: {data.price}</p>
    </div>
)

export default HotelCard;
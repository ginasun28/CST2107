/* eslint-disable react/prop-types */

import HotelCard from "../HotelCard/HotelCard";
import './HotelInfo.css'


const HotelInfo = ({ data }) => {
    // console.log(data, 'data');
    return (
        <div className="hotel-card-container">
            {
                data.map((hotelData, index) => {
                    return <HotelCard key={index} data={hotelData} />
                })
            }
        </div>
    )
}

export default HotelInfo;
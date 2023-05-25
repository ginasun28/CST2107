/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import './CardInfo.css';

// catch directly object from array
const CardInfo = ({ data }) => {
    // console.log(data, 'data')
    return (
        <div className='card-data-container'>
            {
                data.map((cardData) => {
                    return <Card data={cardData} />
                })
            }
            
        </div>
    )
}

export default CardInfo;
import { FaStar, FaLocationArrow } from 'react-icons/fa';
import hotels from './../json/hotel.json'

type Image = {
    id: number
    img: string
    alt: string
}

// type Hotel = {
//     name: string
//     stars: number
//     location: string
//     ratingAverage: number,
//     ratingCount: string
// }

const getStars = (stars: number) => {

    let starRate = [];

    for (let index = 0; index < stars; index++) {
        starRate.push(<FaStar className='overview__icon-star' />)
    }

    return starRate
}

const Main = () => {
    return (
        <main className="hotel-view">
            <div className="gallery">
                {hotels.images.map((hotel: Image, i: number) => (
                    <figure className="gallery__item" key={i}>
                        <img src={require(`../img/${hotel.img}`).default} alt={hotel.alt} className="gallery__photo" />
                    </figure>
                ))}
            </div>

            <div className="overview">
                <div className="overview__heading">
                    {hotels.name}
                </div>
                <div className="overview__stars">
                    {getStars(hotels.stars)}
                </div>
                <div className="overview__location">
                    <FaLocationArrow className='overview__icon-location' />
                    <button className="btn-inline">{hotels.location}</button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating-average">{hotels.ratingAverage}</div>
                    <div className="overview__rating-count">{hotels.ratingCount}</div>
                </div>
            </div>

            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        {hotels.description}
                    </p>
                    <p className="paragraph">
                        {hotels.description}
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Free wifi in all rooms</li>
                        <li className="list__item">air conditioning and heating</li>
                        <li className="list__item">Pet friendly</li>
                        <li className="list__item">Perfect for families</li>
                    </ul>

                    <div className="recommend">
                        <div className="recommend__count">
                            Lucy and 3 other friends recommend this hotel
                        </div>

                        <div className="recommend__friends">
                            <img src="./../img/user-1.jpg" alt="Test" />
                        </div>
                    </div>
                </div>
                <div className="user-reviews">
                </div>
            </div>

        </main>
    )
}

export default Main

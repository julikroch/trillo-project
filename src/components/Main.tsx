import { Fragment } from 'react';
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

            {hotels ?
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
                : <Fragment />
            }

        </main>
    )
}

export default Main

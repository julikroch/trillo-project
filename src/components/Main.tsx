import { FaStar } from 'react-icons/fa';
import hotels from './../json/hotel.json'

const getStars = (stars: number) => {

    let starRate = [];

    for (let index = 0; index < stars; index++) {
        starRate.push(<FaStar />)
    }

    return starRate
}

const Main = () => {
    return (
        <main className="hotel-view">
            <div className="gallery">
                {hotels.images.map((hotel: any) => (
                    <figure className="gallery__item">
                        <img src={require(`../img/${hotel.img}`).default} alt={hotel.alt} className="gallery__photo" />
                    </figure>
                ))}
            </div>

            <div className="overview">
                <div className="overview__heading">
                    {hotels.name}
                </div>
                <div className="overview__stars">
                    {getStars(5)}
                </div>
            </div>
        </main>
    )
}

export default Main

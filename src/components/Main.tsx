import { useState } from 'react';
import { FaStar, FaLocationArrow, FaChevronRight } from 'react-icons/fa';
import hotels from './../json/hotel.json'

type Image = {
    id: number
    img: string
    alt: string
}

type PersonImages = {
    id: number
    img: string
    alt: string
}

type Item = {
    id: number
    text: string
}

type Hotel = {
    name: string
    stars: number
    location: string
    ratingAverage: number
    ratingCount: string
    description: string
    reviews: string
    images: Image[]
    items: Item[]
    personImages: PersonImages[]
}

const getStars = (stars: number) => {
    let starRate = [];

    for (let index = 0; index < stars; index++) {
        starRate.push(<FaStar className='overview__icon-star' />)
    }

    return starRate
}

const Main = () => {

    const [hotel] = useState<Hotel>(hotels)

    const {
        name,
        location,
        ratingAverage,
        ratingCount,
        stars,
        description,
        reviews,
        images,
        items,
        personImages
    } = hotel

    return (
        <main className="hotel-view">
            <div className="gallery">
                {images.map((image: Image, i: number) => (
                    <figure className="gallery__item" key={i}>
                        <img src={require(`../img/${image.img}`).default} alt={image.alt} className="gallery__photo" />
                    </figure>
                ))}
            </div>

            <div className="overview">
                <div className="overview__heading">
                    {name}
                </div>
                <div className="overview__stars">
                    {getStars(stars)}
                </div>
                <div className="overview__location">
                    <FaLocationArrow className='overview__icon-location' />
                    <button className="btn-inline">{location}</button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating-average">{ratingAverage}</div>
                    <div className="overview__rating-count">{ratingCount}</div>
                </div>
            </div>
            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        {description}
                    </p>
                    <p className="paragraph">
                        {description}
                    </p>
                    <ul className="list">
                        {items.map((item: Item) => (
                            <li className="list__item" key={item.id}> <FaChevronRight className="list__icon" />{item.text}</li>
                        ))}
                    </ul>
                    <div className="recommend">
                        <div className="recommend__count">
                            Lucy and 3 other friends recommend this hotel
                        </div>
                        <div className="recommend__friends">
                            {personImages.map((image: PersonImages, i: number) => (
                                <img key={i} src={require(`../img/${image.img}`).default} alt={image.alt} className="recommend__photo" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="user-reviews">
                    {reviews}
                </div>
            </div>
        </main>
    )
}

export default Main

import { useState } from 'react';
import { FaStar, FaLocationArrow, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import hotels from './../json/hotel.json'

interface Image {
    id: number
    img: string
    alt: string
}
interface Item {
    id: number
    text: string
}

interface Reviews {
    id: number,
    img: string,
    alt: string
    description: string
    name: string
    date: string
    rating: number
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
    personImages: Image[],
    personReviews: Reviews[]
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
        images,
        items,
        personImages,
        personReviews
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
                            {personImages.map((image: Image, i: number) => (
                                <img key={i} src={require(`../img/${image.img}`).default} alt={image.alt} className="recommend__photo" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="user-reviews">
                    {personReviews.map((review: Reviews) => (
                        <figure className="review">
                            <blockquote className="review__text">
                                {review.description}
                            </blockquote>
                            <figcaption className="review__user">
                                <FaQuoteLeft className="review__quote" />
                                <img src={require(`../img/${review.img}`).default} alt={review.alt} className="review__photo" />
                                <div className="review__user-box">
                                    <p className="review__user-name">{review.name}</p>
                                    <p className="review__user-date">{review.date}</p>
                                </div>
                                <div className="review__rating">{review.rating}</div>
                            </figcaption>
                        </figure>
                    ))}
                    <button className="btn-inline">Show all<span>&rarr;</span></button>
                </div>
            </div>
        </main>
    )
}

export default Main

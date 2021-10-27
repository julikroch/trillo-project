import { FaHome, FaPlane, FaCar, FaMap } from 'react-icons/fa';
import { IconType } from 'react-icons'

const Navigation = () => {

    type MenuItem = {
        id: number;
        icon: IconType | string;
        active: boolean;
        label: string;
    }

    const items: MenuItem[] = [
        {
            id: 1,
            icon: FaHome,
            active: true,
            label: 'Hotel'
        },
        {
            id: 2,
            icon: FaPlane,
            active: false,
            label: 'Flight'
        },
        {
            id: 3,
            icon: FaCar,
            active: false,
            label: 'Car Rental'
        },
        {
            id: 4,
            icon: FaMap,
            active: false,
            label: 'Tours'
        }
    ]

    return (
        <nav className="sidebar">
            <ul className="side-nav">
                {items.map((item: MenuItem) => (
                    <li key={item.id} className={item.active ? "side-nav__item side-nav__item--active" : "side-nav__item"}>
                        <a href="!#" className="side-nav__link">
                            <item.icon className="side-nav__icon" />
                            <span>{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="legal">
                &copy; 2021 by Trillo. All rights reseved.
            </div>
        </nav>
    )
}

export default Navigation

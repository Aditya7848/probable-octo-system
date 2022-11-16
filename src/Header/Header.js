import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import './Header.css';

const Header = () => {

    return (<div className="container">

        <div className='header_icon_box'>
            <StoreIcon className="header_icon_image" fontSize="large"/>
            <h2 className="header_name">eKart</h2>
        </div>

        <div className="header_search">
            <input type="text" className="header_search_input" placeholder="Search for products, brands and more..." />
        </div>

        <div className="header_nav">

            <div className="nav_item">
                <span className="nav_item_one">Hello guest</span>
                <span className="nav_item_two">Login</span>
            </div>
            <div className="nav_item">
                <span className="nav_item_one">Your</span>
                <span className="nav_item_two">Shop</span>
            </div>
            <div className="nav_item_box_three">
                <span className="nav_item_one" ><ShoppingBasketIcon /></span>
                <span className="nav_item_two">0</span>
            </div>
            
        </div>


    </div>)
}

export default Header;
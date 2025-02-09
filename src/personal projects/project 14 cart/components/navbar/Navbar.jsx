import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
const Navbar = () => {
    const { amount } = useGlobalContext();


    return (
        <nav>
            <div className="nav-center">
                <Link to="/">
                    <img src="https://react-reducer.netlify.app/favicon.png" alt="logo" className="logo" />
                </Link>
                <div className="nav-header">
                    <Link to="/cart">
                        <FaShoppingBag className="cart-icon" />
                        <span className="cart-total">amount={amount}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

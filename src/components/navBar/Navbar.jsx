import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* language */}
          <div className="item">
            <img
              src="./language.png"
              alt="language"
              style={{ height: "15px" }}
            />
            <KeyboardArrowDownIcon />
          </div>

          {/* usd */}
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          {/* Links */}
          <div className="item">
            <Link className="link" to="/products/1">
              Woman
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            AnxiousKart
          </Link>
        </div>

        <div className="right">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            About
          </Link>
          <Link className="link" to="/">
            Contacts
          </Link>
          <Link className="link" to="/">
            Stores
          </Link>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />

            <div className="cartIcon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "bootstrap/dist/css/bootstrap.min.css";
import IconCompare from "../css/img/icon-compare.svg";
import Wishlist from "../css/img/icon-heart.svg";
import Cart from "../css/img/IconCart.svg";
import Account from "../css/img/icon-user.svg"

export default function HeaderMain() {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center h">
      <div className="col-sm-2">
        <img
          src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png"
          alt="nest logo"
        ></img>
      </div>

      <div class="col-sm-5 d-flex align-items-center">
  <div class="input-group">
    <input
      class="form-control px-4"
      type="search"
      placeholder="Search for products..."
      aria-label="Search"></input>
    
    <span class="input-group-text border-none"><i class="fa-solid fa-magnifying-glass"></i></span>
  </div>
</div>

      {/* profile */}

      <div className="col-sm-5">
        <div className="d-flex justify-content-end align-items-center px-3">
       
          <div className="d-flex align-self-end px-3">
            <img src={IconCompare} />
            <h6>compare</h6>
          </div>

          <div className="d-flex align-items-center px-3">
            <img src={Wishlist} />
            <h6>Wishlist</h6>
          </div>

          <div className="d-flex align-self-end px-3">
            <img src={Cart} />
            <h6>Cart</h6>
          </div>

          <div className="d-flex align-items-center px-3">
            <img src={Account} />
            <h6>Account</h6>
          </div>
        </div>
      </div>

    </div>
  );
}

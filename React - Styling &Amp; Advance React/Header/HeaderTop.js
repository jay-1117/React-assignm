import 'bootstrap/dist/css/bootstrap.min.css';


export default function HeaderTop() {
  return (
    <div className=".container-fluid d-flex justify-content-between head-top h ">
      <div className="col-sm-4">
        
        <ul className="head-link d-flex align-items-center">
            <li className='fs fw-normal pt-2'>About us  |  </li>
            <li className='fs fw-normal px-2 pt-2'>My Account  | </li>
            <li className='fs fw-normal px-2 pt-2'>Wishlist  | </li>
            <li className='fs fw-normal pt-2'>Order Tracking</li>            

        </ul>
      </div>  

      <div className="col-sm-4">

        <ul className="head-link d-flex">
            <li className="head-li fs-10 fw-semibold pt-2">100% Secure delivery without contacting the courier</li>
            {/* <li>Supper Value Deals - Save more with coupons</li>
            <li>Trendy 25silver jewelry, save up 35% off today </li> */}
            
        </ul>
      </div>

      <div className="col-sm-3">

        <ul className="head-link d-flex">
            <li className="head-li fs-10 fw-ligh pt-2">Need help? Call Us: +1800900122 |</li>
            <li className="head-li fs-10 fw-light pt-2"><a className="fs list" href="#">English | <i class="fa-solid fa-caret-down |" ></i></a>
            </li>
            <li className='fs-10 fw-light pt-2'><a className="fs list" href="#">INR<i class="fa-solid fa-caret-down"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

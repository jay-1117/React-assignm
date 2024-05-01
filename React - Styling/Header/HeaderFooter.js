import grid from "../css/img/icons8-grid-2-24.png"

export default function HeaderFooter() {

    return(
<div className="container-fluid d-flex justify-content-between align-items-center  h">

    <div className="col-sm-2 col-cat">
        <div>
            <span className="foot-first"><img src={grid} /></span>
            <span className="foot-first">Browse</span>
            <span className="foot-first">All Categories</span>
        </div>

    </div>


    <div className="col-sm-7">
        
            <ul className="d-flex head-link align-items-center">
                <li className="px-3">Deals</li>
                <li className="px-3">Home</li>
                <li className="px-3">About</li>
                <li className="px-3">Shop</li>
                <li className="px-3">Vendors</li>
                <li className="px-3">Mega menu</li>
                <li className="px-3">Blog</li>
                <li className="px-3">Pages</li>
                <li className="px-3">Contact</li>

            </ul>
        
    </div>

<div className="col-sm-2">
    <span className="fs-1"><i class="fa-solid fa-headphones"></i></span>
    <span className="fs-2 mx-1">1900 - 888
        <br>
        </br>
    </span>
    <span className="mx-5">24/7 Support Center</span>
        
</div>

</div>
    )
}
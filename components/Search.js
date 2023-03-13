import Ratings from "./Ratings";
import Image from "next/image";
import Navbar from "./Navbar";
import {images} from "next/dist/build/webpack/config/blocks/images";

function Search({name, address, rating, num_reviews, photo, timezone,reviews,snippet}) {


    // const myLoader=({src})=>{
    //     return `${photo.images.medium.url}`;
    // }

    console.log(photo.images)
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>{address}</p>
                <div className="image-container">
                    {/*<Image loader={myLoader} src={photo.images.medium.url} width={600} height={500}/>*/}
                </div>
                <p className="card-text">
                    {snippet}
                    <br/>
                    <Ratings rating={rating}/> {num_reviews} reviews
                    <br/>
                </p>
            </div>
        </div>
    )
}

export default Search
import Ratings from "./Ratings";
import Image from "next/image";
import Navbar from "./Navbar";

function Posts({name, address, rating, num_reviews, photo, timezone,reviews,snippet}) {
    return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{address}</p>
                    <div className="image-container">
                        <Image loader={() => photo.images.large.url} src={photo.images.large.url} width={600} height={500}/>
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

export default Posts
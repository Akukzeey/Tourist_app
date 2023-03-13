import {FaStar} from "@react-icons/all-files/fa/FaStar";

function Ratings({rating}) {


    const renderRating = () => {
        return [1, 2, 3, 4, 5].map(
            loop => {
                if (parseInt(rating) <= loop) {
                    return <FaStar className="star-yellow" key={loop}/>
                } else return <FaStar className="star-grey" key={loop}/>
            }
        ).reverse()
    }

    return(
        renderRating()
    )
}

export default Ratings
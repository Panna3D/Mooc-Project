import { useState } from "react";
import Rate from "../Rate";


const Rating = () => {
    const [rating, setRating] = useState(0);

    return (
        <>
            <div>
                <Rate 
                    rating = {rating} 
                    onRating = {(rate) => setRating(rate)}
                />
            </div>

            <div>
                <p>Rating: {rating}</p>
            </div>
        </>
    )
}

export default Rating;
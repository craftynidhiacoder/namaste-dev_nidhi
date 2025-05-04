import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3529786&lng=83.0076014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                    {const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                        console.log(filteredList);
                     setlistOfRestaurants(filteredList);
                    }
                    }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default Body;
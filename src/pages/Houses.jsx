import "./../css/Houses.css";
import {useState, useEffect} from "react";
import axios from "axios";
import House from "../components/House.jsx";

const Houses = () => {

    const [houses, setHouses] = useState([]);


    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("http://localhost:3001/api/houses/");
            setHouses(response.data);
        };

        loadHouses();
    },[]);


    return (
        <main id="houses" className="main-content">
            <h1>HOUSES</h1>
            <div className="house">

                {houses.map((house) => (
                    <House 
                        key={house._id} 
                        id={house._id}
                        name={house.name} 
                        size={house.size}
                        bedrooms={house.bedrooms} 
                        bathrooms={house.bathrooms}
                        main_image={house.main_image}

                    />
                ))}

            </div>
        </main>
        
    )
};

export default Houses;
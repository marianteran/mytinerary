import React,{useEffect, useState} from "react";
import axios from 'axios';

import Button from "@mui/material/Button";
import InformationCity from "../components/InformationCity";
import Itinerary from "../components/Itinerary";

import {useStateValue} from "../core/context/StateProvider"
import { useParams } from "react-router-dom";


import fondo1 from '../imagen/fondos/fondoslidercity.jpg'
import Carousel2 from "../components/Carousel2";



const City = () => {
    const [itineraries, setItineraries]=useState([])
    const{id}= useParams()
    const [{cities}, dispatch]= useStateValue()
    const citySelect= cities.filter(item=>item._id === id)

    //console.log(itineraries)

     
    useEffect(() => {
        window.scrollTo(0, 0);

        
        citySelect.map(city=> 
        
          axios.get(`https://mytinerary-marianela.herokuapp.com/api/itinerary/${city.city}`)
          .then(response =>setItineraries(response.data.response.itinerary))
          )
    
      }, [])

      //console.log(itineraries)


    return (
        <>
            <main className="city">

                <InformationCity citySelect={citySelect} />
                {/* <InformationCity  /> */}

                <div className="container mt-5 mb-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="titlepage text-center ">
                                <h2>Main attractions</h2>
                            </div>
                        </div>
                    </div>
                </div>
              
              {/* original */}
                <Itinerary itineraries={itineraries} />

                {/* otra forma */}

                {/* <Itinerary citySelect={citySelect} /> */}


                {/* <Itinerary />*/}
               



            <div className="text-center" >
            <Carousel2 cities={cities} />

            </div>


           


            </main>
        </>
    );

};

export default City;

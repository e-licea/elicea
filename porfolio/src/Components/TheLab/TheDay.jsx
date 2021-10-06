import React, { useEffect, useContext, useState } from 'react'


//context
import { appContext } from '../Context/appContext';
import { getGeolocationInfo } from '../utils/requests';




export default function TheDay() {

    const location = useContext(appContext).location
    const setLocation = useContext(appContext).setLocation
    const userLocation = useContext(appContext).userLocation
    const setUserLocation = useContext(appContext).setUserLocation


    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      async function success(pos) {
        var crd = pos.coords;
      
        await setLocation({lat: crd.latitude, lon: crd.longitude})
        await setUserLocation(await getGeolocationInfo(location))
        console.log(userLocation)
      }
      
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }


    useEffect(async () => {
      
        if (navigator.geolocation) {
            navigator.permissions
              .query({ name: "geolocation" })
              .then(function (result) {
                if (result.state === "granted") {
                    
                  //If granted then you can directly call your function here
                  return navigator.geolocation.getCurrentPosition(success);
                } else if (result.state === "prompt") {
                  navigator.geolocation.getCurrentPosition(success, errors, options);
                } else if (result.state === "denied") {
                  //If denied then you have to show instructions to enable location
                  setLocation('denied')
                }
                result.onchange = function () {
                  console.log(result.state);
                };
              });
          } else {
            alert("Sorry Not available!");
          }
    }, [])

    return (
        <div id = 'TheDay'>
          
            They Day
          
        </div>
    )
}

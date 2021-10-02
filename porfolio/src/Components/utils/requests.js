import axios from 'axios'

//heroku deploy api baseUrl

export async function getContributions(){
    const requestConfig = {
        method: 'get',
        url: 'https://online-port-api.herokuapp.com/api/scrapers/contributions',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }

    return await axios.request(requestConfig)
    .then(res=>{
        return res.data.contributions
    })
    .catch(err=>{
        return err
    })
}

export async function getGeolocationInfo(location){
    const { lon, lat} = location;
    const authKey = 'fbdbbaee055943e884d61422210210'
    const requestConfig = {
        method: 'get',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        params: {
            key: authKey,
            q: `${lat},${lon}`
        },
        url: `http://api.weatherapi.com/v1/current.json`,
    }

    return await axios.request(requestConfig)
    .then(res=>{
        console.log(res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
        return err
    })

}
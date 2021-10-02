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
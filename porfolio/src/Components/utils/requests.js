import axios from 'axios'


export async function getContributions(){
    const requestConfig = {
        method: 'get',
        url: 'http://localhost:5002/api/scrapers/contributions',
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
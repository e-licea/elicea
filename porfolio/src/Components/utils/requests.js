import axios from 'axios'

//heroku deploy api baseUrl
const nodeBaseURL = 'https://portfolio-api-nodejs.herokuapp.com'
const flaskBaseURL = 'https://portfolio-api-flask.herokuapp.com/api'

export async function getContributions(){
    const requestConfig = {
        method: 'get',
        baseURL: nodeBaseURL,
        url: '/api/scrapers/contributions',
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
            q: await lat !== ''?`${lat},${lon}`:'London'
        },
        url: `http://api.weatherapi.com/v1/current.json`,
    }

    return await axios.request(requestConfig)
    .then(res=>{
        //console.log(res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
        return err
    })

}

export async function getArticles(){
    const requestConfig = {
        method: 'get',
        baseURL: flaskBaseURL,
        url: '/client/articles',

    }
    return await axios.request(requestConfig)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err
    })
}

export async function getArticleContent(id){
    const requestConfig = {
        method: 'get',
        baseURL: flaskBaseURL,
        url: `/client/articles/${id}` ,

    }
    return await axios.request(requestConfig)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        console.log(err)
        //no articles found, returns empty array
        return []
    })
}

export async function searchArticles(query){
    const requestConfig = {
        method: 'get',
        baseURL: flaskBaseURL,
        url: `/search/articles/${query}`
    }

    return await axios.request(requestConfig)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
}
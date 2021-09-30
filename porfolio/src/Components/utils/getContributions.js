const cheerio = require('cheerio');
const axios = require('axios');


 async function getContributions(){
    const url = 'https://github.com/e-licea'
    let contributions = []
    let results

    await axios.get(url)
    .then(async res=>{
        const $ = await cheerio.load(res.data);
        results =  $
    }).catch(err=>{
        console.log(err)
    })

    return results
}



console.log(getContributions())

module.exports = getContributions;

//for (let i =0; i < contributionsDays.length; i++){
//  let obj = {}
//    obj.date = contributionsDays[i].attributes[7]
//    obj.count = contributionsDays[i].attributes[8]
//
//    contFinalData.push(obj);
//}
import React, { useContext,useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Context/appContext'
import { getArticleContent, getArticles } from '../utils/requests'
import githubDark from '../../img/icons/dark/github.png'
import githubLight from '../../img/icons/light/github.png'

export default function TheLabNavigation() {

    const articles = useContext(appContext).articles 
    const setArticles = useContext(appContext).setArticles
    const focusedArticle = useContext(appContext).focusedArticle
    const setFocusedArticle = useContext(appContext).setFocusedArticle
    const darkMode = useContext(appContext).darkMode

    useEffect(async() => {

        setArticles(await getArticles())
        //get latest articles
        let _latestArticles = await articles.reverse()
        if(_latestArticles.length > 7){
            _latestArticles = await _latestArticles.slice(0,9)
        }
        setLatestArticles(await _latestArticles)
         

    }, [focusedArticle])

    const [latestArticles, setLatestArticles] = useState([])

    async function SwitchFocusedArticle(e){
        e.preventDefault()
        console.log(e)
        let url = await e.target.attributes[0].nodeValue
        return await setFocusedArticle( await getArticleContent(url))

    }

    async function backToHome(e){
        e.preventDefault();
        return await setFocusedArticle({article_content: [], article_details: {}})
    }

    return (
        <div  id="theLab-navigation">
            
            <ul>
            <li><Link onClick = {backToHome}  to = '/the-lab' >Home</Link></li>
            <li><Link onClick = {backToHome}  to = '/the-lab' >Article Index</Link></li>
            <h6 className = 'navigationHeader'>Latest Articles</h6>
                {
                    latestArticles.length >0?
                        //get only 7 latest articles
                        latestArticles.map(article=>{
                            return <li><Link 
                                onClick = {SwitchFocusedArticle} 
                                url ={`${article.url}`}   
                                id = {`${article.id}`} 
                                to = {`/articles/${article.url}`} 
                                >{article.title}</Link></li>
                        })
                    :<img src = '' alt = 'loading' />
                }
            {/* <h6 className = 'navigationHeader'>Featured Articles</h6>
                {
                    articles.length >0?
                    articles.map(article=>{
                        return <li><Link onClick = {onClick} url ={`${article.url}`}   id = {`${article.id}`} to = {`/articles/${article.url}`} >{article.title}</Link></li>
                    })
                    :<img src = '' alt = 'loading' />
                } */}

            <h6 className = 'navigationHeader'>Social Media</h6>
            <div className="social-media">
                <a href="https://github.com/e-licea" target='_blank'><img src={darkMode? githubLight:githubDark}  alt="" /></a>
            </div>
            </ul>

        </div>
    )
}


const labNavLinks=[
    {
        id: 1,
        a: 'Getting Started with Pi Zero',
        path: '/articles/getting-started-with-pi-zero'
    },
    {
        id: 2,
        a: 'Learning Code for Beginners',
        path: '/articles/learning-code-for-beginners'
    },
    {
        id: 3,
        a: '',
        path: '/articles/getting-started-with-pi-zero'
    },
    {
        id: 4,
        a: 'Persistence and Databases',
        path: '/articles/persistence-and-databases'
    },
    {
        id: 5,
        a: 'Basic Bash Commands',
        path: '/articles/basic-bash-commands'
    }
]
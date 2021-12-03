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
    const [latestArticles, setLatestArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(async() => {

        setArticles(await getArticles())
        //get latest articles
        let _latestArticles = await articles.reverse()
        if(_latestArticles.length > 7){
            _latestArticles = await _latestArticles.slice(0,9)
        }
        setLatestArticles(await _latestArticles)
        setLoading(false) 

    }, [loading])


    async function SwitchFocusedArticle(e){
        e.preventDefault()
        let id = e.target.id
        let articleContent = await getArticleContent(id)
        return await setFocusedArticle(await articleContent)

    }

    async function backToHome(e){
        e.preventDefault();
        return await setFocusedArticle({article_content: [], article_details: {}})
    }

    return (
        <div  id="theLab-navigation">
            
            <ul>
            <li onClick = {backToHome}><Link to = '/the-lab' >Home</Link></li>
            <li ><Link  to = '/the-lab/article-index' >Article Index</Link></li>
            <h6 className = 'navigationHeader'>Latest Articles</h6>
                {
                    !loading?
                        //get only 7 latest articles
                        latestArticles.map(article=>{
                            return <li onClick = {SwitchFocusedArticle} key = {article.id}><Link 
                                id = {`${article.id}`} 
                                to = {`/the-lab/documents/${article.id}`} 
                                >{article.title}</Link></li>
                        })
                    :<img src = '' alt = 'loading' />
                }
            <h6 className = 'navigationHeader'>Social Media</h6>
            <div className="social-media">
                <a href="https://github.com/e-licea" target='_blank'><img src={darkMode? githubLight:githubDark}  alt="" /></a>
            </div>
            </ul>

        </div>
    )
}


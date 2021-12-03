import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../Context/appContext';
import { getArticleContent, searchArticles } from '../utils/requests';


export default function TheSearch() {
    const setFocusedArticle = useContext(appContext).setFocusedArticle
    const [articlesSearched, setArticlesSearched] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    useEffect(async() => {
        
        if (searchQuery !== ''){
            const articlesSearched = await searchArticles(searchQuery);
            setArticlesSearched(articlesSearched);
        }


    }, [onChange, searchArticles])

    function onChange(e){
        e.preventDefault();
        setSearchQuery(e.target.value)
        if(e.target.value!== ''){
            setArticlesSearched([])
        }
    }

    async function SwitchFocusedArticle(e){
        e.preventDefault()
        let id = e.target.id 
        let articleContent = await getArticleContent(id)
        return await setFocusedArticle(await articleContent)

    }
    
    return (
        <div id = 'TheSearch'>
            <input 
                className = 'inputBar'
                type="text"
                value = {searchQuery}
                onChange = {onChange}
                placeholder= 'the Lab...' 
            />
            <span className = 'button-48'><span className = 'text'>Search</span></span>
            {
                articlesSearched.length > 0?
                <ul>
                    {
                        articlesSearched.map(art=>{
                            return <li onClick ={SwitchFocusedArticle} key = {art.id}><Link 
                            id = {art.id}
                            to ={`/the-lab/documents/${art.id}`}
                            >{art.title}</Link></li>
                        })
                    }
                </ul>
                :
                null
            }
        </div>
    )
}

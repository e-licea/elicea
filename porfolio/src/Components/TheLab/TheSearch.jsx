import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { appContext } from '../Context/appContext';
import { getArticleContent, searchArticles } from '../utils/requests';


export default function TheSearch() {
    const setFocusedArticle = useContext(appContext).setFocusedArticle
    const [articlesSearched, setArticlesSearched] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const history = useHistory()


    async function onChange(e){
        e.preventDefault();
        setSearchQuery(e.target.value)
        if (searchQuery !== ''){
            const articlesSearched = await searchArticles(searchQuery);
            setArticlesSearched(articlesSearched);
        }
    }

    function clearSearch(e){
        e.preventDefault()
        setSearchQuery('')
        return setArticlesSearched([])
    }

    async function SwitchFocusedArticle(e){
        e.preventDefault()
        let id = e.target.id 
        let articleContent = await getArticleContent(id)
        await setFocusedArticle(await articleContent)
        return await history.push(`/the-lab/documents/${id}`)
    }
    


    return (
        <div id = 'TheSearch'>
            <input 
                className = 'inputBar'
                type="text"
                autoComplete= 'off'
                list = 'articlesSearched'
                id = 'articlesSearched'
                value = {searchQuery}
                onChange = {onChange}
                placeholder= 'the Lab...' 
            />
            
            {
                articlesSearched.length > 0?
                <datalist id = 'articlesSearched'>
                    {
                        articlesSearched.map(art=>{
                            return <option id = {art.id} onClick ={SwitchFocusedArticle} value = {art.id} key = {art.id}>{art.title}</option>
                        })
                    }
                </datalist>
                :
                null
            }
            <span className = 'button-48'><span className = 'text'>Search</span></span>
            <span onClick ={clearSearch} className = 'button-48'><span className = 'text'>Clear</span></span>
        </div>
    )
}

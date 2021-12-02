import React, { useEffect, useState } from 'react';
import { searchArticles } from '../utils/requests';


export default function TheSearch() {
    const [articlesSearched, setArticlesSearched] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    useEffect(async() => {
        
        const articlesSearched = await searchArticles(searchQuery)
        //if no error, set articles to state.
        if(!articlesSearched.message){
            setArticlesSearched(articlesSearched)
        }

    }, [onChange, searchArticles])

    function onChange(e){
        e.preventDefault();
        setSearchQuery(e.target.value)
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
                            return <li id = {art.id}>{art.title}</li>
                        })
                    }
                </ul>
                :
                null
            }
        </div>
    )
}

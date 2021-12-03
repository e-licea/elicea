import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { appContext } from '../Context/appContext'
import { getArticleContent } from '../utils/requests'
import ArticleIndex from './ArticleIndex'
import FocusedArticle from './FocusedArticle'

import TheLabHome from './TheLabHome'

//components



export default function TheLabRender(props) {

    const focusedArticle = useContext(appContext).focusedArticle
    const setFocusedArticle = useContext(appContext).setFocusedArticle

    useEffect(async() => {
        if(window.location.pathname.includes('documents')){
            let article_id = window.location.pathname
            article_id = article_id.split()
            article_id = article_id[article_id.length-1]
            console.log(article_id)
        }
    }, [focusedArticle])
    
    return (
        <div id = 'theLab-render'>
            <Switch>
                <Route
                exact path='/the-lab'
                component = {TheLabHome}/>
                <Route
                exact path='/the-lab/article-index'
                component = {ArticleIndex}/>
                <Route
                path ={'/the-lab/documents/:id'}
                component ={FocusedArticle}/>
            </Switch>
        </div>
    )
}


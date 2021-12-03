import React, { useContext, useEffect } from 'react'
import { appContext } from '../Context/appContext'
import images from '../utils/images'
import Code from './Code'

export default function FocusedArticle() {

    const focusedArticle = useContext(appContext).focusedArticle



    
    return (
        <>
        <ArticleDetails article_details={focusedArticle.article_details}/>
        <CreateArticleContent article_content = {focusedArticle.article_content} /> 
        </>
    )
}


export function ArticleDetails(props){
    
    const { article_details } = props;

    return(
        <div className = 'article-details'>
            <h3>{article_details.title}</h3>
            <p> Written By: {article_details.author}</p>
            <p> Last Updated: {article_details.created_at}</p>

        </div>
    )
}



export function CreateArticleContent(props){

    const { article_content } = props;

    function onClick(e){
        e.preventDefault()
    }

    return(
        <>

            {
                article_content.map(content =>{

                    if(content.content_type == 'paragraph'){
                        return(
                            <>
                                {content.heading !== null? <h3 className = 'article-heading'>{content.heading}</h3>: null}
                                <span className = 'article-paragraph' dangerouslySetInnerHTML={{__html: `${content.content}`}}></span> 
                            </>
                        )
                    }else if(content.content_type == 'code'){
                        return <Code _html = {content.content}/>
                    }else if(content.content_type == 'image')
                        return <img className = 'article-image' src = {content.content} alt = ''/>
                })
            }
        </>
    )
}
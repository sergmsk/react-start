import React from 'react';
import Article from './Article';


export default function ArticleList({articles}){
    //console.log(props);
    //const articles = props.articles;
    const articleElements = articles.map((article) => <li key={article.id}><Article article={article}/></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}
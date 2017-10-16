import React , {Component} from 'react'
import Article from './Article'
import toggleAccordionOpenArticle from '../decorators/toggleAccordionOpenArticle'

 class ArticleList extends Component  {

     state = {
         openArticleId: null
     }
    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article={article}
                isOpen = {article.id === this.state.openArticleId}
                toggleOpen = {this.toggleAccordionOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
     toggleAccordionOpenArticle=(openArticleId) => ev => {
        if(openArticleId==this.state.openArticleId) openArticleId = null;
        this.setState({
            openArticleId
        })
    }
}

export default toggleAccordionOpenArticle(ArticleList);
//toggleAccordionOpenArticle
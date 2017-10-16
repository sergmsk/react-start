import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        openArticleId: null
    }
    render() {
        return <OriginalComponent
            {...this.props}
            {...this.state}
        />
    }
    toggleAccordionOpenArticle=(openArticleId) => ev => {
        if(openArticleId==this.state.openArticleId) openArticleId = null;
        this.setState({
            openArticleId
        })
    }

}
//делаем что-то в декораторе
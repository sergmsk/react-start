import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ArticlesChart extends Component {
    static propTypes = {};

    componentDidMount(){
        //d3 работает с this.refs.chart
    }
    render(){
        return(
            <div ref ='chart' />
        )
    }
}

export default ArticlesChart;
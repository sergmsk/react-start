import React, {Component} from 'react';
import CommentList from './CommentList'

export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
    }

    toggleOpenComments=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    getComments(){
        if(!this.state.isOpen) return null;
        const comments=this.props.comments;
        //console.log(comments);
        return <CommentList comments={comments}/>
    }

    render() {
        const comments=this.props.comments;
        const {isOpen} = this.state;
        //console.log(comments);
        return (
            <div>
                <button onClick={this.toggleOpenComments}>
                    {isOpen?'Скрыть комментарии':'Показать комментарии'}
                </button>
                {this.getComments()}
            </div>
        )
    }
}
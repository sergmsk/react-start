import React from 'react';

export default function CommentList (comments){

    const commentsElement = comments.comments.map((comment) =>
        <li key={comment.id}><h4>{comment.user}</h4>{comment.text}</li> );

    return (
        <ul>
            {commentsElement}
        </ul>
    )
}

import React from 'react'
import {render} from 'react-dom'
import Article from './Article.js';
import {articles} from './fixtures.js';

const  article = articles[0];

render(<Article article = {article}/>, document.getElementById('container'));

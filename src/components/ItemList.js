import React from 'react';
import Article from './Article';

const ItemList = (props) => {
    return (
        <div>
            {
                props.articles.map(article => <Article data={article} key={article.id} editArticle={props.editArticle} />)
            }
        </div>
    )
};

export default ItemList;
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const articlesReducer =(state = [], action) =>{
    switch(action.type){
        case 'ADD_ARTICLE':
            console.log('add');
            action.payload.id = Date.now();
            const newState = [...state, action.payload];
            return newState;
        case 'EDIT_ARTICLE':
            console.log('edit');
            const articleId = action.payload.id;
            return state.map(article => {
                if(article.id !== articleId) {
                    return article
                }
                return action.payload;
            });
        default:
            return state;
    }
};

const store = createStore(combineReducers({articles: articlesReducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;



ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById("root"));


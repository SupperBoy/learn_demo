import React, {Component} from 'react';
import {observer, inject, Provider} from 'mobx-react';
import store from './mobxStore';

import Home from './home.jsx';


@observer class App extends Component {
    constructor(props){
        super(props);
        console.error("===", store, store.num)
    }
    add(){
        store.increment();
    }
    remove(){
        store.decrement();
    }
    render(){
        console.error(store)
        return <Provider store={store} >
            <div>
                <span>{store.num}</span>
                <span>{this.a}</span>
                <button onClick={this.add.bind(this)} >+</button>
                <button disabled={store.isAllBanSpeak} onClick={this.remove.bind(this)} >-</button>
                <Home />
            </div>
        </Provider>
    }
}
export default App;
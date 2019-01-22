import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import store from './mobxStore';

@inject("store")
@observer 
class App extends Component {
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
        return <div>
            <span>{this.props.store.str}</span>
        </div>
    }
}
export default App;
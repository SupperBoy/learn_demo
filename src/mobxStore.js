import {observable, action} from 'mobx';

class mobxStore {
    @observable num = 1;
    @observable isAllBanSpeak = false;
    @observable str = 'default';

    @action increment (){
        console.error('111',this.num)
        this.num++
    }
    @action decrement(){
        this.num--
    }
    @action changeStr(){
        this.str = 'change'
    }
    @action chanegBanSpeak(obj){
        this.isAllBanSpeak = obj.isAllBanSpeak;
    }
}
let store =  new mobxStore();
export default store ;
function changeMsg(obj){
    this.currentTime = undefined;
    this.currentMsg = undefined;
    this.msgArr = obj.msgArr || undefined;
    this.textBox = obj.textBox || undefined;
}
var changeMsgPrototype = {
    updateTime: function(time){
        var currentTime = this.getCurrentTime(time);
        if(this.currentTime){
            if(this.currentTime != currentTime){
                this.currentTime = currentTime;
                this.getCurrentMsg();
                this.renderMsg()
            }
        }else{
            this.currentTime = currentTime;
            this.getCurrentMsg();
            this.renderMsg();
        }
    },
    getCurrentMsg: function(){
        var that = this;
        if(Array.isArray(this.msgArr)){
            this.msgArr.forEach(function(item,index){
                if(that.currentTime == item.begin_time){
                    that.currentMsg = item.result;
                }
            });
        }
    },
    getCurrentTime: function(time){
        var resultTime = undefined;
        if(Array.isArray(this.msgArr)){
            this.msgArr.forEach(function(item, index, arr){
                if(time >= item.begin_time){
                    resultTime = item.begin_time;
                }
            });
        }
        return resultTime;
    },
    renderMsg: function(){
        if(!this.currentMsg){
            console.error('currentMsg is not a defined, msg is ', this.currentMsg);
            return ;
        }
        if(!this.textBox){
            console.error('textBox is not a element, box is ', this.textBox);
            return ;
        }
        this.textBox.innerText = this.currentMsg;
    }
}
for(var i in changeMsgPrototype){
    changeMsg.prototype[i] = changeMsgPrototype[i]
}
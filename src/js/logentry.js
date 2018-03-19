/**
 * Created by Nic on 2018-03-17.
 */

class LogEntry {
    constructor(key, data){
        this.key = key;
        this.data = data;
    }

    get dataNoKey(){
        return this.removeKey();
    }

    removeKey() {
        return this.data.split(this.key).join("");
    }


}


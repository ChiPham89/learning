export default class Action {
    private type:string;

    constructor(type:string) {
        this.type = type;
    }

    public getType():string {
        return this.type;
    }
}
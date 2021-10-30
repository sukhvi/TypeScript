import { Finance } from "../interface/finance";

export class Invoice implements Finance {

    constructor( public toFrom:string, public details:string, public amoung:number){
    }

    result() {
        return `${this.toFrom} owed $${this.amoung} for ${this.details}`
    }

}
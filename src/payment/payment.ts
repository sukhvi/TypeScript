import { Finance } from "../interface/finance";

export class Payment implements Finance {
    constructor( public toFrom:string, public details:string, public amoung:number){}

    result() {
        return `${this.toFrom} owes $${this.amoung} for ${this.details}`
    }

}
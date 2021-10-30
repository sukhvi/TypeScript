export class Payment {
    constructor(toFrom, details, amoung) {
        this.toFrom = toFrom;
        this.details = details;
        this.amoung = amoung;
    }
    result() {
        return `${this.toFrom} owes $${this.amoung} for ${this.details}`;
    }
}

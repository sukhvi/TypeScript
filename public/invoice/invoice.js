export class Invoice {
    constructor(toFrom, details, amoung) {
        this.toFrom = toFrom;
        this.details = details;
        this.amoung = amoung;
    }
    result() {
        return `${this.toFrom} owed $${this.amoung} for ${this.details}`;
    }
}

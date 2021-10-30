import { Invoice } from "./invoice/invoice.js";
import { Listing } from "./listing/listing.js";
import { Payment } from "./payment/payment.js";
// Elements
const form = document.querySelector('#form');
const paymentType = document.querySelector('#paymentType');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Action
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.oninvalid)
        return false;
    let log;
    if (paymentType.value === "Payment") {
        log = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        log = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    let listing = new Listing();
    listing.render(paymentType.value, log.result(), "post");
    form.reset();
});

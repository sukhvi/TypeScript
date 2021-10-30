import { Invoice  } from "./invoice/invoice.js";
import { Listing } from "./listing/listing.js";
import { Payment } from "./payment/payment.js";

// Elements
const form = document.querySelector('#form') as HTMLFormElement;
const paymentType = document.querySelector('#paymentType') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// Action
form.addEventListener('submit',(event: Event) => {
    event.preventDefault();

    if(form.oninvalid) return false;
    
    let log;
    
    if(paymentType.value ==="Payment") {
        log = new Payment(toFrom.value,details.value,amount.valueAsNumber);
    } else {
        log = new Invoice(toFrom.value,details.value,amount.valueAsNumber);
    }
    let listing = new Listing();

    listing.render(paymentType.value,log.result(),"post");
    form.reset();
});



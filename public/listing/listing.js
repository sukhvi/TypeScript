export class Listing {
    constructor() {
    }
    render(listingType, content, pos = ('pre | post')) {
        const logger = document.querySelector('#loggerListing');
        const li = document.createElement('li');
        li.innerHTML = `<h2>${listingType}</h2><p>${content}</p>`;
        if (pos === "pre") {
            logger.prepend(li);
        }
        else {
            logger.append(li);
        }
    }
}

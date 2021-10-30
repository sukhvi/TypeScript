export class Listing{
    constructor(){

    }

    render(listingType:string,content: string, pos: string = ('pre | post')):void {

        const logger = document.querySelector('#loggerListing') as HTMLUListElement;
        const li = document.createElement('li');
        li.innerHTML = `<h2>${listingType}</h2><p>${content}</p>`;

        if(pos ==="pre") {
            logger.prepend(li)
        } else {
            logger.append(li)
        }

    }
}


//const main = document.getElementsbyTagName('body')[0];
//main.removeChild(body.querySelector())

const first = document.getElementsByTagName('body')[0];
first.removeChild(first.querySelector('main'))

const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "Isaiah is the champion"
newHeader.className = "victory"

// const newHeader2 = document.createElement('h1');
// newHeader.innerHTML = "<h1>victory <h1>"

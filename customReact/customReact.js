// function customRender(item, container) {
//    const domEle =  document.createElement(item.type)
//    domEle.innerHTML = item.Childran
//    domEle.setAttribute('href', item.props.href)
//    domEle.setAttribute('target', item.props.target)
   
//    container.appendChild(domEle)
// }

function customRender(item, container) {
    const domElement = document.createElement(item.type)
    domElement.innerHTML = item.Childran
    for (const prop in item.props) {
        if (prop === 'Childran')continue 
            domElement.setAttribute(prop, item.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href : 'http://google.com',
        target: '_blank'
    },
    Childran: 'click on the google..'
}



const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)


//Copy your url here
const publicSpreadSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOp71_xOmlKhUfqCOXLtI4IYy5-kRDrvXe6gnWqdKMCXFUGzWGXjBX6R_fQUxD4Ujoz6TS9SD214FG/pub?output=csv'

function init() {
    Papa.parse(publicSpreadSheetUrl , {
    download: true,
    header: false,
    complete: info
  })
}


window.addEventListener('DOMContentLoaded', init);



function info (resutl) { 
    const data = resutl.data

    for (let elem of data) {
        //Creating needed elements
        const art = document.createElement('article')
        const div = document.createElement('div')
        div.className = 'title'
        const spanName = document.createElement('span')
        spanName.innerText = elem[0]
        const spanPrice = document.createElement('span')    
        spanPrice.innerText = elem[2]
        spanPrice.className = 'price'    

        //Placing elements into HTML
        const root = document.querySelector('#root')
        root.append(art)
        art.append(div)
        div.append(spanName)
        div.append(spanPrice)
    }
}








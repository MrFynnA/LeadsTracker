let textinpt = document.querySelector('#input-el')
const button = document.querySelector('#input-btn')
const deletbtn = document.querySelector('#delete-btn')
const listleads = document.querySelector('#listofleads')
let savetab = document.querySelector('#save-btn')
let myLeads = [];
let leaditemsfromlocalstorage = JSON.parse(localStorage.getItem('leads'));
if (leaditemsfromlocalstorage) {
    myLeads = leaditemsfromlocalstorage;

    render(myLeads)
}

// const tabs = [
//     { url: 'https://www.facebook.com' }
// ]
savetab.addEventListener('click', savet)

function savet() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        myLeads.push(tabs[0].url)
        render(myLeads)
        localStorage.setItem("leads", JSON.stringify(myLeads));
    })

}

button.addEventListener("click", save)

function save() {
    myLeads.push(textinpt.value)

    textinpt.value = '';

    localStorage.setItem("leads", JSON.stringify(myLeads));
    render(myLeads)

    localStorage.clear()

}

function render(leadss) {
    let listitems = '';
    for (let i = 0; i < leadss.length; i++) {
        mleads = leadss[i];
        //-------------------------------or-------------------
        // for (let i of myLeads) {
        //     leads = i
        // }
        listitems += `<li><a target="_blank" href="${mleads}">${mleads} </a></li>`;

        // console.log(myLeads[i]);
    }


    listleads.innerHTML = listitems;
    console.log(listitems);

    //  -- ----------ORRRRRRR------------
    //     const li = document.createElement('li');
    //     li.textContent = leads;
    //     listleads.append(li);


}

deletbtn.addEventListener('dblclick', deleteit)

function deleteit() {

    localStorage.clear();
    listleads.innerHTML = '';
}
//--------------------ORRRRRRRRRRRR------on top of the click function do same set myLeads=[] and call render function

function getfirst(arr) {
    return arr[0];
}
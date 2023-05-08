let Library = [];

//User Interface
const addBookBtn = document.querySelector('#addBookBtn');
const closeModal = document.querySelector('#closeModal');
const addModal = document.querySelector('#addModal');

addBookBtn.addEventListener('click', () => {
    addModal.classList.add('active')
    console.log("opening...")
});

closeModal.addEventListener('click', () => {
    addModal.classList.remove('active')
    console.log("closeing...")
});

function Book(author,title,numPages, hasRead) {
    this.author = author
    this.title = title
    this.numPages = numPages
    this.hasRead = hasRead
}

function addBookToLibrary() {

}
    

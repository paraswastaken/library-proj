let arr=[];

function book(name, author){
    this.name=name;
    this.author=author;
}

window.addEventListener("click", addBookToLibrary);

function addBookToLibrary(){
    let bookN=prompt("Enter Book name!!");
    if(bookN==null) return;
    let auth=prompt("Enter Author name!!");
    let tempBook = new book(bookN, auth);
    arr.push(tempBook);
}
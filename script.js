const arr=[];

//Constructor for book object
function book(name, author){
    this.name=name;
    this.author=author;
    this.sta=false;
}

//initial query selectors
let addBookButton = document.querySelector(".addBook");
let table = document.querySelector(".tab");
let modal = document.getElementById("modal");
let form = document.getElementById("form");

addBookButton.addEventListener("click", addBookToLibrary);

//Function to create a book object and add it to the library(array)
function addBookToLibrary(){
    modal.classList.toggle('hide');
    // let tempBook = new book(bookN, auth);
    // console.log(tempBook.sta=1);
    // arr.push(tempBook);
    update();
}

//Function to remove a book
function removeBook(){
    arr.splice(this.parentElement.parentElement.id, 1);
    update();
}

//Function to toggle read status of any book
function toggleR(){
    if(arr[this.parentElement.parentElement.id].sta){
        arr[this.parentElement.parentElement.id].sta=false;
        this.classList.toggle('read');
        this.textContent="Not Read";
    }
    else{
        arr[this.parentElement.parentElement.id].sta=true;
        this.classList.toggle('read');
        this.textContent="Read";
    }
}

//Function to create and add respective table rows for every book in library
//Called in update function
function createRow(i){
    let temp=document.createElement("tr");
    temp.setAttribute("id", i);
    let t2=document.createElement("th");
    t2.textContent=i+1;
    temp.appendChild(t2);


    t2 = document.createElement("td");
    t2.textContent=arr[i].name;
    temp.appendChild(t2);


    t2 = document.createElement("td");
    t2.textContent=arr[i].author;
    temp.appendChild(t2);


    t2 = document.createElement("td");
    let t3 = document.createElement("button");
    let txt = (arr[i].sta)?"Read":"Not Read";
    t3.textContent=txt;
    if(arr[i].sta){
        t3.classList.toggle('read');
    }
    t3.addEventListener("click", toggleR);
    t3.classList.add("toggleB");
    t2.appendChild(t3);
    temp.appendChild(t2);


    t2 = document.createElement("td");
    t3 = document.createElement("button");
    t3.textContent="Remove";
    t3.addEventListener("click", removeBook);
    t2.setAttribute("class", "remB");
    t2.appendChild(t3);
    // t2.setAttribute("colspan", "2");
    temp.appendChild(t2);
    table.appendChild(temp);
}

//Function to update table of books every time a book is added or removed
function update() {
    while(table.childElementCount>1){
        table.removeChild(table.lastChild);
    }
    for(let x=0; x<arr.length; x++){
        createRow(x);
    }
}
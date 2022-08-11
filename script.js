const arr=[];

function book(name, author){
    this.name=name;
    this.author=author;
}
let addBookButton = document.querySelector(".addBook");
let table = document.querySelector(".tab");

addBookButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary(){
    let bookN=prompt("Enter Book name!!");
    if(bookN==null) return;
    let auth=prompt("Enter Author name!!");
    if(auth==null) return;
    let tempBook = new book(bookN, auth);
    arr.push(tempBook);
    update();
}

function createRow(i){
    let temp=document.createElement("tr");
    let t2=document.createElement("th");
    t2.textContent=i+1;
    temp.appendChild(t2);
    t2 = document.createElement("td");
    t2.textContent=arr[i].name;
    temp.appendChild(t2);
    t2 = document.createElement("td");
    t2.textContent=arr[i].author;
    temp.appendChild(t2);
    t2 = document.createElement("button");
    t2.textContent="Remove";
    t2.setAttribute("id", i);
    temp.appendChild(t2);
    table.appendChild(temp);
}

function update() {
    while(table.childElementCount>1){
        table.removeChild(table.lastChild);
    }
    for(let x=0; x<arr.length; x++){
        createRow(x);
    }
}
const arr=[];

function book(name, author){
    this.name=name;
    this.author=author;
    this.sta=0;
}
let addBookButton = document.querySelector(".addBook");
let table = document.querySelector(".tab");

addBookButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary(){
    let bookN=prompt("Enter Book name!!");
    if(bookN.length<1) return;
    let auth=prompt("Enter Author name!!");
    if(auth.length<1) return;
    let tempBook = new book(bookN, auth);
    arr.push(tempBook);
    update();
}

function removeBook(){
    arr.splice(this.parentElement.id, 1);
    update();
}

function toggleR(){
    if(arr[this.parentElement.id].sta==0){
        arr[this.parentElement.id].sta=1;
        this.classList.toggle('read');
        this.textContent="Read";
    }
    else{
        arr[this.parentElement.id].sta=0;
        this.classList.toggle('read');
        this.textContent="Not Read";
    }
}

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
    t3.textContent="Not Read";
    t3.addEventListener("click", toggleR);
    t3.setAttribute("class", "toggleStat");
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

function update() {
    while(table.childElementCount>1){
        table.removeChild(table.lastChild);
    }
    for(let x=0; x<arr.length; x++){
        createRow(x);
    }
}
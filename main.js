let input = document.querySelector("input");
let form = document.querySelector("form");
let ul =  document.querySelector("ul");
let container = document.getElementById("container-1")
// container.className = "bg-secondary bg-gradient text-dark"
let body = document.querySelector("body")
body.style.backgroundImage = "url(photo-1625225230517-7426c1be750c.avif)"
body.style.backgroundPosition = "start"
body.style.backgroundSize ="cover"
body.style.backgroundRepeat ="no-repeat"
// container.className = "bg-success p-2 text-dark bg-opacity-10"

const Todo = (event) => {
    event.preventDefault();
    let li = document.createElement("li");
    li.className = "list-group-item bg-info-subtle my-1 mx-5 rounded-0"
    li.innerText= input.value;
    li.style.fontSize = "20px"

    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.className ="btn btn-danger btn-sm rounded-0 float-end";

    li.appendChild(delButton);
    ul.appendChild(li);

    form.reset()
}
form.addEventListener("submit",Todo)

const delTodo = (event) => {
  if(event.target.className.includes("btn btn-danger")){
    if(window.confirm("Are You Sure??")){
        ul.removeChild(event.target.parentElement);
    }
  }
};

ul.addEventListener("click", delTodo);
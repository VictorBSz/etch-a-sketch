const container = document.getElementById("container")
const reset = document.getElementById("reset")
const title = document.getElementById("title")
const create = document.getElementById("create")

function squareGrid(n) {
    title.textContent = `This is a ${n} by ${n} grid`
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            let div1 = document.createElement("div")
            div1.classList.add("grid")
            div1.style.background="purple"
            div1.style.width=`${960/n}px`
            div1.style.height=`${960/n}px`
            container.appendChild(div1)
            console.log(`created div number ${row+1}`)
        }
    }
}

function createGrid() {
    const divToRemove = document.querySelectorAll(".grid");
    if (divToRemove) {
        divToRemove.forEach((div) => {
        div.remove();
    })
    } else {
        console.log("Div not found or already removed.");
    }
    let num = Number(prompt("Type the number of rows and columns:"))
    if (num > 100 || Number.isNaN(num)) {
        alert("Please enter a number between 1 and 100")
    } else {
        squareGrid(num)
    }
}

function resetGrid() {
    let squares = document.querySelectorAll(".grid")
    squares.forEach((sq) => (
    sq.style.background = "purple"
    ))
}

function resetGrid() {
    const square = document.querySelectorAll(".grid")
    square.forEach((sq) => sq.style.background="purple")
}

container.addEventListener("mouseover", e => (
    e.target.style.background = "green"
));

reset.addEventListener("click", resetGrid)
create.addEventListener("click", createGrid)


const container = document.getElementById("container")
const reset = document.getElementById("reset")
const title = document.getElementById("title")
const create = document.getElementById("create")
const random = document.getElementById("random")
const colorOpen = document.getElementById("colorOpen")
const selector = document.getElementById("selector")

let isRandomMode = false;
let color = "black"
let isDrawing = false


// FUNCTIONS
function squareGrid(n) {
    title.textContent = `This is a ${n} by ${n} grid`
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            let div1 = document.createElement("div")
            div1.classList.add("grid")
            div1.style.background="gray"
            div1.style.width=`${600/n}px`
            div1.style.height=`${600/n}px`
            container.appendChild(div1)
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
    const square = document.querySelectorAll(".grid")
    square.forEach((sq) => sq.style.background="gray")
}

function randomNumber(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomColor() {
    let r = randomNumber(255);
    let g = randomNumber(255);
    let b = randomNumber(255);
    return [r,g,b]
}


// EVENTS

window.addEventListener("mousedown", (e) => {
    isDrawing = true
})

window.addEventListener("mouseup", (e) => {
    isDrawing = false
})

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid") && isDrawing == true) {
        if (isRandomMode === true) {
            const [r, g, b] = randomColor();
            e.target.style.background = `rgb(${r}, ${g}, ${b})`;
        } else {
            e.target.style.background = color;
        }
    }
});

reset.addEventListener("click", resetGrid)
create.addEventListener("click", createGrid)
random.addEventListener("click", () => {
    isRandomMode = !isRandomMode;

    if (isRandomMode) {
        random.textContent = "RANDOM ON"
    } else {
        random.textContent = "RANDOM OFF"
    }
})

colorOpen.addEventListener("click", () => {
    selector.click()
})

selector.addEventListener("input", () => {
    color = selector.value;
    isRandomMode = false
    random.textContent = "RANDOM OFF";
    
})


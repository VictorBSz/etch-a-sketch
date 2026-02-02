const container = document.getElementById("container")

function squareGrid(n) {
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

squareGrid(9)
const input = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");


const createItem = (value) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${value}
    <div class="close-icon">
        <i class="fas fa-times"></i>
    </div>
    `;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
        }
    )

    listItem.querySelector(".close-icon").addEventListener("click",
        function () {
            listItem.remove()
        })

    toDoBox.appendChild(listItem)
}

const generateItems = () => {
    // remove previous items
    toDoBox.innerHTML = ''
    // create new items
    const newArray = localStorage.getItem('localItems').split(',')

    newArray.map((item, index) => {
        createItem(item)
    })
}

input.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {

            const prevValue = localStorage.getItem('localItems')

            const newString = prevValue ? `${prevValue},${this.value}` : `${this.value}`

            localStorage.setItem('localItems', newString)

            generateItems()

            this.value = ""
        }
    }
)


generateItems()

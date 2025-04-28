import { booksData,categorys } from "../../utilities/data.js"

const data = booksData.featured
let booksCategorys = Object.values(categorys) 


export const loadBooks = () =>{
    const booksContainer = document.querySelector('.books')
    data.map(book => {
        booksContainer.innerHTML += `<div class="book">
        <img src=${book.img}/>
        <p>${book.name}</p>  
        </div>`   
    });
}   

export const loadCategorys = () =>{
    console.log(booksCategorys)
    const categorysContainer = document.querySelector('.categorys')
    booksCategorys.map(category =>{
        categorysContainer.innerHTML += `<div class="category">
            <img src=${category.img}>
            <h2>${category.name}</h2>
            <p>${category.quantity} libros</p>
        </div>`
    })
}

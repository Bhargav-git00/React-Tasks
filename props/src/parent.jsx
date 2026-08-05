
import Child from "./Child"

function Parent(){

    let name = "Bhargav"
    let age = 22

    let product = {
        id:1,
        name:"Laptop",
        version:13,
        price:69000,
        title:"best"
    }

    return(
        <div>
            <h2>parent class</h2>
            <Child details={product} name={name} a={age}/>
        </div>
    )
}

export default Parent
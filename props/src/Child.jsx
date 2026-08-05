

import Child2 from "./child2"

function Child({details,name,a}){

    //console.log(data)

    let data = "child2 propssss"
    
    return(
        <div>
            <h2>Child class</h2>
            <p>helloo {name} and age is {a}</p>
            <p>{details.price}</p>
            <Child2 data={data}/>
        </div>
    )
}

export default Child
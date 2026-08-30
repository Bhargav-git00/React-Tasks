import React, { useEffect } from 'react'
import { useState } from 'react';
import "./App.css"


const App = () => {

  const [data, setData] = useState([]);
  const [filterData,SetFilterData] = useState([]);

  const buttons = ["All","men's clothing","women's clothing","jewelery","electronics"];

  useEffect(() => {

    async function fetchData() {
      let result = await fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => res)
      setData(result)
      SetFilterData(result)
      console.log(result)
    }

    fetchData()

  }, [])


  function fetchCategoryData(cat){

    console.log("hello "+cat)

    if(cat == "All"){
      SetFilterData(data);
    }
    else{

    let fetchedCatData
    { fetchedCatData = data.filter((ele)=>{
      if(ele.category == cat){
      return (
        <>

           <h2>title : {ele.title}</h2>
            <p>price : {ele.price}</p>
            <img src={ele.image} style={{ width: 200 }} />
        </>
      )
    }
    })}
    SetFilterData(fetchedCatData)
  }
  }


  return (
    <div className="app-container">

  <h2 className="app-title">
    Fake Store Products
  </h2>

  <div className="button-container">

    {buttons.map((ele) => (
      <button
        className="category-button"
        key={ele}
        onClick={() => fetchCategoryData(ele)}
      >
        {ele}
      </button>
    ))}

  </div>

  <div className="products-container">

    {
      filterData.map((ele) => (
        <div className="product-card" key={ele.id}>
          <h2 className="product-title">
            Title : {ele.title}
          </h2>

          <p className="product-price">
            Price : ${ele.price}
          </p>

          <img
            className="product-image"
            src={ele.image}
            alt={ele.title}
          />
        </div>
      ))
    }

    {/* {filterData.length == 0 &&
      data.map((ele) => (
        <div className="product-card" key={ele.id}>
          <h2 className="product-title">
            Title : {ele.title}
          </h2>

          <p className="product-price">
            Price : ${ele.price}
          </p>

          <img
            className="product-image"
            src={ele.image}
            alt={ele.title}
          />
        </div>
      ))
    } */}

  </div>

</div>
  )
}

export default App

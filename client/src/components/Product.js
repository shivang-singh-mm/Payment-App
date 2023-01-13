import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'

const Product = () => {
    
    const navigate = useNavigate()

    const clickHandler = () =>{
        fetch('/payment-app/payment-route',{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({
            name: 'shi'
           }) 
        }).then((res)=>res.json())
        .then(data=>window.location.href = data.payment_request.longurl)
        .catch((err)=>console.log(err))
    }



  return (
    <>

<head>
  <title>Harvest vase</title>
  <link href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi" rel="stylesheet" />
</head>

<body>
  <div class="wrapper">
    <div class="product-img">
      <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
      </div>
      <div class="product-price-btn">
        <p><span>100</span>INR</p>
        <button type="button" onClick={()=>clickHandler() } >buy now</button>
      </div>
    </div>
  </div>

</body>


    </>
  )
}

export default Product
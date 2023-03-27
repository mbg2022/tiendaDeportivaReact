//rafc + tab, crea la estructura de un componente
import React from "react";
import CartWidgetIcon from '@mui/icons-material/ShoppingCart';


 const CartWidget = () => {
  return (
    <div style={{display:"flex"}}>
     
        <CartWidgetIcon sx={{color: "white"}}/>
        <span>10</span>

       
      
    </div>
  )
}

export default CartWidget;

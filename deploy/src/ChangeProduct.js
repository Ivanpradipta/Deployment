import React, { useState } from "react";

function ChangeProduct() {

const [productName, setProductName] = useState("");
  const [validation, setValidation] = useState("");

  const changeProductName = (event) => {
    const nama = event.target.value;
    setProductName(nama);
    if (nama.length > 10) {
      setValidation("nama produk tidak boleh >10");
    } else{
      setValidation("")
    }
  };
  return {
    productName,
    validation,
    changeProductName
  }
};



export default ChangeProduct;
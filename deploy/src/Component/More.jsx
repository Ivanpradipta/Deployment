import React from "react";
import { useSubscription, useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  subscription MySubscription {
    product {
      id
      product_name
      product_category
      product_freshness
      additional_information
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    delete_product_by_pk(id: $id) {
      id
    }
  }
`;



function More() {
  const { loading, error, data } = useSubscription(GET_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const productList = data.product;
  console.log(productList);

  const handleDelete = (id) => {
    deleteProduct({ variables: { id: id } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  return (
    <>
      <table className="table table-striped" id="tables">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Additional information</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.product_category}</td>
              <td>{product.product_freshness}</td>
              <td>{product.additional_information}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)} >Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default More;

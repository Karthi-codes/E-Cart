import { Fragment, useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [Products, setProducts] = useState([]);
  const [searchparams] = useSearchParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/product?" + searchparams)
      .then(res => res.json())
      .then(res=>setProducts(res.getProducts))
  },[searchparams])

  return (
    <Fragment>
      <h1 id="products_heading" className="text-center mt-4">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
         {Products.map(product => <Productcard product={product}/>)}
        </div>
      </section>
    </Fragment>
  );
}

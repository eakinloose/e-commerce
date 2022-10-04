import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchProductsStart } from "../../redux/Products/productsAction";
import { addProduct } from "../../redux/Cart/CartActions";
import FormSelect from "../Forms/FormSelect";
import { Main, ProductWrapper, ProductCard } from "./ProductStyles";

const mapState = ({ productsData }) => ({
   product: productsData.product,
});

const ProductsResult = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const { filterType } = useParams();
   const { product } = useSelector(mapState);

   useEffect(() => {
      dispatch(fetchProductsStart({ filterType }));
   }, [dispatch, filterType]);

   const handleFilter = (e) => {
      const nextFilter = e.target.value;
      history.push(`/search/${nextFilter}`);
   };

   const configFilter = {
      defaultValue: filterType,
      options: [
         {
            name: "Show All",
            value: "",
         },
         {
            name: "Mens",
            value: "mens",
         },
         {
            name: "Womens",
            value: "womens",
         },
      ],
      handleChange: handleFilter,
   };

   if (!Array.isArray(product)) return null;

   if (product.length < 1)
      return (
         <Main>
            <h1>No search results</h1>
            <FormSelect {...configFilter} />
            <p>loading...</p>
         </Main>
      );

   const handleAddToCart = (item) => {
      if (!item) return;
      dispatch(addProduct(item));
   };

   return (
      <Main>
         <h2>Products</h2>
         <FormSelect {...configFilter} />
         <ProductWrapper>
            {product.map((item, index) => {
               const {
                  documentID,
                  productThumbnail,
                  productName,
                  productPrice,
               } = item;
               if (
                  !documentID ||
                  !productThumbnail ||
                  !productName ||
                  typeof productPrice === "undefined"
               )
                  return null;

               return (
                  <ProductCard key={index}>
                     <Link to={`/product/${documentID}`}>
                        <img src={productThumbnail} alt={productName} />
                     </Link>
                     <div className="content">
                        <Link to={`/product/${documentID}`}>
                           <h3>{productName}</h3>
                        </Link>
                        <p>
                           <span id="naira">N</span> {productPrice}
                        </p>
                        <button onClick={() => handleAddToCart(item)}>
                           Add To Cart
                        </button>
                     </div>
                  </ProductCard>
               );
            })}
         </ProductWrapper>
      </Main>
   );
};

export default ProductsResult;

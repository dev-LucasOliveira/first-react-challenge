function Product(props) {
    const { productData } = props;

    return (
        <div>
            <span>{productData.title} , price: ${productData.price}.00. It is on a {productData.discount}% discount and has a {productData.rating} out of 5 rating</span>
        </div>
    );
}

export default Product;
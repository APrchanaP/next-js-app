// export default function ProductDetail(){



//     return <h1>Details about the product</h1>
// }

export default function ProductDetail({

    params,

  }) {

 

    return <h1>Details about product {params.productId}</h1>;

 

  }
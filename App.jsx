import { useState } from 'react';
import Product from './Product';


const App = () => {
 
  const [products, setProducts] = useState([

    {id:101,name:'Chocolate',inStock:true},
    {id:102,name:'Grossery',inStock:false},
      {id:103,name:'Veggies',inStock:true},

  ]);

const toggleStatus=(productId)=> {
  setProducts((prevProducts)=>
    prevProducts.map((product)=>
  product.id === productId ? {...product,inStock:!product.inStock} 
    :product)
  );
};


  return (
   <div style={{textAlign:'center',marginTop:'50px'}}>
    <center><h1>Departmental Store Provision System</h1></center>
    <Product products={products} onToggle={toggleStatus}/>
    
   </div>
  );
};

export default App;
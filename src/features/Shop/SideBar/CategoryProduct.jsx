
function CategoryProduct(props) {
   const {data, setTypeProduct} = props;

   const handleTypeProduct = (item) =>{
      setTypeProduct(item);
      console.log(item)
   }
   return (
      <div>
         <div className="category shop_cate">
            <div className="title_cate">Product Category</div>
            {data.map((item, index) => (
               <div className="itemCate cate_active" key={index} onClick = {() => handleTypeProduct(item)}>
                  {item}
               </div>
            ))}
         </div>
      </div>
   )
}

export default CategoryProduct
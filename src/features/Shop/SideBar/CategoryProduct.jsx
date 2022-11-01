
function CategoryProduct(props) {
   const {typeOfProduct} = props;
   return (
      <div>
         <div className="category shop_cate">
            <div className="title_cate">Product Category</div>
            {typeOfProduct.map((item, index) => (
               <div className="itemCate cate_active" key={index}>
                  {item}
               </div>
            ))}
         </div>
      </div>
   )
}

export default CategoryProduct
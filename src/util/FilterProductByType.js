function FilterByPrice(data, minPrice, maxPrice){
   let dataFilter = [];

   data.map((item) =>{
      if(item.discounts >= minPrice && item.discounts <= maxPrice){
         dataFilter.push(item)
      }
   })
   return dataFilter
}

export function FilterProductByType(listFeatureItems, typeProduct, minPrice, maxPrice){
   let listFeature = [];

   if(typeProduct === ''){
      listFeature = listFeatureItems;
   }

   listFeatureItems.map((item) =>{
      if(typeProduct === item.type){
         listFeature.push(item)
      }
   })
   const dataFilter = FilterByPrice(listFeature, minPrice, maxPrice)
   return dataFilter
}
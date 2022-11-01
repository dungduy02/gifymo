export function SortByPriceLowToHight(listFeatureItems){
   let newListItems = listFeatureItems;

   newListItems.sort(function(a, b){
      return a.discounts - b.discounts;
   })

   return newListItems;
}

export function SortByPriceHightToLow(listFeatureItems){
   let newListItems = listFeatureItems;

   newListItems.sort(function(a, b){
      return b.discounts - a.discounts;
   })
   return newListItems;
}

export function SortByStar(listFeatureItems){
   let newListItems = listFeatureItems;

   newListItems.sort(function(a, b){
      return a.star - b.star
   })

   return newListItems;
}

export function SortByNameAZ(listFeatureItems){
   let newListItems = listFeatureItems;

   newListItems.sort(function(a, b){
      const nameA = a.nameItem.toUpperCase();
      const nameB = b.nameItem.toUpperCase();

      if(nameA < nameB){
         return -1;
      }
      if(nameA > nameB){
         return 1;
      }

      return 0;
   })
   return newListItems;
}

export function SortByNameZA(listFeatureItems){
   let newListItems = listFeatureItems;

   newListItems.sort(function(a, b){
      const nameA = a.nameItem.toUpperCase();
      const nameB = b.nameItem.toUpperCase();

      if(nameA > nameB){
         return -1;
      }
      if(nameA < nameB){
         return 1
      }
      return 0
   })
   return newListItems;
}

export function handleChooseFunction(sortItems, listFeatureItems){
   let data = [];
   if(sortItems === ''){
      data = listFeatureItems;
   }
   if(sortItems === 'SortByPriceHightToLow'){
      data = SortByPriceHightToLow(listFeatureItems);
   }else if(sortItems === 'SortByPriceLowToHight'){
      data = SortByPriceLowToHight(listFeatureItems);
   }else if(sortItems === 'SortByStar'){
      data = SortByStar(listFeatureItems);
   }else if(sortItems === 'SortByNameAZ'){
      data = SortByNameAZ(listFeatureItems);
   }else if(sortItems === 'SortByNameZA'){
      data = SortByNameZA(listFeatureItems);
   }
   return data
}
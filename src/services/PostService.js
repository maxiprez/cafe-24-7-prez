import db from '../firebase';

const itemCollection = db.collection('products');

export function getItems (){
   return itemCollection.get()
    .then(snapshot => {
        return snapshot.docs.map(doc => {
            let item = doc.data()
            return {
                id: doc.id,
                ...item
            }
        })
    })
}

export function getItemsDetails (productId){
  
    return itemCollection.get(productId)
     .then(snapshot => {
         return snapshot.docs.map(doc => {
             let item = doc.data()
             return {
                 id: doc.id,
                 ...item
             }
         })
     })
 }



// module.exports = {
// getItems,
// getItemsDetails,

// }
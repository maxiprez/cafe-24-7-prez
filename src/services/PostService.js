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
    const itemById = itemCollection.where("id", "==", productId);
    return itemById.get()
     .then(snapshot => {
         return snapshot.docs.map(doc => doc.data)
     })
   
}



// module.exports = {
// getItems,
// getItemsDetails,

// }
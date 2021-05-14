import db from '../firebase';

const itemCollection = db.collection('products');

export function getItems (){
   return itemCollection
    .get()
    .then(snapshot => {
        return snapshot.docs.map(doc => {
            let item = doc.data()
            return {
                ...item,
                id: doc.id,
            };
        });
    })
}

// export function getItemsDetails (productId){
//     //  itemCollection.doc(productId).get()
//     return itemCollection(productId)
//      .then(snapshot => {
//          return snapshot.docs.map(doc => {
//              let item = doc.data()
//              return {
//                  id: doc.id,
//                  ...item
//              }
//          })
//      })
//  }
 
//entonces dentro del then tendrías el return de la información del documento, 
//algo así: ({ ...snapshot.data(), id: snapshot.id });


// module.exports = {
// getItems,
// getItemsDetails,

// }
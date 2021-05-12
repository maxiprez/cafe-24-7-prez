import db from '../firebase';

const itemCollection = db.collection('products');

export function getItems (){
   return itemCollection.get()
    .then(snapshot => {
        return snapshot.docs.map(doc => doc.data())
    })
}

export function getItemsDetails (id){
    const itemById = itemCollection.where('id', '===', `${id}`)
    return itemById.get ()
    .then(snapshot => {
        return snapshot.docs.map(doc => doc.data())
    })
}



// module.exports = {
// getItems,
// getItemsDetails,

// }
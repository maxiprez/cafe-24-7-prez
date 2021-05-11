import db from '../firebase';

const itemCollection = db.collection('products');

export function getItems (){
   return itemCollection.get()
    .then(snapshot => {
        return snapshot.docs.map(doc => doc.data())
    })
}


function getItemsDetails (postId){
    return new Promise ((resolve, reject)=>{
        fetch(`https://my-json-server.typicode.com/maxiprez/cafe-24-7-prez/products/${postId}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}



// module.exports = {
// getItems,
// getItemsDetails,

// }
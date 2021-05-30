import firebase from 'firebase/app';
import db from '../firebase';
import 'firebase/firestore';

const itemCollection = db.collection('products');
const orderCollection = db.collection('orders');
const messageCollection = db.collection('messages');

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

export function newOrder (buyer, items, total){

return orderCollection
.add({
    buyer: buyer,
    items: items, 
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: total,
})
.then(function(orderId){
    return orderId.id;
    })
.catch(function(error){
    return error;
});
}


export function newMessage (client){

    return messageCollection
    .add({
        client: client,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
       
    })
      .then(function(docRef){
            console.log('Document written with ID:', docRef.id)
      })

      .catch(function(error){
        return error;
    });
    }
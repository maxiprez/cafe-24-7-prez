import firebase from 'firebase/app';
import db from '../firebase';
import 'firebase/firestore';

const itemCollection = db.collection('products');
const orderColeection = db.collection('orders');

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

return orderColeection
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
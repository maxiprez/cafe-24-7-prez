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


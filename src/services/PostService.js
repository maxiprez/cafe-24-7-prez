
const URL_PRODUCTOS = ('https://my-json-server.typicode.com/maxiprez/cafe-24-7-prez/products');


function getItems (){
    return new Promise ((resolve, reject)=>{
        fetch(URL_PRODUCTOS)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    });
}


function getItemsDetails (postId){
    return new Promise ((resolve, reject)=>{
        fetch(`https://my-json-server.typicode.com/maxiprez/cafe-24-7-prez/products/${postId}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}



 module.exports = {
 getItems,
 getItemsDetails,

 }
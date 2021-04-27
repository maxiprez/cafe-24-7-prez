
const URL_PRODUCTOS = ('https://maxiprez.github.io/cafe-24-7-prez/src/components/data/data.JSON');
const URL_ITEMS_DETAILS = ('https://maxiprez.github.io/cafe-24-7-prez/src/components/data/dataDetail.JSON');

function getItems (){
    return new Promise ((resolve, reject)=>{
        fetch(URL_PRODUCTOS)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    });
}

function getItemsDetails (){
    return new Promise ((resolve, reject)=>{
        fetch(URL_ITEMS_DETAILS)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}



module.exports ={
getItems,
getItemsDetails,
}
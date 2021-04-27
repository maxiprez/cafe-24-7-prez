
const URL_PRODUCTOS = ('https://maxiprez.github.io/cafe-24-7-prez/src/components/data/data.JSON');


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
        fetch(`https://maxiprez.github.io/cafe-24-7-prez/src/components/data/dataDetail.JSON`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}



module.exports ={
getItems,
getItemsDetails,
}
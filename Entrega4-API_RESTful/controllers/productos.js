const productos = [
    { id: 1, title: 'titulo1', price: "450", thumbnail: 'https://picsum.photos/200?random=1' },
    { id: 2, title: 'titulo2', price: "600", thumbnail: 'https://picsum.photos/200?random=2' },
    { id: 3, title: 'titulo3', price: "1590", thumbnail: 'https://picsum.photos/200?random=3' },
    { id: 4, title: 'titulo4', price: "490", thumbnail: 'https://picsum.photos/200?random=4' },
    { id: 5, title: 'titulo5', price: "670", thumbnail: 'https://picsum.photos/200?random=5' },
    { id: 6, title: 'titulo6', price: "5600", thumbnail: 'https://picsum.photos/200?random=6' },
    { id: 7, title: 'titulo7', price: "9000", thumbnail: 'https://picsum.photos/200?random=7' },
    { id: 8, title: 'titulo8', price: "12000", thumbnail: 'https://picsum.photos/200?random=8' },
    { id: 9, title: 'titulo9', price: "6700", thumbnail: 'https://picsum.photos/200?random=9' },
    { id: 10, title: 'titulo10', price: "45000", thumbnail: 'https://picsum.photos/200?random=10' }
]

const getProductos = async () => productos;

const getProductoById = async (idNum) => {
    try {
        let productos = await getProductos();
        let prodFilter = productos.find(a => a.id == idNum.id);
        return prodFilter??"Producto no encontrado"
    } catch (error) {
        console.log(error);
    }
}

const addProductos = async (prod) => {
    try {
        let productos = await getProductos();
        let lastID = productos[productos.length - 1].id;
        prod.id = lastID + 1;
        if(prod.title != "" || prod.price != ""|| prod.thumbnail != ""){
            prod.id = lastID + 1;
            productos.push(prod)
        }
        return productos
    } catch (error) {
        console.log(error);
    }
}

const putProductoById = async (idNum, body) => {
    try {
        let producto = await getProductoById(idNum);
        producto.title = body.title??producto.title;
        producto.price = body.price??producto.price;
        producto.thumbnail = body.thumbnail??producto.thumbnail;
        return producto
    } catch (error) {
        console.log(error);
    }
}

const deleteProductoById = async (idNum) => {
    try {
       let productos = await getProductos();
       let index = productos.findIndex(a => a.id == idNum.id)
       productos.splice(index,1)
       return productos
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProductos,
    getProductoById,
    addProductos,
    putProductoById,
    deleteProductoById
}
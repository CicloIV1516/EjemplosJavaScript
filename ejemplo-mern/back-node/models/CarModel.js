import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CarSchema = new Schema(
    {
        nombre: {type:String},
        precio: {type:Intl},
        stock: {type:Intl},
        idProduct: {type:String}
    },
    {collection: 'carShop'}    
);

export default mongoose.model('CarModel', CarSchema);
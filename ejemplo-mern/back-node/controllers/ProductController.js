import ProductModel from "../models/ProductModel.js";
//métodos para el CRUD

//Mostrar todos los productos: cada producto está guardado en un documento
export const getAllProduct = async(req, res)=>{
    try{
        const products = await ProductModel.find();
        res.status(200).json(products);
    }catch(err){
        res.json({message: err.message});
    }
};

//mostrar un solo producto
export const getProduct = async(req, res)=>{
    try{
        const id = req.params.id;
        const product = await ProductModel.findById({_id:id}).then((product)=>{
            res.status(200).json(product);
        })
    }catch(err){
        res.json({message: err.message});
    }
};

//crear un nuevo producto
export const createProduct = async(req, res)=>{
    try{
        await ProductModel.create(req.body);
        res.status(200).json({"message":"¡Producto agregado con éxito!"});
    }catch(err){
        res.json({message: err.message});
    }
};

//actualizar un producto
export const updateProduct = async(req, res)=>{
    try{
        const id = req.params.id;
        await ProductModel.updateOne({_id:id}, req.body).then( res => {
            console.log(res);
        })
        res.status(200).json({"message":"¡Producto actualizado con éxito!"})
    }catch(err){
        res.json({message: err.message});
    }
};

//eliminar un producto
export const deleteProduct = async(req, res) =>{
    try{
        const id = req.params.id;
        await ProductModel.deleteOne({_id:id}).then(res=>{console.log(res)})
        res.status(200).json({"message":"¡Producto eliminado con éxito!"})
    }catch(err){
        res.json({message: err.message});
    }
};


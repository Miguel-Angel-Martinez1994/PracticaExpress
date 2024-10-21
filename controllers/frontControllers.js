const Servicio=require("../models/serviciosModel");
const Producto=require("../models/productosModel");

/* get index */
const getIndex = (req, res)=>{
    res.render('index',{
        titulo: 'Este es el titulo de index'
    })
}

/* get servicios */
const getServicios =async (req, res)=>{
    try {
        const servicios=await Servicio.find();

        return res.render('servicios',{
            servicios
            })
    } catch (error) {
        console.log(error);
    }
}

/*get 1 servicio*/
const getOneServicios=async(req,res)=>{

}

/*create servicio*/
const newServicios=()=>{

}

/*update servicio*/
const updateServicios=()=>{

}

/*delete servicio*/
const deleteServicios=()=>{

}

const getProductos =async (req,res)=>{
    try{
        const productos=await Producto.find();

        res.render('productos',{
            productos
        })

    }catch(error){
        console.log(error);
    }
}

/*get 1 producto*/
const getOneProductos=()=>{

}

/*create producto*/
const newProductos=()=>{

}

/*update producto*/
const updateProductos=()=>{

}

/*delete producto*/
const deleteProductos=()=>{
    
}

module.exports ={
    getIndex,
    getServicios,
    getOneServicios,
    newServicios,
    updateServicios,
    deleteServicios,
    getProductos,
    getOneProductos,
    newProductos,
    updateProductos,
    deleteProductos
}
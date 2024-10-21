const express=require("express");
const router=express.Router();

const {
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
}=require("../controllers/frontControllers");

/*Pagina Index*/
router.get("/",getIndex);

/*Pagina todos Servicios*/
router.get("/servicios",getServicios);

/*Pagina 1 Servicios*/
router.get("/servicios",getOneServicios);

/*Pagina nuevo Servicios*/
router.get("/servicios",newServicios);

/*Pagina actualizar Servicios*/
router.get("/servicios",updateServicios);

/*Pagina borrar Servicios*/
router.get("/servicios",deleteServicios);

/*Pagina todos Productos*/
router.get("/productos",getProductos);

/*Pagina 1 Productos*/
router.get("/productos",getOneProductos);

/*Pagina nuevo Productos*/
router.get("/productos",newProductos);

/*Pagina actualizar Productos*/
router.get("/productos",updateProductos);

/*Pagina borrar Productos*/
router.get("/servicios",deleteProductos);

module.exports=router;
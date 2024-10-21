// llamamos a mongoose para la conexion a la base de datos de mongoDB
const mongoose =require("mongoose");
const dotenv=require("dotenv");
dotenv.config()

//conexion a base de datos estandar, usando asyncronas y awaits para las promesas
const dbConnect= async ()=>{
    try{
        //debemos modificar la conexion cambiando la contraseña por la nuestra y debemos añadir el "/NOMBRE DE LA BD, puesto que la conexion, de base, nos setea TODO el cluster entero"
        const connection =await mongoose.connect(process.env.URL_Mongo);
        console.log("DB conencted");
        return connection;
    }catch(error){
        console.log(error);
        //atributos seteados por nosotros para ver los errores que saltan en caso de que la conexion falle
        return {
            ok:false,
            message:"Error al conectar base de datos"
        }
    }

}

module.exports={dbConnect}
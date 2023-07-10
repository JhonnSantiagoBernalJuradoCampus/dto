/**
 ** DTO
 *? Requisitos: typeScript
 ** Configurar librerias: 
 * npm init -y
 * npm i -E -D class-transformer
 * npm i -E -D reflect-metadata
 * npm i -E -D typescript
 * npm i -E -D nodemon
 *
 ** Crear el archivo typescript.jso
 *? Configurar el archivo typescript
 * 
*/

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { user } from "./controller/user.js";
//*transpilamos la clase

let json = {
    id: 123,
    name:"Santiago",
    edad: 18
}
let data = plainToClass(user, json, { excludeExtraneousValues: true });
console.log(data);
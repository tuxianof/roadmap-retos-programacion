/*
 Web del lenguaje: https://www.typescriptlang.org/

 El siguiente código es de introducción al lenguaje de programación
 cuenta con varios formatos para comentarios.
*/

// Comentario por línea

/*
 Comentario por bloque de código
 */

let varText = "Hola, mundo"
let varNumber = 123
let varBoolean = true
// Permite varios tipos de datos en un array
let varArray = [true, 2, 3, 4.2, "5"]
// Listado de solo números
let varArrayNumbers: Array<number> = [1, 2, 3, 4, 5]
let varDictionary = {'value1': 1, 'value2': 'name_user'}

let varSplicitText: string = "Hola, mundo"
let varSplicitNumber: number = 123
let varSplicitBoolean: boolean = true
// En any es para indicar cualquier tipo de dato
let varSplicitArray: Array<any> = [true, 2, 3, 4.2, "5"]

const DAY = "Lunes"

console.log(`!Hola, typescript!`)
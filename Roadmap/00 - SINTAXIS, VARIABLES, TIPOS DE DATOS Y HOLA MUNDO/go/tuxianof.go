
/*
 Web del lenguaje: https://go.dev/

 El siguiente código es de introducción al lenguaje de programación
 cuenta con varios formatos para comentarios.
*/

// Comentario por línea

/*
 Comentario por bloque de código
 */

package main
// Se importa la libería para mostrar mensajes en consola
import "fmt"

func main () {

	var varText string = "Hola, mundo"
	var varNumber int = 123
	var varBoolean bool = true
	var varArray []int = []int{1, 2, 3, 4, 5}
	const DAY = "Lunes"

	fmt.Println(`!Hola, go!`)

	// imprimir todas las variables
	fmt.Println(varText, varNumber, varBoolean, varArray, DAY)
}
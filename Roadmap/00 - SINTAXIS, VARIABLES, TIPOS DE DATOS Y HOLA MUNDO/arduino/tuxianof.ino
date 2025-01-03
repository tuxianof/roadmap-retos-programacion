/* 
Web oficial: https://www.arduino.cc/
Web de documentación de código: https://docs.arduino.cc/programming/

El siguiente código es de introducción al lenguaje de programación
cuenta con varios formatos para comentarios.
 */

// Comentario por línea

/*
 Comentario por bloque de código
*/


String varText = "Hola, mundo!";
int varNumber = 0;
bool varBoolean = true;
int varArrayNumbers[] = {1,2,3,4};

const string DAY = "Lunes";

void setup() {
  // Inicialización de puerto serie
  Serial.begin(9600);
}

void loop() {
  // Impresión de mensaje en consola
  Serial.println("¡Hola, Arduino!");
  delay(1000);
}
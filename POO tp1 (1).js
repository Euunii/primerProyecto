/**Crear una clase llamada artículos que contenga los siguientes atributos:
código, nombreProducto, precio, descripción, características puntuales (utilizar un
arreglo para su respectiva carga), límite de stock.
a) Instanciar tres objetos: Es decir se deberán crear tres artículos distintos..
b) Utilizar un alert o document para la muestra por pantalla de cada atributo
c) Crear un método que permita contener y visualizar todos los atributos del
objeto, realizando una llamada desde el programa principal del método mencionado. */
class artículos {
    constructor(codigo, nombreProducto, precio, descripcion, caracteristicasPuntuales, stock) {
        //Atributos o clave valor 
        this._codigo = codigo
        this._nombreProducto = nombreProducto
        this._precio = precio
        this._descripcion = descripcion
        this._caracteristicasPuntuales = caracteristicasPuntuales
        this._stock = stock


    }
    mostrarInfo() {
        return `Codigo: ${this._codigo} <br>- Nombre Producto: ${this._nombreProducto} <br> - Precio: ${this._precio} <br> - Descripción:  ${this._descripcion} <br> - Caracteristicas: ${this._caracteristicasPuntuales} <br> - Stock Disponible: ${this._stock}`
    }
}

//Instanciar o crear
let articulo1 = new artículos(
    344,
    ' Harina',
    1200,
    ' Producto no perecedero, harina de trigo',
    [' No apto para celiacos', ' Contiene Proteínas', ' Producto para elaborar diversos tipos de masas'],
    ' 10 productos en stock'
);
document.write('<br>')
document.write(articulo1._codigo)
document.write('<br>')
document.write(articulo1._nombreProducto)
document.write('<br>')
document.write(articulo1._precio)
document.write('<br>')
document.write(articulo1._descripcion)
document.write('<br>')
document.write(articulo1._caracteristicasPuntuales)
document.write('<br>')
document.write(articulo1._stock)
document.write('<br>')

//Mostrar con metodo
document.write(articulo1.mostrarInfo())
document.write('<br>');
document.write(articulo1._caracteristicasPuntuales.join(' '));
document.write('<br>');

document.write('-------------------------------------------------------------------');
document.write('<br>')
let articulo2 = new artículos(
    573,
    ' Polenta',
    700,
    ' Producto no perecedero, polenta de maíz',
    [' Sin TACC', ' Cero azucares', ' Cero sodio'],
    ' 4 en stock');
document.write('<br>')
document.write(articulo2._codigo)
document.write('<br>')
document.write(articulo2._nombreProducto)
document.write('<br>')
document.write(articulo2._precio)
document.write('<br>')
document.write(articulo2._descripcion)
document.write('<br>')
document.write(articulo2._caracteristicasPuntuales.join(' '))
document.write('<br>')
document.write(articulo2._stock)
document.write('<br>')

//Mostrar con metodo
document.write(articulo2.mostrarInfo())
document.write('<br>');
document.write(articulo2._caracteristicasPuntuales.join(' '));
document.write('<br>');

document.write('-------------------------------------------------------------------');
document.write('<br>')


let articulo3 = new artículos(
    235,
    ' Manteca',
    2500,
    ' Grasa de origen animal',
    [' Grasas saturadas', ' Contiene lactosa', ' Sin TACC'],
    ' 8 en stock'
);
document.write('<br>')
document.write(articulo3._codigo)
document.write('<br>')
document.write(articulo3._nombreProducto)
document.write('<br>')
document.write(articulo3._precio)
document.write('<br>')
document.write(articulo3._descripcion)
document.write('<br>')
document.write(articulo3._caracteristicasPuntuales.join(' '))
document.write('<br>')
document.write(articulo3._stock)

//Mostrar con metodo
document.write(articulo3.mostrarInfo())
document.write('<br>');
document.write(articulo3._caracteristicasPuntuales.join(' '));
document.write('<br>');
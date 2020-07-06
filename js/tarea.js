"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//cree la clase Arma
var Arma = /** @class */ (function () {
    function Arma(name, balas, baja) {
        this.nombre = name;
        this.balas = balas;
        this.nu = baja;
    }
    return Arma;
}());
//cree la clase Dano que hereda atributos de la clase Arma
//le agrego dos objetos
var Dano = /** @class */ (function (_super) {
    __extends(Dano, _super);
    function Dano(name, balas, baja) {
        return _super.call(this, name, balas, baja) || this;
    }
    Dano.prototype.salida = function () {
        console.log("Arma: " + this.nombre + " " + "Balas: " + this.balas + " " + "Daño: " + this.nu);
    };
    return Dano;
}(Arma));
var AR = new Dano("M416", 5.56, 45);
AR.salida();
var AR2 = new Dano("AKM", 7.62, 49);
AR2.salida();

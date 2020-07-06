//cree la clase Arma

class Arma{
  nombre: string;
  balas: number;
  nu: number;
  constructor(name: string, balas: number, baja: number){
    this.nombre = name;
    this.balas = balas
    this.nu = baja;
  }

}

//cree la clase Dano que hereda atributos de la clase Arma
//le agrego dos objetos

class Dano extends Arma{
  constructor(name: string, balas: number, baja:number){
    super(name, balas, baja);
  }
  salida(){
    console.log("Arma: " + this.nombre + " " + "Balas: " + this.balas + " " + "Daño: " + this.nu);
  }
}
let AR = new Dano("M416", 5.56, 45);
AR.salida();
let AR2 = new Dano("AKM", 7.62, 49);
AR2.salida();


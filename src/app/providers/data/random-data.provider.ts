export class RandomData {

  data = 1;

  constructor() {
    setInterval(() => {
      //Generar nuevo valor aleatorio entre 1-100 cada medio segundo
      this.data = Math.floor(Math.random() * 100) + 1
    }, 500)
  }
}

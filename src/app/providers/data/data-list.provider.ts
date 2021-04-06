import * as Mock from 'mockjs'

export class DataList {
  //Se simula una lista de datos que varia en tiempo real
  /**
   * Metodo que nos va a devolver constantemente nuevos nombres
   * aleatorios desde mocksjs
   */
  get data() {
    const Random = Mock.Random
    return [
      Random.first(),
      Random.first(),
      Random.first(),
      Random.cfirst()
    ]
  }
}

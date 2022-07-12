import { OrcInterface } from '../core/OrcInterface'
import { ItemModel } from './ItemModel'

export class OrcModel implements OrcInterface {
  readonly #clientName: string
  readonly #productVision: string
  #items: ItemModel[]
  #total: number

  private constructor(
    clientName: string,
    productVision: string,
    items: ItemModel[],
    total: number
  ) {
    this.#clientName = clientName
    this.#productVision = productVision
    this.#items = items
    this.#total = total
  }

  static create(
    clientName: string,
    productVision: string,
    items = [],
    total = 0
  ) {
    return new OrcModel(clientName, productVision, items, total)
  }

  get clientName() {
    return this.#clientName
  }

  get productVision() {
    return this.#productVision
  }

  get items() {
    return this.#items
  }
  get total() {
    return this.#total
  }

  addItem(Item: ItemModel) {
    this.#items.push(Item)
    this.#total += Item.value
  }

  generateJson() {
    return {}
  }
}

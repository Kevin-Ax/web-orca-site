import { OrcInterface } from '../core/OrcInterface'
import { OrcItemsInterface } from '../core/OrcItemsInterface'

export class OrcModel implements OrcInterface {
  readonly #clientName: string
  readonly #productVision: string
  #items: OrcItemsInterface[]
  #total: number

  private constructor(
    clientName: string,
    productVision: string,
    items: OrcItemsInterface[],
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

  addItem(Item: OrcItemsInterface) {
    this.#items.push(Item)
    this.#total += Item.item.value * Item.qtde

    return new OrcModel(
      this.#clientName,
      this.#productVision,
      this.#items,
      this.#total
    )
  }

  generateJson() {
    return {
      clientName: this.#clientName,
      productVision: this.#productVision,
      total: this.#total,
      items: this.#items.map((it) => it.item.toJson()),
    }
  }
}

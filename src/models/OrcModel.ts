import { OrcInterface } from '../core/OrcInterface'
import { OrcItemsInterface } from '../core/OrcItemsInterface'

export class OrcModel implements OrcInterface {
  readonly #clientName: string
  readonly #productVision: string
  readonly #clientEmail: string
  #items: OrcItemsInterface[]
  #total: number

  private constructor(
    clientName: string,
    clientEmail: string,
    productVision: string,
    items: OrcItemsInterface[],
    total: number,

  ) {
    this.#clientName = clientName
    this.#productVision = productVision
    this.#items = items
    this.#total = total
    this.#clientEmail = clientEmail
  }

  static create(
    clientName: string,
    clientEmail: string,
    productVision: string,
    items = [],
    total = 0,

  ) {
    return new OrcModel(clientName, clientEmail, productVision, items, total)
  }

  get clientName() {
    return this.#clientName
  }

  get clientEmail() {
    return this.#clientEmail
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
        this.#clientEmail,
      this.#productVision,
      this.#items,
      this.#total,

    )
  }

  clear() {
    this.#items = []
    this.#total = 0

    return this
  }

  getValueFormatted() {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.#total)
  }

  generateJson() {
    return {
      clientName: this.#clientName,
      clientEmail: this.#clientEmail,
      productVision: this.#productVision,
      total: this.#total,
      items: this.#items.map((it) => it.item.name),
    }
  }
}

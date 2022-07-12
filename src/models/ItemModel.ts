import { ItemInterface } from '../core/ItemInterface'

export class ItemModel implements ItemInterface {
  #name: string
  #value: number
  #description: string

  private constructor(name: string, value: number, description: string) {
    this.#name = name
    this.#value = value
    this.#description = description
  }

  static create(name: string, value: number, description: string) {
    return new ItemModel(name, value, description)
  }

  get name() {
    return this.#name
  }

  get description() {
    return this.#description
  }

  get value() {
    return this.#value
  }

  getValueFormatted() {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.#value)
  }

  getNameFormatted() {
    const name = this.#name
    const titleCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    return titleCapitalized
  }

  toJson() {
    return {
      name: this.#name,
      value: this.#value,
      description: this.#description,
    }
  }
}

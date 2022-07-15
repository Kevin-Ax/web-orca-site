import { OrcItemsInterface } from './OrcItemsInterface'

export interface OrcInterface {
  readonly clientName: string
  readonly productVision: string
  items: OrcItemsInterface[]
  total: number

  generateJson: () => Object
}

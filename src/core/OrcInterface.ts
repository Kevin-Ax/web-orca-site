import { ItemModel } from '../models/ItemModel'

export interface OrcInterface {
  readonly clientName: string
  readonly productVision: string
  items: ItemModel[]
  total: number

  generateJson: () => Object
}

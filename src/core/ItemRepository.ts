import { ItemModel } from '../models/ItemModel'

export interface ItemRepository {
  getItems(): Promise<ItemModel[]>
}

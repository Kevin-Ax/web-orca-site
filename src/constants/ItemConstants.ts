import { ItemModel } from '../models/ItemModel'
import Items from '../constants/Items.json'
import { ItemInterface } from '../core/ItemInterface'

const items = Items.items

export const ItemConstants: ItemModel[] = items.map((item) =>
  ItemModel.create(item.name, item.value, item.description)
)

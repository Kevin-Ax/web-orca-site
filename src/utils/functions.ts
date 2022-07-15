import { OrcItemsInterface } from '../core/OrcItemsInterface'
import { ItemModel } from '../models/ItemModel'

export function getItemFromName(name: string, items: ItemModel[]) {
  return items.find((item) => item.name === name)
}

export function getNotNullFromObjectBasedOnItemsArray(
  obj: Record<string, unknown>,
  items: ItemModel[]
) {
  const itemsNotNull: OrcItemsInterface[] = []

  const values = Object.values(obj) as number[]
  const keys = Object.keys(obj)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = values[i]
    if (values[i] && keys[i]) {
      const newItem = getItemFromName(key, items)
      if (newItem) {
        itemsNotNull.push({
          item: newItem,
          qtde: value,
        })
      }
    }
  }
  return itemsNotNull
}

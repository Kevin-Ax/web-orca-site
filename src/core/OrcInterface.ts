import { OrcItemsInterface } from './OrcItemsInterface'

export interface OrcInterface {
  readonly clientName: string
  readonly productVision: string
  readonly clientEmail: string

  items: OrcItemsInterface[]
  total: number

  addItem: (newItem: OrcItemsInterface) => void
  generateJson: () => Record<string, unknown>
  clear: () => void
}

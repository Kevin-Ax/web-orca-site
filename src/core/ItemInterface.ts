export interface ItemInterface {
  name: string
  value: number
  description: string

  getValueFormatted: () => string
  toJson: () => Object
}

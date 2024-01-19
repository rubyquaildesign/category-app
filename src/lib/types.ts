export type ItemInfo = {
  id: string | number,
  time?: string,
  title: string,
  type: string
}
export type ConstellationInfo = {
  id: string | number;
  name: string,
  description: string,
  items: ItemInfo[]
}
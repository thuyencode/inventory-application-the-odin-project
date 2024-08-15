export const SORT_IN_WITH_ICONS = {
  asc: 'mdi:order-numeric-ascending',
  desc: 'mdi:order-numeric-descending'
} as const

export const SORT_IN = Object.keys(
  SORT_IN_WITH_ICONS
) as (keyof typeof SORT_IN_WITH_ICONS)[]

export const ORDER_BY_WITH_ICONS = {
  id: 'mdi:number-1',
  price: 'mdi:attach-money',
  weight: 'mdi:weight-kilogram',
  stock: 'mdi:box-outline'
} as const

export const ORDER_BY = Object.keys(
  ORDER_BY_WITH_ICONS
) as (keyof typeof ORDER_BY_WITH_ICONS)[]

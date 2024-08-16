export const PORT = Number(import.meta.env.PORT || 8080)

export const SORT_IN_WITH_ICONS = {
  asc: 'mdi:order-numeric-ascending',
  desc: 'mdi:order-numeric-descending'
} as const

export const SORT_IN = Object.keys(
  SORT_IN_WITH_ICONS
) as (keyof typeof SORT_IN_WITH_ICONS)[]

export const ORDER_BY_WITH_ICONS = {
  id: 'mdi:identifier',
  price: 'mdi:dollar',
  weight: 'mdi:weight-kilogram',
  stock: 'mdi:box-outline',
  created_time: 'mdi:calendar-plus-outline'
} as const

export const ORDER_BY = Object.keys(
  ORDER_BY_WITH_ICONS
) as (keyof typeof ORDER_BY_WITH_ICONS)[]

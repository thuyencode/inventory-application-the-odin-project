export const DISPLAY_TYPE_WITH_ICONS = {
  card: 'mdi:card-text-outline',
  table: 'mdi:table'
} as const

export const DISPLAY_TYPE = Object.keys(
  DISPLAY_TYPE_WITH_ICONS
) as (keyof typeof DISPLAY_TYPE_WITH_ICONS)[]

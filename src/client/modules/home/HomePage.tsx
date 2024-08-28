import { useLoaderData } from '@tanstack/react-router'
import { useMemo } from 'react'
import { Pie, PieChart } from 'recharts'

function HomePage() {
  const { categories } = useLoaderData({ from: '/' })

  const filteredCategories = useMemo(
    () => categories.filter((category) => category.products_count > 0),
    [categories]
  )

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={filteredCategories}
        nameKey='name'
        dataKey='products_count'
        cx='50%'
        cy='50%'
        fill='#8884d8'
        label
      />
    </PieChart>
  )
}

export default HomePage

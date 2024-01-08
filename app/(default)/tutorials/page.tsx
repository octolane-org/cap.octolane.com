export const metadata = {
  title: 'Tutorials - Simple',
  description: 'Page description',
}

import Content from './content'
import Newsletter from '@/components/newsletter'

export default function Tutorials() {
  return (
    <>
      <Content />
      <Newsletter />
    </>
  )
}

import Image from 'next/image'
import Button from '../components/ui/Button'
import { db } from '@/lib/db'

export default async function Home() {

  await db.set("test", "test")

  return (
    <div>
      
      <div className='text-red-500'> test </div>
      <Button>Button</Button>
    </div>
  )
}
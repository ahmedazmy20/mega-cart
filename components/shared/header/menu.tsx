import { ShoppingCartIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function menu() {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href='/signin' className='header-button flex items-center'>
           Hello,Sign in
            </Link>

            <Link href='/cart' className='header-button'>
            <div className='flex items-end'>
              <ShoppingCartIcon className='w-8 h-8'/>
              Cart
            </div>
            </Link>

        </nav>
    </div>
  )
}

export default menu
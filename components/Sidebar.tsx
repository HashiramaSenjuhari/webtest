import { navDetails } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Icon from '../public/next.svg'

const Sidebar = () => {
  return (
    <aside className=' h-screen w-[15%] border max-tablet:hidden'>
      <div className=' w-[60%] p-5'>
        <Image src={Icon} alt=''/>
      </div>
      <nav className=' w-full h-full'>
        <SignedIn>
          <div className=' flex  flex-col'>
          {
          navDetails.slice(0,3).map((navDetail) => {
            return(
                <div key={navDetail.name} className=' p-3 bg-slate-100'>
                  <Link href={navDetail.link} className=' bg-slate-200'>{navDetail.name}</Link>
                </div>
            )
          })
        }
          </div>
        {/* {
          navDetails.slice(3,6).map((navDetail) => {
            return(
                <div key={navDetail.name}>
                  <Link href={navDetail.link}>{navDetail.name}</Link>
                </div>
            )
          })
        } */}
        <UserButton afterSignOutUrl='/' showName/>
        </SignedIn>
        <SignedOut>
            <Button asChild>
              <Link href='/'>SignOut</Link>
            </Button>
        </SignedOut>
      </nav>
    </aside>
  )
}

export default Sidebar
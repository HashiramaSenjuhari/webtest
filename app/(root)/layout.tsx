import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className=' flex'>
      <Sidebar/>
      {/* <MobileSidebar/> */}
      {children}
    </div>
  )
}

export default layout
import CoustomAdminNav from '@/components/adminnav/page'
import { Sidebar } from '@/components/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex w-full h-[100vh]'>
      <Sidebar/>

      <div className='w-full'>
        <CoustomAdminNav/>
        {children}
      </div>
      
    
    </div>
  )
}

export default layout

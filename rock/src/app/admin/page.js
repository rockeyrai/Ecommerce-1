import { ChartComponent } from '@/components/chart-area-gradient'
import { PieChartComponent } from '@/components/chart-pie-donut-text';
import { TrendingUp } from 'lucide-react'
import React from 'react'
import { IoIosMore } from "react-icons/io";


const AdminDashboard = () => {
  return (
    <div className='p-5 flex w-full flex-col gap-5' >
      <div className='flex gap-3 w-full'>
        <div className='h-32 w-1/4 border rounded-xl flex flex-col space-x-2 p-3 '>
          <div className='flex my-1 justify-between'>
            <p>Total Sales</p> 
            <IoIosMore className='w-5 h-5 rounded-full p-1 opacity-50 bg-gray-200' />
          </div>
          <h1 className='font-bold text-2xl my-2'>Rs.20,000</h1>
          <div className='flex gap-3 items-center text-sm'>
            <spann className='bg-green-400 text-[10px] gap-1 justify-center items-center flex h-atuo p-1 rounded'>
            <TrendingUp className="h-4 w-4" />12.3% 
            </spann><span className='text-xs'>Compared to last month </span>
          </div>
        </div>
        <div className='h-32 w-1/4 border rounded-xl flex flex-col space-x-2 p-3 '>
          <div className='flex my-1 justify-between'>
            <p>Total Sales</p> 
            <IoIosMore className='w-5 h-5 rounded-full p-1 opacity-50 bg-gray-200' />
          </div>
          <h1 className='font-bold text-2xl my-2'>Rs.20,000</h1>
          <div className='flex gap-3 items-center text-sm'>
            <spann className='bg-green-400 text-[10px] gap-1 justify-center items-center flex h-atuo p-1 rounded'>
            <TrendingUp className="h-4 w-4" />12.3% 
            </spann><span className='text-xs'>Compared to last month </span>
          </div>
        </div>
        <div className='h-32 w-1/4 border rounded-xl flex flex-col space-x-2 p-3 '>
          <div className='flex my-1 justify-between'>
            <p>Total Sales</p> 
            <IoIosMore className='w-5 h-5 rounded-full p-1 opacity-50 bg-gray-200' />
          </div>
          <h1 className='font-bold text-2xl my-2'>Rs.20,000</h1>
          <div className='flex gap-3 items-center text-sm'>
            <spann className='bg-green-400 text-[10px] gap-1 justify-center items-center flex h-atuo p-1 rounded'>
            <TrendingUp className="h-4 w-4" />12.3% 
            </spann><span className='text-xs'>Compared to last month </span>
          </div>
        </div>
        <div className='h-32 w-1/4 border rounded-xl flex flex-col space-x-2 p-3 '>
          <div className='flex my-1 justify-between'>
            <p>Total Sales</p> 
            <IoIosMore className='w-5 h-5 rounded-full p-1 opacity-50 bg-gray-200' />
          </div>
          <h1 className='font-bold text-2xl my-2'>Rs.20,000</h1>
          <div className='flex gap-3 items-center text-sm'>
            <spann className='bg-green-400 text-[10px] gap-1 justify-center items-center flex h-atuo p-1 rounded'>
            <TrendingUp className="h-4 w-4" />12.3% 
            </spann><span className='text-xs'>Compared to last month </span>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-between bg-red-600'>
        <div>
        <ChartComponent/>
        </div>
        <div>
        <PieChartComponent/>
        </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard

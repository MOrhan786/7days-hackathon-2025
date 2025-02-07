import { AdminHeader } from '@/components/AdminHeader';
import { AdminSidebar } from '@/components/AdminSidebar';
import StatisticsCharts from '@/components/statistics-charts'
import React from 'react'

function AdminPage() {
  return (
    <div className='flex  items-center justify-center'>
     <div className="min-h-screen">
      <AdminHeader/>
      <div className="flex">
      <AdminSidebar/>
        <StatisticsCharts/>
        </div>
        </div>
    </div>
  )
}

export default AdminPage;

import React from 'react'

import AppLayout from '../../components/AppLayout'
import Card from '../../components/elements/Card'

const Dashboard = () => {
  return (
    <AppLayout heading="Dashboard">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        <div className="md:w-1/2">
          <Card title="Last Flight">
            <div>Last flight information here</div>
          </Card>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col md:flex-row">
            <div className="stat md:rounded-l-lg border-r shadow-md p-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="stat-title font-light">Total Flights</div>
              <div className="stat-value font-medium text-3xl">89,400</div>
            </div>
            <div className="stat border-r shadow-md p-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="stat-title font-light">Hours Flown</div>
              <div className="stat-value font-medium text-3xl">89,400</div>
            </div>
            <div className="stat border-r shadow-md p-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="stat-title font-light">Distance Flown</div>
              <div className="stat-value font-medium text-3xl">89,400</div>
              {/* <div className="stat-desc font-extralight text-xs">Once around the world</div> */}
            </div>
            <div className="stat md:rounded-r-lg shadow-md p-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="stat-title font-light">Points</div>
              <div className="stat-value font-medium text-3xl">89,400</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard

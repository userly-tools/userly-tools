import React from 'react'
import Dashboard from './Dashboard'

const CalendarContainer = () => {
  
  return (
    <>
      <Dashboard pass={Calendar} activeTab={2} />
    </>
  );

}


const Calendar = () => {
  return (
    <>
      CALENDAR
    </>
  )
}

export default CalendarContainer;
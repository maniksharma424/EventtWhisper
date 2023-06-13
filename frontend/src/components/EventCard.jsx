import React from 'react'

const EventCard = ({event}) => {
  const {day,month,year, hour, minutes, timeZone, name, description ,active} = event;
  return (
    <div className='sm:w-5/6 h-fit flex'>
      <div id='info' className='w-1/2 h-full flex justify-start items-center py-1'>
        <div id='date' className='w-1/4'>{day}</div>
        <div id='date' className='w-3/4'></div>
      </div>

    </div>
  )
}

export default EventCard
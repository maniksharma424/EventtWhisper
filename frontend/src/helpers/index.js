export const showEvents = (setShowWidget)=>{
    setShowWidget({
        isCalendar: false,
        isProfile: false,
        isFeedback: false,
        isPricing: false,
        isEvents: true,
      });
}
export const showFeedback = (setShowWidget)=>{
    setShowWidget({
        isCalendar: false,
        isProfile: false,
        isFeedback: true,
        isPricing: false,
        isEvents: false,
      });
}
export const showPricing = (setShowWidget)=>{
    setShowWidget({
        isCalendar: false,
        isProfile: false,
        isFeedback: false,
        isPricing: true,
        isEvents: false,
      });
}
export const showCalendar = (setShowWidget)=>{
    setShowWidget({
        isCalendar: true,
        isProfile: false,
        isFeedback: false,
        isPricing: false,
        isEvents: false,
      });
}
export const showProfile = (setShowWidget)=>{
    setShowWidget({
        isCalendar: false,
        isProfile: true,
        isFeedback: false,
        isPricing: false,
        isEvents: false,
      });
}



export const handleUpcommingEvents = (events,setFilteredEvents,date)=>{
  const upcommingEvents = events.filter(event=>parseInt(event.day) >= date.getDate() && parseInt(event.month) >= date.getMonth() )

  setFilteredEvents(upcommingEvents)

}
export const handleCompletedEvents = (events,setFilteredEvents,date)=>{
  const completedEvents = events.filter(event=>parseInt(event.day) < date.getDate() && parseInt(event.month) < date.getMonth() )

  setFilteredEvents(completedEvents)

}
export const handleCancelledEvents = (events,setFilteredEvents)=>{

  const cancelledEvents = events.filter(event=>event.active === false)

  setFilteredEvents(cancelledEvents)

}


export const showUpcomming = (eventType,setEventType)=>{
  setEventType({
    upcomming:true,
    completed:false,
    cancelled:false
    });
}
export const showCompleted = (eventType,setEventType)=>{
  setEventType({
    upcomming:false,
    completed:true,
    cancelled:false
    });
}
export const showCancelled = (eventType,setEventType)=>{
  setEventType({
    upcomming:false,
    completed:false,
    cancelled:true
    });
}

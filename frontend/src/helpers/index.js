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
  const upcommingEvents = events?.filter(event=>parseInt(event.day) >= date.getDate() && parseInt(event.month) >= date.getMonth() )

  setFilteredEvents(upcommingEvents)

}
export const handleCompletedEvents = (events,setFilteredEvents,date)=>{
  const completedEvents = events?.filter(event=>parseInt(event.day) < date.getDate() && parseInt(event.month) < date.getMonth() )

  setFilteredEvents(completedEvents)

}
export const handleSnoozedEvents = (events,setFilteredEvents)=>{

  const cancelledEvents = events?.filter(event=>event.active === false)

  setFilteredEvents(cancelledEvents)

}


export const showUpcomming = (eventType,setEventType)=>{
  setEventType({
    upcomming:true,
    completed:false,
    snoozed:false
    });
}
export const showCompleted = (eventType,setEventType)=>{
  setEventType({
    upcomming:false,
    completed:true,
    snoozed:false
    });
}
export const showCancelled = (eventType,setEventType)=>{
  setEventType({
    upcomming:false,
    completed:false,
    snoozed:true
    });
}



export const  sortObjectsByMonthAndDate = (objectsArray)=> {
  objectsArray.sort((a, b) => {
    const monthA = parseInt(a.month);
    const monthB = parseInt(b.month);
    const dayA = parseInt(a.day);
    const dayB = parseInt(b.day);

    if (monthA !== monthB) {
      return monthA - monthB;
    }

    return dayA - dayB;
  });

  return objectsArray;
}

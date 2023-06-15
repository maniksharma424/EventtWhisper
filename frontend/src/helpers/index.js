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
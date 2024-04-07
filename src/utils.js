export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// export const validateDate = (date, time) => {
//     const now = new Date();
//     return date > now ? true : false;
// };

export const defineTime = (hour) => {
    const time = new Date();
    time.setHours(hour);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);
    return time;
};
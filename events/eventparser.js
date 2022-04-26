const parseEvent = (data) => {
  const eventStartTime = new Date();
  eventStartTime.setMinutes(eventStartTime.getMinutes());
  const eventEndTime = new Date();
  eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);
  const event = {
    summary: data.title ? data.title : "Event",
    location: data?.location,
    description: data?.description,
    visibility: "public",
    remindOnRespondedEventsOnly: "true",
    colorId: 1,
    start: {
      dateTime: eventStartTime,
      timeZone: "America/Denver",
    },
    end: {
      dateTime: eventEndTime,
      timeZone: "America/Denver",
    },
    attendees: [
      { email: "dnyaneshwarbtecs35@gmail.com" },
      { email: "dnyaneshwar.ware.in@gmail.com" },
    ],
  };
  return event;
};

export default parseEvent;

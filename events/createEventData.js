import services from "../models/services.js";
import usersSchema from "../models/users.js";

const createEventData = async (slot) => {
  var attendees = [];

  const user_mail = await usersSchema.findOne(
    { _id: slot.user_id },
    { email: 1 }
  );

  const mentor_mail = await usersSchema.findOne(
    { _id: slot.mentor_id },
    { email: 1 }
  );

  attendees.push({ email: user_mail.email });
  attendees.push({ email: mentor_mail.email });

  const service = await services.findOne({ _id: slot.service_id });
  console.log(service);
  const summary = service?.title;

  const description = service?.description;

  return {
    summary,
    description,
    start_time: slot.start_time,
    end_time: slot.end_time,
    attendees,
  };
};

export default createEventData;

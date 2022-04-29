import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";
import servicesSchema from "../../models/services.js";
import moment from "moment";

export const getMentorSlots = async (req, res) => {
  try {
    const query = req?.query || {};
    const service_id = query?.service_id;
    const mentor_id = query?.mentor_id;
    const date = query?.date;
    const { duration } = await servicesSchema.findById(service_id);
    const slotData = await slotsSchema.findOne(
      { mentor_id, date },
      { mentor_slots: 1, user_slots: 1 }
    );
    let data = [];
    if (slotData == null) {
      sendSuccessResponse({
        res,
        data,
      });
      return null;
    }
    const { mentor_slots, user_slots } = slotData;
    console.log(duration, mentor_slots);

    mentor_slots.map((slot) => {
      let start_time = moment(slot.start_time);
      let end_time = moment(slot.end_time);
      let time = moment.duration(end_time.diff(start_time)).asMinutes();

      while (time >= duration) {
        data = [
          ...data,
          {
            start_time: start_time,
            end_time: moment(start_time).add(duration, "m").toDate(),
            is_booked: false,
          },
        ];
        time -= duration;
        start_time = moment(start_time).add(duration, "m").toDate();
      }
    });
    data = data.map((slot) => {
      user_slots?.map((userSlot) => {
        const sTime = new Date(slot.start_time);
        const usTime = new Date(userSlot.start_time);
        if (sTime.getTime() === usTime.getTime()) {
          slot = { ...slot, is_booked: true };
        }
      });
      return slot;
    });
    sendSuccessResponse({
      res,
      data,
    });
  } catch (err) {
    console.log(err);
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};

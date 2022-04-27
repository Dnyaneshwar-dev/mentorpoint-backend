import { getMongoDuplicateKeyError } from "./errors.js";

const sendSuccessResponse = (params) => {
  const { res, code, data } = params;

  res.status(200).send({
    status: "success",
    data,
  });
};

const sendFailResponse = (params) => {
  let { res, statusCode = 400, err } = params;
  let errorToSend = err;
  if (err?.code === 11000) {
    let keyValues = getMongoDuplicateKeyError(err?.keyValue);
    errorToSend = {
      message: `${keyValues?.key}(${keyValues?.value}) already exists.`,
    };
    statusCode = 409;
  }

  res.status(statusCode).send({
    status: "failed",
    err: errorToSend,
  });
};

export { sendSuccessResponse, sendFailResponse };

// ,
//   "slots": [
//     {
//       "start_time": "2022-04-15T15:03:50.577Z",
//       "end_time": "2022-04-15T15:04:50.577Z"
//     }
//   ]

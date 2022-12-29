import { DateTime } from "luxon";

export const createDateTime = (Epoch, format) => {
  return DateTime.fromSeconds(Epoch).toLocaleString(format);
};

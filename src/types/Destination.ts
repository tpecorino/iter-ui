import { Site } from "./Site";

export type Destination = {
  name: string;
  country: string;
  arriveDate: string;
  departDate: string;
  sites?: Site[];
  transportation?: any;
  accommodations?: any;
};

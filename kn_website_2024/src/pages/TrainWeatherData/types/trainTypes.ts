export type Departure = {
  departureTime: string;
  departureTimeEpochSeconds: number;
  arrivalTime: string;
  line: string;
};

type TransitLine = {
  name?: string;
};

type TransitDetails = {
  line?: TransitLine;
};

type TransitStep = {
  transit_details?: TransitDetails;
};

export type RouteLeg = {
  departure_time?: {
    text?: string;
    value?: number;
  };
  arrival_time?: {
    text?: string;
    value?: number;
  };
  steps?: TransitStep[];
};

type MapsRoute = {
  legs?: RouteLeg[];
};

export type MapsResponse = {
  routes?: MapsRoute[];
};

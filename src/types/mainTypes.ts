export type WeatherDataType = {
  current: {
    location: string;
    icon: string;
    altText: string;
    date: number;
    temp_c: number;
    temp_f: number;
    maxTemp_c: number;
    minTemp_c: number;
    maxTemp_f: number;
    minTempf: number;
  };
  week: {
    location: string;
    icon: string;
    altText: string;
    date: number;
    temp_c: number;
    temp_f: number;
    maxTemp_c: number;
    minTemp_c: number;
    maxTemp_f: number;
    minTempf: number;
  }[];
};

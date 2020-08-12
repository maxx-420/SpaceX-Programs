export default interface Mission {
  image: string;
  name: string;
  missionIds: string[];
  launch_year: string;
  launch_success: boolean;
  landing_success: boolean;
  flight_number: number;
}

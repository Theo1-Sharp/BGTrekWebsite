import { useQuery } from "@tanstack/react-query";

interface Forecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export default function getData() {
  async function fetchWeatherData() {
    const res = await fetch("/api/weatherforecast");
    return res.json();
  }

  const { isLoading, isError, data, error } = useQuery<Forecast[], Error>({
    queryKey: ["weather"],
    queryFn: fetchWeatherData,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data?.map((forecast, index) => (
        <div key={index}>
          <h2>{forecast.date}</h2>
          <p>Temperature (C): {forecast.temperatureC}</p>
          <p>Temperature (F): {forecast.temperatureF}</p>
          <p>Summary: {forecast.summary}</p>
        </div>
      ))}
    </ul>
  );
}

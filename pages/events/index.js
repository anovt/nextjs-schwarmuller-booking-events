import { getAllEvents } from "../../data/dummy-data";
import { useEffect, useState } from "react";
import Link from "next/link";

function EventListPage() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const data = getAllEvents();
    setEventList(data);
  }, []);

  return (
    <div>
      <hi>Event List Page</hi>
      { !eventList && <p>No Event Data...</p> }
      { eventList && (
        <ul>
          {eventList.map((item) => (
            <li key={item.id}>
              <Link href={`/events/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventListPage;

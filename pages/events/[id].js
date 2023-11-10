import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";
import { Fragment, useEffect, useState } from "react";
function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.id;
  console.log(eventId);

  const eventDetail = getEventById(eventId);
  console.log(eventDetail);
  if (!eventDetail) {
    return <p>No Event Data</p>;
  }

  return (
    <Fragment>
      <EventSummary title={eventDetail.title}></EventSummary>
      <EventLogistics
        date={eventDetail.date}
        address={eventDetail.location}
        image={eventDetail.image}
        imageAlt={eventDetail.title}
      ></EventLogistics>
      <EventContent>
        <p>{eventDetail.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

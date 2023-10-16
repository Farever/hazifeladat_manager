import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar(props) {
  var event = [];
  {
    props.data.map((data) => event.push({
      title: data.tantargy + " , " + data.temakor,
      date: data.hatarido
    }))
  }

  function handleDateClick(arg) {
    alert(arg.dateStr);
  }

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        weekends={false}
        events={event}
        dateClick={handleDateClick}
        height={"90vh"}
      />
    </div>
  );
}
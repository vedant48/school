import React from 'react';

function Event() {
  const events = [
    {
      title: "Annual Sports Day",
      date: "May 15, 2023",
      description: "Join us for an exciting day of sports and games. Students will showcase their skills and compete in various events.",
      isPastEvent: true
    },
    {
      title: "Science Fair",
      date: "June 20, 2023",
      description: "Explore the wonders of science through interactive exhibits and experiments. Students will present their innovative projects.",
      isPastEvent: false
    },
    // Add more events here...
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Past and Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-xl font-bold mb-4">{event.title}</h2>
              <p className="mb-2">Date: {event.date}</p>
              <p>{event.description}</p>
              <p className="mt-4 text-sm font-semibold">
                {event.isPastEvent ? "Past Event" : "Upcoming Event"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;

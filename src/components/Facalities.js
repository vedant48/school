import React from 'react';

function Facilities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Facilities</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Transportation</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec semper lacus.
          Nulla tincidunt nisi ac elit efficitur, non blandit odio faucibus. Sed suscipit,
          erat sed vulputate vestibulum, ex est feugiat enim, ut tristique purus est vitae mi.
          Quisque ac augue nec urna tincidunt sollicitudin. Fusce consectetur risus sed neque
          tristique ultricies. Nulla facilisi. Nunc eu mauris sed orci tristique consectetur.
          Donec non ex sed nunc faucibus tristique. Nam ut semper lectus, nec consectetur dolor.
        </p>
        <ul className="list-disc ml-8">
          <li>Transportation service available for students</li>
          <li>Well-maintained vehicles with experienced drivers</li>
          <li>Convenient pickup and drop-off points</li>
          <li>Ensured safety and supervision during travel</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Library</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec semper lacus.
          Nulla tincidunt nisi ac elit efficitur, non blandit odio faucibus. Sed suscipit,
          erat sed vulputate vestibulum, ex est feugiat enim, ut tristique purus est vitae mi.
          Quisque ac augue nec urna tincidunt sollicitudin. Fusce consectetur risus sed neque
          tristique ultricies. Nulla facilisi. Nunc eu mauris sed orci tristique consectetur.
          Donec non ex sed nunc faucibus tristique. Nam ut semper lectus, nec consectetur dolor.
        </p>
        <ul className="list-disc ml-8">
          <li>Extensive collection of books, journals, and reference materials</li>
          <li>Quiet and conducive study environment</li>
          <li>Access to online resources and e-books</li>
          <li>Qualified librarians to assist students</li>
        </ul>
      </div>

      {/* Add more facility sections as needed */}
    </div>
  );
}

export default Facilities;

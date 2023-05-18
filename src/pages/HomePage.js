import React, { useEffect, useState } from 'react';
import News from '../components/News'
import Event from '../components/Event';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

function HomePage() {

  return (
    <>
      

      {/* About Institute section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Institute</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim commodo dolor, nec laoreet nunc feugiat nec. Vivamus dapibus tortor eu efficitur cursus.
          </p>
          <p className="mb-6">
            Fusce lobortis consectetur turpis ac placerat. Sed vehicula quam sit amet finibus pellentesque. Phasellus ut magna sapien.
          </p>
          <p className="mb-6">
            Integer in feugiat ipsum, nec scelerisque tellus. In tincidunt nisl eu dapibus dignissim. Sed ut gravida nibh, eu aliquam dolor.
          </p>
        </div>
      </section>

      {/* Director's Message section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="Director" className="rounded-full w-48 h-48 object-cover mx-auto mb-4" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Director's Message</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu metus at est condimentum tristique. In hac habitasse platea dictumst.
              </p>
              <p className="mb-6">
                Fusce eget risus at mauris imperdiet pellentesque. Aliquam porttitor semper risus vel suscipit.
              </p>
              <p className="mb-6">
                Duis lacinia nisl vel arcu aliquet, ac dapibus leo finibus. Nullam vestibulum, justo ut pharetra viverra, turpis sem varius libero, a feugiat felis ipsum ac est.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Announcement section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">News and Announcement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <News />
          </div>
        </div>
      </section>

      {/* Events section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          {/* Event items */}
          <Event />
        </div>
      </section>
    </>
  );
}

export default HomePage;

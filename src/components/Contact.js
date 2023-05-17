import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Institute Details</h2>
          <p className="mb-2">
            Address: 123 Main Street, City, State, Country
          </p>
          <p className="mb-2">Director's Email: director@example.com</p>
          <p className="mb-2">Director's Phone: +1 123 456 7890</p>
          <p className="mb-2">Institute Email: info@example.com</p>
          <p className="mb-2">Institute Phone: +1 987 654 3210</p>
        </div>
      </div>
      <div className="mt-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7772145254063!2d-74.00636678424246!3d40.712084980287545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1625508457375!5m2!1sen!2sca"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

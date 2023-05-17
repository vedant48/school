import React from 'react';

function Admission() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Admission Procedure</h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 1: Application Form</h2>
            <p>
              Fill out the online application form available on our website or visit our admissions office to collect a physical copy of the form.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 2: Document Submission</h2>
            <p>
              Submit the required documents, including academic transcripts, birth certificate, and any other supporting documents as mentioned in the application form.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 3: Entrance Exam</h2>
            <p>
              Complete the entrance exam as per the scheduled date and time. The exam may include sections on English, Mathematics, and General Knowledge.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 4: Interview</h2>
            <p>
              Shortlisted candidates will be invited for an interview with the admissions committee. The interview may assess the candidate's communication skills, interests, and alignment with the institute's values.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 5: Admission Decision</h2>
            <p>
              After evaluating the application, exam scores, and interview performance, the admissions committee will make a decision regarding the candidate's admission. The decision will be communicated to the candidate and their parents/guardians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;

import React from 'react';
  
const Eligibility = () => {
  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-7xl">
        <h1 className="text-4xl font-extrabold text-red-700 mb-8 text-center">Blood Donation Eligibility</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Qualifications for Blood Donation</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl ">
            <li>Age range: 18 to 60 years old.</li>
            <li>Haemoglobin level: Minimum of 12.5 g/dl.</li>
            <li>Pulse: Steady, 50-100 beats per minute.</li>
            <li>Blood pressure: 50–100 mm Hg (diastolic), 100–180 mm Hg (systolic).</li>
            <li>Oral temperature: Must not exceed 37.5°C.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Weight</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Minimum weight: 50 kg.</li>
            <li>* Donors of whole blood must weigh at least 45 kg in some regions to donate 350 ml ± 10%.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">General Health</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Donor must be in excellent health during donation.</li>
            <li>Infections: No donations if you have the flu, cold, or any other infection.</li>
            <li>Piercings and Tattoos: Wait six months, or 12 hours if done by a licensed provider and fully healed.</li>
            <li>Dental Work: Postpone major work for a month; minor procedures for 24 hours.</li>
            <li>Haemoglobin Level: Tested at donation site (12.0 g/dl for females, 13.0 g/dl for males).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Health and Medical Conditions</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Chronic illnesses: Diabetes, Hypertension, etc.</li>
            <li>Recent illness or surgery.</li>
            <li>Medication use and its effect on eligibility.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Infectious Diseases</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Testing for HIV, Hepatitis B & C, and other blood-borne infections.</li>
            <li>Temporary deferrals for recent infections or exposure.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Lifestyle Factors</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Impact of drug and alcohol use.</li>
            <li>Guidelines for piercings and tattoos.</li>
            <li>Sexual history and partnerships.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Pregnancy and Nursing</h2>
          <h3 className="text-2xl font-medium text-red-500 mb-3">Pregnancy</h3>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Pregnant women are ineligible due to increased blood needs.</li>
            <li>Postpartum: Wait 6-12 months after childbirth to donate.</li>
          </ul>
          <h3 className="text-2xl font-medium text-red-500 mt-5 mb-3">Nursing</h3>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Breastfeeding mothers: Wait at least 6 months after birth; ensure breastfeeding is well-established.</li>
            <li>Nutrition: Ensure adequate iron levels for both mother and baby.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">General Advice</h2>
          <ul className="list-inside list-disc space-y-3 text-gray-700 text-2xl">
            <li>Consult with healthcare providers before donating.</li>
            <li>Follow local guidelines from nearby blood donation centers.</li>
          </ul>
        </section>
        
        <div className="mt-8 text-center">
          <button className="bg-red-600 text-white text-lg px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
            FAQs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eligibility;

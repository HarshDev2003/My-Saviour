import React, { useState, useEffect } from 'react';
import { statesData, districtsData, citiesData } from '../components/data/data';

const Registration = () => {
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    country: 'India',
    state: '',
    district: '',
    city: '',
    locality: '',
    dob: '',
    bloodGroup: '',
    mobile: '',
    altMobile: '',
    gender: '',
    weight: '',
    lastDonated: '',
    consultation: false,
  });

  useEffect(() => {
    if (formData.state) {
      setDistricts(districtsData[formData.state] || []);
      setFormData({ ...formData, district: '', city: '' });
    }
  }, [formData.state]);

  useEffect(() => {
    if (formData.district) {
      setCities(citiesData[formData.district] || []);
    } else {
      setCities([]);
    }
  }, [formData.district]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-red-800 to-red-500 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Blood Donor Registration</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our blood donor registration page! Please fill out the form to become a donor.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-16 overflow-y-auto max-h-screen">
          <div className="mb-6">
            <h3 className="text-gray-800 text-2xl font-bold">Register as a Blood Donor</h3>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter name"
              />
            </div>

            {/* Country Selector */}
            <div>
              <label htmlFor="country" className="text-gray-800 text-sm mb-2 block">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              >
                <option value="India">India</option>
              </select>
            </div>

            {/* State Selector */}
            <div>
              <label htmlFor="state" className="text-gray-800 text-sm mb-2 block">State/UT</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              >
                <option value="">Select State</option>
                {statesData.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* District Selector */}
            <div>
              <label htmlFor="district" className="text-gray-800 text-sm mb-2 block">District</label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                disabled={!formData.state}
              >
                <option value="">Select District</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
              </select>
            </div>

            {/* City Selector */}
            <div>
              <label htmlFor="city" className="text-gray-800 text-sm mb-2 block">City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                disabled={!formData.district}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Locality */}
            <div>
              <label htmlFor="locality" className="text-gray-800 text-sm mb-2 block">Locality</label>
              <input
                id="locality"
                name="locality"
                type="text"
                value={formData.locality}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter locality"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="text-gray-800 text-sm mb-2 block">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              />
            </div>

            {/* Blood Group Selector */}
            <div>
              <label htmlFor="bloodGroup" className="text-gray-800 text-sm mb-2 block">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="text-gray-800 text-sm mb-2 block">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter mobile number"
              />
            </div>

            {/* Alternate Mobile Number */}
            <div>
              <label htmlFor="altMobile" className="text-gray-800 text-sm mb-2 block">Alternate Mobile Number</label>
              <input
                id="altMobile"
                name="altMobile"
                type="tel"
                value={formData.altMobile}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter alternate mobile number"
              />
            </div>

            {/* Gender Selector */}
            <div>
              <label htmlFor="gender" className="text-gray-800 text-sm mb-2 block">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="text-gray-800 text-sm mb-2 block">Weight (must be greater than or equal to 45 kg)</label>
              <input
                id="weight"
                name="weight"
                type="number"
                min="45"
                value={formData.weight}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter weight in kg"
              />
            </div>

            {/* Last Time Blood Donated */}
            <div>
              <label htmlFor="lastDonated" className="text-gray-800 text-sm mb-2 block">Last Time Blood Donated</label>
              <input
                id="lastDonated"
                name="lastDonated"
                type="date"
                value={formData.lastDonated}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              />
            </div>

            {/* Consultation Checkbox */}
            <div className="flex items-center">
              <input
                id="consultation"
                name="consultation"
                type="checkbox"
                checked={formData.consultation}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="consultation" className="ml-3 block text-sm text-gray-800">
                I accept to receive consultation if needed
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;


function Landing() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-600 text-white py-12 md:flex-row md:justify-between">
    <div className="text-center md:text-left md:ml-16">
      <h1 className="text-5xl font-bold leading-tight mb-4">Donate Blood</h1>
      <h2 className="text-4xl font-bold leading-tight mb-6">Be a Saviour</h2>
      <button className="bg-white text-red-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
        Join Us
      </button>
    </div>
    <div className="mt-8 md:mt-0 md:mr-16">
      <img src="/Blood donation.png" alt="Blood Donation" className="max-w-40 h-auto" />
    </div>
  </div>
  )
}

export default Landing
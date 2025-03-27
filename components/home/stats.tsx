export default function Stats() {
  return (
    <section className="py-10 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <div className="bg-[#F1F5F9] p-6 rounded-lg text-center w-full lg:w-[400px] mx-auto">
          <h3 className="text-4xl font-bold text-black">95%</h3>
          <p className="text-[#1E293B] mt-2 text-xl">Happy Customer</p>
        </div>
  
        <div className="bg-[#F1F5F9] p-6 rounded-lg text-center w-full lg:w-[400px] mx-auto">
          <h3 className="text-4xl font-bold text-black">1 Million+</h3>
          <p className="text-[#1E293B] mt-2 text-xl">Yearly Sale</p>
        </div>
  
        <div className="bg-[#F1F5F9] p-6 rounded-lg text-center w-full lg:w-[400px] mx-auto">
          <h3 className="text-4xl font-bold text-black">20k+</h3>
          <p className="text-[#1E293B] mt-2 text-xl">Customer Rating</p>
        </div>
      </div>
    </div>
  </section>
  
  )
}


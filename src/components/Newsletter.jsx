const Newsletter = () => {
  return (
    <section className="flex justify-between bg-slate-900 text-white px-10 py-8 mt-20">
      <h1 className="font-body-bold font-bold text-3xl">Subscribe to our Newsletter</h1>
      <form className="flex justify-between max-w-3xl flex-1 space-x-10">
        <input type="email" placeholder="Your Email" className="bg-slate-900 font-body w-full text-lg rounded-full border border-white border-opacity-60 transition focus:border-white focus:border-opacity-60 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-60" />
        <input type="submit" value="Subscribe" className="bg-white text-slate-900 font-body-heavy uppercase cursor-pointer text-xl px-5 py-2 rounded-full" />
      </form>
    </section>
  )
}

export default Newsletter
const Newsletter = () => {
  return (
    <div className="flex justify-between bg-slate-900 text-white px-10 py-8">
      <h1 className="font-body font-bold text-3xl">Subscribe to our Newsletter</h1>
      <form className="flex justify-between ">
        <input type="email" placeholder="Your Email" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  )
}

export default Newsletter
function Pricing() {
  return (
    <div className="bg-white">
      <div className="m-12">
        <div className="m-4 text-center text-2xl font-bold text-center">
          Pricing
        </div>
        <div className="text-center">
          Choose the plan that suits your business needs.
        </div>
      </div>
      <div className="grid md:grid-cols-2 ">
        <div className="text-center border-2 m-12 p-12 rounded-xl bg-gray-100">
          <div className="text-xl font-bold p-6">Starter Plan</div>
          <div className="p-8">Free Plan</div>
          <div className="font-semibold text-slate-600">
            Up to 100 replies/month
          </div>
        </div>
        <div className="text-center border-2 m-12 p-12 rounded-xl bg-gray-100">
          <div className="text-xl font-bold p-6">Professional Plan</div>
          <div className="p-8">€1,900/year</div>
          <div className="font-semibold text-slate-600">
            Up to 2,000 replies/month
          </div>
        </div>
        <div className="text-center border-2 m-12 p-12 rounded-xl bg-gray-100">
          <div className="text-xl font-bold p-6">Business Plan</div>
          <div className="p-8">€3,900/year</div>
          <div className="font-semibold text-slate-600">
            Up to 10,000 replies/month
          </div>
        </div>
        <div className="text-center border-2 m-12 p-12 rounded-xl bg-gray-100">
          <div className="text-xl font-bold p-6">Enterprise Plan</div>
          <div className="p-8">Call us for pricing</div>
          <div className="font-semibold text-slate-600">
            Unlimited replies/month
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

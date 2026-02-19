import Image from "next/image";

export default function BeforeAfter() {
  const cases = [
    {
      title: "Dental Implant Case",
      before: "/images/before-1.png",
      after: "/images/after-1.png",
    },
    {
      title: "Teeth Whitening Case",
      before: "/images/whitening-before.png",
      after: "/images/whitening-after.png",
    },
    {
      title: "Braces Correction Case",
      before: "/images/braces-before.png",
      after: "/images/braces-after.png",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Smile Transformations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-slate-800">
                {item.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div>
                  <p className="text-center text-sm mb-2 font-medium text-slate-600">
                    Before
                  </p>
                  <Image
                    src={item.before}
                    alt={`Before ${item.title}`}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-56"
                  />
                </div>

                {/* After */}
                <div>
                  <p className="text-center text-sm mb-2 font-medium text-slate-600">
                    After
                  </p>
                  <Image
                    src={item.after}
                    alt={`After ${item.title}`}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-56"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Patient Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}

function ReviewCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      ⭐⭐⭐⭐⭐
      <p className="mt-4 text-gray-600">
        Best dentist in Jaipur. Highly recommended.
      </p>
    </div>
  );
}

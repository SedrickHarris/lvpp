interface TestimonialBlockProps {
  quote: string;
  author: string;
}

export default function TestimonialBlock({ quote, author }: TestimonialBlockProps) {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gunmetal font-semibold italic mb-4">
          “{quote}”
        </p>
        <span className="text-sm text-steel font-medium">— {author}</span>
      </div>
    </section>
  );
}
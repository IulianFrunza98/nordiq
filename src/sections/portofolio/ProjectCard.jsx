import { Link } from "react-router-dom";

export default function ProjectCard({ id, image, title, description }) {
  return (
    <div className="bg-white rounded-xl text-center px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 w-[300px] cursor-pointer h-full flex flex-col items-center justify-center gap-2">
      <img className="h-56 object-contain" src={image} alt={title} />
      <h2 className="text-blue-500 font-semibold">{title}</h2>
      <p className="font-medium text-gray-700 text-base leading-snug">
        {description}
      </p>
      <Link
        to={`/proiecte/${id}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Vezi detalii →
      </Link>
    </div>
  );
}

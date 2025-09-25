export default function ProjectGallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) return null;

  const gallery = project.gallery[0];
  const images = Object.values(gallery.images).filter(Boolean);

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full pb-[75%] rounded-md overflow-hidden"
          >
            <img
              src={img}
              alt={`Image ${idx + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}

        {gallery.videos?.video1 && (
          <div className="relative w-full pb-[75%] rounded-md overflow-hidden">
            <video
              src={gallery.videos.video1}
              controls
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

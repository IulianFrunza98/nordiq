export default function ProjectGallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) return null;

  const gallery = project.gallery[0];

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        {Object.values(gallery.images).map(
          (img, idx) =>
            img && (
              <div key={idx} className="aspect-[4/3]">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover rounded-md hover:scale-103 transition duration-200"
                />
              </div>
            )
        )}

        {gallery.videos?.video1 && (
          <div className="aspect-[4/3]">
            <video
              src={gallery.videos.video1}
              controls
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

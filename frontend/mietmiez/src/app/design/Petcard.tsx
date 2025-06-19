interface PetCardProps {
  name: string;
  imageUrl: string;
  address: string;
}

export default function PetCard({ name, imageUrl, address }: PetCardProps) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 mt-1 flex items-center">
          <span className="mr-1">📍</span> {address}
        </p>
        <button className="mt-4 w-full bg-blue-100 text-blue-900 font-semibold py-2 rounded-lg hover:bg-blue-200 transition">
          Details ansehen
        </button>
      </div>
    </div>
  );
}

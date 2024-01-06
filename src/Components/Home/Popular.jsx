const Popular = ({ popular }) => {
  const { Name, ImageUrl } = popular;

  return (
    <div className="card w-80 bg-transparent mb-4 mx-auto">
      <figure>
        <img src={ImageUrl} alt={Name} className="h-64 w-60 rounded-xl" />
      </figure>
      <h2 className="flex justify-center text-3xl font-bold">{Name}</h2>
    </div>
  );
};

export default Popular;

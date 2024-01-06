import { useNavigate } from "react-router-dom";

const AddRecommended = () => {
  const navigate = useNavigate();

  const handleAddRecommended = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.Name.value;
    const Price = form.Price.value;
    const ImageUrl = form.ImageUrl.value;

    const newItem = {
      Name,
      Price,
      ImageUrl,
    };

    navigate("/", { state: { newItem, updateComponent: 'Recommended' } });
  };

  return (
    <div className="px-20 text-5xl text-[#FFAA33] text-center py-10">
      <h3>Add New Item</h3>
      <form onSubmit={handleAddRecommended}>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Name</span>
            </label>
            <label className="input-group">
              <input
                name="Name"
                type="text"
                pattern="[A-Za-z ]+"
                placeholder="Enter Item Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Price:</span>
            </label>
            <label className="input-group">
              <input
                name="Price"
                type="number"
                placeholder="Enter Price"
                className="input input-bordered  w-full"
                required
              />
            </label>
          </div>
        </div>

        {/* imgUrl and popular */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">ImageUrl</span>
            </label>
            <label className="input-group">
              <input
                name="ImageUrl"
                type="url"
                placeholder="Enter ImageUrl"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-block text-3xl mb-7 bg-orange-600 text-white hover:bg-orange-00"
        />
      </form>
    </div>
  );
};

export default AddRecommended;

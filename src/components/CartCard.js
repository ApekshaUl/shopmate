export const CartCard = ({ item }) => {
    return (
      <div className="p-4 m-4 flex flex-wrap justify-center items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        
        {/* Product Image */}
        <img
          className="w-32 h-22 object-cover rounded-lg md:w-48 md:h-22 mr-6"
          src={item.image}
          alt={item.name}
        />
  
        {/* Product Details */}
        <div className="flex flex-1 items-center justify-between w-full">
          
          {/* Name & Price */}
          <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">{item.name}</h5>
          <p className="text-xl font-medium text-gray-700 dark:text-gray-400 ml-6">${item.price}</p>
  
          {/* Remove Button */}
          <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
            Remove
          </button>
  
        </div>
  
      </div>
    );
  };
  
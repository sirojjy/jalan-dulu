// components/Kategori.js
import React, { useEffect, useState } from "react";
import { fetchCategories } from "../utils/controller";

const Kategori = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories();
        const categoryData = Array.isArray(response.data) ? response.data : [];
        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([]);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap -mx-3">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.slice(0, 4).map((category) => (
            <div
              key={category.id}
              className="w-full px-3 mb-12 md:w-1/2 lg:w-1/4 hover-up-5 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".4s"
            >
              <img
                className="object-cover object-top w-64 h-64 mx-auto rounded"
                src={category.imageUrl} 
                alt={category.name}
              />
              <p className="mt-6">
                <strong className="text-md">{category.name}</strong>
              </p>
              <p className="mb-4 text-xs text-gray-500">{category.description}</p> {}
            </div>
          ))
        ) : (
          <p className="w-full mt-10 text-center">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default Kategori;

// PageCategory.js
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { pageCategories } from "../components/utils/controller";

const PageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoryData = await pageCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <section className="pt-10 pb-10 -mt-10 bg-blueGray-100">
          <div className="container text-center">
            <h1 className="mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated">
              Category
            </h1>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl mx-auto lg:max-w-3xl">
              <div>
                <div className="flex flex-wrap -mx-3">
                  {categories.map((category) => (
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
                      <p className="mt-6"><strong className="text-md">{category.name}</strong></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PageCategory;

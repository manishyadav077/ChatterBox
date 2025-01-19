import React from "react";

const topics = [
  {
    text: "python",
    img: "/python.png",
    description: "Let's discuss everything related to Python",
    slug: "python",
  },
  {
    text: "javascript",
    img: "/javascript.png",
    description: "Dive into the world of JavaScript and modern web development",
    slug: "js",
  },
  {
    text: "react",
    img: "/react.png",
    description:
      "Explore the React ecosystem and build amazing user interfaces",
    slug: "react",
  },
  {
    text: "nodejs",
    img: "/nodejs.png",
    description:
      "Learn and share insights about backend development with Node.js",
    slug: "node",
  },
  {
    text: "machine learning",
    img: "/ml.png",
    description: "Discuss the latest trends and algorithms in Machine Learning",
    slug: "machine-learning",
  },
];

const Forums = () => {
  return (
    <div className="container mx-auto my-20 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Discussion Forums
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.text}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={topic.img}
              alt={topic.text}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
                {topic.text}
              </h2>
              <p className="text-gray-600">{topic.description}</p>
              <link href={`/forum/${topic.slug}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Join Forum
                </button>
              </link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;

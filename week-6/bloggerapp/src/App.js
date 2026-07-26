import React from "react";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./data";

import "./App.css";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">

      {showCourses && (
        <CourseDetails courses={courses} />
      )}

      {showBooks ? (
        <BookDetails books={books} />
      ) : null}

      {showBlogs && (
        <BlogDetails blogs={blogs} />
      )}

    </div>
  );
}

export default App;
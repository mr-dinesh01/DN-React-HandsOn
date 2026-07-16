import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

    const showBook = true;
    const showBlog = true;
    const showCourse = true;

    // Element Variable
    let blogComponent;

    if (showBlog) {
        blogComponent = <BlogDetails />;
    }

    return (
        <div style={{ textAlign: "center" }}>

            <h1>Blogger Application</h1>

            {/* 1. if...else using element variable */}
            {blogComponent}

            <hr />

            {/* 2. Ternary Operator */}
            {
                showBook
                    ? <BookDetails />
                    : <h3>No Book Available</h3>
            }

            <hr />

            {/* 3. Logical AND */}
            {
                showCourse &&
                <CourseDetails />
            }

        </div>
    );
}

export default App;
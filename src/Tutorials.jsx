const tutorials = [
  {image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
    title: "Learn HTML",
    description: "Learn how to make a simple website using HTML.",
    author: "Traversy Media",
    rating: "4.8 ⭐",
    link: "https://www.youtube.com/watch?v=UB1O30fR-EE"},
  {image: "https://img.youtube.com/vi/BsDoLVMnmZs/hqdefault.jpg",
    title: "HTML Tutorial in Hindi",
    description: "Learn HTML basics in Hindi with simple examples.",
    author: "CodeWithHarry",
    rating: "4.9 ⭐",
    link: "https://www.youtube.com/watch?v=BsDoLVMnmZs" },
  {image: "/images/art2.png",
    title: "Learn CSS",
    description: "Learn how to add colours and styles to your website.",
    author: "W3Schools",
    rating: "4.8 ⭐",
    link: "https://www.w3schools.com/css/"}];
function Tutorials() {
  return (
    <section id="tutorials">
      <h2>Featured Tutorials</h2>
      <div className="cards">
        {tutorials.map((tutorial) => (
          <div className="card" key={tutorial.title}>
            <a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tutorial.image} alt={tutorial.title} />
            </a>
            <a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              <h3>{tutorial.title}</h3>
            </a>
            <p>{tutorial.description}</p>
            <p>Rating: {tutorial.rating}</p>
            <p>Author: {tutorial.author}</p>
          </div> ))}
      </div>
      <button
        onClick={() =>
          window.open("https://www.youtube.com/results?search_query=web+development+tutorials" )}
      >
        See all tutorials
      </button>
    </section>
  );
}

export default Tutorials;

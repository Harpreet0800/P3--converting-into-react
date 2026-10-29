const articles = [
  {image: "/images/art1.png",
    title: "Your First Website",
    description:
      "Learn the basics of creating a website using HTML, CSS and JavaScript.",
    rating: "4.8 ⭐",
    author: "MDN Web Docs",
    link:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website" },
  {image: "/images/Art2.jpg",
    title: "A Complete Guide to CSS",
    description:
      "Learn how CSS styling, layouts and responsive design make websites attractive.",
    rating: "4.8 ⭐",
    author: "Jon Duckett",
    link: "https://www.htmlandcssbook.com/"},
  { image: "/images/Art3.png",
    title: "Introduction to Web Accessibility",
    description:
      "Learn how to make websites accessible and easier for everyone to use.",
    rating: "4.9 ⭐",
    author: "WebAIM",
    link: "https://webaim.org/articles/" }];
function Articles() {
  return (
    <section id="articles">
      <h2>Featured Articles</h2>
      <div className="cards">
        {articles.map((article) => (
          <div className="card" key={article.title}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer">
              <img src={article.image} alt={article.title} /></a>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link">
              <h3>{article.title}</h3></a>
            <p>{article.description}</p>
            <p>Rating: {article.rating}</p>
            <p>Author: {article.author}</p>
          </div>))}
      </div>
      <button
        onClick={() =>
          window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development")}> See all articles
      </button>
    </section>
  );
}
export default Articles;
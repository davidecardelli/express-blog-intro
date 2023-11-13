// ! importo il 'db'
const posts = require("../db/posts.json");

// ! index
const index = (req, res) => {
    res.format({
        html: () => {
            const htmlPosts = [
                "<h1>I miei post</h1>",
                "<ul>",
                ...posts.map(
                    (post) => `<li>
              <h3>${post.titolo}</h3>
              <img src="/img/posts/${post.immagine}" alt="${post.titolo}" style="max-width: 100px" />
              <ul>
                <li>${post.contenuto}</li>
                <li>
                  <ol>${post.tags.map((tag) => `<li>${tag}</li>`).join("")}</ol>
                </li>
              </ul>
            </li>`
                ),
                "</ul>",
            ];

            res.type("html").send(htmlPosts.join(""));
        },
        json: () => {
            res.type("json").send({ posts });
        },
    });
};

module.exports = { index };
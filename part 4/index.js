const app = require("./app"); // varsinainen Express-sovellus
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

// const app = require("./app"); // the actual Express application

/*

const url =
  "mongodb+srv://kalim:kalm1234@latestpakistandb.fylxrvu.mongodb.net/fullstack?retryWrites=true&w=majority";

// logger.info(mongoUrl);
mongoose
  .connect(url)
  .then((result) => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.info("error connecting to MongoDB:", error.message);
  });

app.post("/newBlog", async (request, response) => {
  const idGenerate = async () => {
    const result = await Blog.find()
      .select("id -_id")
      .sort({ id: -1 })
      .limit(1);
    return result[0].id;
  };

  let id = await idGenerate();

  const newBlog = new Blog({
    id: ++id,
    title: "my blog 4",
    author: "xyz",
    url: "Nil",
    likes: 200,
  });

  newBlog.save().then(() => logger.info("blog saved"));

  response.send("<H1>block is added</H1>");
});
app.get("/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});
app.get("/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});
server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
*/

const blogRouter = require("express").Router();
const Blog = require("../model/blog");
const logger = require("../utils/logger");

//app.get("/", (request, response) => {});
blogRouter.post("/newBlog", async (request, response) => {
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
    title: "my blog 6",
    author: "xyz",
    url: "Nil",
    likes: 200,
  });

  newBlog.save().then(() => logger.info("blog saved"));

  response.send("<H1>block is added</H1>");
});

blogRouter.get("/:id", (request, response) => {
  // const id = request.params.id;
  // console.log(id);
  Blog.findById("63885a876ddfce1798b5efaf").then((blogs) => {
    response.json(blogs);
  });

  // response.send(id);
});
blogRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
  //console.log("blogs");
  //response.send("<H1>blogs</H1>");
});

// notesRouter.get("/:id", (request, response, next) => {
//   Note.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => next(error));
// });

// notesRouter.post("/", (request, response, next) => {
//   const body = request.body;

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });

// notesRouter.delete("/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// notesRouter.put("/:id", (request, response, next) => {
//   const body = request.body;

//   const note = {
//     content: body.content,
//     important: body.important,
//   };

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

module.exports = blogRouter;

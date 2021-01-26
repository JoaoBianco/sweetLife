module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("home/index");
  });
};

// let retornar = (app) => {
//   app.get("/", (req, res) => {
//     res.render("home/index");
//   });
// };

// module.exports = (app) => {
//   retornar(app);
// };

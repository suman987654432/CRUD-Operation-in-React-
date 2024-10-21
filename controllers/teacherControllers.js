const teacherHomePage = (req, res) => {
  res.send("This is teacher home page");
};
const teacherdeptPage = (req, res) => {
  res.send("This is teacher dept page");
};
const teachersallaryPage = (req, res) => {
  res.send("This is teacher sallary page");
};
const teachersubPage = (req, res) => {
  res.send("This is teacher sub page");
};
module.exports = {
  teacherHomePage,
  teacherdeptPage,
  teachersallaryPage,
  teachersubPage
};

const stuModel = require("../models/studentModel");

const stuHomePage = async (req, res) => {
  res.render("stuHome");
};

const stuAboutPage = async (req, res) => {
  res.render("stuAbout");
};

const stuContactPage = async (req, res) => {
  res.render("stuContact");
};

const stuDisplayPage = async (req, res) => {
  const myData = await stuModel.find();
  res.render("stuDisplay", { Data: myData });
};

const stuInsertPage = async (req, res) => {
  res.render("stuInsert");
};

const stuUpdatePage = async (req, res) => {
  res.render("stuUpdate");
};

const stuSearchPage = async (req, res) => {
  res.render("stuSearch");
};

const dataSave = async (req, res) => {
  const { rn, name, city, fees } = req.body;
  await stuModel.create({
    rollno: rn,
    name,
    city,
    fees,
  });

  const myData = await stuModel.find();
  res.render("stuDisplay", { Data: myData });
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  await stuModel.findByIdAndDelete(id);
  const myData = await stuModel.find();
  res.render("stuDisplay", { Data: myData });
};

const editData = async (req, res) => {
  const { id } = req.params;
  const student = await stuModel.findById(id);
  res.render("stuEdit", { student });
};

const updateData = async (req, res) => {
  const { id } = req.params;
  const { rollno, name, city, fees } = req.body;
  await stuModel.findByIdAndUpdate(id, {
    rollno,
    name,
    city,
    fees,
  });
  const myData = await stuModel.find();
  res.render("stuDisplay", { Data: myData });
};

module.exports = {
  stuHomePage,
  stuAboutPage,
  stuContactPage,
  stuDisplayPage,
  stuInsertPage,
  stuUpdatePage,
  stuSearchPage,
  dataSave,
  deleteData,
  editData,  
  updateData, 
};

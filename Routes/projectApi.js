const express = require('express');
// const req = require('express/lib/request');
// const { read } = require('fs');
// const { get } = require('http');
const router = express.Router();

let projects = [{
  id:1,
  title:"e-commerce",
  desc: "I created an POS store for cars",
  TeschStack: "HTML, CSS, JS",
  github: "",
  netlifyLink: "",
  image: "",
  netImg: "",
},
{
  id:2,
  title:"BMI Culculator",
  desc: "I created a BMI Culculator",
  TeschStack: "HTML, CSS, JS",
  github: "",
  netlifyLink: "",
  image: "",
  netImg: "",
},
{
  id:3,
  title:"BMI Culculator",
  desc: "I created a BMI Culculator",
  TeschStack: "HTML, CSS, JS",
  github: "",
  netlifyLink: "",
  image: "",
  netImg: "",
},
];

function fixArrayID(arr) {
  return arr.forEach((intem, idex) => intem.id = index + 1)
  };

  // CREATE
  router.post('/', (req, res) =>{
    const { title, desc, TeschStack, github, netlifyLink, image, netImg } = req.body;
    if(!title || !desc || !TeschStack || !github || !netlifyLink || !image || !netImg) {
      res.status(400).send({ msg: "Not all data sent"});
    }
    const projects = {
      id: projects.length +1,
      title,
      desc,
      TeschStack,
      github,
      netlifyLink,
      image,
      netImg,
    };
    projects.push(projects);
    res.send(projects);
  });

  // READ 
  router.get('/', (req, res) =>{
    res.send(projects)
  });
  router.get('/:id', (req, res) => {
    const projects = projects.find(project => project.id == req.params.id)
    if (!project) res.status(404).send({ msg: "Projects not found"});
    res.send(projects)
  })

  // UPDATE
router.post('/:id', (req, res) =>{
  const { title, desc, TeschStack, github, netlifyLink, image, netImg } =req.body;
  const projects = projects.find(project => project.id == req.params.id)
  if (!projects) res.status(404).send({ msg: "Projects not found"});

  if(title) projects.title =title;
  if(desc) projects.desc =desc;
  if(TeschStack) projects.TeschStack =TeschStack;
  if(github) projects.github =github;
  if(netlifyLink) projects.netlifyLink =netlifyLink;
  if(image) projects.image =image;
  if(netImg) projects.netImg =netImg;

  res.send(project)
});

// DELETE
router.post('/', (req, res) =>{
projects = projects.filter(projects => projects.id !== read.params.id);
});

module.exports = router;
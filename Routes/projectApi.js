const express = require('express');
// const req = require('express/lib/request');
// const { read } = require('fs');
// const { get } = require('http');
const router = express.Router();
// const fixArrayId = require("../helpers")

let project = [{
  id:0,
  title:"First Portfolio",
  github: "https://github.com/fatimamahlaba/first-html.git",
  netlify: "https://fatimaportfolio.netlify.app",
  image: "../assets/images/Firstportfolio.png",
},
{
  id:1,
  title:"Culculator",
  github: "https://github.com/fatimamahlaba/Calculator.git",
  netlify: "https://relaxed-almeida-2cc4d7.netlify.app",
  image: "../assets/images/culculator.png",
},
{
  id:2,
  title:"BMI Culculator",
  github: "https://github.com/fatimamahlaba/BMI-Culculator.git",
  netlify: "https://hungry-shirley-17d235.netlify.app",
  image: "../assets/images/BMI.png",
},
{
  id:3,
  title:"E-commerce",
  github: "https://github.com/fatimamahlaba/e-commerce.git",
  netlify: "https://wizardly-brahmagupta-5d98aa.netlify.app",
  image: "../assets/images/e-commerce.png",
},
// {
//   id:4,
//   title:"BMI Culculator",
//   github: "https://github.com/fatimamahlaba/BMI-Culculator.git",
//   netlifyLink: "https://hungry-shirley-17d235.netlify.app",
//   image: "../assets/images/BMI.png",
// },
];

function fixArrayID(arr) {
  return arr.forEach((intem, idex) => intem.id = index + 1)
  };

  // CREATE
  router.post('/', (req, res) =>{
    const { title, github, netlify, image,} = req.body;
    if(!title || !github || !netlify|| !image) {
      res.status(400).send({ msg: "Not all data sent"});
    }
    const projects = {
      id: projects.length +1,
      title,
      github,
      netlify,
      image,
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
  const { title, github, netlify, image } =req.body;
  const projects = projects.find(project => project.id == req.params.id)
  if (!projects) res.status(404).send({ msg: "Projects not found"});

  if(title) projects.title =title;
  if(github) projects.github =github;
  if(netlify) projects.netlify =netlify;
  if(image) projects.image =image;
  

  res.send(project)
});

// DELETE
router.post('/', (req, res) =>{
projects = projects.filter(projects => projects.id !== read.params.id);
});

module.exports = router;
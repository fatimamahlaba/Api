const express = require('express');

const router = express.Router();


let projects = [{
  id:0,
  title:"First Portfolio",
  github: "https://github.com/fatimamahlaba/first-html.git",
  netlify: "https://fatimaportfolio.netlify.app",
  image: "https://i.postimg.cc/5txYjMTG/Firstportfolio.png",
},
{
  id:1,
  title:"Culculator",
  github: "https://github.com/fatimamahlaba/Calculator.git",
  netlify: "https://relaxed-almeida-2cc4d7.netlify.app",
  image: "https://i.postimg.cc/GhVxB9xf/culculator.png",
},
{
  id:2,
  title:"BMI Culculator",
  github: "https://github.com/fatimamahlaba/BMI-Culculator.git",
  netlify: "https://hungry-shirley-17d235.netlify.app",
  image: "https://i.postimg.cc/CL1cB3TR/BMI.png",
},
{
  id:3,
  title:"E-commerce",
  github: "https://github.com/fatimamahlaba/e-commerce.git",
  netlify: "https://wizardly-brahmagupta-5d98aa.netlify.app",
  image: "https://i.postimg.cc/qv2yzwRt/e-commerce.png",
},
{
  id:4,
  title:"Vue Culculator",
  github: "https://github.com/fatimamahlaba/Vue-calculator.git",
  netlifyLink: "https://hungry-nobel-d4d3d6.netlify.app/",
  image: "https://i.postimg.cc/FKrYqc1S/vue.png",
},
{
  id:5,
  title:"Stop Watch",
  github: "https://github.com/fatimamahlaba/Stopwatch.git",
  netlifyLink: "https://affectionate-northcutt-dc4a44.netlify.app",
  image: "https://i.postimg.cc/x1JF5CzQ/stopwatch.png",
},
{
  id:6,
  title:"Reaction-Timer Game",
  github: "https://github.com/fatimamahlaba/reaction-timer-game.git",
  netlifyLink: "https://happy-lamport-8e96c8.netlify.app",
  image: "https://i.postimg.cc/HWtnPdy8/reaction.png",
},
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
    projects.push(project);
    res.send(project);
  });

  // READ 
  router.get('/', (req, res) =>{
    res.send(projects);
  });
  router.get('/:id', (req, res) => {
    const project = projects.find(project => project.id == req.params.id)
    if (!project) res.status(404).send({ msg: "Projects not found"});
    res.send(project)
  });

  // UPDATE
  router.post('/:id', (req, res) =>{
  const { title, github, netlify, image } =req.body;
  const project = projects.find(project => project.id == req.params.id)
  if (!project) res.status(404).send({ msg: "Projects not found"});

  if(title) project.title =title;
  if(github) project.github =github;
  if(netlify) project.netlify =netlify;
  if(image) project.image =image;
  

  res.send(project)
  });

// DELETE
router.post('/:id', (req, res) => {
projects = projects.filter(projects => projects.id !== read.params.id);
fixArrayID(projects);
res.send({msg: "Project deleted"});

});

module.exports = router;
const express = require('express');
// const req = require('express/lib/request');
// const { read } = require('fs');
// const { get } = require('http');
const router = express.Router();

let testimonials = [{
  id:1,
  title:"Collegue",
  name:"Lilitha Mantini",
  test:"I have worked with Fatima on a few projects. She is a good team player, target driven and not afraid of challenges. She is very professional in and of duty. She is always willing to assit where she is needed, also she's capable of working solo on projects.",
  image: "../assets/images/Lilitha.jpeg",
},
{
  id:2,
  title:"Collegue",
  name: "Siyabonga Mkhosana",
  test: "Fatima is a bubbly soul, all throughout our time on the Academy she has maintained an eagerness to learn and good work ethic. She is a very committed individual.",
  image:"../assets/images/Siyabonga.jpeg",
},
{
  id:3,
  title:"Lecturer",
  name: "Jason Wandrag",
  test: "I learn something new about Fatima every day. I enjoy when she gives her answers in class. She works very diligently when she is focused. I always enjoy seeing Fatima grow as a student in my class, and I hope she continues to study hard.",
  image: "../assets/images/jason.jpg",
},
{
 id:4,
 title:"Collegue",
 name: "Seth Kleynhauns",
 test: "Fatima is one of the most caring people I know. She's dedicated and hard working. She's always open to learn new things.",
 image:"../assets/images/Seth.png",
  },
  {
    id:5,
    title:"Head of Curriculum and Learning",
    name: "Godwin",
    test: "I am delighted to be called upon as a reference for Fatima. She always behaves professionally.",
    image:"../assets/images/Godwin.jpeg",
  },
];

function fixArrayID(arr) {
  return arr.forEach((intem, idex) => intem.id = index + 1)
  };

  // CREATE
  router.post('/', (req, res) =>{
    const { title, name, test, image, } = req.body;
    if(!title || !name || !test|| !image ) {
      res.status(400).send({ msg: "Not all data sent"});
    }
    const testimonials = {
      id: testimonials.length +1,
      title,
      name,
      test,
      image,
    };
    testimonials.push(testimonials);
    res.send(testimonials);
  });

  // READ 
  router.get('/', (req, res) =>{
    res.send(testimonials)
  });
  router.get('/:id', (req, res) => {
    const testimonials = testimonials.find(testimonials => testimonials.id == req.params.id)
    if (!testimonials) res.status(404).send({ msg: "Testimonials not found"});
    res.send(testimonials)
  })

  // UPDATE
router.post('/:id', (req, res) =>{
  const { title, name, test, image } =req.body;
  const testimonials = testimonials.find(testimonials => testimonials.id == req.params.id)
  if (!testimonials) res.status(404).send({ msg: "Testimonials not found"});

  if(title) testimonials.title =title;
  if(name) testimonials.name =name;
  if(test) testimonials.test =test;
  if(image) testimonials.image =image;
 

  res.send(testimonials)
});

// DELETE
router.post('/', (req, res) =>{
testimonials = testimonials.filter(testimonials => testimonials.id !== read.params.id);
});

module.exports = router;
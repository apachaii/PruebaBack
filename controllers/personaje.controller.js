'use strict'


const fs = require('fs');
var Personaje = require('../models/personaje.model');
var request = require('request');


function GetAid(req,res)  {
    var identi = req.params.id
    var pjss = new Personaje(); 
    fs.readFile('pjs.json', 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        } else {

            let PerJes = JSON.parse(data);
            var elname = PerJes.filter( (el)=>{
               if(el.id === identi){
                pjss.id = el.id;
                pjss.male = el.male;
                pjss.house = el.house;
                pjss.slug = el.slug;
                pjss.name = el.name;
               }


        });
           
        console.log(pjss);
        res.status(200).send({pjss});
        }
      });
}


function GetAll(req,res)  {

    fs.readFile('pjs.json', 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        } else {

            let PerJes = JSON.parse(data);
            res.status(200).send({PerJes}); 
          console.log(PerJes);
        }
      });
}


function ETL(req,res)  {
    var pjAll = []
 request.get("https://api.got.show/api/map/characters",  (error,response,body)=> {
 if(error){
     console.log('error')
     res.status(200).send({message: 'gg'}); 
 }else{

    let respuesta = JSON.parse(body)
    let data = respuesta['data']

   var elname = data.filter( (el)=>{
           pjAll.push({
            id: el._id,
            male: el.male,
            house: el.house,
            slug: el.slug,
            name:  el.name,

    });
    })


    pjAll.filter( (le)=>{
        console.log("este es"+le.id)
    });


    var dictstring = JSON.stringify(pjAll);
    fs.writeFile("pjs.json", dictstring);
     res.status(200).send({pjAll}); 
 }


})


}


module.exports = 
{
    GetAll,
    GetAid,
    ETL

}
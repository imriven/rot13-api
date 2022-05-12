const axios = require("axios");
const router = require("express").Router();


let CatFacts = "https://catfact.ninja/fact";



router.get("/:number", async (req, res) => {
    let number = parseInt(req.params.number)
        
    if (number > 3 || number < 1) {
        res.status(416).json("Error : Please choose a number between 1-3")
        return 
    }


   let array = Array.apply(null, Array(number));
    let facts = []


    array.forEach(() => {
   
        facts.push(axios.get(CatFacts));
       
    })

    let results = await Promise.all(facts)
let newResults= results.map(r=> r.data.fact)



    console.log(newResults)
     res.status(201).json(newResults);
    

});
module.exports = router;





//without using async await

    // axios
    //   .get(CatFacts)
    //   .then((r) => {
    //     res.json(r.data.data[0]);
    //   })
    //   .catch((err) => res.send(err));
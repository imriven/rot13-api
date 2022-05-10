const axios = require("axios");
const router = require("express").Router();


let CatFacts = "https://catfact.ninja/fact";



router.get("/:number", (req, res) => {
    let result;
    let number = parseInt(req.params.number)
    let array = new Array(number);
    let facts = []

    array.forEach(async (fact) => {
    try {
       result = await axios.get(CatFacts)
    } catch (err) {
        console.log(err)
    }
        facts.push(result.data.fact)
    })

     res.status(200).json(facts);
    
   

    //  facts.push(res.status(200).json(result.data.fact));
    
    // if (number > 3) {
    // res.status(416).json(result);
// }

//   res.status(200).json(result.join(""));
});
module.exports = router;





//without using async await

    // axios
    //   .get(CatFacts)
    //   .then((r) => {
    //     res.json(r.data.data[0]);
    //   })
    //   .catch((err) => res.send(err));
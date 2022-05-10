const router = require("express").Router();

let alpha =
  "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
alpha = alpha.split(",");
let encode =
  "n,o,p,q,r,s,t,u,v,w,x,y,z,a,b,c,d,e,f,g,h,i,j,k,l,m,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M";
encode = encode.split(",");
let Rot13Dict = {};

alpha.forEach((letter, index) => {
  Rot13Dict[letter] = encode[index];
});

router.get("/:string", (req, res) => {
  let stringArr = req.params.string.split("");
  let result = [];
  stringArr.forEach((letter) => {
    result.push(Rot13Dict[letter]);
  });

  res.status(200).json(result.join(""));
});


router.post("/", (req, res) => {
  let someWord = req.body.word.split("");
  let result = [];
  someWord.forEach((letter) => {
    result.push(Rot13Dict[letter]);
  });

  res.status(200).json({"result":result.join(""), "original":req.body.word});
});

module.exports = router;

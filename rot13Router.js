const router = require("express").Router();
const bcrypt = require("bcryptjs");


router.get("/:string", (req, res) => {
    let stringArr = req.params.string.split("");
    let alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
  alpha = alpha.split(",")
    let encode = "n,o,p,q,r,s,t,u,v,w,x,y,z,a,b,c,d,e,f,g,h,i,j,k,l,m,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M"
    encode = encode.split(",")
    let Rot13Dict = {}
// //pseudo code

// for each element in alpha
// if index == set as k v pairs in dict

alpha.forEach((letter, index) => {
    Rot13Dict[letter] = encode[index]
});
let result = []
stringArr.forEach(letter => {
    result.push(Rot13Dict[letter])
})

    
  res.status(200).json(result.join(""));
});

module.exports = router;
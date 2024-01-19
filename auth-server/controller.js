import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;


import schema from "./user.model.js";

export async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;
    res.send(username)
    if (!(username && email && password))
      return res.status(400).send({ error: "Fields cannot be empty" });
    bcrypt
      .hash(password, 10)
      .then((hashedPass) => {
        schema
          .create({
            username,
            email,
            password: hashedPass
          })
          .then(() => {
            return res.status(201).send({ msg: "Successfully registered!" });
          })
          .catch((error) => {
            console.log(error);
            return res.status(400).send(error);
          });
      })
      .catch((error) => {
        onsole.log(error);
        return res.status(400).send(error);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    const user = await schema.findOne({ username });
    if(user === null) return res.status(401).send({ error: "Incorrect username or password" });
    const success = await bcrypt.compare(password, user.password);
    if(success !== true) return res.status(401).send("Incorrect username or password" );
    const token = await sign({
        username
      },process.env.JWT_KEY,{
        expiresIn: "24h"
      })  
    return res.status(200).send({
        msg: "Successfuly logged in.",
        token
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

export async function Get(req, res) {
  try {
    const username = req.user.username;
    return res.status(200).send({ msg: `Hellow ${username}`});
  } catch (error) {
    console.log(error);
    return res.status(403).send("You are not allowed!");
  }
  
}













// export async function loginUser(req, res) {
//   try {
//     const { username, password } = req.body;
//     schema.findOne({ username }).then(user => {
//       if(user === null) return res.status(401).send({ error: "Incorrect username or password" });
//       return bcrypt.compare(password, user.password)
//     })
//     .then((success) => {
//       if(success !== true) return res.status(401).send("Incorrect username or password" );
//       return sign({
//         username
//       },process.env.JWT_KEY,{
//         expiresIn: "24h"
//       })  
//     })
//     .then(token => {
//       return res.status(200).send({
//         msg: "Successfuly logged in.",
//         token
//       });
//     })
//     .catch(error => {
//       console.log(error);
//       return res.status(400).send({ error: "Invalid username or password"});
//     })
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// }
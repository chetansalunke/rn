// UserController.js

const connection = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { response } = require("express");

// Function to get all users
const getAllUsers = (req, res) => {
  connection.execute(
    "SELECT * FROM api.register_user",
    (err, result, fields) => {
      if (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).json(result);
    }
  );
};

const loginUser = (req, res) => {
  const { user_name, password } = req.body;

  connection.execute(
    "select * from api.register_user where email=? and password=?",
    [user_name, password],
    (err, result, fields) => {
      if (err) {
        console.error("Error while featching the data");
        res.status(500).send("Internal Server Error");
        return;
      }

      // Generate a JWT token
      const token = jwt.sign({ user_name }, "chetan", {
        expiresIn: "1h",
      });
      if (result.length != 0) {
        console.log("The response from database");
        console.log(result[0]);
        
        res.json({ id   :result[0].user_id,user_name:result[0].first_name,success: true, token: token });
      } else {
        res.json({ error: " email or password" ,success: false});
      }
    }
  );
};
const createUser = (req, res) => {
  const {
    first_name,
    last_name,
    company_name,
    mobile_no,
    email,
    password,
    industry_type,
    register_as,
  } = req.body;
  // Check if the email is already registered
  connection.execute(
    "SELECT * FROM api.register_user WHERE email=?",
    [email],
    (err, result, fields) => {
      if (err) {
        console.error("Error fetching user:", err);
        res.status(500).send("Internal Server Error");
        return;
      }

      // If email is already registered, return a message
      if (result.length !== 0) {
        res.status(200).json({ message: "User already registered" });
        return;
      }

      // Insert the new user into the database
      connection.execute(
        "INSERT INTO api.register_user (first_name, last_name, company_name, mobile_number, email, password, industry_type, register_as) VALUES (?, ?, ?, ?, ?,?,?,?)",
        [
          first_name,
          last_name,
          company_name,
          mobile_no,
          email,
          password,
          industry_type,
          register_as,
        ],
        (err, result, fields) => {
          if (err) {
            console.error("Error inserting user:", err);
            res.status(500).send("Internal Server Error");
            return;
          }
          // Send a response with the generated token
          res.status(200).json({ message: "User registered successfully" });
        }
      );
    }
  );
};

const getAllCategory = (req, res) => {
  connection.execute("select * from api.category", (err, result, fields) => {
    if (err) {
      res.status(500).send({ message: "Error while fatching category" }, err);
      console.log(err.message);
      return;
    }

    res.send(result);
  });
};
const getProduceId = (req, res) => {
  const id = req.params.id;
  console.log(id);

  connection.execute(
    "SELECT * FROM api.product where category_id= ? ",
    [id],
    (err, result, fields) => {
      if (err) {
        res.status(500).send({ message: "Error while fatching category" }, err);
        console.log(err.message);
        return;
      }
      res.send(result);
    }
  );
};
const getProducts = (req, res) => {
  const id = req.params.id;
  console.log(id);

  connection.execute(
    "SELECT * FROM api.product",
    (err, result, fields) => {
      if (err) {
        res.status(500).send({ message: "Error while fatching category" }, err);
        console.log(err.message);
        return;
      }
      res.send(result);
    }
  );
};

module.exports = {
  getAllUsers,
  createUser,
  getAllCategory,
  getProduceId,
  loginUser,
  getProducts,
};

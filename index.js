const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

// // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD@cluster0.gi9sxo8.mongodb.net/?retryWrites=true&w=majority`;

// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const uri = "mongodb://localhost:27017";
// // // const uri =
// // //   "mongodb+srv://kibria:QwgawYkuTUkpWvzk@cluster0.gi9sxo8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   // client.close();
// });

// async function run() {
//   try {
//     console.log("db connects");
//     const serviceCollection = client.db("geniusCar").collection("services");

// console.log("db connects");
// const serviceCollection = client.db("doctor").collection("services");

//     const orderCollection = client.db("geniusCar").collection("orders");

// //     // app.post("/insert", async (req, res) => {
// //     //   const doc = { name: "Neapolitan pizza", shape: "round" };
// //     //   const result = await orderCollection.insertOne(doc);
// //     //   console.log(`A document was inserted with the _id: ${result.insertedId}`);
// //     // });

// //     app.get("/services", async (req, res) => {
// //       // const query = {};
// //       const cursor = serviceCollection.find();
// //       // const cursor = serviceCollection.find(query);
// //       const services = await cursor.toArray();
// //       res.send(services);
// //     });

// //     app.get("/services/:id", async (req, res) => {
// //       const id = req.params.id;
// //       console.log("id", id);
// //       const query = { _id: ObjectId(id) };
// //       const service = await serviceCollection.findOne(query);
// //       // const cursor = await service.toArray();
// //       // const data = [];
// //       // data.push(service);
// //       // console.log("read dta", data);
// //       res.send(service);
// //     });

// //     // orders api
// //     app.get("/orders", async (req, res) => {
// //       let query = {};

// //       if (req.query.email) {
// //         query = {
// //           email: req.query.email,
// //         };
// //       }

// //       const cursor = orderCollection.find(query);
// //       const orders = await cursor.toArray();
// //       res.send(orders);
// //     });

// //     // post
// //     // app.post("/", async (req, res) => {
//       const result =  serviceCollection.insertMany([
//         { item: "card", qty: 15 },
//         { item: "envelope", qty: 20 },
//         { item: "stamps", qty: 30 },
//       ]);
//       console.log(result)
// //     //   res.send(result);
// //     // });
//     console.log("db connects2");
// //     app.post("/orders", async (req, res) => {
// //       const order = req.body;
// //       const result = await orderCollection.insertOne(order);
// //       res.send(result);
// //     });

// //     // app.patch("/orders/:id", async (req, res) => {
// //     //   const id = req.params.id;
// //     //   const status = req.body.status;
// //     //   const query = { _id: ObjectId(id) };
// //     //   const updatedDoc = {
// //     //     $set: {
// //     //       status: status,
// //     //     },
// //     //   };
// //     //   const result = await orderCollection.updateOne(query, updatedDoc);
// //     //   res.send(result);
// //     // });

// //     app.put("/services/:id", async (req, res) => {
// //       const id = req.params.id;
// //       const status = req.body;
// //       console.log("input", [
// //         { name: status.customer, email: status.email, id: id },
// //       ]);
// //       const query = { _id: ObjectId(id) };
// //       const updatedDoc = {
// //         $push: {
// //           status: {
// //             $each: [{ name: status.customer, email: status.email }],
// //           },
// //         },
// //       };
// //       const result = await orderCollection.updateOne(query, {
// //         $set: {
// //           item: "ABC123",
// //           "info.publisher": "2222",
// //           tags: ["software"],
// //           "ratings.1": { by: "xyz", rating: 3 },
// //         },
// //       });
// //       res.send(result);
// //     });

// //     app.delete("/orders/:id", async (req, res) => {
// //       const id = req.params.id;
// //       const query = { _id: ObjectId(id) };
// //       const result = await orderCollection.deleteOne(query);
// //       res.send(result);
// //     });
//   } finally {
//   }
// }

// run().catch((err) => console.error('err',err));

// app.get("/", (req, res) => {
//   res.send("review server is running");
// });

// app.listen(port, () => {
//   console.log(`review  server running on ${port}`);
// });

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gi9sxo8.mongodb.net/?retryWrites=true&w=majority`;
// uri are link












// const uri =
//   "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gi9sxo8.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    console.log("db connects");
    // const serviceCollection = client.db("doctor").collection("services");
    const serviceCollection = client.db("doctordata").collection("service");
    // console.log("servicecolleticon", serviceCollection);
    // const data = [
    //   { name: "kibria", title: "hello", comment: [] },
    //   { name: "jamal", title: "hello2", comment: [] },
    //   { name: "kamal", title: "hello3", comment: [3000, 34, 32, 23] },
    //   { name: "abul", title: "hello4", comment: [3000, 34, 32, 23] },
    //   { name: "fabu", title: "hello5", comment: [30000, 34, 32, 23] },
    //   { name: "kabul", title: "hello6", comment: [300000, 34, 32, 23] },
    // ];

    // const result = serviceCollection.insertMany(data);
    // get LInk

    
    app.get("/services", async (req, res) => {
      const query = {};
      // const cursor = serviceCollection.find();
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      console.log('services',services)
      res.send(services);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      console.log("id", id);
      const query = { _id: ObjectId(id) };
      console.log("quaery", query);
      const service = await serviceCollection.findOne(query);
      // const cursor = await service.toArray();
      // const data = [];
      // data.push(service);
      // console.log("read dta", data);
      res.send(service);
    });
    // get link create
    // app.get("/myreview", async (req, res) => {
    //   const query = {};
    // });

    //  post link
    app.post("/services", async (req, res) => {
      const order = req.body;
      console.log("orederdr", order);
      const data = {
        name: order.servicename,
        img: order.img,
        price: order.price,
        description: order.description,
        comment: [],
      };
      console.log("post item ", data);
      const result = serviceCollection.insertOne(data);
      console.log(result);
      res.send(result);
    });
    // post link is createa
    app.post("/services/:id", async (req, res) => {
      const id = req.params.id;
      console.log("id", id);
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.insertOne(query);
      // const cursor = await service.toArray();
      // const data = [];
      // data.push(service);
      // console.log("read dta", data);
      res.send(service);
    });

    // put  link is create
    app.put("/services/:id", async (req, res) => {
      const id = req.params.id;
      const status = req.body;
      console.log("input", status);
      const query = { _id: ObjectId(id) };
      const updatedDoc = {
        $push: {
          comment: {
            $each: [
              {
                id: status.id,
                name: status.name,
                email: status.email,
                img: status.img,
                rating: status.rating,
                message: status.message,
                date: new Date(),
              },
            ],
          },
        },
      };
      const result = await serviceCollection.updateOne(query, updatedDoc);
      res.send(result);
    });
    // put link
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const user = req.body;
      console.log("update data", user);
      const option = { upsert: true };
      const updatedata = {
        $set: {
          name: user.name,
          price: user.price,
          img: user.img,
          description: user.description,
        },
      };
      const result = await serviceCollection.updateOne(
        filter,
        updatedata,
        option
      );
      res.send(result);
    });

    // path link
    app.patch("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const status = req.body.status;
      const query = { _id: ObjectId(id) };
      const updatedDoc = {
        $set: {
          status: status,
        },
      };
      const result = await orderCollection.updateOne(query, updatedDoc);
      res.send(result);
    });
    //  delete link
    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });
  } catch {
    console.log("error");
  }
}
run().catch((err) => console.error("err", err));

app.get("/", (req, res) => {
  res.send("review server is running");
});
// listing link
app.listen(port, () => {
  console.log(`review  server running on ${port}`);
});

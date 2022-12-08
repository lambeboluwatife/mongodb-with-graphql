const express = require("express")
const expressGraphQL = require("express-graphql").graphqlHTTP
const schema = require("./schema.js")
const mongoose = require("mongoose")

const app = express()

// DB Config
const db = require("./config/keys").database;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));


app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
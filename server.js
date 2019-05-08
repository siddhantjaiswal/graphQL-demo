const express = require('express');
const schema = require('./schema/schema');

const app = express();

const expressGraphQL = require('express-graphql')

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening: -> PORT:4000')
})
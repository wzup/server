'use strict';

let express = require( 'express' );
let router = express.Router();
const graphqlHTTP = require( 'express-graphql' );
let { buildSchema } = require( 'graphql' );

let schema = buildSchema(`
    type Query {
        hello: String
    }
`);

/* GET home page. */
router.get( '/', function( req, res, next ) {
    res.render( 'index', { title: 'Express' } );
} );

router.use( '/graphql', function( req, res, next ) {

    console.log( '[res.query]', res.query );
    next();

}, graphqlHTTP( {
    schema: schema,
    graphiql: true,
    rootValue: {
        hello: () => {
            return 'HelloGraphQL'
        }
    }
} ) );

module.exports = router;

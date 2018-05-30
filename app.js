'use strict';

let createError = require( 'http-errors' );
let express = require( 'express' );
let path = require( 'path' );
let adaro = require( 'adaro' );
let cookieParser = require( 'cookie-parser' );
let logger = require( 'morgan' );
let sassMiddleware = require( 'node-sass-middleware' );

let indexRouter = require( './routes/default/index' );
// let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.engine( 'dust', adaro.dust() );
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'dust' );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( sassMiddleware( {
    src: path.join( __dirname, 'public' ),
    dest: path.join( __dirname, 'public' ),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
} ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( '/', indexRouter );
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
    next( createError( 404 ) );
} );

// error handler
app.use( function( err, req, res, next ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

    // render the error page
    res.status( err.status || 500 );
    res.render( 'error' );
} );

module.exports = app;
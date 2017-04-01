'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8877 
});

var books = [
    {id: 1, title: "World"},
    {id: 2, title: "Book title"},
    {id: 3, title: "Asd"}
]

// Add the route
server.route({
    method: 'GET',
    path:'/api/books', 
    handler: function (request, reply) {
        return reply(books);
    }
});

server.route({
    method: 'POST',
    path:'/api/books', 
    handler: function (request, reply) {
        var bookToAdd = {
            id: request.params.id,
            title: request.params.title
        };
        books.push(bookToAdd)
        return reply(bookToAdd);
    }
});

server.route({
    method: 'GET',
    path:'/api/books/{bookId}', 
    handler: function (request, reply) {
        var bookId = request.params.bookId;
        var bookToReturn = books.find(function(book) {
            return book.id = bookId;
        });
        if (bookToReturn.length > 0) {
            bookToReturn = bookToReturn[0];
        }
        return reply(bookToReturn);
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

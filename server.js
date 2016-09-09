var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(morgan('dev'));
app.use(express.static(__dirname + '/app'));

var productsList = [
    {
        name: '2001 T-Shirt',
        price: 19.99,
        id: 1
    },
    {
        name: 'Hoody',
        price: 49.99,
        id: 2
    },
    {
        name: 'Sonu Hoody',
        price: 69.99,
        id: 3
    }
];

var categoriesList = [
    {
        name: 'T-Shirt',
        id: 1
    },
    {
        name: 'Pants',
        id: 2
    },
    {
        name: 'Leggings',
        id: 3
    }
];

app.get('/api/products', function (req, res)
{
    console.log("retrieving all products");
    res.send(productsList);
});

app.get('/api/products/:id', function (req, res)
{
    var result = productsList.filter(function (p)
    {
        return p.id == req.params.id;
    });

    res.send(result[0]);
});

app.get('/api/categories', function (req, res)
{
    console.log("retrieving all categories");
    res.send(categoriesList);
});

app.get('/api/products/search', function (req, res)
{
    console.log("search called");
    var result = productsList.filter(function (p)
    {
        return p.name == req.query.name;
    });

    res.send(result);
});

app.listen(8080);
console.log('Cart is running on 8080');
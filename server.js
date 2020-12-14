//Require Express JS
const express = require('express');

//Create an app using Express

const app = express();
const port = 8080;

//Add a route for the root URL
app.get('/', (req, res) => {
    //Send a string - Hello World!
    res.send('Nodemon says Hello World!');
});

//Server will listen to port - 8080
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

//sample topics array

const topics = [
    {
        id: '1',
        title: 'Topic 1',
        description: 'Topic description 1'
    },
    {
        id: '2',
        title: 'Topic 2',
        description: 'Topic description 2'
    },
    {
        id: '3',
        title: 'Topic 3',
        description: 'Topic description 3'
    }
];

//GET all topics
app.get('/topics', (req, res) => {
    res.json(topics);
});

//sample faqs array

const faqs = [
    {
        id: '1',
        topicId: '1',
        question: 'FAQ question 1',
        answer: 'FAQ answer 1'
    },
    {
        id: '2',
        topicId: '2',
        question: 'FAQ question 2',
        answer: 'FAQ answer 2'
    },
    {
        id: '3',
        topicId: '3',
        question: 'FAQ question 3',
        answer: 'FAQ answer 3'
    }
];

//GET all faqs

app.get('/faqs', (req, res) => {
    res.json(faqs);
});

//GET topic by ID through URL params

app.get('/topics/:id', (req, res) => {
    const id = req.params.id;

    const topic = topics.find(item => {
        return item.id === id;
    });
    return res.json({...topic});
});

//GET faq by ID through URL params

app.get('/faqs/:id', (req, res) => {
    const id = req.params.id;

    const faq = faqs.find(item => {
        return item.id === id;
    });
    return res.json({...faq});
});
const express = require('express');
const app = express();
const port = 3000;

function isOdd(num) {
    return num % 2 === 1;
}

app.get('/isOdd/:num', (request, response) => {
    if (isNaN(request.params.num)) {
        return response.status(400).json({ error: `${request.params.num} is not a number`});
    }

    const num = parseInt(request.params.num);

    return response.json({ isOdd: isOdd(num) });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

module.exports = app;

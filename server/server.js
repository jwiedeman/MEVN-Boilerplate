const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 65500; // Set a constant port

var suh = 'Kendras a cutie :))' 


// Configure CORS
app.use(cors());
// Set our route
app.get('/message', (req, res) => {
    let message = req.query.message;
    if (message) {
        console.log(`####`)
        // Reverse it
        let reversedMessage = message

        res.send(suh);

    } else {
        console.log(`else`)
        let reversedMessage = message
        res.send(suh);
    }
});

// Spin up our server
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
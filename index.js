
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;



app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/validate_session', async (req, res) => {
  await setTimeout(()=>{
    res.status(200).json({'locked':true});
  },5000);
});


app.listen(port, () => console.log(`Server is listening on port ${port}!`));
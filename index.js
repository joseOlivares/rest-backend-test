
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
  const sessId= req.params.session_id;

  await setTimeout(()=>{

    if (sessId===700){
      res.status(200).json({'locked':true});
    }
    else{
      res.status(200).json({'locked':false});
    }
  },5000);
});


app.listen(port, () => console.log(`Server is running on port ${port}!`));
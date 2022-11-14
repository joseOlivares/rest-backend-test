
const express = require('express')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

//for req body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/validate_session', async (req, res) => {
  const sessId= req.query.session_id;
  console.log(`Procesando petición, session_id= ${sessId}`);

  await setTimeout(()=>{
    if (sessId==='700'){
      res.status(200).json({'locked':true});
    }
    else{
      res.status(200).json({'locked':false});
    }
  },5000);
});

//dummy data to be updated
 let users={user1:false,user2:false, user3:false, user4:false, user5:false};

//actualizando estados
app.post('/lock_user', (req, res)=> {

  const userId= req.body.user || 0;
    
  try {
    //si encuentra el usuario que lo bloquee
    if(users.hasOwnProperty(userId)){
      users[userId]=true;
      console.log(`Se bloqueó el usuario= ${userId}`);
      res.status(200).json({'locked':true});
    }else{
      console.log(`No se encontró el usuario= ${userId}`);
      res.status(404).json({"Error":"User Not Exist"});
    }

  } catch (error) {
      console.log(`No se encontró el usuario= ${userId}`);
      res.status(404).json({"Error":"User Not Exist"});
  } finally{
    console.log(`Locked users: user1=${users.user1}, user2=${users.user2}, user3=${users.user3}, user4=${users.user4}, user5=${users.user5}`);

   }

});

//actualizando estados
app.post('/unlock_users', (req, res)=> {
  users={user1:false,user2:false, user3:false, user4:false, user5:false};
  res.status(200).json({"MSG":"All users unlocked"});

});



app.listen(port, () => console.log(`Server is running on port ${port}!`));
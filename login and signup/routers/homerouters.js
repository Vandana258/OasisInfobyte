/*const express=require('express');
const Router=express.Router();
const homeSchema=require('../models/homeSchema')

Router.get('/',(err,res)=>{
    res.render('register',{title:'Fill Form',password:'' ,email:''});
})

Router.post('/register',async(req,res)=>{
    try{
     const{
            name,
            email,
            password,
            cpassword
         }=req.body;

         if(password===cpassword){
            const userData=new homeSchema({
                name,
                email,
                password

            })
            await userData.save(err=>{
                if(err){
                    console.log("err")
                }else{
                    res.render('register',{title:'Done',password:'' ,email:''});
                }
            })
            const useremail=await homeSchema.findone({email:email});
            if(email===useremail.email){
                res.render('register',{title:'', password:'',email:'email already exists'})
            }else{
                console.log('err')
            }
            console.log(useremail)
         }else{
            res.render('register',{title:'',password:'password does not match' ,email:''});
         }

    }catch(error){
        res.render('register',{title:'Error in code',password:'' ,email:''});
    }

})



//login

Router.post('/login',(req,res)=>{
    
    const {
        email,
        password    
    } = req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        
        if(email === result.email && password === result.password){
            res.render('login', {name : result.name})
        }else{
            console.log(err)

        }
    })
})

try {
    const result = homeSchema.findOne({ email: email }).exec();
    if (result && email === result.email && password === result.password) {
        res.render('login', { name: result.name });
    } else {
        // Handle invalid credentials here
        res.render('login', { errorMessage: 'Invalid email or password' });
    }
} catch (error) {
    // Handle any errors that occurred during the database query
    console.error(error);
    res.status(500).send('Internal Server Error');
}
})
Router.post('/login',(req,res)=>{

    const{
        email,
        password
    }=req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        if(email===result.email && password===result.password){
            res.render('dashboard',{name:result.name})
        }else {
            // Handle invalid login
            //res.render('login', { error: 'Invalid credentials' });
            //console.log('err');
        }
    })
    const user = homeSchema.findOne({ email: email });
if (user && user.password === password) {
    res.render('login', { name: user.name });
}else {
    // Handle invalid login
    res.render('login', { error: 'Invalid credentials' });
}
})

module.exports=Router;*/

//database user:login-authentication
//password: 2159nYJryS9hukuj








const express = require('express');
const Router  = express.Router();
const homeSchema = require('../models/homeSchema');

Router.get('/',(err,res)=>{
    res.render('register',{title :'Fill Form',password:'',email:''})
})

Router.post('/register',async(req,res)=>{
   try{
       const {
           name,
           email,
           password,
           cpassword
       } = req.body;

    if(password === cpassword ){
       
         /*const userData = new homeSchema({
            name,
            email,
            password
         })
         userData.save(err=>{
             if(err){
                console.log("err")
             }else{
                res.render('register',{title :'Done',password:'',email:''})
             }
         })*/
         try {
            const userData = new homeSchema({
              name,
              email,
              password
            });
          
            await userData.save();
            res.render('register', { title: 'Done', password: '', email: '' });
          } catch (error) {
            console.log(error);
            res.render('register', { title: 'Error in code', password: '', email: '' });
          }
       
    const useremail = await homeSchema.findOne({email:email});
     if(email === useremail.email){
        res.render('register',{title :'',password:'',email:'Email is Already there plz chose different one'})
     }else{
         console.log('err')
     }

    }else{
        res.render('register',{title :'',password:'Password not Matching',email:''})
    }
   }catch(error){

    res.render('register',{title :'Error in Code',password:'',email:''})
   }
})

// singin 

/*Router.post('/login',(req,res)=>{
    
    const {
        email,
        password    
    } = req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        
        if(email === result.email && password === result.password){
            res.render('login', {name : result.name})
        }else{
            console.log(err)

        }
    })
})*/

Router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await homeSchema.findOne({ email: email });
  
      if (user && user.password === password) {
        res.render('login', { name: user.name });
      } else {
        console.log('Invalid credentials');
        res.render('login', { name: '' }); // Render with an empty name to indicate login failure
      }
    } catch (error) {
      console.error(error);
      res.render('login', { name: '' }); // Render with an empty name to indicate login failure
    }
  });


module.exports = Router;

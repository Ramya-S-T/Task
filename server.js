//importing packages
var express    = require('express');        
var app        = express();              
var bodyParser = require('body-parser');
//parser to parse http req
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

var router = express.Router();     

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to Altimetrik!' });   
});

// create a employee (accessed at POST http://localhost:3000/api/emp)
router.route('/emp') .post(function(req, res) {
        var name = req.body.name; //getting name from req-body
		var employee={"name":name};
		res.json({ data: employee});  
    });
	
// get all a employee (accessed at GET http://localhost:3000/api/getAllEmp)
router.route('/getAllEmp').get(function(req, res) {
		var employee={"name":"emp1","id":100};
		//TODO get all employees when db connection is made
           res.json(employee);//now sending static single employee data
        });
  
// edit employee with that id (accessed at PUT http://localhost:3000/api/edit/:emp_id)
router.route('/edit/:emp_id').put(function(req, res) {
		res.json({"msg":'data edited successfully'});
});
// delete employee with that id (accessed at DELETE http://localhost:3000/api/delete/:emp_id)
router.route('/delete/:emp_id').get(function(req, res) {
		res.json({"msg":'data deleted successfully'});
});
app.use('/api', router);
app.listen(port);


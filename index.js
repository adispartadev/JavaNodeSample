var java = require('java');



java.classpath.pushDir('lib');

var NodeMain = java.import('com.mycompany.nodesample.NodeMain');

// Calling an static  function of NodeMain
NodeMain.callMe();

// Calling an Static function taking an integer as argument.
NodeMain.callMeWithInt(20);

// Calling an Static function taking an String as argument.
NodeMain.callMeWithString("Pankaj Bhatt");

// Create New Intance and call a function on it. 
java.newInstance("com.mycompany.nodesample.NodeMain", function(err, nodeMainInstance) {
    nodeMainInstance.instanceMethod();
    var age = nodeMainInstance.instanceMethodWithReturn(function(invokeErr,value) {
            console.log("Hi, My Age in NodeJS is " , value);         
    });
    
    var syncAge = nodeMainInstance.instanceMethodWithReturnSync();
    console.log("Sync Age is -> ", syncAge);
    
    
  //console.log(nodeMainInstance.toStringSync()); // [item1, item2]
});

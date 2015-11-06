var java = require('java') ;
var mvn = require('node-java-maven');

// This will load all the Java artifacts that are present in the 
// Package.json under "java" keyword. i.e. all maven artifacts.
mvn(function(err, mvnResults) {
  if (err) {
    return console.error('could not resolve maven dependencies', err);
  }
  mvnResults.classpath.forEach(function(c) {
    console.log('adding ' + c + ' to classpath');
    java.classpath.push(c);
  });

    
    
    // This will add  all the jar files present in the LIB directory to the     
    java.classpath.pushDir('lib') ;
    
    var MavenMain = java.import('com.mycompany.nodesample.MavenMain');
    
    java.newInstance("com.mycompany.nodesample.MavenMain", function(err, mavenMainInstance) {
        
        mavenMainInstance.getAbbrevatedString("abcdefghijklmno",function(invokeErr,value) {
                console.log("Abbrevated String in NodeJS Async is ::  " , value);         
        });
        
        
        
        var abbrString = mavenMainInstance.getAbbrevatedStringSync("PankajBhatt");
        console.log("From Default calling it is : " , abbrString);
        
      
    });
    
    
});   // Closing Main   
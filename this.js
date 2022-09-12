var title = " awesome.";
var statement = {
    name: ' MERN ',
    getDetails2:  ()=> {
       var name = " React"; 
        return {
            name: "Node",
            getDetails3: ()=> {
              name = "MongoDB";
                 return "lets learn " + this.name+  " " + name + title;
            } 
        };
    }

};
console.log(statement.getDetails2().getDetails3())
// create a request variable
var request = new XMLHttpRequest();
// create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the request
request.send();

// process and load the response
request.onload = function(){
    var data=JSON.parse(this.response);
    
    var getCountries=data.filter((item)=>
    {
       
        return item.population<200000;
    });
    console.log(getCountries);
    
    }
    //if(data[i].region==='subregion')
    

try {
    let result;
    console.log(result.length);
  } catch (error) {
    console.error("An error occurred: ", error.message);
    console.log("Hiii...from CATCH Block-1");
    
  }

  try {
    let result = 10;
    console.log(result);
    console.log("Hiii...from TRY Block-2");    
  } catch (error) {
    console.error("An error occurred: ", error.message);
  }

  try {
    console.log("Hello..From TRY Block-3");       

    let a = 10;
    console.log(a);                
    
    let result ;
    console.log(result.length);         
  } catch (error) {

    console.error("An error occurred: ", error.message);
    console.log("Hiii...from CATCH Block-3");
  }
  
  
  
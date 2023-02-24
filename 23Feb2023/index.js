

var employee = {
    name: "Kiran",
    Rep_manager: "Rajesh",
    hike: "10%",
    currentCTC: "10LPA",
    revisedCTC: "11LPA",
    role: "Senior Dev"
}


var str2 = `
                Dear ${employee.name}, 
                 
                                          Based on your performance, contribution to the organization. You have got the 
                                          highest hike of ${employee.hike}. Your current ctc is ${employee.currentCTC} is revised to 
                                          ${employee.revisedCTC}.  

                                          Your new role is ${employee.role}. 

                 Thanks, 
                  ${employee.Rep_manager}
             `;
console.log(str2);


1. Broucher Changes: 



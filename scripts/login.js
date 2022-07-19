function login(){
    // Get the values from the form
    let txtPass=$("#textPasswordLogin").val();
    let userEmail=$("#textEmailLogin").val();

    // Use a flag
    let flag = true;

    // Get the users from the LocalStorage 
    let users = readUsers();

    // Travel the user list

    for (let i = 0; i < users.length; i++){
        let user = users[i];
        console.log(`${user.email} === ${userEmail}`);
        if(user.email === userEmail && user.password === txtPass){//is not data
            // console.log("Welcome to the system!!!!!"); //initializing an empty array when the is no data
            window.location = "user.html";
        }
        else{
            console.log("Flag Turened False");
            flag = false;
        }

        if(!flag){
            $("#alertError").removeClass('d-none');
            setTimeout(function(){
                $("#alertError").addClass('d-none');
            }, 3000);
        }
    } 

    // Compare the input values with the values from the LocalStorage
}

function init(){
    $("#loginForm").hide();

    // hook events 
    $("#hideForm").on("click", function(){
        $("#loginForm").slideUp(200); //millisec
    }); //millisec
    // show the userForm
    $("#newUser").on("click", function(){
        $("#loginForm").slideDown(200); //millisec
    });
    $("#loginBtn").click(login);
}

window.onload=init;
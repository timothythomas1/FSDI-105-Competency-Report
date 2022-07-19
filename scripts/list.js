function display(users){
    let count = 1;
    let row = "";
    if(users.length===0){
        document.getElementById('user-table-head').innerHTML = "";
    }
    else{
        document.getElementById('user-table-head').innerHTML = `
        <tr>
            <th scope="col"><i class="fa-solid fa-user-astronaut fa-2xl"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col"><i class="fa-solid fa-envelope"></i></i></th>
            <th scope="col"><i class="fa-solid fa-hourglass-start"></i></th>
            <th scope="col"><i class="fa-solid fa-address-book"></i></th>
            <th scope="col"><i class="fa-solid fa-phone"></i></th>
            <th scope="col"><i class="fa-solid fa-file-invoice-dollar"></i></th>
            <th scope="col"><i class="fa-solid fa-gear"></i></th>
        </tr>
    `;
        // travel the array (for)
        // tr+= (tr,th,td)
        for (let i = 0; i < users.length; i++){
            // console.log(petSalon.pets[i].length);
            let user = users[i];
            row +=`
                    <tr id="${user.id}" class="">
                        <td>${count}</td>
                        <td>${user.fname}</td>
                        <td>${user.lname}</td>
                        <td>${user.email}</td>
                        <td>${user.age} yo</td>
                        <td>${user.address}</td>
                        <td>${user.phone}</td>
                        <td>${user.payment}</td>
                        <td class="">
                            <div class="action-table">
                                <button class="btn"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button class="btn"><i class="fa-solid fa-trash-can"  onclick="deleteUser(${user.id})"></i></button>
                            </div>
                        </td>
                    </tr>

                  `
            count++;
        }
        // inject the tr into the HTML table
        document.getElementById('user-table-row').innerHTML = row;
    }
}

function deleteUser(userID) {
    console.log(userID);
}

function init() {
    console.log("Listing Users")
    let users=readUsers();
    display(users);

}
window.onload=init;
const arr = JSON.parse(localStorage.getItem("data")) || [];

let name;
let address;
let phone;
let password;

displayData();
function getName() {
    name = document.getElementById("name").value;
}

function getAddress() {
    address = document.getElementById("address").value;
}

function getPhone() {
    phone = document.getElementById("phone").value;
}

function getPassword(){
    password = document.getElementById("password").value;
}

function storeData() {
    let obj = {
        name: name,
        address: address,
        phone: phone,
        password:password
    };
    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
    displayData();

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";

    name = "";
    address = "";
    phone = "";
    password ="";
}
function displayData() {

    let table = document.getElementById("list");
    table.innerHTML = `
       <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Action</th>
        </tr>
        `;
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${arr[i].name}</td>
            <td>${arr[i].address}</td>
            <td>${arr[i].phone}</td>
            <td>${"*".repeat((arr[i].password||"").length)}</td>
            <td>Edit
            <i class="fa-solid fa-pen-to-square" onclick="editData(${i})"
            style="cursor:pointer;margin-right:10px;"></i>
            Delete
            <i class="fa-solid fa-trash" onclick="deleteData(${i})"
            style="cursor:pointer;color:green;"></i>
            </td>
            `;
            table.append(row);
            }
        }
function deleteData(index) {
    arr.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(arr));
    displayData();
}
function editData(index) {
    document.getElementById("name").value = arr[index].name;
    document.getElementById("address").value = arr[index].address;
    document.getElementById("phone").value = arr[index].phone;
    document.getElementById("password").value = arr[index].password
    arr.splice(index,1);
    localStorage.setItem("data", JSON.stringify(arr));
    displayData();
}




var countries = ['India', 'USA', 'Australia'];
var indian_states = ['Andhra Pradesh', 'Maharastra', 'Tamilnadu']
var us_states = ['California', 'Texas', 'Washington']
var aus_states = ['Victoria', 'New South Wales', 'Tasmania']
var ap_cities = ['Vijayawada', 'Kurnool', 'Vishakapatnam']
var mp_cities = ['Mumbai', 'Pune', 'Nagpur'];
var tn_cities = ['Chennai', 'Coimbatore', 'Tirunelveli']
var california_cities = ['Los Angeles', 'Oakland', 'San Diego']
var texas_cities = ['Houston', 'Dallas', 'Austin']
var washington_cities = ['Seattle', 'Olympia', 'Kirkland'];
var victoria_cities = ['Melbourne', 'Geelong', 'Bendigo']
var nsw_cities = ['Sydney', 'New Castle', 'Wollongong']
var tasmania_cities = ['Queenstown', 'Hobart', 'Burnie']

//array of favourite food and colors
var arr_favfood = ['Pizza', 'Burger', 'Pasta', 'Biryani'];
var arr_favcolors = ['Sky Blue', 'Green', 'White']

//div tag for container class
var container = document.createElement('div');
container.setAttribute('class', 'container');

//heading for the form
var heading_div = document.createElement('div');
heading_div.setAttribute('class', 'text-center bg-pink p-3 col-md-12 col-sm-12');

var heading = document.createElement('h2');
heading.setAttribute('class', 'text-dark');
heading.innerHTML = 'APPLICATION FORM'
    //creating form tag
var form = document.createElement('form');
form.setAttribute('onsubmit', 'postData(); return false');
form.setAttribute('class', 'mt-4 bg-light')

//creating labels and input fields
var username = createTextElement('text', 'name', 'Name');
var gender = createRadio('Gender', 'male', 'female');
var marital_status = createRadio('Marital Status', 'single', 'married');
var email = createTextElement('email', 'email', 'E-mail');
var password = createTextElement('password', 'password', 'Password');
var confirm_password = createTextElement('password', 'confirm-password', 'Confirm Password');
var country = createSelectElement('country', 'Country');
var state = createSelectElement('state', 'State');
var cities = createSelectElement('city', 'City');
var addr1 = createTextElement('text', 'addressline1', 'Address Line 1')
var addr2 = createTextElement('text', 'addressline2', 'Address Line 2')
var fav_food = createCheckboxes('Favourite Food', ...arr_favfood);
var fav_color = createCheckboxes('Favourite Color', ...arr_favcolors)
var submit = createButton();

//creating table to fill the submitted data
var divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

var table = document.createElement('table');
table.setAttribute('class', 'table mt-5');
table.id = "details-table";

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
tbody.id = 'table_body'

var tr1 = document.createElement('tr');

var th1 = document.createElement('th');
th1.innerHTML = 'Name';
var th2 = document.createElement('th');
th2.innerHTML = 'Gender';
var th3 = document.createElement('th');
th3.innerHTML = 'Marital Status';
var th4 = document.createElement('th');
th4.innerHTML = 'Email';
var th5 = document.createElement('th');
th5.innerHTML = 'Password';
var th6 = document.createElement('th');
th6.innerHTML = 'Country';
var th7 = document.createElement('th');
th7.innerHTML = 'State';
var th8 = document.createElement('th');
th8.innerHTML = 'City';
var th9 = document.createElement('th');
th9.innerHTML = 'Address';
var th10 = document.createElement('th');
th10.innerHTML = 'Favorite Food';
var th11 = document.createElement('th');
th11.innerHTML = 'Favorite Color';

//appending all elements
heading_div.append(heading);
divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8, th9, th10, th11);
form.append(username, gender, marital_status, email, password, confirm_password, country, state, cities, addr1, addr2, fav_food, fav_color, submit);
container.append(heading_div, form, divtable);
document.body.append(container);


function createButton() {
    var d = document.createElement('div');
    d.setAttribute('class', 'form-group  col-md-8 col-sm-12');
    var btn = document.createElement('input');
    btn.innerHTML = 'Submit';
    btn.type = 'submit'
    btn.setAttribute('class', 'btn btn-info text-center mt-5')
        //    btn.onclick = formData;
    d.append(btn);
    return d;
}


//function to create label and input text boxes
function createTextElement(text_type, id, lbltxt) {
    var formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'form-group col-md-8 col-sm-12 mb-1');

    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = lbltxt;
    label.setAttribute('class', 'h6')

    var input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    if (id === 'confirm-password') {
        input.placeholder = 'Confirm password';
    } else {
        input.placeholder = 'Enter ' + lbltxt;
    }
    input.type = text_type;
    input.id = id;

    formDiv.append(label, input);
    return formDiv;
}

function createSelectElement(id, lbltxt) {
    var selectDiv = document.createElement('div');
    selectDiv.setAttribute('class', 'form-group  col-md-8 col-sm-12 mb-1');

    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = lbltxt;
    label.setAttribute('class', 'h6')

    var dropdown = document.createElement('select');
    dropdown.setAttribute('class', 'form-control');
    dropdown.id = id;
    dropdown.required = true;
    if (id === 'country') {
        dropdown.setAttribute('onchange', 'fillStates()')
        for (let i = 0; i <= countries.length; i++) {
            var option = document.createElement('option');
            if (i == 0) {
                option.innerHTML = "-- Select Country --";
            } else {
                option.innerHTML = countries[i - 1];
                option.value = countries[i - 1];
            }

            dropdown.append(option);
        }
    }
    if (id === 'state') {
        dropdown.setAttribute('onchange', 'fillCities()');
    }

    selectDiv.append(label, dropdown);
    return selectDiv;
}
//fillStates(countries[i - 1])
function fillStates() {
    var country_name = document.getElementById('country').value;
    var arr = [];
    var state_dropdown = document.getElementById('state');
    state_dropdown.innerHTML = "";
    if (country_name == 'India') {
        arr = [...indian_states];
    } else if (country_name == 'USA') {
        arr = [...us_states];
    } else if (country_name == 'Australia') {
        arr = [...aus_states]
    }

    for (let i = 0; i <= arr.length; i++) {
        var option = document.createElement('option');
        if (i == 0) {
            option.innerHTML = "-- Select State --";
        } else {
            option.innerHTML = arr[i - 1];
            option.value = arr[i - 1];
        }

        state_dropdown.append(option);
    }
}

var us_states = ['California', 'Texas', 'Washington']
var aus_states = ['Victoria', 'New South Wales', 'Tasmania']

function fillCities() {
    var state_name = document.getElementById('state').value;
    var arr = [];
    var city_dropdown = document.getElementById('city');
    city_dropdown.innerHTML = "";
    switch (state_name) {
        case 'Andhra Pradesh':
            arr = [...ap_cities];
            break;
        case 'Tamilnadu':
            arr = [...tn_cities];
            break;
        case 'Maharastra':
            arr = [...mp_cities];
            break;
        case 'California':
            arr = [...california_cities];
            break;
        case 'Texas':
            arr = [...texas_cities];
            break;
        case 'Washington':
            arr = [...washington_cities];
            break;
        case 'Victoria':
            arr = [...victoria_cities];
            break;
        case 'New South Wales':
            arr = [...nsw_cities];
            break;
        case 'Tasmania':
            arr = [...tasmania_cities];
            break;
    }

    for (let i = 0; i <= arr.length; i++) {
        var option = document.createElement('option');
        if (i == 0) {
            option.innerHTML = "-- Select State --";
        } else {
            option.innerHTML = arr[i - 1];
            option.value = arr[i - 1];
        }

        city_dropdown.append(option);
    }
}

//function for creating Gender radio button

function createRadio(lbl, ...args) {
    var radio_div = document.createElement('div');
    radio_div.setAttribute('class', 'form-group  col-md-8 col-sm-12');

    var div1 = document.createElement('div');

    var form_label = document.createElement('label');
    form_label.setAttribute('class', 'h6');
    form_label.for = lbl;
    form_label.innerHTML = lbl;
    div1.append(form_label);
    radio_div.append(div1);
    for (let i = 0; i < args.length; i++) {
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'form-check form-check-inline');

        var radio_input = document.createElement('input');
        radio_input.type = "radio";
        radio_input.setAttribute('class', 'form-check-input');
        radio_input.name = lbl;
        radio_input.value = args[i];
        radio_input.id = args[i];

        var radio_label = document.createElement('label');
        radio_label.setAttribute('class', 'form-check-label');
        radio_label.for = args[i]
        radio_label.innerHTML = args[i][0].toUpperCase() + args[i].substr(1);

        div2.append(radio_input, radio_label);
        radio_div.append(div2);
    }
    return radio_div;
}


function createCheckboxes(lbl, ...args) {
    var checkbox_div = document.createElement('div');
    checkbox_div.setAttribute('class', 'form-group  col-md-8 col-sm-12 mb-1');

    var div1 = document.createElement('div');

    var checkbox_label = document.createElement('label');
    checkbox_label.setAttribute('class', 'h6');
    checkbox_label.for = lbl;
    checkbox_label.innerHTML = lbl;
    div1.append(checkbox_label);
    checkbox_div.append(div1);
    for (let i = 0; i < args.length; i++) {
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'form-check form-check-inline');

        var checkbox_input = document.createElement('input');
        checkbox_input.type = "checkbox";
        checkbox_input.setAttribute('class', 'form-check-input');
        checkbox_input.name = lbl;
        checkbox_input.value = args[i];
        checkbox_input.id = args[i];

        var checkbox_lbl = document.createElement('label');
        checkbox_lbl.setAttribute('class', 'form-check-label');
        checkbox_lbl.for = args[i];
        checkbox_lbl.innerHTML = args[i];

        div2.append(checkbox_input, checkbox_lbl);
        checkbox_div.append(div2);
    }
    return checkbox_div;
}
// var userDataList = [];
var isEdit = false;
var selectedRow = null;

//function to GET data from the mock api
async function formData() {
    try {
        var api_data = await fetch("https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users");
        var api_json_data = await api_data.json();
        userDataList = api_json_data;
        populateTable(api_json_data);
    } catch (err) {
        console.log(err);
    }

}

//function to get selected radio button value
function selectedValue(radio_name) {
    var form_value;
    var radio_data = document.getElementsByName(radio_name);
    for (let i = 0; i < radio_data.length; i++) {
        if (radio_data[i].checked === true)
            form_value = radio_data[i].value;
    }
    return form_value;
}

//function to get selected checkboxes values as string
function selectedboxes(checkbox_name) {
    var box_value = [];
    var box_data = document.getElementsByName(checkbox_name);
    for (let i = 0; i < box_data.length; i++) {
        if (box_data[i].checked === true) {
            box_value.push(box_data[i].value);
        }
    }
    return box_value.join(",");
}


//function to POST and PUT data to mock api
async function postData() {
    try {
        var data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            country: document.getElementById('country').value,
            gender: selectedValue('Gender'),
            marital_status: selectedValue('Marital Status'),
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            address: document.getElementById('addressline1').value + ',' + document.getElementById('addressline2').value,
            favfood: selectedboxes('Favourite Food'),
            favcolor: selectedboxes('Favourite Color'),
        };

        //check if password and confirm-password matches
        if (data.password === document.getElementById('confirm-password').value) {
            if (!isEdit) {
                //posting data to the mockapi
                var api_post_data = await fetch("https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                    }
                });
            } else {
                //updating the data in mockapi
                var api_post_data = await fetch("https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users/" + selectedRow, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                    }
                });
                isEdit = false;
                selectedRow = null;
            }

            //on submitting the data all the fields will be set to empty
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirm-password").value = "";
            document.getElementById('country').value = "";
            document.getElementsByName('Gender').forEach(val => val.checked = false);
            document.getElementsByName('Marital Status').forEach(val => val.checked = false);
            document.getElementById('state').value = "";
            document.getElementById('city').value = "";
            document.getElementById('addressline1').value = "";
            document.getElementById('addressline2').value = "";
            document.getElementsByName('Favourite Food').forEach(val => val.checked = false);
            document.getElementsByName('Favourite Color').forEach(val => val.checked = false);

            //displaying data in the table along with edit and delete option
            formData();
        } else {
            alert('Password did not match');
        }

        //var fecth_data = await api_post_data.json();

    } catch (err) {
        console.log(err);
    }
}

//function to fill the table with user submitted data
function populateTable(arr_data) {
    document.getElementById('table_body').innerHTML = '';
    arr_data.forEach((value) => {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerHTML = value.name;
        var td2 = document.createElement('td');
        td2.innerHTML = value.gender
        var td3 = document.createElement('td');
        td3.innerHTML = value.marital_status
        var td4 = document.createElement('td');
        td4.innerHTML = value.email
        var td5 = document.createElement('td');
        td5.innerHTML = value.password
        var td6 = document.createElement('td');
        td6.innerHTML = value.country
        var td7 = document.createElement('td');
        td7.innerHTML = value.state
        var td8 = document.createElement('td');
        td8.innerHTML = value.city
        var td9 = document.createElement('td');
        td9.innerHTML = value.address;
        var td10 = document.createElement('td');
        td10.innerHTML = value.favfood;
        var td11 = document.createElement('td');
        td11.innerHTML = value.favcolor;

        var tdEdit = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.setAttribute("onclick", "getRowData(" + value.id + ")");
        editButton.setAttribute('class', 'btn btn-success')

        var tdDelete = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute('class', 'btn btn-danger')
        deleteButton.setAttribute("onclick", "deleteRow(" + value.id + ")");
        tdEdit.appendChild(editButton);
        tdDelete.appendChild(deleteButton);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, tdEdit, tdDelete);
        tbody.append(tr);
    })
}

//on clicking edit function populate the values fields that were submitted earlier
function getRowData(row_id) {
    document.getElementById("name").value = userDataList[row_id - 1].name;
    document.getElementById("email").value = userDataList[row_id - 1].email;
    document.getElementById("password").value = userDataList[row_id - 1].password;
    document.getElementById('country').value = userDataList[row_id - 1].country;
    // document.getElementById('state').value = userDataList[row_id - 1].state;
    // document.getElementById('city').value = userDataList[row_id - 1].city;
    // document.getElementById('addressline1').value = userDataList[row_id - 1].address;
    isEdit = true;
    selectedRow = userDataList[row_id - 1].id; //as array indexing starts with 0 
}

//function to delete row from the table and mockapi
async function deleteRow(row_id) {
    var delete_data = await fetch('https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users/' + row_id, {
        method: 'DELETE',
    });
    //var delete_json_data = await delete_data.json();
    formData();
}
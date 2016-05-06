function createClinicForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');

    var head1Text = document.createTextNode('State');
    var head2Text = document.createTextNode('City');
    var head3Text = document.createTextNode('ZIP Code');
    var head4Text = document.createTextNode('Street');
    var head5Text = document.createTextNode('Telephone Number');
    var head6Text = document.createTextNode('Fax Number');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');

    textBox1.type = 'text';
    textBox1.placeholder = 'Enter State';
    textBox1.id = 't1';
    textBox2.type = 'text';
    textBox2.placeholder = 'Enter City';
    textBox2.id = 't2';
    textBox3.type = 'number';
    textBox3.placeholder = 'Enter ZIP Code';
    textBox3.id = 't3';
    textBox4.type = 'text';
    textBox4.placeholder = 'Enter Street';
    textBox4.id = 't4';
    textBox5.type = 'number';
    textBox5.placeholder = 'Enter Telephone Number';
    textBox5.id = 't5';
    textBox6.type = 'number';
    textBox6.placeholder = 'Enter Fax Number';
    textBox6.id = 't6';

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createClinic());};
    submitButton.innerHTML = 'Create Clinic';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);

    form.appendChild(column1);
    form.appendChild(column2);
    form.appendChild(column3);
    form.appendChild(submitButton);
}

function createPenForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1    = document.createElement('div');
    var row2    = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');

    var head1Text = document.createTextNode('Capacity');
    var head2Text = document.createTextNode('Comment');
    var head3Text = document.createTextNode('Clinic_ID');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('textarea');
    var textBox3 = document.createElement('select');

    textBox1.type = 'number';
    textBox1.placeholder = 'Enter Pen Capacity';
    textBox1.id = 't1';
    textBox2.rows = 3;
    textBox2.placeholder = 'Enter Comment';
    textBox2.id = 't2';
    textBox3.id = 't3';

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox3.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createPen());};
    submitButton.innerHTML = 'Create Pen';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createStaffForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1    = document.createElement('div');
    var row2    = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1  = document.createElement('h3');
    var head2  = document.createElement('h3');
    var head3  = document.createElement('h3');
    var head4  = document.createElement('h3');
    var head5  = document.createElement('h3');
    var head6  = document.createElement('h3');
    var head7  = document.createElement('h3');
    var head8  = document.createElement('h3');
    var head9  = document.createElement('h3');
    var head10 = document.createElement('h3');
    var head11 = document.createElement('h3');
    var head12 = document.createElement('h3');

    var head1Text = document.createTextNode('First Name');
    var head2Text = document.createTextNode('Last Name');
    var head3Text = document.createTextNode('State');
    var head4Text = document.createTextNode('City');
    var head5Text = document.createTextNode('ZIP Code');
    var head6Text = document.createTextNode('Street');
    var head7Text = document.createTextNode('Telephone Number');
    var head8Text = document.createTextNode('Date of Birth');
    var head9Text = document.createTextNode('ID Number');
    var head10Text = document.createTextNode('Position');
    var head11Text = document.createTextNode('Annual Salary');
    var head12Text = document.createTextNode('Clinic ID');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);
    head8.appendChild(head8Text);
    head9.appendChild(head9Text);
    head10.appendChild(head10Text);
    head11.appendChild(head11Text);
    head12.appendChild(head12Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');
    var textBox7 = document.createElement('input');
    var textBox8 = document.createElement('input');
    var textBox9 = document.createElement('input');
    var textBox10 = document.createElement('input');
    var textBox11 = document.createElement('input');
    var textBox12 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = 'Enter First Name';
    textBox2.id = 't2';
    textBox2.type = 'text';
    textBox2.placeholder = 'Enter Last Name';
    textBox3.id = 't3';
    textBox3.type = 'text';
    textBox3.placeholder = 'Enter State';
    textBox4.id = 't4';
    textBox4.type = 'text';
    textBox4.placeholder = 'Enter City';
    textBox5.id = 't5';
    textBox5.type = 'number';
    textBox5.placeholder = 'Enter ZIP Code';
    textBox6.id = 't6';
    textBox6.type = 'text';
    textBox6.placeholder = 'Enter Street';
    textBox7.id = 't7';
    textBox7.type = 'number';
    textBox7.placeholder = 'Enter Telephone Number';
    textBox8.id = 't8';
    textBox8.type = 'date';
    textBox8.placeholder = 'Choose Date of Birth';
    textBox9.id = 't9';
    textBox9.type = 'number';
    textBox9.placeholder = 'Enter ID Number';
    textBox10.id = 't10';
    textBox10.type = 'text';
    textBox10.placeholder = 'Enter Position';
    textBox11.id = 't11';
    textBox11.type = 'number';
    textBox11.placeholder = 'Enter Annual Salary';
    textBox12.id = 't12';

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox12.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createStaff());};
    submitButton.innerHTML = 'Create Clinic';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);
    column1.appendChild(head7);
    column1.appendChild(textBox7);
    column1.appendChild(head10);
    column1.appendChild(textBox10);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);
    column2.appendChild(head8);
    column2.appendChild(textBox8);
    column2.appendChild(head11);
    column2.appendChild(textBox11);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);
    column3.appendChild(head9);
    column3.appendChild(textBox9);
    column3.appendChild(head12);
    column3.appendChild(textBox12);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createOwnerForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');
    var head7 = document.createElement('h3');
    var head8 = document.createElement('h3');

    var head1Text = document.createTextNode('First Name');
    var head2Text = document.createTextNode('Last Name');
    var head3Text = document.createTextNode('State');
    var head4Text = document.createTextNode('City');
    var head5Text = document.createTextNode('ZIP Code');
    var head6Text = document.createTextNode('Street');
    var head7Text = document.createTextNode('Telephone Number');
    var head8Text = document.createTextNode('Clinic ID');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);
    head8.appendChild(head8Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');
    var textBox7 = document.createElement('input');
    var textBox8 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = 'Enter First Name';
    textBox2.type = 'text';
    textBox2.id = 't2';
    textBox2.placeholder = 'Enter Last Name';
    textBox3.id = 't3';
    textBox3.type = 'text';
    textBox3.placeholder = 'Enter State';
    textBox4.id = 't4';
    textBox4.type = 'text';
    textBox4.placeholder = 'Enter City';
    textBox5.id = 't5';
    textBox5.type = 'number';
    textBox5.placeholder = 'Enter ZIP Code';
    textBox6.id = 't6';
    textBox6.type = 'text';
    textBox6.placeholder = 'Enter Street';
    textBox7.id = 't7';
    textBox7.type = 'number';
    textBox7.placeholder = 'Enter Telephone Number';
    textBox8.id = 't8';

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox8.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createOwner());};
    submitButton.innerHTML = 'Create Owner';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);
    column1.appendChild(head7);
    column1.appendChild(textBox7);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);
    column2.appendChild(head8);
    column2.appendChild(textBox8);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createPetForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');

    var head1Text = document.createTextNode('Name');
    var head2Text = document.createTextNode('Type');
    var head3Text = document.createTextNode('Description');
    var head4Text = document.createTextNode('Date of Birth');
    var head5Text = document.createTextNode('Owner');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('textarea');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('select');

    textBox1.type = 'text';
    textBox1.placeholder = 'Enter Name';
    textBox1.id = 't1';
    textBox2.type = 'text';
    textBox2.placeholder = 'Enter Pet Type';
    textBox2.id = 't2';
    textBox3.placeholder = 'Enter Description';
    textBox3.id = 't3';
    textBox4.type = 'date';
    textBox4.id = 't4';
    textBox5.id = 't5';

    connection.query("CALL `read_owners`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.OWNER_ID;
                option.innerHTML = result.OWNER_FNAME + " " + result.OWNER_LNAME;

                textBox5.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createPet());};
    submitButton.innerHTML = 'Create Pet';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);

    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createAppointForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');

    var head1Text = document.createTextNode('Date');
    var head2Text = document.createTextNode('Pet');
    var head3Text = document.createTextNode('Clinic');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('select');
    var textBox3 = document.createElement('select');

    textBox1.type = 'datetime';
    textBox1.id = 't1';
    textBox2.id = 't2';
    textBox3.id = 't3';

    connection.query("CALL `read_pets`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.PET_ID;
                option.innerHTML = result.PET_NAME;

                textBox2.add(option);
            }
        }
    });

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox3.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createAppoint());};
    submitButton.innerHTML = 'Create Appointment';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createExamForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');

    var head1Text = document.createTextNode('Time');
    var head2Text = document.createTextNode('Description');
    var head3Text = document.createTextNode('Pet');
    var head4Text = document.createTextNode('Vet');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('textarea');
    var textBox3 = document.createElement('select');
    var textBox4 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'datetime';
    textBox2.id = 't2';
    textBox2.placeholder = 'Enter Examination Description';
    textBox3.id = 't3';
    textBox4.id = 't4';

    connection.query("CALL `read_pets`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.PET_ID;
                option.innerHTML = result.PET_NAME;

                textBox3.add(option);
            }
        }
    });
    connection.query("CALL `read_staff`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.STAFF_ID;
                option.innerHTML = result.STAFF_FNAME + " " + result.STAFF_LNAME;

                textBox4.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createExam());};
    submitButton.innerHTML = 'Create Examination';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);

    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createPetStayForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');

    var head1Text = document.createTextNode('Begin Date');
    var head2Text = document.createTextNode('End Date');
    var head3Text = document.createTextNode('Pet');
    var head4Text = document.createTextNode('Pen');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('select');
    var textBox4 = document.createElement('select');

    textBox1.type = 'date';
    textBox1.id = 't1';
    textBox2.type = 'date';
    textBox2.id = 't2';
    textBox3.id = 't3';
    textBox4.id = 't4';

    connection.query("CALL `read_pets`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.PET_ID;
                option.innerHTML = result.PET_NAME;

                textBox3.add(option);
            }
        }
    });
    connection.query("CALL `read_pens`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.PEN_ID;
                option.innerHTML = result.PEN_ID;

                textBox4.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createPetStay());};
    submitButton.innerHTML = 'Create Pet Stay';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);

    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createPetTreatForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');

    var head1Text = document.createTextNode('Examination');
    var head2Text = document.createTextNode('Treatment');
    var head3Text = document.createTextNode('Quantity');
    var head4Text = document.createTextNode('Begin Date');
    var head5Text = document.createTextNode('End Date');
    var head6Text = document.createTextNode('Comment');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);

    var textBox1 = document.createElement('select');
    var textBox2 = document.createElement('select');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('textarea');

    textBox1.id = 't1';
    textBox2.id = 't2';
    textBox3.id = 't3';
    textBox3.type = 'number';
    textBox3.placeholder = 'Enter Quantity of Treatment';
    textBox4.id = 't4';
    textBox4.type = 'date';
    textBox5.id = 't5';
    textBox5.type = 'date';
    textBox6.id = 't6';
    textBox6.type = 'text';
    textBox6.placeholder = 'Enter Comment';

    connection.query("CALL `read_examinations`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.EXAM_ID;
                option.innerHTML = result.EXAM_ID;

                textBox1.add(option);
            }
        }
    });
    connection.query("CALL `read_treatments`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.TREAT_ID;
                option.innerHTML = result.TREAT_ID;

                textBox2.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createPetTreat());};
    submitButton.innerHTML = 'Create Pet Treatment';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createStayTreatForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');

    var head1Text = document.createTextNode('Pet Stay');
    var head2Text = document.createTextNode('Treatment');
    var head3Text = document.createTextNode('Quantity');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);

    var textBox1 = document.createElement('select');
    var textBox2 = document.createElement('select');
    var textBox3 = document.createElement('input');

    textBox1.id = 't1';
    textBox2.id = 't2';
    textBox3.id = 't3';
    textBox3.type = 'number';
    textBox3.placeholder = 'Enter Treatment Quantity';

    connection.query("CALL `read_pet_stays`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.STAY_ID;
                option.innerHTML = result.STAY_ID;

                textBox1.add(option);
            }
        }
    });
    connection.query("CALL `read_treatments`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.TREAT_ID;
                option.innerHTML = result.TREAT_ID;

                textBox2.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createStayTreat());};
    submitButton.innerHTML = 'Create Stay Treatment';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createInvForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');

    var head1Text = document.createTextNode('Date');
    var head2Text = document.createTextNode('Treatment Cost');
    var head3Text = document.createTextNode('Pet');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'date';
    textBox2.id = 't2';
    textBox2.type = 'number';
    textBox2.placeholder = 'Enter Treatment Cost';
    textBox3.id = 't3';

    connection.query("CALL `read_pets`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.PET_ID;
                option.innerHTML = result.PET_NAME;

                textBox3.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createInvoice());};
    submitButton.innerHTML = 'Create Invoice';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createInvPayForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');

    var head1Text = document.createTextNode('Payment Method');
    var head2Text = document.createTextNode('Date Paid');
    var head3Text = document.createTextNode('Invoice Number');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = 'Enter Payment Method';
    textBox2.type = 'date';
    textBox2.id = 't2';
    textBox3.id = 't3';

    connection.query("CALL `read_invoices`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.INV_ID;
                option.innerHTML = result.INV_ID;

                textBox3.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createInvPay());};
    submitButton.innerHTML = 'Create Invoice Payment';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createNonSurgForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');
    var head7 = document.createElement('h3');

    var head1Text = document.createTextNode('Supply Name');
    var head2Text = document.createTextNode('Description');
    var head3Text = document.createTextNode('Quantity');
    var head4Text = document.createTextNode('Re-order Level');
    var head5Text = document.createTextNode('Re-order Quantity');
    var head6Text = document.createTextNode('Re-Order Cost');
    var head7Text = document.createTextNode('Clinic');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('textarea');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');
    var textBox7 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = "Enter Supply's Name";
    textBox2.id = 't2';
    textBox2.placeholder = 'Enter Description';
    textBox3.id = 't3';
    textBox3.type = 'number';
    textBox3.placeholder = 'Enter Quantity';
    textBox4.id = 't4';
    textBox4.type = 'number';
    textBox4.placeholder = 'Enter re-order Level';
    textBox5.id = 't5';
    textBox5.type = 'number';
    textBox5.placeholder = 'Enter re-order Quantity';
    textBox6.id = 't6';
    textBox6.type = 'number';
    textBox6.placeholder = 'Enter re-order Cost';
    textBox7.id = 't7';

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox7.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createNonSurgSupply());};
    submitButton.innerHTML = 'Create Non Surgical Supplies';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);
    column1.appendChild(head7);
    column1.appendChild(textBox7);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createSurgForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');
    var head7 = document.createElement('h3');

    var head1Text = document.createTextNode('Supply Name');
    var head2Text = document.createTextNode('Description');
    var head3Text = document.createTextNode('Quantity');
    var head4Text = document.createTextNode('Re-order Level');
    var head5Text = document.createTextNode('Re-order Quantity');
    var head6Text = document.createTextNode('Re-Order Cost');
    var head7Text = document.createTextNode('Clinic');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('textarea');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');
    var textBox7 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = "Enter Supply's Name";
    textBox2.id = 't2';
    textBox2.placeholder = 'Enter Description';
    textBox3.id = 't3';
    textBox3.type = 'number';
    textBox3.placeholder = 'Enter Quantity';
    textBox4.id = 't4';
    textBox4.type = 'number';
    textBox4.placeholder = 'Enter re-order Level';
    textBox5.id = 't5';
    textBox5.type = 'number';
    textBox5.placeholder = 'Enter re-order Quantity';
    textBox6.id = 't6';
    textBox6.type = 'number';
    textBox6.placeholder = 'Enter re-order Cost';
    textBox7.id = 't7';

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox7.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createSurgSupply());};
    submitButton.innerHTML = 'Create Surgical Supplies';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);
    column1.appendChild(head7);
    column1.appendChild(textBox7);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createPharForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');
    var head7 = document.createElement('h3');
    var head8 = document.createElement('h3');
    var head9 = document.createElement('h3');

    var head1Text = document.createTextNode('Supply Name');
    var head2Text = document.createTextNode('Description');
    var head3Text = document.createTextNode('Quantity');
    var head4Text = document.createTextNode('Re-order Level');
    var head5Text = document.createTextNode('Re-order Quantity');
    var head6Text = document.createTextNode('Re-Order Cost');
    var head7Text = document.createTextNode('Clinic');
    var head8Text = document.createTextNode('Dosage');
    var head9Text = document.createTextNode('Application Method');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);
    head8.appendChild(head8Text);
    head9.appendChild(head9Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('textarea');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');
    var textBox7 = document.createElement('select');
    var textBox8 = document.createElement('input');
    var textBox9 = document.createElement('input');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = "Enter Supply's Name";
    textBox2.id = 't2';
    textBox2.placeholder = 'Enter Description';
    textBox3.id = 't3';
    textBox3.type = 'number';
    textBox3.placeholder = 'Enter Quantity';
    textBox4.id = 't4';
    textBox4.type = 'number';
    textBox4.placeholder = 'Enter re-order Level';
    textBox5.id = 't5';
    textBox5.type = 'number';
    textBox5.placeholder = 'Enter re-order Quantity';
    textBox6.id = 't6';
    textBox6.type = 'number';
    textBox6.placeholder = 'Enter re-order Cost';
    textBox7.id = 't7';
    textBox8.id = 't8';
    textBox8.type = 'number';
    textBox8.placeholder = 'Enter Dosage';
    textBox9.id = 't9';
    textBox9.type = 'number';
    textBox9.placeholder = 'Enter Application Method';

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.CLINIC_ID;
                option.innerHTML = result.CLINIC_ADD_CITY;

                textBox7.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createPharSupply());};
    submitButton.innerHTML = 'Create Pharmaceutical Supplies';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);
    column1.appendChild(head7);
    column1.appendChild(textBox7);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);
    column2.appendChild(head8);
    column2.appendChild(textBox8);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);
    column3.appendChild(head9);
    column3.appendChild(textBox9);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createTreatForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');

    var head1Text = document.createTextNode('Description');
    var head2Text = document.createTextNode('Cost');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);

    var textBox1 = document.createElement('textarea');
    var textBox2 = document.createElement('input');

    textBox1.id = 't1';
    textBox1.type = 'text';
    textBox1.placeholder = 'Enter Description';
    textBox2.type = 'number';
    textBox2.id = 't2';
    textBox2.placeholder = 'Enter Treatment Cost';

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createTreat());};
    submitButton.innerHTML = 'Create Treatment';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column2.appendChild(head2);
    column2.appendChild(textBox2);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}

function createTreatCostForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';
    row1.className = 'row';
    row2.className = 'row';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');

    var head1Text = document.createTextNode('Cost');
    var head2Text = document.createTextNode('Invoice');
    var head3Text = document.createTextNode('Pet Treatment');
    var head4Text = document.createTextNode('Stay Treatment');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('select');
    var textBox3 = document.createElement('select');
    var textBox4 = document.createElement('select');

    textBox1.id = 't1';
    textBox1.type = 'number';
    textBox1.placeholder = 'Enter Treatment Cost';
    textBox2.id = 't2';
    textBox3.id = 't3';
    textBox4.id = 't4';

    connection.query("CALL `read_invoices`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.INV_ID;
                option.innerHTML = result.INV_ID;

                textBox2.add(option);
            }
        }
    });
    connection.query("CALL `read_pet_treatments`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.PET_TREAT_ID;
                option.innerHTML = result.PET_TREAT_ID;

                textBox3.add(option);
            }
        }
    });
    connection.query("CALL `read_stay_treatments`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            for (var c = 0; c <= rows[0].length; c++) {
                var result = rows[0][c];

                var option = document.createElement('option');
                option.value = result.STAY_TREAT_ID;
                option.innerHTML = result.STAY_TREAT_ID;

                textBox4.add(option);
            }
        }
    });

    var submitButton = document.createElement('button');
    submitButton.onclick = function(){$(form).submit(createTreatCost());};
    submitButton.innerHTML = 'Create Treatment Cost';
    submitButton.className = 'button';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);

    column3.appendChild(head3);
    column3.appendChild(textBox3);

    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
}
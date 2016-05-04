function ViewClinics(){
    $('#data-heading').html('View Clinics');

    var dataNav = $('#data-side-nav');
    dataNav.removeClass('in-right');
    dataNav.addClass('out-right');

    var curDiv = $('.show');
    var clinicDiv = $('#data-div');

    curDiv.removeClass('show');
    curDiv.addClass('hide');

    clinicDiv.removeClass('hide');
    clinicDiv.addClass('show');

    var curTable = $('#table');
    curTable.empty();

    connection.query("CALL `pets4u`.`read_clinics`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createClinicTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createClinicTableRow(result.CLINIC_ID, result.CLINIC_ADD_CITY, result.CLINIC_TEL_NUM);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewStaff(){
    $('#data-heading').html('View Staff');

    var dataNav = $('#data-side-nav');
    dataNav.removeClass('in-right');
    dataNav.addClass('out-right');

    var curDiv = $('.show');
    var clinicDiv = $('#data-div');

    curDiv.removeClass('show');
    curDiv.addClass('hide');

    clinicDiv.removeClass('hide');
    clinicDiv.addClass('show');

    var curTable = $('#table');
    curTable.empty();

    connection.query("CALL `pets4u`.`read_staff`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createStaffTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createStaffTableRow(result.STAFF_ID, result.STAFF_FNAME, result.STAFF_LNAME, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewOwners(){
    $('#data-heading').html('View Clinics');

    var dataNav = $('#data-side-nav');
    dataNav.removeClass('in-right');
    dataNav.addClass('out-right');

    var curDiv = $('.show');
    var clinicDiv = $('#data-div');

    curDiv.removeClass('show');
    curDiv.addClass('hide');

    clinicDiv.removeClass('hide');
    clinicDiv.addClass('show');

    var curTable = $('#table');
    curTable.empty();

    connection.query("CALL `pets4u`.`read_owners`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createOwnerTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createOwnerTableRow(result.OWNER_ID, result.OWNER_FNAME, result.OWNER_LNAME, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
}

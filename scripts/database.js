function ViewClinics(){
    $('#data-heading').html('View Clinics');

    var dataNav = $('#view-data-side-nav');
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
                var newRow = createClinicTableRow(result.CLINIC_ID, result.CLINIC_ADD_STATE, result.CLINIC_ADD_CITY, result.CLINIC_TEL_NUM, result.CLINIC_FAX_NUM);

                table.appendChild(newRow);
            }
        }
    });
}
$(document).on('click', '.deleteClinic', function(){
    var mustDelete = confirm("Are you sure you want to delete this clinic?");

    if(mustDelete == true) {
        connection.query("CALL `pets4u`.`delete_clinic`('" +this.id+"')", function (err) {
            if (err) {
                alert('Bad shit went down : \n' + err.stack);
            }
            else {
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
                            var newRow = createClinicTableRow(result.CLINIC_ID, result.CLINIC_ADD_STATE, result.CLINIC_ADD_CITY, result.CLINIC_TEL_NUM, result.CLINIC_FAX_NUM);

                            table.appendChild(newRow);
                        }
                    }
                });
            }
        });
    }
});

function ViewStaff(){
    $('#data-heading').html('View Staff');

    var dataNav = $('#view-data-side-nav');
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
                var newRow = createStaffTableRow(result.STAFF_ID, result.STAFF_FNAME, result.STAFF_LNAME, result.STAFF_POSITION, result.STAFF_ANN_SALARY, result.STAFF_ID_NUM, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
}
$(document).on('click', '.deleteStaff', function(){
    var mustDelete = confirm("Are you sure you want to delete this Staff member?");

    if(mustDelete == true) {
        connection.query("CALL `pets4u`.`delete_staff`('" +this.id+"')", function (err) {
            if (err) {
                alert('Bad shit went down : \n' + err.stack);
            }
            else {
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
                            var newRow = createStaffTableRow(result.STAFF_ID, result.STAFF_FNAME, result.STAFF_LNAME, result.STAFF_POSITION, result.STAFF_ANN_SALARY, result.STAFF_ID_NUM, result.CLINIC_ID);

                            table.appendChild(newRow);
                        }
                    }
                });
            }
        });
    }
});

function ViewOwners(){
    $('#data-heading').html('View Owners');

    var dataNav = $('#view-data-side-nav');
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
                var newRow = createOwnerTableRow(result.OWNER_ID, result.OWNER_FNAME, result.OWNER_LNAME, result.OWNER_TEL_NUM, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
}
$(document).on('click', '.deleteOwner', function(){
    var mustDelete = confirm("Are you sure you want to delete this owner?");

    if(mustDelete == true) {
        connection.query("CALL `pets4u`.`delete_owner`('" +this.id+"')", function (err) {
            if (err) {
                alert('Bad shit went down : \n' + err.stack);
            }
            else {
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
                            var newRow = createOwnerTableRow(result.OWNER_ID, result.OWNER_FNAME, result.OWNER_LNAME, result.OWNER_TEL_NUM, result.CLINIC_ID);

                            table.appendChild(newRow);
                        }
                    }
                });
            }
        });
    }
});

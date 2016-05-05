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

    var table1Head = $("#table1Head");
    table1Head.empty();
    var table2Head = $("#table2Head");
    table2Head.empty();
    var table3Head = $("#table3Head");
    table3Head.empty();

    var curTable = $('#table');
    curTable.empty();
    var table2 = $('#table1');
    table2.empty();
    var table3 = $('#table2');
    table3.empty();

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

    var table1Head = $("#table1Head");
    table1Head.empty();
    var table2Head = $("#table2Head");
    table2Head.empty();
    var table3Head = $("#table3Head");
    table3Head.empty();

    var curTable = $('#table');
    curTable.empty();
    var table2 = $('#table1');
    table2.empty();
    var table3 = $('#table2');
    table3.empty();

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

    var table1Head = $("#table1Head");
    table1Head.empty();
    var table2Head = $("#table2Head");
    table2Head.empty();
    var table3Head = $("#table3Head");
    table3Head.empty();

    var curTable = $('#table');
    curTable.empty();
    var table2 = $('#table1');
    table2.empty();
    var table3 = $('#table2');
    table3.empty();

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

function viewBackups(){
    $('#data-heading').html('View Backups');

    var dataNav = $('#view-data-side-nav');
    dataNav.removeClass('in-right');
    dataNav.addClass('out-right');

    var curDiv = $('.show');
    var clinicDiv = $('#data-div');

    curDiv.removeClass('show');
    curDiv.addClass('hide');

    clinicDiv.removeClass('hide');
    clinicDiv.addClass('show');

    var table1Head = $("#table1Head");
    table1Head.html('Clinics');
    var table2Head = $("#table2Head");
    table2Head.html('Owners');
    var table3Head = $("#table3Head");
    table3Head.html('Staff');

    var curTable = $('#table');
    curTable.empty();
    var table2 = $('#table1');
    table2.empty();
    var table3 = $('#table2');
    table3.empty();

    connection.query("CALL `pets4u`.`view_backup_Clinics`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createClinicBackupTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createClinicBackupTableRow(result.CLINIC_ID, result.CLINIC_ADD_STATE, result.CLINIC_ADD_CITY);

                table.appendChild(newRow);
            }
        }
    });
    connection.query("CALL `pets4u`.`view_backup_owners`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createOwnerBackupTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createOwnerBackupTableRow(result.OWNER_ID, result.OWNER_LNAME, result.OWNER_TEL_NUM, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
    connection.query("CALL `pets4u`.`view_backup_petss`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createstaffBackupTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createstaffBackupTableRow(result.STAFF_ID, result.STAFF_FNAME, result.STAFF_LNAME, result.STAFF_TEL, result.STAFF_ID_NUM, result.STAFF_POSITION, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
}


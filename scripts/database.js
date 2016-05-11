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

    connection.query("CALL `read_clinics`('-1')", function(err,rows){
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
        connection.query("CALL `delete_clinic`('" +this.id+"')", function (err) {
            if (err) {
                alert('Bad shit went down : \n' + err.stack);
            }
            else {
                var curTable = $('#table');
                curTable.empty();

                connection.query("CALL `read_clinics`('-1')", function(err,rows){
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

    connection.query("CALL `read_staff`('-1')", function(err,rows){
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
        connection.query("CALL `delete_staff`('" +this.id+"')", function (err) {
            if (err) {
                alert('Bad shit went down : \n' + err.stack);
            }
            else {
                var curTable = $('#table');
                curTable.empty();

                connection.query("CALL `read_staff`('-1')", function(err,rows){
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

    connection.query("CALL `read_owners`('-1')", function(err,rows){
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
        connection.query("CALL `delete_owner`('" +this.id+"')", function (err) {
            if (err) {
                alert('Bad shit went down : \n' + err.stack);
            }
            else {
                var curTable = $('#table');
                curTable.empty();

                connection.query("CALL `read_owners`('-1')", function(err,rows){
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

    connection.query("CALL `view_backup_Clinics`()", function(err,rows){
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
    connection.query("CALL `view_backup_owners`()", function(err,rows){
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
    connection.query("CALL `read_staff_backups`(-1)", function(err,rows){
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











function ViewPets(){
    $('#data-heading').html('View Pets');

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

    connection.query("CALL `read_pets`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createPetTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createPetTableRow(result.PET_ID, result.PET_NAME, result.PET_TYPE, result.PET_DESC);

                table.appendChild(newRow);
            }
        }
    });
}


function ViewAppointments(){
    $('#data-heading').html('View Appointments');

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

    connection.query("CALL `read_appointments`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createAppointmentTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createAppointmentTableRow(result.APP_ID, result.APP_TIME, result.PET_ID, result.CLINIC_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewExams(){
    $('#data-heading').html('View Examinations');

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

    connection.query("CALL `read_examinations`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createExaminationTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createExaminationTableRow(result.EXAM_ID, result.EXAM_TIME, result.EXAM_DESC, result.PET_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewInvoices(){
    $('#data-heading').html('View Invoices');

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

    connection.query("CALL `read_invoices`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createInvoiceTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createInvoiceTableRow(result.INV_ID, result.INV_DATE, result.INV_TREAT_COST, result.PET_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewInvoicePayments(){
    $('#data-heading').html('View Invoice Payments');

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

    connection.query("CALL `read_invoice_payments`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createInvoicePaymentTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createInvoicePaymentTableRow(result.PAY_ID, result.PAY_METHOD, result.PAY_DATE, result.INV_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewPens(){
    $('#data-heading').html('View Pens');

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

    connection.query("CALL `read_pens`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createPenTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createPenTableRow(result.PEN_ID, result.PEN_CAPACITY, result.PEN_STATUS, result.PEN_COMMENTS,result.Clinic_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewPetStays(){
    $('#data-heading').html('View Pet Stays');

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

    connection.query("CALL `read_pet_stays`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createPetStayTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createPetStayTableRow(result.STAY_ID, result.STAY_BEGIN, result.STAY_END, result.PET_ID,result.PEN_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewPetTreats(){
    $('#data-heading').html('View Pet Treatments');

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

    connection.query("CALL `read_pet_treatments`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createPetTreatmentTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createPetTreatmentTableRow(result.PET_TREAT_ID, result.PET_TREAT_BEGIN, result.PET_TREAT_END, result.PET_TREAT_COMMENTS,result.EXAM_ID);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewNonSurgical(){
    $('#data-heading').html('View Non-Surgical Supplies');

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

    connection.query("CALL `read_supplies_non_surgical`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createNon_SurgicalTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createNon_SurgicalTableRow(result.SUPP_ID, result.SUPP_NAME, result.SUPP_DESC, result.SUPP_QUANTITY,result.SUPP_RE_COST);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewPharmaceutical(){
    $('#data-heading').html('View Pharmaceutical Supplies');

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

    connection.query("CALL `read_supplies_pharmaseutical`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createPharmaceuticalTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createPharmaceuticalTableRow(result.SUPP_ID, result.SUPP_NAME, result.SUPP_DESC, result.SUPP_QUANTITY,result.SUPP_RE_COST);

                table.appendChild(newRow);
            }
        }
    });
}

function ViewSurgical(){
    $('#data-heading').html('View Surgical Supplies');

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

    connection.query("CALL `read_supplies_surgical`('-1')", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createSurgicalTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createSurgicalTableRow(result.SUPP_ID, result.SUPP_NAME, result.SUPP_DESC, result.SUPP_QUANTITY,result.SUPP_RE_COST);

                table.appendChild(newRow);
            }
        }
    });
}


function ViewTreatments(){
    $('#data-heading').html('View Treatments');

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

    connection.query("CALL `read_treatments`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createTreatmentsTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createTreatmentsTableRow(result.TREAT_ID, result.TREAT_DESC, result.TREAT_COST);

                table.appendChild(newRow);
            }
        }
    });
}


function reportManagers(){
    $('#data-heading').html('Report of Clinic Managers');

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

    connection.query("CALL `report_clinic_managers`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createManagerReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createManagerReportTableRow(result.CLINIC_ID, result.CLINIC_ADD_STATE, result.CLINIC_ADD_CITY,result.STAFF_ID,result.MANAGER_NAME);

                table.appendChild(newRow);
            }
        }
    });
}



function reportTreatmentCosts(){
    $('#data-heading').html('Report of Treatment Costs');

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

    connection.query("CALL `report_cost_of_treatmentss`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createTreatmentCostReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createTreatmentCostReportTableRow(result.Minimum, result.Maximum, result.Average);

                table.appendChild(newRow);
            }
        }
    });
}


function reportOwnersPets(){
    $('#data-heading').html('Report of Owners and their pets');

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

    connection.query("CALL `report_owners_pets`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createOwnersPetsReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createOwnersPetsReportTableRow(result.OWNER_ID, result.OWNER_FNAME, result.OWNER_LNAME, result.PET_NAME,result.PET_TYPE,result.PET_DESC);

                table.appendChild(newRow);
            }
        }
    });
}

function reportPensPerClinic(){
    $('#data-heading').html('Report of Pens Per Clinic');

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

    connection.query("CALL `report_pens_per_clinic`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createClinicPensReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createClinicPensReportTableRow(result.CLINIC_ID, result.NUMBER_OF_PENS);

                table.appendChild(newRow);
            }
        }
    });
}

function reportPetsPerType(){
    $('#data-heading').html('Report of Pets Per Type');

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

    connection.query("CALL `report_pet_count_by_type`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createPetTypeReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createPetTypeReportTableRow(result.PET_TYPE, result.Number);

                table.appendChild(newRow);
            }
        }
    });
}

function reportStaffAge(){
    $('#data-heading').html('Report of Staff Members over 50');

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

    connection.query("CALL `report_staff_age`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createStaffAgeReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createStaffAgeReportTableRow(result.STAFF_ID, result.STAFF_NAME,result.STAFF_POSITION,result.AGE);

                table.appendChild(newRow);
            }
        }
    });
}

function reportStaffSalary(){
    $('#data-heading').html('Report of Total Monthly Salaries Per Clinic');

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

    connection.query("CALL `report_staff_salary`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createStaffSalaryReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createStaffSalaryReportTableRow(result.CLINIC_ID, result.Total_monthly_salary_per_clinic);

                table.appendChild(newRow);
            }
        }
    });
}

function reportSuppliesOnHandCost(){
    $('#data-heading').html('Report of the value of Supplies on Hand');

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

    connection.query("CALL `report_supplies_on_hand_cost`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createSupplyCostReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createSupplyCostReportTableRow(result.ID, result.SURGICAL_TOTAL,result.NON_SURGICAL_TOTAL);

                table.appendChild(newRow);
            }
        }
    });
}

function reportSuppliesReOrder(){
    $('#data-heading').html('Report of the value of Supplies on Hand');

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

    connection.query("CALL `report_supplies_to_reorder_clinic`()", function(err,rows){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            var table = createSupplyReOrderReportTable();
            for (var c = 0; c <= rows[0].length; c++) {
                console.log(rows[0][c]);

                var result = rows[0][c];
                var newRow = createSupplyReOrderReportTableRow(result.CLINIC_ID, result.SUPP_ID,result.SUPP_NAME,result.SUPP_QUANTITY,result.SUPP_RE_LEVEL);

                table.appendChild(newRow);
            }
        }
    });
}
function showEnterClinic(){
    $('#data-enter-heading').html('Record Clinic');
    readyForm();
    createClinicForm();
}
function createClinic(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();

    connection.query("CALL `create_clinic_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('A Clinic has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterPen(){
    $('#data-enter-heading').html('Record a Pen');
    readyForm();
    createPenForm();
}
function createPen(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();

    connection.query("CALL `create_pen_reocrds`('"+t1+"', '0','"+t2+"','"+t3+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('A Pen has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterStaff(){
    $('#data-enter-heading').html('Record Staff');
    readyForm();
    createStaffForm();
}
function createStaff(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();
    var t9 = $('#t9').val();
    var t10 = $('#t10').val();
    var t11 = $('#t11').val();
    var t12 = $('#t12').val();

    connection.query("CALL `create_staff_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"','"+t9+"','"+t10+"','"+t11+"','"+t12+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('A Staff member has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterOwner(){
    $('#data-enter-heading').html('Record an Owner');
    readyForm();
    createOwnerForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterPet(){
    $('#data-enter-heading').html('Record a Pet');
    readyForm();
    createPetForm();
}
function createPet(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();

    connection.query("CALL `create_pet_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','0', '"+t5+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('A pet has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterAppoint(){
    $('#data-enter-heading').html('Record an Appointment');
    readyForm();
    createAppointForm();
}
function createAppoint(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterExam(){
    $('#data-enter-heading').html('Record an Examination');
    readyForm();
    createExamForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterPetStay(){
    $('#data-enter-heading').html("Record a Pet's Stay");
    readyForm();
    createPetStayForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterPetTreat(){
    $('#data-enter-heading').html("Record a Pet's Treatment");
    readyForm();
    createPetTreatForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterStayTreat(){
    $('#data-enter-heading').html('Record a Stay Treatment Procedure');
    readyForm();
    createStayTreatForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterInv(){
    $('#data-enter-heading').html('Record an Invoice');
    readyForm();
    createInvForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterInvPay(){
    $('#data-enter-heading').html('Record an Invoice Payment');
    readyForm();
    createInvPayForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterNonSurg(){
    $('#data-enter-heading').html('Record Non-Surgical Supplies');
    readyForm();
    createNonSurgForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterSurg(){
    $('#data-enter-heading').html('Record Surgical Supplies');
    readyForm();
    createSurgForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterPhar(){
    $('#data-enter-heading').html('Record Pharmaceutical Supplies');
    readyForm();
    createPharForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterTreat(){
    $('#data-enter-heading').html('Record a Treatment');
    readyForm();
    createTreatForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function showEnterTreatCost(){
    $('#data-enter-heading').html('Record a Treatment Cost');
    readyForm();
    createTreatCostForm();
}
function createOwner(){
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();
    var t4 = $('#t4').val();
    var t5 = $('#t5').val();
    var t6 = $('#t6').val();
    var t7 = $('#t7').val();
    var t8 = $('#t8').val();

    connection.query("CALL `create_Owner_records`('"+t1+"','"+t2+"','"+t3+"','"+t4+"','"+t5+"','"+t6+"','"+t7+"','"+t8+"')", function(err){
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
        }
        else {
            alert('An owner has been added');

            var myDiv = $('#data-enter-div');
            myDiv.removeClass('show');
            myDiv.addClass('hide');

            var mainDiv = $('#main-div');
            mainDiv.removeClass('hide');
            mainDiv.addClass('show');
        }
    });
}

function readyForm(){
    var dataNav = $('#enter-data-side-nav');
    dataNav.removeClass('in-right');
    dataNav.addClass('out-right');

    var curDiv = $('.show');
    var myDiv = $('#data-enter-div');

    curDiv.removeClass('show');
    curDiv.addClass('hide');

    myDiv.removeClass('hide');
    myDiv.addClass('show');

    var form = $("#enterForm");
    form.empty();
}
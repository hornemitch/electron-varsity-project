function showEnterClinic(){
    $('#data-enter-heading').html('Enter Clinic');

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

}

function showEnterStaff(){

}

function showEnterOwner(){

}

function showEnterPet(){

}

function showEnterAppoint(){

}

function showEnterExam(){

}

function showEnterPetStay(){

}

function showEnterPetTreat(){

}

function showEnterStayTreat(){

}

function showEnterInv(){

}

function showEnterInvPay(){

}

function showEnterNonSurg(){

}

function showEnterSurg(){

}

function showEnterPhar(){

}

function showEnterTreat(){

}

function showEnterTreatCost(){

}

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

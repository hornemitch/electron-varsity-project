function createClinicTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("State");
    var head3Text = document.createTextNode("City");
    var head4Text = document.createTextNode("Telephone");
    var head5Text = document.createTextNode("Fax");

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);

    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);
    tRow.appendChild(head4);
    tRow.appendChild(head5);

    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createClinicTableRow(id, state, city, tel, fax){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var telephone = separateTelephone(tel);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(state);
    var cell3Text = document.createTextNode(city);
    var cell4Text = document.createTextNode(telephone);
    var cell5Text = document.createTextNode(fax);

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);
    cell5.appendChild(cell5Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);
    tRow.appendChild(cell5);

    return tRow;
}
function separateTelephone(telNum){
    var telephone = '' + telNum;
    return telephone.substr(0, 3) + '-' + telephone.substr(3, 3) + '-' + telephone.substr(6,4)
}

function createStaffTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("Staff ID");
    var head2Text = document.createTextNode("First Name");
    var head3Text = document.createTextNode("Last Name");
    var head4Text = document.createTextNode("Clinic ID");

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);

    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);
    tRow.appendChild(head4);

    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createStaffTableRow(id, fname, lname, clinId){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(fname);
    var cell3Text = document.createTextNode(lname);
    var cell4Text = document.createTextNode(clinId);

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);

    return tRow;
}

function createOwnerTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("Owner ID");
    var head2Text = document.createTextNode("First Name");
    var head3Text = document.createTextNode("Last Name");
    var head4Text = document.createTextNode("Clinic ID");

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);

    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);
    tRow.appendChild(head4);

    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createOwnerTableRow(id, fname, lname, clinId){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(fname);
    var cell3Text = document.createTextNode(lname);
    var cell4Text = document.createTextNode(clinId);

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);

    return tRow;
}
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
    var cell6 = document.createElement("td");

    var telephone = separateTelephone(tel);
    var faxNum = separateTelephone(fax);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(state);
    var cell3Text = document.createTextNode(city);
    var cell4Text = document.createTextNode(telephone);
    var cell5Text = document.createTextNode(faxNum);
    var cell6Text = document.createElement('button');
    cell6Text.innerHTML = "Delete";
    cell6Text.id = id;
    cell6Text.className = "tableButton deleteClinic";

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);
    cell5.appendChild(cell5Text);
    cell6.appendChild(cell6Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);
    tRow.appendChild(cell5);
    tRow.appendChild(cell6);

    return tRow;
}

function createStaffTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");
    var head6 = document.createElement("th");
    var head7 = document.createElement("th");

    var head1Text = document.createTextNode("Staff ID");
    var head2Text = document.createTextNode("First Name");
    var head3Text = document.createTextNode("Last Name");
    var head4Text = document.createTextNode("Position");
    var head5Text = document.createTextNode("Salary");
    var head6Text = document.createTextNode("ID #");
    var head7Text = document.createTextNode("Clinic ID");

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);

    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);
    tRow.appendChild(head4);
    tRow.appendChild(head5);
    tRow.appendChild(head6);
    tRow.appendChild(head7);

    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createStaffTableRow(id, fname, lname, position, salary, idNum, clinId){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var cell7 = document.createElement("td");
    var cell8 = document.createElement("td");

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(fname);
    var cell3Text = document.createTextNode(lname);
    var cell4Text = document.createTextNode(position);
    var cell5Text = document.createTextNode(salary);
    var cell6Text = document.createTextNode(idNum);
    var cell7Text = document.createTextNode(clinId);
    var cell8Text = document.createElement('button');
    cell8Text.innerHTML = "Delete";
    cell8Text.id = id;
    cell8Text.className = "tableButton deleteStaff";

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);
    cell5.appendChild(cell5Text);
    cell6.appendChild(cell6Text);
    cell7.appendChild(cell7Text);
    cell8.appendChild(cell8Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);
    tRow.appendChild(cell5);
    tRow.appendChild(cell6);
    tRow.appendChild(cell7);
    tRow.appendChild(cell8);

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
    var head5 = document.createElement("th");

    var head1Text = document.createTextNode("Owner ID");
    var head2Text = document.createTextNode("First Name");
    var head3Text = document.createTextNode("Last Name");
    var head4Text = document.createTextNode("Telephone");
    var head5Text = document.createTextNode("Clinic ID");

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
function createOwnerTableRow(id, fname, lname, tel, clinId){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");

    var telephone = separateTelephone(tel);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(fname);
    var cell3Text = document.createTextNode(lname);
    var cell4Text = document.createTextNode(telephone);
    var cell5Text = document.createTextNode(clinId);
    var cell6Text = document.createElement('button');
    cell6Text.innerHTML = "Delete";
    cell6Text.id = id;
    cell6Text.className = "tableButton deleteOwner";

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);
    cell5.appendChild(cell5Text);
    cell6.appendChild(cell6Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);
    tRow.appendChild(cell5);
    tRow.appendChild(cell6);

    return tRow;
}

function createClinicBackupTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("State");
    var head3Text = document.createTextNode("City");

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);

    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);

    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createClinicBackupTableRow(id, state, city){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(state);
    var cell3Text = document.createTextNode(city);

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);

    return tRow;
}

function createOwnerBackupTable(){
    var table = document.getElementById('table1');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Last Name");
    var head3Text = document.createTextNode("Telephone");
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
function createOwnerBackupTableRow(id, lname, tel, clinId){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    var telephone = separateTelephone(tel);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(lname);
    var cell3Text = document.createTextNode(telephone);
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

function createstaffBackupTable(){
    var table = document.getElementById('table2');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");
    var head6 = document.createElement("th");
    var head7 = document.createElement("th");

    var head1Text = document.createTextNode("Staff ID");
    var head2Text = document.createTextNode("First Name");
    var head3Text = document.createTextNode("Last Name");
    var head4Text = document.createTextNode("Telephone");
    var head5Text = document.createTextNode("ID #");
    var head6Text = document.createTextNode("Position");
    var head7Text = document.createTextNode("Clinic ID");

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);
    head7.appendChild(head7Text);

    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);
    tRow.appendChild(head4);
    tRow.appendChild(head5);
    tRow.appendChild(head6);
    tRow.appendChild(head7);

    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createstaffBackupTableRow(id, fname, lname, tel, position, idNum, clinId){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var cell7 = document.createElement("td");

    var telephone = separateTelephone(tel);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(fname);
    var cell3Text = document.createTextNode(lname);
    var cell4Text = document.createTextNode(telephone);
    var cell5Text = document.createTextNode(position);
    var cell6Text = document.createTextNode(idNum);
    var cell7Text = document.createTextNode(clinId);

    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
    cell4.appendChild(cell4Text);
    cell5.appendChild(cell5Text);
    cell6.appendChild(cell6Text);
    cell7.appendChild(cell7Text);

    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
    tRow.appendChild(cell4);
    tRow.appendChild(cell5);
    tRow.appendChild(cell6);
    tRow.appendChild(cell7);

    return tRow;
}

function separateTelephone(telNum){
    var telephone = '' + telNum;
    return telephone.substr(0, 3) + '-' + telephone.substr(3, 3) + '-' + telephone.substr(6,4)
}




















function createPetTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Name");
    var head3Text = document.createTextNode("Type");
    var head4Text = document.createTextNode("Description");
 
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
function createPetTableRow(id, name, type, description){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");


    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(name);
    var cell3Text = document.createTextNode(type);
    var cell4Text = document.createTextNode(description);

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

function createAppointmentTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Time");
    var head3Text = document.createTextNode("Pet ID");
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
function createAppointmentTableRow(id, time, petid, clinicid){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    var shorttime = shortdate(time);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(shorttime);
    var cell3Text = document.createTextNode(petid);
    var cell4Text = document.createTextNode(clinicid);

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

function createExaminationTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Time");
    var head3Text = document.createTextNode("Description");
    var head4Text = document.createTextNode("Pet ID");
 
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
function createExaminationTableRow(id, time, desc, petid){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    var shorttime = shortdate(time);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(shorttime);
    var cell3Text = document.createTextNode(desc);
    var cell4Text = document.createTextNode(petid);

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

function createInvoiceTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Date");
    var head3Text = document.createTextNode("Treatment Cost");
    var head4Text = document.createTextNode("Pet ID");
 
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
function createInvoiceTableRow(id, date, cost, petid){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    var shorttime = shortdate(date);
    cost = 'R'+cost;

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(shorttime);
    var cell3Text = document.createTextNode(cost);
    var cell4Text = document.createTextNode(petid);

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

function createPenTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Capacity");
    var head3Text = document.createTextNode("Status");
    var head4Text = document.createTextNode("Comments");
    var head5Text = document.createTextNode("Clinic ID");

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
function createPenTableRow(id, capacity, status, comments, clinicid){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(capacity);
    var cell3Text = document.createTextNode(status);
    var cell4Text = document.createTextNode(comments);
    var cell5Text = document.createTextNode(clinicid);

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

function createPetStayTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");

    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Stay From");
    var head3Text = document.createTextNode("Stay To");
    var head4Text = document.createTextNode("Pet ID");
    var head5Text = document.createTextNode("Clinic ID");

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
function createPetStayTableRow(id, begin, end, petid, penid){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    shortbegin = shortdate(begin);
    shortend = shortdate(end);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(shortbegin);
    var cell3Text = document.createTextNode(shortend);
    var cell4Text = document.createTextNode(petid);
    var cell5Text = document.createTextNode(penid);

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

function createPetTreatmentTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");
  
    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Stay From");
    var head3Text = document.createTextNode("Stay To");
    var head4Text = document.createTextNode("Comments");
    var head5Text = document.createTextNode("Examination ID");
  
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
function createPetTreatmentTableRow(id, begin, end, comments, examid){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    shortbegin = shortdate(begin);
    shortend = shortdate(end);

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(shortbegin);
    var cell3Text = document.createTextNode(shortend);
    var cell4Text = document.createTextNode(comments);
    var cell5Text = document.createTextNode(examid);

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

function createNon_SurgicalTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");
  
    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Name");
    var head3Text = document.createTextNode("Description");
    var head4Text = document.createTextNode("Quantity On Hand");
    var head5Text = document.createTextNode("Restock Cost");
  
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
function createNon_SurgicalTableRow(id, name, desc, quant, cost){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var cost = 'R'+cost;

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(name);
    var cell3Text = document.createTextNode(desc);
    var cell4Text = document.createTextNode(quant);
    var cell5Text = document.createTextNode(cost);

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

function createPharmaceuticalTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");
  
    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Name");
    var head3Text = document.createTextNode("Description");
    var head4Text = document.createTextNode("Quantity On Hand");
    var head5Text = document.createTextNode("Restock Cost");
  
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
function createPharmaceuticalTableRow(id, name, desc, quant, cost){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var cost = 'R'+cost;

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(name);
    var cell3Text = document.createTextNode(desc);
    var cell4Text = document.createTextNode(quant);
    var cell5Text = document.createTextNode(cost);

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

function createSurgicalTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");
  
    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Name");
    var head3Text = document.createTextNode("Description");
    var head4Text = document.createTextNode("Quantity On Hand");
    var head5Text = document.createTextNode("Restock Cost");
  
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
function createSurgicalTableRow(id, name, desc, quant, cost){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var cost = 'R'+cost;

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(name);
    var cell3Text = document.createTextNode(desc);
    var cell4Text = document.createTextNode(quant);
    var cell5Text = document.createTextNode(cost);

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


function createTreatmentsTable(){
    var table = document.getElementById('table');

    var tBody= document.createElement("tbody");

    var tRow  = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
   
    var head1Text = document.createTextNode("ID");
    var head2Text = document.createTextNode("Description");
    var head3Text = document.createTextNode("Cost");

  
    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
   
    tRow.appendChild(head1);
    tRow.appendChild(head2);
    tRow.appendChild(head3);
  
    tBody.appendChild(tRow);

    table.appendChild(tBody);

    return tBody;
}
function createTreatmentsTableRow(id, desc, cost){
    var tRow  = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");

    var cost = 'R'+cost;

    var cell1Text = document.createTextNode(id);
    var cell2Text = document.createTextNode(desc);
    var cell3Text = document.createTextNode(cost);
 
    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);
 
    tRow.appendChild(cell1);
    tRow.appendChild(cell2);
    tRow.appendChild(cell3);
 
    return tRow;
}


function shortdate(date){
    var newdate = ''+date;
    return newdate.substr(0,15)
}
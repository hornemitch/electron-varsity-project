var mysql = require('mysql');
var connection;

$('#connect-form').submit( function(event){
    event.preventDefault();

    var ipAddress = $('#ip-input').val();
    var db        = $('#db-input').val();
    var userName  = $('#user-input').val();
    var password  = $('#pass-input').val();

    connection = mysql.createConnection({
        host    : ipAddress,
        user    : userName,
        password: password,
        database: db
    });

    connection.connect(function(err) {
        if(err){
            alert('Connection Failure- \nPlease ensure that your login details are correct');
        }
        else {
            alert('Successfully connected to MySQL database on port -' + ipAddress);

            var curDiv = $('#connect-div');
            curDiv.removeClass();
            curDiv.addClass('hide');

            var div = $('#main-div');
            div.removeClass();
            div.addClass('show');

            $('#host-heading').html('IP Address: ' + ipAddress);
            $('#user-heading').html('User Name : ' + userName);

            $('#no-conn-div').addClass('hide');
            $('#is-conn-div').removeClass('hide');

            $('#ip-address-show').html(ipAddress);
            $('#db-show').html(db);
            $('#db-user-show').html(userName);

            $('.connected-menu-items').removeClass('hide');
        }
    });
});

function autoConnect(){
    connection = mysql.createConnection({
        host    : '127.0.0.1',
        user    : 'root',
        password: 'Boondocks5',
        database: 'pets4u'
    });

    var curDiv = $('.show');
    curDiv.removeClass('show');
    curDiv.addClass('hide');

    var div = $('#main-div');
    div.removeClass('hide');
    div.addClass('show');

    connection.connect(function(err) {
        if(err){
            alert('Connection Failure- \nPlease ensure that your login details are correct : ' + err.stack);
        }
        else {
            var curDiv = $('.show');
            curDiv.addClass('hide');

            $('#no-conn-div').addClass('hide');
            $('#is-conn-div').removeClass('hide');

            $('#ip-address-show').html('127.0.0.1');
            $('#db-show').html('pets4u');
            $('#db-user-show').html('root');

            $('.connected-menu-items').removeClass('hide');
        }
    });
}

function disconnect(){
    connection.destroy();
    alert("You are now disconnected");

    var connNav = $('#connection-side-nav');
    var curDiv = $('.show');
    var conDiv = $('#connect-div');

    curDiv.removeClass('show');
    curDiv.addClass('hide');
    setTimeout(function(){conDiv.removeClass('hide'); conDiv.addClass('show');}, 500);

    connNav.removeClass('in-right');
    connNav.addClass('out-right');

    $('#is-conn-div').addClass('hide');
    $('#no-conn-div').removeClass('hide');

    $('.connected-menu-items').addClass('hide');
}

$('#add-owner').click(function(){
    connection.query("CALL `testdb`.`add_owner`('Mike', 'Jackson', '1990/01/25')");
    connection.query("CALL `testdb`.`add_owner`('Janet', 'Grant', '1990/01/25')");
    connection.query("CALL `testdb`.`add_owner`('George', 'Lopez', '1961/04/23')");

    alert('Owners have been added');
});

$('#add-pet').click(function(){
    var owner1;
    var owner2;
    var owner3;

    connection.query("CALL `testdb`.`get_owner_by_name`('all')", function(err, rows) {
        if (err) {
            alert('Bad shit went down : \n' + err.stack);
            return;
        }
        else {
            owner1 = rows[0][0];
            owner2 = rows[0][1];
            owner3 = rows[0][2];

            console.log(rows) ;
            console.log(rows[0]);
            console.log(rows[0][0]);
            console.log(rows[0][1]);
            console.log(rows[0][2]);
        }

        connection.query("CALL `testdb`.`add_pet`('Harrison', 'Bulldog', '1990/01/01', " + owner1.id + ")");
        connection.query("CALL `testdb`.`add_pet`('Franco', 'Parrot', '1990/01/01', " + owner2.id + ")");
        connection.query("CALL `testdb`.`add_pet`('Fluffy', 'T-Rex', '1900/01/01', " + owner3.id + ")");

        alert('Pets were created');
    });
});


$('#view').click(function(){
    connection.query("CALL `testdb`.`get_owner_pets`('-1')", function(err,rows){
        var table = createTable();
        for(var c = 0; c <= rows.length; c++){
            console.log(rows[0][c]);

            var result = rows[0][c];
            var newRow =createTableRow(result.id, result.fName, result.lName, result.name, result.type);

            table.appendChild(newRow);
        }
    });
});
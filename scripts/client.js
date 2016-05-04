/*  Side-nav Controls   */
$('#connection-menu').click(function(){
    var dataNav = $('#data-side-nav');
    var connNav = $('#connection-side-nav');
    var activeData = dataNav.hasClass('in-right');
    var activeConn = connNav.hasClass('in-right');

    if(activeData == true){
        dataNav.removeClass('in-right');
        dataNav.addClass('out-right');
        setTimeout(function(){connNav.addClass('in-right');}, 250);
    }
    else if(activeConn == true){
        connNav.removeClass('in-right');
        connNav.addClass('out-right');
    }
    else{
        connNav.addClass('in-right');
    }
});

$('#data-menu').click(function(){
    var dataNav = $('#data-side-nav');
    var connNav = $('#connection-side-nav');
    var activeData = dataNav.hasClass('in-right');
    var activeConn = connNav.hasClass('in-right');

    if(activeConn == true){
        connNav.removeClass('in-right');
        connNav.addClass('out-right');
        setTimeout(function(){dataNav.addClass('in-right');}, 250);
    }
    else if(activeData == true){
        dataNav.removeClass('in-right');
        dataNav.addClass('out-right');
    }
    else{
        dataNav.addClass('in-right');
    }
});
/*  Side-nav Controls   */

/*  Connection controls */
$('#connect-form').submit( function(event){
    event.preventDefault();

    var ipAddress = $('#ip-input').val();
    var userName  = $('#user-input').val();
    var password  = $('#pass-input').val();

    connection = mysql.createConnection({
        host    : ipAddress,
        user    : userName,
        password: password
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
        }
    });
});

/*  Connection controls */
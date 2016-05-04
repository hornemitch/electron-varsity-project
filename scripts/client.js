var remote = require('remote');

/*  Side-nav Controls   */
$('#connection-menu').click(function(){
    var viewDataNav = $('#view-data-side-nav');
    var connNav = $('#connection-side-nav');
    var activeData = viewDataNav.hasClass('in-right');
    var activeConn = connNav.hasClass('in-right');

    if(activeData == true){
        viewDataNav.removeClass('in-right');
        viewDataNav.addClass('out-right');
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

function expandViewData(){
    var viewDataNav = $('#view-data-side-nav');
    var connNav = $('#connection-side-nav');
    var activeData = viewDataNav.hasClass('in-right');
    var activeConn = connNav.hasClass('in-right');

    if(activeConn == true){
        connNav.removeClass('in-right');
        connNav.addClass('out-right');
        setTimeout(function(){viewDataNav.addClass('in-right');}, 250);
    }
    else if(activeData == true){
        viewDataNav.removeClass('in-right');
        viewDataNav.addClass('out-right');
    }
    else{
        viewDataNav.addClass('in-right');
    }
}

function expandEnterData(){
    var viewDataNav = $('#view-data-side-nav');
    var connNav = $('#connection-side-nav');
    var activeData = dataNav.hasClass('in-right');
    var activeConn = connNav.hasClass('in-right');

    if(activeConn == true){
        connNav.removeClass('in-right');
        connNav.addClass('out-right');
        setTimeout(function(){viewDataNav.addClass('in-right');}, 250);
    }
    else if(activeData == true){
        viewDataNav.removeClass('in-right');
        viewDataNav.addClass('out-right');
    }
    else{
        viewDataNav.addClass('in-right');
    }
}

$(".container").click(function(){
    var activeNav = $('.side-nav.in-right');
    if(activeNav != null){
        activeNav.addClass("out-right");
        activeNav.removeClass("in-right");
    }
});

function closeWindow(){
    var window = remote.getCurrentWindow();
    window.close();
}
function minimizeWindow(){
    var window = remote.getCurrentWindow();
    window.minimize();
}

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
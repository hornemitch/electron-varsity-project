var app = require('app');
var BrowserWindow = require('browser-window') ;
require('electron-reload')(__dirname);

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 700,
        title: "Database GUI",
        center: true,
        resizable: false,
        frame:false
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
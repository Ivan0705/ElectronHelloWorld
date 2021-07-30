// Modules to control application life and create native browser window
const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        icon: __dirname + '/img/icon.png'
    });

    mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }
    ));

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;

    })


}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});


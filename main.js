const { app, BrowserWindow } = require('electron')

        function createWindow () {
          // Создаем окно браузера.
          let win = new BrowserWindow({
            width: 890,
            height: 550,
            webPreferences: {
              nodeIntegration: true,
              fullscreen: true
            }
          })

          win.removeMenu();
          win.loadFile('index.html')
        }
        app.whenReady().then(createWindow)
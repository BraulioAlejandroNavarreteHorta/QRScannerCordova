document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var openCameraButton = document.getElementById('openCamera');
    openCameraButton.addEventListener('click', openCamera);

    var scanQRButton = document.getElementById('scanQR');
    scanQRButton.addEventListener('click', scanQRCode);

    displayStoredImages();
    displayStoredQRs();

    function openCamera() {
        navigator.camera.getPicture(onCameraSuccess, onCameraError, {
            quality: 25,
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 100,
            targetHeight: 100
        });
    }

    function onCameraSuccess(imageData) {
        var imagesContainer = document.getElementById('imagesContainer');
        var img = document.createElement('img');
        img.src = "data:image/jpeg;base64," + imageData;
        imagesContainer.appendChild(img);

        saveImage(imageData);
    }

    function onCameraError(message) {
        alert('Failed because: ' + message);
    }

    function scanQRCode() {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if (!result.cancelled) {
                    var qrResultsContainer = document.getElementById('qrResultsContainer');
                    var p = document.createElement('p');
                    p.textContent = 'QR Code Text: ' + result.text;
                    qrResultsContainer.appendChild(p);

                    saveQR(result.text);
                }
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    }

    function saveImage(imageData) {
        var images = JSON.parse(localStorage.getItem('images')) || [];
        images.push(imageData);
        localStorage.setItem('images', JSON.stringify(images));
    }

    function saveQR(text) {
        var qrs = JSON.parse(localStorage.getItem('qrs')) || [];
        qrs.push(text);
        localStorage.setItem('qrs', JSON.stringify(qrs));
    }

    function displayStoredImages() {
        var images = JSON.parse(localStorage.getItem('images')) || [];
        var imagesContainer = document.getElementById('imagesContainer');
        images.forEach(function(imageData) {
            var img = document.createElement('img');
            img.src = "data:image/jpeg;base64," + imageData;
            imagesContainer.appendChild(img);
        });
    }

    function displayStoredQRs() {
        var qrs = JSON.parse(localStorage.getItem('qrs')) || [];
        var qrResultsContainer = document.getElementById('qrResultsContainer');
        qrs.forEach(function(text) {
            var p = document.createElement('p');
            p.textContent = 'QR Code Text: ' + text;
            qrResultsContainer.appendChild(p);
        });
    }
}

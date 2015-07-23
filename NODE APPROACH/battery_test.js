var GoPro = require('goproh4');

var cam = new GoPro.Camera();

cam.status(GoPro.Status.InternalBatteryLevel).then(function (status_value) {
    console.log('[battery level is] = ', status_value);
});
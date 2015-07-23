var GoPro = require('goproh4');

var cam = new GoPro.Camera();
// var cam = new GoPro.Camera({
//     ip: '10.5.5.9' /* Gopro ip, should be 10.5.5.9 except in remote mode */,
//    broadcastip: '10.5.5.255' /* Broadcast ip of the gopro network, use to wake up the gopro (WOL protocol), should be 10.5.5.255 */,
//    mac: '............' /* Mac address, used to wake up the gopro, should be set if the camera is off before launching the script, can be retrieve on the camera object cam._mac */
// });



//  GoPro.Camera.mode(mode, submode) is the syntax
cam.mode(GoPro.Settings.Modes.Video, GoPro.Settings.Submodes.Video.Video) //MODES

.then(function () {
	cam.set(GoPro.Settings.VIDEO_RESOLUTION, GoPro.Settings.VideoResolution.R1080S)  // RESOLUTION SETTER
.then(function () {
	cam.set(GoPro.Settings.VIDEO_FPS, GoPro.Settings.VideoFPS.F60)   // FPS SETTER
.then(function () {
	cam.start()														// CAM START
.then(function () {
   																	console.log('[video recording] = start');
   		setTimeout(function () {									//REQUEST TIMOUT?
	cam.stop()
.then(function () {
            														console.log('[video recording] = stop');
                    }); 											// CAM STOP
                }, 10000); 											// TIME OUT FUNCTION


            });
        });
    });
});
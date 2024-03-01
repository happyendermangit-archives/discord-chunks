function(e, t, n) {
    "use strict";
    var i;
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), i = class {
        acquire(e) {
            return navigator.mediaDevices.getUserMedia(e)
        }
        release(e) {
            e.getTracks().forEach(e => {
                e.onended = function() {}, e.stop()
            })
        }
    }
}
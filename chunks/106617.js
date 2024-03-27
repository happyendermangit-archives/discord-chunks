function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    class i {
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
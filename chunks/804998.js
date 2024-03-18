function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOrCreateAudioContext: function() {
            return s
        }
    });
    let i = null;

    function s() {
        return null == i && (i = new AudioContext), i
    }
}
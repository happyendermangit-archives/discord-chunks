function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOrCreateAudioContext: function() {
            return r
        }
    });
    let i = null;

    function r() {
        return null == i && (i = new AudioContext), i
    }
}
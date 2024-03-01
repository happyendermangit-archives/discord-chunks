function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerVideoStream: function() {
            return a
        },
        unregisterVideoStream: function() {
            return o
        },
        getVideoStream: function() {
            return l
        }
    });
    var i = n("773179"),
        r = n.n(i);
    let s = {};

    function a(e) {
        let t = r.uniqueId("VideoStream");
        return s[t] = e, t
    }

    function o(e) {
        delete s[e]
    }

    function l(e) {
        return s[e]
    }
}
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
    var i = n("582909"),
        s = n.n(i);
    let r = {};

    function a(e) {
        let t = s("VideoStream");
        return r[t] = e, t
    }

    function o(e) {
        delete r[e]
    }

    function l(e) {
        return r[e]
    }
}
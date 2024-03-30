function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVideoStream: function() {
            return l
        },
        registerVideoStream: function() {
            return a
        },
        unregisterVideoStream: function() {
            return o
        }
    });
    var i = n("39383"),
        r = n.n(i);
    let s = {};

    function a(e) {
        let t = r()("VideoStream");
        return s[t] = e, t
    }

    function o(e) {
        delete s[e]
    }

    function l(e) {
        return s[e]
    }
}
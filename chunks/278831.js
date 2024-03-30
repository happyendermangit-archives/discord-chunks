function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVideoStream: function() {
            return s
        },
        registerVideoStream: function() {
            return a
        },
        unregisterVideoStream: function() {
            return u
        }
    });
    var r = n("39383"),
        o = n.n(r),
        i = {};

    function a(e) {
        var t = o()("VideoStream");
        return i[t] = e, t
    }

    function u(e) {
        delete i[e]
    }

    function s(e) {
        return i[e]
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVideoStream: function() {
            return l
        },
        registerVideoStream: function() {
            return s
        },
        unregisterVideoStream: function() {
            return o
        }
    });
    var i = n("39383"),
        r = n.n(i);
    let a = {};

    function s(e) {
        let t = r()("VideoStream");
        return a[t] = e, t
    }

    function o(e) {
        delete a[e]
    }

    function l(e) {
        return a[e]
    }
}
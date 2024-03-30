function(e, t, n) {
    "use strict";

    function r(e) {
        var t = document.createElement("a");
        return t.href = e, t.hostname
    }

    function o(e) {
        var t = document.createElement("a");
        return t.href = e, t.protocol
    }
    n.r(t), n.d(t, {
        getHostname: function() {
            return r
        },
        getProtocol: function() {
            return o
        }
    })
}
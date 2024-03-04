function(e, t, n) {
    "use strict";

    function i(e) {
        let t = document.createElement("a");
        return t.href = e, t.hostname
    }

    function s(e) {
        let t = document.createElement("a");
        return t.href = e, t.protocol
    }
    n.r(t), n.d(t, {
        getHostname: function() {
            return i
        },
        getProtocol: function() {
            return s
        }
    })
}
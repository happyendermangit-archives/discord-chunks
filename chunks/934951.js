function(t, n, e) {
    "use strict";
    e.r(n), e.d(n, {
        addBreadcrumb: function() {
            return o
        }
    });
    var r = e("109393"),
        i = e("926918");

    function o(t) {
        ! function(t) {
            for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
            var o = (0, i.getCurrentHub)();
            if (o && o[t]) return o[t].apply(o, r.__spread(n));
            throw Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }("addBreadcrumb", t)
    }
}
function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addBreadcrumb: function() {
            return o
        }
    }), n("70102");
    var r = n("247472"),
        i = n("658171");

    function o(t) {
        ! function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var o = (0, i.getCurrentHub)();
            if (o && o[t]) return o[t].apply(o, r.__spread(e));
            throw Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }("addBreadcrumb", t)
    }
}
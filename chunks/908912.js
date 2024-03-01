function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        deliverResizeLoopError: function() {
            return i
        }
    });
    var r = "ResizeObserver loop completed with undelivered notifications.",
        i = function() {
            var t;
            "function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
                message: r
            }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = r), window.dispatchEvent(t)
        }
}
function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        deliverResizeLoopError: function() {
            return u
        }
    });
    var n = "ResizeObserver loop completed with undelivered notifications.",
        u = function() {
            var e;
            "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
                message: n
            }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = n), window.dispatchEvent(e)
        }
}
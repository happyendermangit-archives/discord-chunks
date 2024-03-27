function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deliverResizeLoopError: function() {
            return i
        }
    });
    var r = "ResizeObserver loop completed with undelivered notifications.",
        i = function() {
            var e;
            "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
                message: r
            }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = r), window.dispatchEvent(e)
        }
}
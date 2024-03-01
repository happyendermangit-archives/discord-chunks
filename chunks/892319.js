function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObserver: function() {
            return ResizeObserver
        }
    }), n("70102");
    var r = n("307119"),
        a = n("925691"),
        ResizeObserver = function() {
            function ResizeObserver(e) {
                if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                r.ResizeObserverController.connect(this, e)
            }
            return ResizeObserver.prototype.observe = function(e, t) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, a.isElement)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                r.ResizeObserverController.observe(this, e, t)
            }, ResizeObserver.prototype.unobserve = function(e) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, a.isElement)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                r.ResizeObserverController.unobserve(this, e)
            }, ResizeObserver.prototype.disconnect = function() {
                r.ResizeObserverController.disconnect(this)
            }, ResizeObserver.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            }, ResizeObserver
        }()
}
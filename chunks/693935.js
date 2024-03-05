function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ResizeObserver: function() {
            return ResizeObserver
        }
    }), r("70102");
    var n = r("994853"),
        u = r("467980"),
        ResizeObserver = function() {
            function ResizeObserver(e) {
                if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                n.ResizeObserverController.connect(this, e)
            }
            return ResizeObserver.prototype.observe = function(e, t) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, u.isElement)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                n.ResizeObserverController.observe(this, e, t)
            }, ResizeObserver.prototype.unobserve = function(e) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, u.isElement)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                n.ResizeObserverController.unobserve(this, e)
            }, ResizeObserver.prototype.disconnect = function() {
                n.ResizeObserverController.disconnect(this)
            }, ResizeObserver.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            }, ResizeObserver
        }()
}
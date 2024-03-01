function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        ResizeObserver: function() {
            return ResizeObserver
        }
    }), n("70102");
    var r = n("301979"),
        i = n("320810"),
        ResizeObserver = function() {
            function ResizeObserver(t) {
                if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof t) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                r.ResizeObserverController.connect(this, t)
            }
            return ResizeObserver.prototype.observe = function(t, e) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, i.isElement)(t)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                r.ResizeObserverController.observe(this, t, e)
            }, ResizeObserver.prototype.unobserve = function(t) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, i.isElement)(t)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                r.ResizeObserverController.unobserve(this, t)
            }, ResizeObserver.prototype.disconnect = function() {
                r.ResizeObserverController.disconnect(this)
            }, ResizeObserver.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            }, ResizeObserver
        }()
}
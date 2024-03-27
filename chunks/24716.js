function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.Math == Math ? t : void 0
    }
    n.r(e), n.d(e, {
        GLOBAL_OBJ: function() {
            return i
        },
        getGlobalObject: function() {
            return a
        },
        getGlobalSingleton: function() {
            return o
        }
    });
    let i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
        return this
    }() || {};

    function a() {
        return i
    }

    function o(t, e, n) {
        let r = n || i,
            a = r.__SENTRY__ = r.__SENTRY__ || {};
        return a[t] || (a[t] = e())
    }
}
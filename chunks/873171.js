function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        consoleSandbox: function() {
            return u
        },
        dynamicRequire: function() {
            return i
        },
        getGlobalObject: function() {
            return c
        },
        isNodeEnv: function() {
            return o
        },
        timestampWithMs: function() {
            return _
        },
        uuid4: function() {
            return a
        }
    });
    var r = n("444675");

    function i(t, e) {
        return t.require(e)
    }

    function o() {
        return "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
    }
    var s = {};

    function c() {
        return o() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : s
    }

    function a() {
        var t = c(),
            e = t.crypto || t.msCrypto;
        if (void 0 !== e && e.getRandomValues) {
            var n = new Uint16Array(8);
            e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var r = function(t) {
                for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                return e
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function u(t) {
        var e = c();
        if (!("console" in e)) return t();
        var n = e.console,
            r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
            t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
        });
        var i = t();
        return Object.keys(r).forEach(function(t) {
            n[t] = r[t]
        }), i
    }

    function _() {
        return new Date().getTime() / 1e3
    }
}
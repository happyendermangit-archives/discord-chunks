function(t, n, e) {
    "use strict";
    e.r(n), e.d(n, {
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
    var r = e("444675");

    function i(t, n) {
        return t.require(n)
    }

    function o() {
        return "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
    }
    var s = {};

    function c() {
        return o() ? e.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : s
    }

    function a() {
        var t = c(),
            n = t.crypto || t.msCrypto;
        if (void 0 !== n && n.getRandomValues) {
            var e = new Uint16Array(8);
            n.getRandomValues(e), e[3] = 4095 & e[3] | 16384, e[4] = 16383 & e[4] | 32768;
            var r = function(t) {
                for (var n = t.toString(16); n.length < 4;) n = "0" + n;
                return n
            };
            return r(e[0]) + r(e[1]) + r(e[2]) + r(e[3]) + r(e[4]) + r(e[5]) + r(e[6]) + r(e[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = 16 * Math.random() | 0;
            return ("x" === t ? n : 3 & n | 8).toString(16)
        })
    }

    function u(t) {
        var n = c();
        if (!("console" in n)) return t();
        var e = n.console,
            r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
            t in n.console && e[t].__sentry_original__ && (r[t] = e[t], e[t] = e[t].__sentry_original__)
        });
        var i = t();
        return Object.keys(r).forEach(function(t) {
            e[t] = r[t]
        }), i
    }

    function _() {
        return new Date().getTime() / 1e3
    }
}
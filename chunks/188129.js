function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Logger: function() {
            return l
        },
        setLogFn: function() {
            return s
        }
    });
    var r = n("367429");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = function() {};

    function s(e) {
        u = e
    }
    var l = function e() {
        var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
            o = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), i(this, "name", void 0), i(this, "logDangerously", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            u.apply(void 0, [o.name, "log", e].concat(a(n)))
        }), i(this, "log", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            r.checkLogForPII.apply(void 0, [e].concat(a(n))), u.apply(void 0, [o.name, "log", e].concat(a(n)))
        }), i(this, "verboseDangerously", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            u.apply(void 0, [o.name, "debug", e].concat(a(n)))
        }), i(this, "verbose", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            r.checkLogForPII.apply(void 0, [e].concat(a(n))), u.apply(void 0, [o.name, "debug", e].concat(a(n)))
        }), i(this, "info", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            r.checkLogForPII.apply(void 0, [e].concat(a(n))), u.apply(void 0, [o.name, "info", e].concat(a(n)))
        }), i(this, "warn", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            r.checkLogForPII.apply(void 0, [e].concat(a(n))), u.apply(void 0, [o.name, "warn", e].concat(a(n)))
        }), i(this, "error", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            r.checkLogForPII.apply(void 0, [e].concat(a(n))), u.apply(void 0, [o.name, "error", e].concat(a(n)))
        }), i(this, "trace", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            u.apply(void 0, [o.name, "trace", e].concat(a(n)))
        }), i(this, "time", function(e, n) {
            var r = Date.now(),
                o = n();
            return t.log(e, Date.now() - r), o
        }), i(this, "fileOnly", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            u.apply(void 0, [o.name, "file-only", e].concat(a(n)))
        }), this.name = n
    }
}
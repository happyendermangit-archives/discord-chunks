function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Logger: function() {
            return o
        },
        setLogFn: function() {
            return a
        }
    }), n("47120");
    var i = n("247071");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let s = () => {};

    function a(e) {
        s = e
    }
    class o {
        constructor(e = "default") {
            var t = this;
            r(this, "name", void 0), r(this, "logDangerously", function(e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                s(t.name, "log", e, ...i)
            }), r(this, "log", function(e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.checkLogForPII)(e, ...r), s(t.name, "log", e, ...r)
            }), r(this, "verboseDangerously", function(e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                s(t.name, "debug", e, ...i)
            }), r(this, "verbose", function(e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.checkLogForPII)(e, ...r), s(t.name, "debug", e, ...r)
            }), r(this, "info", function(e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.checkLogForPII)(e, ...r), s(t.name, "info", e, ...r)
            }), r(this, "warn", function(e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.checkLogForPII)(e, ...r), s(t.name, "warn", e, ...r)
            }), r(this, "error", function(e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.checkLogForPII)(e, ...r), s(t.name, "error", e, ...r)
            }), r(this, "trace", function(e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                s(t.name, "trace", e, ...i)
            }), r(this, "time", (e, t) => {
                let n = Date.now(),
                    i = t();
                return this.log(e, Date.now() - n), i
            }), r(this, "fileOnly", function(e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                s(t.name, "file-only", e, ...i)
            }), this.name = e
        }
    }
}
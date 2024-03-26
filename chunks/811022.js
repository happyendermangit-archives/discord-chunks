function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        setLogFn: function() {
            return n
        },
        Logger: function() {
            return r
        }
    }), E("222007");
    var t = E("14334");
    let o = () => {};

    function n(e) {
        o = e
    }
    class r {
        constructor(e = "default") {
            var _ = this;
            this.logDangerously = function(e) {
                for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), n = 1; n < E; n++) t[n - 1] = arguments[n];
                o(_.name, "log", e, ...t)
            }, this.log = function(e) {
                for (var E = arguments.length, n = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) n[r - 1] = arguments[r];
                (0, t.checkLogForPII)(e, ...n), o(_.name, "log", e, ...n)
            }, this.verboseDangerously = function(e) {
                for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), n = 1; n < E; n++) t[n - 1] = arguments[n];
                o(_.name, "debug", e, ...t)
            }, this.verbose = function(e) {
                for (var E = arguments.length, n = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) n[r - 1] = arguments[r];
                (0, t.checkLogForPII)(e, ...n), o(_.name, "debug", e, ...n)
            }, this.info = function(e) {
                for (var E = arguments.length, n = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) n[r - 1] = arguments[r];
                (0, t.checkLogForPII)(e, ...n), o(_.name, "info", e, ...n)
            }, this.warn = function(e) {
                for (var E = arguments.length, n = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) n[r - 1] = arguments[r];
                (0, t.checkLogForPII)(e, ...n), o(_.name, "warn", e, ...n)
            }, this.error = function(e) {
                for (var E = arguments.length, n = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) n[r - 1] = arguments[r];
                (0, t.checkLogForPII)(e, ...n), o(_.name, "error", e, ...n)
            }, this.trace = function(e) {
                for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), n = 1; n < E; n++) t[n - 1] = arguments[n];
                o(_.name, "trace", e, ...t)
            }, this.time = (e, _) => {
                let E = Date.now(),
                    t = _();
                return this.log(e, Date.now() - E), t
            }, this.fileOnly = function(e) {
                for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), n = 1; n < E; n++) t[n - 1] = arguments[n];
                o(_.name, "file-only", e, ...t)
            }, this.name = e
        }
    }
}
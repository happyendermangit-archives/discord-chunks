function(t, e, n) {
    "use strict";
    var r = n("147018"),
        i = n("161581"),
        a = n("197187"),
        o = n("261987"),
        s = "WebAssembly",
        u = i[s],
        c = 7 !== Error("e", {
            cause: 7
        }).cause,
        l = function(t, e) {
            var n = {};
            n[t] = o(t, e, c), r({
                global: !0,
                constructor: !0,
                arity: 1,
                forced: c
            }, n)
        },
        d = function(t, e) {
            if (u && u[t]) {
                var n = {};
                n[t] = o(s + "." + t, e, c), r({
                    target: s,
                    stat: !0,
                    constructor: !0,
                    arity: 1,
                    forced: c
                }, n)
            }
        };
    l("Error", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), l("EvalError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), l("RangeError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), l("ReferenceError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), l("SyntaxError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), l("TypeError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), l("URIError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), d("CompileError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), d("LinkError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    }), d("RuntimeError", function(t) {
        return function(e) {
            return a(t, this, arguments)
        }
    })
}
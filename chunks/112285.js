function(e, t, n) {
    "use strict";
    var r, i, a, o, s = n("161581"),
        u = n("197187"),
        c = n("566885"),
        l = n("354848"),
        d = n("740362"),
        f = n("936940"),
        p = n("620623"),
        h = n("50754"),
        m = n("722063"),
        g = n("202934"),
        _ = n("531460"),
        b = n("391673"),
        v = s.setImmediate,
        y = s.clearImmediate,
        E = s.process,
        S = s.Dispatch,
        x = s.Function,
        w = s.MessageChannel,
        T = s.String,
        C = 0,
        D = {},
        O = "onreadystatechange";
    f(function() {
        r = s.location
    });
    var M = function(e) {
            if (d(D, e)) {
                var t = D[e];
                delete D[e], t()
            }
        },
        A = function(e) {
            return function() {
                M(e)
            }
        },
        k = function(e) {
            M(e.data)
        },
        R = function(e) {
            s.postMessage(T(e), r.protocol + "//" + r.host)
        };
    (!v || !y) && (v = function(e) {
        g(arguments.length, 1);
        var t = l(e) ? e : x(e),
            n = h(arguments, 1);
        return D[++C] = function() {
            u(t, void 0, n)
        }, i(C), C
    }, y = function(e) {
        delete D[e]
    }, b ? i = function(e) {
        E.nextTick(A(e))
    } : S && S.now ? i = function(e) {
        S.now(A(e))
    } : w && !_ ? (o = (a = new w).port2, a.port1.onmessage = k, i = c(o.postMessage, o)) : s.addEventListener && l(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !f(R) ? (i = R, s.addEventListener("message", k, !1)) : i = O in m("script") ? function(e) {
        p.appendChild(m("script"))[O] = function() {
            p.removeChild(this), M(e)
        }
    } : function(e) {
        setTimeout(A(e), 0)
    }), e.exports = {
        set: v,
        clear: y
    }
}
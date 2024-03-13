function(e, t, n) {
    "use strict";
    var r, a, o, i, s = n("503486"),
        u = n("145661"),
        l = n("886639"),
        c = n("125359"),
        d = n("59393"),
        f = n("664144"),
        p = n("574430"),
        m = n("484320"),
        h = n("382780"),
        y = n("79807"),
        _ = n("69600"),
        g = n("106106"),
        v = s.setImmediate,
        b = s.clearImmediate,
        M = s.process,
        w = s.Dispatch,
        Function = s.Function,
        MessageChannel = s.MessageChannel,
        String = s.String,
        k = 0,
        L = {},
        D = "onreadystatechange";
    f(function() {
        r = s.location
    });
    var T = function(e) {
            if (d(L, e)) {
                var t = L[e];
                delete L[e], t()
            }
        },
        S = function(e) {
            return function() {
                T(e)
            }
        },
        Y = function(e) {
            T(e.data)
        },
        x = function(e) {
            s.postMessage(String(e), r.protocol + "//" + r.host)
        };
    (!v || !b) && (v = function(e) {
        y(arguments.length, 1);
        var t = c(e) ? e : Function(e),
            n = m(arguments, 1);
        return L[++k] = function() {
            u(t, void 0, n)
        }, a(k), k
    }, b = function(e) {
        delete L[e]
    }, g ? a = function(e) {
        M.nextTick(S(e))
    } : w && w.now ? a = function(e) {
        w.now(S(e))
    } : MessageChannel && !_ ? (i = (o = new MessageChannel).port2, o.port1.onmessage = Y, a = l(i.postMessage, i)) : s.addEventListener && c(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !f(x) ? (a = x, s.addEventListener("message", Y, !1)) : a = D in h("script") ? function(e) {
        p.appendChild(h("script"))[D] = function() {
            p.removeChild(this), T(e)
        }
    } : function(e) {
        setTimeout(S(e), 0)
    }), e.exports = {
        set: v,
        clear: b
    }
}
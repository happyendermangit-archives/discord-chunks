function(e, t) {
    "use strict";

    function n(e, t) {
        var n = e.length;
        for (e.push(t); 0 < n;) {
            var r = n - 1 >>> 1,
                i = e[r];
            if (0 < a(i, t)) e[r] = t, e[n] = i, n = r;
            else break
        }
    }

    function r(e) {
        return 0 === e.length ? null : e[0]
    }

    function i(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
                var s = 2 * (r + 1) - 1,
                    u = e[s],
                    c = s + 1,
                    l = e[c];
                if (0 > a(u, n)) c < i && 0 > a(l, u) ? (e[r] = l, e[c] = n, r = c) : (e[r] = u, e[s] = n, r = s);
                else if (c < i && 0 > a(l, n)) e[r] = l, e[c] = n, r = c;
                else break
            }
        }
        return t
    }

    function a(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    if ("object" == typeof performance && "function" == typeof performance.now) {
        var o, s = performance;
        t.unstable_now = function() {
            return s.now()
        }
    } else {
        var u = Date,
            c = u.now();
        t.unstable_now = function() {
            return u.now() - c
        }
    }
    var l = [],
        d = [],
        f = 1,
        p = null,
        h = 3,
        m = !1,
        g = !1,
        _ = !1,
        b = "function" == typeof setTimeout ? setTimeout : null,
        v = "function" == typeof clearTimeout ? clearTimeout : null,
        y = "undefined" != typeof setImmediate ? setImmediate : null;

    function E(e) {
        for (var t = r(d); null !== t;) {
            if (null === t.callback) i(d);
            else if (t.startTime <= e) i(d), t.sortIndex = t.expirationTime, n(l, t);
            else break;
            t = r(d)
        }
    }

    function S(e) {
        if (_ = !1, E(e), !g) {
            if (null !== r(l)) g = !0, N(x);
            else {
                var t = r(d);
                null !== t && I(S, t.startTime - e)
            }
        }
    }

    function x(e, n) {
        g = !1, _ && (_ = !1, v(C), C = -1), m = !0;
        var a = h;
        try {
            for (E(n), p = r(l); null !== p && (!(p.expirationTime > n) || e && !M());) {
                var o = p.callback;
                if ("function" == typeof o) {
                    p.callback = null, h = p.priorityLevel;
                    var s = o(p.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof s ? p.callback = s : p === r(l) && i(l), E(n)
                } else i(l);
                p = r(l)
            }
            if (null !== p) var u = !0;
            else {
                var c = r(d);
                null !== c && I(S, c.startTime - n), u = !1
            }
            return u
        } finally {
            p = null, h = a, m = !1
        }
    }
    "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var w = !1,
        T = null,
        C = -1,
        D = 5,
        O = -1;

    function M() {
        return !(t.unstable_now() - O < D)
    }

    function A() {
        if (null !== T) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
                n = T(!0, e)
            } finally {
                n ? o() : (w = !1, T = null)
            }
        } else w = !1
    }
    if ("function" == typeof y) o = function() {
        y(A)
    };
    else if ("undefined" != typeof MessageChannel) {
        var k = new MessageChannel,
            R = k.port2;
        k.port1.onmessage = A, o = function() {
            R.postMessage(null)
        }
    } else o = function() {
        b(A, 0)
    };

    function N(e) {
        T = e, w || (w = !0, o())
    }

    function I(e, n) {
        C = b(function() {
            e(t.unstable_now())
        }, n)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
        e.callback = null
    }, t.unstable_continueExecution = function() {
        g || m || (g = !0, N(x))
    }, t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < e ? Math.floor(1e3 / e) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return h
    }, t.unstable_getFirstCallbackNode = function() {
        return r(l)
    }, t.unstable_next = function(e) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = h
        }
        var n = h;
        h = t;
        try {
            return e()
        } finally {
            h = n
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = h;
        h = e;
        try {
            return t()
        } finally {
            h = n
        }
    }, t.unstable_scheduleCallback = function(e, i, a) {
        var o = t.unstable_now();
        switch (a = "object" == typeof a && null !== a ? "number" == typeof(a = a.delay) && 0 < a ? o + a : o : o, e) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default:
                s = 5e3
        }
        return s = a + s, e = {
            id: f++,
            callback: i,
            priorityLevel: e,
            startTime: a,
            expirationTime: s,
            sortIndex: -1
        }, a > o ? (e.sortIndex = a, n(d, e), null === r(l) && e === r(d) && (_ ? (v(C), C = -1) : _ = !0, I(S, a - o))) : (e.sortIndex = s, n(l, e), g || m || (g = !0, N(x))), e
    }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) {
        var t = h;
        return function() {
            var n = h;
            h = t;
            try {
                return e.apply(this, arguments)
            } finally {
                h = n
            }
        }
    }
}
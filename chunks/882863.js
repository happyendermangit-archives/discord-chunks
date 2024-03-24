function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = e.length;
        for (e.push(t); 0 < n;) {
            var r = n - 1 >>> 1,
                a = e[r];
            if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
            else break
        }
    }

    function a(e) {
        return 0 === e.length ? null : e[0]
    }

    function o(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var s = 2 * (r + 1) - 1,
                    u = e[s],
                    l = s + 1,
                    c = e[l];
                if (0 > i(u, n)) l < a && 0 > i(c, u) ? (e[r] = c, e[l] = n, r = l) : (e[r] = u, e[s] = n, r = s);
                else if (l < a && 0 > i(c, n)) e[r] = c, e[l] = n, r = l;
                else break
            }
        }
        return t
    }

    function i(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    if (n("424973"), n("860677"), "object" == typeof performance && "function" == typeof performance.now) {
        var s, u = performance;
        t.unstable_now = function() {
            return u.now()
        }
    } else {
        var l = Date,
            c = l.now();
        t.unstable_now = function() {
            return l.now() - c
        }
    }
    var d = [],
        f = [],
        p = 1,
        m = null,
        h = 3,
        y = !1,
        _ = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        b = "function" == typeof clearTimeout ? clearTimeout : null,
        M = "undefined" != typeof setImmediate ? setImmediate : null;

    function w(e) {
        for (var t = a(f); null !== t;) {
            if (null === t.callback) o(f);
            else if (t.startTime <= e) o(f), t.sortIndex = t.expirationTime, r(d, t);
            else break;
            t = a(f)
        }
    }

    function k(e) {
        if (g = !1, w(e), !_) {
            if (null !== a(d)) _ = !0, C(L);
            else {
                var t = a(f);
                null !== t && A(k, t.startTime - e)
            }
        }
    }

    function L(e, n) {
        _ = !1, g && (g = !1, b(S), S = -1), y = !0;
        var r = h;
        try {
            for (w(n), m = a(d); null !== m && (!(m.expirationTime > n) || e && !O());) {
                var i = m.callback;
                if ("function" == typeof i) {
                    m.callback = null, h = m.priorityLevel;
                    var s = i(m.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof s ? m.callback = s : m === a(d) && o(d), w(n)
                } else o(d);
                m = a(d)
            }
            if (null !== m) var u = !0;
            else {
                var l = a(f);
                null !== l && A(k, l.startTime - n), u = !1
            }
            return u
        } finally {
            m = null, h = r, y = !1
        }
    }
    "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var D = !1,
        T = null,
        S = -1,
        Y = 5,
        x = -1;

    function O() {
        return !(t.unstable_now() - x < Y)
    }

    function E() {
        if (null !== T) {
            var e = t.unstable_now();
            x = e;
            var n = !0;
            try {
                n = T(!0, e)
            } finally {
                n ? s() : (D = !1, T = null)
            }
        } else D = !1
    }
    if ("function" == typeof M) s = function() {
        M(E)
    };
    else if ("undefined" != typeof MessageChannel) {
        var P = new MessageChannel,
            j = P.port2;
        P.port1.onmessage = E, s = function() {
            j.postMessage(null)
        }
    } else s = function() {
        v(E, 0)
    };

    function C(e) {
        T = e, D || (D = !0, s())
    }

    function A(e, n) {
        S = v(function() {
            e(t.unstable_now())
        }, n)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
        e.callback = null
    }, t.unstable_continueExecution = function() {
        _ || y || (_ = !0, C(L))
    }, t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < e ? Math.floor(1e3 / e) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return h
    }, t.unstable_getFirstCallbackNode = function() {
        return a(d)
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
    }, t.unstable_scheduleCallback = function(e, n, o) {
        var i = t.unstable_now();
        switch (o = "object" == typeof o && null !== o ? "number" == typeof(o = o.delay) && 0 < o ? i + o : i : i, e) {
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
        return s = o + s, e = {
            id: p++,
            callback: n,
            priorityLevel: e,
            startTime: o,
            expirationTime: s,
            sortIndex: -1
        }, o > i ? (e.sortIndex = o, r(f, e), null === a(d) && e === a(f) && (g ? (b(S), S = -1) : g = !0, A(k, o - i))) : (e.sortIndex = s, r(d, e), _ || y || (_ = !0, C(L))), e
    }, t.unstable_shouldYield = O, t.unstable_wrapCallback = function(e) {
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
function(t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && Symbol.for,
        i = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        h = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        _ = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;

    function w(t) {
        if ("object" == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
                case i:
                    switch (t = t.type) {
                        case f:
                        case h:
                        case a:
                        case s:
                        case u:
                        case d:
                            return t;
                        default:
                            switch (t = t && t.$$typeof) {
                                case l:
                                case p:
                                case m:
                                case y:
                                case c:
                                    return t;
                                default:
                                    return e
                            }
                    }
                case o:
                    return e
            }
        }
    }

    function O(t) {
        return w(t) === h
    }
    e.AsyncMode = f, e.ConcurrentMode = h, e.ContextConsumer = l, e.ContextProvider = c, e.Element = i, e.ForwardRef = p, e.Fragment = a, e.Lazy = m, e.Memo = y, e.Portal = o, e.Profiler = s, e.StrictMode = u, e.Suspense = d, e.isAsyncMode = function(t) {
        return O(t) || w(t) === f
    }, e.isConcurrentMode = O, e.isContextConsumer = function(t) {
        return w(t) === l
    }, e.isContextProvider = function(t) {
        return w(t) === c
    }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === i
    }, e.isForwardRef = function(t) {
        return w(t) === p
    }, e.isFragment = function(t) {
        return w(t) === a
    }, e.isLazy = function(t) {
        return w(t) === m
    }, e.isMemo = function(t) {
        return w(t) === y
    }, e.isPortal = function(t) {
        return w(t) === o
    }, e.isProfiler = function(t) {
        return w(t) === s
    }, e.isStrictMode = function(t) {
        return w(t) === u
    }, e.isSuspense = function(t) {
        return w(t) === d
    }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === a || t === h || t === s || t === u || t === d || t === v || "object" == typeof t && null !== t && (t.$$typeof === m || t.$$typeof === y || t.$$typeof === c || t.$$typeof === l || t.$$typeof === p || t.$$typeof === b || t.$$typeof === _ || t.$$typeof === x || t.$$typeof === g)
    }, e.typeOf = w
}
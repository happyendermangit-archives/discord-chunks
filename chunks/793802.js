function(e, t) {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        o = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        _ = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        y = n ? Symbol.for("react.scope") : 60119;

    function E(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case r:
                    switch (e = e.type) {
                        case l:
                        case d:
                        case a:
                        case s:
                        case o:
                        case p:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case c:
                                case f:
                                case g:
                                case m:
                                case u:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case i:
                    return t
            }
        }
    }

    function S(e) {
        return E(e) === d
    }
    t.AsyncMode = l, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = u, t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = s, t.StrictMode = o, t.Suspense = p, t.isAsyncMode = function(e) {
        return S(e) || E(e) === l
    }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return E(e) === c
    }, t.isContextProvider = function(e) {
        return E(e) === u
    }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
    }, t.isForwardRef = function(e) {
        return E(e) === f
    }, t.isFragment = function(e) {
        return E(e) === a
    }, t.isLazy = function(e) {
        return E(e) === g
    }, t.isMemo = function(e) {
        return E(e) === m
    }, t.isPortal = function(e) {
        return E(e) === i
    }, t.isProfiler = function(e) {
        return E(e) === s
    }, t.isStrictMode = function(e) {
        return E(e) === o
    }, t.isSuspense = function(e) {
        return E(e) === p
    }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === o || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || e.$$typeof === b || e.$$typeof === v || e.$$typeof === y || e.$$typeof === _)
    }, t.typeOf = E
}
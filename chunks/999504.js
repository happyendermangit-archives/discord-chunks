function(e, t) {
    "use strict";
    var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        f = Symbol.for("react.lazy"),
        p = Symbol.iterator,
        h = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        m = Object.assign,
        g = {};

    function _(e, t, n) {
        this.props = e, this.context = t, this.refs = g, this.updater = n || h
    }

    function b() {}

    function v(e, t, n) {
        this.props = e, this.context = t, this.refs = g, this.updater = n || h
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, b.prototype = _.prototype;
    var y = v.prototype = new b;
    y.constructor = v, m(y, _.prototype), y.isPureReactComponent = !0;
    var E = Array.isArray,
        S = Object.prototype.hasOwnProperty,
        x = {
            current: null
        },
        w = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function T(e, t, r) {
        var i, a = {},
            o = null,
            s = null;
        if (null != t)
            for (i in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) S.call(t, i) && !w.hasOwnProperty(i) && (a[i] = t[i]);
        var u = arguments.length - 2;
        if (1 === u) a.children = r;
        else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
            a.children = c
        }
        if (e && e.defaultProps)
            for (i in u = e.defaultProps) void 0 === a[i] && (a[i] = u[i]);
        return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: a,
            _owner: x.current
        }
    }

    function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
    }
    var D = /\/+/g;

    function O(e, t) {
        var n, r;
        return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
            "=": "=0",
            ":": "=2"
        }, "$" + n.replace(/[=:]/g, function(e) {
            return r[e]
        })) : t.toString(36)
    }

    function M(e, t, i) {
        if (null == e) return e;
        var a = [],
            o = 0;
        return ! function e(t, i, a, o, s) {
            var u, c, l, d = typeof t;
            ("undefined" === d || "boolean" === d) && (t = null);
            var f = !1;
            if (null === t) f = !0;
            else switch (d) {
                case "string":
                case "number":
                    f = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case n:
                        case r:
                            f = !0
                    }
            }
            if (f) {
                ;
                return s = s(f = t), t = "" === o ? "." + O(f, 0) : o, E(s) ? (a = "", null != t && (a = t.replace(D, "$&/") + "/"), e(s, i, a, "", function(e) {
                    return e
                })) : null != s && (C(s) && (u = s, c = a + (!s.key || f && f.key === s.key ? "" : ("" + s.key).replace(D, "$&/") + "/") + t, s = {
                    $$typeof: n,
                    type: u.type,
                    key: c,
                    ref: u.ref,
                    props: u.props,
                    _owner: u._owner
                }), i.push(s)), 1
            }
            if (f = 0, o = "" === o ? "." : o + ":", E(t))
                for (var h = 0; h < t.length; h++) {
                    var m = o + O(d = t[h], h);
                    f += e(d, i, a, m, s)
                } else {
                    ;
                    if ("function" == typeof(m = null === (l = t) || "object" != typeof l ? null : "function" == typeof(l = p && l[p] || l["@@iterator"]) ? l : null))
                        for (t = m.call(t), h = 0; !(d = t.next()).done;) m = o + O(d = d.value, h++), f += e(d, i, a, m, s);
                    else if ("object" === d) throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (i = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.")
                }
            return f
        }(e, a, "", "", function(e) {
            return t.call(i, e, o++)
        }), a
    }

    function A(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
            }, function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
            }), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
    }
    var k = {
            current: null
        },
        R = {
            transition: null
        };
    t.Children = {
        map: M,
        forEach: function(e, t, n) {
            M(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return M(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return M(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    }, t.Component = _, t.Fragment = i, t.Profiler = o, t.PureComponent = v, t.StrictMode = a, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
        ReactCurrentDispatcher: k,
        ReactCurrentBatchConfig: R,
        ReactCurrentOwner: x
    }, t.cloneElement = function(e, t, r) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var i = m({}, e.props),
            a = e.key,
            o = e.ref,
            s = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, s = x.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (c in t) S.call(t, c) && !w.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
        }
        var c = arguments.length - 2;
        if (1 === c) i.children = r;
        else if (1 < c) {
            u = Array(c);
            for (var l = 0; l < c; l++) u[l] = arguments[l + 2];
            i.children = u
        }
        return {
            $$typeof: n,
            type: e.type,
            key: a,
            ref: o,
            props: i,
            _owner: s
        }
    }, t.createContext = function(e) {
        return (e = {
            $$typeof: u,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }).Provider = {
            $$typeof: s,
            _context: e
        }, e.Consumer = e
    }, t.createElement = T, t.createFactory = function(e) {
        var t = T.bind(null, e);
        return t.type = e, t
    }, t.createRef = function() {
        return {
            current: null
        }
    }, t.forwardRef = function(e) {
        return {
            $$typeof: c,
            render: e
        }
    }, t.isValidElement = C, t.lazy = function(e) {
        return {
            $$typeof: f,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: A
        }
    }, t.memo = function(e, t) {
        return {
            $$typeof: d,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, t.startTransition = function(e) {
        var t = R.transition;
        R.transition = {};
        try {
            e()
        } finally {
            R.transition = t
        }
    }, t.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }, t.useCallback = function(e, t) {
        return k.current.useCallback(e, t)
    }, t.useContext = function(e) {
        return k.current.useContext(e)
    }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
        return k.current.useDeferredValue(e)
    }, t.useEffect = function(e, t) {
        return k.current.useEffect(e, t)
    }, t.useId = function() {
        return k.current.useId()
    }, t.useImperativeHandle = function(e, t, n) {
        return k.current.useImperativeHandle(e, t, n)
    }, t.useInsertionEffect = function(e, t) {
        return k.current.useInsertionEffect(e, t)
    }, t.useLayoutEffect = function(e, t) {
        return k.current.useLayoutEffect(e, t)
    }, t.useMemo = function(e, t) {
        return k.current.useMemo(e, t)
    }, t.useReducer = function(e, t, n) {
        return k.current.useReducer(e, t, n)
    }, t.useRef = function(e) {
        return k.current.useRef(e)
    }, t.useState = function(e) {
        return k.current.useState(e)
    }, t.useSyncExternalStore = function(e, t, n) {
        return k.current.useSyncExternalStore(e, t, n)
    }, t.useTransition = function() {
        return k.current.useTransition()
    }, t.version = "18.2.0"
}
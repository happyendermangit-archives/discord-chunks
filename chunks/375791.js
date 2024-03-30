function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n("652874"),
        o = n("242880"),
        u = n("35523"),
        i = n("870331"),
        l = n("375984"),
        a = n("281767");

    function c(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), r.forEach(function(e) {
                c(t, e, n[e])
            })
        }
        return t
    }

    function f(t, e) {
        return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                n.push.apply(n, r)
            }
            return n
        })(Object(e)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
        }), t
    }

    function p(t, e) {
        if (null == t) return {};
        var n, r, o = function(t, e) {
            if (null == t) return {};
            var n, r, o = {},
                u = Object.keys(t);
            for (r = 0; r < u.length; r++) n = u[r], !(e.indexOf(n) >= 0) && (o[n] = t[n]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(t);
            for (r = 0; r < u.length; r++) {
                if (n = u[r], !(e.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
            }
        }
        return o
    }

    function d(t) {
        var e = function(t, e) {
            if ("object" !== _(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== _(r)) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" === _(e) ? e : String(e)
    }

    function _(t) {
        return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }
    var y = "UserFlowAnalyticsStore_current",
        v = "UserFlowAnalyticsStore";

    function b(t) {
        if (t === l.FlowType.UNKNOWN) return null;
        var e = o.Storage.get("".concat(v, "-").concat(t));
        if (null == e) return null;
        var n = e.version,
            r = p(e, ["version"]);
        return 1 !== n ? null : r
    }
    new u.default("UserFlowAnalytics");
    var S = (0, r.default)(function(t, e) {
        return c({
            flows: {},
            currentFlow: null
        }, "activeFlow", function() {
            var t, n = null !== (t = e().currentFlow) && void 0 !== t ? t : o.Storage.get(y);
            if (null == n) return null;
            var r = e().flows[n],
                u = null != r ? r : b(n);
            return (null == u ? void 0 : u.currentStep) != null ? n : null
        })
    });

    function m(t, e) {
        var n = S.getState().flows,
            r = n[t],
            o = p(n, [t].map(d)),
            u = null != r ? r : b(t);
        if ((null == u ? void 0 : u.currentStep) == null || u.currentStep !== e) S.setState({
            flows: f(s({}, o), c({}, t, {
                type: t,
                lastStep: null,
                lastTimestamp: null,
                currentStep: e,
                currentTimestamp: new Date,
                skipped: !1
            })),
            currentFlow: t
        })
    }

    function g(t, e) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = t;
        t === l.FlowType.ANY && (o = null !== (n = S.getState().activeFlow()) && void 0 !== n ? n : l.FlowType.UNKNOWN);
        var u = S.getState().flows,
            i = u[o],
            a = p(u, [o].map(d)),
            _ = null != i ? i : b(o);
        if (null != _ && null != _.currentStep) _.currentStep !== e && S.setState({
            flows: f(s({}, a), c({}, o, f(s({}, _), {
                lastStep: _.currentStep,
                lastTimestamp: _.currentTimestamp,
                currentStep: e,
                currentTimestamp: new Date,
                ended: r
            }))),
            currentFlow: o
        })
    }
    S.subscribe(function(t) {
        var e;
        if (null != t && (! function(t) {
                if (t.type !== l.FlowType.UNKNOWN) {
                    var e = "".concat(v, "-").concat(t.type);
                    t.ended ? (o.Storage.remove(e), o.Storage.remove(y)) : (o.Storage.set("".concat(v, "-").concat(t.type), f(s({}, t), {
                        version: 1
                    })), o.Storage.set(y, t.type))
                }
            }(t), i.default.track(a.AnalyticEvents.NUO_TRANSITION, {
                flow_type: t.type,
                from_step: t.lastStep,
                to_step: t.currentStep,
                seconds_on_from_step: "function" != typeof(null === (e = t.lastTimestamp) || void 0 === e ? void 0 : e.getTime) ? 0 : (t.currentTimestamp.getTime() - t.lastTimestamp.getTime()) / 1e3
            }, {
                flush: !0
            }), t.ended)) {
            var n = s({}, S.getState().flows);
            delete n[t.type], S.setState({
                flows: n,
                currentFlow: null
            })
        }
    }, function(t) {
        return null != t.currentFlow ? t.flows[t.currentFlow] : void 0
    });

    function w() {
        return null != S.getState().activeFlow()
    }
    e.default = {
        flowStart: m,
        flowStepOrStart: function(t, e) {
            w() ? g(t, e) : m(t, e)
        },
        flowStep: g,
        hasActiveFlow: w
    }
}
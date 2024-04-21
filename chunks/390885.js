function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("652874"),
        a = n("433517"),
        l = n("710845"),
        i = n("626135"),
        r = n("630724"),
        u = n("981631");
    let o = "UserFlowAnalyticsStore_current",
        d = "UserFlowAnalyticsStore";

    function c(e) {
        if (e === r.FlowType.UNKNOWN) return null;
        let t = a.Storage.get("".concat(d, "-").concat(e));
        if (null == t) return null;
        let {
            version: n,
            ...s
        } = t;
        return 1 !== n ? null : s
    }
    new l.default("UserFlowAnalytics");
    let f = (0, s.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null !== (e = t().currentFlow) && void 0 !== e ? e : a.Storage.get(o);
            if (null == n) return null;
            let {
                [n]: s
            } = t().flows, l = null != s ? s : c(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null
        }
    }));

    function E(e, t) {
        let {
            [e]: n, ...s
        } = f.getState().flows, a = null != n ? n : c(e);
        if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) f.setState({
            flows: {
                ...s,
                [e]: {
                    type: e,
                    lastStep: null,
                    lastTimestamp: null,
                    currentStep: t,
                    currentTimestamp: new Date,
                    skipped: !1
                }
            },
            currentFlow: e
        })
    }

    function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = e;
        if (e === r.FlowType.ANY) {
            var a;
            s = null !== (a = f.getState().activeFlow()) && void 0 !== a ? a : r.FlowType.UNKNOWN
        }
        let {
            [s]: l, ...i
        } = f.getState().flows, u = null != l ? l : c(s);
        if (null != u && null != u.currentStep) u.currentStep !== t && f.setState({
            flows: {
                ...i,
                [s]: {
                    ...u,
                    lastStep: u.currentStep,
                    lastTimestamp: u.currentTimestamp,
                    currentStep: t,
                    currentTimestamp: new Date,
                    ended: n
                }
            },
            currentFlow: s
        })
    }
    f.subscribe(e => {
        var t;
        if (null != e && (! function(e) {
                if (e.type === r.FlowType.UNKNOWN) return;
                let t = "".concat(d, "-").concat(e.type);
                e.ended ? (a.Storage.remove(t), a.Storage.remove(o)) : (a.Storage.set("".concat(d, "-").concat(e.type), {
                    ...e,
                    version: 1
                }), a.Storage.set(o, e.type))
            }(e), i.default.track(u.AnalyticEvents.NUO_TRANSITION, {
                flow_type: e.type,
                from_step: e.lastStep,
                to_step: e.currentStep,
                seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
            }, {
                flush: !0
            }), e.ended)) {
            let t = {
                ...f.getState().flows
            };
            delete t[e.type], f.setState({
                flows: t,
                currentFlow: null
            })
        }
    }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

    function I() {
        return null != f.getState().activeFlow()
    }
    t.default = {
        flowStart: E,
        flowStepOrStart: function(e, t) {
            I() ? _(e, t) : E(e, t)
        },
        flowStep: _,
        hasActiveFlow: I
    }
}
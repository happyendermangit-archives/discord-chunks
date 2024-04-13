function(e, t, n) {
    "use strict";
    n.r(t);
    var l = n("652874"),
        a = n("433517"),
        u = n("710845"),
        r = n("626135"),
        i = n("630724"),
        s = n("981631");
    let o = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";

    function c(e) {
        if (e === i.FlowType.UNKNOWN) return null;
        let t = a.Storage.get("".concat(_, "-").concat(e));
        if (null == t) return null;
        let {
            version: n,
            ...l
        } = t;
        return 1 !== n ? null : l
    }
    new u.default("UserFlowAnalytics");
    let d = (0, l.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null !== (e = t().currentFlow) && void 0 !== e ? e : a.Storage.get(o);
            if (null == n) return null;
            let {
                [n]: l
            } = t().flows, u = null != l ? l : c(n);
            return (null == u ? void 0 : u.currentStep) != null ? n : null
        }
    }));

    function E(e, t) {
        let {
            [e]: n, ...l
        } = d.getState().flows, a = null != n ? n : c(e);
        if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) d.setState({
            flows: {
                ...l,
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

    function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = e;
        if (e === i.FlowType.ANY) {
            var a;
            l = null !== (a = d.getState().activeFlow()) && void 0 !== a ? a : i.FlowType.UNKNOWN
        }
        let {
            [l]: u, ...r
        } = d.getState().flows, s = null != u ? u : c(l);
        if (null != s && null != s.currentStep) s.currentStep !== t && d.setState({
            flows: {
                ...r,
                [l]: {
                    ...s,
                    lastStep: s.currentStep,
                    lastTimestamp: s.currentTimestamp,
                    currentStep: t,
                    currentTimestamp: new Date,
                    ended: n
                }
            },
            currentFlow: l
        })
    }
    d.subscribe(e => {
        var t;
        if (null != e && (! function(e) {
                if (e.type === i.FlowType.UNKNOWN) return;
                let t = "".concat(_, "-").concat(e.type);
                e.ended ? (a.Storage.remove(t), a.Storage.remove(o)) : (a.Storage.set("".concat(_, "-").concat(e.type), {
                    ...e,
                    version: 1
                }), a.Storage.set(o, e.type))
            }(e), r.default.track(s.AnalyticEvents.NUO_TRANSITION, {
                flow_type: e.type,
                from_step: e.lastStep,
                to_step: e.currentStep,
                seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
            }, {
                flush: !0
            }), e.ended)) {
            let t = {
                ...d.getState().flows
            };
            delete t[e.type], d.setState({
                flows: t,
                currentFlow: null
            })
        }
    }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

    function T() {
        return null != d.getState().activeFlow()
    }
    t.default = {
        flowStart: E,
        flowStepOrStart: function(e, t) {
            T() ? I(e, t) : E(e, t)
        },
        flowStep: I,
        hasActiveFlow: T
    }
}
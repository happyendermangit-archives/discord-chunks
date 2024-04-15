function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var a = n("735250"),
        l = n("470079"),
        r = n("481060"),
        s = n("367907"),
        i = n("153124"),
        d = n("82554"),
        o = n("185625"),
        u = n("255514"),
        c = n("981631"),
        m = n("729780");
    t.default = e => {
        let {
            reportType: t,
            menu: n,
            modalProps: _,
            onSubmit: f,
            onNavigate: E,
            emailToken: h,
            isAuthenticated: v = !0
        } = e, R = (0, i.useUID)(), {
            nodes: x,
            root_node_id: p,
            success_node_id: N,
            fail_node_id: g
        } = n, [T, I] = l.useState(p), [S, M] = l.useState(void 0), [j, C] = l.useState(void 0), [b, y] = l.useState([]), [A, L] = l.useState(void 0), D = e => {
            var n;
            let {
                destination: a
            } = e, [, l] = a, r = x[l];
            if (r.elements.some(e => "skip" === e.type) && (null === (n = r.button) || void 0 === n ? void 0 : n.type) === "next") return D({
                ...e,
                destination: ["", r.button.target]
            });
            if (y([...b, e]), null != r.key && (null == E || E(r.key)), M(void 0), C(void 0), t.name === d.ReportNames.MESSAGE || t.name === d.ReportNames.FIRST_DM) {
                let e = t.record.id;
                s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: r.report_type,
                    current_node: x[T].id,
                    next_node: r.id
                })
            }
            I(l)
        }, O = async e => {
            var a;
            let l = v ? await (0, o.submitReport)(n, t, [...b, e]) : await (0, o.submitUnauthenticatedReport)(n, t, [...b, e], h),
                r = null == l ? void 0 : null === (a = l.body) || void 0 === a ? void 0 : a.report_id;
            null != r && L(r), null == f || f(r)
        }, U = () => {
            var e, n;
            if (b.length < 1) return;
            let a = [...b],
                l = a.pop(),
                r = null !== (n = null == l ? void 0 : l.nodeRef) && void 0 !== n ? n : p;
            if (t.name === d.ReportNames.MESSAGE || t.name === d.ReportNames.FIRST_DM) {
                let e = t.record.id;
                s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: x[r].report_type,
                    current_node: x[T].id,
                    next_node: x[r].id
                })
            }
            M(null == l ? void 0 : null === (e = l.multiSelect) || void 0 === e ? void 0 : e.state), C(null == l ? void 0 : l.textInput), I(r), y(a), null == E || E("..")
        }, k = [], P = [];
        for (let e in x) {
            var B, G;
            let t = x[e];
            if (t.id !== N && t.id !== g && t.id !== p) {
                if (t.key.endsWith("_SUBMIT")) {
                    P.push(t);
                    continue
                }
                if (k.push(t), (null === (B = t.button) || void 0 === B ? void 0 : B.type) === "next") {
                    let e = null === (G = t.button) || void 0 === G ? void 0 : G.target,
                        n = k.indexOf(x[e]); - 1 !== n && (k.splice(n, 1), k.push(x[e]))
                }
            }
        }
        let w = [x[p], ...k, ...P, x[N], x[g]];
        return (0, a.jsx)(r.ModalRoot, {
            transitionState: _.transitionState,
            "aria-labelledby": R,
            children: (0, a.jsx)(r.Slides, {
                width: 440,
                activeSlide: T,
                centered: !1,
                children: w.map(e => (0, a.jsx)(r.Slide, {
                    id: e.id,
                    children: (0, a.jsx)("div", {
                        className: m.slideContainer,
                        children: (0, a.jsx)(u.default, {
                            node: e,
                            reportType: t,
                            history: b,
                            onModalClose: _.onClose,
                            onSelectChild: D,
                            onNavigateBack: U,
                            multiSelect: S,
                            textInput: j,
                            successNodeId: N,
                            failNodeId: g,
                            onSubmit: O,
                            reportId: A
                        })
                    })
                }, e.id))
            })
        })
    }
}
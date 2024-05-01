function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        a = n("481060"),
        s = n("367907"),
        o = n("153124"),
        l = n("82554"),
        u = n("185625"),
        d = n("255514"),
        _ = n("981631"),
        c = n("158612");
    t.default = e => {
        let {
            reportType: t,
            menu: n,
            modalProps: E,
            onSubmit: I,
            onNavigate: T,
            emailToken: f,
            isAuthenticated: S = !0
        } = e, h = (0, o.useUID)(), {
            nodes: A,
            root_node_id: m,
            success_node_id: N,
            fail_node_id: p
        } = n, [O, R] = r.useState(m), [C, g] = r.useState(void 0), [L, v] = r.useState(void 0), [D, M] = r.useState([]), [y, P] = r.useState(void 0), U = e => {
            var n;
            let {
                destination: i
            } = e, [, r] = i, a = A[r];
            if (a.elements.some(e => "skip" === e.type) && (null === (n = a.button) || void 0 === n ? void 0 : n.type) === "next") return U({
                ...e,
                destination: ["", a.button.target]
            });
            if (M([...D, e]), null != a.key && (null == T || T(a.key)), g(void 0), v(void 0), t.name === l.ReportNames.MESSAGE || t.name === l.ReportNames.FIRST_DM) {
                let e = t.record.id;
                s.default.trackWithMetadata(_.AnalyticEvents.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: A[O].id,
                    next_node: a.id
                })
            }
            R(r)
        }, b = async e => {
            var i;
            let r = S ? await (0, u.submitReport)(n, t, [...D, e]) : await (0, u.submitUnauthenticatedReport)(n, t, [...D, e], f),
                a = null == r ? void 0 : null === (i = r.body) || void 0 === i ? void 0 : i.report_id;
            null != a && P(a), null == I || I(a)
        }, G = () => {
            var e, n;
            if (D.length < 1) return;
            let i = [...D],
                r = i.pop(),
                a = null !== (n = null == r ? void 0 : r.nodeRef) && void 0 !== n ? n : m;
            if (t.name === l.ReportNames.MESSAGE || t.name === l.ReportNames.FIRST_DM) {
                let e = t.record.id;
                s.default.trackWithMetadata(_.AnalyticEvents.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: A[a].report_type,
                    current_node: A[O].id,
                    next_node: A[a].id
                })
            }
            g(null == r ? void 0 : null === (e = r.multiSelect) || void 0 === e ? void 0 : e.state), v(null == r ? void 0 : r.textInput), R(a), M(i), null == T || T("..")
        }, w = [], B = [];
        for (let e in A) {
            var k, V;
            let t = A[e];
            if (t.id !== N && t.id !== p && t.id !== m) {
                if (t.key.endsWith("_SUBMIT")) {
                    B.push(t);
                    continue
                }
                if (w.push(t), (null === (k = t.button) || void 0 === k ? void 0 : k.type) === "next") {
                    let e = null === (V = t.button) || void 0 === V ? void 0 : V.target,
                        n = w.indexOf(A[e]); - 1 !== n && (w.splice(n, 1), w.push(A[e]))
                }
            }
        }
        let x = [A[m], ...w, ...B, A[N], A[p]];
        return (0, i.jsx)(a.ModalRoot, {
            transitionState: E.transitionState,
            "aria-labelledby": h,
            children: (0, i.jsx)(a.Slides, {
                width: 440,
                activeSlide: O,
                centered: !1,
                children: x.map(e => (0, i.jsx)(a.Slide, {
                    id: e.id,
                    children: (0, i.jsx)("div", {
                        className: c.slideContainer,
                        children: (0, i.jsx)(d.default, {
                            node: e,
                            reportType: t,
                            history: D,
                            onModalClose: E.onClose,
                            onSelectChild: U,
                            onNavigateBack: G,
                            multiSelect: C,
                            textInput: L,
                            successNodeId: N,
                            failNodeId: p,
                            onSubmit: b,
                            reportId: y
                        })
                    })
                }, e.id))
            })
        })
    }
}
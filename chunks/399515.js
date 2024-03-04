function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007"), n("424973");
    var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("716241"),
        i = n("476765"),
        d = n("143618"),
        u = n("965153"),
        o = n("463138"),
        c = n("49111"),
        m = n("37012"),
        f = e => {
            let {
                reportType: t,
                menu: n,
                modalProps: f,
                onSubmit: _,
                onNavigate: E,
                emailToken: h,
                isAuthenticated: v = !0
            } = e, R = (0, i.useUID)(), {
                nodes: x,
                root_node_id: p,
                success_node_id: N,
                fail_node_id: g
            } = n, [S, I] = l.useState(p), [T, M] = l.useState(void 0), [j, C] = l.useState(void 0), [b, y] = l.useState([]), [L, A] = l.useState(void 0), D = e => {
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
                        current_node: x[S].id,
                        next_node: r.id
                    })
                }
                I(l)
            }, O = async e => {
                var a;
                let l = v ? await (0, u.submitReport)(n, t, [...b, e]) : await (0, u.submitUnauthenticatedReport)(n, t, [...b, e], h),
                    r = null == l ? void 0 : null === (a = l.body) || void 0 === a ? void 0 : a.report_id;
                null != r && A(r), null == _ || _(r)
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
                        current_node: x[S].id,
                        next_node: x[r].id
                    })
                }
                M(null == l ? void 0 : null === (e = l.multiSelect) || void 0 === e ? void 0 : e.state), C(null == l ? void 0 : l.textInput), I(r), y(a), null == E || E("..")
            }, k = [], B = [];
            for (let e in x) {
                var G, P;
                let t = x[e];
                if (t.id !== N && t.id !== g && t.id !== p) {
                    if (t.key.endsWith("_SUBMIT")) {
                        B.push(t);
                        continue
                    }
                    if (k.push(t), (null === (G = t.button) || void 0 === G ? void 0 : G.type) === "next") {
                        let e = null === (P = t.button) || void 0 === P ? void 0 : P.target,
                            n = k.indexOf(x[e]); - 1 !== n && (k.splice(n, 1), k.push(x[e]))
                    }
                }
            }
            let w = [x[p], ...k, ...B, x[N], x[g]];
            return (0, a.jsx)(r.ModalRoot, {
                transitionState: f.transitionState,
                "aria-labelledby": R,
                children: (0, a.jsx)(r.Slides, {
                    width: 440,
                    activeSlide: S,
                    centered: !1,
                    children: w.map(e => (0, a.jsx)(r.Slide, {
                        id: e.id,
                        children: (0, a.jsx)("div", {
                            className: m.slideContainer,
                            children: (0, a.jsx)(o.default, {
                                node: e,
                                reportType: t,
                                history: b,
                                onModalClose: f.onClose,
                                onSelectChild: D,
                                onNavigateBack: U,
                                multiSelect: T,
                                textInput: j,
                                successNodeId: N,
                                failNodeId: g,
                                onSubmit: O,
                                reportId: L
                            })
                        })
                    }, e.id))
                })
            })
        }
}
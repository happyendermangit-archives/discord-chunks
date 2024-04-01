function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        CopiableField: function() {
            return S
        }
    }), n("47120");
    var s = n("735250"),
        a = n("470079"),
        o = n("803997"),
        l = n.n(o),
        u = n("846519"),
        d = n("481060"),
        _ = n("626135"),
        c = n("572004"),
        E = n("757206"),
        I = n("981631"),
        T = n("689938"),
        f = n("323607");

    function S(e) {
        var t;
        let {
            className: n,
            copyValue: o,
            copyMetaData: S,
            copyTooltip: A,
            children: h,
            disableCopy: m,
            showCopyIcon: N
        } = e, [O, p] = a.useState(0), [R, C] = a.useState(!1), [g, L] = a.useState(!1);
        if (a.useEffect(() => (i = new u.Timeout, r = new u.Timeout, function() {
                i.stop(), r.stop()
            }), []), !c.SUPPORTS_COPY || m) return (0, s.jsx)(s.Fragment, {
            children: h
        });
        let D = [T.default.Messages.COPY_SUCCESS_1, T.default.Messages.COPY_SUCCESS_2, T.default.Messages.COPY_SUCCESS_3, T.default.Messages.COPY_SUCCESS_4, T.default.Messages.COPY_SUCCESS_5, T.default.Messages.COPY_SUCCESS_6, T.default.Messages.COPY_SUCCESS_7, T.default.Messages.COPY_SUCCESS_8, T.default.Messages.COPY_SUCCESS_9, T.default.Messages.COPY_SUCCESS_10, T.default.Messages.COPY_SUCCESS_11],
            v = Math.min(Math.max(O - 1, 0), D.length - 1),
            M = null !== (t = D[v]) && void 0 !== t ? t : D[0],
            y = O >= D.length - 1,
            P = y ? d.TooltipColors.RED : d.TooltipColors.GREEN,
            U = R ? P : d.TooltipColors.PRIMARY,
            b = () => {
                i.stop(), L(!1)
            },
            G = e => {
                (0, c.copy)(o), _.default.track(I.AnalyticEvents.TEXT_COPIED, {
                    type: S
                }), "function" == typeof e && e(), !g && p(O + 1), L(!0), C(!0), i.start(1e3, () => L(!1)), r.start(2e3, () => p(0))
            };
        return (0, s.jsx)(d.Tooltip, {
            delay: 500,
            color: U,
            forceOpen: g,
            text: R ? (0, s.jsx)(d.Shaker, {
                isShaking: y,
                children: M
            }) : A,
            onAnimationRest: (e, t) => {
                !g && R && t.phase === I.SpringTransitionPhases.LEAVE && C(!1)
            },
            "aria-label": A,
            children: e => {
                let {
                    onClick: t,
                    onMouseEnter: i,
                    ...r
                } = e;
                return (0, s.jsx)(d.Clickable, {
                    ...r,
                    className: f.clickTarget,
                    onMouseEnter: () => {
                        R ? b() : "function" == typeof i && i()
                    },
                    onClick: () => {
                        G(t)
                    },
                    children: (0, s.jsxs)("div", {
                        className: l()(n, f.copiableWrapper),
                        children: [(0, s.jsx)("div", {
                            className: f.childWrapper,
                            children: h
                        }), N ? (0, s.jsx)("div", {
                            className: f.__invalid_copyIconWrapper,
                            children: (0, s.jsx)(E.default, {
                                width: 18,
                                height: 18,
                                className: f.copyIcon
                            })
                        }) : null]
                    })
                })
            }
        })
    }
}
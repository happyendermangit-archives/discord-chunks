function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        CopiableField: function() {
            return S
        }
    }), n("47120");
    var a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("846519"),
        d = n("481060"),
        _ = n("626135"),
        c = n("572004"),
        E = n("757206"),
        I = n("981631"),
        T = n("689938"),
        f = n("392131");

    function S(e) {
        var t;
        let {
            className: n,
            copyValue: o,
            copyMetaData: S,
            copyTooltip: h,
            children: A,
            disableCopy: m,
            showCopyIcon: N
        } = e, [p, O] = s.useState(0), [R, C] = s.useState(!1), [g, L] = s.useState(!1);
        if (s.useEffect(() => (i = new u.Timeout, r = new u.Timeout, function() {
                i.stop(), r.stop()
            }), []), !c.SUPPORTS_COPY || m) return (0, a.jsx)(a.Fragment, {
            children: A
        });
        let v = [T.default.Messages.COPY_SUCCESS_1, T.default.Messages.COPY_SUCCESS_2, T.default.Messages.COPY_SUCCESS_3, T.default.Messages.COPY_SUCCESS_4, T.default.Messages.COPY_SUCCESS_5, T.default.Messages.COPY_SUCCESS_6, T.default.Messages.COPY_SUCCESS_7, T.default.Messages.COPY_SUCCESS_8, T.default.Messages.COPY_SUCCESS_9, T.default.Messages.COPY_SUCCESS_10, T.default.Messages.COPY_SUCCESS_11],
            D = Math.min(Math.max(p - 1, 0), v.length - 1),
            M = null !== (t = v[D]) && void 0 !== t ? t : v[0],
            y = p >= v.length - 1,
            P = y ? d.TooltipColors.RED : d.TooltipColors.GREEN,
            U = R ? P : d.TooltipColors.PRIMARY,
            b = () => {
                i.stop(), L(!1)
            },
            G = e => {
                (0, c.copy)(o), _.default.track(I.AnalyticEvents.TEXT_COPIED, {
                    type: S
                }), "function" == typeof e && e(), !g && O(p + 1), L(!0), C(!0), i.start(1e3, () => L(!1)), r.start(2e3, () => O(0))
            };
        return (0, a.jsx)(d.Tooltip, {
            delay: 500,
            color: U,
            forceOpen: g,
            text: R ? (0, a.jsx)(d.Shaker, {
                isShaking: y,
                children: M
            }) : h,
            onAnimationRest: (e, t) => {
                !g && R && t.phase === I.SpringTransitionPhases.LEAVE && C(!1)
            },
            "aria-label": h,
            children: e => {
                let {
                    onClick: t,
                    onMouseEnter: i,
                    ...r
                } = e;
                return (0, a.jsx)(d.Clickable, {
                    ...r,
                    className: f.clickTarget,
                    onMouseEnter: () => {
                        R ? b() : "function" == typeof i && i()
                    },
                    onClick: () => {
                        G(t)
                    },
                    children: (0, a.jsxs)("div", {
                        className: l()(n, f.copiableWrapper),
                        children: [(0, a.jsx)("div", {
                            className: f.childWrapper,
                            children: A
                        }), N ? (0, a.jsx)("div", {
                            className: f.__invalid_copyIconWrapper,
                            children: (0, a.jsx)(E.default, {
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
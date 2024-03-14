function(e, t, n) {
    "use strict";
    let i, l;
    n.r(t), n.d(t, {
        CopiableField: function() {
            return E
        }
    }), n("222007");
    var a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("862337"),
        d = n("77078"),
        c = n("599110"),
        f = n("306160"),
        p = n("413709"),
        m = n("49111"),
        h = n("782340"),
        x = n("966133");

    function E(e) {
        var t;
        let {
            className: n,
            copyValue: r,
            copyMetaData: E,
            copyTooltip: y,
            children: g,
            disableCopy: S,
            showCopyIcon: C
        } = e, [I, T] = s.useState(0), [_, v] = s.useState(!1), [N, A] = s.useState(!1);
        if (s.useEffect(() => (i = new u.Timeout, l = new u.Timeout, function() {
                i.stop(), l.stop()
            }), []), !f.SUPPORTS_COPY || S) return (0, a.jsx)(a.Fragment, {
            children: g
        });
        let O = [h.default.Messages.COPY_SUCCESS_1, h.default.Messages.COPY_SUCCESS_2, h.default.Messages.COPY_SUCCESS_3, h.default.Messages.COPY_SUCCESS_4, h.default.Messages.COPY_SUCCESS_5, h.default.Messages.COPY_SUCCESS_6, h.default.Messages.COPY_SUCCESS_7, h.default.Messages.COPY_SUCCESS_8, h.default.Messages.COPY_SUCCESS_9, h.default.Messages.COPY_SUCCESS_10, h.default.Messages.COPY_SUCCESS_11],
            M = Math.min(Math.max(I - 1, 0), O.length - 1),
            R = null !== (t = O[M]) && void 0 !== t ? t : O[0],
            k = I >= O.length - 1,
            L = k ? d.TooltipColors.RED : d.TooltipColors.GREEN,
            P = _ ? L : d.TooltipColors.PRIMARY,
            b = () => {
                i.stop(), A(!1)
            },
            j = e => {
                (0, f.copy)(r), c.default.track(m.AnalyticEvents.TEXT_COPIED, {
                    type: E
                }), "function" == typeof e && e(), !N && T(I + 1), A(!0), v(!0), i.start(1e3, () => A(!1)), l.start(2e3, () => T(0))
            };
        return (0, a.jsx)(d.Tooltip, {
            delay: 500,
            color: P,
            forceOpen: N,
            text: _ ? (0, a.jsx)(d.Shaker, {
                isShaking: k,
                children: R
            }) : y,
            onAnimationRest: (e, t) => {
                !N && _ && t.phase === m.SpringTransitionPhases.LEAVE && v(!1)
            },
            "aria-label": y,
            children: e => {
                let {
                    onClick: t,
                    onMouseEnter: i,
                    ...l
                } = e;
                return (0, a.jsx)(d.Clickable, {
                    ...l,
                    className: x.clickTarget,
                    onMouseEnter: () => {
                        _ ? b() : "function" == typeof i && i()
                    },
                    onClick: () => {
                        j(t)
                    },
                    children: (0, a.jsxs)("div", {
                        className: o(n, x.copiableWrapper),
                        children: [(0, a.jsx)("div", {
                            className: x.childWrapper,
                            children: g
                        }), C ? (0, a.jsx)("div", {
                            className: x.copyIconWrapper,
                            children: (0, a.jsx)(p.default, {
                                width: 18,
                                height: 18,
                                className: x.copyIcon
                            })
                        }) : null]
                    })
                })
            }
        })
    }
}
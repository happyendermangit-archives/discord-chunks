function(e, t, n) {
    "use strict";
    let l, i;
    n.r(t), n.d(t, {
        CopiableField: function() {
            return g
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
        m = n("413709"),
        p = n("49111"),
        h = n("782340"),
        E = n("966133");

    function g(e) {
        var t;
        let {
            className: n,
            copyValue: r,
            copyMetaData: g,
            copyTooltip: C,
            children: S,
            disableCopy: T,
            showCopyIcon: v
        } = e, [I, _] = s.useState(0), [N, A] = s.useState(!1), [x, y] = s.useState(!1);
        if (s.useEffect(() => (l = new u.Timeout, i = new u.Timeout, function() {
                l.stop(), i.stop()
            }), []), !f.SUPPORTS_COPY || T) return (0, a.jsx)(a.Fragment, {
            children: S
        });
        let O = [h.default.Messages.COPY_SUCCESS_1, h.default.Messages.COPY_SUCCESS_2, h.default.Messages.COPY_SUCCESS_3, h.default.Messages.COPY_SUCCESS_4, h.default.Messages.COPY_SUCCESS_5, h.default.Messages.COPY_SUCCESS_6, h.default.Messages.COPY_SUCCESS_7, h.default.Messages.COPY_SUCCESS_8, h.default.Messages.COPY_SUCCESS_9, h.default.Messages.COPY_SUCCESS_10, h.default.Messages.COPY_SUCCESS_11],
            R = Math.min(Math.max(I - 1, 0), O.length - 1),
            M = null !== (t = O[R]) && void 0 !== t ? t : O[0],
            L = I >= O.length - 1,
            P = L ? d.TooltipColors.RED : d.TooltipColors.GREEN,
            b = N ? P : d.TooltipColors.PRIMARY,
            j = () => {
                l.stop(), y(!1)
            },
            U = e => {
                (0, f.copy)(r), c.default.track(p.AnalyticEvents.TEXT_COPIED, {
                    type: g
                }), "function" == typeof e && e(), !x && _(I + 1), y(!0), A(!0), l.start(1e3, () => y(!1)), i.start(2e3, () => _(0))
            };
        return (0, a.jsx)(d.Tooltip, {
            delay: 500,
            color: b,
            forceOpen: x,
            text: N ? (0, a.jsx)(d.Shaker, {
                isShaking: L,
                children: M
            }) : C,
            onAnimationRest: (e, t) => {
                !x && N && t.phase === p.SpringTransitionPhases.LEAVE && A(!1)
            },
            "aria-label": C,
            children: e => {
                let {
                    onClick: t,
                    onMouseEnter: l,
                    ...i
                } = e;
                return (0, a.jsx)(d.Clickable, {
                    ...i,
                    className: E.clickTarget,
                    onMouseEnter: () => {
                        N ? j() : "function" == typeof l && l()
                    },
                    onClick: () => {
                        U(t)
                    },
                    children: (0, a.jsxs)("div", {
                        className: o(n, E.copiableWrapper),
                        children: [(0, a.jsx)("div", {
                            className: E.childWrapper,
                            children: S
                        }), v ? (0, a.jsx)("div", {
                            className: E.copyIconWrapper,
                            children: (0, a.jsx)(m.default, {
                                width: 18,
                                height: 18,
                                className: E.copyIcon
                            })
                        }) : null]
                    })
                })
            }
        })
    }
}
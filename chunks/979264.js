function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return h
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("348327"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("110924"),
        c = n("594174"),
        E = n("963202"),
        I = n("353093"),
        T = n("460578"),
        f = n("277602"),
        S = n("738103"),
        A = n("319695");
    let h = r.memo(function(e) {
        let {
            clanTag: t,
            className: n,
            onClick: r,
            onMouseEnter: s,
            disableTooltip: o = !0
        } = e;
        return (0, E.useIsInUserClanExperiment)() ? (0, i.jsx)(d.Clickable, {
            tag: "span",
            onClick: r,
            onMouseEnter: s,
            className: a()(A.chipletContainerInner, o && A.noTooltip, n),
            children: (0, i.jsxs)(d.Text, {
                variant: "text-xs/medium",
                color: "text-normal",
                tag: "span",
                className: A.text,
                children: [(0, i.jsx)(S.TempBadgeIcon, {
                    className: A.badge,
                    width: 12,
                    height: 12
                }), t]
            })
        }) : null
    });
    t.default = r.memo(function(e) {
        var t, n;
        let {
            clan: s,
            userId: a,
            className: o,
            disableTooltip: S = !1
        } = e, m = (0, u.useStateFromStores)([c.default], () => c.default.getUser(a), [a]), N = null !== (t = null == m ? void 0 : m.clan) && void 0 !== t ? t : s, O = (0, I.getTagFromClan)(N), p = (0, _.default)(N), [R, C] = (0, T.useFetchClanInfo)(null !== (n = null == N ? void 0 : N.identityGuildId) && void 0 !== n ? n : null), [g, L] = r.useState(!1), [D, v] = r.useState(!1), [M, y] = r.useState(!1), P = r.useRef(null), U = r.useCallback(e => {
            !S && (e.stopPropagation(), e.preventDefault(), L(e => !e))
        }, [S]), b = r.useCallback(() => {
            !S && C()
        }, [C, S]);
        return (r.useEffect(() => {
            !l()(p, N) && L(!1)
        }, [p, N]), r.useEffect(() => (!D && !M && (P.current = setTimeout(() => {
            L(!1)
        }, 500)), () => {
            null != P.current && clearTimeout(P.current)
        }), [D, M]), (0, E.useIsInUserClanExperiment)() && null != O) ? S ? (0, i.jsx)(h, {
            clanTag: O,
            className: o,
            onClick: U,
            onMouseEnter: b,
            disableTooltip: S
        }) : (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(f.default, {
                isLoading: R,
                clan: N,
                onAdoptTag: () => L(!1),
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1)
            }),
            onTooltipShow: () => C(),
            hideOnClick: !0,
            disableTooltipPointerEvents: !1,
            tooltipClassName: A.tooltip,
            tooltipContentClassName: A.tooltipContainer,
            "aria-label": "Guild Profile",
            shouldShow: g,
            forceOpen: g,
            children: e => (0, i.jsx)("span", {
                ...e,
                onMouseEnter: () => {
                    var t;
                    y(!0), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                onMouseLeave: () => {
                    var t;
                    y(!1), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
                },
                children: (0, i.jsx)(h, {
                    clanTag: O,
                    className: o,
                    onClick: U,
                    onMouseEnter: b,
                    disableTooltip: S
                })
            })
        }) : null
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return N
        },
        ClanTagBadgeSize: function() {
            return i
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("348327"),
        d = n.n(u),
        _ = n("442837"),
        c = n("481060"),
        E = n("110924"),
        I = n("594174"),
        T = n("963202"),
        f = n("645896"),
        S = n("353093"),
        h = n("277602"),
        A = n("738103"),
        m = n("319695");
    (r = i || (i = {}))[r.X_SMALL = 12] = "X_SMALL", r[r.SMALL = 16] = "SMALL";
    let N = a.memo(function(e) {
        let {
            clanTag: t,
            className: n,
            onClick: i,
            onMouseEnter: r,
            textVariant: a = "text-xs/medium",
            textColor: o = "text-normal",
            badgeSize: u = 12
        } = e;
        return (0, T.useIsInUserClanExperiment)() ? (0, s.jsx)(c.Clickable, {
            tag: "span",
            onClick: i,
            onMouseEnter: r,
            className: l()(m.chipletContainerInner, null != i && m.clickable, n),
            children: (0, s.jsxs)(c.Text, {
                variant: a,
                color: o,
                tag: "span",
                className: m.text,
                children: [(0, s.jsx)(A.TempBadgeIcon, {
                    className: m.badge,
                    width: u,
                    height: u
                }), t]
            })
        }) : null
    });
    t.default = a.memo(function(e) {
        var t, n;
        let {
            clan: i,
            userId: r,
            className: o,
            textVariant: u,
            textColor: A,
            badgeSize: p,
            disableTooltip: O = !1
        } = e, R = (0, _.useStateFromStores)([I.default], () => I.default.getUser(r), [r]), C = null !== (t = null == R ? void 0 : R.clan) && void 0 !== t ? t : i, g = (0, S.getTagFromUserClan)(C), L = (0, E.default)(C), [D, v] = (0, f.useFetchClanInfo)(null !== (n = null == C ? void 0 : C.identityGuildId) && void 0 !== n ? n : null), [M, y] = a.useState(!1), [P, U] = a.useState(!1), [b, G] = a.useState(!1), w = a.useRef(null), B = a.useCallback(e => {
            !O && (e.stopPropagation(), e.preventDefault(), y(e => !e))
        }, [O]), k = a.useCallback(() => {
            !O && v()
        }, [v, O]);
        return (a.useEffect(() => {
            !d()(L, C) && y(!1)
        }, [L, C]), a.useEffect(() => (!P && !b && (w.current = setTimeout(() => {
            y(!1)
        }, 500)), () => {
            null != w.current && clearTimeout(w.current)
        }), [P, b]), (0, T.useIsInUserClanExperiment)() && null != g) ? O ? (0, s.jsx)(N, {
            clanTag: g,
            className: l()(m.noTooltip, o),
            onClick: B,
            onMouseEnter: k,
            textVariant: u,
            textColor: A,
            badgeSize: p
        }) : (0, s.jsx)(c.Tooltip, {
            text: (0, s.jsx)(h.default, {
                isLoading: D,
                clan: C,
                onClose: () => y(!1),
                onMouseEnter: () => U(!0),
                onMouseLeave: () => U(!1)
            }),
            onTooltipShow: () => v(),
            hideOnClick: !0,
            disableTooltipPointerEvents: !1,
            tooltipClassName: m.tooltip,
            tooltipContentClassName: m.tooltipContainer,
            "aria-label": "Guild Profile",
            shouldShow: M,
            forceOpen: M,
            children: e => (0, s.jsx)("span", {
                ...e,
                onMouseEnter: () => {
                    var t;
                    G(!0), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                onMouseLeave: () => {
                    var t;
                    G(!1), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
                },
                children: (0, s.jsx)(N, {
                    clanTag: g,
                    className: o,
                    onClick: B,
                    onMouseEnter: k,
                    textVariant: u,
                    textColor: A,
                    badgeSize: p
                })
            })
        }) : null
    })
}
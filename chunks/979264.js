function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return p
        },
        ClanBadgeWithTooltip: function() {
            return O
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
    (r = i || (i = {}))[r.SIZE_12 = 12] = "SIZE_12", r[r.SIZE_16 = 16] = "SIZE_16", r[r.SIZE_24 = 24] = "SIZE_24";
    let N = a.memo(function(e) {
            let {
                className: t,
                size: n = 16
            } = e;
            return (0, s.jsx)(A.TempBadgeIcon, {
                className: l()(m.badge, t),
                width: n,
                height: n
            })
        }),
        p = a.memo(function(e) {
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
                    children: [(0, s.jsx)(N, {
                        size: u
                    }), t]
                })
            }) : null
        });

    function O(e) {
        var t, n, i;
        let {
            clan: r,
            size: o = 16,
            userId: l,
            className: u
        } = e, d = (0, _.useStateFromStores)([I.default], () => I.default.getUser(l), [l]), E = null !== (t = null == d ? void 0 : d.clan) && void 0 !== t ? t : r, T = (0, S.getTagFromUserClan)(E), [h, A] = (0, f.useFetchClanInfo)(null !== (n = null == E ? void 0 : E.identityGuildId) && void 0 !== n ? n : null), m = (0, f.useClanInfo)(null !== (i = null == E ? void 0 : E.identityGuildId) && void 0 !== i ? i : null), [p, O] = a.useState(!1);
        return null == T ? null : (0, s.jsx)(c.Tooltip, {
            text: h ? (0, s.jsx)(c.Spinner, {}) : null == m ? void 0 : m.name,
            onTooltipShow: () => A(),
            hideOnClick: !0,
            shouldShow: p,
            forceOpen: p,
            children: e => (0, s.jsx)(c.Clickable, {
                tag: "span",
                className: u,
                ...e,
                onMouseEnter: () => {
                    var t;
                    O(!0), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                onMouseLeave: () => {
                    var t;
                    O(!1), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
                },
                children: (0, s.jsx)(N, {
                    size: o
                })
            })
        })
    }

    function R(e) {
        var t, n;
        let {
            clan: i,
            userId: r,
            children: o
        } = e, l = (0, _.useStateFromStores)([I.default], () => I.default.getUser(r), [r]), u = null !== (t = null == l ? void 0 : l.clan) && void 0 !== t ? t : i, T = (0, E.default)(u), [S, A] = (0, f.useFetchClanInfo)(null !== (n = null == u ? void 0 : u.identityGuildId) && void 0 !== n ? n : null), [N, p] = a.useState(!1), [O, R] = a.useState(!1), [C, g] = a.useState(!1), L = a.useRef(null), D = a.useCallback(() => {
            A()
        }, [A]);
        return a.useEffect(() => {
            !d()(T, u) && p(!1)
        }, [T, u]), a.useEffect(() => (!O && !C && (L.current = setTimeout(() => {
            p(!1)
        }, 500)), () => {
            null != L.current && clearTimeout(L.current)
        }), [O, C]), (0, s.jsx)(c.Tooltip, {
            text: (0, s.jsx)(h.default, {
                isLoading: S,
                clan: u,
                onClose: () => p(!1),
                onMouseEnter: () => R(!0),
                onMouseLeave: () => R(!1)
            }),
            onTooltipShow: () => A(),
            hideOnClick: !0,
            disableTooltipPointerEvents: !1,
            tooltipClassName: m.tooltip,
            tooltipContentClassName: m.tooltipContainer,
            "aria-label": "Guild Profile",
            shouldShow: N,
            forceOpen: N,
            children: e => (0, s.jsx)(c.Clickable, {
                tag: "span",
                ...e,
                onClick: t => {
                    var n;
                    p(e => !e), null === (n = e.onClick) || void 0 === n || n.call(e), t.preventDefault(), t.stopPropagation()
                },
                onMouseEnter: () => {
                    var t;
                    g(!0), D(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                onMouseLeave: () => {
                    var t;
                    g(!1), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
                },
                children: o
            })
        })
    }
    t.default = a.memo(function(e) {
        var t;
        let {
            clan: n,
            userId: i,
            className: r,
            textVariant: a,
            textColor: o,
            badgeSize: u,
            disableTooltip: d = !1
        } = e, c = (0, _.useStateFromStores)([I.default], () => I.default.getUser(i), [i]), E = null !== (t = null == c ? void 0 : c.clan) && void 0 !== t ? t : n, f = (0, S.getTagFromUserClan)(E);
        return (0, T.useIsInUserClanExperiment)() && null != f ? d ? (0, s.jsx)(p, {
            clanTag: f,
            className: l()(m.noTooltip, r),
            textVariant: a,
            textColor: o,
            badgeSize: u
        }) : (0, s.jsx)(R, {
            clan: E,
            userId: i,
            children: (0, s.jsx)(p, {
                clanTag: f,
                className: r,
                textVariant: a,
                textColor: o,
                badgeSize: u
            })
        }) : null
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return N
        },
        ClanBadgeWithTooltip: function() {
            return p
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
        I = n("645896"),
        T = n("353093"),
        f = n("277602"),
        S = n("308083"),
        h = n("689938"),
        A = n("319695");
    let m = r.memo(function(e) {
            let {
                src: t,
                className: n,
                size: r = S.ClanTagBadgeSize.SIZE_16
            } = e;
            return null == t ? null : (0, i.jsx)("img", {
                src: t,
                alt: h.default.Messages.CLAN_BADGE,
                className: a()(A.badge, n),
                width: r,
                height: r
            })
        }),
        N = r.memo(function(e) {
            let {
                clanTag: t,
                clanBadge: n,
                className: r,
                textClassName: s,
                onClick: o,
                onMouseEnter: l,
                textVariant: u = "text-xs/medium",
                textColor: _ = "text-normal",
                badgeSize: c = S.ClanTagBadgeSize.SIZE_12
            } = e;
            return (0, E.useIsInUserClanExperiment)() ? (0, i.jsx)(d.Clickable, {
                tag: "span",
                onClick: o,
                onMouseEnter: l,
                className: a()(A.chipletContainerInner, null != o && A.clickable, r),
                children: (0, i.jsxs)(d.Text, {
                    variant: u,
                    color: _,
                    tag: "span",
                    className: a()(A.text, s),
                    children: [null != n && "string" == typeof n ? (0, i.jsx)(m, {
                        src: n,
                        size: c
                    }) : n, t]
                })
            }) : null
        });

    function p(e) {
        var t, n, s;
        let {
            clan: a,
            size: o = S.ClanTagBadgeSize.SIZE_16,
            userId: l,
            className: _
        } = e, E = (0, u.useStateFromStores)([c.default], () => c.default.getUser(l), [l]), f = null !== (t = null == E ? void 0 : E.clan) && void 0 !== t ? t : a, {
            tag: h,
            badge: A,
            guildId: N
        } = (0, T.getUserClanData)(f), [p, O] = (0, I.useFetchClanInfo)(null !== (n = null == f ? void 0 : f.identityGuildId) && void 0 !== n ? n : null), R = (0, I.useClanInfo)(null !== (s = null == f ? void 0 : f.identityGuildId) && void 0 !== s ? s : null), [C, g] = r.useState(!1);
        if (null == N || null == h || null == A) return null;
        let L = (0, T.getClanBadgeUrl)(N, A, o);
        return (0, i.jsx)(d.Tooltip, {
            text: p ? (0, i.jsx)(d.Spinner, {}) : null == R ? void 0 : R.name,
            onTooltipShow: () => O(),
            hideOnClick: !0,
            shouldShow: C,
            forceOpen: C,
            children: e => (0, i.jsx)(d.Clickable, {
                tag: "span",
                className: _,
                ...e,
                onMouseEnter: () => {
                    var t;
                    g(!0), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                onMouseLeave: () => {
                    var t;
                    g(!1), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
                },
                children: (0, i.jsx)(m, {
                    src: L,
                    size: o
                })
            })
        })
    }

    function O(e) {
        var t, n;
        let {
            clan: s,
            userId: a,
            children: o
        } = e, E = (0, u.useStateFromStores)([c.default], () => c.default.getUser(a), [a]), T = null !== (t = null == E ? void 0 : E.clan) && void 0 !== t ? t : s, S = (0, _.default)(T), [h, m] = (0, I.useFetchClanInfo)(null !== (n = null == T ? void 0 : T.identityGuildId) && void 0 !== n ? n : null), [N, p] = r.useState(!1), [O, R] = r.useState(!1), [C, g] = r.useState(!1), L = r.useRef(null), D = r.useCallback(() => {
            m()
        }, [m]);
        return r.useEffect(() => {
            !l()(S, T) && p(!1)
        }, [S, T]), r.useEffect(() => (!O && !C && (L.current = setTimeout(() => {
            p(!1)
        }, 500)), () => {
            null != L.current && clearTimeout(L.current)
        }), [O, C]), (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(f.default, {
                isLoading: h,
                clan: T,
                onClose: () => p(!1),
                onMouseEnter: () => R(!0),
                onMouseLeave: () => R(!1)
            }),
            onTooltipShow: () => m(),
            hideOnClick: !0,
            disableTooltipPointerEvents: !1,
            tooltipClassName: A.tooltip,
            tooltipContentClassName: A.tooltipContainer,
            "aria-label": "Guild Profile",
            shouldShow: N,
            forceOpen: N,
            children: e => (0, i.jsx)(d.Clickable, {
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
    t.default = r.memo(function(e) {
        var t;
        let {
            clan: n,
            userId: r,
            className: s,
            textVariant: o,
            textColor: l,
            badgeSize: d,
            disableTooltip: _ = !1
        } = e, I = (0, u.useStateFromStores)([c.default], () => c.default.getUser(r), [r]), f = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : n, {
            tag: S,
            badge: h,
            guildId: m
        } = (0, T.getUserClanData)(f);
        if (!(0, E.useIsInUserClanExperiment)() || null == m || null == S) return null;
        let p = (0, T.getClanBadgeUrl)(m, h, d);
        return _ ? (0, i.jsx)(N, {
            clanTag: S,
            clanBadge: p,
            className: a()(A.noTooltip, s),
            textVariant: o,
            textColor: l,
            badgeSize: d
        }) : (0, i.jsx)(O, {
            clan: f,
            userId: r,
            children: (0, i.jsx)(N, {
                clanTag: S,
                clanBadge: p,
                className: s,
                textVariant: o,
                textColor: l,
                badgeSize: d
            })
        })
    })
}
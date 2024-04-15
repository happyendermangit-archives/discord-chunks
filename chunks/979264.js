function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return A
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
        E = n("353093"),
        I = n("460578"),
        T = n("277602"),
        f = n("738103"),
        S = n("319695");
    let A = r.memo(function(e) {
        let {
            clanTag: t,
            className: n,
            onClick: r,
            onMouseEnter: s,
            disableTooltip: o = !0
        } = e;
        return (0, i.jsx)(d.Clickable, {
            tag: "span",
            onClick: r,
            onMouseEnter: s,
            className: a()(S.chipletContainerInner, o && S.noTooltip, n),
            children: (0, i.jsxs)(d.Text, {
                variant: "text-xs/medium",
                color: "text-normal",
                tag: "span",
                className: S.text,
                children: [(0, i.jsx)(f.TempBadgeIcon, {
                    className: S.badge,
                    width: 12,
                    height: 12
                }), t]
            })
        })
    });
    t.default = r.memo(function(e) {
        var t, n;
        let {
            clan: s,
            userId: a,
            className: o,
            disableTooltip: f = !1
        } = e, h = (0, u.useStateFromStores)([c.default], () => c.default.getUser(a), [a]), m = null !== (t = null == h ? void 0 : h.clan) && void 0 !== t ? t : s, N = (0, E.getTagFromClan)(m), O = (0, _.default)(m), [p, R] = (0, I.useFetchClanInfo)(null !== (n = null == m ? void 0 : m.identityGuildId) && void 0 !== n ? n : null), [C, g] = r.useState(!1), [L, D] = r.useState(!1), [v, M] = r.useState(!1), y = r.useRef(null), P = r.useCallback(e => {
            !f && (e.stopPropagation(), e.preventDefault(), g(e => !e))
        }, [f]), U = r.useCallback(() => {
            !f && R()
        }, [R, f]);
        return (r.useEffect(() => {
            !l()(O, m) && g(!1)
        }, [O, m]), r.useEffect(() => (!L && !v && (y.current = setTimeout(() => {
            g(!1)
        }, 500)), () => {
            null != y.current && clearTimeout(y.current)
        }), [L, v]), null == N) ? null : f ? (0, i.jsx)(A, {
            clanTag: N,
            className: o,
            onClick: P,
            onMouseEnter: U,
            disableTooltip: f
        }) : (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(T.default, {
                isLoading: p,
                clan: m,
                onAdoptTag: () => g(!1),
                onMouseEnter: () => D(!0),
                onMouseLeave: () => D(!1)
            }),
            onTooltipShow: () => R(),
            hideOnClick: !0,
            disableTooltipPointerEvents: !1,
            color: d.Tooltip.Colors.CUSTOM,
            tooltipClassName: S.tooltip,
            "aria-label": "Guild Profile",
            shouldShow: C,
            forceOpen: C,
            children: e => (0, i.jsx)("span", {
                ...e,
                onMouseEnter: () => {
                    var t;
                    M(!0), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                onMouseLeave: () => {
                    var t;
                    M(!1), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
                },
                children: (0, i.jsx)(A, {
                    clanTag: N,
                    className: o,
                    onClick: P,
                    onMouseEnter: U,
                    disableTooltip: f
                })
            })
        })
    })
}
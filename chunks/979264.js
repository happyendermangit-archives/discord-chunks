function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return A
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
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
            onMouseEnter: s
        } = e;
        return (0, i.jsx)(d.Clickable, {
            tag: "span",
            onClick: r,
            onMouseEnter: s,
            className: a()(S.chipletContainerInner, n),
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
            disableTooltip: f
        } = e, S = (0, u.useStateFromStores)([c.default], () => c.default.getUser(a), [a]), h = null !== (t = null == S ? void 0 : S.clan) && void 0 !== t ? t : s, m = (0, E.getTagFromClan)(h), N = (0, _.default)(h), [O, p] = (0, I.useFetchClanInfo)(null !== (n = null == h ? void 0 : h.identityGuildId) && void 0 !== n ? n : null), [R, C] = r.useState(!1), g = r.useCallback(e => {
            !f && (e.stopPropagation(), e.preventDefault(), C(e => !e))
        }, [f]), L = r.useCallback(() => {
            !f && p()
        }, [p, f]);
        return (r.useEffect(() => {
            !l()(N, h) && C(!1)
        }, [N, h]), null == m) ? null : (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(T.default, {
                isLoading: O,
                clan: h,
                onAdoptTag: () => C(!1),
                onMouseLeave: () => C(!1)
            }),
            onTooltipShow: () => p(),
            hideOnClick: !0,
            disableTooltipPointerEvents: !1,
            color: d.Tooltip.Colors.GREY,
            "aria-label": "Guild Profile",
            shouldShow: R,
            forceOpen: R,
            children: e => (0, i.jsx)("span", {
                ...e,
                children: (0, i.jsx)(A, {
                    clanTag: m,
                    className: o,
                    onClick: g,
                    onMouseEnter: L
                })
            })
        })
    })
}
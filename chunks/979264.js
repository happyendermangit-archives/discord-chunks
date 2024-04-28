function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return h
        },
        useShouldDisplayClanTag: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("594174"),
        d = n("963202"),
        _ = n("645896"),
        c = n("353093"),
        E = n("426964"),
        I = n("308083"),
        T = n("689938"),
        f = n("53408");
    let S = r.memo(function(e) {
            let {
                src: t,
                className: n,
                size: r = I.ClanTagBadgeSize.SIZE_16
            } = e;
            return null == t ? null : (0, i.jsx)("img", {
                src: t,
                alt: T.default.Messages.CLAN_BADGE,
                className: a()(f.badge, n),
                width: r,
                height: r
            })
        }),
        h = r.memo(function(e) {
            let {
                clanTag: t,
                clanBadge: n,
                className: r,
                textClassName: s,
                onClick: o,
                onMouseEnter: u,
                textVariant: _ = "text-xs/medium",
                textColor: c = "text-normal",
                badgeSize: E = I.ClanTagBadgeSize.SIZE_12,
                inline: T = !0
            } = e;
            return (0, d.useIsInUserClanExperiment)() ? (0, i.jsx)(l.Clickable, {
                tag: "span",
                onClick: o,
                onMouseEnter: u,
                className: a()(f.chipletContainerInner, T && f.chipletContainerInline, null != o && f.clickable, r),
                children: (0, i.jsxs)(l.Text, {
                    variant: _,
                    color: c,
                    tag: "span",
                    className: a()(f.text, s),
                    children: [null != n && "string" == typeof n ? (0, i.jsx)(S, {
                        src: n,
                        size: E
                    }) : n, t]
                })
            }) : null
        });

    function A(e) {
        var t, n;
        let {
            clan: s,
            userId: a,
            children: d
        } = e, c = (0, o.useStateFromStores)([u.default], () => u.default.getUser(a), [a]), I = null !== (t = null == c ? void 0 : c.clan) && void 0 !== t ? t : s, [T, S] = (0, _.useFetchClanInfo)(null !== (n = null == I ? void 0 : I.identityGuildId) && void 0 !== n ? n : null), h = r.useCallback(() => {
            S()
        }, [S]);
        return (0, i.jsx)(l.Popout, {
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(E.default, {
                    isLoading: T,
                    clan: I,
                    onClose: t
                })
            },
            position: "top",
            animationPosition: "top",
            spacing: 16,
            children: e => (0, i.jsx)(l.Clickable, {
                className: f.clickable,
                tag: "span",
                ...e,
                onClick: t => {
                    var n;
                    null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation()
                },
                onMouseEnter: () => {
                    var t;
                    h(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                },
                children: d
            })
        })
    }

    function m(e) {
        let t = (0, o.useStateFromStores)([u.default], () => u.default.getUser(e), [e]),
            {
                tag: n,
                guildId: i
            } = (0, c.getUserClanData)(null == t ? void 0 : t.clan);
        return !!(0, d.useIsInUserClanExperiment)() && null != i && null != n || !1
    }
    t.default = r.memo(function(e) {
        var t;
        let {
            clan: n,
            userId: r,
            className: s,
            textVariant: l,
            textColor: d,
            badgeSize: _,
            disableTooltip: E = !1,
            inline: I = !0
        } = e, T = (0, o.useStateFromStores)([u.default], () => u.default.getUser(r), [r]), S = null !== (t = null == T ? void 0 : T.clan) && void 0 !== t ? t : n, {
            tag: N,
            badge: p,
            guildId: O
        } = (0, c.getUserClanData)(S);
        if (!m(r) || null == O) return null;
        let R = (0, c.getClanBadgeUrl)(O, p, _);
        return E ? (0, i.jsx)(h, {
            clanTag: N,
            clanBadge: R,
            className: a()(f.noTooltip, s),
            textVariant: l,
            textColor: d,
            badgeSize: _,
            inline: I
        }) : (0, i.jsx)(A, {
            clan: S,
            userId: r,
            children: (0, i.jsx)(h, {
                clanTag: N,
                clanBadge: R,
                className: s,
                textVariant: l,
                textColor: d,
                badgeSize: _,
                inline: I
            })
        })
    })
}
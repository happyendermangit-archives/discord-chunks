function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseClanTagChiplet: function() {
            return h
        },
        ClanTagBadge: function() {
            return S
        },
        useShouldDisplayClanTag: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("481060"),
        u = n("594174"),
        d = n("963202"),
        _ = n("645896"),
        c = n("353093"),
        E = n("426964"),
        I = n("308083"),
        T = n("689938"),
        f = n("40700");
    let S = r.memo(function(e) {
            let {
                src: t,
                className: n,
                size: r = I.ClanTagBadgeSize.SIZE_16
            } = e;
            return null == t ? null : (0, i.jsx)("img", {
                src: t,
                alt: T.default.Messages.CLAN_BADGE,
                className: s()(f.badge, n),
                width: r,
                height: r
            })
        }),
        h = r.memo(function(e) {
            let {
                clanTag: t,
                clanBadge: n,
                className: r,
                textClassName: a,
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
                className: s()(f.chipletContainerInner, T && f.chipletContainerInline, null != o && f.clickable, r),
                children: (0, i.jsxs)(l.Text, {
                    variant: _,
                    color: c,
                    tag: "span",
                    className: s()(f.text, a),
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
            clan: a,
            userId: s,
            children: d,
            source: c
        } = e, I = (0, o.useStateFromStores)([u.default], () => u.default.getUser(s), [s]), T = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : a, [S, h] = (0, _.useFetchClanInfo)(null !== (n = null == T ? void 0 : T.identityGuildId) && void 0 !== n ? n : null), A = r.useCallback(() => {
            h()
        }, [h]);
        return (0, i.jsx)(l.Popout, {
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(E.default, {
                    isLoading: S,
                    clan: T,
                    onClose: t,
                    source: c
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
                    A(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
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
            className: a,
            textVariant: l,
            textColor: d,
            badgeSize: _,
            disableTooltip: E = !1,
            inline: I = !0,
            source: T
        } = e, S = (0, o.useStateFromStores)([u.default], () => u.default.getUser(r), [r]), N = null !== (t = null == S ? void 0 : S.clan) && void 0 !== t ? t : n, {
            tag: p,
            badge: O,
            guildId: R
        } = (0, c.getUserClanData)(N);
        if (!m(r) || null == R) return null;
        let C = (0, c.getClanBadgeUrl)(R, O, _);
        return E ? (0, i.jsx)(h, {
            clanTag: p,
            clanBadge: C,
            className: s()(f.noTooltip, a),
            textVariant: l,
            textColor: d,
            badgeSize: _,
            inline: I
        }) : (0, i.jsx)(A, {
            clan: N,
            userId: r,
            source: T,
            children: (0, i.jsx)(h, {
                clanTag: p,
                clanBadge: C,
                className: a,
                textVariant: l,
                textColor: d,
                badgeSize: _,
                inline: I
            })
        })
    })
}
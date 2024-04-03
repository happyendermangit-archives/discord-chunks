function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return g
        }
    }), n("653041");
    var i, r, s = n("735250");
    n("470079");
    var a = n("803997"),
        o = n.n(a),
        l = n("481060"),
        u = n("315263"),
        d = n("40851"),
        _ = n("100527"),
        c = n("906732"),
        E = n("688465"),
        I = n("246208"),
        T = n("785717"),
        f = n("221292"),
        S = n("290421"),
        h = n("318661"),
        A = n("228168"),
        m = n("981631"),
        N = n("232700"),
        O = n("689938"),
        p = n("649570"),
        R = n("839973"),
        C = n("124901");

    function g(e) {
        var t;
        let {
            user: n,
            guildId: i,
            className: r,
            shrinkAtCount: a,
            shrinkToSize: g,
            isTryItOutFlow: L,
            size: D = 0
        } = e, v = (0, h.default)(n.id, i), {
            analyticsLocations: M
        } = (0, c.default)(_.default.BADGE), {
            trackUserProfileAction: y,
            ...P
        } = (0, T.useUserProfileAnalyticsContext)(), {
            allowOpeningLootboxes: U
        } = I.default.useExperiment({
            location: "user_profile"
        }), b = (0, S.default)(v).map(e => ({
            ...e,
            src: (0, A.getBadgeAsset)(e.icon)
        })), G = (0, d.useWindowDispatch)();
        if (n.isClyde()) return (0, s.jsx)("div", {
            className: o()(r, p.container, p.clydeBadgeList),
            "aria-label": O.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, s.jsx)(E.default, {})
        });
        L && null == b.find(e => "premium" === e.id) && b.push({
            id: "premium",
            src: R,
            description: O.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        }), U && (null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) === N.LOOTBOX_PRIZE_SKU_ID && b.push({
            id: "lootboxes",
            src: C,
            description: O.default.Messages.PACKAGES_BADGE,
            link: "https://discord.com" + m.Routes.SETTINGS(m.UserSettingsSections.LOOTBOXES)
        });
        let w = null != a && null != g && b.length > a ? g : D;
        return (0, s.jsx)(c.AnalyticsLocationProvider, {
            value: M,
            children: (0, s.jsx)("div", {
                className: o()(r, b.length > 0 ? p.containerWithContent : p.container),
                "aria-label": O.default.Messages.PROFILE_USER_BADGES,
                role: "group",
                children: b.map(e => (0, s.jsx)(l.Tooltip, {
                    position: "top",
                    text: e.description,
                    spacing: 12,
                    children: t => (0, s.jsx)(l.Anchor, {
                        ...t,
                        onClick: n => {
                            var i;
                            y({
                                action: "PRESS_BADGE"
                            }), (0, f.trackUserProfileBadgePressed)({
                                badge: e.id,
                                analyticsLocations: M,
                                ...P
                            }), null === (i = t.onClick) || void 0 === i || i.call(t);
                            let r = null != e.link ? (0, u.default)(e.link, {
                                analyticsLocations: M
                            }) : null;
                            if (null != r) return G.dispatch(m.ComponentActions.POPOUT_CLOSE), r(n)
                        },
                        onMouseEnter: () => {
                            var n;
                            e.id === S.QUEST_COMPLETED_BADGE && (0, f.trackUserProfileBadgeHovered)({
                                badge: e.id,
                                analyticsLocations: M,
                                ...P
                            }), null === (n = t.onMouseEnter) || void 0 === n || n.call(t)
                        },
                        href: e.link,
                        children: (0, s.jsx)("img", {
                            alt: " ",
                            "aria-hidden": !0,
                            src: e.src,
                            className: o()({
                                [p.profileBadge24]: 0 === w,
                                [p.profileBadge22]: 1 === w,
                                [p.profileBadge20]: 2 === w,
                                [p.profileBadge18]: 3 === w
                            })
                        })
                    })
                }, e.id))
            })
        })
    }(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_20 = 2] = "SIZE_20", r[r.SIZE_18 = 3] = "SIZE_18"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return v
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
        T = n("617136"),
        f = n("497505"),
        S = n("626135"),
        h = n("785717"),
        A = n("221292"),
        m = n("290421"),
        N = n("318661"),
        O = n("228168"),
        p = n("981631"),
        R = n("232700"),
        C = n("689938"),
        g = n("649570"),
        L = n("839973"),
        D = n("124901");

    function v(e) {
        var t;
        let {
            user: n,
            guildId: i,
            className: r,
            shrinkAtCount: a,
            shrinkToSize: v,
            isTryItOutFlow: M,
            size: y = 0
        } = e, P = (0, N.default)(n.id, i), {
            analyticsLocations: U
        } = (0, c.default)(_.default.BADGE), {
            trackUserProfileAction: b,
            ...G
        } = (0, h.useUserProfileAnalyticsContext)(), {
            allowOpeningLootboxes: w
        } = I.default.useExperiment({
            location: "user_profile"
        }), B = (0, m.default)(P).map(e => ({
            ...e,
            src: (0, O.getBadgeAsset)(e.icon)
        })), k = (0, d.useWindowDispatch)();
        if (n.isClyde()) return (0, s.jsx)("div", {
            className: o()(r, g.container, g.clydeBadgeList),
            "aria-label": C.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, s.jsx)(E.default, {})
        });
        M && null == B.find(e => "premium" === e.id) && B.push({
            id: "premium",
            src: L,
            description: C.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        }), w && (null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) === R.LOOTBOX_PRIZE_SKU_ID && B.push({
            id: "lootboxes",
            src: D,
            description: C.default.Messages.PACKAGES_BADGE,
            link: "https://discord.com" + p.Routes.SETTINGS(p.UserSettingsSections.LOOTBOXES)
        });
        let V = null != a && null != v && B.length > a ? v : y;
        return (0, s.jsx)(c.AnalyticsLocationProvider, {
            value: U,
            children: (0, s.jsx)("div", {
                className: o()(r, B.length > 0 ? g.containerWithContent : g.container),
                "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                role: "group",
                children: B.map(e => (0, s.jsx)(l.Tooltip, {
                    position: "top",
                    text: e.description,
                    spacing: 12,
                    children: t => (0, s.jsx)(l.Anchor, {
                        ...t,
                        onClick: n => {
                            var i;
                            b({
                                action: "PRESS_BADGE"
                            }), (0, A.trackUserProfileBadgePressed)({
                                badge: e.id,
                                analyticsLocations: U,
                                ...G
                            }), null === (i = t.onClick) || void 0 === i || i.call(t);
                            let r = null != e.link ? (0, u.default)(e.link, {
                                analyticsLocations: U
                            }) : null;
                            if (null != r) return k.dispatch(p.ComponentActions.POPOUT_CLOSE), r(n)
                        },
                        onMouseEnter: () => {
                            var n;
                            e.id === m.QUEST_COMPLETED_BADGE && (S.default.track(p.AnalyticEvents.QUEST_CONTENT_VIEWED, {
                                ...(0, T.getContentProperties)(f.QuestContent.QUEST_BADGE)
                            }), (0, A.trackUserProfileBadgeHovered)({
                                badge: e.id,
                                analyticsLocations: U,
                                ...G
                            })), null === (n = t.onMouseEnter) || void 0 === n || n.call(t)
                        },
                        href: e.link,
                        children: (0, s.jsx)("img", {
                            alt: " ",
                            "aria-hidden": !0,
                            src: e.src,
                            className: o()({
                                [g.profileBadge24]: 0 === V,
                                [g.profileBadge22]: 1 === V,
                                [g.profileBadge20]: 2 === V,
                                [g.profileBadge18]: 3 === V
                            })
                        })
                    })
                }, e.id))
            })
        })
    }(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_20 = 2] = "SIZE_20", r[r.SIZE_18 = 3] = "SIZE_18"
}
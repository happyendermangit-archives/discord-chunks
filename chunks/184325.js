function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return O
        }
    }), n("653041");
    var i, r, s = n("735250");
    n("470079");
    var a = n("803997"),
        o = n.n(a),
        l = n("481060"),
        u = n("315263"),
        d = n("40851"),
        _ = n("906732"),
        c = n("688465"),
        E = n("785717"),
        I = n("221292"),
        T = n("290421"),
        f = n("318661"),
        S = n("228168"),
        h = n("981631"),
        A = n("689938"),
        m = n("649570"),
        N = n("839973");

    function O(e) {
        let {
            user: t,
            guildId: n,
            className: i,
            shrinkAtCount: r,
            shrinkToSize: a,
            isTryItOutFlow: O,
            size: p = 0
        } = e, R = (0, f.default)(t.id, n), C = (0, T.default)(R).map(e => ({
            ...e,
            src: (0, S.getBadgeAsset)(e.icon)
        })), {
            analyticsLocations: g
        } = (0, _.default)(), {
            trackUserProfileAction: L,
            ...D
        } = (0, E.useUserProfileAnalyticsContext)(), v = (0, d.useWindowDispatch)();
        if (t.isClyde()) return (0, s.jsx)("div", {
            className: o()(i, m.container, m.clydeBadgeList),
            "aria-label": A.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, s.jsx)(c.default, {})
        });
        O && null == C.find(e => "premium" === e.id) && C.push({
            id: "premium",
            icon: N,
            src: N,
            description: A.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let M = null != r && null != a && C.length > r ? a : p;
        return (0, s.jsx)("div", {
            className: o()(i, C.length > 0 ? m.containerWithContent : m.container),
            "aria-label": A.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: C.map(e => (0, s.jsx)(l.Tooltip, {
                position: "top",
                text: e.description,
                spacing: 12,
                children: t => (0, s.jsx)(l.Anchor, {
                    ...t,
                    onClick: n => {
                        var i;
                        L({
                            action: "PRESS_BADGE"
                        }), (0, I.trackUserProfileBadgePressed)({
                            badge: e.id,
                            analyticsLocations: g,
                            ...D
                        }), null === (i = t.onClick) || void 0 === i || i.call(t);
                        let r = null != e.link ? (0, u.default)(e.link) : null;
                        if (null != r) return v.dispatch(h.ComponentActions.POPOUT_CLOSE), r(n)
                    },
                    href: e.link,
                    children: (0, s.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.src,
                        className: o()({
                            [m.profileBadge24]: 0 === M,
                            [m.profileBadge22]: 1 === M,
                            [m.profileBadge18]: 2 === M
                        })
                    })
                })
            }, e.id))
        })
    }(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_18 = 2] = "SIZE_18"
}
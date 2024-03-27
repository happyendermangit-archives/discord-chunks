function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return N
        }
    }), n("653041");
    var i, r, s = n("735250");
    n("470079");
    var a = n("803997"),
        o = n.n(a),
        l = n("481060"),
        u = n("315263"),
        d = n("40851"),
        _ = n("688465"),
        c = n("785717"),
        E = n("221292"),
        I = n("290421"),
        T = n("318661"),
        f = n("228168"),
        S = n("981631"),
        h = n("689938"),
        A = n("649570"),
        m = n("839973");

    function N(e) {
        let {
            user: t,
            guildId: n,
            className: i,
            shrinkAtCount: r,
            shrinkToSize: a,
            isTryItOutFlow: N,
            size: O = 0
        } = e, p = (0, T.default)(t.id, n), R = (0, I.default)(p).map(e => ({
            ...e,
            src: (0, f.getBadgeAsset)(e.icon)
        })), {
            trackUserProfileAction: C,
            ...g
        } = (0, c.useUserProfileAnalyticsContext)(), L = (0, d.useWindowDispatch)();
        if (t.isClyde()) return (0, s.jsx)("div", {
            className: o()(i, A.container, A.clydeBadgeList),
            "aria-label": h.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, s.jsx)(_.default, {})
        });
        N && null == R.find(e => "premium" === e.id) && R.push({
            id: "premium",
            icon: m,
            src: m,
            description: h.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let D = null != r && null != a && R.length > r ? a : O;
        return (0, s.jsx)("div", {
            className: o()(i, R.length > 0 ? A.containerWithContent : A.container),
            "aria-label": h.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: R.map(e => (0, s.jsx)(l.Tooltip, {
                position: "top",
                text: e.description,
                spacing: 12,
                children: t => (0, s.jsx)(l.Anchor, {
                    ...t,
                    onClick: n => {
                        var i;
                        C({
                            action: "PRESS_BADGE"
                        }), (0, E.trackUserProfileBadgePressed)({
                            badge: e.id,
                            ...g
                        }), null === (i = t.onClick) || void 0 === i || i.call(t);
                        let r = null != e.link ? (0, u.default)(e.link) : null;
                        if (null != r) return L.dispatch(S.ComponentActions.POPOUT_CLOSE), r(n)
                    },
                    href: e.link,
                    children: (0, s.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.src,
                        className: o()({
                            [A.profileBadge24]: 0 === D,
                            [A.profileBadge22]: 1 === D,
                            [A.profileBadge18]: 2 === D
                        })
                    })
                })
            }, e.id))
        })
    }(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_18 = 2] = "SIZE_18"
}
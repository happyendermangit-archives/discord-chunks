function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("424973");
    var i = n("37983");
    n("884691");
    var l = n("917351"),
        a = n.n(l),
        s = n("77078"),
        r = n("86621"),
        o = n("449008"),
        u = n("545538");
    let d = (0, r.default)(e => {
        let {
            member: t,
            empty: n,
            guildId: l
        } = e;
        return n || null == t ? (0, i.jsx)("div", {
            className: u.partyMember
        }) : (0, i.jsx)("div", {
            className: u.partyMember,
            children: (0, i.jsx)(s.Avatar, {
                src: t.getAvatarURL(l, 16),
                "aria-label": t.username,
                size: s.AvatarSizes.SIZE_16,
                className: u.partyMember
            })
        })
    });
    var c = e => {
        let {
            partySize: t,
            members: n,
            minAvatarsShown: l = 1,
            maxAvatarsShown: s = 2,
            guildId: r
        } = e, {
            totalSize: c,
            knownSize: f
        } = t;
        if (c < l) return null;
        let p = a(n).filter(o.isNotNullish).take(s).map(e => (0, i.jsx)(d, {
                member: e,
                guildId: r
            }, e.id)).value(),
            m = c - f;
        for (let e = 0; e < m && p.length < s; e++) p.push((0, i.jsx)(d, {
            empty: !0,
            guildId: r
        }, "empty-member-".concat(e)));
        let h = Math.max(Math.min(c - p.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            p.push((0, i.jsx)(d, {
                member: e,
                guildId: r
            }, e.id))
        }
        return (0, i.jsx)("div", {
            className: u.wrapper,
            children: (0, i.jsxs)("div", {
                className: u.partyMembers,
                children: [p, h > 1 ? (0, i.jsxs)("div", {
                    className: u.partyMemberOverflow,
                    children: ["+", h]
                }) : null]
            })
        })
    }
}
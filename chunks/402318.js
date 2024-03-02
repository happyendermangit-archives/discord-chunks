function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("424973");
    var l = n("37983");
    n("884691");
    var i = n("917351"),
        a = n.n(i),
        s = n("77078"),
        r = n("86621"),
        o = n("449008"),
        u = n("545538");
    let d = (0, r.default)(e => {
        let {
            member: t,
            empty: n,
            guildId: i
        } = e;
        return n || null == t ? (0, l.jsx)("div", {
            className: u.partyMember
        }) : (0, l.jsx)("div", {
            className: u.partyMember,
            children: (0, l.jsx)(s.Avatar, {
                src: t.getAvatarURL(i, 16),
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
            minAvatarsShown: i = 1,
            maxAvatarsShown: s = 2,
            guildId: r
        } = e, {
            totalSize: c,
            knownSize: f
        } = t;
        if (c < i) return null;
        let m = a(n).filter(o.isNotNullish).take(s).map(e => (0, l.jsx)(d, {
                member: e,
                guildId: r
            }, e.id)).value(),
            p = c - f;
        for (let e = 0; e < p && m.length < s; e++) m.push((0, l.jsx)(d, {
            empty: !0,
            guildId: r
        }, "empty-member-".concat(e)));
        let h = Math.max(Math.min(c - m.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            m.push((0, l.jsx)(d, {
                member: e,
                guildId: r
            }, e.id))
        }
        return (0, l.jsx)("div", {
            className: u.wrapper,
            children: (0, l.jsxs)("div", {
                className: u.partyMembers,
                children: [m, h > 1 ? (0, l.jsxs)("div", {
                    className: u.partyMemberOverflow,
                    children: ["+", h]
                }) : null]
            })
        })
    }
}
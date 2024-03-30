function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("735250");
    n("470079");
    var r = n("392711"),
        s = n.n(r),
        a = n("481060"),
        o = n("730749"),
        l = n("823379"),
        u = n("416805");
    let d = (0, o.default)(e => {
        let {
            member: t,
            empty: n,
            guildId: r
        } = e;
        return n || null == t ? (0, i.jsx)("div", {
            className: u.partyMember
        }) : (0, i.jsx)("div", {
            className: u.partyMember,
            children: (0, i.jsx)(a.Avatar, {
                src: t.getAvatarURL(r, 16),
                "aria-label": t.username,
                size: a.AvatarSizes.SIZE_16,
                className: u.partyMember
            })
        })
    });
    t.default = e => {
        let {
            partySize: t,
            members: n,
            minAvatarsShown: r = 1,
            maxAvatarsShown: a = 2,
            guildId: o
        } = e, {
            totalSize: _,
            knownSize: c
        } = t;
        if (_ < r) return null;
        let E = s()(n).filter(l.isNotNullish).take(a).map(e => (0, i.jsx)(d, {
                member: e,
                guildId: o
            }, e.id)).value(),
            I = _ - c;
        for (let e = 0; e < I && E.length < a; e++) E.push((0, i.jsx)(d, {
            empty: !0,
            guildId: o
        }, "empty-member-".concat(e)));
        let T = Math.max(Math.min(_ - E.length, 99), 0);
        if (1 === T) {
            let e = n[a];
            E.push((0, i.jsx)(d, {
                member: e,
                guildId: o
            }, e.id))
        }
        return (0, i.jsx)("div", {
            className: u.wrapper,
            children: (0, i.jsxs)("div", {
                className: u.partyMembers,
                children: [E, T > 1 ? (0, i.jsxs)("div", {
                    className: u.partyMemberOverflow,
                    children: ["+", T]
                }) : null]
            })
        })
    }
}
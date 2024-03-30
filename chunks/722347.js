function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("784184"),
        u = n("690036"),
        s = n("162677"),
        l = n("416805"),
        c = (0, u.default)(function(e) {
            var t = e.member,
                n = e.empty,
                o = e.guildId;
            return n || null == t ? r.createElement("div", {
                className: l.partyMember
            }) : r.createElement("div", {
                className: l.partyMember
            }, r.createElement(a.Avatar, {
                src: t.getAvatarURL(o, 16),
                "aria-label": t.username,
                size: a.AvatarSizes.SIZE_16,
                className: l.partyMember
            }))
        });
    t.default = function(e) {
        var t = e.partySize,
            n = e.members,
            o = e.minAvatarsShown,
            a = e.maxAvatarsShown,
            u = void 0 === a ? 2 : a,
            f = e.guildId,
            d = t.totalSize,
            _ = t.knownSize;
        if (d < (void 0 === o ? 1 : o)) return null;
        for (var E = i()(n).filter(s.isNotNullish).take(u).map(function(e) {
                return r.createElement(c, {
                    key: e.id,
                    member: e,
                    guildId: f
                })
            }).value(), p = d - _, m = 0; m < p && E.length < u; m++) E.push(r.createElement(c, {
            key: "empty-member-".concat(m),
            empty: !0,
            guildId: f
        }));
        var y = Math.max(Math.min(d - E.length, 99), 0);
        if (1 === y) {
            var I = n[u];
            E.push(r.createElement(c, {
                key: I.id,
                member: I,
                guildId: f
            }))
        }
        return r.createElement("div", {
            className: l.wrapper
        }, r.createElement("div", {
            className: l.partyMembers
        }, E, y > 1 ? r.createElement("div", {
            className: l.partyMemberOverflow
        }, "+", y) : null))
    }
}
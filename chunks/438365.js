function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserSelectedClan: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("430824"),
        a = n("594174"),
        o = n("645896"),
        l = n("353093");

    function u(e) {
        var t, n;
        let {
            userId: u
        } = e, d = (0, r.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getUser(u)) || void 0 === e ? void 0 : e.clan
        }), {
            tag: _,
            badge: c,
            guildId: E
        } = (0, l.getUserClanData)(d);
        i.useEffect(() => {
            (0, o.fetchClanInfo)(E)
        }, [E]);
        let I = (0, o.useClanInfo)(null == d ? void 0 : d.identityGuildId),
            T = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(null == d ? void 0 : d.identityGuildId));
        return {
            userClanTag: _,
            userClanBadge: c,
            guildId: E,
            guildName: null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : null == I ? void 0 : I.name,
            guildIcon: null !== (n = null == T ? void 0 : T.icon) && void 0 !== n ? n : null == I ? void 0 : I.icon,
            clan: I
        }
    }
}
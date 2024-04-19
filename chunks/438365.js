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
        }), _ = (0, l.getGuildIdFromUserClan)(d);
        i.useEffect(() => {
            (0, o.fetchClanInfo)(_)
        }, [_]);
        let c = (0, o.useClanInfo)(null == d ? void 0 : d.identityGuildId),
            E = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(null == d ? void 0 : d.identityGuildId));
        return {
            userClanTag: (0, l.getTagFromUserClan)(d),
            guildId: _,
            guildName: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : null == c ? void 0 : c.name,
            guildIcon: null !== (n = null == E ? void 0 : E.icon) && void 0 !== n ? n : null == c ? void 0 : c.icon,
            clan: c
        }
    }
}
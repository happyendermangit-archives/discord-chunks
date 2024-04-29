function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        activityCardsSortedByAffinity: function() {
            return I
        },
        useGetActivityUsers: function() {
            return T
        }
    }), n("627341"), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("278074"),
        a = n("442837"),
        o = n("800599"),
        l = n("594174"),
        u = n("823379"),
        d = n("5192"),
        _ = n("456774"),
        c = n("689938");
    let E = {
        Event: 4,
        Voice: 3,
        EmbeddedActivity: 2,
        Base: 1
    };

    function I(e) {
        return (0, i.orderBy)(e, [e => (function(e) {
            let t = e => e > 0 ? Math.log(e + 1) : 0,
                n = e => e.map(e => {
                    var t, n;
                    return null !== (n = null === (t = o.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
                }).map(t),
                i = (0, s.match)(e).with({
                    category: _.ActivityCategory.EVENT
                }, () => 4).with({
                    category: _.ActivityCategory.HANGOUT
                }, () => 3).with({
                    category: _.ActivityCategory.EMBEDDED_ACTIVITY
                }, () => 2).otherwise(() => 1),
                r = 0;
            return "userIds" in e && (r += Math.max(...n(e.userIds))), "embeddedActivity" in e && (r += Math.max(...n([...e.embeddedActivity.userIds]))), r = r > 0 ? r * i : 1e-5 * i
        })(e)], ["desc"])
    }

    function T(e, t, n) {
        let i = (0, a.useStateFromStoresArray)([l.default, o.default], () => r()(e).map(e => l.default.getUser(e)).filter(u.isNotNullish).orderBy([e => {
                var t, n;
                return null !== (n = null === (t = o.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
            }], ["desc"]).value()),
            s = i.length > 3 ? i.slice(0, 2) : i.slice(0, 3),
            _ = s.map(e => d.default.getName(t, n, e)),
            E = Math.max(0, i.length - s.length),
            I = function(e, t) {
                if (1 === e.length) return t > 0 ? c.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1_N.format({
                    a: e[0],
                    n: t.toLocaleString()
                }) : e[0];
                if (2 === e.length) return t > 0 ? c.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2_N.format({
                    a: e[0],
                    b: e[1],
                    n: t.toLocaleString()
                }) : c.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2.format({
                    a: e[0],
                    b: e[1]
                });
                if (3 !== e.length) return c.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_N.format({
                    n: t.toLocaleString()
                });
                else return t > 0 ? c.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3_N.format({
                    a: e[0],
                    b: e[1],
                    c: e[2],
                    n: t.toLocaleString()
                }) : c.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3.format({
                    a: e[0],
                    b: e[1],
                    c: e[2]
                })
            }(_, E);
        return {
            totalUsers: i.length,
            usersToShow: s,
            othersCount: E,
            usersText: I
        }
    }
}
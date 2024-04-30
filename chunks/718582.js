function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetActivityUsers: function() {
            return g
        },
        useGuildActivity: function() {
            return R
        }
    }), n("390547"), n("47120"), n("627341");
    var i = n("392711"),
        r = n.n(i),
        s = n("278074"),
        a = n("442837"),
        o = n("317381"),
        l = n("841784"),
        u = n("924301"),
        d = n("344185"),
        _ = n("984933"),
        c = n("158776"),
        E = n("699516"),
        I = n("800599"),
        T = n("594174"),
        f = n("938475"),
        S = n("823379"),
        h = n("5192"),
        A = n("709054"),
        m = n("456774"),
        N = n("981631"),
        p = n("689938");
    let O = {
        Event: 5,
        Game: 4,
        Voice: 3,
        EmbeddedActivity: 2,
        Base: 1
    };

    function R(e) {
        let t = e.id,
            n = (0, a.useStateFromStoresArray)([_.default, d.default], () => {
                let e = _.default.getChannels(t)[_.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === N.ChannelTypes.GUILD_VOICE
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                return [...e, ...Object.values(d.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
            }, [t]),
            r = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => ({
                category: m.ActivityCategory.EVENT,
                event: e
            })), [t]);
        return function(e) {
            return (0, i.orderBy)(e, [e => (function(e) {
                let t = e => e > 0 ? Math.log(e + 1) : 0,
                    n = e => e.map(e => {
                        var t, n;
                        return null !== (n = null === (t = I.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
                    }).map(t),
                    i = (0, s.match)(e).with({
                        category: m.ActivityCategory.EVENT
                    }, () => 5).with({
                        category: m.ActivityCategory.HANGOUT
                    }, () => 3).with({
                        category: m.ActivityCategory.GAMING
                    }, () => 4).with({
                        category: m.ActivityCategory.EMBEDDED_ACTIVITY
                    }, () => 2).otherwise(() => 1),
                    r = 0;
                return "userIds" in e && (r += Math.max(...n(e.userIds))), "embeddedActivity" in e && (r += Math.max(...n([...e.embeddedActivity.userIds]))), "voiceStates" in e && (r += Math.max(...n(e.voiceStates.map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                })))), r = r > 0 ? r * i : 1e-5 * i
            })(e)], ["desc"])
        }([...(0, a.useStateFromStores)([E.default, f.default, o.default, c.default], () => {
            let i = E.default.getRelationships(),
                r = A.default.keys(i).filter(e => i[e] === N.RelationshipTypes.BLOCKED),
                s = f.default.getVoiceStates(t);
            return Object.keys(s).filter(t => null == s[t].filter(S.isNotNullish).find(e => {
                let {
                    user: t
                } = e;
                return r.includes(t.id)
            }) && t !== e.afkChannelId && n.includes(t)).map(e => {
                let t = o.default.getEmbeddedActivitiesForChannel(e);
                if (t.length > 0)
                    for (let e of t) return {
                        category: m.ActivityCategory.EMBEDDED_ACTIVITY,
                        embeddedActivity: e
                    };
                let n = s[e].filter(S.isNotNullish);
                for (let t of n) {
                    let i = c.default.findActivity(t.user.id, C(t));
                    if (null != i && !(0, l.default)(i)) return {
                        category: m.ActivityCategory.GAMING,
                        channelId: e,
                        game: i,
                        voiceStates: n
                    }
                }
                let i = n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                });
                return {
                    category: m.ActivityCategory.HANGOUT,
                    channelId: e,
                    userIds: i
                }
            })
        }, [n, e.afkChannelId, t]), ...r])
    }
    let C = e => t => [N.ActivityTypes.PLAYING, N.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

    function g(e, t, n) {
        let i = (0, a.useStateFromStoresArray)([T.default, I.default], () => r()(e).map(e => T.default.getUser(e)).filter(S.isNotNullish).orderBy([e => {
                var t, n;
                return null !== (n = null === (t = I.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
            }], ["desc"]).value()),
            s = i.length > 3 ? i.slice(0, 2) : i.slice(0, 3),
            o = s.map(e => h.default.getName(t, n, e)),
            l = Math.max(0, i.length - s.length),
            u = function(e, t) {
                if (1 === e.length) return t > 0 ? p.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1_N.format({
                    a: e[0],
                    n: t.toLocaleString()
                }) : e[0];
                if (2 === e.length) return t > 0 ? p.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2_N.format({
                    a: e[0],
                    b: e[1],
                    n: t.toLocaleString()
                }) : p.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2.format({
                    a: e[0],
                    b: e[1]
                });
                if (3 !== e.length) return p.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_N.format({
                    n: t.toLocaleString()
                });
                else return t > 0 ? p.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3_N.format({
                    a: e[0],
                    b: e[1],
                    c: e[2],
                    n: t.toLocaleString()
                }) : p.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3.format({
                    a: e[0],
                    b: e[1],
                    c: e[2]
                })
            }(o, l);
        return {
            totalUsers: i.length,
            usersToShow: s,
            othersCount: l,
            usersText: u
        }
    }
}
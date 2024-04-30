function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetActivityUsers: function() {
            return L
        },
        useGuildActivity: function() {
            return C
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
        _ = n("199902"),
        c = n("984933"),
        E = n("158776"),
        I = n("699516"),
        T = n("800599"),
        f = n("594174"),
        S = n("938475"),
        h = n("823379"),
        A = n("5192"),
        m = n("709054"),
        N = n("456774"),
        p = n("981631"),
        O = n("689938");
    let R = {
        Event: 5,
        Game: 4,
        Voice: 3,
        EmbeddedActivity: 2,
        Base: 1
    };

    function C(e) {
        let t = e.id,
            n = (0, a.useStateFromStoresArray)([c.default, d.default], () => {
                let e = c.default.getChannels(t)[c.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === p.ChannelTypes.GUILD_VOICE
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                return [...e, ...Object.values(d.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
            }, [t]),
            r = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => ({
                category: N.ActivityCategory.EVENT,
                event: e
            })), [t]),
            _ = (0, a.useStateFromStores)([I.default, S.default, o.default, E.default], () => {
                let i = I.default.getRelationships(),
                    r = m.default.keys(i).filter(e => i[e] === p.RelationshipTypes.BLOCKED),
                    s = S.default.getVoiceStates(t),
                    a = Object.keys(s);
                return 0 === a.length ? [] : a.filter(t => null == s[t].filter(h.isNotNullish).find(e => {
                    let {
                        user: t
                    } = e;
                    return r.includes(t.id)
                }) && t !== e.afkChannelId && n.includes(t)).map(e => {
                    let t = o.default.getEmbeddedActivitiesForChannel(e);
                    if (t.length > 0)
                        for (let e of t) return {
                            category: N.ActivityCategory.EMBEDDED_ACTIVITY,
                            embeddedActivity: e
                        };
                    let n = s[e].filter(h.isNotNullish);
                    for (let t of n) {
                        let i = E.default.findActivity(t.user.id, g(t));
                        if (null != i && !(0, l.default)(i)) return {
                            category: N.ActivityCategory.GAMING,
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
                        category: N.ActivityCategory.HANGOUT,
                        channelId: e,
                        userIds: i
                    }
                })
            }, [n, e.afkChannelId, t]);
        return 0 === _.length && 0 === r.length ? n.slice(0, 3).map(e => ({
            category: N.ActivityCategory.EMPTY,
            channelId: e
        })) : (function(e) {
            return (0, i.orderBy)(e, [e => (function(e) {
                let t = e => e > 0 ? Math.log(e + 1) : 0,
                    n = e => e.map(e => {
                        var t, n;
                        return null !== (n = null === (t = T.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
                    }).map(t),
                    i = (0, s.match)(e).with({
                        category: N.ActivityCategory.EVENT
                    }, () => 5).with({
                        category: N.ActivityCategory.HANGOUT
                    }, () => 3).with({
                        category: N.ActivityCategory.GAMING
                    }, () => 4).with({
                        category: N.ActivityCategory.EMBEDDED_ACTIVITY
                    }, () => 2).otherwise(() => 1),
                    r = 0;
                return "userIds" in e && (r += Math.max(...n(e.userIds))), "embeddedActivity" in e && (r += Math.max(...n([...e.embeddedActivity.userIds]))), "voiceStates" in e && (r += Math.max(...n(e.voiceStates.map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                })))), r = r > 0 ? r * i : 1e-5 * i
            })(e)], ["desc"])
        })([..._, ...r]).slice(0, 3)
    }
    let g = e => t => [p.ActivityTypes.PLAYING, p.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

    function L(e, t, n) {
        let i = (0, a.useStateFromStoresArray)([_.default], () => _.default.getAllApplicationStreamsForChannel(n).map(e => e.ownerId), [n]),
            s = (0, a.useStateFromStoresArray)([f.default, T.default], () => r()(e).map(e => f.default.getUser(e)).filter(h.isNotNullish).orderBy([e => {
                var t, n;
                return null !== (n = null === (t = T.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
            }], ["desc"]).value()),
            o = s.length > 3 ? s.slice(0, 6) : s.slice(0, 7),
            l = Math.max(0, s.length - o.length),
            u = i.length > 2 ? i.slice(0, 2) : i.slice(0, 3),
            d = u.map(e => A.default.getName(t, n, f.default.getUser(e))),
            c = function(e, t) {
                if (1 === e.length) return t > 0 ? O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1_N.format({
                    a: e[0],
                    n: t.toLocaleString()
                }) : O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1.format({
                    username: e[0]
                });
                if (2 === e.length) return t > 0 ? O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2_N.format({
                    a: e[0],
                    b: e[1],
                    n: t.toLocaleString()
                }) : O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2.format({
                    a: e[0],
                    b: e[1]
                });
                if (3 !== e.length) return O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_N.format({
                    n: t.toLocaleString()
                });
                else return t > 0 ? O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3_N.format({
                    a: e[0],
                    b: e[1],
                    c: e[2],
                    n: t.toLocaleString()
                }) : O.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3.format({
                    a: e[0],
                    b: e[1],
                    c: e[2]
                })
            }(d, Math.max(0, i.length - u.length));
        return {
            totalUsers: s.length,
            usersToShow: o,
            othersCount: l,
            streamUserIds: i,
            streamerUsersText: c
        }
    }
}
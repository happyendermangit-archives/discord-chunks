function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetActivityUsers: function() {
            return D
        },
        useGuildActivity: function() {
            return L
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
        c = n("480294"),
        E = n("984933"),
        I = n("158776"),
        T = n("699516"),
        f = n("800599"),
        S = n("594174"),
        h = n("979651"),
        A = n("938475"),
        m = n("823379"),
        N = n("5192"),
        p = n("709054"),
        O = n("456774"),
        R = n("981631"),
        C = n("689938");
    let g = {
        Event: 7,
        Game: 6,
        EmbeddedActivity: 5,
        Stream: 4,
        Video: 3,
        Voice: 2,
        Base: 1
    };

    function L(e) {
        let t = e.id,
            n = (0, a.useStateFromStoresArray)([E.default, d.default], () => {
                let e = E.default.getChannels(t)[E.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === R.ChannelTypes.GUILD_VOICE
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                return [...e, ...Object.values(d.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
            }, [t]),
            r = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => ({
                category: O.CardCategory.EVENT,
                event: e
            })), [t]),
            S = (0, a.useStateFromStores)([T.default, A.default, o.default, h.default, I.default, _.default], () => {
                let i = T.default.getRelationships(),
                    r = p.default.keys(i).filter(e => i[e] === R.RelationshipTypes.BLOCKED),
                    s = A.default.getVoiceStates(t),
                    a = Object.keys(s);
                return 0 === a.length ? [] : a.filter(t => {
                    let i = s[t].filter(m.isNotNullish);
                    return 0 !== i.length && null == i.find(e => {
                        let {
                            user: t
                        } = e;
                        return r.includes(t.id)
                    }) && t !== e.afkChannelId && n.includes(t)
                }).map(e => {
                    let t = o.default.getEmbeddedActivitiesForChannel(e);
                    if (t.length > 0)
                        for (let e of t) return {
                            category: O.CardCategory.EMBEDDED_ACTIVITY,
                            embeddedActivity: e
                        };
                    let n = s[e].filter(m.isNotNullish);
                    for (let t of n) {
                        let i = I.default.findActivity(t.user.id, v(t));
                        if (null != i && !(0, l.default)(i)) return {
                            category: O.CardCategory.GAMING,
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
                        }),
                        r = h.default.hasVideo(e),
                        a = _.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId);
                    return {
                        category: O.CardCategory.HANGOUT,
                        channelId: e,
                        userIds: i,
                        streamUserIds: a,
                        channelHasVideo: r
                    }
                })
            }, [n, e.afkChannelId, t]),
            N = (0, a.useStateFromStores)([c.default], () => c.default.hasConsented(R.Consents.PERSONALIZATION)),
            C = (0, a.useStateFromStores)([f.default], () => f.default.getUserAffinities());
        if (0 === S.length && 0 === r.length) return 0 === n.length ? [] : n.slice(0, 3).map(e => ({
            category: O.CardCategory.EMPTY,
            channelId: e
        }));
        let g = N && C.length > 0;
        return (function(e, t) {
            return (0, i.orderBy)(e, [e => (function(e, t) {
                let n = e => e > 0 ? Math.log(e + 1) : 0,
                    i = e => e.map(e => {
                        var t, n;
                        return null !== (n = null === (t = f.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
                    }).map(n),
                    r = (0, s.match)(e).with({
                        category: O.CardCategory.EVENT
                    }, () => 7).with({
                        category: O.CardCategory.GAMING
                    }, () => 6).with({
                        category: O.CardCategory.EMBEDDED_ACTIVITY
                    }, () => 5).with({
                        streamUserIds: s.P.when(e => e.length > 0)
                    }, () => 4).with({
                        channelHasVideo: !0
                    }, () => 3).with({
                        category: O.CardCategory.HANGOUT
                    }, () => 2).otherwise(() => 1),
                    a = 0;
                return t ? ("userIds" in e && (a += Math.max(...i(e.userIds))), "embeddedActivity" in e && (a += Math.max(...i([...e.embeddedActivity.userIds]))), "voiceStates" in e && (a += Math.max(...i(e.voiceStates.filter(m.isNotNullish).map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                }))))) : ("userIds" in e && (a += e.userIds.length), "embeddedActivity" in e && (a += [...e.embeddedActivity.userIds].length), "voiceStates" in e && (a += e.voiceStates.filter(m.isNotNullish).map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                }).length)), a = a > 0 ? a * r : 1e-5 * r
            })(e, t)], ["desc"])
        })([...S, ...r], g).slice(0, 3)
    }
    let v = e => t => [R.ActivityTypes.PLAYING, R.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

    function D(e, t, n) {
        let i = (0, a.useStateFromStoresArray)([_.default], () => _.default.getAllApplicationStreamsForChannel(n).map(e => e.ownerId), [n]),
            s = (0, a.useStateFromStoresArray)([S.default, f.default], () => r()(e).map(e => S.default.getUser(e)).filter(m.isNotNullish).orderBy([e => {
                var t, n;
                return null !== (n = null === (t = f.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
            }], ["desc"]).value()),
            o = s.length > 3 ? s.slice(0, 6) : s.slice(0, 7),
            l = Math.max(0, s.length - o.length),
            u = i.length > 2 ? i.slice(0, 2) : i.slice(0, 3),
            d = u.map(e => N.default.getName(t, n, S.default.getUser(e))),
            c = function(e, t) {
                if (1 === e.length) return t > 0 ? C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1_N.format({
                    a: e[0],
                    n: t.toLocaleString()
                }) : C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1.format({
                    username: e[0]
                });
                if (2 === e.length) return t > 0 ? C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2_N.format({
                    a: e[0],
                    b: e[1],
                    n: t.toLocaleString()
                }) : C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2.format({
                    a: e[0],
                    b: e[1]
                });
                if (3 !== e.length) return C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_N.format({
                    n: t.toLocaleString()
                });
                else return t > 0 ? C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3_N.format({
                    a: e[0],
                    b: e[1],
                    c: e[2],
                    n: t.toLocaleString()
                }) : C.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3.format({
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
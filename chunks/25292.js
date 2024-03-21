function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
            return en
        },
        default: function() {
            return el
        }
    }), n("424973"), n("843762"), n("781738"), n("222007");
    var s = n("448105"),
        r = n.n(s),
        a = n("917351"),
        o = n.n(a),
        l = n("195547"),
        u = n("679653"),
        d = n("454273"),
        c = n("966506"),
        _ = n("605250"),
        f = n("385976"),
        E = n("677315"),
        h = n("361776"),
        g = n("290886"),
        m = n("866353"),
        p = n("865372"),
        S = n("364685"),
        T = n("161585"),
        v = n("401690"),
        I = n("872173"),
        A = n("233069"),
        C = n("766274"),
        y = n("42203"),
        N = n("923959"),
        R = n("26989"),
        O = n("305961"),
        D = n("377253"),
        P = n("957255"),
        L = n("824563"),
        M = n("27618"),
        b = n("18494"),
        U = n("162771"),
        w = n("697218"),
        k = n("552712"),
        V = n("449008"),
        G = n("651879"),
        F = n("991170"),
        x = n("655518"),
        B = n("299039"),
        H = n("159885"),
        Y = n("158998"),
        K = n("49111"),
        j = n("375822"),
        W = n("724210"),
        z = n("782340");
    let q = new _.default("AutocompleteUtils"),
        X = () => !0,
        Q = /(\t|\s)/,
        Z = [];
    i = n("905571").default;
    let J = i.MENTION_EVERYONE,
        $ = i.MENTION_HERE,
        ee = i.LAUNCHABLE_APPLICATIONS;

    function et() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 ? arguments[1] : void 0;
        return 1e3 * e * (null != t ? t : 1)
    }
    let en = [N.GUILD_SELECTABLE_CHANNELS_KEY, N.GUILD_VOCAL_CHANNELS_KEY, K.ChannelTypes.GUILD_CATEGORY];

    function ei(e, t) {
        let {
            exactQuery: n,
            containQuery: i,
            queryLower: s,
            isFullMatch: a
        } = t, o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        try {
            if (n.test(e)) {
                if (e.toLocaleLowerCase() === s) return 10;
                if (!1 === a) {
                    let t = s.length / e.length;
                    return Math.max(1, 7 * t)
                }
                return 7
            }
            if (i.test(e)) return 5;
            if (function(e, t) {
                    let n = e.split(/(?:,| )+/);
                    return n.every(e => {
                        let n = RegExp(x.default.escape(e), "i");
                        return n.test(t)
                    })
                }(s, e)) return 3;
            if (o && r(s, e)) return 1
        } catch (e) {
            q.error(e)
        }
        return 0
    }

    function es(e) {
        return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
    }

    function er(e) {
        let {
            query: t,
            members: n,
            limit: i,
            filter: s,
            allowSnowflake: a
        } = e, o = w.default.getUsers(), u = U.default.getGuildId(), d = t.toLocaleLowerCase(), c = (0, H.normalize)(d), _ = [], f = [], E = n.length, h = 0, g = 0;
        for (; h < E;) {
            var m, p, S, T, v, I, A, y, N;
            let e, i;
            let l = n[h];
            l instanceof C.default ? (i = l, e = null === (p = R.default.getNick(u, i.id)) || void 0 === p ? void 0 : p.toLocaleLowerCase()) : (e = null === (S = l.nick) || void 0 === S ? void 0 : S.toLocaleLowerCase(), i = o[l.userId]);
            let E = null === (m = Y.default.getGlobalName(i)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
            if (null == s || s(i)) {
                let n = i.username.toLocaleLowerCase(),
                    s = (0, H.stripDiacritics)(n),
                    o = (0, H.normalize)(s),
                    l = null != e ? (0, H.stripDiacritics)(e) : null,
                    u = null != l ? (0, H.normalize)(l) : null,
                    h = null != E ? (0, H.stripDiacritics)(E) : null,
                    m = null != h ? (0, H.normalize)(h) : null;
                a && t === i.id || n.substring(0, d.length) === d || s.substring(0, d.length) === d || (null == e ? void 0 : e.substring(0, d.length)) === d || (null == l ? void 0 : l.substring(0, d.length)) === d || (null == E ? void 0 : E.substring(0, d.length)) === d || (null == h ? void 0 : h.substring(0, d.length)) === d ? _.push({
                    type: j.AutocompleterResultTypes.USER,
                    record: i,
                    score: 10,
                    comparator: null !== (T = null != E ? E : e) && void 0 !== T ? T : n,
                    sortable: null !== (v = null != h ? h : l) && void 0 !== v ? v : s
                }) : o.substring(0, c.length) === c || (null == u ? void 0 : u.substring(0, c.length)) === c || (null == m ? void 0 : m.substring(0, c.length)) === c ? _.push({
                    type: j.AutocompleterResultTypes.USER,
                    record: i,
                    score: 1,
                    comparator: null !== (I = null != E ? E : e) && void 0 !== I ? I : n,
                    sortable: null !== (A = null != h ? h : l) && void 0 !== A ? A : s
                }) : g < 50 && (r(d, s) || r(c, o) || null != l && r(d, l) || null != u && r(c, u) || null != h && r(d, h) || null != m && r(c, m)) && (f.push({
                    type: j.AutocompleterResultTypes.USER,
                    record: i,
                    score: 1,
                    comparator: null !== (y = null != E ? E : e) && void 0 !== y ? y : n,
                    sortable: null !== (N = null != h ? h : l) && void 0 !== N ? N : s
                }), g += 1)
            }
            h += 1
        }
        return _.sort(l.default), _.length < i && (f.sort(l.default), _ = _.concat(f.slice(0, Math.max(0, i - _.length)))), _.length > i && (_.length = i), _
    }

    function ea(e, t, n) {
        let i = 0,
            s = null;
        for (let r of t) {
            let t = ei(e, r, n);
            t > i && (i = t, s = r)
        }
        return null != s && (s.isFullMatch ? t.length = 0 : t.splice(t.indexOf(s), 1)), i
    }

    function eo(e, t) {
        let n = y.default.getChannel(e);
        return null == e || null == n ? [] : o(D.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => w.default.getUser(e.author.id)).filter(e => {
            if (null == e || e.isNonUserBot()) return !1;
            let t = n.getGuildId();
            if (null == t) return !0;
            let i = R.default.getMember(t, e.id);
            return es(i)
        }).map(e => {
            var t;
            let i = n.getGuildId(),
                s = null != i ? R.default.getMember(i, e.id) : null;
            return {
                type: j.AutocompleterResultTypes.USER,
                record: e,
                score: 0,
                comparator: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : Y.default.getName(e)
            }
        }).take(t).value()
    }
    var el = {
        queryFriends(e) {
            let {
                query: t,
                limit: n = 10,
                _fuzzy: i = !0,
                filter: s
            } = e;
            return er({
                query: t,
                members: M.default.getFriendIDs().map(e => w.default.getUser(e)).filter(V.isNotNullish),
                limit: n,
                filter: s
            })
        },
        queryDMUsers(e) {
            let {
                query: t,
                limit: n = 10,
                filter: i
            } = e;
            return er({
                query: t,
                members: y.default.getDMUserIds().map(e => w.default.getUser(e)).filter(V.isNotNullish),
                limit: n,
                filter: i
            })
        },
        queryChannelUsers(e) {
            let t, {
                    channelId: n,
                    query: i,
                    limit: s = 10,
                    request: r = !0,
                    checkRecentlyTalkedOnEmptyQuery: a = !0,
                    allowSnowflake: o = !1
                } = e,
                l = y.default.getChannel(n);
            if (null == l) return [];
            let u = l.isThread() ? y.default.getChannel(l.parent_id) : null,
                d = null != u ? u : l;
            if (null == d) return [];
            if (d.isPrivate()) {
                t = d.recipients.map(e => {
                    var t;
                    return {
                        userId: e,
                        nick: null !== (t = M.default.getNickname(e)) && void 0 !== t ? t : null
                    }
                });
                let e = w.default.getCurrentUser();
                null != e && t.push({
                    userId: e.id,
                    nick: null
                })
            } else {
                if (0 === i.length && a) {
                    let e = eo(l.id, s);
                    if (e.length > 0) return e
                }
                t = R.default.getMembers(d.guild_id).filter(es), r && G.default.requestMembers(d.guild_id, i, s)
            }
            return er({
                query: i,
                members: t,
                limit: s,
                filter: e => d.isPrivate() || F.can({
                    permission: K.Permissions.VIEW_CHANNEL,
                    user: e,
                    context: d
                }),
                allowSnowflake: o
            })
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: i = 10,
                request: s = !0,
                checkRecentlyTalkedOnEmptyQuery: r = !0,
                filter: a,
                allowSnowflake: o
            } = e;
            if (null == O.default.getGuild(t)) return [];
            if (0 === n.length && r) {
                let e = eo(b.default.getChannelId(t), i);
                if (e.length > 0) return e
            }
            let l = R.default.getMembers(t).filter(es);
            return s && n.length > 0 && G.default.requestMembers(t, n, i), er({
                query: n,
                members: l,
                limit: i,
                filter: a,
                allowSnowflake: o
            })
        },
        queryUsers(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                i = arguments.length > 4 ? arguments[4] : void 0;
            return n && e.length > 0 && G.default.requestMembers(null, e, t), er({
                query: e,
                members: o(w.default.getUsers()).values().value(),
                limit: t,
                filter: i
            })
        },
        queryChannels(e) {
            let t, {
                    query: n,
                    guildId: i,
                    limit: s = K.MAX_AUTOCOMPLETE_RESULTS,
                    fuzzy: r = !0,
                    filter: a = X,
                    type: d = N.GUILD_SELECTABLE_CHANNELS_KEY,
                    allowEmptyQueries: c = !1,
                    requireVocalConnectAccess: _ = !0,
                    boosters: f = {},
                    allowSnowflake: E
                } = e,
                h = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.split(" ").filter(e => "" !== e || t).map(e => {
                            let t = e.toLocaleLowerCase();
                            return {
                                queryLower: t,
                                exactQuery: RegExp("^".concat(x.default.escape(t)), "i"),
                                containQuery: RegExp(x.default.escape(t), "i"),
                                isFullMatch: !1
                            }
                        });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp("^".concat(x.default.escape(t).replace(" ", "( |-)")), "i"),
                            containQuery: RegExp(x.default.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0
                        })
                    }
                    return n
                }(n, c);
            t = null != i ? o(N.default.getChannels(i)[d]).map(e => e.channel).concat(v.default.computeAllActiveJoinedThreads(i)).value() : o(y.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(v.default.computeAllActiveJoinedThreads()).value();
            let g = {},
                m = [];
            for (let e of t) {
                var p, S, T, I, C;
                if (p = d, S = e.type, T = null != i, !(p === S || (T || (0, A.isGuildChannelType)(S)) && (p === N.GUILD_SELECTABLE_CHANNELS_KEY ? (0, A.isGuildSelectableChannelType)(S) || (0, A.isGuildVocalChannelType)(S) : p === N.GUILD_VOCAL_CHANNELS_KEY && (0, A.isGuildVocalChannelType)(S))) || (0, A.isGuildChannelType)(e.type) && !P.default.can(_ ? e.accessPermissions : K.Permissions.VIEW_CHANNEL, e) || !a(e)) continue;
                let t = [...h],
                    s = e.name.toLocaleLowerCase(),
                    o = E && n === e.id,
                    l = o ? 10 : ea(s, t, r);
                if (0 !== l) {
                    if (t.length > 0) {
                        for (let n of [function(e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                if (null == n) {
                                    var i;
                                    n = t[e.guild_id] = null === (i = O.default.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase()
                                }
                                return n
                            }(e, g), function(e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                if (null == n) {
                                    var i;
                                    n = t[e.parent_id] = null === (i = y.default.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase()
                                }
                                return n
                            }(e, g)]) {
                            if (null == n || "" === n) continue;
                            let e = ea(n, t, !1);
                            0 !== e && (l += .5 * e)
                        }
                        l = Math.min(6, l)
                    }
                    if (0 !== l && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || o)) {
                        ;
                        if (I = d, C = e.type, I === N.GUILD_SELECTABLE_CHANNELS_KEY && (0, A.isGuildVocalChannelType)(C)) l = Math.max(l - 1, .5);
                        m.push({
                            type: (0, A.isGuildVocalChannelType)(e.type) ? j.AutocompleterResultTypes.VOICE_CHANNEL : j.AutocompleterResultTypes.TEXT_CHANNEL,
                            record: e,
                            score: et(l, f[e.id]),
                            comparator: (0, u.computeChannelName)(e, w.default, M.default),
                            sortable: s
                        })
                    }
                }
            }
            return m.sort(l.default), null != s && m.length > s && (m.length = s), m
        },
        queryGuilds(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: i = !0,
                filter: s = X,
                boosters: r = {}
            } = e, a = "" === t ? "" : t.toLocaleLowerCase(), u = {
                exactQuery: RegExp("^".concat(x.default.escape(a)), "i"),
                containQuery: RegExp(x.default.escape(a), "i"),
                queryLower: a
            }, d = [], c = o(O.default.getGuilds()).values().value();
            for (let e of c) {
                if (!s(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ei(t, u, i);
                n > 0 && d.push({
                    type: j.AutocompleterResultTypes.GUILD,
                    record: e,
                    score: et(n, r[e.id]),
                    comparator: e.toString(),
                    sortable: t
                })
            }
            return d.sort(l.default), d.length > n && (d.length = n), d
        },
        queryGroupDMs(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: i = !0,
                filter: s = X,
                boosters: r = {}
            } = e, a = (0, H.stripDiacritics)((0, H.normalize)(t.toLocaleLowerCase())), d = {
                exactQuery: RegExp("^".concat(x.default.escape(a)), "i"),
                containQuery: RegExp(x.default.escape(a), "i"),
                queryLower: a
            }, c = o(y.default.getMutablePrivateChannels()).values().value(), _ = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !s(e)) continue;
                let t = (0, u.computeChannelName)(e, w.default, M.default).toLocaleLowerCase(),
                    n = (0, H.stripDiacritics)((0, H.normalize)(t)),
                    a = ei(n, d, i);
                a > 0 && _.push({
                    type: j.AutocompleterResultTypes.GROUP_DM,
                    record: e,
                    score: et(a, r[e.id]),
                    comparator: (0, u.computeChannelName)(e, w.default, M.default),
                    sortable: n
                })
            }
            return _.sort(l.default), _.length > n && (_.length = n), _
        },
        queryApplications(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: i = !0,
                filter: s = X
            } = e, r = t.toLocaleLowerCase(), a = {
                exactQuery: RegExp("^".concat(x.default.escape(r)), "i"),
                containQuery: RegExp(x.default.escape(r), "i"),
                queryLower: r
            }, o = ee(), u = [];
            for (let {
                    application: e
                }
                of o) {
                if (!s(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ei(t, a, i);
                n > 0 && u.push({
                    type: j.AutocompleterResultTypes.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                })
            }
            return u.sort(l.default), u.length > n && (u.length = n), u
        },
        querySKUs(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: i = !0,
                filter: s = X
            } = e, r = t.toLocaleLowerCase(), a = {
                exactQuery: RegExp("^".concat(x.default.escape(r)), "i"),
                containQuery: RegExp(x.default.escape(r), "i"),
                queryLower: r
            }, u = o(k.default.getSKUs()).values().value(), d = [];
            for (let e of u)
                if (e.type === K.SKUTypes.DURABLE_PRIMARY && s(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ei(t, a, i);
                    n > 0 && d.push({
                        type: j.AutocompleterResultTypes.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    })
                } return d.sort(l.default), d.length > n && (d.length = n), d
        },
        getRecentlyTalked: eo,
        queryMentionResults(e) {
            let {
                query: t,
                channel: n,
                canMentionEveryone: i = !1,
                canMentionHere: s = !0,
                canMentionUsers: a = !0,
                canMentionRoles: l = !0,
                includeAllGuildUsers: u = !1,
                includeNonMentionableRoles: d = !1,
                checkRecentlyTalkedOnEmptyQuery: c = !0,
                limit: _ = K.MAX_AUTOCOMPLETE_RESULTS,
                request: f,
                allowSnowflake: E = !1
            } = e, h = a ? (u && null != n.guild_id ? this.queryGuildUsers({
                guildId: n.guild_id,
                query: t,
                limit: _,
                checkRecentlyTalkedOnEmptyQuery: c,
                request: f,
                allowSnowflake: E
            }) : this.queryChannelUsers({
                channelId: n.id,
                query: t,
                limit: _,
                checkRecentlyTalkedOnEmptyQuery: c,
                allowSnowflake: E
            })).map(e => {
                let {
                    record: t,
                    score: i,
                    comparator: s
                } = e;
                return {
                    user: t,
                    score: i,
                    comparator: s,
                    nick: R.default.getNick(n.guild_id, t.id),
                    status: L.default.getStatus(t.id)
                }
            }) : [], g = h.length, m = t.toLowerCase(), p = [];
            if (g < _ && l) {
                let e = n.getGuildId(),
                    t = O.default.getGuild(e);
                null != t && (o(O.default.getRoles(t.id)).filter(t => {
                    let {
                        mentionable: n,
                        name: s,
                        id: a
                    } = t;
                    return (n || i || d) && (r(m, s.toLowerCase()) || E && m === a) && a !== B.default.castGuildIdAsEveryoneGuildRoleId(e)
                }).take(_ - g).forEach(e => {
                    p.push(e)
                }), g += p.length)
            }
            let S = [];
            return !n.isPrivate() && i && l && (g < _ && r(m, J().test) && (S.push(J()), g += 1), s && g < _ && r(m, $().test) && S.push($())), {
                users: h,
                globals: S,
                roles: p
            }
        },
        queryGuildMentionResults(e) {
            let {
                query: t,
                guildId: n,
                canMentionEveryone: i = !1,
                canMentionUsers: s = !0,
                canMentionRoles: a = !0,
                canMentionNonMentionableRoles: l = !1
            } = e, u = s ? this.queryGuildUsers({
                guildId: n,
                query: t
            }).map(e => ({
                ...e,
                status: L.default.getStatus(e.record.id)
            })) : [], c = u.length, _ = t.toLowerCase(), f = [];
            if (c < K.MAX_AUTOCOMPLETE_RESULTS && a) {
                let e = O.default.getGuild(n);
                null != e && (o(O.default.getRoles(e.id)).filter(e => {
                    let {
                        mentionable: t,
                        name: s,
                        id: a
                    } = e;
                    return (t || i || l) && r(_, s.toLowerCase()) && (0, d.isNotEveryoneRoleId)(n, a)
                }).take(K.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
                    f.push(e)
                }), c += f.length)
            }
            let E = [];
            return i && a && (c < K.MAX_AUTOCOMPLETE_RESULTS && r(_, J().test) && (E.push(J()), c += 1), c < K.MAX_AUTOCOMPLETE_RESULTS && r(_, $().test) && E.push($())), {
                users: u,
                globals: E,
                roles: f
            }
        },
        queryChoice(e) {
            let {
                query: t,
                choices: n,
                limit: i = 10,
                fuzzy: s = !0
            } = e, r = t.toLocaleLowerCase(), a = RegExp("^".concat(x.default.escape(r)), "i"), l = RegExp(x.default.escape(r), "i"), u = o(n).map((e, t) => {
                let n = ei(e.displayName.toLocaleLowerCase(), {
                    exactQuery: a,
                    containQuery: l,
                    queryLower: r
                }, s);
                return n > 0 ? {
                    choice: e,
                    score: n,
                    originalIndex: t
                } : null
            }).filter(V.isNotNullish).sortBy(e => -1 * e.score);
            return null !== i && (u = u.take(i)), u.value()
        },
        queryStaticRouteChannels(e) {
            let {
                query: t,
                guild: n
            } = e, i = t.toLocaleLowerCase(), s = {
                exactQuery: RegExp("^".concat(x.default.escape(i)), "i"),
                containQuery: RegExp(x.default.escape(i), "i"),
                queryLower: i
            }, r = ((0, E.canSeeGuildHome)(n.id) || (0, g.canSeeOnboardingHome)(n.id)) && !n.hasFeature(K.GuildFeatures.HUB), a = n.hasFeature(K.GuildFeatures.COMMUNITY), o = (0, h.isGuildOnboardingAvailable)(n) && n.hasFeature(K.GuildFeatures.COMMUNITY), l = [{
                id: W.StaticChannelId.SERVER_GUIDE,
                name: z.default.Messages.SERVER_GUIDE
            }, {
                id: W.StaticChannelId.CHANNEL_BROWSER,
                name: z.default.Messages.CHANNEL_BROWSER_TITLE
            }, {
                id: W.StaticChannelId.CUSTOMIZE_COMMUNITY,
                name: z.default.Messages.CHANNELS_AND_ROLES
            }], u = [];
            for (let e of l) {
                if (e.id === W.StaticChannelId.SERVER_GUIDE && !r || e.id === W.StaticChannelId.CHANNEL_BROWSER && !a || e.id === W.StaticChannelId.CUSTOMIZE_COMMUNITY && !o) continue;
                let t = e.name.toLocaleLowerCase(),
                    i = ei(t, s, !1);
                i > 0 && u.push(new A.UnknownChannelRecord({
                    id: e.id,
                    name: e.name,
                    type: K.ChannelTypes.UNKNOWN,
                    guild_id: n.id
                }))
            }
            return u
        },
        queryChannelResults(e) {
            let {
                query: t,
                channel: n,
                type: i = N.GUILD_SELECTABLE_CHANNELS_KEY,
                channelTypes: s
            } = e, r = this.queryChannels({
                query: t,
                guildId: n.getGuildId(),
                limit: void 0,
                fuzzy: void 0,
                filter: e => null == s || s.includes(e.type),
                type: i,
                allowEmptyQueries: !0
            }).map(e => e.record);
            return {
                channels: r
            }
        },
        queryApplicationCommandChannelResults(e) {
            let {
                query: t,
                channel: n,
                channelTypes: i,
                limit: s = K.MAX_AUTOCOMPLETE_RESULTS,
                allowSnowflake: r
            } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == i || i.includes(n.type)) && e.push(n), {
                    channels: e
                }
            }
            let a = [];
            for (let e of en) a = a.concat(this.queryChannels({
                query: t,
                guildId: n.guild_id,
                limit: s,
                fuzzy: !0,
                filter: e => null == i || i.includes(e.type),
                type: e,
                allowEmptyQueries: !0,
                requireVocalConnectAccess: !1,
                allowSnowflake: r
            }));
            return a = a.filter(e => {
                let {
                    record: t
                } = e;
                return "null" !== t.id
            }).sort(c.default), null != s && a.length > s && (a = a.slice(0, s)), {
                channels: a.map(e => e.record)
            }
        },
        queryChoiceResults(e) {
            let {
                query: t,
                choices: n
            } = e, i = this.queryChoice({
                query: t,
                choices: n,
                limit: null
            }).map(e => e.choice);
            return {
                choices: i
            }
        },
        queryEmojiResults(e) {
            let {
                query: t,
                channel: n,
                intention: i,
                maxCount: s = K.MAX_AUTOCOMPLETE_RESULTS,
                matchComparator: r
            } = e;
            I.FrecencyUserSettingsActionCreators.loadIfNecessary();
            let a = f.default.searchWithoutFetchingLatest({
                channel: n,
                query: t,
                count: s,
                intention: i,
                matchComparator: r
            });
            return {
                emojis: a
            }
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, X],
                {
                    stickerMetadata: s
                } = S.default,
                r = w.default.getCurrentUser(),
                a = new Set,
                l = [];
            for (let o of (I.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    u = (0, H.stripDiacritics)(e),
                    d = RegExp("^".concat(x.default.escape(u)), "i"),
                    c = RegExp("".concat(x.default.escape(u)), "i");
                s.forEach((s, o) => {
                    let u = 0,
                        _ = null,
                        f = S.default.getStickerById(o);
                    if (null == f || !i(f, (0, m.getStickerSendability)(f, r, n))) return;
                    for (let n of s) {
                        let {
                            type: i,
                            value: s
                        } = n, r = function(e) {
                            switch (e) {
                                case T.StickerMetadataTypes.STICKER_NAME:
                                    return 11;
                                case T.StickerMetadataTypes.CORRELATED_EMOJI:
                                    return 6;
                                case T.StickerMetadataTypes.TAG:
                                    return 1;
                                case T.StickerMetadataTypes.GUILD_NAME:
                                case T.StickerMetadataTypes.PACK_NAME:
                                    return 8;
                                default:
                                    return 1
                            }
                        }(i), a = 0;
                        t ? s === e ? a = 10 * r : d.test(s) ? a = 7 * r : (i === T.StickerMetadataTypes.GUILD_NAME || i === T.StickerMetadataTypes.PACK_NAME || i === T.StickerMetadataTypes.STICKER_NAME) && c.test(s) && (a = 5 * r) : s === e && (a = 10 * r, _ = s), a > u && (u = a, _ = s)
                    }
                    let E = p.default.stickerFrecencyWithoutFetchingLatest.getScore(o);
                    null != E && (u *= E / 100), u > 0 && null != _ && !a.has(f.id) && (a.add(f.id), l.push({
                        sticker: f,
                        comparator: _,
                        score: u
                    }))
                })
            }
            return 0 === (l = o(l).sortBy(e => -1 * e.score).value()).length && (l = Z), l
        },
        matchSentinel(e, t, n) {
            let i = Q.test(t);
            return !i && e === n
        },
        hasSameRoleAsUsername(e, t) {
            if (!t.isPomelo()) return !1;
            let n = O.default.getGuild(e.getGuildId()),
                i = null != n ? O.default.getRoles(n.id) : {};
            for (let {
                    name: e
                }
                of Object.values(i))
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1
        }
    }
}
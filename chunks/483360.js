function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
            return en
        }
    }), n("653041"), n("733860"), n("757143"), n("47120");
    var r = n("658722"),
        a = n.n(r),
        s = n("392711"),
        o = n.n(s),
        l = n("620490"),
        u = n("933557"),
        d = n("605436"),
        _ = n("565924"),
        c = n("710845"),
        E = n("339085"),
        I = n("859802"),
        T = n("31445"),
        f = n("931261"),
        S = n("285651"),
        h = n("822179"),
        A = n("926491"),
        m = n("373228"),
        N = n("601070"),
        p = n("675478"),
        O = n("131704"),
        R = n("598077"),
        C = n("592125"),
        g = n("984933"),
        L = n("271383"),
        v = n("430824"),
        D = n("375954"),
        M = n("496675"),
        y = n("158776"),
        P = n("699516"),
        U = n("944486"),
        b = n("914010"),
        G = n("594174"),
        w = n("55563"),
        B = n("823379"),
        k = n("892880"),
        V = n("700785"),
        x = n("226951"),
        F = n("709054"),
        H = n("624138"),
        Y = n("51144"),
        j = n("981631"),
        W = n("727785"),
        K = n("176505"),
        z = n("689938");
    let Z = new c.default("AutocompleteUtils"),
        X = () => !0,
        Q = /(\t|\s)/,
        q = [],
        J = (i = n("786074").default).MENTION_EVERYONE,
        $ = i.MENTION_HERE,
        ee = i.LAUNCHABLE_APPLICATIONS;

    function et() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 ? arguments[1] : void 0;
        return 1e3 * e * (null != t ? t : 1)
    }
    let en = [g.GUILD_SELECTABLE_CHANNELS_KEY, g.GUILD_VOCAL_CHANNELS_KEY, j.ChannelTypes.GUILD_CATEGORY];

    function ei(e, t) {
        let {
            exactQuery: n,
            containQuery: i,
            queryLower: r,
            isFullMatch: s
        } = t, o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        try {
            var l, u;
            if (n.test(e)) {
                if (e.toLocaleLowerCase() === r) return 10;
                if (!1 === s) {
                    let t = r.length / e.length;
                    return Math.max(1, 7 * t)
                }
                return 7
            }
            if (i.test(e)) return 5;
            if (l = r, u = e, l.split(/(?:,| )+/).every(e => RegExp(x.default.escape(e), "i").test(u))) return 3;
            if (o && a()(r, e)) return 1
        } catch (e) {
            Z.error(e)
        }
        return 0
    }

    function er(e) {
        return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
    }

    function ea(e) {
        let {
            query: t,
            members: n,
            limit: i,
            filter: r,
            allowSnowflake: s
        } = e, o = G.default.getUsers(), u = b.default.getGuildId(), d = t.toLocaleLowerCase(), _ = (0, H.normalize)(d), c = [], E = [], I = n.length, T = 0, f = 0;
        for (; T < I;) {
            var S, h, A, m, N, p, O, C, g;
            let e, i;
            let l = n[T];
            l instanceof R.default ? (i = l, e = null === (h = L.default.getNick(u, i.id)) || void 0 === h ? void 0 : h.toLocaleLowerCase()) : (e = null === (A = l.nick) || void 0 === A ? void 0 : A.toLocaleLowerCase(), i = o[l.userId]);
            let I = null === (S = Y.default.getGlobalName(i)) || void 0 === S ? void 0 : S.toLocaleLowerCase();
            if (null == r || r(i)) {
                let n = i.username.toLocaleLowerCase(),
                    r = (0, H.stripDiacritics)(n),
                    o = (0, H.normalize)(r),
                    l = null != e ? (0, H.stripDiacritics)(e) : null,
                    u = null != l ? (0, H.normalize)(l) : null,
                    T = null != I ? (0, H.stripDiacritics)(I) : null,
                    S = null != T ? (0, H.normalize)(T) : null;
                s && t === i.id || n.substring(0, d.length) === d || r.substring(0, d.length) === d || (null == e ? void 0 : e.substring(0, d.length)) === d || (null == l ? void 0 : l.substring(0, d.length)) === d || (null == I ? void 0 : I.substring(0, d.length)) === d || (null == T ? void 0 : T.substring(0, d.length)) === d ? c.push({
                    type: W.AutocompleterResultTypes.USER,
                    record: i,
                    score: 10,
                    comparator: null !== (m = null != I ? I : e) && void 0 !== m ? m : n,
                    sortable: null !== (N = null != T ? T : l) && void 0 !== N ? N : r
                }) : o.substring(0, _.length) === _ || (null == u ? void 0 : u.substring(0, _.length)) === _ || (null == S ? void 0 : S.substring(0, _.length)) === _ ? c.push({
                    type: W.AutocompleterResultTypes.USER,
                    record: i,
                    score: 1,
                    comparator: null !== (p = null != I ? I : e) && void 0 !== p ? p : n,
                    sortable: null !== (O = null != T ? T : l) && void 0 !== O ? O : r
                }) : f < 50 && (a()(d, r) || a()(_, o) || null != l && a()(d, l) || null != u && a()(_, u) || null != T && a()(d, T) || null != S && a()(_, S)) && (E.push({
                    type: W.AutocompleterResultTypes.USER,
                    record: i,
                    score: 1,
                    comparator: null !== (C = null != I ? I : e) && void 0 !== C ? C : n,
                    sortable: null !== (g = null != T ? T : l) && void 0 !== g ? g : r
                }), f += 1)
            }
            T += 1
        }
        return c.sort(l.default), c.length < i && (E.sort(l.default), c = c.concat(E.slice(0, Math.max(0, i - c.length)))), c.length > i && (c.length = i), c
    }

    function es(e, t, n) {
        let i = 0,
            r = null;
        for (let a of t) {
            let t = ei(e, a, n);
            t > i && (i = t, r = a)
        }
        return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), i
    }

    function eo(e, t) {
        let n = C.default.getChannel(e);
        return null == e || null == n ? [] : o()(D.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => G.default.getUser(e.author.id)).filter(e => {
            if (null == e || e.isNonUserBot()) return !1;
            let t = n.getGuildId();
            return null == t || er(L.default.getMember(t, e.id))
        }).map(e => {
            var t;
            let i = n.getGuildId(),
                r = null != i ? L.default.getMember(i, e.id) : null;
            return {
                type: W.AutocompleterResultTypes.USER,
                record: e,
                score: 0,
                comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : Y.default.getName(e)
            }
        }).take(t).value()
    }
    t.default = {
        queryFriends(e) {
            let {
                query: t,
                limit: n = 10,
                _fuzzy: i = !0,
                filter: r
            } = e;
            return ea({
                query: t,
                members: P.default.getFriendIDs().map(e => G.default.getUser(e)).filter(B.isNotNullish),
                limit: n,
                filter: r
            })
        },
        queryDMUsers(e) {
            let {
                query: t,
                limit: n = 10,
                filter: i
            } = e;
            return ea({
                query: t,
                members: C.default.getDMUserIds().map(e => G.default.getUser(e)).filter(B.isNotNullish),
                limit: n,
                filter: i
            })
        },
        queryChannelUsers(e) {
            let t, {
                    channelId: n,
                    query: i,
                    limit: r = 10,
                    request: a = !0,
                    checkRecentlyTalkedOnEmptyQuery: s = !0,
                    allowSnowflake: o = !1
                } = e,
                l = C.default.getChannel(n);
            if (null == l) return [];
            let u = l.isThread() ? C.default.getChannel(l.parent_id) : null,
                d = null != u ? u : l;
            if (null == d) return [];
            if (d.isPrivate()) {
                t = d.recipients.map(e => {
                    var t;
                    return {
                        userId: e,
                        nick: null !== (t = P.default.getNickname(e)) && void 0 !== t ? t : null
                    }
                });
                let e = G.default.getCurrentUser();
                null != e && t.push({
                    userId: e.id,
                    nick: null
                })
            } else {
                if (0 === i.length && s) {
                    let e = eo(l.id, r);
                    if (e.length > 0) return e
                }
                t = L.default.getMembers(d.guild_id).filter(er), a && k.default.requestMembers(d.guild_id, i, r)
            }
            return ea({
                query: i,
                members: t,
                limit: r,
                filter: e => d.isPrivate() || V.can({
                    permission: j.Permissions.VIEW_CHANNEL,
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
                request: r = !0,
                checkRecentlyTalkedOnEmptyQuery: a = !0,
                filter: s,
                allowSnowflake: o
            } = e;
            if (null == v.default.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = eo(U.default.getChannelId(t), i);
                if (e.length > 0) return e
            }
            let l = L.default.getMembers(t).filter(er);
            return r && n.length > 0 && k.default.requestMembers(t, n, i), ea({
                query: n,
                members: l,
                limit: i,
                filter: s,
                allowSnowflake: o
            })
        },
        queryUsers(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                i = arguments.length > 4 ? arguments[4] : void 0;
            return n && e.length > 0 && k.default.requestMembers(null, e, t), ea({
                query: e,
                members: o()(G.default.getUsers()).values().value(),
                limit: t,
                filter: i
            })
        },
        queryChannels(e) {
            let t, {
                    query: n,
                    guildId: i,
                    limit: r = j.MAX_AUTOCOMPLETE_RESULTS,
                    fuzzy: a = !0,
                    filter: s = X,
                    type: d = g.GUILD_SELECTABLE_CHANNELS_KEY,
                    allowEmptyQueries: _ = !1,
                    requireVocalConnectAccess: c = !0,
                    boosters: E = {},
                    allowSnowflake: I
                } = e,
                T = function(e) {
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
                }(n, _);
            t = null != i ? o()(g.default.getChannels(i)[d]).map(e => e.channel).concat(N.default.computeAllActiveJoinedThreads(i)).value() : o()(C.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(N.default.computeAllActiveJoinedThreads()).value();
            let f = {},
                S = [];
            for (let e of t) {
                var h, A, m, p, R;
                if (h = d, A = e.type, m = null != i, !(h === A || (m || (0, O.isGuildChannelType)(A)) && (h === g.GUILD_SELECTABLE_CHANNELS_KEY ? (0, O.isGuildSelectableChannelType)(A) || (0, O.isGuildVocalChannelType)(A) : h === g.GUILD_VOCAL_CHANNELS_KEY && (0, O.isGuildVocalChannelType)(A))) || (0, O.isGuildChannelType)(e.type) && !M.default.can(c ? e.accessPermissions : j.Permissions.VIEW_CHANNEL, e) || !s(e)) continue;
                let t = [...T],
                    r = e.name.toLocaleLowerCase(),
                    o = I && n === e.id,
                    l = o ? 10 : es(r, t, a);
                if (0 !== l) {
                    if (t.length > 0) {
                        for (let n of [function(e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                if (null == n) {
                                    var i;
                                    n = t[e.guild_id] = null === (i = v.default.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase()
                                }
                                return n
                            }(e, f), function(e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                if (null == n) {
                                    var i;
                                    n = t[e.parent_id] = null === (i = C.default.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase()
                                }
                                return n
                            }(e, f)]) {
                            if (null == n || "" === n) continue;
                            let e = es(n, t, !1);
                            0 !== e && (l += .5 * e)
                        }
                        l = Math.min(6, l)
                    }
                    if (0 !== l && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || o)) {
                        ;
                        if (p = d, R = e.type, p === g.GUILD_SELECTABLE_CHANNELS_KEY && (0, O.isGuildVocalChannelType)(R)) l = Math.max(l - 1, .5);
                        S.push({
                            type: (0, O.isGuildVocalChannelType)(e.type) ? W.AutocompleterResultTypes.VOICE_CHANNEL : W.AutocompleterResultTypes.TEXT_CHANNEL,
                            record: e,
                            score: et(l, E[e.id]),
                            comparator: (0, u.computeChannelName)(e, G.default, P.default),
                            sortable: r
                        })
                    }
                }
            }
            return S.sort(l.default), null != r && S.length > r && (S.length = r), S
        },
        queryGuilds(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: i = !0,
                filter: r = X,
                boosters: a = {}
            } = e, s = "" === t ? "" : t.toLocaleLowerCase(), u = {
                exactQuery: RegExp("^".concat(x.default.escape(s)), "i"),
                containQuery: RegExp(x.default.escape(s), "i"),
                queryLower: s
            }, d = [];
            for (let e of o()(v.default.getGuilds()).values().value()) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ei(t, u, i);
                n > 0 && d.push({
                    type: W.AutocompleterResultTypes.GUILD,
                    record: e,
                    score: et(n, a[e.id]),
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
                filter: r = X,
                boosters: a = {}
            } = e, s = (0, H.stripDiacritics)((0, H.normalize)(t.toLocaleLowerCase())), d = {
                exactQuery: RegExp("^".concat(x.default.escape(s)), "i"),
                containQuery: RegExp(x.default.escape(s), "i"),
                queryLower: s
            }, _ = o()(C.default.getMutablePrivateChannels()).values().value(), c = [];
            for (let e of _) {
                if (!e.isMultiUserDM() || !r(e)) continue;
                let t = (0, u.computeChannelName)(e, G.default, P.default).toLocaleLowerCase(),
                    n = (0, H.stripDiacritics)((0, H.normalize)(t)),
                    s = ei(n, d, i);
                s > 0 && c.push({
                    type: W.AutocompleterResultTypes.GROUP_DM,
                    record: e,
                    score: et(s, a[e.id]),
                    comparator: (0, u.computeChannelName)(e, G.default, P.default),
                    sortable: n
                })
            }
            return c.sort(l.default), c.length > n && (c.length = n), c
        },
        queryApplications(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: i = !0,
                filter: r = X
            } = e, a = t.toLocaleLowerCase(), s = {
                exactQuery: RegExp("^".concat(x.default.escape(a)), "i"),
                containQuery: RegExp(x.default.escape(a), "i"),
                queryLower: a
            }, o = ee(), u = [];
            for (let {
                    application: e
                }
                of o) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ei(t, s, i);
                n > 0 && u.push({
                    type: W.AutocompleterResultTypes.APPLICATION,
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
                filter: r = X
            } = e, a = t.toLocaleLowerCase(), s = {
                exactQuery: RegExp("^".concat(x.default.escape(a)), "i"),
                containQuery: RegExp(x.default.escape(a), "i"),
                queryLower: a
            }, u = o()(w.default.getSKUs()).values().value(), d = [];
            for (let e of u)
                if (e.type === j.SKUTypes.DURABLE_PRIMARY && r(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ei(t, s, i);
                    n > 0 && d.push({
                        type: W.AutocompleterResultTypes.SKU,
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
                canMentionHere: r = !0,
                canMentionUsers: s = !0,
                canMentionRoles: l = !0,
                includeAllGuildUsers: u = !1,
                includeNonMentionableRoles: d = !1,
                checkRecentlyTalkedOnEmptyQuery: _ = !0,
                limit: c = j.MAX_AUTOCOMPLETE_RESULTS,
                request: E,
                allowSnowflake: I = !1
            } = e, T = s ? (u && null != n.guild_id ? this.queryGuildUsers({
                guildId: n.guild_id,
                query: t,
                limit: c,
                checkRecentlyTalkedOnEmptyQuery: _,
                request: E,
                allowSnowflake: I
            }) : this.queryChannelUsers({
                channelId: n.id,
                query: t,
                limit: c,
                checkRecentlyTalkedOnEmptyQuery: _,
                allowSnowflake: I
            })).map(e => {
                let {
                    record: t,
                    score: i,
                    comparator: r
                } = e;
                return {
                    user: t,
                    score: i,
                    comparator: r,
                    nick: L.default.getNick(n.guild_id, t.id),
                    status: y.default.getStatus(t.id)
                }
            }) : [], f = T.length, S = t.toLowerCase(), h = [];
            if (f < c && l) {
                let e = n.getGuildId(),
                    t = v.default.getGuild(e);
                null != t && (o()(v.default.getRoles(t.id)).filter(t => {
                    let {
                        mentionable: n,
                        name: r,
                        id: s
                    } = t;
                    return (n || i || d) && (a()(S, r.toLowerCase()) || I && S === s) && s !== F.default.castGuildIdAsEveryoneGuildRoleId(e)
                }).take(c - f).forEach(e => {
                    h.push(e)
                }), f += h.length)
            }
            let A = [];
            return !n.isPrivate() && i && l && (f < c && a()(S, J().test) && (A.push(J()), f += 1), r && f < c && a()(S, $().test) && A.push($())), {
                users: T,
                globals: A,
                roles: h
            }
        },
        queryGuildMentionResults(e) {
            let {
                query: t,
                guildId: n,
                canMentionEveryone: i = !1,
                canMentionUsers: r = !0,
                canMentionRoles: s = !0,
                canMentionNonMentionableRoles: l = !1
            } = e, u = r ? this.queryGuildUsers({
                guildId: n,
                query: t
            }).map(e => ({
                ...e,
                status: y.default.getStatus(e.record.id)
            })) : [], _ = u.length, c = t.toLowerCase(), E = [];
            if (_ < j.MAX_AUTOCOMPLETE_RESULTS && s) {
                let e = v.default.getGuild(n);
                null != e && (o()(v.default.getRoles(e.id)).filter(e => {
                    let {
                        mentionable: t,
                        name: r,
                        id: s
                    } = e;
                    return (t || i || l) && a()(c, r.toLowerCase()) && (0, d.isNotEveryoneRoleId)(n, s)
                }).take(j.MAX_AUTOCOMPLETE_RESULTS - _).forEach(e => {
                    E.push(e)
                }), _ += E.length)
            }
            let I = [];
            return i && s && (_ < j.MAX_AUTOCOMPLETE_RESULTS && a()(c, J().test) && (I.push(J()), _ += 1), _ < j.MAX_AUTOCOMPLETE_RESULTS && a()(c, $().test) && I.push($())), {
                users: u,
                globals: I,
                roles: E
            }
        },
        queryChoice(e) {
            let {
                query: t,
                choices: n,
                limit: i = 10,
                fuzzy: r = !0
            } = e, a = t.toLocaleLowerCase(), s = RegExp("^".concat(x.default.escape(a)), "i"), l = RegExp(x.default.escape(a), "i"), u = o()(n).map((e, t) => {
                let n = ei(e.displayName.toLocaleLowerCase(), {
                    exactQuery: s,
                    containQuery: l,
                    queryLower: a
                }, r);
                return n > 0 ? {
                    choice: e,
                    score: n,
                    originalIndex: t
                } : null
            }).filter(B.isNotNullish).sortBy(e => -1 * e.score);
            return null !== i && (u = u.take(i)), u.value()
        },
        queryStaticRouteChannels(e) {
            let {
                query: t,
                guild: n
            } = e, i = t.toLocaleLowerCase(), r = {
                exactQuery: RegExp("^".concat(x.default.escape(i)), "i"),
                containQuery: RegExp(x.default.escape(i), "i"),
                queryLower: i
            }, a = ((0, I.canSeeGuildHome)(n.id) || (0, f.canSeeOnboardingHome)(n.id)) && !n.hasFeature(j.GuildFeatures.HUB), s = n.hasFeature(j.GuildFeatures.COMMUNITY), o = (0, T.isGuildOnboardingAvailable)(n) && n.hasFeature(j.GuildFeatures.COMMUNITY), l = [{
                id: K.StaticChannelId.SERVER_GUIDE,
                name: z.default.Messages.SERVER_GUIDE
            }, {
                id: K.StaticChannelId.CHANNEL_BROWSER,
                name: z.default.Messages.CHANNEL_BROWSER_TITLE
            }, {
                id: K.StaticChannelId.CUSTOMIZE_COMMUNITY,
                name: z.default.Messages.CHANNELS_AND_ROLES
            }], u = [];
            for (let e of l) {
                if ((e.id !== K.StaticChannelId.SERVER_GUIDE || !!a) && (e.id !== K.StaticChannelId.CHANNEL_BROWSER || !!s) && (e.id !== K.StaticChannelId.CUSTOMIZE_COMMUNITY || !!o)) ei(e.name.toLocaleLowerCase(), r, !1) > 0 && u.push(new O.UnknownChannelRecord({
                    id: e.id,
                    name: e.name,
                    type: j.ChannelTypes.UNKNOWN,
                    guild_id: n.id
                }))
            }
            return u
        },
        queryChannelResults(e) {
            let {
                query: t,
                channel: n,
                type: i = g.GUILD_SELECTABLE_CHANNELS_KEY,
                channelTypes: r
            } = e;
            return {
                channels: this.queryChannels({
                    query: t,
                    guildId: n.getGuildId(),
                    limit: void 0,
                    fuzzy: void 0,
                    filter: e => null == r || r.includes(e.type),
                    type: i,
                    allowEmptyQueries: !0
                }).map(e => e.record)
            }
        },
        queryApplicationCommandChannelResults(e) {
            let {
                query: t,
                channel: n,
                channelTypes: i,
                limit: r = j.MAX_AUTOCOMPLETE_RESULTS,
                allowSnowflake: a
            } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == i || i.includes(n.type)) && e.push(n), {
                    channels: e
                }
            }
            let s = [];
            for (let e of en) s = s.concat(this.queryChannels({
                query: t,
                guildId: n.guild_id,
                limit: r,
                fuzzy: !0,
                filter: e => null == i || i.includes(e.type),
                type: e,
                allowEmptyQueries: !0,
                requireVocalConnectAccess: !1,
                allowSnowflake: a
            }));
            return s = s.filter(e => {
                let {
                    record: t
                } = e;
                return "null" !== t.id
            }).sort(_.default), null != r && s.length > r && (s = s.slice(0, r)), {
                channels: s.map(e => e.record)
            }
        },
        queryChoiceResults(e) {
            let {
                query: t,
                choices: n
            } = e;
            return {
                choices: this.queryChoice({
                    query: t,
                    choices: n,
                    limit: null
                }).map(e => e.choice)
            }
        },
        queryEmojiResults(e) {
            let {
                query: t,
                channel: n,
                intention: i,
                maxCount: r = j.MAX_AUTOCOMPLETE_RESULTS,
                matchComparator: a
            } = e;
            return p.FrecencyUserSettingsActionCreators.loadIfNecessary(), {
                emojis: E.default.searchWithoutFetchingLatest({
                    channel: n,
                    query: t,
                    count: r,
                    intention: i,
                    matchComparator: a
                })
            }
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, X],
                {
                    stickerMetadata: r
                } = A.default,
                a = G.default.getCurrentUser(),
                s = new Set,
                l = [];
            for (let o of (p.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    u = (0, H.stripDiacritics)(e),
                    d = RegExp("^".concat(x.default.escape(u)), "i"),
                    _ = RegExp("".concat(x.default.escape(u)), "i");
                r.forEach((r, o) => {
                    let u = 0,
                        c = null,
                        E = A.default.getStickerById(o);
                    if (null == E || !i(E, (0, S.getStickerSendability)(E, a, n))) return;
                    for (let n of r) {
                        let {
                            type: i,
                            value: r
                        } = n, a = function(e) {
                            switch (e) {
                                case m.StickerMetadataTypes.STICKER_NAME:
                                    return 11;
                                case m.StickerMetadataTypes.CORRELATED_EMOJI:
                                    return 6;
                                case m.StickerMetadataTypes.TAG:
                                    return 1;
                                case m.StickerMetadataTypes.GUILD_NAME:
                                case m.StickerMetadataTypes.PACK_NAME:
                                    return 8;
                                default:
                                    return 1
                            }
                        }(i), s = 0;
                        t ? r === e ? s = 10 * a : d.test(r) ? s = 7 * a : (i === m.StickerMetadataTypes.GUILD_NAME || i === m.StickerMetadataTypes.PACK_NAME || i === m.StickerMetadataTypes.STICKER_NAME) && _.test(r) && (s = 5 * a) : r === e && (s = 10 * a, c = r), s > u && (u = s, c = r)
                    }
                    let I = h.default.stickerFrecencyWithoutFetchingLatest.getScore(o);
                    null != I && (u *= I / 100), u > 0 && null != c && !s.has(E.id) && (s.add(E.id), l.push({
                        sticker: E,
                        comparator: c,
                        score: u
                    }))
                })
            }
            return 0 === (l = o()(l).sortBy(e => -1 * e.score).value()).length && (l = q), l
        },
        matchSentinel: (e, t, n) => !Q.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.isPomelo()) return !1;
            let n = v.default.getGuild(e.getGuildId());
            for (let {
                    name: e
                }
                of Object.values(null != n ? v.default.getRoles(n.id) : {}))
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1
        }
    }
}
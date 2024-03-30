function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
            return eo
        }
    });
    var r, o = n("658722"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("539402"),
        l = n("534965"),
        c = n("898366"),
        f = n("928134"),
        d = n("35523"),
        _ = n("300983"),
        E = n("924504"),
        p = n("559015"),
        m = n("29221"),
        y = n("922747"),
        I = n("834306"),
        h = n("389712"),
        O = n("294463"),
        T = n("914535"),
        S = n("968574"),
        v = n("569492"),
        g = n("428009"),
        A = n("935741"),
        b = n("29604"),
        N = n("957808"),
        R = n("306912"),
        C = n("204394"),
        P = n("29884"),
        D = n("868447"),
        L = n("776982"),
        M = n("894288"),
        U = n("63116"),
        w = n("208454"),
        k = n("332716"),
        G = n("162677"),
        B = n("854748"),
        j = n("359017"),
        F = n("949011"),
        V = n("523018"),
        H = n("778513"),
        x = n("830567"),
        Y = n("281767"),
        W = n("225342"),
        K = n("928204"),
        z = n("941504");

    function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function q(e, t) {
        if (e) {
            if ("string" == typeof e) return X(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
        }
    }
    var Q = new d.default("AutocompleteUtils"),
        J = function() {
            return !0
        },
        Z = /(\t|\s)/,
        $ = [],
        ee = (r = n("532935").default).MENTION_EVERYONE,
        et = r.MENTION_HERE,
        en = r.LAUNCHABLE_APPLICATIONS;

    function er() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 ? arguments[1] : void 0;
        return 1e3 * e * (null != t ? t : 1)
    }
    var eo = [b.GUILD_SELECTABLE_CHANNELS_KEY, b.GUILD_VOCAL_CHANNELS_KEY, Y.ChannelTypes.GUILD_CATEGORY];

    function ei(e, t) {
        var n = t.exactQuery,
            r = t.containQuery,
            o = t.queryLower,
            a = t.isFullMatch,
            u = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        try {
            if (n.test(e)) {
                if (e.toLocaleLowerCase() === o) return 10;
                if (!1 === a) {
                    var s, l, c = o.length / e.length;
                    return Math.max(1, 7 * c)
                }
                return 7
            }
            if (r.test(e)) return 5;
            if (s = o, l = e, s.split(/(?:,| )+/).every(function(e) {
                    return RegExp(F.default.escape(e), "i").test(l)
                })) return 3;
            if (u && i()(o, e)) return 1
        } catch (e) {
            Q.error(e)
        }
        return 0
    }

    function ea(e) {
        return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
    }

    function eu(e) {
        for (var t = e.query, n = e.members, r = e.limit, o = e.filter, a = e.allowSnowflake, u = w.default.getUsers(), l = U.default.getGuildId(), c = t.toLocaleLowerCase(), f = (0, H.normalize)(c), d = [], _ = [], E = n.length, p = 0, m = 0; p < E;) {
            var y = n[p],
                I = void 0,
                h = void 0;
            if (T = y, null != (S = g.default) && "undefined" != typeof Symbol && S[Symbol.hasInstance] ? !!S[Symbol.hasInstance](T) : T instanceof S) h = y, I = null === (A = N.default.getNick(l, h.id)) || void 0 === A ? void 0 : A.toLocaleLowerCase();
            else I = null === (b = y.nick) || void 0 === b ? void 0 : b.toLocaleLowerCase(), h = u[y.userId];
            var O = null === (v = x.default.getGlobalName(h)) || void 0 === v ? void 0 : v.toLocaleLowerCase();
            if (null == o || o(h)) {
                var T, S, v, A, b, R, C, P, D, L, M, k = h.username.toLocaleLowerCase(),
                    G = (0, H.stripDiacritics)(k),
                    B = (0, H.normalize)(G),
                    j = null != I ? (0, H.stripDiacritics)(I) : null,
                    F = null != j ? (0, H.normalize)(j) : null,
                    V = null != O ? (0, H.stripDiacritics)(O) : null,
                    Y = null != V ? (0, H.normalize)(V) : null;
                a && t === h.id || k.substring(0, c.length) === c || G.substring(0, c.length) === c || (null == I ? void 0 : I.substring(0, c.length)) === c || (null == j ? void 0 : j.substring(0, c.length)) === c || (null == O ? void 0 : O.substring(0, c.length)) === c || (null == V ? void 0 : V.substring(0, c.length)) === c ? d.push({
                    type: W.AutocompleterResultTypes.USER,
                    record: h,
                    score: 10,
                    comparator: null !== (R = null != O ? O : I) && void 0 !== R ? R : k,
                    sortable: null !== (C = null != V ? V : j) && void 0 !== C ? C : G
                }) : B.substring(0, f.length) === f || (null == F ? void 0 : F.substring(0, f.length)) === f || (null == Y ? void 0 : Y.substring(0, f.length)) === f ? d.push({
                    type: W.AutocompleterResultTypes.USER,
                    record: h,
                    score: 1,
                    comparator: null !== (P = null != O ? O : I) && void 0 !== P ? P : k,
                    sortable: null !== (D = null != V ? V : j) && void 0 !== D ? D : G
                }) : m < 50 && (i()(c, G) || i()(f, B) || null != j && i()(c, j) || null != F && i()(f, F) || null != V && i()(c, V) || null != Y && i()(f, Y)) && (_.push({
                    type: W.AutocompleterResultTypes.USER,
                    record: h,
                    score: 1,
                    comparator: null !== (L = null != O ? O : I) && void 0 !== L ? L : k,
                    sortable: null !== (M = null != V ? V : j) && void 0 !== M ? M : G
                }), m += 1)
            }
            p += 1
        }
        return d.sort(s.default), d.length < r && (_.sort(s.default), d = d.concat(_.slice(0, Math.max(0, r - d.length)))), d.length > r && (d.length = r), d
    }

    function es(e, t, n) {
        var r = 0,
            o = null,
            i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var c = s.value,
                    f = ei(e, c, n);
                f > r && (r = f, o = c)
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != l.return && l.return()
            } finally {
                if (a) throw u
            }
        }
        return null != o && (o.isFullMatch ? t.length = 0 : t.splice(t.indexOf(o), 1)), r
    }

    function el(e, t) {
        var n = A.default.getChannel(e);
        return null == e || null == n ? [] : u()(C.default.getMessages(e).toArray()).reverse().uniqBy(function(e) {
            return e.author.id
        }).map(function(e) {
            return w.default.getUser(e.author.id)
        }).filter(function(e) {
            if (null == e || e.isNonUserBot()) return !1;
            var t = n.getGuildId();
            return null == t || ea(N.default.getMember(t, e.id))
        }).map(function(e) {
            var t, r = n.getGuildId(),
                o = null != r ? N.default.getMember(r, e.id) : null;
            return {
                type: W.AutocompleterResultTypes.USER,
                record: e,
                score: 0,
                comparator: null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : x.default.getName(e)
            }
        }).take(t).value()
    }
    t.default = {
        queryFriends: function(e) {
            var t = e.query,
                n = e.limit,
                r = (e._fuzzy, e.filter);
            return eu({
                query: t,
                members: L.default.getFriendIDs().map(function(e) {
                    return w.default.getUser(e)
                }).filter(G.isNotNullish),
                limit: void 0 === n ? 10 : n,
                filter: r
            })
        },
        queryDMUsers: function(e) {
            var t = e.query,
                n = e.limit,
                r = e.filter;
            return eu({
                query: t,
                members: A.default.getDMUserIds().map(function(e) {
                    return w.default.getUser(e)
                }).filter(G.isNotNullish),
                limit: void 0 === n ? 10 : n,
                filter: r
            })
        },
        queryChannelUsers: function(e) {
            var t, n = e.channelId,
                r = e.query,
                o = e.limit,
                i = void 0 === o ? 10 : o,
                a = e.request,
                u = e.checkRecentlyTalkedOnEmptyQuery,
                s = e.allowSnowflake,
                l = A.default.getChannel(n);
            if (null == l) return [];
            var c = l.isThread() ? A.default.getChannel(l.parent_id) : null,
                f = null != c ? c : l;
            if (null == f) return [];
            if (f.isPrivate()) {
                t = f.recipients.map(function(e) {
                    var t;
                    return {
                        userId: e,
                        nick: null !== (t = L.default.getNickname(e)) && void 0 !== t ? t : null
                    }
                });
                var d = w.default.getCurrentUser();
                null != d && t.push({
                    userId: d.id,
                    nick: null
                })
            } else {
                if (0 === r.length && (void 0 === u || u)) {
                    var _ = el(l.id, i);
                    if (_.length > 0) return _
                }
                t = N.default.getMembers(f.guild_id).filter(ea), (void 0 === a || a) && B.default.requestMembers(f.guild_id, r, i)
            }
            return eu({
                query: r,
                members: t,
                limit: i,
                filter: function(e) {
                    return f.isPrivate() || j.can({
                        permission: Y.Permissions.VIEW_CHANNEL,
                        user: e,
                        context: f
                    })
                },
                allowSnowflake: void 0 !== s && s
            })
        },
        queryGuildUsers: function(e) {
            var t = e.guildId,
                n = e.query,
                r = e.limit,
                o = void 0 === r ? 10 : r,
                i = e.request,
                a = e.checkRecentlyTalkedOnEmptyQuery,
                u = e.filter,
                s = e.allowSnowflake;
            if (null == R.default.getGuild(t)) return [];
            if (0 === n.length && (void 0 === a || a)) {
                var l = el(M.default.getChannelId(t), o);
                if (l.length > 0) return l
            }
            var c = N.default.getMembers(t).filter(ea);
            return (void 0 === i || i) && n.length > 0 && B.default.requestMembers(t, n, o), eu({
                query: n,
                members: c,
                limit: o,
                filter: u,
                allowSnowflake: s
            })
        },
        queryUsers: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                r = arguments.length > 4 ? arguments[4] : void 0;
            return n && e.length > 0 && B.default.requestMembers(null, e, t), eu({
                query: e,
                members: u()(w.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        },
        queryChannels: function(e) {
            var t = e.query,
                n = e.guildId,
                r = e.limit,
                o = void 0 === r ? Y.MAX_AUTOCOMPLETE_RESULTS : r,
                i = e.fuzzy,
                a = void 0 === i || i,
                c = e.filter,
                f = void 0 === c ? J : c,
                d = e.type,
                _ = void 0 === d ? b.GUILD_SELECTABLE_CHANNELS_KEY : d,
                E = e.allowEmptyQueries,
                p = e.requireVocalConnectAccess,
                m = void 0 === p || p,
                y = e.boosters,
                I = void 0 === y ? {} : y,
                h = e.allowSnowflake,
                O = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.split(" ").filter(function(e) {
                            return "" !== e || t
                        }).map(function(e) {
                            var t = e.toLocaleLowerCase();
                            return {
                                queryLower: t,
                                exactQuery: RegExp("^".concat(F.default.escape(t)), "i"),
                                containQuery: RegExp(F.default.escape(t), "i"),
                                isFullMatch: !1
                            }
                        });
                    if (e.includes(" ")) {
                        var r = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: r,
                            exactQuery: RegExp("^".concat(F.default.escape(r).replace(" ", "( |-)")), "i"),
                            containQuery: RegExp(F.default.escape(r).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0
                        })
                    }
                    return n
                }(t, void 0 !== E && E);
            M = null != n ? u()(b.default.getChannels(n)[_]).map(function(e) {
                return e.channel
            }).concat(T.default.computeAllActiveJoinedThreads(n)).value() : u()(A.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(T.default.computeAllActiveJoinedThreads()).value();
            var S = {},
                g = [],
                N = !0,
                C = !1,
                D = void 0;
            try {
                for (var M, U, k = M[Symbol.iterator](); !(N = (U = k.next()).done); N = !0) {
                    var G, B, j, V, H, x, K = U.value;
                    if (G = _, B = K.type, j = null != n, !(G === B || (j || (0, v.isGuildChannelType)(B)) && (G === b.GUILD_SELECTABLE_CHANNELS_KEY ? (0, v.isGuildSelectableChannelType)(B) || (0, v.isGuildVocalChannelType)(B) : G === b.GUILD_VOCAL_CHANNELS_KEY && (0, v.isGuildVocalChannelType)(B))) || (0, v.isGuildChannelType)(K.type) && !P.default.can(m ? K.accessPermissions : Y.Permissions.VIEW_CHANNEL, K) || !f(K)) continue;
                    var z = (V = O, function(e) {
                            if (Array.isArray(e)) return X(e)
                        }(V) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(V) || q(V) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        Q = K.name.toLocaleLowerCase(),
                        Z = h && t === K.id,
                        $ = Z ? 10 : es(Q, z, a);
                    if (0 !== $) {
                        if (z.length > 0) {
                            for (var ee = 0, et = [function(e, t) {
                                    if (null != e.guild_id) {
                                        var n, r = t[e.guild_id];
                                        return null == r && (r = t[e.guild_id] = null === (n = R.default.getGuild(e.guild_id)) || void 0 === n ? void 0 : n.toString().toLocaleLowerCase()), r
                                    }
                                }(K, S), function(e, t) {
                                    if (null != e.parent_id) {
                                        var n, r = t[e.parent_id];
                                        return null == r && (r = t[e.parent_id] = null === (n = A.default.getChannel(e.parent_id)) || void 0 === n ? void 0 : n.name.toLocaleLowerCase()), r
                                    }
                                }(K, S)]; ee < et.length; ee++) {
                                var en = et[ee];
                                if (null != en && "" !== en) {
                                    var eo = es(en, z, !1);
                                    0 !== eo && ($ += .5 * eo)
                                }
                            }
                            $ = Math.min(6, $)
                        }
                        if (0 !== $ && !(z.length > 1) && (1 !== z.length || z[0].isFullMatch || Z)) {
                            ;
                            if (H = _, x = K.type, H === b.GUILD_SELECTABLE_CHANNELS_KEY && (0, v.isGuildVocalChannelType)(x)) $ = Math.max($ - 1, .5);
                            g.push({
                                type: (0, v.isGuildVocalChannelType)(K.type) ? W.AutocompleterResultTypes.VOICE_CHANNEL : W.AutocompleterResultTypes.TEXT_CHANNEL,
                                record: K,
                                score: er($, I[K.id]),
                                comparator: (0, l.computeChannelName)(K, w.default, L.default),
                                sortable: Q
                            })
                        }
                    }
                }
            } catch (e) {
                C = !0, D = e
            } finally {
                try {
                    !N && null != k.return && k.return()
                } finally {
                    if (C) throw D
                }
            }
            return g.sort(s.default), null != o && g.length > o && (g.length = o), g
        },
        queryGuilds: function(e) {
            var t = e.query,
                n = e.limit,
                r = void 0 === n ? 10 : n,
                o = e.fuzzy,
                i = void 0 === o || o,
                a = e.filter,
                l = void 0 === a ? J : a,
                c = e.boosters,
                f = void 0 === c ? {} : c,
                d = "" === t ? "" : t.toLocaleLowerCase(),
                _ = {
                    exactQuery: RegExp("^".concat(F.default.escape(d)), "i"),
                    containQuery: RegExp(F.default.escape(d), "i"),
                    queryLower: d
                },
                E = [],
                p = u()(R.default.getGuilds()).values().value(),
                m = !0,
                y = !1,
                I = void 0;
            try {
                for (var h, O = p[Symbol.iterator](); !(m = (h = O.next()).done); m = !0) {
                    var T = h.value;
                    if (l(T)) {
                        var S = T.name.toLocaleLowerCase(),
                            v = ei(S, _, i);
                        v > 0 && E.push({
                            type: W.AutocompleterResultTypes.GUILD,
                            record: T,
                            score: er(v, f[T.id]),
                            comparator: T.toString(),
                            sortable: S
                        })
                    }
                }
            } catch (e) {
                y = !0, I = e
            } finally {
                try {
                    !m && null != O.return && O.return()
                } finally {
                    if (y) throw I
                }
            }
            return E.sort(s.default), E.length > r && (E.length = r), E
        },
        queryGroupDMs: function(e) {
            var t = e.query,
                n = e.limit,
                r = void 0 === n ? 10 : n,
                o = e.fuzzy,
                i = void 0 === o || o,
                a = e.filter,
                c = void 0 === a ? J : a,
                f = e.boosters,
                d = void 0 === f ? {} : f,
                _ = (0, H.stripDiacritics)((0, H.normalize)(t.toLocaleLowerCase())),
                E = {
                    exactQuery: RegExp("^".concat(F.default.escape(_)), "i"),
                    containQuery: RegExp(F.default.escape(_), "i"),
                    queryLower: _
                },
                p = u()(A.default.getMutablePrivateChannels()).values().value(),
                m = [],
                y = !0,
                I = !1,
                h = void 0;
            try {
                for (var O, T = p[Symbol.iterator](); !(y = (O = T.next()).done); y = !0) {
                    var S = O.value;
                    if (S.isMultiUserDM() && c(S)) {
                        var v = (0, l.computeChannelName)(S, w.default, L.default).toLocaleLowerCase(),
                            g = (0, H.stripDiacritics)((0, H.normalize)(v)),
                            b = ei(g, E, i);
                        b > 0 && m.push({
                            type: W.AutocompleterResultTypes.GROUP_DM,
                            record: S,
                            score: er(b, d[S.id]),
                            comparator: (0, l.computeChannelName)(S, w.default, L.default),
                            sortable: g
                        })
                    }
                }
            } catch (e) {
                I = !0, h = e
            } finally {
                try {
                    !y && null != T.return && T.return()
                } finally {
                    if (I) throw h
                }
            }
            return m.sort(s.default), m.length > r && (m.length = r), m
        },
        queryApplications: function(e) {
            var t = e.query,
                n = e.limit,
                r = void 0 === n ? 10 : n,
                o = e.fuzzy,
                i = void 0 === o || o,
                a = e.filter,
                u = void 0 === a ? J : a,
                l = t.toLocaleLowerCase(),
                c = {
                    exactQuery: RegExp("^".concat(F.default.escape(l)), "i"),
                    containQuery: RegExp(F.default.escape(l), "i"),
                    queryLower: l
                },
                f = en(),
                d = [],
                _ = !0,
                E = !1,
                p = void 0;
            try {
                for (var m, y = f[Symbol.iterator](); !(_ = (m = y.next()).done); _ = !0) {
                    var I = m.value.application;
                    if (u(I)) {
                        var h = I.name.toLocaleLowerCase(),
                            O = ei(h, c, i);
                        O > 0 && d.push({
                            type: W.AutocompleterResultTypes.APPLICATION,
                            record: I,
                            score: O,
                            comparator: I.name,
                            sortable: h
                        })
                    }
                }
            } catch (e) {
                E = !0, p = e
            } finally {
                try {
                    !_ && null != y.return && y.return()
                } finally {
                    if (E) throw p
                }
            }
            return d.sort(s.default), d.length > r && (d.length = r), d
        },
        querySKUs: function(e) {
            var t = e.query,
                n = e.limit,
                r = void 0 === n ? 10 : n,
                o = e.fuzzy,
                i = void 0 === o || o,
                a = e.filter,
                l = void 0 === a ? J : a,
                c = t.toLocaleLowerCase(),
                f = {
                    exactQuery: RegExp("^".concat(F.default.escape(c)), "i"),
                    containQuery: RegExp(F.default.escape(c), "i"),
                    queryLower: c
                },
                d = u()(k.default.getSKUs()).values().value(),
                _ = [],
                E = !0,
                p = !1,
                m = void 0;
            try {
                for (var y, I = d[Symbol.iterator](); !(E = (y = I.next()).done); E = !0) {
                    var h = y.value;
                    if (h.type === Y.SKUTypes.DURABLE_PRIMARY && l(h)) {
                        var O = h.name.toLocaleLowerCase(),
                            T = ei(O, f, i);
                        T > 0 && _.push({
                            type: W.AutocompleterResultTypes.SKU,
                            record: h,
                            score: T,
                            comparator: h.name,
                            sortable: O
                        })
                    }
                }
            } catch (e) {
                p = !0, m = e
            } finally {
                try {
                    !E && null != I.return && I.return()
                } finally {
                    if (p) throw m
                }
            }
            return _.sort(s.default), _.length > r && (_.length = r), _
        },
        getRecentlyTalked: el,
        queryMentionResults: function(e) {
            var t = e.query,
                n = e.channel,
                r = e.canMentionEveryone,
                o = void 0 !== r && r,
                a = e.canMentionHere,
                s = e.canMentionUsers,
                l = e.canMentionRoles,
                c = void 0 === l || l,
                f = e.includeAllGuildUsers,
                d = e.includeNonMentionableRoles,
                _ = void 0 !== d && d,
                E = e.checkRecentlyTalkedOnEmptyQuery,
                p = void 0 === E || E,
                m = e.limit,
                y = void 0 === m ? Y.MAX_AUTOCOMPLETE_RESULTS : m,
                I = e.request,
                h = e.allowSnowflake,
                O = void 0 !== h && h,
                T = void 0 === s || s ? (void 0 !== f && f && null != n.guild_id ? this.queryGuildUsers({
                    guildId: n.guild_id,
                    query: t,
                    limit: y,
                    checkRecentlyTalkedOnEmptyQuery: p,
                    request: I,
                    allowSnowflake: O
                }) : this.queryChannelUsers({
                    channelId: n.id,
                    query: t,
                    limit: y,
                    checkRecentlyTalkedOnEmptyQuery: p,
                    allowSnowflake: O
                })).map(function(e) {
                    var t = e.record;
                    return {
                        user: t,
                        score: e.score,
                        comparator: e.comparator,
                        nick: N.default.getNick(n.guild_id, t.id),
                        status: D.default.getStatus(t.id)
                    }
                }) : [],
                S = T.length,
                v = t.toLowerCase(),
                g = [];
            if (S < y && c) {
                var A = n.getGuildId(),
                    b = R.default.getGuild(A);
                null != b && (u()(R.default.getRoles(b.id)).filter(function(e) {
                    var t = e.mentionable,
                        n = e.name,
                        r = e.id;
                    return (t || o || _) && (i()(v, n.toLowerCase()) || O && v === r) && r !== V.default.castGuildIdAsEveryoneGuildRoleId(A)
                }).take(y - S).forEach(function(e) {
                    g.push(e)
                }), S += g.length)
            }
            var C = [];
            return !n.isPrivate() && o && c && (S < y && i()(v, ee().test) && (C.push(ee()), S += 1), (void 0 === a || a) && S < y && i()(v, et().test) && C.push(et())), {
                users: T,
                globals: C,
                roles: g
            }
        },
        queryGuildMentionResults: function(e) {
            var t = e.query,
                n = e.guildId,
                r = e.canMentionEveryone,
                o = void 0 !== r && r,
                a = e.canMentionUsers,
                s = e.canMentionRoles,
                l = void 0 === s || s,
                f = e.canMentionNonMentionableRoles,
                d = void 0 !== f && f,
                _ = void 0 === a || a ? this.queryGuildUsers({
                    guildId: n,
                    query: t
                }).map(function(e) {
                    var t, n;
                    return t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, o, i;
                                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = i
                            })
                        }
                        return e
                    }({}, e), n = (n = {
                        status: D.default.getStatus(e.record.id)
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t
                }) : [],
                E = _.length,
                p = t.toLowerCase(),
                m = [];
            if (E < Y.MAX_AUTOCOMPLETE_RESULTS && l) {
                var y = R.default.getGuild(n);
                null != y && (u()(R.default.getRoles(y.id)).filter(function(e) {
                    var t = e.mentionable,
                        r = e.name,
                        a = e.id;
                    return (t || o || d) && i()(p, r.toLowerCase()) && (0, c.isNotEveryoneRoleId)(n, a)
                }).take(Y.MAX_AUTOCOMPLETE_RESULTS - E).forEach(function(e) {
                    m.push(e)
                }), E += m.length)
            }
            var I = [];
            return o && l && (E < Y.MAX_AUTOCOMPLETE_RESULTS && i()(p, ee().test) && (I.push(ee()), E += 1), E < Y.MAX_AUTOCOMPLETE_RESULTS && i()(p, et().test) && I.push(et())), {
                users: _,
                globals: I,
                roles: m
            }
        },
        queryChoice: function(e) {
            var t = e.query,
                n = e.choices,
                r = e.limit,
                o = void 0 === r ? 10 : r,
                i = e.fuzzy,
                a = void 0 === i || i,
                s = t.toLocaleLowerCase(),
                l = RegExp("^".concat(F.default.escape(s)), "i"),
                c = RegExp(F.default.escape(s), "i"),
                f = u()(n).map(function(e, t) {
                    var n = ei(e.displayName.toLocaleLowerCase(), {
                        exactQuery: l,
                        containQuery: c,
                        queryLower: s
                    }, a);
                    return n > 0 ? {
                        choice: e,
                        score: n,
                        originalIndex: t
                    } : null
                }).filter(G.isNotNullish).sortBy(function(e) {
                    return -1 * e.score
                });
            return null !== o && (f = f.take(o)), f.value()
        },
        queryStaticRouteChannels: function(e) {
            var t = e.query,
                n = e.guild,
                r = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp("^".concat(F.default.escape(r)), "i"),
                    containQuery: RegExp(F.default.escape(r), "i"),
                    queryLower: r
                },
                i = ((0, E.canSeeGuildHome)(n.id) || (0, m.canSeeOnboardingHome)(n.id)) && !n.hasFeature(Y.GuildFeatures.HUB),
                a = n.hasFeature(Y.GuildFeatures.COMMUNITY),
                u = (0, p.isGuildOnboardingAvailable)(n) && n.hasFeature(Y.GuildFeatures.COMMUNITY),
                s = [{
                    id: K.StaticChannelId.SERVER_GUIDE,
                    name: z.default.Messages.SERVER_GUIDE
                }, {
                    id: K.StaticChannelId.CHANNEL_BROWSER,
                    name: z.default.Messages.CHANNEL_BROWSER_TITLE
                }, {
                    id: K.StaticChannelId.CUSTOMIZE_COMMUNITY,
                    name: z.default.Messages.CHANNELS_AND_ROLES
                }],
                l = [],
                c = !0,
                f = !1,
                d = void 0;
            try {
                for (var _, y = s[Symbol.iterator](); !(c = (_ = y.next()).done); c = !0) {
                    var I = _.value;
                    if ((I.id !== K.StaticChannelId.SERVER_GUIDE || i) && (I.id !== K.StaticChannelId.CHANNEL_BROWSER || a) && (I.id !== K.StaticChannelId.CUSTOMIZE_COMMUNITY || u)) {
                        var h = I.name.toLocaleLowerCase();
                        ei(h, o, !1) > 0 && l.push(new v.UnknownChannelRecord({
                            id: I.id,
                            name: I.name,
                            type: Y.ChannelTypes.UNKNOWN,
                            guild_id: n.id
                        }))
                    }
                }
            } catch (e) {
                f = !0, d = e
            } finally {
                try {
                    !c && null != y.return && y.return()
                } finally {
                    if (f) throw d
                }
            }
            return l
        },
        queryChannelResults: function(e) {
            var t = e.query,
                n = e.channel,
                r = e.type,
                o = void 0 === r ? b.GUILD_SELECTABLE_CHANNELS_KEY : r,
                i = e.channelTypes;
            return {
                channels: this.queryChannels({
                    query: t,
                    guildId: n.getGuildId(),
                    limit: void 0,
                    fuzzy: void 0,
                    filter: function(e) {
                        return null == i || i.includes(e.type)
                    },
                    type: o,
                    allowEmptyQueries: !0
                }).map(function(e) {
                    return e.record
                })
            }
        },
        queryApplicationCommandChannelResults: function(e) {
            var t = e.query,
                n = e.channel,
                r = e.channelTypes,
                o = e.limit,
                i = void 0 === o ? Y.MAX_AUTOCOMPLETE_RESULTS : o,
                a = e.allowSnowflake;
            if (null == n.guild_id) {
                var u = [];
                return (null == r || r.includes(n.type)) && u.push(n), {
                    channels: u
                }
            }
            var s = [],
                l = !0,
                c = !1,
                d = void 0;
            try {
                for (var _, E = eo[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) {
                    var p = _.value;
                    s = s.concat(this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: i,
                        fuzzy: !0,
                        filter: function(e) {
                            return null == r || r.includes(e.type)
                        },
                        type: p,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: a
                    }))
                }
            } catch (e) {
                c = !0, d = e
            } finally {
                try {
                    !l && null != E.return && E.return()
                } finally {
                    if (c) throw d
                }
            }
            return s = s.filter(function(e) {
                return "null" !== e.record.id
            }).sort(f.default), null != i && s.length > i && (s = s.slice(0, i)), {
                channels: s.map(function(e) {
                    return e.record
                })
            }
        },
        queryChoiceResults: function(e) {
            var t = e.query,
                n = e.choices;
            return {
                choices: this.queryChoice({
                    query: t,
                    choices: n,
                    limit: null
                }).map(function(e) {
                    return e.choice
                })
            }
        },
        queryEmojiResults: function(e) {
            var t = e.query,
                n = e.channel,
                r = e.intention,
                o = e.maxCount,
                i = void 0 === o ? Y.MAX_AUTOCOMPLETE_RESULTS : o,
                a = e.matchComparator;
            return S.FrecencyUserSettingsActionCreators.loadIfNecessary(), {
                emojis: _.default.searchWithoutFetchingLatest({
                    channel: n,
                    query: t,
                    count: i,
                    intention: r,
                    matchComparator: a
                })
            }
        },
        queryStickers: function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = (_ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, J], E = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(_) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(_, E) || q(_, E) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                r = n[0],
                o = n[1],
                i = h.default.stickerMetadata,
                a = w.default.getCurrentUser(),
                s = new Set,
                l = [];
            S.FrecencyUserSettingsActionCreators.loadIfNecessary();
            var c = !0,
                f = !1,
                d = void 0;
            try {
                for (var _, E, p, m = e[Symbol.iterator](); !(c = (p = m.next()).done); c = !0) ! function() {
                    var e = p.value;
                    if ("" === e) return;
                    var n = e.toLocaleLowerCase(),
                        u = (0, H.stripDiacritics)(n),
                        c = RegExp("^".concat(F.default.escape(u)), "i"),
                        f = RegExp("".concat(F.default.escape(u)), "i");
                    i.forEach(function(e, i) {
                        var u = 0,
                            d = null,
                            _ = h.default.getStickerById(i);
                        if (null != _ && o(_, (0, y.getStickerSendability)(_, a, r))) {
                            var E = !0,
                                p = !1,
                                m = void 0;
                            try {
                                for (var T, S = e[Symbol.iterator](); !(E = (T = S.next()).done); E = !0) {
                                    var v = T.value,
                                        g = v.type,
                                        A = v.value,
                                        b = function(e) {
                                            switch (e) {
                                                case O.StickerMetadataTypes.STICKER_NAME:
                                                    return 11;
                                                case O.StickerMetadataTypes.CORRELATED_EMOJI:
                                                    return 6;
                                                case O.StickerMetadataTypes.TAG:
                                                    return 1;
                                                case O.StickerMetadataTypes.GUILD_NAME:
                                                case O.StickerMetadataTypes.PACK_NAME:
                                                    return 8;
                                                default:
                                                    return 1
                                            }
                                        }(g),
                                        N = 0;
                                    t ? A === n ? N = 10 * b : c.test(A) ? N = 7 * b : (g === O.StickerMetadataTypes.GUILD_NAME || g === O.StickerMetadataTypes.PACK_NAME || g === O.StickerMetadataTypes.STICKER_NAME) && f.test(A) && (N = 5 * b) : A === n && (N = 10 * b, d = A), N > u && (u = N, d = A)
                                }
                            } catch (e) {
                                p = !0, m = e
                            } finally {
                                try {
                                    !E && null != S.return && S.return()
                                } finally {
                                    if (p) throw m
                                }
                            }
                            var R = I.default.stickerFrecencyWithoutFetchingLatest.getScore(i);
                            null != R && (u *= R / 100), u > 0 && null != d && !s.has(_.id) && (s.add(_.id), l.push({
                                sticker: _,
                                comparator: d,
                                score: u
                            }))
                        }
                    })
                }()
            } catch (e) {
                f = !0, d = e
            } finally {
                try {
                    !c && null != m.return && m.return()
                } finally {
                    if (f) throw d
                }
            }
            return 0 === (l = u()(l).sortBy(function(e) {
                return -1 * e.score
            }).value()).length && (l = $), l
        },
        matchSentinel: function(e, t, n) {
            return !Z.test(t) && e === n
        },
        hasSameRoleAsUsername: function(e, t) {
            if (!t.isPomelo()) return !1;
            var n = R.default.getGuild(e.getGuildId()),
                r = null != n ? R.default.getRoles(n.id) : {},
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = Object.values(r)[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value.name;
                    if (t.username.startsWith(l.toLowerCase())) return !0
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            return !1
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hydrateInitialGuild: function() {
            return L
        },
        hydratePreviouslyUnavailableGuild: function() {
            return k
        },
        hydrateReadyPayloadPrioritized: function() {
            return P
        },
        hydrateReadySupplementalPayload: function() {
            return R
        },
        preloadReadyPayloadData: function() {
            return C
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("931983"),
        s = n("365215"),
        l = n("627725"),
        c = n("967362"),
        f = n("781639"),
        d = n("104473"),
        _ = n("35523"),
        E = n("300983"),
        p = n("389712"),
        m = n("569492"),
        y = n("306912"),
        I = n("879547"),
        h = n("593607");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e) {
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
    }

    function S(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function v(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var g = new _.default("ReadyPayloadUtils"),
        A = {},
        b = null,
        N = {};

    function R(e, t) {
        var n, r = e.guilds,
            o = e.merged_members,
            i = e.merged_presences,
            a = v(e, ["guilds", "merged_members", "merged_presences"]),
            u = M(N, null == i ? void 0 : i.friends),
            s = null !== (n = null == r ? void 0 : r.map(function(e, t) {
                var n = M(N, null == i ? void 0 : i.guilds[t]),
                    r = M(N, null == o ? void 0 : o[t]);
                return S(T({}, e), {
                    unavailable: void 0 === e.voice_states,
                    presences: n,
                    members: r
                })
            })) && void 0 !== n ? n : [],
            l = D(t, r, function(e) {
                return {
                    id: e.id,
                    members: e.members,
                    presences: e.presences,
                    embedded_activities: e.embedded_activities,
                    voice_states: e.voice_states,
                    unavailable: !1
                }
            });
        return null != l && s.push(l), N = {}, S(T({}, a), {
            presences: u,
            guilds: s
        })
    }

    function C() {
        var e = u.default.database();
        return Promise.all([(0, d.isCacheEnabled)() ? s.default.getCommittedVersions() : Promise.resolve({}), (0, d.isCacheEnabled)() ? c.default.getGuildIds() : Promise.resolve(new Set), null != e ? l.default.okAsync(e) : Promise.resolve(!1)]).then(function(e) {
            var t, n, r = (n = 3, function(e) {
                if (Array.isArray(e)) return e
            }(t = e) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }());
            return {
                guildVersions: r[0],
                guildChannels: r[1],
                databaseOk: r[2]
            }
        })
    }

    function P(e, t, n) {
        var r, i = e.users,
            s = e.relationships,
            l = e.private_channels,
            c = e.merged_members,
            d = e.guilds,
            _ = v(e, ["users", "relationships", "private_channels", "merged_members", "guilds"]);
        (function(e) {
            null != u.default.database() && !1 === e.databaseOk && f.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), A = {};
            var t = Object.values(y.default.getGuilds()),
                n = E.default.getGuilds(),
                r = p.default.getRawStickersByGuild(),
                o = I.default.getReadStatesByChannel(),
                i = !0,
                a = !1,
                s = void 0;
            try {
                for (var l, c = t[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                    var d, _, m, O = l.value;
                    O.id in e.guildVersions && e.guildChannels.has(O.id) && (A[O.id] = {
                        properties: h.toServer(O),
                        roles: y.default.getRoles(O.id),
                        emojis: null !== (_ = null === (d = n[O.id]) || void 0 === d ? void 0 : d.rawEmojis) && void 0 !== _ ? _ : null,
                        stickers: null !== (m = r.get(O.id)) && void 0 !== m ? m : null,
                        readStates: o
                    })
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !i && null != c.return && c.return()
                } finally {
                    if (a) throw s
                }
            }
        })(n);
        var m = M(N = a().keyBy(i, function(e) {
            return e.id
        }), s);
        null == l || l.forEach(function(e) {
            var t = e.recipient_ids;
            null != t && (e.recipients = t.map(function(e) {
                return o()(null != N[e], "Missing user in compressed ready payload"), N[e]
            })), delete e.recipient_ids
        });
        var O = null !== (r = null == d ? void 0 : d.map(function(e, t) {
                return !0 === e.unavailable ? e : (e.members = M(N, null == c ? void 0 : c[t]), w(e))
            })) && void 0 !== r ? r : [],
            g = D(t, d, function(e) {
                return w(e)
            });
        return null != g && O.push(g), S(T({}, _), {
            users: i,
            presences: [],
            relationships: m,
            guilds: O,
            private_channels: null != l ? l : []
        })
    }

    function D(e, t, n) {
        return null == b || b.identifyTime !== e || null != t && t.some(function(e) {
            return e.id === b.guild.id
        }) ? null : n(b.guild)
    }

    function L(e, t) {
        var n, r, o, i = y.default.getGuild(e.id),
            a = k(e, null == i ? void 0 : {
                properties: h.toServer(i),
                roles: y.default.getRoles(i.id),
                emojis: null !== (r = null === (n = E.default.getGuilds()[i.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== r ? r : null,
                stickers: null !== (o = p.default.getRawStickersByGuild().get(i.id)) && void 0 !== o ? o : null,
                readStates: {}
            });
        return b = {
            guild: e,
            identifyTime: t
        }, a
    }

    function M(e, t) {
        var n = [];
        return null == t || t.forEach(function(t) {
            if (null != t) {
                var r = t.user_id;
                null != r && (o()(null != e[r], "Missing user[".concat(r, "] in compressed ready payload")), t.user = e[r]), delete t.user_id, n.push(t)
            }
        }), n
    }

    function U(e) {
        var t = A[e];
        return delete A[e], t
    }

    function w(e) {
        var t, n, r, o, i, a, u, s, l, c, f, d, _ = U(e.id);
        if ("partial" !== e.data_mode) return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null !== (o = null === (r = e.threads) || void 0 === r ? void 0 : r.map(function(t) {
                return (0, m.createChannelRecordFromServer)(t, e.id)
            })) && void 0 !== o ? o : [],
            threadMessages: G(e.threads),
            channels: e.channels.map(function(t) {
                return t.guild_id = e.id, (0, m.createChannelRecordFromServer)(t, e.id)
            }),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
        if (null == _) throw g.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
        return {
            id: e.id,
            dataMode: e.data_mode,
            channels: null,
            channelUpdates: {
                writes: null !== (i = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(function(t) {
                    return (0, m.createChannelRecordFromServer)(t, e.id)
                })) && void 0 !== i ? i : [],
                deletes: null !== (a = e.partial_updates.deleted_channel_ids) && void 0 !== a ? a : []
            },
            channelTimestampUpdates: e.channel_updates,
            emojis: null == _.emojis ? null : B(_.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
            emojiUpdates: {
                writes: null !== (u = e.partial_updates.emojis) && void 0 !== u ? u : [],
                deletes: null !== (s = e.partial_updates.deleted_emoji_ids) && void 0 !== s ? s : []
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: null !== (l = e.properties) && void 0 !== l ? l : null,
            roles: h.filterRoleDeletes(e.id, _.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
            stage_instances: e.stage_instances,
            stickers: null == _.stickers ? null : B(_.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
            stickerUpdates: {
                writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
                deletes: null !== (f = e.partial_updates.deleted_sticker_ids) && void 0 !== f ? f : []
            },
            unableToSyncDeletes: e.unable_to_sync_deletes,
            threads: null !== (d = null === (n = e.threads) || void 0 === n ? void 0 : n.map(function(t) {
                return (0, m.createChannelRecordFromServer)(t, e.id)
            })) && void 0 !== d ? d : [],
            threadMessages: G(e.threads),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        }
    }

    function k(e, t) {
        var n, r, o, i, a, u, s, l, c, f, d, _;
        if (null == t && (t = U(e.id)), "partial" !== e.data_mode) return {
            id: e.id,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null !== (i = null === (o = e.threads) || void 0 === o ? void 0 : o.map(function(t) {
                return (0, m.createChannelRecordFromServer)(t, e.id)
            })) && void 0 !== i ? i : [],
            threadMessages: G(e.threads),
            channels: e.channels.map(function(t) {
                return t.guild_id = e.id, (0, m.createChannelRecordFromServer)(t, e.id)
            }),
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
        if (null == t) throw g.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
        return {
            id: e.id,
            channels: null,
            channelUpdates: {
                writes: null !== (a = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(function(t) {
                    return (0, m.createChannelRecordFromServer)(t, e.id)
                })) && void 0 !== a ? a : [],
                deletes: null !== (u = e.partial_updates.deleted_channel_ids) && void 0 !== u ? u : []
            },
            channelTimestampUpdates: e.channel_updates,
            embedded_activities: e.embedded_activities,
            emojis: null == t.emojis ? null : B(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
            emojiUpdates: {
                writes: null !== (s = e.partial_updates.emojis) && void 0 !== s ? s : [],
                deletes: null !== (l = e.partial_updates.deleted_emoji_ids) && void 0 !== l ? l : []
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            presences: e.presences,
            properties: null !== (c = e.properties) && void 0 !== c ? c : t.properties,
            roles: h.filterRoleDeletes(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
            stage_instances: e.stage_instances,
            stickers: null == t.stickers ? null : B(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
            stickerUpdates: {
                writes: null !== (f = e.partial_updates.stickers) && void 0 !== f ? f : [],
                deletes: null !== (d = e.partial_updates.deleted_sticker_ids) && void 0 !== d ? d : []
            },
            unableToSyncDeletes: e.unable_to_sync_deletes,
            threads: null !== (_ = null === (r = e.threads) || void 0 === r ? void 0 : r.map(function(t) {
                return (0, m.createChannelRecordFromServer)(t, e.id)
            })) && void 0 !== _ ? _ : [],
            threadMessages: G(e.threads),
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        }
    }

    function G(e) {
        var t = [];
        if (null != e) {
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    null != u.most_recent_message && t.push(u.most_recent_message)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        }
        return t
    }

    function B(e, t, n) {
        t = null != t ? t : [];
        var r = new Set((null != n ? n : []).concat(t.map(function(e) {
            return e.id
        })));
        return e.filter(function(e) {
            return !r.has(e.id)
        }).concat(t)
    }
}
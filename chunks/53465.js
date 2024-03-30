function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createResumeAnalytics: function() {
            return d
        },
        getConnectionPath: function() {
            return c
        },
        getReadyPayloadByteSizeAnalytics: function() {
            return f
        },
        logReadyPayloadReceived: function() {
            return l
        },
        logResumeAnalytics: function() {
            return _
        }
    });
    var r = n("757167");
    n("179870");
    var o = n("117459"),
        i = n("208454"),
        a = n("870331"),
        u = n("281767");

    function s(e, t) {
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

    function l(e, t, n, i, s) {
        var l, c, f, d, _, E = function(e) {
            var t = e._trace,
                n = {};
            try {
                var r = JSON.parse(t);
                null != r[0] && "" !== r[0] && r[0].startsWith("gateway-") && (n.identify_total_server_duration_ms = Math.floor(r[1].micros / 1e3)),
                    function e(t, n) {
                        if (null != t && t.length > 0)
                            for (var r = 0; r < t.length; r += 2) {
                                var o = t[r],
                                    i = t[r + 1];
                                n(o, i.micros), e(i.calls, n)
                            }
                    }(r, function(e, t) {
                        "start_session" === e ? n.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3))
                    })
            } catch (e) {}
            return n
        }(t);
        null != i && r.default.addDetail("payload_size(kb)", Math.round(i.uncompressed_byte_size / 1024)), r.default.addDetail("server_time(ms)", null !== (f = E.identify_total_server_duration_ms) && void 0 !== f ? f : 0);
        var p = (l = function(e) {
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
        }({}, i, E, function(e) {
            var t = e.guilds,
                n = 0,
                r = 0;
            return t.forEach(function(e) {
                if (!e.unavailable) {
                    var t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                    null != t && null != t.forEach && t.forEach(function(e) {
                        r++, e.type === u.ChannelTypes.GUILD_CATEGORY && n++
                    })
                }
            }), {
                num_guilds: t.length,
                num_guild_channels: r,
                num_guild_category_channels: n
            }
        }(t), s), c = (c = {
            duration_ms_since_identify_start: n - e.identifyStartTime,
            duration_ms_since_connection_start: n - e.connectionStartTime,
            duration_ms_since_emit_start: Date.now() - n,
            is_reconnect: e.hasConnectedOnce,
            is_fast_connect: e.isFastConnect,
            did_force_clear_guild_hashes: e.didForceClearGuildHashes,
            identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
            identify_compressed_byte_size: e.identifyCompressedByteSize,
            had_cache_at_startup: null !== (d = e.analytics.hadCacheAtStartup) && void 0 !== d && d,
            used_cache_at_startup: null !== (_ = e.analytics.usedCacheAtStartup) && void 0 !== _ && _
        }, c), Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(c)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
        }), l);
        o.default.attachReadyPayloadProperties(p), a.default.track(u.AnalyticEvents.READY_PAYLOAD_RECEIVED, p, {
            logEventProperties: !0
        })
    }

    function c(e) {
        try {
            var t, n = function(e) {
                return null == e ? null : function e(t, n) {
                    if (null == t) return "";
                    for (var r = "", o = 0; o < t.length; o += 2) r += "\n".concat(n).concat(t[o], ": ").concat(t[o + 1].micros / 1e3) + e(t[o + 1].calls, n + "|  ");
                    return r
                }(JSON.parse(e), "")
            }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
            if (null != n) return n
        } catch (e) {}
        return null != e._trace ? e._trace.join(" -> ") : "???"
    }

    function f(e) {
        var t, n, r = Date.now(),
            o = e.guilds,
            i = e.merged_presences,
            a = e.merged_members,
            u = e.read_state,
            l = e.private_channels,
            c = e.user_guild_settings,
            f = e.user_settings,
            d = e.user_settings_proto,
            _ = e.experiments,
            E = e.guild_experiments,
            p = e.relationships,
            m = e.users,
            y = s(e, ["guilds", "merged_presences", "merged_members", "read_state", "private_channels", "user_guild_settings", "user_settings", "user_settings_proto", "experiments", "guild_experiments", "relationships", "users"]),
            I = [],
            h = [],
            O = [],
            T = [],
            S = [],
            v = [],
            g = [],
            A = [];
        return o.forEach(function(e) {
            if (!e.unavailable) {
                var t, n = null !== (t = e.properties) && void 0 !== t ? t : {},
                    r = n.features,
                    o = s(n, ["features"]),
                    i = e.threads,
                    a = e.guild_scheduled_events,
                    u = s(e, ["threads", "guild_scheduled_events"]);
                I.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), h.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), O.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), T.push(i), S.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), v.push(r), g.push(a), A.push(u, o)
            }
        }), {
            presences_size: JSON.stringify(null !== (t = null == i ? void 0 : i.friends) && void 0 !== t ? t : []).length,
            users_size: JSON.stringify(m).length,
            read_states_size: JSON.stringify(u).length,
            private_channels_size: JSON.stringify(l).length,
            user_settings_size: JSON.stringify(null != f ? f : "").length + (null != d ? d : "").length,
            experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != E ? E : []).length,
            user_guild_settings_size: JSON.stringify(c).length,
            relationships_size: JSON.stringify(p).length,
            remaining_data_size: JSON.stringify(null != y ? y : {}).length,
            guild_channels_size: JSON.stringify(I).length,
            guild_members_size: JSON.stringify(null != a ? a : []).length,
            guild_presences_size: JSON.stringify(null !== (n = null == i ? void 0 : i.guilds) && void 0 !== n ? n : []).length,
            guild_roles_size: JSON.stringify(h).length,
            guild_emojis_size: JSON.stringify(O).length,
            guild_threads_size: JSON.stringify(T).length,
            guild_stickers_size: JSON.stringify(S).length,
            guild_events_size: JSON.stringify(g).length,
            guild_features_size: JSON.stringify(v).length,
            guild_remaining_data_size: JSON.stringify(A).length,
            size_metrics_duration_ms: Date.now() - r
        }
    }

    function d(e) {
        return {
            connectTime: null != e ? e : 0,
            numEvents: 0,
            largestWaitTime: 0,
            dispatchTime: 0,
            totalWaitTime: 0,
            initialWaitTime: 0,
            startTime: performance.now(),
            lastUpdateTime: performance.now()
        }
    }

    function _(e) {
        var t;
        !(!(null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && a.default.track(u.AnalyticEvents.CONNECTION_RESUMED, {
            connect_time_ms: e.connectTime,
            resume_time_ms: Math.floor(performance.now() - e.startTime),
            num_events: e.numEvents,
            largest_wait_time_ms: Math.floor(e.largestWaitTime),
            initial_wait_time_ms: Math.floor(e.initialWaitTime),
            total_wait_time_ms: Math.floor(e.totalWaitTime),
            total_dispatch_time_ms: Math.floor(e.dispatchTime)
        }, {
            logEventProperties: !0
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        logReadyPayloadReceived: function() {
            return l
        },
        getConnectionPath: function() {
            return u
        },
        getReadyPayloadByteSizeAnalytics: function() {
            return d
        },
        createResumeAnalytics: function() {
            return c
        },
        logResumeAnalytics: function() {
            return f
        }
    }), n("424973");
    var i = n("102053");
    n("704744");
    var s = n("410912"),
        r = n("697218"),
        a = n("599110"),
        o = n("49111");

    function l(e, t, n, r, l) {
        var u, d, c;
        let f = function(e) {
            let {
                _trace: t
            } = e, n = {};
            try {
                let e = JSON.parse(t);
                null != e[0] && "" !== e[0] && e[0].startsWith("gateway-") && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                    function e(t, n) {
                        if (null != t && t.length > 0)
                            for (let i = 0; i < t.length; i += 2) {
                                let s = t[i],
                                    r = t[i + 1];
                                n(s, r.micros), e(r.calls, n)
                            }
                    }(e, (e, t) => {
                        "start_session" === e ? n.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3))
                    })
            } catch (e) {}
            return n
        }(t);
        null != r && i.default.addDetail("payload_size(kb)", Math.round(r.uncompressed_byte_size / 1024)), i.default.addDetail("server_time(ms)", null !== (u = f.identify_total_server_duration_ms) && void 0 !== u ? u : 0);
        let _ = {
            ...r,
            ...f,
            ... function(e) {
                let {
                    guilds: t
                } = e, n = 0, i = 0;
                return t.forEach(e => {
                    if (e.unavailable) return;
                    let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                    null != t && null != t.forEach && t.forEach(e => {
                        i++, e.type === o.ChannelTypes.GUILD_CATEGORY && n++
                    })
                }), {
                    num_guilds: t.length,
                    num_guild_channels: i,
                    num_guild_category_channels: n
                }
            }(t),
            ...l,
            duration_ms_since_identify_start: n - e.identifyStartTime,
            duration_ms_since_connection_start: n - e.connectionStartTime,
            duration_ms_since_emit_start: Date.now() - n,
            is_reconnect: e.hasConnectedOnce,
            is_fast_connect: e.isFastConnect,
            did_force_clear_guild_hashes: e.didForceClearGuildHashes,
            identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
            identify_compressed_byte_size: e.identifyCompressedByteSize,
            had_cache_at_startup: null !== (d = e.analytics.hadCacheAtStartup) && void 0 !== d && d,
            used_cache_at_startup: null !== (c = e.analytics.usedCacheAtStartup) && void 0 !== c && c
        };
        s.default.attachReadyPayloadProperties(_), a.default.track(o.AnalyticEvents.READY_PAYLOAD_RECEIVED, _, {
            logEventProperties: !0
        })
    }

    function u(e) {
        try {
            var t;
            let n = function(e) {
                if (null == e) return null;
                let t = JSON.parse(e);
                return function e(t, n) {
                    if (null == t) return "";
                    let i = "";
                    for (let s = 0; s < t.length; s += 2) i += "\n".concat(n).concat(t[s], ": ").concat(t[s + 1].micros / 1e3) + e(t[s + 1].calls, n + "|  ");
                    return i
                }(t, "")
            }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
            if (null != n) return n
        } catch (e) {}
        return null != e._trace ? e._trace.join(" -> ") : "???"
    }

    function d(e) {
        var t, n;
        let i = Date.now(),
            {
                guilds: s,
                merged_presences: r,
                merged_members: a,
                read_state: o,
                private_channels: l,
                user_guild_settings: u,
                user_settings: d,
                user_settings_proto: c,
                experiments: f,
                guild_experiments: _,
                relationships: h,
                users: E,
                ...g
            } = e,
            m = [],
            p = [],
            S = [],
            v = [],
            T = [],
            I = [],
            C = [],
            A = [];
        return s.forEach(e => {
            var t;
            if (e.unavailable) return;
            let {
                features: n,
                ...i
            } = null !== (t = e.properties) && void 0 !== t ? t : {}, {
                threads: s,
                guild_scheduled_events: r,
                ...a
            } = e;
            m.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), p.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), S.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), v.push(s), T.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), I.push(n), C.push(r), A.push(a, i)
        }), {
            presences_size: JSON.stringify(null !== (t = null == r ? void 0 : r.friends) && void 0 !== t ? t : []).length,
            users_size: JSON.stringify(E).length,
            read_states_size: JSON.stringify(o).length,
            private_channels_size: JSON.stringify(l).length,
            user_settings_size: JSON.stringify(null != d ? d : "").length + (null != c ? c : "").length,
            experiments_size: JSON.stringify(null != f ? f : []).length + JSON.stringify(null != _ ? _ : []).length,
            user_guild_settings_size: JSON.stringify(u).length,
            relationships_size: JSON.stringify(h).length,
            remaining_data_size: JSON.stringify(null != g ? g : {}).length,
            guild_channels_size: JSON.stringify(m).length,
            guild_members_size: JSON.stringify(null != a ? a : []).length,
            guild_presences_size: JSON.stringify(null !== (n = null == r ? void 0 : r.guilds) && void 0 !== n ? n : []).length,
            guild_roles_size: JSON.stringify(p).length,
            guild_emojis_size: JSON.stringify(S).length,
            guild_threads_size: JSON.stringify(v).length,
            guild_stickers_size: JSON.stringify(T).length,
            guild_events_size: JSON.stringify(C).length,
            guild_features_size: JSON.stringify(I).length,
            guild_remaining_data_size: JSON.stringify(A).length,
            size_metrics_duration_ms: Date.now() - i
        }
    }

    function c(e) {
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

    function f(e) {
        var t;
        !(!(null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && a.default.track(o.AnalyticEvents.CONNECTION_RESUMED, {
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
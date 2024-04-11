function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createResumeAnalytics: function() {
            return _
        },
        getConnectionPath: function() {
            return u
        },
        getReadyPayloadByteSizeAnalytics: function() {
            return d
        },
        logReadyPayloadReceived: function() {
            return l
        },
        logResumeAnalytics: function() {
            return c
        }
    }), n("653041");
    var i = n("956067");
    n("17089");
    var r = n("218543"),
        s = n("594174"),
        a = n("626135"),
        o = n("981631");

    function l(e, t, n, s, l) {
        var u, d, _;
        let c = function(e) {
            let {
                _trace: t
            } = e, n = {};
            try {
                let e = JSON.parse(t);
                null != e[0] && "" !== e[0] && e[0].startsWith("gateway-") && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                    function e(t, n) {
                        if (null != t && t.length > 0)
                            for (let i = 0; i < t.length; i += 2) {
                                let r = t[i],
                                    s = t[i + 1];
                                n(r, s.micros), e(s.calls, n)
                            }
                    }(e, (e, t) => {
                        "start_session" === e ? n.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3))
                    })
            } catch (e) {}
            return n
        }(t);
        null != s && i.default.addDetail("payload_size(kb)", Math.round(s.uncompressed_byte_size / 1024)), i.default.addDetail("server_time(ms)", null !== (u = c.identify_total_server_duration_ms) && void 0 !== u ? u : 0);
        let E = {
            ...s,
            ...c,
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
            used_cache_at_startup: null !== (_ = e.analytics.usedCacheAtStartup) && void 0 !== _ && _
        };
        r.default.attachReadyPayloadProperties(E), a.default.track(o.AnalyticEvents.READY_PAYLOAD_RECEIVED, E, {
            logEventProperties: !0
        })
    }

    function u(e) {
        try {
            var t;
            let n = function(e) {
                return null == e ? null : function e(t, n) {
                    if (null == t) return "";
                    let i = "";
                    for (let r = 0; r < t.length; r += 2) i += "\n".concat(n).concat(t[r], ": ").concat(t[r + 1].micros / 1e3) + e(t[r + 1].calls, n + "|  ");
                    return i
                }(JSON.parse(e), "")
            }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
            if (null != n) return n
        } catch (e) {}
        return null != e._trace ? e._trace.join(" -> ") : "???"
    }

    function d(e) {
        var t, n;
        let i = Date.now(),
            {
                guilds: r,
                merged_presences: s,
                merged_members: a,
                read_state: o,
                private_channels: l,
                user_guild_settings: u,
                user_settings: d,
                user_settings_proto: _,
                experiments: c,
                guild_experiments: E,
                relationships: I,
                users: T,
                ...f
            } = e,
            S = [],
            A = [],
            h = [],
            m = [],
            N = [],
            O = [],
            p = [],
            R = [];
        return r.forEach(e => {
            var t;
            if (e.unavailable) return;
            let {
                features: n,
                ...i
            } = null !== (t = e.properties) && void 0 !== t ? t : {}, {
                threads: r,
                guild_scheduled_events: s,
                ...a
            } = e;
            S.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), A.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), h.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), m.push(r), N.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), O.push(n), p.push(s), R.push(a, i)
        }), {
            presences_size: JSON.stringify(null !== (t = null == s ? void 0 : s.friends) && void 0 !== t ? t : []).length,
            users_size: JSON.stringify(T).length,
            read_states_size: JSON.stringify(o).length,
            private_channels_size: JSON.stringify(l).length,
            user_settings_size: JSON.stringify(null != d ? d : "").length + (null != _ ? _ : "").length,
            experiments_size: JSON.stringify(null != c ? c : []).length + JSON.stringify(null != E ? E : []).length,
            user_guild_settings_size: JSON.stringify(u).length,
            relationships_size: JSON.stringify(I).length,
            remaining_data_size: JSON.stringify(null != f ? f : {}).length,
            guild_channels_size: JSON.stringify(S).length,
            guild_members_size: JSON.stringify(null != a ? a : []).length,
            guild_presences_size: JSON.stringify(null !== (n = null == s ? void 0 : s.guilds) && void 0 !== n ? n : []).length,
            guild_roles_size: JSON.stringify(A).length,
            guild_emojis_size: JSON.stringify(h).length,
            guild_threads_size: JSON.stringify(m).length,
            guild_stickers_size: JSON.stringify(N).length,
            guild_events_size: JSON.stringify(p).length,
            guild_features_size: JSON.stringify(O).length,
            guild_remaining_data_size: JSON.stringify(R).length,
            size_metrics_duration_ms: Date.now() - i
        }
    }

    function _(e) {
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

    function c(e) {
        var t;
        !(!(null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && a.default.track(o.AnalyticEvents.CONNECTION_RESUMED, {
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
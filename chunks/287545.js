function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return K
        },
        getActiveAnalyticsSessionIDs: function() {
            return W
        }
    }), n("653041"), n("47120");
    var i = n("512722"),
        r = n.n(i),
        s = n("153832"),
        a = n("570140"),
        o = n("475179"),
        l = n("317770"),
        u = n("728345"),
        d = n("812206"),
        _ = n("358221"),
        c = n("42352"),
        E = n("131704"),
        I = n("314897"),
        T = n("592125"),
        f = n("19780"),
        S = n("944486"),
        h = n("594174"),
        A = n("626135"),
        m = n("358085"),
        N = n("24933"),
        O = n("566620"),
        p = n("317381"),
        R = n("969345"),
        C = n("148720"),
        g = n("266820"),
        L = n("782769"),
        D = n("964517"),
        v = n("761122"),
        M = n("983695"),
        y = n("917107"),
        P = n("701488"),
        U = n("981631"),
        b = n("689938");

    function G(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let w = {},
        k = {};

    function B(e) {
        var t;
        return {
            releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, v.default)((0, m.getOS)())].release_phase
        }
    }
    async function V(e) {
        let {
            channelId: t,
            applicationId: n,
            analyticsLocations: i
        } = e, r = T.default.getChannel(t), s = null == r ? void 0 : r.getGuildId(), a = h.default.getCurrentUser();
        if (null == r || null == a) return;
        let o = p.default.getShelfActivities(s),
            l = N.default.getState().shelfOrder,
            u = 0 === p.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
            d = (0, R.default)({
                applicationId: n,
                activityConfigs: o
            }),
            E = 1 + l.findIndex(e => e === n),
            {
                releasePhase: I
            } = B(d),
            f = await (0, c.default)();
        k[n] = e => {
            var t, s, o;
            w[n] = e, A.default.track(U.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                channel_id: r.id,
                guild_id: r.getGuildId(),
                media_session_id: e.mediaSessionIds[0],
                activity_session_id: e.activitySessionId,
                application_id: n,
                location_stack: i,
                user_premium_tier: a.premiumType,
                raw_thermal_state: f,
                n_participants: _.default.getUserParticipantCount(r.id),
                is_activity_start: u,
                release_phase: I,
                activity_premium_tier_requirement: null == d ? void 0 : null === (t = d.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                shelf_rank: null == d ? void 0 : null === (s = d.activity) || void 0 === s ? void 0 : s.shelf_rank,
                shelf_sorted_rank: E > 0 ? E : null,
                activity_user_session_id: e.activityUserSessionId,
                channel_type: r.type
            }), A.default.track(U.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                location_stack: i,
                channel_id: r.id,
                channel_type: r.type,
                guild_id: r.getGuildId(),
                application_id: n,
                instance_id: e.instanceId,
                initial_media_session_id: e.mediaSessionIds[0],
                activity_user_session_id: e.activityUserSessionId,
                raw_thermal_state: f,
                is_activity_start: u,
                shelf_rank: null == d ? void 0 : null === (o = d.activity) || void 0 === o ? void 0 : o.shelf_rank,
                shelf_sorted_rank: E > 0 ? E : null
            })
        }
    }
    async function F(e) {
        var t, n;
        let {
            channelId: i,
            applicationId: r
        } = e, s = w[r], a = T.default.getChannel(i), o = p.default.getEmbeddedActivityDurationMs(i, r), l = h.default.getCurrentUser(), u = null == a ? void 0 : a.getGuildId();
        if (null == s || null == a || null == l) return;
        let d = p.default.getShelfActivities(u),
            _ = (0, R.default)({
                applicationId: r,
                activityConfigs: d
            }),
            {
                releasePhase: E
            } = B(_),
            I = await (0, c.default)();
        A.default.track(U.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
            channel_id: a.id,
            guild_id: a.getGuildId(),
            media_session_id: s.mediaSessionIds[0],
            activity_session_id: s.activitySessionId,
            application_id: r,
            duration_ms: o,
            user_premium_tier: l.premiumType,
            raw_thermal_state: I,
            release_phase: E,
            activity_premium_tier_requirement: null == _ ? void 0 : null === (t = _.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == _ ? void 0 : null === (n = _.activity) || void 0 === n ? void 0 : n.shelf_rank,
            activity_user_session_id: s.activityUserSessionId,
            channel_type: a.type,
            media_session_ids: s.mediaSessionIds
        }), A.default.track(U.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: a.id,
            guild_id: a.getGuildId(),
            application_id: r,
            instance_ids: [s.instanceId],
            media_session_ids: s.mediaSessionIds,
            activity_user_session_id: s.activityUserSessionId,
            raw_thermal_state: I,
            duration_ms: o
        }), delete k[r], delete w[r]
    }

    function x(e) {
        let {
            channelId: t,
            embeddedActivity: n,
            connections: i,
            updateCode: r
        } = e, s = I.default.getId(), a = i.find(e => e.user_id === s);
        Y(t, n, n.application_id, n.activity_id, null == a ? void 0 : a.user_id, r === P.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED)
    }

    function H(e) {
        let {
            location: t,
            applicationId: n,
            instanceId: i,
            participants: r
        } = e, s = I.default.getId(), a = p.default.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.instanceId === i), o = r.find(e => e.user_id === s);
        null != a && Y(t.channel_id, a, n, i, null == o ? void 0 : o.user_id, !1)
    }

    function Y(e, t, n, i, r, a) {
        var l, u;
        let d = p.default.getEmbeddedActivitiesForChannel(e),
            _ = T.default.getChannel(e);
        if (a && null !== (u = null == _ ? void 0 : _.isPrivate()) && void 0 !== u && u && d.length <= 1 && null == r && o.default.selectParticipant(e, null), null == r) return;
        let c = f.default.getMediaSessionId(),
            E = (0, D.default)(t),
            I = null == c && (null == _ ? void 0 : _.isVocal()) === !0 && (null == _ ? void 0 : _.isPrivate()) === !1;
        null != E && !I && (null === (l = k[n]) || void 0 === l || l.call(k, {
            activitySessionId: E,
            activityUserSessionId: (0, s.v4)(),
            instanceId: i,
            mediaSessionIds: null != c ? [c] : []
        }), delete k[n])
    }

    function j(e) {
        let {
            mediaSessionId: t
        } = e;
        if (null == t) return;
        for (let e in w) w[e].mediaSessionIds.push(t);
        let n = f.default.getChannelId();
        if (null != n) {
            let e = p.default.getSelfEmbeddedActivityForChannel(n),
                i = null == e ? void 0 : e.applicationId,
                a = null == e ? void 0 : e.instanceId,
                o = (0, D.default)(e);
            if (null != i && null != t && null != o && null != a) {
                let e = w[i],
                    n = k[i];
                r()(null == e || null == n, "an active session and awaiting session both exist"), null == n || n({
                    activitySessionId: o,
                    activityUserSessionId: (0, s.v4)(),
                    instanceId: a,
                    mediaSessionIds: [t]
                }), delete k[i]
            }
        }
    }

    function W(e) {
        return w[e]
    }
    class K extends l.default {
        _initialize() {
            S.default.addChangeListener(this.handleSelectedChannelUpdate), a.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), a.default.subscribe("EMBEDDED_ACTIVITY_OPEN", V), a.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", F), a.default.subscribe("EMBEDDED_ACTIVITY_UPDATE", x), a.default.subscribe("EMBEDDED_ACTIVITY_UPDATE_V2", H), a.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), a.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), a.default.subscribe("MEDIA_SESSION_JOINED", j)
        }
        _terminate() {
            S.default.removeChangeListener(this.handleSelectedChannelUpdate), a.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), a.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", V), a.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", F), a.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", x), a.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE_V2", H), a.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), a.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), a.default.unsubscribe("MEDIA_SESSION_JOINED", j)
        }
        constructor(...e) {
            super(...e), G(this, "handleSelectedChannelUpdate", () => {
                let e = S.default.getVoiceChannelId();
                for (let {
                        channelId: t,
                        applicationId: n
                    }
                    of p.default.getSelfEmbeddedActivities().values())(0, y.default)(t) && t !== e && this.leaveActivity({
                    channelId: t,
                    applicationId: n
                });
                if (null != e) {
                    let t = p.default.getEmbeddedActivitiesForChannel(e),
                        n = I.default.getId();
                    t.forEach(e => {
                        e.userIds.has(n) && null == p.default.getSelfEmbeddedActivityForChannel(e.channelId) && (0, O.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
                    })
                }
            }), G(this, "handleActivityLaunchFail", e => {
                let {
                    error: t,
                    guildId: n
                } = e;
                if (null == n) return;
                let i = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                switch (t.code) {
                    case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                        break;
                    case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                        break;
                    case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                        break;
                    case U.AbortCodes.INVALID_PERMISSIONS:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                        break;
                    case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                        break;
                    case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                        break;
                    case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                        i = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
                }
                this.showLaunchErrorModal(i)
            }), G(this, "superHandleRPCDisconnect", e => {
                let {
                    reason: t,
                    application: n
                } = e, i = n.id;
                if (null != i && null != t) {
                    for (let {
                            applicationId: e,
                            channelId: t
                        }
                        of p.default.getSelfEmbeddedActivities().values()) e === i && this.leaveActivity({
                        channelId: t,
                        applicationId: i
                    });
                    t.code !== U.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, i)
                }
            }), G(this, "handleDeferredOpen", async e => {
                var t, n, i;
                let r;
                let {
                    channelId: s,
                    applicationId: a,
                    analyticsLocations: o
                } = e, l = T.default.getChannel(s);
                if (void 0 === l || E.GUILD_VOCAL_CHANNEL_TYPES.has(null == l ? void 0 : l.type) && S.default.getVoiceChannelId() !== s) return;
                let _ = p.default.getSelfEmbeddedActivityForChannel(s);
                if ((null == _ ? void 0 : _.applicationId) === a) return;
                let c = await u.default.fetchApplication(a);
                if (!(0, L.getIsActivitiesEnabledForCurrentPlatform)(l)) {
                    this.showLaunchErrorModal(b.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return
                }
                if (!(0, M.default)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(b.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return
                }
                let I = null == _ ? void 0 : _.applicationId;
                null != I && (await u.default.fetchApplication(I), r = d.default.getApplication(I));
                let f = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    {
                        activityConfigs: h,
                        applications: A
                    } = await (0, O.fetchShelf)({
                        guildId: f
                    }),
                    m = (0, R.default)({
                        applicationId: a,
                        activityConfigs: h,
                        applications: A
                    });
                if (null == m) {
                    let e = await (0, O.fetchShelf)({
                        guildId: f,
                        force: !0
                    });
                    m = (0, R.default)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    })
                }
                let N = p.default.getEmbeddedActivitiesForChannel(s).find(e => e.applicationId === a),
                    D = null !== (i = null == N ? void 0 : N.userIds.size) && void 0 !== i ? i : 0;
                D > 0 ? (0, C.maybeJoinEmbeddedActivity)({
                    channelId: s,
                    applicationId: a,
                    instanceId: null == N ? void 0 : N.instanceId,
                    inputApplication: null,
                    analyticsLocations: o,
                    embeddedActivitiesManager: this
                }) : await (0, g.default)({
                    activityItem: m,
                    currentEmbeddedApplication: r,
                    channelId: s,
                    guildId: f,
                    embeddedActivitiesManager: this,
                    analyticsLocations: o
                })
            })
        }
    }
}
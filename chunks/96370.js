function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return $
        },
        getActiveAnalyticsSessionIDs: function() {
            return Z
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("153832"),
        a = n("629815"),
        u = n("118133"),
        s = n("241174"),
        l = n("625864"),
        c = n("342942"),
        f = n("390579"),
        d = n("532544"),
        _ = n("569492"),
        E = n("217014"),
        p = n("935741"),
        m = n("545072"),
        y = n("894288"),
        I = n("208454"),
        h = n("870331"),
        O = n("374550"),
        T = n("407323"),
        S = n("623416"),
        v = n("632142"),
        g = n("559805"),
        A = n("734385"),
        b = n("723423"),
        N = n("465059"),
        R = n("767770"),
        C = n("123015"),
        P = n("677861"),
        D = n("224680"),
        L = n("997133"),
        M = n("281767"),
        U = n("941504");

    function w(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function k(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function G(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    k(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    k(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function B(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function F(e) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function V(e, t) {
        return (V = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function H(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var x = {},
        Y = {};

    function W(e) {
        var t;
        return {
            releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, C.default)((0, O.getOS)())].release_phase
        }
    }

    function K(e) {
        return z.apply(this, arguments)
    }

    function z() {
        return (z = G(function(e) {
            var t, n, r, o, i, a, u, s, l, c, _, E, m;
            return H(this, function(y) {
                switch (y.label) {
                    case 0:
                        if (t = e.channelId, n = e.applicationId, r = e.analyticsLocations, i = null == (o = p.default.getChannel(t)) ? void 0 : o.getGuildId(), a = I.default.getCurrentUser(), null == o || null == a) return [2];
                        return u = v.default.getShelfActivities(i), s = T.default.getState().shelfOrder, l = 0 === v.default.getEmbeddedActivitiesForChannel(t).filter(function(e) {
                            return e.applicationId === n
                        }).length, c = (0, g.default)({
                            applicationId: n,
                            activityConfigs: u
                        }), _ = 1 + s.findIndex(function(e) {
                            return e === n
                        }), E = W(c).releasePhase, [4, (0, d.default)()];
                    case 1:
                        return m = y.sent(), Y[n] = function(e) {
                            var t, i, u;
                            x[n] = e, h.default.track(M.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                                channel_id: o.id,
                                guild_id: o.getGuildId(),
                                media_session_id: e.mediaSessionIds[0],
                                activity_session_id: e.activitySessionId,
                                application_id: n,
                                location_stack: r,
                                user_premium_tier: a.premiumType,
                                raw_thermal_state: m,
                                n_participants: f.default.getUserParticipantCount(o.id),
                                is_activity_start: l,
                                release_phase: E,
                                activity_premium_tier_requirement: null == c ? void 0 : null === (t = c.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                                shelf_rank: null == c ? void 0 : null === (i = c.activity) || void 0 === i ? void 0 : i.shelf_rank,
                                shelf_sorted_rank: _ > 0 ? _ : null,
                                activity_user_session_id: e.activityUserSessionId,
                                channel_type: o.type
                            }), h.default.track(M.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                                location_stack: r,
                                channel_id: o.id,
                                channel_type: o.type,
                                guild_id: o.getGuildId(),
                                application_id: n,
                                instance_id: e.instanceId,
                                initial_media_session_id: e.mediaSessionIds[0],
                                activity_user_session_id: e.activityUserSessionId,
                                raw_thermal_state: m,
                                is_activity_start: l,
                                shelf_rank: null == c ? void 0 : null === (u = c.activity) || void 0 === u ? void 0 : u.shelf_rank,
                                shelf_sorted_rank: _ > 0 ? _ : null
                            })
                        }, [2]
                }
            })
        })).apply(this, arguments)
    }

    function X(e) {
        return q.apply(this, arguments)
    }

    function q() {
        return (q = G(function(e) {
            var t, n, r, o, i, a, u, s, l, c, f, _, E;
            return H(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (t = e.channelId, i = x[n = e.applicationId], a = p.default.getChannel(t), u = v.default.getEmbeddedActivityDurationMs(t, n), s = I.default.getCurrentUser(), l = null == a ? void 0 : a.getGuildId(), null == i || null == a || null == s) return [2];
                        return c = v.default.getShelfActivities(l), _ = W(f = (0, g.default)({
                            applicationId: n,
                            activityConfigs: c
                        })).releasePhase, [4, (0, d.default)()];
                    case 1:
                        return E = m.sent(), h.default.track(M.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                            channel_id: a.id,
                            guild_id: a.getGuildId(),
                            media_session_id: i.mediaSessionIds[0],
                            activity_session_id: i.activitySessionId,
                            application_id: n,
                            duration_ms: u,
                            user_premium_tier: s.premiumType,
                            raw_thermal_state: E,
                            release_phase: _,
                            activity_premium_tier_requirement: null == f ? void 0 : null === (r = f.activity) || void 0 === r ? void 0 : r.premium_tier_requirement,
                            shelf_rank: null == f ? void 0 : null === (o = f.activity) || void 0 === o ? void 0 : o.shelf_rank,
                            activity_user_session_id: i.activityUserSessionId,
                            channel_type: a.type,
                            media_session_ids: i.mediaSessionIds
                        }), h.default.track(M.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
                            channel_id: a.id,
                            guild_id: a.getGuildId(),
                            application_id: n,
                            instance_ids: [i.instanceId],
                            media_session_ids: i.mediaSessionIds,
                            activity_user_session_id: i.activityUserSessionId,
                            raw_thermal_state: E,
                            duration_ms: u
                        }), delete Y[n], delete x[n], [2]
                }
            })
        })).apply(this, arguments)
    }

    function Q(e) {
        var t, n, r = e.channelId,
            o = e.embeddedActivity,
            a = e.connections,
            s = e.updateCode,
            l = E.default.getId(),
            c = v.default.getEmbeddedActivitiesForChannel(r),
            f = p.default.getChannel(r);
        if (s === L.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (n = null == f ? void 0 : f.isPrivate()) && void 0 !== n && n && c.length <= 1 && void 0 === a.find(function(e) {
                return e.user_id === l
            }) && u.default.selectParticipant(r, null), !!a.some(function(e) {
                return e.user_id === l
            })) {
            var d = m.default.getMediaSessionId(),
                _ = o.application_id,
                y = (0, R.default)(o),
                I = null == d && (null == f ? void 0 : f.isVocal()) === !0;
            null != y && !I && (null === (t = Y[_]) || void 0 === t || t.call(Y, {
                activitySessionId: y,
                activityUserSessionId: (0, i.v4)(),
                instanceId: o.activity_id,
                mediaSessionIds: null != d ? [d] : []
            }), delete Y[_])
        }
    }

    function J(e) {
        var t = e.mediaSessionId;
        if (null != t) {
            for (var n in x) x[n].mediaSessionIds.push(t);
            var r = m.default.getChannelId();
            if (null != r) {
                var a = v.default.getSelfEmbeddedActivityForChannel(r),
                    u = null == a ? void 0 : a.applicationId,
                    s = null == a ? void 0 : a.instanceId,
                    l = (0, R.default)(a);
                if (null != u && null != t && null != l && null != s) {
                    var c = x[u],
                        f = Y[u];
                    o()(null == c || null == f, "an active session and awaiting session both exist"), null == f || f({
                        activitySessionId: l,
                        activityUserSessionId: (0, i.v4)(),
                        instanceId: s,
                        mediaSessionIds: [t]
                    }), delete Y[u]
                }
            }
        }
    }

    function Z(e) {
        return x[e]
    }
    var $ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && V(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = F(t);
            if (n) {
                var a = F(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : w(e)
        });

        function s() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), t = u.apply(this, arguments), j(w(t), "handleSelectedChannelUpdate", function() {
                var e = y.default.getVoiceChannelId(),
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = v.default.getSelfEmbeddedActivities().values()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = u.channelId,
                            l = u.applicationId;
                        (0, D.default)(s) && s !== e && t.leaveActivity({
                            channelId: s,
                            applicationId: l
                        })
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
                if (null != e) {
                    var c = v.default.getEmbeddedActivitiesForChannel(e),
                        f = E.default.getId();
                    c.forEach(function(e) {
                        e.userIds.has(f) && null == v.default.getSelfEmbeddedActivityForChannel(e.channelId) && (0, S.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
                    })
                }
            }), j(w(t), "handleActivityLaunchFail", function(e) {
                var n = e.error;
                if (null != e.guildId) {
                    var r = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                    switch (n.code) {
                        case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                            break;
                        case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                            break;
                        case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                            break;
                        case M.AbortCodes.INVALID_PERMISSIONS:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                            break;
                        case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                            break;
                        case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                            break;
                        case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            r = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
                    }
                    t.showLaunchErrorModal(r)
                }
            }), j(w(t), "superHandleRPCDisconnect", function(e) {
                var n = e.reason,
                    r = e.application.id;
                if (null != r && null != n) {
                    var o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s = v.default.getSelfEmbeddedActivities().values()[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                            var l = u.value,
                                c = l.applicationId,
                                f = l.channelId;
                            c === r && t.leaveActivity({
                                channelId: f,
                                applicationId: r
                            })
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
                    n.code !== M.RPCCloseCodes.CLOSE_NORMAL && t.showErrorModal(n, r)
                }
            });
            var e, t, n = w(t);
            return j(w(t), "handleDeferredOpen", (e = G(function(e) {
                var t, r, o, i, a, u, s, f, d, E, m, I, h, O, T, R, C, D;
                return H(this, function(L) {
                    switch (L.label) {
                        case 0:
                            if (t = e.channelId, r = e.applicationId, o = e.analyticsLocations, void 0 === (a = p.default.getChannel(t)) || _.GUILD_VOCAL_CHANNEL_TYPES.has(null == a ? void 0 : a.type) && y.default.getVoiceChannelId() !== t || (null == (u = v.default.getSelfEmbeddedActivityForChannel(t)) ? void 0 : u.applicationId) === r) return [2];
                            return [4, l.default.fetchApplication(r)];
                        case 1:
                            if (s = L.sent(), !(0, N.getIsActivitiesEnabledForCurrentPlatform)(a)) return n.showLaunchErrorModal(U.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS), [2];
                            if (!(0, P.default)(null == s ? void 0 : null === (i = s.embedded_activity_config) || void 0 === i ? void 0 : i.supported_platforms)) return n.showLaunchErrorModal(U.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS), [2];
                            if (f = null == u ? void 0 : u.applicationId, d = void 0, !(null != f)) return [3, 3];
                            return [4, l.default.fetchApplication(f)];
                        case 2:
                            L.sent(), d = c.default.getApplication(f), L.label = 3;
                        case 3:
                            return m = null !== (E = null == a ? void 0 : a.getGuildId()) && void 0 !== E ? E : void 0, [4, (0, S.fetchShelf)({
                                guildId: m
                            })];
                        case 4:
                            if (h = (I = L.sent()).activityConfigs, O = I.applications, null != (T = (0, g.default)({
                                    applicationId: r,
                                    activityConfigs: h,
                                    applications: O
                                }))) return [3, 6];
                            return [4, (0, S.fetchShelf)({
                                guildId: m,
                                force: !0
                            })];
                        case 5:
                            R = L.sent(), T = (0, g.default)({
                                applicationId: r,
                                activityConfigs: R.activityConfigs,
                                applications: R.applications
                            }), L.label = 6;
                        case 6:
                            if (!((null !== (D = null == (C = v.default.getEmbeddedActivitiesForChannel(t).find(function(e) {
                                    return e.applicationId === r
                                })) ? void 0 : C.userIds.size) && void 0 !== D ? D : 0) > 0)) return [3, 7];
                            return (0, A.maybeJoinEmbeddedActivity)({
                                channelId: t,
                                applicationId: r,
                                instanceId: null == C ? void 0 : C.instanceId,
                                inputApplication: null,
                                analyticsLocations: o,
                                embeddedActivitiesManager: n
                            }), [3, 9];
                        case 7:
                            return [4, (0, b.default)({
                                activityItem: T,
                                currentEmbeddedApplication: d,
                                channelId: t,
                                guildId: m,
                                embeddedActivitiesManager: n,
                                analyticsLocations: o
                            })];
                        case 8:
                            L.sent(), L.label = 9;
                        case 9:
                            return [2]
                    }
                })
            }), function(t) {
                return e.apply(this, arguments)
            })), t
        }
        return r = s, o = [{
            key: "_initialize",
            value: function() {
                y.default.addChangeListener(this.handleSelectedChannelUpdate), a.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), a.default.subscribe("EMBEDDED_ACTIVITY_OPEN", K), a.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", X), a.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", Q), a.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), a.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), a.default.subscribe("MEDIA_SESSION_JOINED", J)
            }
        }, {
            key: "_terminate",
            value: function() {
                y.default.removeChangeListener(this.handleSelectedChannelUpdate), a.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), a.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", K), a.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", X), a.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", Q), a.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), a.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), a.default.unsubscribe("MEDIA_SESSION_JOINED", J)
            }
        }], B(r.prototype, o), i && B(r, i), s
    }(s.default)
}
function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("724458"), n("47120");
    var i, r, s, a, o = n("512722"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("317381"),
        I = n("710845"),
        T = n("258609"),
        f = n("569545"),
        S = n("199902"),
        h = n("314897"),
        A = n("523746"),
        m = n("592125"),
        N = n("944486"),
        p = n("606304"),
        O = n("594174"),
        R = n("33039"),
        C = n("979651"),
        g = n("413523"),
        L = n("354459"),
        D = n("981631");
    let v = new I.default("ChannelRTCStore"),
        M = Object.freeze([]),
        y = [],
        P = {},
        U = {},
        b = {},
        G = {},
        w = {},
        B = {},
        k = {},
        F = {},
        V = {},
        x = {};

    function H(e) {
        let t = P[e];
        return null == t && (t = new g.default(e), P[e] = t), t
    }

    function Y(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
        return t.reduce((t, n) => e(H(n)) ? (function(e) {
            let t = H(e);
            if (0 === t.size()) return;
            let n = er(e) || Q(t) ? D.ChannelModes.VIDEO : D.ChannelModes.VOICE;
            n === D.ChannelModes.VOICE ? (delete G[e], delete w[e]) : G[e] = n
        }(n), function(e) {
            let t = h.default.getId(),
                n = H(e);
            if (0 === n.size() || N.default.getVoiceChannelId() !== e) {
                X(e, null);
                return
            }
            let i = L.ParticipantSelectionTypes.NONE,
                r = n.toArray(g.ChannelRTCParticipantsIndexes.STREAM).find(e => e.type === L.ParticipantTypes.STREAM && S.default.getActiveStreamForStreamKey(e.id));
            if (null != r) l()(r.type === L.ParticipantTypes.STREAM, "Impossible condition"), i = r.id;
            else if (1 === n.size()) i = t;
            else if (1 === n.size(g.ChannelRTCParticipantsIndexes.VIDEO)) {
                let [e] = n.toArray(g.ChannelRTCParticipantsIndexes.VIDEO);
                i = e.id
            } else {
                var s;
                let e = n.toArray().find(e => e.type === L.ParticipantTypes.USER && e.id !== t && !e.ringing);
                i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t
            }
            let [a] = W(e);
            if (a !== L.ParticipantSelectionTypes.AUTO && a !== L.ParticipantSelectionTypes.NONE) {
                let e = n.getParticipant(a);
                (null == e || e.type === L.ParticipantTypes.STREAM && null == S.default.getActiveStreamForStreamKey(e.id)) && (a = L.ParticipantSelectionTypes.NONE)
            }
            X(e, [a, i])
        }(n), !0) : t, !1)
    }

    function j(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
        return Y(t => t.updateParticipant(e), t)
    }

    function W(e) {
        var t;
        let n = m.default.getChannel(e),
            i = (null == n ? void 0 : n.isDM()) ? L.ParticipantSelectionTypes.AUTO : L.ParticipantSelectionTypes.NONE;
        return null !== (t = U[e]) && void 0 !== t ? t : [i, L.ParticipantSelectionTypes.NONE]
    }

    function K(e) {
        if (null == U[e]) return !1;
        let [t] = U[e];
        return t !== L.ParticipantSelectionTypes.NONE
    }

    function z(e) {
        null == b[e] && (b[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
        let t = b[e],
            n = performance.now(),
            i = K(e);
        if (t.lastUpdate > 0) {
            let e = n - t.lastUpdate;
            t[i ? "focusDurationMs" : "gridDurationMs"] += e
        }
        t.lastUpdate = n
    }

    function X(e, t) {
        z(e);
        let n = K(e);
        null == t ? delete U[e] : U[e] = t, n !== K(e) && b[e].toggleCount++
    }

    function Q(e) {
        return e.size(g.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(g.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
    }

    function q(e) {
        delete P[e], delete U[e], delete G[e], delete w[e]
    }

    function Z() {
        return Y(e => e.rebuild(), function() {
            let e = [],
                t = N.default.getChannelId();
            null != t && e.push(t);
            let n = N.default.getVoiceChannelId();
            null != n && !e.includes(n) && e.push(n);
            let i = T.default.getRemoteSessionId(),
                r = C.default.getVoiceStateForSession(h.default.getId(), i);
            (null == r ? void 0 : r.channelId) != null && e.push(null == r ? void 0 : r.channelId), d().difference(y, e).forEach(q);
            let s = d().difference(e, y);
            return y = e, s
        }())
    }

    function J() {
        return Y(e => e.updateEmbeddedActivities())
    }

    function $(e) {
        let {
            userId: t
        } = e;
        return Y(e => e.updateParticipantSpeaking(t))
    }

    function ee(e) {
        let {
            user: t
        } = e;
        return j(t.id)
    }

    function et(e) {
        let {
            channelId: t
        } = e;
        return Y(e => e.rebuild(), [t])
    }

    function en(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        return delete F[t], delete V[t], q(t)
    }

    function ei(e) {
        let {
            streamKey: t
        } = e, {
            channelId: n,
            ownerId: i
        } = (0, f.decodeStreamKey)(t);
        return j(i, [n])
    }

    function er(e) {
        var t;
        return !!(null === (t = m.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
    }
    class es extends(i = _.default.Store) {
        initialize() {
            this.waitFor(S.default, h.default, A.default, m.default, E.default, N.default, p.default, O.default, R.default, C.default), this.syncWith([E.default], J), this.syncWith([T.default], Z)
        }
        getParticipantsVersion(e) {
            return H(e).version
        }
        getParticipants(e) {
            var t;
            return null !== (t = H(e).toArray()) && void 0 !== t ? t : M
        }
        getSpeakingParticipants(e) {
            var t;
            return null !== (t = H(e).toArray(g.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : M
        }
        getFilteredParticipants(e) {
            return k[e] ? H(e).toArray(g.ChannelRTCParticipantsIndexes.FILTERED) : H(e).toArray()
        }
        getVideoParticipants(e) {
            var t;
            return null !== (t = H(e).toArray(g.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : M
        }
        getStreamParticipants(e) {
            var t;
            return null !== (t = H(e).toArray(g.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : M
        }
        getActivityParticipants(e) {
            var t;
            return null !== (t = H(e).toArray(g.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : M
        }
        getParticipant(e, t) {
            return H(e).getParticipant(t)
        }
        getUserParticipantCount(e) {
            let t = H(e);
            return t.size() - t.size(g.ChannelRTCParticipantsIndexes.STREAM) - t.size(g.ChannelRTCParticipantsIndexes.ACTIVITY)
        }
        getParticipantsOpen(e) {
            var t;
            return null === (t = B[e]) || void 0 === t || t
        }
        getVoiceParticipantsHidden(e) {
            var t;
            return null !== (t = k[e]) && void 0 !== t && t
        }
        getSelectedParticipantId(e) {
            let [t, n] = W(e);
            return t === L.ParticipantSelectionTypes.NONE ? null : t !== L.ParticipantSelectionTypes.AUTO ? t : n === L.ParticipantSelectionTypes.NONE || n === L.ParticipantSelectionTypes.AUTO ? null : n
        }
        getSelectedParticipant(e) {
            let t = this.getSelectedParticipantId(e);
            return null == t ? null : H(e).getParticipant(t)
        }
        getSelectedParticipantStats(e) {
            let t = b[e];
            return null == t ? {} : {
                view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                view_mode_toggle_count: t.toggleCount
            }
        }
        getMode(e) {
            var t;
            return null !== (t = G[e]) && void 0 !== t ? t : er(e) ? D.ChannelModes.VIDEO : D.ChannelModes.VOICE
        }
        getLayout(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D.AppContext.APP;
            if (__OVERLAY__) return D.ChannelLayouts.NORMAL;
            let r = m.default.getChannel(e),
                s = er(e) || (null == r ? void 0 : r.isBroadcastChannel());
            return null !== (n = null === (t = w[e]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : s ? D.ChannelLayouts.NO_CHAT : D.ChannelLayouts.NORMAL
        }
        getChatOpen(e) {
            var t;
            return null !== (t = F[e]) && void 0 !== t && t
        }
        isFullscreenInContext() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.AppContext.APP;
            return Object.values(w).some(t => t[e] === D.ChannelLayouts.FULL_SCREEN)
        }
        getStageStreamSize(e) {
            return V[e]
        }
        getStageVideoLimitBoostUpsellDismissed(e) {
            return x[e]
        }
    }
    a = "ChannelRTCStore", (s = "displayName") in(r = es) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new es(c.default, {
        CONNECTION_OPEN: Z,
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        THREAD_LIST_SYNC: Z,
        OVERLAY_INITIALIZE: Z,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t,
                currentVoiceChannelId: n
            } = e;
            return null != t ? delete b[t] : null != n && (delete F[n], delete V[n], z(n)), Z()
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = Z(), r = m.default.getChannel(t);
            return null == t || null == n || (null == r ? void 0 : r.type) !== D.ChannelTypes.GUILD_VOICE && (null == r ? void 0 : r.type) !== D.ChannelTypes.GUILD_STAGE_VOICE || F[t] ? i : (F[t] = !0, !0)
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: Z,
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t,
                initial: n
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: i,
                    channelId: r
                } = t;
                return n && null != r && !y.includes(r) ? e : j(i) || e
            }, !1)
        },
        CHANNEL_CREATE: function(e) {
            let {
                channel: t
            } = e;
            if (t.type === D.ChannelTypes.GROUP_DM) {
                let e = t.originChannelId;
                if (null != e) {
                    var n, i;
                    return w[t.id] = {
                        [D.AppContext.APP]: null !== (i = null === (n = w[e]) || void 0 === n ? void 0 : n[D.AppContext.APP]) && void 0 !== i ? i : D.ChannelLayouts.NORMAL
                    }, !0
                }
                t.isBroadcastChannel() && (w[t.id] = {
                    [D.AppContext.APP]: D.ChannelLayouts.NO_CHAT
                })
            }
            return !1
        },
        CHANNEL_DELETE: en,
        THREAD_DELETE: en,
        CALL_CREATE: et,
        CALL_UPDATE: et,
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            return q(t)
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            let {
                channelId: t,
                id: n
            } = e, i = H(t);
            null == n && i.toArray(g.ChannelRTCParticipantsIndexes.STREAM).forEach(e => {
                (0, L.isStreamParticipant)(e) && i.updateParticipant(e.user.id)
            });
            let [, r] = W(t);
            if (X(t, [null != n ? n : L.ParticipantSelectionTypes.NONE, r]), (0, f.isStreamKey)(n)) {
                try {
                    let {
                        ownerId: e
                    } = (0, f.decodeStreamKey)(n);
                    e === h.default.getId() && j(e, [t])
                } catch (e) {
                    v.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                }!Q(i) && (B[t] = !1)
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
            let {
                channelId: t,
                layout: n,
                appContext: i
            } = e;
            w[t] = {
                ...w[t],
                [i]: n
            }
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
            let {
                channelId: t,
                participantsOpen: n
            } = e;
            B[t] = n
        },
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
            let {
                channelId: t,
                voiceParticipantsHidden: n
            } = e;
            k[t] = n
        },
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
            let {
                channelId: t,
                large: n
            } = e;
            V[t] = n
        },
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
            let {
                channelId: t,
                dismissed: n
            } = e;
            x[t] = n
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            let {
                channelId: t,
                selfStreamHidden: n
            } = e, i = h.default.getId();
            if (n) {
                let [e] = W(t);
                (0, f.isStreamKey)(e) && e.includes(i) && X(t, null)
            }
            j(i, [t])
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
            let {
                channelId: t,
                chatOpen: n
            } = e;
            F[t] = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                channelId: t,
                userId: n
            } = e;
            return j(n, [t])
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            let {
                channelId: t,
                userId: n
            } = e;
            return j(n, [t])
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            let {
                userId: t
            } = e;
            return j(t)
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
            let {
                channelId: t,
                senderUserId: n,
                maxResolution: i,
                maxFrameRate: r
            } = e;
            return Y(e => e.updateParticipantQuality(n, i, r), [t])
        },
        STREAM_CLOSE: ei,
        STREAM_DELETE: ei,
        STREAM_WATCH: function(e) {
            let {
                streamKey: t
            } = e, {
                channelId: n,
                ownerId: i
            } = (0, f.decodeStreamKey)(t);
            return j(i, [n])
        },
        SPEAKING: $,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: $,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: $,
        USER_UPDATE: ee,
        GUILD_MEMBER_UPDATE: ee,
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = [];
            if (d().forEach(y, e => {
                    let i = m.default.getChannel(e);
                    (null == i || i.getGuildId() === t.id) && n.push(e)
                }), 0 === n.length) return !1;
            d().forEach(n, e => q(e))
        }
    })
}
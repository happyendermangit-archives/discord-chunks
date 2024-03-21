function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return en
        }
    }), n("424973"), n("808653"), n("222007");
    var i = n("627445"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("191225"),
        d = n("605250"),
        c = n("76393"),
        _ = n("374014"),
        f = n("373469"),
        E = n("271938"),
        h = n("950104"),
        g = n("42203"),
        m = n("18494"),
        p = n("280168"),
        S = n("697218"),
        T = n("555035"),
        v = n("800762"),
        I = n("949719"),
        A = n("99795"),
        C = n("49111");
    let y = new d.default("ChannelRTCStore"),
        N = Object.freeze([]),
        R = [],
        O = {},
        D = {},
        P = {},
        L = {},
        M = {},
        b = {},
        U = {},
        w = {},
        k = {},
        V = {};

    function G(e) {
        let t = O[e];
        return null == t && (t = new I.default(e), O[e] = t), t
    }

    function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R;
        return t.reduce((t, n) => {
            let i = G(n);
            return e(i) ? (function(e) {
                let t = G(e);
                if (0 === t.size()) return;
                let n = ee(e) || j(t) ? C.ChannelModes.VIDEO : C.ChannelModes.VOICE;
                n === C.ChannelModes.VOICE ? (delete L[e], delete M[e]) : L[e] = n
            }(n), function(e) {
                let t = E.default.getId(),
                    n = G(e);
                if (0 === n.size() || m.default.getVoiceChannelId() !== e) {
                    K(e, null);
                    return
                }
                let i = A.ParticipantSelectionTypes.NONE,
                    r = n.toArray(I.ChannelRTCParticipantsIndexes.STREAM).find(e => e.type === A.ParticipantTypes.STREAM && f.default.getActiveStreamForStreamKey(e.id));
                if (null != r) s(r.type === A.ParticipantTypes.STREAM, "Impossible condition"), i = r.id;
                else if (1 === n.size()) i = t;
                else if (1 === n.size(I.ChannelRTCParticipantsIndexes.VIDEO)) {
                    let [e] = n.toArray(I.ChannelRTCParticipantsIndexes.VIDEO);
                    i = e.id
                } else {
                    var a;
                    let e = n.toArray().find(e => e.type === A.ParticipantTypes.USER && e.id !== t && !e.ringing);
                    i = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t
                }
                let [o] = B(e);
                if (o !== A.ParticipantSelectionTypes.AUTO && o !== A.ParticipantSelectionTypes.NONE) {
                    let e = n.getParticipant(o);
                    (null == e || e.type === A.ParticipantTypes.STREAM && null == f.default.getActiveStreamForStreamKey(e.id)) && (o = A.ParticipantSelectionTypes.NONE)
                }
                K(e, [o, i])
            }(n), !0) : t
        }, !1)
    }

    function x(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R;
        return F(t => t.updateParticipant(e), t)
    }

    function B(e) {
        var t;
        let n = g.default.getChannel(e),
            i = (null == n ? void 0 : n.isDM()) ? A.ParticipantSelectionTypes.AUTO : A.ParticipantSelectionTypes.NONE;
        return null !== (t = D[e]) && void 0 !== t ? t : [i, A.ParticipantSelectionTypes.NONE]
    }

    function H(e) {
        let t = D[e];
        if (null == t) return !1;
        let [n] = D[e];
        return n !== A.ParticipantSelectionTypes.NONE
    }

    function Y(e) {
        null == P[e] && (P[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
        let t = P[e],
            n = performance.now(),
            i = H(e);
        if (t.lastUpdate > 0) {
            let e = n - t.lastUpdate;
            t[i ? "focusDurationMs" : "gridDurationMs"] += e
        }
        t.lastUpdate = n
    }

    function K(e, t) {
        Y(e);
        let n = H(e);
        null == t ? delete D[e] : D[e] = t;
        let i = H(e);
        n !== i && P[e].toggleCount++
    }

    function j(e) {
        return e.size(I.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(I.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
    }

    function W(e) {
        delete O[e], delete D[e], delete L[e], delete M[e]
    }

    function z() {
        return F(e => e.rebuild(), function() {
            let e = [],
                t = m.default.getChannelId();
            null != t && e.push(t);
            let n = m.default.getVoiceChannelId();
            null != n && !e.includes(n) && e.push(n);
            let i = c.default.getRemoteSessionId(),
                s = v.default.getVoiceStateForSession(E.default.getId(), i);
            (null == s ? void 0 : s.channelId) != null && e.push(null == s ? void 0 : s.channelId), a.difference(R, e).forEach(W);
            let r = a.difference(e, R);
            return R = e, r
        }())
    }

    function q() {
        return F(e => e.updateEmbeddedActivities())
    }

    function X(e) {
        let {
            userId: t
        } = e;
        return F(e => e.updateParticipantSpeaking(t))
    }

    function Q(e) {
        let {
            user: t
        } = e;
        return x(t.id)
    }

    function Z(e) {
        let {
            channelId: t
        } = e;
        return F(e => e.rebuild(), [t])
    }

    function J(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        return delete w[t], delete k[t], W(t)
    }

    function $(e) {
        let {
            streamKey: t
        } = e, {
            channelId: n,
            ownerId: i
        } = (0, _.decodeStreamKey)(t);
        return x(i, [n])
    }

    function ee(e) {
        var t;
        return !!(null === (t = g.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
    }
    class et extends o.default.Store {
        initialize() {
            this.waitFor(f.default, E.default, h.default, g.default, u.default, m.default, p.default, S.default, T.default, v.default), this.syncWith([u.default], q), this.syncWith([c.default], z)
        }
        getParticipantsVersion(e) {
            return G(e).version
        }
        getParticipants(e) {
            var t;
            return null !== (t = G(e).toArray()) && void 0 !== t ? t : N
        }
        getSpeakingParticipants(e) {
            var t;
            return null !== (t = G(e).toArray(I.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : N
        }
        getFilteredParticipants(e) {
            return U[e] ? G(e).toArray(I.ChannelRTCParticipantsIndexes.FILTERED) : G(e).toArray()
        }
        getVideoParticipants(e) {
            var t;
            return null !== (t = G(e).toArray(I.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : N
        }
        getStreamParticipants(e) {
            var t;
            return null !== (t = G(e).toArray(I.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : N
        }
        getActivityParticipants(e) {
            var t;
            return null !== (t = G(e).toArray(I.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : N
        }
        getParticipant(e, t) {
            return G(e).getParticipant(t)
        }
        getUserParticipantCount(e) {
            let t = G(e);
            return t.size() - t.size(I.ChannelRTCParticipantsIndexes.STREAM) - t.size(I.ChannelRTCParticipantsIndexes.ACTIVITY)
        }
        getParticipantsOpen(e) {
            var t;
            return null === (t = b[e]) || void 0 === t || t
        }
        getVoiceParticipantsHidden(e) {
            var t;
            return null !== (t = U[e]) && void 0 !== t && t
        }
        getSelectedParticipantId(e) {
            let [t, n] = B(e);
            return t === A.ParticipantSelectionTypes.NONE ? null : t !== A.ParticipantSelectionTypes.AUTO ? t : n === A.ParticipantSelectionTypes.NONE || n === A.ParticipantSelectionTypes.AUTO ? null : n
        }
        getSelectedParticipant(e) {
            let t = this.getSelectedParticipantId(e);
            return null == t ? null : G(e).getParticipant(t)
        }
        getSelectedParticipantStats(e) {
            let t = P[e];
            return null == t ? {} : {
                view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                view_mode_toggle_count: t.toggleCount
            }
        }
        getMode(e) {
            var t;
            return null !== (t = L[e]) && void 0 !== t ? t : ee(e) ? C.ChannelModes.VIDEO : C.ChannelModes.VOICE
        }
        getLayout(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.AppContext.APP;
            if (__OVERLAY__) return C.ChannelLayouts.NORMAL;
            let s = g.default.getChannel(e),
                r = ee(e) || (null == s ? void 0 : s.isBroadcastChannel());
            return null !== (n = null === (t = M[e]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : r ? C.ChannelLayouts.NO_CHAT : C.ChannelLayouts.NORMAL
        }
        getChatOpen(e) {
            var t;
            return null !== (t = w[e]) && void 0 !== t && t
        }
        isFullscreenInContext() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.AppContext.APP;
            return Object.values(M).some(t => t[e] === C.ChannelLayouts.FULL_SCREEN)
        }
        getStageStreamSize(e) {
            return k[e]
        }
        getStageVideoLimitBoostUpsellDismissed(e) {
            return V[e]
        }
    }
    et.displayName = "ChannelRTCStore";
    var en = new et(l.default, {
        CONNECTION_OPEN: z,
        CONNECTION_OPEN_SUPPLEMENTAL: z,
        THREAD_LIST_SYNC: z,
        OVERLAY_INITIALIZE: z,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t,
                currentVoiceChannelId: n
            } = e;
            return null != t ? delete P[t] : null != n && (delete w[n], delete k[n], Y(n)), z()
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = z(), s = g.default.getChannel(t);
            return null == t || null == n || (null == s ? void 0 : s.type) !== C.ChannelTypes.GUILD_VOICE && (null == s ? void 0 : s.type) !== C.ChannelTypes.GUILD_STAGE_VOICE || w[t] ? i : (w[t] = !0, !0)
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: z,
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t,
                initial: n
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: i,
                    channelId: s
                } = t;
                return n && null != s && !R.includes(s) ? e : x(i) || e
            }, !1)
        },
        CHANNEL_CREATE: function(e) {
            let {
                channel: t
            } = e;
            if (t.type === C.ChannelTypes.GROUP_DM) {
                let e = t.originChannelId;
                if (null != e) {
                    var n, i;
                    return M[t.id] = {
                        [C.AppContext.APP]: null !== (i = null === (n = M[e]) || void 0 === n ? void 0 : n[C.AppContext.APP]) && void 0 !== i ? i : C.ChannelLayouts.NORMAL
                    }, !0
                }
                t.isBroadcastChannel() && (M[t.id] = {
                    [C.AppContext.APP]: C.ChannelLayouts.NO_CHAT
                })
            }
            return !1
        },
        CHANNEL_DELETE: J,
        THREAD_DELETE: J,
        CALL_CREATE: Z,
        CALL_UPDATE: Z,
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            return W(t)
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            let {
                channelId: t,
                id: n
            } = e, i = G(t), s = null == n;
            s && i.toArray(I.ChannelRTCParticipantsIndexes.STREAM).forEach(e => {
                (0, A.isStreamParticipant)(e) && i.updateParticipant(e.user.id)
            });
            let [, r] = B(t);
            if (K(t, [null != n ? n : A.ParticipantSelectionTypes.NONE, r]), (0, _.isStreamKey)(n)) {
                try {
                    let {
                        ownerId: e
                    } = (0, _.decodeStreamKey)(n);
                    e === E.default.getId() && x(e, [t])
                } catch (e) {
                    y.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                }!j(i) && (b[t] = !1)
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
            let {
                channelId: t,
                layout: n,
                appContext: i
            } = e;
            M[t] = {
                ...M[t],
                [i]: n
            }
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
            let {
                channelId: t,
                participantsOpen: n
            } = e;
            b[t] = n
        },
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
            let {
                channelId: t,
                voiceParticipantsHidden: n
            } = e;
            U[t] = n
        },
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
            let {
                channelId: t,
                large: n
            } = e;
            k[t] = n
        },
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
            let {
                channelId: t,
                dismissed: n
            } = e;
            V[t] = n
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            let {
                channelId: t,
                selfStreamHidden: n
            } = e, i = E.default.getId();
            if (n) {
                let [e] = B(t), n = (0, _.isStreamKey)(e);
                n && e.includes(i) && K(t, null)
            }
            x(i, [t])
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
            let {
                channelId: t,
                chatOpen: n
            } = e;
            w[t] = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                channelId: t,
                userId: n
            } = e;
            return x(n, [t])
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            let {
                channelId: t,
                userId: n
            } = e;
            return x(n, [t])
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            let {
                userId: t
            } = e;
            return x(t)
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
            let {
                channelId: t,
                senderUserId: n,
                maxResolution: i,
                maxFrameRate: s
            } = e;
            return F(e => e.updateParticipantQuality(n, i, s), [t])
        },
        STREAM_CLOSE: $,
        STREAM_DELETE: $,
        STREAM_WATCH: function(e) {
            let {
                streamKey: t
            } = e, {
                channelId: n,
                ownerId: i
            } = (0, _.decodeStreamKey)(t);
            return x(i, [n])
        },
        SPEAKING: X,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: X,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: X,
        USER_UPDATE: Q,
        GUILD_MEMBER_UPDATE: Q,
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = [];
            if (a.forEach(R, e => {
                    let i = g.default.getChannel(e);
                    (null == i || i.getGuildId() === t.id) && n.push(e)
                }), 0 === n.length) return !1;
            a.forEach(n, e => W(e))
        }
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        startStream: function() {
            return O
        },
        setStreamPaused: function() {
            return D
        },
        watchStream: function() {
            return M
        },
        toggleSelfStreamHidden: function() {
            return L
        },
        watchStreamAndTransitionToStream: function() {
            return b
        },
        stopStream: function() {
            return U
        },
        closeStream: function() {
            return w
        },
        fetchStreamPreview: function() {
            return k
        },
        notifyStreamStart: function() {
            return V
        },
        updateStreamSettings: function() {
            return G
        },
        changeStreamRegion: function() {
            return F
        },
        stopOwnStream: function() {
            return x
        },
        createBroadcastChannelOrStartStream: function() {
            return B
        },
        joinPrivateChannelAndWatchStream: function() {
            return H
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("759843"),
        a = n("872717"),
        o = n("913144"),
        l = n("76393"),
        u = n("374014"),
        d = n("709463"),
        c = n("870346"),
        f = n("373469"),
        _ = n("271938"),
        h = n("42203"),
        E = n("305961"),
        g = n("18494"),
        m = n("800762"),
        p = n("404008"),
        S = n("718517"),
        v = n("12307"),
        T = n("840707"),
        I = n("561288"),
        C = n("450911"),
        A = n("255397"),
        y = n("987317"),
        N = n("49111"),
        R = n("706530");

    function O(e, t, n) {
        o.default.dispatch({
            type: "STREAM_START",
            streamType: null != e ? R.StreamTypes.GUILD : R.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            appContext: __OVERLAY__ ? N.AppContext.OVERLAY : N.AppContext.APP,
            ...n
        })
    }

    function D(e, t) {
        let n = (0, u.encodeStreamKey)(e);
        o.default.dispatch({
            type: "STREAM_SET_PAUSED",
            streamKey: n,
            paused: t
        })
    }

    function P(e, t) {
        let n = h.default.getChannel(t);
        s(null != n, "Cannot join a null voice channel");
        let i = m.default.isInChannel(t);
        return !i && (0, p.isChannelFull)(n, m.default, E.default)
    }

    function M(e, t) {
        let n = null != l.default.getRemoteSessionId();
        if (n) return;
        let {
            guildId: i,
            channelId: s
        } = e;
        if (null != i && P(i, s)) return;
        let r = (0, u.encodeStreamKey)(e),
            a = (null == t ? void 0 : t.forceMultiple) || f.default.getAllActiveStreamsForChannel(s).filter(e => {
                let {
                    ownerId: t
                } = e;
                return t !== _.default.getId()
            }).length >= 2;
        o.default.dispatch({
            type: "STREAM_WATCH",
            streamKey: r,
            allowMultiple: a
        }), !a && (null == t || !t.noFocus) && A.default.selectParticipant(e.channelId, r)
    }

    function L(e, t) {
        o.default.dispatch({
            type: "STREAM_UPDATE_SELF_HIDDEN",
            channelId: e,
            selfStreamHidden: t
        })
    }

    function b(e, t) {
        let {
            guildId: n,
            channelId: i
        } = e;
        if (null != n && P(n, i)) return;
        M(e, t);
        let s = c.default.getWindowOpen(N.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
            r = g.default.getVoiceChannelId();
        (!s || r !== i) && (0, d.default)(e)
    }

    function U(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        w(e, t), o.default.dispatch({
            type: "STREAM_STOP",
            streamKey: e,
            appContext: __OVERLAY__ ? N.AppContext.OVERLAY : N.AppContext.APP
        })
    }

    function w(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        o.default.dispatch({
            type: "STREAM_CLOSE",
            streamKey: e,
            canShowFeedback: t
        })
    }
    async function k(e, t, n) {
        let i = (0, u.encodeStreamKey)({
            streamType: null != e ? R.StreamTypes.GUILD : R.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        o.default.dispatch({
            type: "STREAM_PREVIEW_FETCH_START",
            streamKey: i
        });
        try {
            let e = await a.default.get({
                url: N.Endpoints.STREAM_PREVIEW(i),
                query: {
                    version: Date.now()
                },
                oldFormErrors: !0
            });
            o.default.dispatch({
                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                streamKey: i,
                previewURL: e.body.url
            })
        } catch (t) {
            let e;
            429 === t.status && (e = t.body.retry_after * S.default.Millis.SECOND), o.default.dispatch({
                type: "STREAM_PREVIEW_FETCH_FAIL",
                streamKey: i,
                retryAfter: e
            })
        }
    }
    async function V(e) {
        try {
            await T.default.post({
                url: N.Endpoints.STREAM_NOTIFY(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.STREAM_NOTIFY
                }
            })
        } catch (e) {}
    }

    function G(e) {
        (0, v.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), o.default.dispatch({
            type: "STREAM_UPDATE_SETTINGS",
            ...e
        })
    }

    function F(e, t) {
        a.default.patch({
            url: N.Endpoints.STREAM(e),
            body: {
                region: t
            },
            oldFormErrors: !0
        })
    }

    function x() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = f.default.getCurrentUserActiveStream();
        null != t && U((0, u.encodeStreamKey)(t), e)
    }

    function B(e) {
        let {
            channelId: t,
            pid: n,
            sourceId: i,
            sourceName: s
        } = e;
        (null != n || null != i || null != s) && (o.default.dispatch({
            type: "START_BROADCAST_STREAM",
            options: {
                pid: n,
                sourceId: i,
                sourceName: s
            }
        }), null == t ? C.default.createBroadcastPrivateChannel() : O(null, t, {
            pid: n,
            sourceId: i,
            sourceName: s
        }))
    }

    function H(e, t) {
        let n = _.default.getId(),
            i = (0, u.decodeStreamKey)(t),
            s = g.default.getVoiceChannelId();
        null != s && s !== e && y.default.disconnect(), C.default.addRecipient(e, n, void 0, () => {
            I.default.call(e, !1, !1, null, () => {
                b(i)
            })
        })
    }
}
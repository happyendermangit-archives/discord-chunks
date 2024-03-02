function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        startStream: function() {
            return O
        },
        setStreamPaused: function() {
            return P
        },
        watchStream: function() {
            return V
        },
        toggleSelfStreamHidden: function() {
            return R
        },
        watchStreamAndTransitionToStream: function() {
            return k
        },
        stopStream: function() {
            return M
        },
        closeStream: function() {
            return w
        },
        fetchStreamPreview: function() {
            return L
        },
        notifyStreamStart: function() {
            return U
        },
        updateStreamSettings: function() {
            return G
        },
        changeStreamRegion: function() {
            return F
        },
        stopOwnStream: function() {
            return H
        },
        createBroadcastChannelOrStartStream: function() {
            return x
        },
        joinPrivateChannelAndWatchStream: function() {
            return B
        }
    });
    var s = n("627445"),
        i = n.n(s),
        r = n("759843"),
        a = n("872717"),
        o = n("913144"),
        d = n("76393"),
        u = n("374014"),
        l = n("709463"),
        f = n("870346"),
        _ = n("373469"),
        c = n("271938"),
        g = n("42203"),
        m = n("305961"),
        h = n("18494"),
        v = n("800762"),
        E = n("404008"),
        p = n("718517"),
        y = n("12307"),
        T = n("840707"),
        C = n("561288"),
        I = n("450911"),
        S = n("255397"),
        A = n("987317"),
        D = n("49111"),
        N = n("706530");

    function O(e, t, n) {
        o.default.dispatch({
            type: "STREAM_START",
            streamType: null != e ? N.StreamTypes.GUILD : N.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            appContext: __OVERLAY__ ? D.AppContext.OVERLAY : D.AppContext.APP,
            ...n
        })
    }

    function P(e, t) {
        let n = (0, u.encodeStreamKey)(e);
        o.default.dispatch({
            type: "STREAM_SET_PAUSED",
            streamKey: n,
            paused: t
        })
    }

    function b(e, t) {
        let n = g.default.getChannel(t);
        i(null != n, "Cannot join a null voice channel");
        let s = v.default.isInChannel(t);
        return !s && (0, E.isChannelFull)(n, v.default, m.default)
    }

    function V(e, t) {
        let n = null != d.default.getRemoteSessionId();
        if (n) return;
        let {
            guildId: s,
            channelId: i
        } = e;
        if (null != s && b(s, i)) return;
        let r = (0, u.encodeStreamKey)(e),
            a = (null == t ? void 0 : t.forceMultiple) || _.default.getAllActiveStreamsForChannel(i).filter(e => {
                let {
                    ownerId: t
                } = e;
                return t !== c.default.getId()
            }).length >= 2;
        o.default.dispatch({
            type: "STREAM_WATCH",
            streamKey: r,
            allowMultiple: a
        }), !a && (null == t || !t.noFocus) && S.default.selectParticipant(e.channelId, r)
    }

    function R(e, t) {
        o.default.dispatch({
            type: "STREAM_UPDATE_SELF_HIDDEN",
            channelId: e,
            selfStreamHidden: t
        })
    }

    function k(e, t) {
        let {
            guildId: n,
            channelId: s
        } = e;
        if (null != n && b(n, s)) return;
        V(e, t);
        let i = f.default.getWindowOpen(D.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
            r = h.default.getVoiceChannelId();
        (!i || r !== s) && (0, l.default)(e)
    }

    function M(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        w(e, t), o.default.dispatch({
            type: "STREAM_STOP",
            streamKey: e,
            appContext: __OVERLAY__ ? D.AppContext.OVERLAY : D.AppContext.APP
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
    async function L(e, t, n) {
        let s = (0, u.encodeStreamKey)({
            streamType: null != e ? N.StreamTypes.GUILD : N.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        o.default.dispatch({
            type: "STREAM_PREVIEW_FETCH_START",
            streamKey: s
        });
        try {
            let e = await a.default.get({
                url: D.Endpoints.STREAM_PREVIEW(s),
                query: {
                    version: Date.now()
                },
                oldFormErrors: !0
            });
            o.default.dispatch({
                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                streamKey: s,
                previewURL: e.body.url
            })
        } catch (t) {
            let e;
            429 === t.status && (e = t.body.retry_after * p.default.Millis.SECOND), o.default.dispatch({
                type: "STREAM_PREVIEW_FETCH_FAIL",
                streamKey: s,
                retryAfter: e
            })
        }
    }
    async function U(e) {
        try {
            await T.default.post({
                url: D.Endpoints.STREAM_NOTIFY(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.STREAM_NOTIFY
                }
            })
        } catch (e) {}
    }

    function G(e) {
        (0, y.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), o.default.dispatch({
            type: "STREAM_UPDATE_SETTINGS",
            ...e
        })
    }

    function F(e, t) {
        a.default.patch({
            url: D.Endpoints.STREAM(e),
            body: {
                region: t
            },
            oldFormErrors: !0
        })
    }

    function H() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = _.default.getCurrentUserActiveStream();
        null != t && M((0, u.encodeStreamKey)(t), e)
    }

    function x(e) {
        let {
            channelId: t,
            pid: n,
            sourceId: s,
            sourceName: i
        } = e;
        (null != n || null != s || null != i) && (o.default.dispatch({
            type: "START_BROADCAST_STREAM",
            options: {
                pid: n,
                sourceId: s,
                sourceName: i
            }
        }), null == t ? I.default.createBroadcastPrivateChannel() : O(null, t, {
            pid: n,
            sourceId: s,
            sourceName: i
        }))
    }

    function B(e, t) {
        let n = c.default.getId(),
            s = (0, u.decodeStreamKey)(t),
            i = h.default.getVoiceChannelId();
        null != i && i !== e && A.default.disconnect(), I.default.addRecipient(e, n, void 0, () => {
            C.default.call(e, !1, !1, null, () => {
                k(s)
            })
        })
    }
}
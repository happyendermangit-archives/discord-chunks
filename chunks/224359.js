function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        changeStreamRegion: function() {
            return W
        },
        closeStream: function() {
            return j
        },
        createBroadcastChannelOrStartStream: function() {
            return z
        },
        fetchStreamPreview: function() {
            return F
        },
        joinPrivateChannelAndWatchStream: function() {
            return X
        },
        notifyStreamStart: function() {
            return H
        },
        setStreamPaused: function() {
            return M
        },
        startStream: function() {
            return L
        },
        stopOwnStream: function() {
            return K
        },
        stopStream: function() {
            return B
        },
        toggleSelfStreamHidden: function() {
            return k
        },
        updateStreamSettings: function() {
            return Y
        },
        watchStream: function() {
            return w
        },
        watchStreamAndTransitionToStream: function() {
            return G
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("383959"),
        a = n("967888"),
        u = n("629815"),
        s = n("254061"),
        l = n("736381"),
        c = n("651880"),
        f = n("112982"),
        d = n("73013"),
        _ = n("217014"),
        E = n("935741"),
        p = n("306912"),
        m = n("894288"),
        y = n("665863"),
        I = n("115752"),
        h = n("388990"),
        O = n("155281"),
        T = n("463156"),
        S = n("200915"),
        v = n("651820"),
        g = n("118133"),
        A = n("585949"),
        b = n("281767"),
        N = n("367965");

    function R(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function C(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    R(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    R(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function P(e) {
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

    function D(e, t) {
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

    function L(e, t, n) {
        u.default.dispatch(P({
            type: "STREAM_START",
            streamType: null != e ? N.StreamTypes.GUILD : N.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            appContext: __OVERLAY__ ? b.AppContext.OVERLAY : b.AppContext.APP
        }, n))
    }

    function M(e, t) {
        var n = (0, l.encodeStreamKey)(e);
        u.default.dispatch({
            type: "STREAM_SET_PAUSED",
            streamKey: n,
            paused: t
        })
    }

    function U(e, t) {
        var n = E.default.getChannel(t);
        return o()(null != n, "Cannot join a null voice channel"), !y.default.isInChannel(t) && (0, I.isChannelFull)(n, y.default, p.default)
    }

    function w(e, t) {
        if (null != s.default.getRemoteSessionId()) return;
        var n = e.guildId,
            r = e.channelId;
        if (!(null != n && U(n, r))) {
            var o = (0, l.encodeStreamKey)(e),
                i = (null == t ? void 0 : t.forceMultiple) || d.default.getAllActiveStreamsForChannel(r).filter(function(e) {
                    return e.ownerId !== _.default.getId()
                }).length >= 2;
            u.default.dispatch({
                type: "STREAM_WATCH",
                streamKey: o,
                allowMultiple: i
            }), !i && (null == t || !t.noFocus) && g.default.selectParticipant(e.channelId, o)
        }
    }

    function k(e, t) {
        u.default.dispatch({
            type: "STREAM_UPDATE_SELF_HIDDEN",
            channelId: e,
            selfStreamHidden: t
        })
    }

    function G(e, t) {
        var n = e.guildId,
            r = e.channelId;
        if (!(null != n && U(n, r))) {
            w(e, t);
            var o = f.default.getWindowOpen(b.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                i = m.default.getVoiceChannelId();
            (!o || i !== r) && (0, c.default)(e)
        }
    }

    function B(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        j(e, t), u.default.dispatch({
            type: "STREAM_STOP",
            streamKey: e,
            appContext: __OVERLAY__ ? b.AppContext.OVERLAY : b.AppContext.APP
        })
    }

    function j(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        u.default.dispatch({
            type: "STREAM_CLOSE",
            streamKey: e,
            canShowFeedback: t
        })
    }

    function F(e, t, n) {
        return V.apply(this, arguments)
    }

    function V() {
        return (V = C(function(e, t, n) {
            var r, o, i, s;
            return D(this, function(c) {
                switch (c.label) {
                    case 0:
                        r = (0, l.encodeStreamKey)({
                            streamType: null != e ? N.StreamTypes.GUILD : N.StreamTypes.CALL,
                            guildId: e,
                            channelId: t,
                            ownerId: n
                        }), u.default.dispatch({
                            type: "STREAM_PREVIEW_FETCH_START",
                            streamKey: r
                        }), c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]), [4, a.HTTP.get({
                            url: b.Endpoints.STREAM_PREVIEW(r),
                            query: {
                                version: Date.now()
                            },
                            oldFormErrors: !0
                        })];
                    case 2:
                        return o = c.sent(), u.default.dispatch({
                            type: "STREAM_PREVIEW_FETCH_SUCCESS",
                            streamKey: r,
                            previewURL: o.body.url
                        }), [3, 4];
                    case 3:
                        return 429 === (i = c.sent()).status && (s = i.body.retry_after * h.default.Millis.SECOND), u.default.dispatch({
                            type: "STREAM_PREVIEW_FETCH_FAIL",
                            streamKey: r,
                            retryAfter: s
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function H(e) {
        return x.apply(this, arguments)
    }

    function x() {
        return (x = C(function(e) {
            var t;
            return D(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, T.default.post({
                            url: b.Endpoints.STREAM_NOTIFY(e),
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.STREAM_NOTIFY
                            }
                        })];
                    case 1:
                    case 2:
                        return t.sent(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function Y(e) {
        (0, O.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), u.default.dispatch(P({
            type: "STREAM_UPDATE_SETTINGS"
        }, e))
    }

    function W(e, t) {
        a.HTTP.patch({
            url: b.Endpoints.STREAM(e),
            body: {
                region: t
            },
            oldFormErrors: !0
        })
    }

    function K() {
        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = d.default.getCurrentUserActiveStream();
        null != t && B((0, l.encodeStreamKey)(t), e)
    }

    function z(e) {
        var t = e.channelId,
            n = e.pid,
            r = e.sourceId,
            o = e.sourceName;
        (null != n || null != r || null != o) && (u.default.dispatch({
            type: "START_BROADCAST_STREAM",
            options: {
                pid: n,
                sourceId: r,
                sourceName: o
            }
        }), null == t ? v.default.createBroadcastPrivateChannel() : L(null, t, {
            pid: n,
            sourceId: r,
            sourceName: o
        }))
    }

    function X(e, t) {
        var n = _.default.getId(),
            r = (0, l.decodeStreamKey)(t),
            o = m.default.getVoiceChannelId();
        null != o && o !== e && A.default.disconnect(), v.default.addRecipient(e, n, void 0, function() {
            S.default.call(e, !1, !1, null, function() {
                G(r)
            })
        })
    }
}
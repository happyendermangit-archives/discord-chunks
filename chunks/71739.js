function(e, t, n) {
    "use strict";
    n.r(t);
    var a, r = n("512722"),
        c = n.n(r),
        o = n("392711"),
        i = n.n(o),
        f = n("967888"),
        d = n("702016"),
        u = n("138860"),
        l = n("278831"),
        s = n("945816"),
        b = n("629815"),
        p = n("35523"),
        h = n("217014"),
        m = n("374550"),
        v = n("131900"),
        y = n("736381"),
        E = n("367965"),
        _ = n("281767"),
        g = n("439386");

    function O(e, t, n, a, r, c, o) {
        try {
            var i = e[c](o),
                f = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(f) : Promise.resolve(f).then(a, r)
    }
    var I = {},
        w = new s.Timeout,
        R = !1,
        T = window.document.createElement("canvas");
    T.width = 512, T.height = 288;
    var S = T.getContext("2d");

    function P() {
        w.stop(), null != a && (u.default.removeSink(a, I), a = null)
    }
    var A = i().debounce(function(e, t, n, a) {
        N(e, (0, y.encodeStreamKey)({
            streamType: null != t ? E.StreamTypes.GUILD : E.StreamTypes.CALL,
            guildId: t,
            channelId: n,
            ownerId: a
        }))
    }, 500);

    function N(e, t) {
        return C.apply(this, arguments)
    }

    function C() {
        var e;
        return e = function(e, t) {
            var n, r, o, i;
            return function(e, t) {
                var n, a, r, c, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function i(c) {
                    return function(i) {
                        return function(c) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r;
                                switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        r = c;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, a = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                            o.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && o.label < r[1]) {
                                            o.label = r[1], r = c;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2], o.ops.push(c);
                                            break
                                        }
                                        r[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                c = t.call(e, o)
                            } catch (e) {
                                c = [6, e], a = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, i])
                    }
                }
            }(this, function(s) {
                switch (s.label) {
                    case 0:
                        if (a !== e) return [2];
                        if (n = function() {
                                return N(e, t)
                            }, R) return [3, 9];
                        s.label = 1;
                    case 1:
                        return s.trys.push([1, 8, , 9]), [4, function(e, t) {
                            var n = 0;
                            return ((0, m.isPlatformEmbedded) ? function(e, t) {
                                var n = (0, d.getVoiceEngine)(),
                                    r = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
                                return new Promise(function(c, o) {
                                    var i = function(e) {
                                        try {
                                            null != e && t(e) && c(e)
                                        } catch (e) {
                                            o(e)
                                        }
                                    };
                                    r ? n.getNextVideoOutputFrame(e).then(i, function(t) {
                                        if (a === e) throw t
                                    }) : u.default.addSink(e, I, i)
                                }).finally(function() {
                                    !r && u.default.removeSink(e, I)
                                })
                            } : function(e, t) {
                                var n = (0, l.getVideoStream)(e);
                                if (null == n) return Promise.resolve(new ImageData(0, 0));
                                var a = n.getVideoTracks()[0].getSettings(),
                                    r = a.width,
                                    c = a.height,
                                    o = document.createElement("video"),
                                    i = document.createElement("canvas");
                                o.width = i.width = null != r ? r : 512, o.height = i.height = null != c ? c : 288, o.srcObject = n, o.play();
                                var f = i.getContext("2d");
                                return new Promise(function(e, n) {
                                    o.ontimeupdate = function() {
                                        null == f || f.drawImage(o, 0, 0, i.width, i.height);
                                        var a = null == f ? void 0 : f.getImageData(0, 0, i.width, i.height);
                                        try {
                                            null != a && t(a) && e(a)
                                        } catch (e) {
                                            n(e)
                                        }
                                    }
                                }).finally(function() {
                                    o.ontimeupdate = null, o.removeAttribute("srcObject"), o.load()
                                })
                            })(e, function(e) {
                                if (new Uint32Array(e.data.buffer).some(function(e) {
                                        return 0 !== e
                                    })) return !0;
                                if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
                                return !1
                            })
                        }(e, 60)];
                    case 2:
                        var y, E, g, O, P, A, C;
                        return [4, (E = Math.min(512 / (y = s.sent()).width, 288 / y.height), g = y.width * E, O = y.height * E, T.width = g, T.height = O, A = (P = window.document.createElement("canvas")).getContext("2d"), P.width = y.width, P.height = y.height, C = new ImageData(y.data, y.width, y.height), null == A || A.putImageData(C, 0, 0), new Promise(function(e) {
                            null == S || S.drawImage(P, 0, 0, y.width, y.height, 0, 0, g, O), e()
                        }))];
                    case 3:
                        if (s.sent(), r = T.toDataURL("image/jpeg"), b.default.dispatch({
                                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                                streamKey: t,
                                previewURL: r
                            }), !m.isPlatformEmbedded) return [3, 5];
                        return o = h.default.getToken(), c()(null != o, "Auth token was null while sending screenshot."), [4, v.default.makeChunkedRequest(_.Endpoints.STREAM_PREVIEW(t), {
                            thumbnail: r
                        }, {
                            method: "POST",
                            token: o
                        })];
                    case 4:
                        return s.sent(), [3, 7];
                    case 5:
                        return [4, f.HTTP.post({
                            url: _.Endpoints.STREAM_PREVIEW(t),
                            body: {
                                thumbnail: r
                            },
                            oldFormErrors: !0
                        })];
                    case 6:
                        s.sent(), s.label = 7;
                    case 7:
                        return [3, 9];
                    case 8:
                        return i = s.sent(), new p.default("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", i), a === e && w.start(6e4, n), [2];
                    case 9:
                        return a === e && (R ? w.start(6e4, n) : w.start(3e5, n)), [2]
                }
            })
        }, (C = function() {
            var t = this,
                n = arguments;
            return new Promise(function(a, r) {
                var c = e.apply(t, n);

                function o(e) {
                    O(c, a, r, o, i, "next", e)
                }

                function i(e) {
                    O(c, a, r, o, i, "throw", e)
                }
                o(void 0)
            })
        }).apply(this, arguments)
    }
    t.default = {
        init: function() {
            b.default.subscribe("CONNECTION_OPEN", P), b.default.subscribe("LOGOUT", P), b.default.subscribe("STREAM_DELETE", P), b.default.subscribe("RTC_CONNECTION_VIDEO", function(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = e.userId,
                    c = e.streamId,
                    o = e.context;
                !(null == c || o !== g.MediaEngineContextTypes.STREAM || r !== h.default.getId() || __OVERLAY__) && (P(), a = c, A(c, t, n, r))
            }), b.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", function(e) {
                R = e.videoState === _.MediaEngineVideoStates.PAUSED || !1
            })
        }
    }
}
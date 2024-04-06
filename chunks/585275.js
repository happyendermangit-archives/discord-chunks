function(e, t, a) {
    "use strict";
    let d;
    a.r(t), a("242167"), a("970173"), a("520712"), a("268111"), a("941497"), a("32026"), a("480839"), a("744285"), a("492257"), a("873817"), a("411104"), a("773603");
    var n = a("512722"),
        c = a.n(n),
        i = a("392711"),
        o = a.n(i),
        r = a("544891"),
        f = a("992774"),
        s = a("649754"),
        l = a("376398"),
        u = a("846519"),
        b = a("570140"),
        h = a("710845"),
        p = a("314897"),
        m = a("358085"),
        _ = a("998502"),
        E = a("569545"),
        g = a("70722"),
        I = a("981631"),
        O = a("65154");
    let T = {},
        w = new u.Timeout,
        v = !1,
        R = window.document.createElement("canvas");
    R.width = 512, R.height = 288;
    let S = R.getContext("2d");

    function A() {
        w.stop(), null != d && (s.default.removeSink(d, T), d = null)
    }
    let N = o().debounce((e, t, a, d) => {
        C(e, (0, E.encodeStreamKey)({
            streamType: null != t ? g.StreamTypes.GUILD : g.StreamTypes.CALL,
            guildId: t,
            channelId: a,
            ownerId: d
        }))
    }, 500);
    async function C(e, t) {
        if (d !== e) return;
        let a = () => C(e, t);
        if (!v) try {
            let a = await
            function(e, t) {
                let a = 0;
                return ((0, m.isPlatformEmbedded) ? function(e, t) {
                    let a = (0, f.getVoiceEngine)(),
                        n = (null == a ? void 0 : a.getNextVideoOutputFrame) != null;
                    return new Promise((c, i) => {
                        let o = e => {
                            try {
                                null != e && t(e) && c(e)
                            } catch (e) {
                                i(e)
                            }
                        };
                        n ? a.getNextVideoOutputFrame(e).then(o, t => {
                            if (d === e) throw t
                        }) : s.default.addSink(e, T, o)
                    }).finally(() => {
                        !n && s.default.removeSink(e, T)
                    })
                } : function(e, t) {
                    let a = (0, l.getVideoStream)(e);
                    if (null == a) return Promise.resolve(new ImageData(0, 0));
                    let {
                        width: d,
                        height: n
                    } = a.getVideoTracks()[0].getSettings(), c = document.createElement("video"), i = document.createElement("canvas");
                    c.width = i.width = null != d ? d : 512, c.height = i.height = null != n ? n : 288, c.srcObject = a, c.play();
                    let o = i.getContext("2d");
                    return new Promise((e, a) => {
                        c.ontimeupdate = () => {
                            null == o || o.drawImage(c, 0, 0, i.width, i.height);
                            let d = null == o ? void 0 : o.getImageData(0, 0, i.width, i.height);
                            try {
                                null != d && t(d) && e(d)
                            } catch (e) {
                                a(e)
                            }
                        }
                    }).finally(() => {
                        c.ontimeupdate = null, c.removeAttribute("srcObject"), c.load()
                    })
                })(e, e => {
                    if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) return !0;
                    if (++a > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
                    return !1
                })
            }(e, 60);
            await
            function(e) {
                let t = 512 / e.width,
                    a = Math.min(t, 288 / e.height),
                    d = e.width * a,
                    n = e.height * a;
                R.width = d, R.height = n;
                let c = window.document.createElement("canvas"),
                    i = c.getContext("2d");
                c.width = e.width, c.height = e.height;
                let o = new ImageData(e.data, e.width, e.height);
                return null == i || i.putImageData(o, 0, 0), new Promise(t => {
                    null == S || S.drawImage(c, 0, 0, e.width, e.height, 0, 0, d, n), t()
                })
            }(a);
            let n = R.toDataURL("image/jpeg");
            if (b.default.dispatch({
                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                    streamKey: t,
                    previewURL: n
                }), m.isPlatformEmbedded) {
                let e = p.default.getToken();
                c()(null != e, "Auth token was null while sending screenshot."), await _.default.makeChunkedRequest(I.Endpoints.STREAM_PREVIEW(t), {
                    thumbnail: n
                }, {
                    method: "POST",
                    token: e
                })
            } else await r.HTTP.post({
                url: I.Endpoints.STREAM_PREVIEW(t),
                body: {
                    thumbnail: n
                },
                oldFormErrors: !0
            })
        } catch (t) {
            new h.default("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), d === e && w.start(6e4, a);
            return
        }
        d === e && (v ? w.start(6e4, a) : w.start(3e5, a))
    }
    t.default = {
        init() {
            b.default.subscribe("CONNECTION_OPEN", A), b.default.subscribe("LOGOUT", A), b.default.subscribe("STREAM_DELETE", A), b.default.subscribe("RTC_CONNECTION_VIDEO", e => {
                let {
                    guildId: t,
                    channelId: a,
                    userId: n,
                    streamId: c,
                    context: i
                } = e;
                !(null == c || i !== O.MediaEngineContextTypes.STREAM || n !== p.default.getId() || __OVERLAY__) && (A(), d = c, N(c, t, a, n))
            }), b.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: t
                } = e;
                v = t === I.MediaEngineVideoStates.PAUSED || !1
            })
        }
    }
}
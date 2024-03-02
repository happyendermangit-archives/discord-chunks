function(e, a, t) {
    "use strict";
    let s;
    t.r(a), t.d(a, {
        default: function() {
            return C
        }
    }), t("990131"), t("477657"), t("811875"), t("90301"), t("652153"), t("28797"), t("817884"), t("597349"), t("667536"), t("690341"), t("70102"), t("506083");
    var d = t("627445"),
        n = t.n(d),
        c = t("917351"),
        i = t.n(c),
        r = t("872717"),
        o = t("784063"),
        f = t("625454"),
        l = t("441822"),
        u = t("862337"),
        p = t("913144"),
        b = t("605250"),
        h = t("271938"),
        j = t("773336"),
        m = t("50885"),
        _ = t("374014"),
        E = t("706530"),
        g = t("49111"),
        I = t("353927");
    let T = {},
        O = new u.Timeout,
        S = !1,
        A = window.document.createElement("canvas");
    A.width = 512, A.height = 288;
    let R = A.getContext("2d");

    function w() {
        O.stop(), null != s && (f.default.removeSink(s, T), s = null)
    }
    let v = i.debounce((e, a, t, s) => {
        N(e, (0, _.encodeStreamKey)({
            streamType: null != a ? E.StreamTypes.GUILD : E.StreamTypes.CALL,
            guildId: a,
            channelId: t,
            ownerId: s
        }))
    }, 500);
    async function N(e, a) {
        if (s !== e) return;
        let t = () => N(e, a);
        if (!S) try {
            let t = await
            function(e, a) {
                let t = 0;
                return ((0, j.isPlatformEmbedded) ? function(e, a) {
                    let t = (0, o.getVoiceEngine)(),
                        d = (null == t ? void 0 : t.getNextVideoOutputFrame) != null;
                    return new Promise((n, c) => {
                        let i = e => {
                            try {
                                null != e && a(e) && n(e)
                            } catch (e) {
                                c(e)
                            }
                        };
                        d ? t.getNextVideoOutputFrame(e).then(i, a => {
                            if (s === e) throw a
                        }) : f.default.addSink(e, T, i)
                    }).finally(() => {
                        !d && f.default.removeSink(e, T)
                    })
                } : function(e, a) {
                    let t = (0, l.getVideoStream)(e);
                    if (null == t) return Promise.resolve(new ImageData(0, 0));
                    let {
                        width: s,
                        height: d
                    } = t.getVideoTracks()[0].getSettings(), n = document.createElement("video"), c = document.createElement("canvas");
                    n.width = c.width = null != s ? s : 512, n.height = c.height = null != d ? d : 288, n.srcObject = t, n.play();
                    let i = c.getContext("2d");
                    return new Promise((e, t) => {
                        n.ontimeupdate = () => {
                            null == i || i.drawImage(n, 0, 0, c.width, c.height);
                            let s = null == i ? void 0 : i.getImageData(0, 0, c.width, c.height);
                            try {
                                null != s && a(s) && e(s)
                            } catch (e) {
                                t(e)
                            }
                        }
                    }).finally(() => {
                        n.ontimeupdate = null, n.removeAttribute("srcObject"), n.load()
                    })
                })(e, e => {
                    if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) return !0;
                    if (++t > a) throw Error("Timed out awaiting non-black frame after ".concat(a, " frames"));
                    return !1
                })
            }(e, 60);
            await
            function(e) {
                let a = 512 / e.width,
                    t = 288 / e.height,
                    s = Math.min(a, t),
                    d = e.width * s,
                    n = e.height * s;
                A.width = d, A.height = n;
                let c = window.document.createElement("canvas"),
                    i = c.getContext("2d");
                c.width = e.width, c.height = e.height;
                let r = new ImageData(e.data, e.width, e.height);
                return null == i || i.putImageData(r, 0, 0), new Promise(a => {
                    null == R || R.drawImage(c, 0, 0, e.width, e.height, 0, 0, d, n), a()
                })
            }(t);
            let d = A.toDataURL("image/jpeg");
            if (p.default.dispatch({
                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                    streamKey: a,
                    previewURL: d
                }), j.isPlatformEmbedded) {
                let e = h.default.getToken();
                n(null != e, "Auth token was null while sending screenshot."), await m.default.makeChunkedRequest(g.Endpoints.STREAM_PREVIEW(a), {
                    thumbnail: d
                }, {
                    method: "POST",
                    token: e
                })
            } else await r.default.post({
                url: g.Endpoints.STREAM_PREVIEW(a),
                body: {
                    thumbnail: d
                },
                oldFormErrors: !0
            })
        } catch (a) {
            new(0, b.default)("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", a), s === e && O.start(6e4, t);
            return
        }
        s === e && (S ? O.start(6e4, t) : O.start(3e5, t))
    }
    var C = {
        init() {
            p.default.subscribe("CONNECTION_OPEN", w), p.default.subscribe("LOGOUT", w), p.default.subscribe("STREAM_DELETE", w), p.default.subscribe("RTC_CONNECTION_VIDEO", e => {
                let {
                    guildId: a,
                    channelId: t,
                    userId: d,
                    streamId: n,
                    context: c
                } = e;
                !(null == n || c !== I.MediaEngineContextTypes.STREAM || d !== h.default.getId() || __OVERLAY__) && (w(), s = n, v(n, a, t, d))
            }), p.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: a
                } = e;
                S = a === g.MediaEngineVideoStates.PAUSED || !1
            })
        }
    }
}
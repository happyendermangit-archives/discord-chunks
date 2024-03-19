function(e, a, t) {
    "use strict";
    let d;
    t.r(a), t.d(a, {
        default: function() {
            return C
        }
    }), t("990131"), t("477657"), t("811875"), t("90301"), t("652153"), t("28797"), t("817884"), t("597349"), t("667536"), t("690341"), t("70102"), t("506083");
    var s = t("627445"),
        n = t.n(s),
        i = t("917351"),
        c = t.n(i),
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
        R = !1,
        v = window.document.createElement("canvas");
    v.width = 512, v.height = 288;
    let w = v.getContext("2d");

    function A() {
        O.stop(), null != d && (f.default.removeSink(d, T), d = null)
    }
    let S = c.debounce((e, a, t, d) => {
        N(e, (0, _.encodeStreamKey)({
            streamType: null != a ? E.StreamTypes.GUILD : E.StreamTypes.CALL,
            guildId: a,
            channelId: t,
            ownerId: d
        }))
    }, 500);
    async function N(e, a) {
        if (d !== e) return;
        let t = () => N(e, a);
        if (!R) try {
            let t = await
            function(e, a) {
                let t = 0;
                return ((0, j.isPlatformEmbedded) ? function(e, a) {
                    let t = (0, o.getVoiceEngine)(),
                        s = (null == t ? void 0 : t.getNextVideoOutputFrame) != null;
                    return new Promise((n, i) => {
                        let c = e => {
                            try {
                                null != e && a(e) && n(e)
                            } catch (e) {
                                i(e)
                            }
                        };
                        s ? t.getNextVideoOutputFrame(e).then(c, a => {
                            if (d === e) throw a
                        }) : f.default.addSink(e, T, c)
                    }).finally(() => {
                        !s && f.default.removeSink(e, T)
                    })
                } : function(e, a) {
                    let t = (0, l.getVideoStream)(e);
                    if (null == t) return Promise.resolve(new ImageData(0, 0));
                    let {
                        width: d,
                        height: s
                    } = t.getVideoTracks()[0].getSettings(), n = document.createElement("video"), i = document.createElement("canvas");
                    n.width = i.width = null != d ? d : 512, n.height = i.height = null != s ? s : 288, n.srcObject = t, n.play();
                    let c = i.getContext("2d");
                    return new Promise((e, t) => {
                        n.ontimeupdate = () => {
                            null == c || c.drawImage(n, 0, 0, i.width, i.height);
                            let d = null == c ? void 0 : c.getImageData(0, 0, i.width, i.height);
                            try {
                                null != d && a(d) && e(d)
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
                    d = Math.min(a, t),
                    s = e.width * d,
                    n = e.height * d;
                v.width = s, v.height = n;
                let i = window.document.createElement("canvas"),
                    c = i.getContext("2d");
                i.width = e.width, i.height = e.height;
                let r = new ImageData(e.data, e.width, e.height);
                return null == c || c.putImageData(r, 0, 0), new Promise(a => {
                    null == w || w.drawImage(i, 0, 0, e.width, e.height, 0, 0, s, n), a()
                })
            }(t);
            let s = v.toDataURL("image/jpeg");
            if (p.default.dispatch({
                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                    streamKey: a,
                    previewURL: s
                }), j.isPlatformEmbedded) {
                let e = h.default.getToken();
                n(null != e, "Auth token was null while sending screenshot."), await m.default.makeChunkedRequest(g.Endpoints.STREAM_PREVIEW(a), {
                    thumbnail: s
                }, {
                    method: "POST",
                    token: e
                })
            } else await r.default.post({
                url: g.Endpoints.STREAM_PREVIEW(a),
                body: {
                    thumbnail: s
                },
                oldFormErrors: !0
            })
        } catch (a) {
            new(0, b.default)("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", a), d === e && O.start(6e4, t);
            return
        }
        d === e && (R ? O.start(6e4, t) : O.start(3e5, t))
    }
    var C = {
        init() {
            p.default.subscribe("CONNECTION_OPEN", A), p.default.subscribe("LOGOUT", A), p.default.subscribe("STREAM_DELETE", A), p.default.subscribe("RTC_CONNECTION_VIDEO", e => {
                let {
                    guildId: a,
                    channelId: t,
                    userId: s,
                    streamId: n,
                    context: i
                } = e;
                !(null == n || i !== I.MediaEngineContextTypes.STREAM || s !== h.default.getId() || __OVERLAY__) && (A(), d = n, S(n, a, t, s))
            }), p.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: a
                } = e;
                R = a === g.MediaEngineVideoStates.PAUSED || !1
            })
        }
    }
}
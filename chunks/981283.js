function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("392711"),
        a = n("481060"),
        s = n("570140"),
        o = n("846027"),
        l = n("872810"),
        u = n("695346"),
        d = n("199902"),
        _ = n("314897"),
        c = n("650774"),
        E = n("19780"),
        I = n("594174"),
        T = n("449753"),
        f = n("569545"),
        S = n("803647"),
        h = n("70722"),
        A = n("981631");
    let m = (0, r.debounce)(l.notifyStreamStart, 1e3);
    t.default = {
        init() {
            T.default.init(), s.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: t
                } = e, n = d.default.getCurrentUserActiveStream();
                if (null != n) {
                    let e = t === A.MediaEngineVideoStates.PAUSED;
                    (0, l.setStreamPaused)(n, e)
                }
            }), s.default.subscribe("STREAM_DELETE", e => {
                e.reason === A.ApplicationStreamDeleteReasons.STREAM_FULL && ((0, l.closeStream)(e.streamKey, !1), (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("12222")]).then(n.bind(n, "309690"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                }))
            }), s.default.subscribe("STREAM_WATCH", e => {
                let {
                    streamKey: t,
                    allowMultiple: n
                } = e;
                if (n) return;
                let i = (0, f.decodeStreamKey)(t);
                d.default.getAllActiveStreams().forEach(e => {
                    if (e.ownerId !== i.ownerId) e.ownerId !== _.default.getId() && (e.ownerId === _.default.getId() && o.default.setGoLiveSource(null), (0, l.closeStream)((0, f.encodeStreamKey)(e), !1))
                })
            }), s.default.subscribe("VOICE_STATE_UPDATES", e => {
                let {
                    voiceStates: t
                } = e;
                t.forEach(e => {
                    let {
                        userId: t
                    } = e;
                    if (t !== _.default.getId()) return;
                    let n = d.default.getAllActiveStreams(),
                        i = E.default.getChannelId();
                    n.forEach(e => {
                        e.channelId !== i && (0, S.default)(e, !1)
                    })
                })
            }), s.default.subscribe("STREAM_CREATE", e => {
                var t;
                let {
                    streamKey: n
                } = e, {
                    ownerId: i,
                    guildId: r
                } = (0, f.decodeStreamKey)(n);
                if (null == r || null == i || i !== (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                let a = c.default.getMemberCount(r);
                null != a && !(a < 2) && !(a > h.STREAM_NOTIFY_GUILD_MAX_SIZE) && u.NotifyFriendsOnGoLive.getSetting() && m(n)
            })
        }
    }
}
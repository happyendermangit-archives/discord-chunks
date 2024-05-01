function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("872810"),
        o = n("569545"),
        l = n("592125"),
        u = n("112560"),
        d = n("689938");
    let _ = n("340109");

    function c(e) {
        let {
            stream: t,
            width: n,
            noArt: c = !1,
            selected: E = !1
        } = e, I = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(t.channelId));
        return r.useEffect(() => {
            (null == I ? void 0 : I.isGuildStageVoice()) && (0, s.closeStream)((0, o.encodeStreamKey)(t), !1)
        }, []), (0, i.jsx)(u.default, {
            artURL: _,
            noArt: c,
            selected: E,
            size: (0, u.getSizeForWidth)(n),
            header: d.default.Messages.STREAM_ENDED,
            onCTAClick: () => (0, s.closeStream)((0, o.encodeStreamKey)(t)),
            callToAction: d.default.Messages.CLOSE_STREAM
        })
    }
}
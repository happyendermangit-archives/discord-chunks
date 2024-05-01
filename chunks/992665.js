function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("403182"),
        s = n("715246");
    class o extends r.PureComponent {
        render() {
            let {
                src: e,
                fileSize: t,
                fileName: n,
                className: r,
                playable: o,
                volume: l,
                renderLinkComponent: u,
                onVolumeChange: d,
                onVolumeShow: _,
                onVolumeHide: c,
                autoMute: E,
                onMute: I,
                mimeType: T,
                onPlay: f
            } = this.props;
            return (0, i.jsx)(s.default, {
                src: e,
                fileName: n,
                fileSize: (0, a.sizeString)(t),
                fileSizeBytes: t,
                type: s.default.Types.AUDIO,
                className: r,
                playable: o,
                volume: l,
                onMute: I,
                autoMute: E,
                onVolumeChange: d,
                onVolumeShow: _,
                onVolumeHide: c,
                renderLinkComponent: u,
                mimeType: T,
                onPlay: f
            })
        }
    }
}
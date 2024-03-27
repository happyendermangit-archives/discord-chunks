function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, l = n("37983"),
        a = n("884691"),
        s = n("254490"),
        r = n("170113");
    i = class extends a.PureComponent {
        render() {
            let {
                src: e,
                fileSize: t,
                fileName: n,
                className: i,
                playable: a,
                volume: o,
                renderLinkComponent: u,
                onVolumeChange: d,
                onVolumeShow: c,
                onVolumeHide: f,
                autoMute: m,
                onMute: p,
                mimeType: h,
                onPlay: x
            } = this.props;
            return (0, l.jsx)(r.default, {
                src: e,
                fileName: n,
                fileSize: (0, s.sizeString)(t),
                fileSizeBytes: t,
                type: r.default.Types.AUDIO,
                className: i,
                playable: a,
                volume: o,
                onMute: p,
                autoMute: m,
                onVolumeChange: d,
                onVolumeShow: c,
                onVolumeHide: f,
                renderLinkComponent: u,
                mimeType: h,
                onPlay: x
            })
        }
    }
}
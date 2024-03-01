function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var l, i = n("37983"),
        a = n("884691"),
        s = n("254490"),
        r = n("170113");
    l = class extends a.PureComponent {
        render() {
            let {
                src: e,
                fileSize: t,
                fileName: n,
                className: l,
                playable: a,
                volume: o,
                renderLinkComponent: u,
                onVolumeChange: d,
                onVolumeShow: c,
                onVolumeHide: f,
                autoMute: m,
                onMute: p,
                mimeType: h,
                onPlay: E
            } = this.props;
            return (0, i.jsx)(r.default, {
                src: e,
                fileName: n,
                fileSize: (0, s.sizeString)(t),
                type: r.default.Types.AUDIO,
                className: l,
                playable: a,
                volume: o,
                onMute: p,
                autoMute: m,
                onVolumeChange: d,
                onVolumeShow: c,
                onVolumeHide: f,
                renderLinkComponent: u,
                mimeType: h,
                onPlay: E
            })
        }
    }
}
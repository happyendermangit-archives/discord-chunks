function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("403182"),
        a = n("261922"),
        o = n("715246"),
        l = n("981631"),
        u = n("689938");
    class d extends r.Component {
        render() {
            let {
                src: e,
                fileSize: t,
                className: n,
                mediaPlayerClassName: r,
                poster: d,
                fileName: _,
                naturalWidth: c,
                naturalHeight: E,
                playable: I,
                downloadable: T = !0,
                volume: f,
                autoPlay: S,
                autoMute: A,
                responsive: h,
                mediaLayoutType: m,
                mimeType: N,
                renderOverlayContent: O,
                renderLinkComponent: p,
                onClick: R,
                onPlay: C,
                onEnded: g,
                onVolumeChange: L,
                onMute: D,
                alt: v = u.default.Messages.VIDEO,
                ...M
            } = this.props;
            return (0, i.jsx)(a.default, {
                alt: v,
                className: n,
                src: d,
                ...M,
                minWidth: o.default.minWidth,
                minHeight: o.default.minHeight,
                shouldLink: !1,
                shouldAnimate: !1,
                mediaLayoutType: m,
                responsive: h,
                children: n => {
                    let {
                        src: a,
                        size: {
                            width: u,
                            height: d
                        }
                    } = n, v = !(c <= l.MAX_VIDEO_WIDTH && E <= l.MAX_VIDEO_HEIGHT || c <= l.MAX_VIDEO_HEIGHT && E <= l.MAX_VIDEO_WIDTH);
                    return (0, i.jsx)(o.default, {
                        className: r,
                        forceExternal: v,
                        src: e,
                        poster: a,
                        width: u,
                        height: d,
                        responsive: h,
                        volume: f,
                        autoPlay: null != S && S,
                        autoMute: null != A && A,
                        type: o.default.Types.VIDEO,
                        mediaLayoutType: m,
                        fileName: _,
                        fileSize: null == t ? void 0 : (0, s.sizeString)(t),
                        fileSizeBytes: null == t ? void 0 : t,
                        playable: I,
                        renderLinkComponent: p,
                        renderOverlayContent: O,
                        onClick: R,
                        onPlay: C,
                        onEnded: g,
                        onVolumeChange: L,
                        onMute: D,
                        mimeType: N,
                        downloadable: T
                    })
                }
            })
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("403182"),
        s = n("261922"),
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
                autoMute: h,
                responsive: A,
                mediaLayoutType: m,
                mimeType: N,
                renderOverlayContent: p,
                renderLinkComponent: O,
                onClick: R,
                onPlay: C,
                onPause: g,
                onEnded: L,
                onControlsShow: v,
                onControlsHide: D,
                onVolumeChange: M,
                onMute: y,
                alt: P = u.default.Messages.VIDEO,
                ...U
            } = this.props;
            return (0, i.jsx)(s.default, {
                alt: P,
                className: n,
                src: d,
                ...U,
                minWidth: o.default.minWidth,
                minHeight: o.default.minHeight,
                shouldLink: !1,
                shouldAnimate: !1,
                mediaLayoutType: m,
                responsive: A,
                children: n => {
                    let {
                        src: s,
                        size: {
                            width: u,
                            height: d
                        }
                    } = n, P = !(c <= l.MAX_VIDEO_WIDTH && E <= l.MAX_VIDEO_HEIGHT || c <= l.MAX_VIDEO_HEIGHT && E <= l.MAX_VIDEO_WIDTH);
                    return (0, i.jsx)(o.default, {
                        className: r,
                        forceExternal: P,
                        src: e,
                        poster: s,
                        width: u,
                        height: d,
                        responsive: A,
                        volume: f,
                        autoPlay: null != S && S,
                        autoMute: null != h && h,
                        type: o.default.Types.VIDEO,
                        mediaLayoutType: m,
                        fileName: _,
                        fileSize: null == t ? void 0 : (0, a.sizeString)(t),
                        fileSizeBytes: null == t ? void 0 : t,
                        playable: I,
                        renderLinkComponent: O,
                        renderOverlayContent: p,
                        onClick: R,
                        onPlay: C,
                        onPause: g,
                        onEnded: L,
                        onVolumeChange: M,
                        onMute: y,
                        onControlsShow: v,
                        onControlsHide: D,
                        mimeType: N,
                        downloadable: T
                    })
                }
            })
        }
    }
}
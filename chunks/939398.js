function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDesktopSourceMetadata: function() {
            return u
        },
        trackWithOverlayMetadata: function() {
            return l
        }
    });
    var s = n("161454"),
        i = n("42887"),
        r = n("703370"),
        a = n("599110"),
        o = n("716241"),
        d = n("49111");

    function u() {
        let e, t, n, r, a;
        let o = i.default.getGoLiveSource();
        if (null != o && (e = o.quality.resolution, t = o.quality.frameRate, null != o.desktopSource)) {
            var d, u;
            n = o.desktopSource.soundshareSession;
            let e = null != o.desktopSource.sourcePid ? s.default.getGameForPID(o.desktopSource.sourcePid) : null;
            r = null !== (d = null == e ? void 0 : e.name) && void 0 !== d ? d : null, a = null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : null
        }
        return {
            video_input_resolution: e,
            video_input_frame_rate: t,
            soundshare_session: n,
            share_game_name: r,
            share_game_id: a
        }
    }

    function l(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = r.default.getGame();
        switch (t = {
                ...t,
                overlay_game_name: null != s ? s.name : "Unknown Game",
                overlay_app_id: null != s ? s.id : null
            }, e) {
            case d.AnalyticEvents.VOICE_CHANNEL_SELECTED:
            case d.AnalyticEvents.SETTINGS_PANE_VIEWED:
            case d.AnalyticEvents.GUILD_VIEWED:
            case d.AnalyticEvents.CHANNEL_OPENED:
                return (0, o.trackWithMetadata)(e, t, n);
            default:
                return a.default.track(e, t, {
                    flush: n
                })
        }
    }
}
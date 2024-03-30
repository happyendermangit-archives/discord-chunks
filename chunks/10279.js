function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDesktopSourceMetadata: function() {
            return l
        },
        trackWithOverlayMetadata: function() {
            return c
        }
    });
    var r = n("654370"),
        o = n("335911"),
        i = n("215927"),
        a = n("870331"),
        u = n("140817"),
        s = n("281767");

    function l() {
        var e = o.default.getGoLiveSource();
        if (null != e && (t = e.quality.resolution, n = e.quality.frameRate, null != e.desktopSource)) {
            i = e.desktopSource.soundshareSession;
            var t, n, i, a, u, s, l, c = null != e.desktopSource.sourcePid ? r.default.getGameForPID(e.desktopSource.sourcePid) : null;
            a = null !== (s = null == c ? void 0 : c.name) && void 0 !== s ? s : null, u = null !== (l = null == c ? void 0 : c.id) && void 0 !== l ? l : null
        }
        return {
            video_input_resolution: t,
            video_input_frame_rate: n,
            soundshare_session: i,
            share_game_name: a,
            share_game_id: u
        }
    }

    function c(e, t) {
        var n, r, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = i.default.getGame();
        switch (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, t), r = (r = {
                overlay_game_name: null != l ? l.name : "Unknown Game",
                overlay_app_id: null != l ? l.id : null
            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), t = n, e) {
            case s.AnalyticEvents.VOICE_CHANNEL_SELECTED:
            case s.AnalyticEvents.SETTINGS_PANE_VIEWED:
            case s.AnalyticEvents.GUILD_VIEWED:
            case s.AnalyticEvents.CHANNEL_OPENED:
                return (0, u.trackWithMetadata)(e, t, o);
            default:
                return a.default.track(e, t, {
                    flush: o
                })
        }
    }
}
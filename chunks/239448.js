function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isCustomBackgroundOption: function() {
            return d
        },
        isDefaultBackgroundOption: function() {
            return c
        },
        getEffectAnalyticsType: function() {
            return _
        },
        getEffectDetailAnalyticsName: function() {
            return E
        },
        trackBackgroundOptionUpdated: function() {
            return h
        },
        trackBackgroundOptionAdded: function() {
            return g
        },
        trackBackgroundOptionDeleted: function() {
            return m
        },
        getVideoBackgroundProtoFromOption: function() {
            return p
        },
        getVideoBackgroundOptionFromProto: function() {
            return S
        }
    });
    var i = n("716241"),
        s = n("42203"),
        r = n("945956"),
        a = n("599110"),
        o = n("315102"),
        l = n("917219"),
        u = n("49111");

    function d(e) {
        return null != e && "object" == typeof e && "id" in e && e.type === l.VideoFilterType.BACKGROUND
    }

    function c(e) {
        return "number" == typeof e && e in l.DefaultVideoBackground
    }

    function f(e) {
        return c(e) ? l.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(e) : !!d(e) && ((0, o.isAnimatedIconHash)(e.asset) || (0, o.isVideoAssetHash)(e.asset))
    }

    function _(e) {
        return null != e ? "Video Background" : "None"
    }

    function E(e) {
        if (null == e) return "None";
        if (d(e)) return "Custom";
        if ("blur" === e) return "Blur";
        else return "Preset - ".concat(function(e) {
            switch (e) {
                case l.DefaultVideoBackground.OPTION_1:
                    return "Cybercity";
                case l.DefaultVideoBackground.OPTION_2:
                    return "Discord the Movie";
                case l.DefaultVideoBackground.OPTION_3:
                    return "Wumpus Vacation";
                case l.DefaultVideoBackground.OPTION_4:
                    return "Vaporwave";
                case l.DefaultVideoBackground.OPTION_7:
                    return "Capernite Day";
                case l.DefaultVideoBackground.OPTION_8:
                    return "Capernite Night";
                case l.DefaultVideoBackground.OPTION_9:
                    return "Hacker Den";
                case l.DefaultVideoBackground.OPTION_10:
                    return "Wumpice"
            }
        }(e))
    }

    function h(e, t, n) {
        let o = r.default.getGuildId(),
            l = r.default.getChannelId(),
            d = s.default.getChannel(l),
            c = (0, i.getVoiceStateMetadata)(o, l, !0);
        a.default.track(u.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
            location: t,
            effect_type: _(e),
            effect_detail: E(e),
            effect_state: n,
            channel_id: l,
            channel_type: null == d ? void 0 : d.type,
            guild_id: o,
            voice_state_count: c.voice_state_count,
            video_stream_count: c.video_stream_count,
            media_session_id: r.default.getMediaSessionId(),
            rtc_connection_id: r.default.getRTCConnectionId(),
            is_animated: f(e)
        })
    }

    function g(e, t, n) {
        a.default.track(u.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
            is_animated: f(e),
            is_video: t,
            is_from_tenor: n
        })
    }

    function m(e) {
        a.default.track(u.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
            is_animated: f(e)
        })
    }

    function p(e) {
        if (null == e) return {
            oneofKind: void 0
        };
        if (d(e)) return {
            oneofKind: "customAsset",
            customAsset: {
                id: e.id,
                assetHash: e.asset
            }
        };
        if ("blur" === e) return {
            oneofKind: "blur",
            blur: {
                useBlur: !0
            }
        };
        else return {
            oneofKind: "presetOption",
            presetOption: e
        }
    }

    function S(e, t) {
        if (null == e || void 0 === e.oneofKind) return null;
        switch (e.oneofKind) {
            case "customAsset":
                return {
                    type: l.VideoFilterType.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash
                };
            case "blur":
                return e.blur.useBlur ? "blur" : null;
            case "presetOption":
                return e.presetOption
        }
    }
}
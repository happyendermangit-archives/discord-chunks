function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEffectAnalyticsType: function() {
            return _
        },
        getEffectDetailAnalyticsName: function() {
            return E
        },
        getVideoBackgroundOptionFromProto: function() {
            return h
        },
        getVideoBackgroundProtoFromOption: function() {
            return I
        },
        isCustomBackgroundOption: function() {
            return c
        },
        isDefaultBackgroundOption: function() {
            return f
        },
        trackBackgroundOptionAdded: function() {
            return m
        },
        trackBackgroundOptionDeleted: function() {
            return y
        },
        trackBackgroundOptionUpdated: function() {
            return p
        }
    });
    var r = n("140817"),
        o = n("935741"),
        i = n("545072"),
        a = n("870331"),
        u = n("299529"),
        s = n("314656"),
        l = n("281767");

    function c(e) {
        return null != e && "object" == typeof e && "id" in e && e.type === s.VideoFilterType.BACKGROUND
    }

    function f(e) {
        return "number" == typeof e && e in s.DefaultVideoBackground
    }

    function d(e) {
        return f(e) ? s.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(e) : !!c(e) && ((0, u.isAnimatedIconHash)(e.asset) || (0, u.isVideoAssetHash)(e.asset))
    }

    function _(e) {
        return null != e ? "Video Background" : "None"
    }

    function E(e) {
        if (null == e) return "None";
        if (c(e)) return "Custom";
        if ("blur" === e) return "Blur";
        else return "Preset - ".concat(function(e) {
            switch (e) {
                case s.DefaultVideoBackground.OPTION_1:
                    return "Cybercity";
                case s.DefaultVideoBackground.OPTION_2:
                    return "Discord the Movie";
                case s.DefaultVideoBackground.OPTION_3:
                    return "Wumpus Vacation";
                case s.DefaultVideoBackground.OPTION_4:
                    return "Vaporwave";
                case s.DefaultVideoBackground.OPTION_7:
                    return "Capernite Day";
                case s.DefaultVideoBackground.OPTION_8:
                    return "Capernite Night";
                case s.DefaultVideoBackground.OPTION_9:
                    return "Hacker Den";
                case s.DefaultVideoBackground.OPTION_10:
                    return "Wumpice"
            }
        }(e))
    }

    function p(e, t, n) {
        var u = i.default.getGuildId(),
            s = i.default.getChannelId(),
            c = o.default.getChannel(s),
            f = (0, r.getVoiceStateMetadata)(u, s, !0);
        a.default.track(l.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
            location: t,
            effect_type: _(e),
            effect_detail: E(e),
            effect_state: n,
            channel_id: s,
            channel_type: null == c ? void 0 : c.type,
            guild_id: u,
            voice_state_count: f.voice_state_count,
            video_stream_count: f.video_stream_count,
            media_session_id: i.default.getMediaSessionId(),
            rtc_connection_id: i.default.getRTCConnectionId(),
            is_animated: d(e)
        })
    }

    function m(e, t, n) {
        a.default.track(l.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
            is_animated: d(e),
            is_video: t,
            is_from_tenor: n
        })
    }

    function y(e) {
        a.default.track(l.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
            is_animated: d(e)
        })
    }

    function I(e) {
        if (null == e) return {
            oneofKind: void 0
        };
        if (c(e)) return {
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

    function h(e, t) {
        if (null == e || void 0 === e.oneofKind) return null;
        switch (e.oneofKind) {
            case "customAsset":
                return {
                    type: s.VideoFilterType.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash
                };
            case "blur":
                return e.blur.useBlur ? "blur" : null;
            case "presetOption":
                return e.presetOption
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEffectAnalyticsType: function() {
            return E
        },
        getEffectDetailAnalyticsName: function() {
            return I
        },
        getVideoBackgroundOptionFromProto: function() {
            return h
        },
        getVideoBackgroundProtoFromOption: function() {
            return A
        },
        isCustomBackgroundOption: function() {
            return d
        },
        isDefaultBackgroundOption: function() {
            return _
        },
        trackBackgroundOptionAdded: function() {
            return f
        },
        trackBackgroundOptionDeleted: function() {
            return S
        },
        trackBackgroundOptionUpdated: function() {
            return T
        }
    });
    var i = n("367907"),
        r = n("592125"),
        s = n("19780"),
        a = n("626135"),
        o = n("768581"),
        l = n("678916"),
        u = n("981631");

    function d(e) {
        return null != e && "object" == typeof e && "id" in e && e.type === l.VideoFilterType.BACKGROUND
    }

    function _(e) {
        return "number" == typeof e && e in l.DefaultVideoBackground
    }

    function c(e) {
        return _(e) ? l.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(e) : !!d(e) && ((0, o.isAnimatedIconHash)(e.asset) || (0, o.isVideoAssetHash)(e.asset))
    }

    function E(e) {
        return null != e ? "Video Background" : "None"
    }

    function I(e) {
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

    function T(e, t, n) {
        let o = s.default.getGuildId(),
            l = s.default.getChannelId(),
            d = r.default.getChannel(l),
            _ = (0, i.getVoiceStateMetadata)(o, l, !0);
        a.default.track(u.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
            location: t,
            effect_type: E(e),
            effect_detail: I(e),
            effect_state: n,
            channel_id: l,
            channel_type: null == d ? void 0 : d.type,
            guild_id: o,
            voice_state_count: _.voice_state_count,
            video_stream_count: _.video_stream_count,
            media_session_id: s.default.getMediaSessionId(),
            rtc_connection_id: s.default.getRTCConnectionId(),
            is_animated: c(e)
        })
    }

    function f(e, t, n) {
        a.default.track(u.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
            is_animated: c(e),
            is_video: t,
            is_from_tenor: n
        })
    }

    function S(e) {
        a.default.track(u.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
            is_animated: c(e)
        })
    }

    function A(e) {
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

    function h(e, t) {
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
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVideoButtonLabel: function() {
            return i
        }
    });
    var r = n("281767"),
        o = n("941504");

    function i(e) {
        var t = e.enabled,
            n = e.join,
            i = e.channel,
            a = e.cameraUnavailable,
            u = e.hasPermission,
            s = e.channelLimit,
            l = void 0 === s ? -1 : s,
            c = e.channelLimitReached,
            f = t ? o.default.Messages.CAMERA_OFF : o.default.Messages.CAMERA_ON;
        return n && (f = (null == i ? void 0 : i.isManaged()) || !(null == i ? void 0 : i.isPrivate()) ? o.default.Messages.CONNECT_TO_VIDEO : o.default.Messages.JOIN_VIDEO_CALL), a && (f = o.default.Messages.CAMERA_UNAVAILABLE), !u && (f = o.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), void 0 !== c && c && !t && (f = (null == i ? void 0 : i.isGuildStageVoice()) ? l >= r.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? o.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : o.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : o.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
            limit: l
        })), f
    }
}
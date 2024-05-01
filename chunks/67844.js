function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVideoButtonLabel: function() {
            return a
        }
    });
    var i = n("981631"),
        r = n("689938");

    function a(e) {
        let {
            enabled: t,
            join: n,
            channel: a,
            cameraUnavailable: s,
            hasPermission: o,
            channelLimit: l = -1,
            channelLimitReached: u = !1
        } = e, d = t ? r.default.Messages.CAMERA_OFF : r.default.Messages.CAMERA_ON;
        return n && (d = (null == a ? void 0 : a.isManaged()) || !(null == a ? void 0 : a.isPrivate()) ? r.default.Messages.CONNECT_TO_VIDEO : r.default.Messages.JOIN_VIDEO_CALL), s && (d = r.default.Messages.CAMERA_UNAVAILABLE), !o && (d = r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), u && !t && (d = (null == a ? void 0 : a.isGuildStageVoice()) ? l >= i.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
            limit: l
        })), d
    }
}
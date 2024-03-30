function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CtaEventTypes: function() {
            return a
        },
        ViewNameTypes: function() {
            return i
        },
        getUserIsTeen: function() {
            return E
        },
        trackCtaEvent: function() {
            return _
        },
        trackNamedViewEvent: function() {
            return d
        },
        trackViewedEvent: function() {
            return f
        }
    });
    var r, o, i, a, u = n("208454"),
        s = n("870331"),
        l = n("837469"),
        c = n("281767");

    function f(e, t) {
        var n = t.channelId,
            r = t.warningId,
            o = t.senderId,
            i = t.warningType;
        s.default.track(e, {
            channel_id: n,
            warning_id: null != r ? parseInt(r) : void 0,
            warning_type: i,
            other_user_id: o
        })
    }

    function d(e) {
        var t = e.channelId,
            n = e.warningId,
            r = e.senderId,
            o = e.warningType,
            i = e.viewName,
            a = e.isNudgeWarning;
        s.default.track(c.AnalyticEvents.SAFETY_WARNING_VIEWED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: o,
            other_user_id: r,
            view_name: i,
            is_nudge_warning: a
        })
    }

    function _(e) {
        var t = e.channelId,
            n = e.warningId,
            r = e.senderId,
            o = e.warningType,
            i = e.cta,
            a = e.isNudgeWarning;
        s.default.track(c.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: o,
            other_user_id: r,
            cta: i,
            is_nudge_warning: a
        })
    }

    function E(e) {
        var t, n = null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed,
            r = (0, l.isStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === n || r
    }(r = i || (i = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", r.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", r.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", r.SAFETY_TOOLS_BUTTON = "safety_tools_button", (o = a || (a = {})).OPEN_MORE_TIPS = "open_more_tips", o.USER_BANNER_DISMISS = "user_banner_dismiss", o.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", o.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", o.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", o.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", o.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", o.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", o.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", o.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", o.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", o.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", o.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", o.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", o.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", o.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", o.USER_TAKEOVER_MODAL_CTL_SMS = "user_takeover_modal_ctl_sms", o.USER_TAKEOVER_MODAL_CTL_WEB = "user_takeover_modal_ctl_web", o.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", o.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", o.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", o.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", o.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock", o.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", o.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", o.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", o.USER_SAFETY_TOOLS_CTL_SMS = "user_safety_tools_ctl_sms", o.USER_SAFETY_TOOLS_CTL_WEB = "user_safety_tools_ctl_web", o.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", o.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", o.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", o.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", o.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", o.USER_MODAL_MUTE = "user_modal_mute", o.USER_MODAL_UNMUTE = "user_modal_unmute", o.FEEDBACK_UPVOTE = "feedback_upvote", o.FEEDBACK_DOWNVOTE = "feedback_downvote"
}
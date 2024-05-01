function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CtaEventTypes: function() {
            return a
        },
        ViewNameTypes: function() {
            return s
        },
        getUserIsTeen: function() {
            return I
        },
        trackCtaEvent: function() {
            return E
        },
        trackNamedViewEvent: function() {
            return c
        },
        trackViewedEvent: function() {
            return _
        }
    });
    var i, r, s, a, o = n("594174"),
        l = n("626135"),
        u = n("699816"),
        d = n("981631");

    function _(e, t) {
        let {
            channelId: n,
            warningId: i,
            senderId: r,
            warningType: s
        } = t;
        l.default.track(e, {
            channel_id: n,
            warning_id: null != i ? parseInt(i) : void 0,
            warning_type: s,
            other_user_id: r
        })
    }

    function c(e) {
        let {
            channelId: t,
            warningId: n,
            senderId: i,
            warningType: r,
            viewName: s,
            isNudgeWarning: a
        } = e;
        l.default.track(d.AnalyticEvents.SAFETY_WARNING_VIEWED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: r,
            other_user_id: i,
            view_name: s,
            is_nudge_warning: a
        })
    }

    function E(e) {
        let {
            channelId: t,
            warningId: n,
            senderId: i,
            warningType: r,
            cta: s,
            isNudgeWarning: a
        } = e;
        l.default.track(d.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: r,
            other_user_id: i,
            cta: s,
            is_nudge_warning: a
        })
    }

    function I(e) {
        var t;
        let n = null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed,
            i = (0, u.isStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === n || i
    }(i = s || (s = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", i.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", i.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", i.SAFETY_TOOLS_BUTTON = "safety_tools_button", (r = a || (a = {})).OPEN_MORE_TIPS = "open_more_tips", r.USER_BANNER_DISMISS = "user_banner_dismiss", r.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", r.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", r.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", r.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", r.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", r.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", r.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", r.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", r.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", r.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", r.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", r.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", r.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", r.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", r.USER_TAKEOVER_MODAL_CTL_SMS = "user_takeover_modal_ctl_sms", r.USER_TAKEOVER_MODAL_CTL_WEB = "user_takeover_modal_ctl_web", r.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", r.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", r.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", r.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", r.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock", r.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", r.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", r.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", r.USER_SAFETY_TOOLS_CTL_SMS = "user_safety_tools_ctl_sms", r.USER_SAFETY_TOOLS_CTL_WEB = "user_safety_tools_ctl_web", r.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", r.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", r.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", r.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", r.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", r.USER_MODAL_MUTE = "user_modal_mute", r.USER_MODAL_UNMUTE = "user_modal_unmute", r.FEEDBACK_UPVOTE = "feedback_upvote", r.FEEDBACK_DOWNVOTE = "feedback_downvote"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackViewedEvent: function() {
            return c
        },
        ViewNameTypes: function() {
            return l
        },
        trackNamedViewEvent: function() {
            return _
        },
        CtaEventTypes: function() {
            return r
        },
        trackCtaEvent: function() {
            return f
        },
        getUserIsTeen: function() {
            return E
        }
    });
    var a, i, l, r, s = n("697218"),
        u = n("599110"),
        d = n("499799"),
        o = n("49111");

    function c(e, t) {
        let {
            channelId: n,
            warningId: a,
            senderId: i,
            warningType: l
        } = t;
        u.default.track(e, {
            channel_id: n,
            warning_id: null != a ? parseInt(a) : void 0,
            warning_type: l,
            other_user_id: i
        })
    }

    function _(e) {
        let {
            channelId: t,
            warningId: n,
            senderId: a,
            warningType: i,
            viewName: l,
            isNudgeWarning: r
        } = e;
        u.default.track(o.AnalyticEvents.SAFETY_WARNING_VIEWED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: i,
            other_user_id: a,
            view_name: l,
            is_nudge_warning: r
        })
    }

    function f(e) {
        let {
            channelId: t,
            warningId: n,
            senderId: a,
            warningType: i,
            cta: l,
            isNudgeWarning: r
        } = e;
        u.default.track(o.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: i,
            other_user_id: a,
            cta: l,
            is_nudge_warning: r
        })
    }

    function E(e) {
        var t;
        let n = null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed,
            a = (0, d.isStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === n || a
    }(a = l || (l = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", a.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", a.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", a.SAFETY_TOOLS_BUTTON = "safety_tools_button", (i = r || (r = {})).OPEN_MORE_TIPS = "open_more_tips", i.USER_BANNER_DISMISS = "user_banner_dismiss", i.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", i.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", i.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", i.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", i.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", i.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", i.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", i.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", i.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", i.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", i.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", i.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", i.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", i.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", i.USER_TAKEOVER_MODAL_CTL_SMS = "user_takeover_modal_ctl_sms", i.USER_TAKEOVER_MODAL_CTL_WEB = "user_takeover_modal_ctl_web", i.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", i.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", i.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", i.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", i.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock", i.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", i.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", i.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", i.USER_SAFETY_TOOLS_CTL_SMS = "user_safety_tools_ctl_sms", i.USER_SAFETY_TOOLS_CTL_WEB = "user_safety_tools_ctl_web", i.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", i.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", i.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", i.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", i.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", i.USER_MODAL_MUTE = "user_modal_mute", i.USER_MODAL_UNMUTE = "user_modal_unmute", i.FEEDBACK_UPVOTE = "feedback_upvote", i.FEEDBACK_DOWNVOTE = "feedback_downvote"
}
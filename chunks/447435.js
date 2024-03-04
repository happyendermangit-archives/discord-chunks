function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveDefaultSetting: function() {
            return O
        },
        getExplicitContentSettingOrDefault: function() {
            return D
        },
        getShouldObscureForSetting: function() {
            return P
        },
        shouldRedactExplicitContent: function() {
            return L
        },
        updateExplicitContentSetting: function() {
            return M
        },
        ObscuredMediaTypes: function() {
            return i
        },
        isMediaObscured: function() {
            return b
        },
        getObscuredMediaForMessage: function() {
            return U
        },
        isPendingScan: function() {
            return w
        },
        TrackMediaRedactionActionType: function() {
            return s
        },
        TrackMediaRedactionContext: function() {
            return r
        },
        trackMediaRedactionAction: function() {
            return k
        },
        TimeoutCancelSource: function() {
            return a
        },
        trackScanTiming: function() {
            return V
        },
        trackScanningTimedOut: function() {
            return G
        },
        trackExplicitMediaRedactableMessagedLoaded: function() {
            return F
        },
        trackExplicitMediaScanComplete: function() {
            return x
        },
        handleExplicitMediaScanTimeoutForMessage: function() {
            return B
        },
        isExplicitMediaBelowConstraints: function() {
            return H
        }
    }), n("702976");
    var i, s, r, a, o, l, u, d, c = n("432710"),
        f = n("151426"),
        _ = n("676574"),
        h = n("155084"),
        E = n("684337"),
        g = n("845579"),
        m = n("42203"),
        p = n("27618"),
        S = n("697218"),
        v = n("599110"),
        T = n("568734"),
        I = n("983850"),
        C = n("457971"),
        A = n("612920"),
        y = n("49111"),
        N = n("568456");
    n("782340");
    let R = () => {
            let e = S.default.getCurrentUser();
            return (null == e ? void 0 : e.nsfwAllowed) === !1 ? f.ExplicitContentRedaction.BLUR : f.ExplicitContentRedaction.SHOW
        },
        O = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!e) return R();
            let n = g.ExplicitContentFilter.getSetting();
            return t ? n === N.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? f.ExplicitContentRedaction.BLOCK : R() : n === N.ExplicitContentFilterTypes.NON_FRIENDS || n === N.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? f.ExplicitContentRedaction.BLOCK : R()
        },
        D = () => {
            let e = g.ExplicitContentSettings.getSetting();
            return {
                explicitContentGuilds: e.explicitContentGuilds === f.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O() : e.explicitContentGuilds,
                explicitContentNonFriendDm: e.explicitContentNonFriendDm === f.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O(!0) : e.explicitContentNonFriendDm,
                explicitContentFriendDm: e.explicitContentFriendDm === f.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O(!0, !0) : e.explicitContentFriendDm
            }
        };

    function P(e) {
        return e === f.ExplicitContentRedaction.BLUR || e === f.ExplicitContentRedaction.BLOCK
    }

    function L(e) {
        var t;
        if (!(0, C.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = S.default.getCurrentUser();
        if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
        let {
            explicitContentGuilds: i,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r
        } = D(), a = m.default.getChannel(e.channel_id);
        if (null == a) return !1;
        if (a.isDM() || a.isGroupDM()) return null != e.author && p.default.getFriendIDs().includes(e.author.id) ? P(s) : P(r);
        return P(i)
    }
    let M = e => {
        let t = D();
        g.ExplicitContentSettings.updateSetting({
            ...t,
            ...e
        })
    };

    function b(e, t) {
        var n, i;
        if (!t) return !1;
        if (_.default.get("obscure_blur_effect_enabled")) return !0;
        switch (e.type) {
            case 1:
                return (0, T.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, y.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
            case 0:
                return (0, T.hasFlag)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, y.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
            default:
                return !1
        }
    }

    function U(e) {
        let t = L(e);
        return t ? {
            obscuredAttachments: e.attachments.filter(e => b({
                type: 0,
                media: e
            }, !0)),
            obscuredEmbeds: e.embeds.filter(e => b({
                type: 1,
                media: e
            }, !0))
        } : {
            obscuredAttachments: [],
            obscuredEmbeds: []
        }
    }

    function w(e) {
        return !_.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
    }

    function k(e) {
        let {
            action: t,
            channelId: n,
            messageId: i,
            context: s
        } = e;
        if (null == n || null == i) return;
        let r = m.default.getChannel(n);
        v.default.track(y.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
            action: t,
            guild_id: null == r ? void 0 : r.guild_id,
            channel_id: n,
            message_id: i,
            user_is_underage: (0, E.isCurrentUserTeen)(),
            context: s
        })
    }

    function V(e, t) {
        let n = Date.now() - e;
        h.default.increment({
            name: c.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
            tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t)]
        })
    }

    function G(e) {
        let {
            channelId: t,
            messageId: n,
            attachmentIds: i,
            embedIds: s
        } = e;
        if (null == t || null == n) return;
        let r = m.default.getChannel(t);
        v.default.track(y.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
            channel_id: t,
            guild_id: null == r ? void 0 : r.guild_id,
            message_id: n,
            embed_ids: s,
            user_is_underage: (0, E.isCurrentUserTeen)(),
            scan_timeout_duration: I.MESSAGE_SCAN_TIMEOUT,
            attachment_ids_v2: i
        }), h.default.increment({
            name: c.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT
        })
    }

    function F(e) {
        let {
            channelId: t,
            numOfAttachments: n,
            numOfAttachmentsPendingScan: i,
            numOfEmbeds: s,
            numOfEmbedsPendingScan: r
        } = e;
        if (null == t) return;
        let a = m.default.getChannel(t);
        v.default.track(y.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
            channel_id: t,
            guild_id: null == a ? void 0 : a.guild_id,
            num_of_attachments: n,
            num_of_attachments_pending_scan: i,
            num_of_embeds: s,
            num_of_embeds_pending_scan: r
        })
    }

    function x(e) {
        let {
            messageId: t,
            channelId: n,
            numOfAttachments: i,
            numOfExplicitAttachments: s,
            numOfEmbeds: r,
            numOfExplicitEmbeds: a
        } = e;
        if (null == n) return;
        let o = m.default.getChannel(n);
        v.default.track(y.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
            message_id: t,
            channel_id: n,
            channel_type: null == o ? void 0 : o.type,
            guild_id: null == o ? void 0 : o.guild_id,
            num_of_attachments: i,
            num_of_explicit_attachments: s,
            num_of_embeds: r,
            num_of_explicit_embeds: a
        })
    }

    function B(e) {
        let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e));
        e = e.set("attachments", t);
        let n = e.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
        return e = e.set("embeds", n)
    }(o = i || (i = {}))[o.Attachment = 0] = "Attachment", o[o.Embed = 1] = "Embed", (l = s || (s = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", l.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", l.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", (u = r || (r = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", (d = a || (a = {})).UPDATE = "update", d.TIMEOUT = "timeout";
    let H = (e, t) => null != e && null != t && (e <= A.EXPLICIT_MEDIA_MIN_WIDTH || t <= A.EXPLICIT_MEDIA_MIN_HEIGHT)
}
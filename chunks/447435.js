function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveDefaultSetting: function() {
            return O
        },
        getExplicitContentSettingOrDefault: function() {
            return P
        },
        getShouldObscureForSetting: function() {
            return b
        },
        shouldRedactExplicitContent: function() {
            return V
        },
        updateExplicitContentSetting: function() {
            return R
        },
        ObscuredMediaTypes: function() {
            return s
        },
        isMediaObscured: function() {
            return k
        },
        getObscuredMediaForMessage: function() {
            return M
        },
        isPendingScan: function() {
            return w
        },
        TrackMediaRedactionActionType: function() {
            return i
        },
        TrackMediaRedactionContext: function() {
            return r
        },
        trackMediaRedactionAction: function() {
            return L
        },
        TimeoutCancelSource: function() {
            return a
        },
        trackScanTiming: function() {
            return U
        },
        trackScanningTimedOut: function() {
            return G
        },
        trackExplicitMediaRedactableMessagedLoaded: function() {
            return F
        },
        trackExplicitMediaScanComplete: function() {
            return H
        },
        handleExplicitMediaScanTimeoutForMessage: function() {
            return B
        },
        isExplicitMediaBelowConstraints: function() {
            return x
        }
    }), n("702976");
    var s, i, r, a, o, d, u, l, f = n("432710"),
        _ = n("151426"),
        c = n("676574"),
        g = n("155084"),
        m = n("684337"),
        h = n("845579"),
        v = n("42203"),
        E = n("27618"),
        p = n("697218"),
        y = n("599110"),
        T = n("568734"),
        C = n("983850"),
        I = n("457971"),
        S = n("612920"),
        A = n("49111"),
        D = n("568456");
    n("782340");
    let N = () => {
            let e = p.default.getCurrentUser();
            return (null == e ? void 0 : e.nsfwAllowed) === !1 ? _.ExplicitContentRedaction.BLUR : _.ExplicitContentRedaction.SHOW
        },
        O = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!e) return N();
            let n = h.ExplicitContentFilter.getSetting();
            return t ? n === D.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? _.ExplicitContentRedaction.BLOCK : N() : n === D.ExplicitContentFilterTypes.NON_FRIENDS || n === D.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? _.ExplicitContentRedaction.BLOCK : N()
        },
        P = () => {
            let e = h.ExplicitContentSettings.getSetting();
            return {
                explicitContentGuilds: e.explicitContentGuilds === _.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O() : e.explicitContentGuilds,
                explicitContentNonFriendDm: e.explicitContentNonFriendDm === _.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O(!0) : e.explicitContentNonFriendDm,
                explicitContentFriendDm: e.explicitContentFriendDm === _.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O(!0, !0) : e.explicitContentFriendDm
            }
        };

    function b(e) {
        return e === _.ExplicitContentRedaction.BLUR || e === _.ExplicitContentRedaction.BLOCK
    }

    function V(e) {
        var t;
        if (!(0, I.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = p.default.getCurrentUser();
        if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
        let {
            explicitContentGuilds: s,
            explicitContentFriendDm: i,
            explicitContentNonFriendDm: r
        } = P(), a = v.default.getChannel(e.channel_id);
        if (null == a) return !1;
        if (a.isDM() || a.isGroupDM()) return null != e.author && E.default.getFriendIDs().includes(e.author.id) ? b(i) : b(r);
        return b(s)
    }
    let R = e => {
        let t = P();
        h.ExplicitContentSettings.updateSetting({
            ...t,
            ...e
        })
    };

    function k(e, t) {
        var n, s;
        if (!t) return !1;
        if (c.default.get("obscure_blur_effect_enabled")) return !0;
        switch (e.type) {
            case 1:
                return (0, T.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, A.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
            case 0:
                return (0, T.hasFlag)(null !== (s = e.media.flags) && void 0 !== s ? s : 0, A.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
            default:
                return !1
        }
    }

    function M(e) {
        let t = V(e);
        return t ? {
            obscuredAttachments: e.attachments.filter(e => k({
                type: 0,
                media: e
            }, !0)),
            obscuredEmbeds: e.embeds.filter(e => k({
                type: 1,
                media: e
            }, !0))
        } : {
            obscuredAttachments: [],
            obscuredEmbeds: []
        }
    }

    function w(e) {
        return !c.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
    }

    function L(e) {
        let {
            action: t,
            channelId: n,
            messageId: s,
            context: i
        } = e;
        if (null == n || null == s) return;
        let r = v.default.getChannel(n);
        y.default.track(A.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
            action: t,
            guild_id: null == r ? void 0 : r.guild_id,
            channel_id: n,
            message_id: s,
            user_is_underage: (0, m.isCurrentUserTeen)(),
            context: i
        })
    }

    function U(e, t) {
        let n = Date.now() - e;
        g.default.increment({
            name: f.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
            tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t)]
        })
    }

    function G(e) {
        let {
            channelId: t,
            messageId: n,
            attachmentIds: s,
            embedIds: i
        } = e;
        if (null == t || null == n) return;
        let r = v.default.getChannel(t);
        y.default.track(A.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
            channel_id: t,
            guild_id: null == r ? void 0 : r.guild_id,
            message_id: n,
            embed_ids: i,
            user_is_underage: (0, m.isCurrentUserTeen)(),
            scan_timeout_duration: C.MESSAGE_SCAN_TIMEOUT,
            attachment_ids_v2: s
        }), g.default.increment({
            name: f.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT
        })
    }

    function F(e) {
        let {
            channelId: t,
            numOfAttachments: n,
            numOfAttachmentsPendingScan: s,
            numOfEmbeds: i,
            numOfEmbedsPendingScan: r
        } = e;
        if (null == t) return;
        let a = v.default.getChannel(t);
        y.default.track(A.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
            channel_id: t,
            guild_id: null == a ? void 0 : a.guild_id,
            num_of_attachments: n,
            num_of_attachments_pending_scan: s,
            num_of_embeds: i,
            num_of_embeds_pending_scan: r
        })
    }

    function H(e) {
        let {
            messageId: t,
            channelId: n,
            numOfAttachments: s,
            numOfExplicitAttachments: i,
            numOfEmbeds: r,
            numOfExplicitEmbeds: a
        } = e;
        if (null == n) return;
        let o = v.default.getChannel(n);
        y.default.track(A.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
            message_id: t,
            channel_id: n,
            channel_type: null == o ? void 0 : o.type,
            guild_id: null == o ? void 0 : o.guild_id,
            num_of_attachments: s,
            num_of_explicit_attachments: i,
            num_of_embeds: r,
            num_of_explicit_embeds: a
        })
    }

    function B(e) {
        let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e));
        e = e.set("attachments", t);
        let n = e.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
        return e = e.set("embeds", n)
    }(o = s || (s = {}))[o.Attachment = 0] = "Attachment", o[o.Embed = 1] = "Embed", (d = i || (i = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", d.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", d.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", d.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", d.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", d.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", d.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", d.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", d.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", d.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", (u = r || (r = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", (l = a || (a = {})).UPDATE = "update", l.TIMEOUT = "timeout";
    let x = (e, t) => null != e && null != t && (e <= S.EXPLICIT_MEDIA_MIN_WIDTH || t <= S.EXPLICIT_MEDIA_MIN_HEIGHT)
}
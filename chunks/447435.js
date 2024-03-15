function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveSettingWithDefaults: function() {
            return U
        },
        getExplicitContentSettingOrDefault: function() {
            return V
        },
        getShouldObscureForSetting: function() {
            return G
        },
        shouldRedactExplicitContent: function() {
            return F
        },
        updateExplicitContentSetting: function() {
            return x
        },
        ObscuredMediaTypes: function() {
            return i
        },
        isMediaObscured: function() {
            return B
        },
        getObscuredMediaForMessage: function() {
            return H
        },
        isPendingScan: function() {
            return Y
        },
        TrackMediaRedactionActionType: function() {
            return s
        },
        TrackMediaRedactionContext: function() {
            return r
        },
        trackMediaRedactionAction: function() {
            return K
        },
        TimeoutCancelSource: function() {
            return a
        },
        trackScanTiming: function() {
            return j
        },
        trackScanningTimedOut: function() {
            return W
        },
        trackExplicitMediaRedactableMessagedLoaded: function() {
            return z
        },
        trackExplicitMediaScanComplete: function() {
            return q
        },
        handleExplicitMediaScanTimeoutForMessage: function() {
            return X
        },
        isExplicitMediaBelowConstraints: function() {
            return Q
        }
    }), n("702976");
    var i, s, r, a, o, l, u, d, c = n("432710"),
        f = n("151426"),
        _ = n("676574"),
        E = n("155084"),
        h = n("684337"),
        g = n("845579"),
        m = n("42203"),
        p = n("27618"),
        S = n("697218"),
        v = n("599110"),
        T = n("568734"),
        I = n("983850"),
        A = n("318137"),
        C = n("457971"),
        y = n("612920"),
        N = n("49111"),
        R = n("568456");
    n("782340");
    let O = {
            [R.ExplicitContentFilterTypes.DISABLED.valueOf()]: f.ExplicitContentRedaction.SHOW,
            [R.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.SHOW,
            [R.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK
        },
        D = {
            [R.ExplicitContentFilterTypes.DISABLED.valueOf()]: f.ExplicitContentRedaction.SHOW,
            [R.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK,
            [R.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK
        },
        P = {
            [R.ExplicitContentFilterTypes.DISABLED.valueOf()]: f.ExplicitContentRedaction.BLUR,
            [R.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLUR,
            [R.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK
        },
        L = {
            [R.ExplicitContentFilterTypes.DISABLED.valueOf()]: f.ExplicitContentRedaction.BLUR,
            [R.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK,
            [R.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK
        },
        M = {
            [R.ExplicitContentFilterTypes.DISABLED.valueOf()]: f.ExplicitContentRedaction.BLUR,
            [R.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLUR,
            [R.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK
        },
        b = {
            [R.ExplicitContentFilterTypes.DISABLED.valueOf()]: f.ExplicitContentRedaction.BLUR,
            [R.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK,
            [R.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: f.ExplicitContentRedaction.BLOCK
        },
        U = e => {
            let {
                setting: t,
                isDm: n = !1,
                isFriend: i = !1
            } = e;
            if (null != t && t !== f.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
            let s = S.default.getCurrentUser();
            return (null == s ? void 0 : s.nsfwAllowed) === !1 ? k({
                isDm: n,
                isFriend: i
            }) : w({
                isDm: n,
                isFriend: i
            })
        },
        w = e => {
            let {
                isDm: t = !1,
                isFriend: n = !1
            } = e, i = (0, A.isEligibleForNewAdultDefaults)("explicit_media_redaction_utils");
            if (i && !t) return f.ExplicitContentRedaction.BLUR;
            if (!t) return f.ExplicitContentRedaction.SHOW;
            let s = g.ExplicitContentFilter.getSetting();
            return n ? i ? P[s] : O[s] : i ? L[s] : D[s]
        },
        k = e => {
            let {
                isDm: t = !1,
                isFriend: n = !1
            } = e;
            if (!t) return f.ExplicitContentRedaction.BLUR;
            let i = g.ExplicitContentFilter.getSetting();
            return n ? M[i] : b[i]
        },
        V = () => {
            let e = g.ExplicitContentSettings.getSetting();
            return {
                explicitContentGuilds: U({
                    setting: null == e ? void 0 : e.explicitContentGuilds
                }),
                explicitContentNonFriendDm: U({
                    setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                    isDm: !0
                }),
                explicitContentFriendDm: U({
                    setting: null == e ? void 0 : e.explicitContentFriendDm,
                    isDm: !0,
                    isFriend: !0
                })
            }
        };

    function G(e) {
        return e === f.ExplicitContentRedaction.BLUR || e === f.ExplicitContentRedaction.BLOCK
    }

    function F(e) {
        var t;
        if (!(0, C.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = S.default.getCurrentUser();
        if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
        let {
            explicitContentGuilds: i,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r
        } = V(), a = m.default.getChannel(e.channel_id);
        if (null == a) return !1;
        if (a.isDM() || a.isGroupDM()) return null != e.author && p.default.getFriendIDs().includes(e.author.id) ? G(s) : G(r);
        return G(i)
    }
    let x = e => {
        let t = V();
        g.ExplicitContentSettings.updateSetting({
            ...t,
            ...e
        })
    };

    function B(e, t) {
        var n, i;
        if (!t) return !1;
        if (_.default.get("obscure_blur_effect_enabled")) return !0;
        switch (e.type) {
            case 1:
                return (0, T.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, N.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
            case 0:
                return (0, T.hasFlag)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, N.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
            default:
                return !1
        }
    }

    function H(e) {
        let t = F(e);
        return t ? {
            obscuredAttachments: e.attachments.filter(e => B({
                type: 0,
                media: e
            }, !0)),
            obscuredEmbeds: e.embeds.filter(e => B({
                type: 1,
                media: e
            }, !0))
        } : {
            obscuredAttachments: [],
            obscuredEmbeds: []
        }
    }

    function Y(e) {
        return !_.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
    }

    function K(e) {
        let {
            action: t,
            channelId: n,
            messageId: i,
            context: s
        } = e;
        if (null == n || null == i) return;
        let r = m.default.getChannel(n);
        v.default.track(N.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
            action: t,
            guild_id: null == r ? void 0 : r.guild_id,
            channel_id: n,
            message_id: i,
            user_is_underage: (0, h.isCurrentUserTeen)(),
            context: s
        })
    }

    function j(e, t) {
        let n = Date.now() - e;
        E.default.increment({
            name: c.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
            tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t), "metricVersion:".concat(1)]
        })
    }

    function W(e) {
        var t, n;
        let {
            channelId: i,
            messageId: s,
            attachmentIds: r,
            embedIds: a
        } = e;
        if (null == i || null == s || (null !== (t = null == r ? void 0 : r.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0) === 0) return;
        let o = m.default.getChannel(i);
        v.default.track(N.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
            channel_id: i,
            guild_id: null == o ? void 0 : o.guild_id,
            message_id: s,
            embed_ids: a,
            user_is_underage: (0, h.isCurrentUserTeen)(),
            scan_timeout_duration: I.MESSAGE_SCAN_TIMEOUT,
            attachment_ids_v2: r
        }), E.default.increment({
            name: c.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ["metricVersion:".concat(1)]
        })
    }

    function z(e) {
        let {
            channelId: t,
            numOfAttachments: n,
            numOfAttachmentsPendingScan: i,
            numOfEmbeds: s,
            numOfEmbedsPendingScan: r
        } = e;
        if (null == t) return;
        let a = m.default.getChannel(t);
        v.default.track(N.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
            channel_id: t,
            guild_id: null == a ? void 0 : a.guild_id,
            num_of_attachments: n,
            num_of_attachments_pending_scan: i,
            num_of_embeds: s,
            num_of_embeds_pending_scan: r
        })
    }

    function q(e) {
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
        v.default.track(N.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
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

    function X(e) {
        let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e));
        e = e.set("attachments", t);
        let n = e.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
        return e = e.set("embeds", n)
    }(o = i || (i = {}))[o.Attachment = 0] = "Attachment", o[o.Embed = 1] = "Embed", (l = s || (s = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", l.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", l.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", (u = r || (r = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", (d = a || (a = {})).UPDATE = "update", d.TIMEOUT = "timeout";
    let Q = (e, t) => null != e && null != t && (e <= y.EXPLICIT_MEDIA_MIN_WIDTH || t <= y.EXPLICIT_MEDIA_MIN_HEIGHT)
}
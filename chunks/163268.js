function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscuredMediaTypes: function() {
            return i
        },
        TimeoutCancelSource: function() {
            return a
        },
        TrackMediaRedactionActionType: function() {
            return r
        },
        TrackMediaRedactionContext: function() {
            return s
        },
        getExplicitContentSettingOrDefault: function() {
            return k
        },
        getObscuredMediaForMessage: function() {
            return H
        },
        getShouldObscureForSetting: function() {
            return B
        },
        handleExplicitMediaScanTimeoutForMessage: function() {
            return Q
        },
        isExplicitMediaBelowConstraints: function() {
            return q
        },
        isMediaObscured: function() {
            return x
        },
        isPendingScan: function() {
            return Y
        },
        resolveSettingWithDefaults: function() {
            return b
        },
        shouldRedactExplicitContent: function() {
            return V
        },
        trackExplicitMediaRedactableMessagedLoaded: function() {
            return z
        },
        trackExplicitMediaScanComplete: function() {
            return X
        },
        trackMediaRedactionAction: function() {
            return j
        },
        trackScanTiming: function() {
            return W
        },
        trackScanningTimedOut: function() {
            return K
        },
        updateExplicitContentSetting: function() {
            return F
        }
    }), n("789020");
    var i, r, s, a, o, l, u, d, _ = n("286379"),
        c = n("524437"),
        E = n("432877"),
        I = n("797614"),
        T = n("182274"),
        f = n("695346"),
        S = n("592125"),
        h = n("699516"),
        A = n("594174"),
        m = n("626135"),
        N = n("630388"),
        O = n("948561"),
        p = n("160330"),
        R = n("651530"),
        C = n("719548"),
        g = n("981631"),
        L = n("973005");
    n("689938");
    let D = {
            [L.ExplicitContentFilterTypes.DISABLED.valueOf()]: c.ExplicitContentRedaction.SHOW,
            [L.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.SHOW,
            [L.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK
        },
        v = {
            [L.ExplicitContentFilterTypes.DISABLED.valueOf()]: c.ExplicitContentRedaction.SHOW,
            [L.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK,
            [L.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK
        },
        M = {
            [L.ExplicitContentFilterTypes.DISABLED.valueOf()]: c.ExplicitContentRedaction.BLUR,
            [L.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLUR,
            [L.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK
        },
        y = {
            [L.ExplicitContentFilterTypes.DISABLED.valueOf()]: c.ExplicitContentRedaction.BLUR,
            [L.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK,
            [L.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK
        },
        P = {
            [L.ExplicitContentFilterTypes.DISABLED.valueOf()]: c.ExplicitContentRedaction.BLUR,
            [L.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLUR,
            [L.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK
        },
        U = {
            [L.ExplicitContentFilterTypes.DISABLED.valueOf()]: c.ExplicitContentRedaction.BLUR,
            [L.ExplicitContentFilterTypes.NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK,
            [L.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.ExplicitContentRedaction.BLOCK
        },
        b = e => {
            let {
                setting: t,
                isDm: n = !1,
                isFriend: i = !1
            } = e;
            if (null != t && t !== c.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
            let r = A.default.getCurrentUser();
            return (null == r ? void 0 : r.nsfwAllowed) === !1 ? w({
                isDm: n,
                isFriend: i
            }) : G({
                isDm: n,
                isFriend: i
            })
        },
        G = e => {
            let {
                isDm: t = !1,
                isFriend: n = !1
            } = e, i = (0, p.isEligibleForNewAdultDefaults)("explicit_media_redaction_utils");
            if (i && !t) return c.ExplicitContentRedaction.BLUR;
            if (!t) return c.ExplicitContentRedaction.SHOW;
            let r = f.ExplicitContentFilter.getSetting();
            return n ? i ? M[r] : D[r] : i ? y[r] : v[r]
        },
        w = e => {
            let {
                isDm: t = !1,
                isFriend: n = !1
            } = e;
            if (!t) return c.ExplicitContentRedaction.BLUR;
            let i = f.ExplicitContentFilter.getSetting();
            return n ? P[i] : U[i]
        },
        k = () => {
            let e = f.ExplicitContentSettings.getSetting();
            return {
                explicitContentGuilds: b({
                    setting: null == e ? void 0 : e.explicitContentGuilds
                }),
                explicitContentNonFriendDm: b({
                    setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                    isDm: !0
                }),
                explicitContentFriendDm: b({
                    setting: null == e ? void 0 : e.explicitContentFriendDm,
                    isDm: !0,
                    isFriend: !0
                })
            }
        };

    function B(e) {
        return e === c.ExplicitContentRedaction.BLUR || e === c.ExplicitContentRedaction.BLOCK
    }

    function V(e) {
        var t;
        if (!(0, R.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = A.default.getCurrentUser();
        if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
        let {
            explicitContentGuilds: i,
            explicitContentFriendDm: r,
            explicitContentNonFriendDm: s
        } = k(), a = S.default.getChannel(e.channel_id);
        if (null == a) return !1;
        if (a.isDM() || a.isGroupDM()) return null != e.author && h.default.getFriendIDs().includes(e.author.id) ? B(r) : B(s);
        return B(i)
    }
    let F = e => {
        let t = k();
        f.ExplicitContentSettings.updateSetting({
            ...t,
            ...e
        })
    };

    function x(e, t) {
        var n, i;
        if (!t) return !1;
        if (E.default.get("obscure_blur_effect_enabled")) return !0;
        switch (e.type) {
            case 1:
                return (0, N.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, g.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
            case 0:
                return (0, N.hasFlag)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, g.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
            default:
                return !1
        }
    }

    function H(e) {
        return V(e) ? {
            obscuredAttachments: e.attachments.filter(e => x({
                type: 0,
                media: e
            }, !0)),
            obscuredEmbeds: e.embeds.filter(e => x({
                type: 1,
                media: e
            }, !0))
        } : {
            obscuredAttachments: [],
            obscuredEmbeds: []
        }
    }

    function Y(e) {
        return !E.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
    }

    function j(e) {
        let {
            action: t,
            channelId: n,
            messageId: i,
            context: r
        } = e;
        if (null == n || null == i) return;
        let s = S.default.getChannel(n);
        m.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
            action: t,
            guild_id: null == s ? void 0 : s.guild_id,
            channel_id: n,
            message_id: i,
            user_is_underage: (0, T.isCurrentUserTeen)(),
            context: r
        })
    }

    function W(e, t) {
        let n = Date.now() - e;
        I.default.increment({
            name: _.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
            tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t), "metricVersion:".concat(1)]
        })
    }

    function K(e) {
        var t, n, i, r;
        let {
            channelId: s,
            messageId: a,
            attachmentIds: o,
            embedIds: l
        } = e;
        if (null == s || null == a || (null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0) === 0) return;
        let u = S.default.getChannel(s);
        m.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
            channel_id: s,
            guild_id: null == u ? void 0 : u.guild_id,
            message_id: a,
            embed_ids: l,
            user_is_underage: (0, T.isCurrentUserTeen)(),
            scan_timeout_duration: O.MESSAGE_SCAN_TIMEOUT,
            attachment_ids_v2: o
        }), I.default.increment({
            name: _.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ["metricVersion:".concat(1)]
        }), I.default.distribution({
            name: _.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION
        }, (null !== (i = null == o ? void 0 : o.length) && void 0 !== i ? i : 0) + (null !== (r = null == l ? void 0 : l.length) && void 0 !== r ? r : 0))
    }

    function z(e) {
        let {
            channelId: t,
            numOfAttachments: n,
            numOfAttachmentsPendingScan: i,
            numOfEmbeds: r,
            numOfEmbedsPendingScan: s
        } = e;
        if (null == t) return;
        let a = S.default.getChannel(t);
        m.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
            channel_id: t,
            guild_id: null == a ? void 0 : a.guild_id,
            num_of_attachments: n,
            num_of_attachments_pending_scan: i,
            num_of_embeds: r,
            num_of_embeds_pending_scan: s
        });
        let o = i + s;
        o > 0 && I.default.distribution({
            name: _.MetricEvents.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2
        }, o)
    }

    function X(e) {
        let {
            messageId: t,
            channelId: n,
            numOfAttachments: i,
            numOfExplicitAttachments: r,
            numOfEmbeds: s,
            numOfExplicitEmbeds: a
        } = e;
        if (null == n) return;
        let o = S.default.getChannel(n);
        m.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
            message_id: t,
            channel_id: n,
            channel_type: null == o ? void 0 : o.type,
            guild_id: null == o ? void 0 : o.guild_id,
            num_of_attachments: i,
            num_of_explicit_attachments: r,
            num_of_embeds: s,
            num_of_explicit_embeds: a
        })
    }

    function Q(e) {
        let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
            n = (e = e.set("attachments", t)).embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
        return e = e.set("embeds", n)
    }(o = i || (i = {}))[o.Attachment = 0] = "Attachment", o[o.Embed = 1] = "Embed", (l = r || (r = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", l.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", l.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", (u = s || (s = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", (d = a || (a = {})).UPDATE = "update", d.TIMEOUT = "timeout";
    let q = (e, t) => null != e && null != t && (e <= C.EXPLICIT_MEDIA_MIN_WIDTH || t <= C.EXPLICIT_MEDIA_MIN_HEIGHT)
}
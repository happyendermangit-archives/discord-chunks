function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscuredMediaTypes: function() {
            return f
        },
        TimeoutCancelSource: function() {
            return E
        },
        TrackMediaRedactionActionType: function() {
            return d
        },
        TrackMediaRedactionContext: function() {
            return _
        },
        getExplicitContentSettingOrDefault: function() {
            return j
        },
        getObscuredMediaForMessage: function() {
            return Y
        },
        getShouldObscureForSetting: function() {
            return F
        },
        handleExplicitMediaScanTimeoutForMessage: function() {
            return J
        },
        isExplicitMediaBelowConstraints: function() {
            return Z
        },
        isMediaObscured: function() {
            return x
        },
        isPendingScan: function() {
            return W
        },
        resolveSettingWithDefaults: function() {
            return k
        },
        shouldRedactExplicitContent: function() {
            return V
        },
        trackExplicitMediaRedactableMessagedLoaded: function() {
            return q
        },
        trackExplicitMediaScanComplete: function() {
            return Q
        },
        trackMediaRedactionAction: function() {
            return K
        },
        trackScanTiming: function() {
            return z
        },
        trackScanningTimedOut: function() {
            return X
        },
        updateExplicitContentSetting: function() {
            return H
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p = n("767556"),
        m = n("14782"),
        y = n("834704"),
        I = n("35911"),
        h = n("282361"),
        O = n("53867"),
        T = n("935741"),
        S = n("776982"),
        v = n("208454"),
        g = n("870331"),
        A = n("947248"),
        b = n("438030"),
        N = n("688221"),
        R = n("62261"),
        C = n("281767"),
        P = n("709446");

    function D(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n("941504");
    var L = (D(u = {}, P.ExplicitContentFilterTypes.DISABLED.valueOf(), m.ExplicitContentRedaction.SHOW), D(u, P.ExplicitContentFilterTypes.NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.SHOW), D(u, P.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLOCK), u),
        M = (D(s = {}, P.ExplicitContentFilterTypes.DISABLED.valueOf(), m.ExplicitContentRedaction.SHOW), D(s, P.ExplicitContentFilterTypes.NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLOCK), D(s, P.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLOCK), s),
        U = (D(l = {}, P.ExplicitContentFilterTypes.DISABLED.valueOf(), m.ExplicitContentRedaction.BLUR), D(l, P.ExplicitContentFilterTypes.NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLUR), D(l, P.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLOCK), l),
        w = (D(c = {}, P.ExplicitContentFilterTypes.DISABLED.valueOf(), m.ExplicitContentRedaction.BLUR), D(c, P.ExplicitContentFilterTypes.NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLOCK), D(c, P.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS.valueOf(), m.ExplicitContentRedaction.BLOCK), c),
        k = function(e) {
            var t = e.setting,
                n = e.isDm,
                r = void 0 !== n && n,
                o = e.isFriend,
                i = void 0 !== o && o;
            if (null != t && t !== m.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
            var a = v.default.getCurrentUser();
            return (null == a ? void 0 : a.nsfwAllowed) === !1 ? B({
                isDm: r,
                isFriend: i
            }) : G({
                isDm: r,
                isFriend: i
            })
        },
        G = function(e) {
            var t = e.isDm,
                n = e.isFriend;
            if (!(void 0 !== t && t)) return m.ExplicitContentRedaction.SHOW;
            var r = O.ExplicitContentFilter.getSetting();
            return void 0 !== n && n ? L[r] : M[r]
        },
        B = function(e) {
            var t = e.isDm,
                n = e.isFriend;
            if (!(void 0 !== t && t)) return m.ExplicitContentRedaction.BLUR;
            var r = O.ExplicitContentFilter.getSetting();
            return void 0 !== n && n ? U[r] : w[r]
        },
        j = function() {
            var e = O.ExplicitContentSettings.getSetting();
            return {
                explicitContentGuilds: k({
                    setting: null == e ? void 0 : e.explicitContentGuilds
                }),
                explicitContentNonFriendDm: k({
                    setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                    isDm: !0
                }),
                explicitContentFriendDm: k({
                    setting: null == e ? void 0 : e.explicitContentFriendDm,
                    isDm: !0,
                    isFriend: !0
                })
            }
        };

    function F(e) {
        return e === m.ExplicitContentRedaction.BLUR || e === m.ExplicitContentRedaction.BLOCK
    }

    function V(e) {
        if (!(0, N.isEligibleForExplicitMediaRedaction)()) return !1;
        var t, n = v.default.getCurrentUser();
        if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
        var r = j(),
            o = r.explicitContentGuilds,
            i = r.explicitContentFriendDm,
            a = r.explicitContentNonFriendDm,
            u = T.default.getChannel(e.channel_id);
        if (null == u) return !1;
        if (u.isDM() || u.isGroupDM()) return null != e.author && S.default.getFriendIDs().includes(e.author.id) ? F(i) : F(a);
        return F(o)
    }
    var H = function(e) {
        var t = j();
        O.ExplicitContentSettings.updateSetting(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    D(e, t, n[t])
                })
            }
            return e
        }({}, t, e))
    };

    function x(e, t) {
        var n, r;
        if (!t) return !1;
        if (y.default.get("obscure_blur_effect_enabled")) return !0;
        switch (e.type) {
            case 1:
                return (0, A.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, C.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
            case 0:
                return (0, A.hasFlag)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, C.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
            default:
                return !1
        }
    }

    function Y(e) {
        return V(e) ? {
            obscuredAttachments: e.attachments.filter(function(e) {
                return x({
                    type: 0,
                    media: e
                }, !0)
            }),
            obscuredEmbeds: e.embeds.filter(function(e) {
                return x({
                    type: 1,
                    media: e
                }, !0)
            })
        } : {
            obscuredAttachments: [],
            obscuredEmbeds: []
        }
    }

    function W(e) {
        return !y.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
    }

    function K(e) {
        var t = e.action,
            n = e.channelId,
            r = e.messageId,
            o = e.context;
        if (null != n && null != r) {
            var i = T.default.getChannel(n);
            g.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
                action: t,
                guild_id: null == i ? void 0 : i.guild_id,
                channel_id: n,
                message_id: r,
                user_is_underage: (0, h.isCurrentUserTeen)(),
                context: o
            })
        }
    }

    function z(e, t) {
        var n = Date.now() - e;
        I.default.increment({
            name: p.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
            tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t), "metricVersion:".concat(1)]
        })
    }

    function X(e) {
        var t, n, r, o, i = e.channelId,
            a = e.messageId,
            u = e.attachmentIds,
            s = e.embedIds;
        if (null != i && null != a) {
            if ((null !== (t = null == u ? void 0 : u.length) && void 0 !== t ? t : 0) !== 0 || (null !== (n = null == s ? void 0 : s.length) && void 0 !== n ? n : 0) !== 0) {
                var l = T.default.getChannel(i);
                g.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
                    channel_id: i,
                    guild_id: null == l ? void 0 : l.guild_id,
                    message_id: a,
                    embed_ids: s,
                    user_is_underage: (0, h.isCurrentUserTeen)(),
                    scan_timeout_duration: b.MESSAGE_SCAN_TIMEOUT,
                    attachment_ids_v2: u
                }), I.default.increment({
                    name: p.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
                    tags: ["metricVersion:".concat(1)]
                }), I.default.distribution({
                    name: p.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION
                }, (null !== (r = null == u ? void 0 : u.length) && void 0 !== r ? r : 0) + (null !== (o = null == s ? void 0 : s.length) && void 0 !== o ? o : 0))
            }
        }
    }

    function q(e) {
        var t = e.channelId,
            n = e.numOfAttachments,
            r = e.numOfAttachmentsPendingScan,
            o = e.numOfEmbeds,
            i = e.numOfEmbedsPendingScan;
        if (null != t) {
            var a = T.default.getChannel(t);
            g.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
                channel_id: t,
                guild_id: null == a ? void 0 : a.guild_id,
                num_of_attachments: n,
                num_of_attachments_pending_scan: r,
                num_of_embeds: o,
                num_of_embeds_pending_scan: i
            });
            var u = r + i;
            u > 0 && I.default.distribution({
                name: p.MetricEvents.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2
            }, u)
        }
    }

    function Q(e) {
        var t = e.messageId,
            n = e.channelId,
            r = e.numOfAttachments,
            o = e.numOfExplicitAttachments,
            i = e.numOfEmbeds,
            a = e.numOfExplicitEmbeds;
        if (null != n) {
            var u = T.default.getChannel(n);
            g.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
                message_id: t,
                channel_id: n,
                channel_type: null == u ? void 0 : u.type,
                guild_id: null == u ? void 0 : u.guild_id,
                num_of_attachments: r,
                num_of_explicit_attachments: o,
                num_of_embeds: i,
                num_of_explicit_embeds: a
            })
        }
    }

    function J(e) {
        var t = e.attachments.map(function(e) {
                return null == e.content_scan_version && (e.content_scan_version = -1), e
            }),
            n = (e = e.set("attachments", t)).embeds.map(function(e) {
                return null == e.contentScanVersion && (e.contentScanVersion = -1), e
            });
        return e = e.set("embeds", n)
    }(r = f || (f = {}))[r.Attachment = 0] = "Attachment", r[r.Embed = 1] = "Embed", (o = d || (d = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", o.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", o.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", (i = _ || (_ = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", i.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", i.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", i.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", (a = E || (E = {})).UPDATE = "update", a.TIMEOUT = "timeout";
    var Z = function(e, t) {
        return null != e && null != t && (e <= R.EXPLICIT_MEDIA_MIN_WIDTH || t <= R.EXPLICIT_MEDIA_MIN_HEIGHT)
    }
}
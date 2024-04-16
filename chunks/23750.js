function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("724458"), n("789020");
    var i = n("373793"),
        r = n("81825"),
        s = n("712057"),
        a = n("566006"),
        o = n("995774"),
        l = n("630388"),
        u = n("358085"),
        d = n("981631");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c extends r.default {
        isEdited() {
            return null != this.editedTimestamp
        }
        getChannelId() {
            return this.channel_id
        }
        getReaction(e) {
            return this.reactions.find(t => (0, o.emojiEquals)(t.emoji, e))
        }
        userHasReactedWithEmoji(e, t) {
            return this.reactions.some(n => {
                if ((0, o.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
            })
        }
        addReaction(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.ReactionTypes.NORMAL,
                r = -1,
                l = this.reactions.map((l, d) => {
                    if ((0, o.emojiEquals)(l.emoji, e)) {
                        if (r = d, i === a.ReactionTypes.BURST) {
                            if (t && l.me) return l;
                            let e = t && l.me_burst ? l.burst_count : l.burst_count + 1,
                                i = null != l.burst_colors && l.burst_colors.length > 0 ? l.burst_colors : n;
                            l = {
                                ...l,
                                me_burst: !!t || l.me_burst,
                                burst_count: e,
                                count_details: {
                                    ...l.count_details,
                                    burst: e
                                },
                                burst_colors: i,
                                themedBurstColors: (0, s.buildPlatformedThemedEmojiColorPalette)({
                                    colors: i,
                                    shouldProcessMobileColors: (0, u.isIOS)()
                                })
                            }
                        } else if (i === a.ReactionTypes.VOTE) {
                            var _, c;
                            let e = null !== (c = null === (_ = l.count_details) || void 0 === _ ? void 0 : _.vote) && void 0 !== c ? c : 0,
                                n = t && l.me_vote ? e : e + 1;
                            l = {
                                ...l,
                                count_details: {
                                    ...l.count_details,
                                    vote: n
                                },
                                me_vote: !!t || l.me_vote
                            }
                        } else {
                            if (t && l.me_burst) return l;
                            let e = t && l.me ? l.count : l.count + 1;
                            l = {
                                ...l,
                                count: e,
                                count_details: {
                                    ...l.count_details,
                                    normal: e
                                },
                                me: !!t || l.me
                            }
                        }
                    }
                    return l
                });
            return -1 === r && (i === a.ReactionTypes.BURST ? l.push({
                emoji: e,
                me: !1,
                me_burst: t,
                count: 0,
                count_details: {
                    burst: 1,
                    normal: 0
                },
                burst_count: 1,
                burst_colors: n,
                themedBurstColors: (0, s.buildPlatformedThemedEmojiColorPalette)({
                    colors: null != n ? n : [],
                    shouldProcessMobileColors: (0, u.isIOS)()
                })
            }) : i === a.ReactionTypes.VOTE ? l.push({
                emoji: e,
                me: !1,
                me_burst: !1,
                me_vote: t,
                count: 0,
                count_details: {
                    burst: 0,
                    normal: 0,
                    vote: 1
                },
                burst_count: 0,
                burst_colors: []
            }) : l.push({
                emoji: e,
                me: t,
                me_burst: !1,
                count: 1,
                count_details: {
                    burst: 0,
                    normal: 1
                },
                burst_count: 0,
                burst_colors: []
            })), this.set("reactions", l)
        }
        addReactionBatch(e, t) {
            return e.reduce((e, n) => {
                let {
                    users: i,
                    emoji: r
                } = n;
                return i.reduce((e, n) => e.addReaction(r, n === t), e)
            }, this)
        }
        removeReaction(e) {
            var t, n, i, r;
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ReactionTypes.NORMAL,
                u = -1,
                d = this.reactions.map((t, n) => {
                    if ((0, o.emojiEquals)(t.emoji, e)) {
                        if (l === a.ReactionTypes.BURST) {
                            let e = s && !t.me_burst ? t.burst_count : t.burst_count - 1;
                            t = {
                                ...t,
                                burst_count: e,
                                me_burst: !s && t.me_burst,
                                count_details: {
                                    ...t.count_details,
                                    burst: e
                                }
                            }
                        } else if (l === a.ReactionTypes.VOTE) {
                            var i, r;
                            let e = null !== (r = null === (i = t.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== r ? r : 0,
                                n = s && !t.me_vote ? e : e - 1;
                            t = {
                                ...t,
                                count_details: {
                                    ...t.count_details,
                                    vote: n
                                },
                                me_vote: !s && t.me_vote
                            }
                        } else {
                            let e = s && !t.me ? t.count : t.count - 1;
                            t = {
                                ...t,
                                count: e,
                                me: !s && t.me,
                                count_details: {
                                    ...t.count_details,
                                    normal: e
                                }
                            }
                        }
                        u = n
                    }
                    return t
                }),
                {
                    count: _,
                    burst_count: c,
                    count_details: E
                } = null !== (t = d[u]) && void 0 !== t ? t : {},
                I = null !== (n = null == E ? void 0 : E.normal) && void 0 !== n ? n : 0,
                T = null !== (i = null == E ? void 0 : E.burst) && void 0 !== i ? i : 0,
                f = null !== (r = null == E ? void 0 : E.vote) && void 0 !== r ? r : 0;
            return -1 !== u && _ <= 0 && c <= 0 && I <= 0 && T <= 0 && f <= 0 && d.splice(u, 1), this.set("reactions", d)
        }
        removeReactionsForEmoji(e) {
            return this.set("reactions", this.reactions.filter(t => !(0, o.emojiEquals)(t.emoji, e)))
        }
        isSystemDM() {
            return this.author.isSystemUser()
        }
        hasFlag(e) {
            return (0, l.hasFlag)(this.flags, e)
        }
        isCommandType() {
            return this.type === d.MessageTypes.CHAT_INPUT_COMMAND || this.type === d.MessageTypes.CONTEXT_MENU_COMMAND
        }
        isPoll() {
            return null != this.poll
        }
        isInteractionPlaceholder() {
            return null != this.interaction && this.author.isNonUserBot()
        }
        canDeleteOwnMessage(e) {
            var t, n, r;
            if (this.author.id === e) return !0;
            let s = null !== (r = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== r ? r : {};
            return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user_id) === e && 1 === Object.keys(s).length && i.ApplicationIntegrationType.USER_INSTALL in s
        }
        toJS() {
            return {
                ...this,
                webkhook_id: this.webhookId,
                edited_timestamp: this.editedTimestamp,
                mention_everyone: this.mentionEveryone
            }
        }
        isFirstMessageInForumPost(e) {
            return this.id === this.channel_id && e.isForumPost()
        }
        constructor(e) {
            var t, n, i, r;
            super(), _(this, "id", void 0), _(this, "type", void 0), _(this, "channel_id", void 0), _(this, "author", void 0), _(this, "bot", void 0), _(this, "content", void 0), _(this, "customRenderedContent", void 0), _(this, "attachments", void 0), _(this, "embeds", void 0), _(this, "pinned", void 0), _(this, "mentions", void 0), _(this, "mentionRoles", void 0), _(this, "mentionChannels", void 0), _(this, "mentionEveryone", void 0), _(this, "mentioned", void 0), _(this, "tts", void 0), _(this, "codedLinks", void 0), _(this, "giftCodes", void 0), _(this, "timestamp", void 0), _(this, "editedTimestamp", void 0), _(this, "state", void 0), _(this, "nonce", void 0), _(this, "blocked", void 0), _(this, "call", void 0), _(this, "webhookId", void 0), _(this, "reactions", void 0), _(this, "applicationId", void 0), _(this, "application", void 0), _(this, "activity", void 0), _(this, "activityInstance", void 0), _(this, "interaction", void 0), _(this, "interactionData", void 0), _(this, "interactionMetadata", void 0), _(this, "interactionError", void 0), _(this, "messageReference", void 0), _(this, "flags", void 0), _(this, "isSearchHit", void 0), _(this, "stickers", void 0), _(this, "stickerItems", void 0), _(this, "components", void 0), _(this, "roleSubscriptionData", void 0), _(this, "purchaseNotification", void 0), _(this, "poll", void 0), _(this, "loggingName", void 0), _(this, "referralTrialOfferId", void 0), _(this, "giftInfo", void 0), _(this, "colorString", void 0), _(this, "nick", void 0), this.id = e.id, this.type = e.type || d.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || new Date, this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || d.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = null !== (i = e.components) && void 0 !== i ? i : [], this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionMetadata = e.interactionMetadata || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (r = e.gift_info) && void 0 !== r ? r : e.giftInfo
        }
    }
    t.default = c
}
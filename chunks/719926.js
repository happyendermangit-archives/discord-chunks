function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("424973"), n("808653"), n("702976");
    var i = n("891189"),
        s = n("666038"),
        r = n("584375"),
        a = n("875978"),
        o = n("432173"),
        l = n("568734"),
        u = n("773336"),
        d = n("49111");
    class c extends s.default {
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
                s = -1,
                l = this.reactions.map((l, d) => {
                    if ((0, o.emojiEquals)(l.emoji, e)) {
                        if (s = d, i === a.ReactionTypes.BURST) {
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
                                themedBurstColors: (0, r.buildPlatformedThemedEmojiColorPalette)({
                                    colors: i,
                                    shouldProcessMobileColors: (0, u.isIOS)()
                                })
                            }
                        } else if (i === a.ReactionTypes.VOTE) {
                            var c, f;
                            let e = null !== (f = null === (c = l.count_details) || void 0 === c ? void 0 : c.vote) && void 0 !== f ? f : 0,
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
            return -1 === s && (i === a.ReactionTypes.BURST ? l.push({
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
                themedBurstColors: (0, r.buildPlatformedThemedEmojiColorPalette)({
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
                    emoji: s
                } = n;
                return i.reduce((e, n) => e.addReaction(s, n === t), e)
            }, this)
        }
        removeReaction(e) {
            var t, n, i, s;
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ReactionTypes.NORMAL,
                u = -1,
                d = this.reactions.map((t, n) => {
                    if ((0, o.emojiEquals)(t.emoji, e)) {
                        if (l === a.ReactionTypes.BURST) {
                            let e = r && !t.me_burst ? t.burst_count : t.burst_count - 1;
                            t = {
                                ...t,
                                burst_count: e,
                                me_burst: !r && t.me_burst,
                                count_details: {
                                    ...t.count_details,
                                    burst: e
                                }
                            }
                        } else if (l === a.ReactionTypes.VOTE) {
                            var i, s;
                            let e = null !== (s = null === (i = t.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== s ? s : 0,
                                n = r && !t.me_vote ? e : e - 1;
                            t = {
                                ...t,
                                count_details: {
                                    ...t.count_details,
                                    vote: n
                                },
                                me_vote: !r && t.me_vote
                            }
                        } else {
                            let e = r && !t.me ? t.count : t.count - 1;
                            t = {
                                ...t,
                                count: e,
                                me: !r && t.me,
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
                    count: c,
                    burst_count: f,
                    count_details: _
                } = null !== (t = d[u]) && void 0 !== t ? t : {},
                E = null !== (n = null == _ ? void 0 : _.normal) && void 0 !== n ? n : 0,
                h = null !== (i = null == _ ? void 0 : _.burst) && void 0 !== i ? i : 0,
                g = null !== (s = null == _ ? void 0 : _.vote) && void 0 !== s ? s : 0;
            return -1 !== u && c <= 0 && f <= 0 && E <= 0 && h <= 0 && g <= 0 && d.splice(u, 1), this.set("reactions", d)
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
            var t, n, s;
            if (this.author.id === e) return !0;
            let r = null !== (s = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== s ? s : {};
            return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user_id) === e && 1 === Object.keys(r).length && i.ApplicationIntegrationType.USER_INSTALL in r
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
            var t, n, i;
            super(), this.id = e.id, this.type = e.type || d.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || new Date, this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || d.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = e.components, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionMetadata = e.interactionMetadata || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (i = e.gift_info) && void 0 !== i ? i : e.giftInfo
        }
    }
    var f = c
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ALL_CHANNEL_TYPES: function() {
            return h
        },
        CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: function() {
            return Z
        },
        CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: function() {
            return X
        },
        ChannelRecordBase: function() {
            return ec
        },
        DMChannelRecord: function() {
            return eA
        },
        EDITABLE_CHANNEL_TYPES: function() {
            return j
        },
        EDITABLE_VOICE_SETTINGS_TYPES: function() {
            return q
        },
        GUILD_CHANNEL_TYPES: function() {
            return p
        },
        GUILD_FAVORITES_CHANNEL_TYPES: function() {
            return $
        },
        GUILD_NON_CATEGORY_CHANNEL_TYPES: function() {
            return Y
        },
        GUILD_VOCAL_CHANNEL_TYPES: function() {
            return C
        },
        GUILD_WEBHOOK_CHANNEL_TYPES: function() {
            return O
        },
        GuildTextualChannelRecord: function() {
            return eT
        },
        NSFW_CHANNEL_TYPES: function() {
            return z
        },
        PrivateChannelRecord: function() {
            return eS
        },
        SILENT_JOIN_LEAVE_CHANNEL_TYPES: function() {
            return L
        },
        SLOWMODE_CHANNEL_TYPES: function() {
            return Q
        },
        TEXT_CHANNEL_TYPES: function() {
            return P
        },
        THREADED_CHANNEL_TYPES: function() {
            return V
        },
        THREAD_CHANNEL_TYPES: function() {
            return k
        },
        TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: function() {
            return W
        },
        TOPIC_CHANNEL_TYPES: function() {
            return K
        },
        UnknownChannelRecord: function() {
            return eE
        },
        VOICE_THREAD_PARENT_CHANNEL_TYPES: function() {
            return J
        },
        castChannelRecord: function() {
            return eR
        },
        createChannelRecord: function() {
            return eC
        },
        createChannelRecordFromInvite: function() {
            return eO
        },
        createChannelRecordFromServer: function() {
            return eN
        },
        getAccessPermissions: function() {
            return eo
        },
        getBasicAccessPermissions: function() {
            return el
        },
        isGuildChannelType: function() {
            return R
        },
        isGuildReadableType: function() {
            return B
        },
        isGuildSelectableChannelType: function() {
            return A
        },
        isGuildTextChannelType: function() {
            return N
        },
        isGuildVocalChannelType: function() {
            return g
        },
        isMultiUserDM: function() {
            return y
        },
        isPrivate: function() {
            return v
        },
        isReadableType: function() {
            return H
        },
        isTextChannel: function() {
            return U
        },
        isThread: function() {
            return F
        },
        isVoiceChannel: function() {
            return G
        }
    }), n("47120"), n("724458"), n("411104"), n("789020");
    var i = n("392711"),
        r = n.n(i),
        s = n("313361"),
        a = n("683860"),
        o = n("149765"),
        l = n("283693"),
        u = n("146085"),
        d = n("427679"),
        _ = n("630388"),
        c = n("709054"),
        E = n("981631"),
        I = n("176505"),
        T = n("423219");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_STORE, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM]);

    function A(e) {
        return S.has(e)
    }
    let h = new Set([E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM, E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE, E.ChannelTypes.GUILD_CATEGORY, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_STORE, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]),
        m = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD]);

    function N(e) {
        return m.has(e)
    }
    let O = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE]),
        p = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE, E.ChannelTypes.GUILD_CATEGORY, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_STORE, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]);

    function R(e) {
        return p.has(e)
    }
    E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA;
    let C = new Set([E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE]);

    function g(e) {
        return "SELECTABLE" !== e && C.has(e)
    }
    let L = new Set([E.ChannelTypes.GUILD_STAGE_VOICE]),
        D = new Set([E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM]);

    function v(e) {
        return D.has(e)
    }
    let M = new Set([E.ChannelTypes.GROUP_DM]);

    function y(e) {
        return M.has(e)
    }
    let P = new Set([E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM, E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD]);

    function U(e) {
        return P.has(e)
    }
    let b = new Set([E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD]);

    function G(e) {
        return b.has(e)
    }
    let w = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM]);

    function B(e) {
        return w.has(e)
    }
    let k = new Set([E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD]),
        V = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]);

    function F(e) {
        return k.has(e)
    }
    let x = new Set([E.ChannelTypes.DM, E.ChannelTypes.GROUP_DM, E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE]);

    function H(e) {
        return x.has(e)
    }
    let Y = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_STORE, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]),
        j = new Set([E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_CATEGORY, E.ChannelTypes.GUILD_STORE, E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE, E.ChannelTypes.GUILD_DIRECTORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]),
        W = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT]),
        K = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]),
        z = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE]),
        X = new Set([E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.ANNOUNCEMENT_THREAD]),
        Q = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA, E.ChannelTypes.ANNOUNCEMENT_THREAD, E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE]),
        q = new Set([E.ChannelTypes.PUBLIC_THREAD, E.ChannelTypes.PRIVATE_THREAD, E.ChannelTypes.GUILD_VOICE, E.ChannelTypes.GUILD_STAGE_VOICE]),
        J = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_MEDIA]),
        Z = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_CATEGORY, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_ANNOUNCEMENT]),
        $ = new Set([E.ChannelTypes.GUILD_TEXT, E.ChannelTypes.GUILD_ANNOUNCEMENT, E.ChannelTypes.GUILD_FORUM, E.ChannelTypes.GUILD_VOICE]);

    function ee(e) {
        let t = {};
        return null == e || e.forEach(e => {
            t[e.id] = {
                id: e.id,
                type: e.type,
                allow: o.deserialize(e.allow),
                deny: o.deserialize(e.deny)
            }
        }), t
    }

    function et(e) {
        return null == e ? {} : r().reduce(e, (e, t) => (e[t.id] = t.nick, e), {})
    }

    function en(e) {
        return null == e ? [] : e.map(e => ({
            id: e.id,
            name: e.name,
            emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
            emojiName: e.emoji_name,
            moderated: e.moderated
        }))
    }

    function ei(e) {
        return null != e ? {
            id: e.id,
            name: e.name
        } : void 0
    }

    function er(e) {
        if (null == e) return null;
        switch (e.type) {
            case T.VoiceCallBackgroundTypes.EMPTY:
                return {
                    type: e.type
                };
            case T.VoiceCallBackgroundTypes.GRADIENT:
                return {
                    type: e.type, resourceId: e.resource_id
                };
            default:
                throw Error("unknown voice background display type")
        }
    }
    let es = o.combine(E.Permissions.CONNECT, E.Permissions.VIEW_CHANNEL),
        ea = E.BasicPermissions.CONNECT | E.BasicPermissions.VIEW_CHANNEL;

    function eo(e) {
        return g(e) ? es : E.Permissions.VIEW_CHANNEL
    }

    function el(e) {
        return g(e) ? ea : E.BasicPermissions.VIEW_CHANNEL
    }
    class eu {
        constructor(e) {
            var t, n, i;
            f(this, "id", void 0), f(this, "type", void 0), f(this, "name", void 0), f(this, "guild_id", void 0), f(this, "topic_", void 0), f(this, "position_", void 0), f(this, "permissionOverwrites_", void 0), f(this, "bitrate_", void 0), f(this, "rtcRegion", void 0), f(this, "videoQualityMode", void 0), f(this, "userLimit_", void 0), f(this, "recipients", void 0), f(this, "rawRecipients", void 0), f(this, "ownerId", void 0), f(this, "icon", void 0), f(this, "application_id", void 0), f(this, "nicks", void 0), f(this, "nsfw_", void 0), f(this, "parent_id", void 0), f(this, "memberListId", void 0), f(this, "rateLimitPerUser_", void 0), f(this, "defaultThreadRateLimitPerUser", void 0), f(this, "defaultAutoArchiveDuration", void 0), f(this, "flags_", void 0), f(this, "originChannelId", void 0), f(this, "lastMessageId", void 0), f(this, "lastPinTimestamp", void 0), f(this, "availableTags", void 0), f(this, "appliedTags", void 0), f(this, "messageCount", void 0), f(this, "memberCount", void 0), f(this, "threadMetadata", void 0), f(this, "memberIdsPreview", void 0), f(this, "member", void 0), f(this, "parentChannelThreadType", void 0), f(this, "template", void 0), f(this, "defaultReactionEmoji", void 0), f(this, "isMessageRequest", void 0), f(this, "isMessageRequestTimestamp", void 0), f(this, "isSpam", void 0), f(this, "totalMessageSent", void 0), f(this, "defaultSortOrder", void 0), f(this, "version", void 0), f(this, "defaultForumLayout", void 0), f(this, "iconEmoji", void 0), f(this, "themeColor", void 0), f(this, "safetyWarnings", void 0), f(this, "voiceBackgroundDisplay", void 0), this.id = e.id, this.type = null !== (t = e.type) && void 0 !== t ? t : E.ChannelTypes.GUILD_TEXT, this.name = null !== (n = e.name) && void 0 !== n ? n : "", this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null
        }
    }

    function ed(e) {
        return "topic" in e && (e.topic_ = e.topic, delete e.topic), "position" in e && (e.position_ = e.position, delete e.position), "permissionOverwrites" in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (e.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (e.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (e.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (e.flags_ = e.flags, delete e.flags), e
    }
    let e_ = Object.freeze({});
    class ec extends eu {
        get permissionOverwrites() {
            var e;
            return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : e_
        }
        get topic() {
            var e;
            return null !== (e = this.topic_) && void 0 !== e ? e : ""
        }
        get position() {
            var e;
            return null !== (e = this.position_) && void 0 !== e ? e : 0
        }
        get bitrate() {
            var e;
            return null !== (e = this.bitrate_) && void 0 !== e ? e : E.BITRATE_DEFAULT
        }
        get userLimit() {
            var e;
            return null !== (e = this.userLimit_) && void 0 !== e ? e : 0
        }
        get nsfw() {
            var e;
            return null !== (e = this.nsfw_) && void 0 !== e && e
        }
        get rateLimitPerUser() {
            var e;
            return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0
        }
        get flags() {
            var e;
            return null !== (e = this.flags_) && void 0 !== e ? e : 0
        }
        toJS() {
            return {
                ...this
            }
        }
        set(e, t) {
            return this.merge(ed({
                [e]: t
            }))
        }
        merge(e) {
            let t = null,
                n = ed(e);
            for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
            return null != t ? new this.constructor(t) : this
        }
        computeLurkerPermissionsAllowList() {
            if (this.isGuildStageVoice() && d.default.isPublic(this.id)) return u.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST
        }
        isNSFW() {
            return this.nsfw
        }
        isManaged() {
            return null != this.application_id
        }
        isPrivate() {
            return v(this.type)
        }
        isGroupDM() {
            return this.type === E.ChannelTypes.GROUP_DM
        }
        isMultiUserDM() {
            return y(this.type)
        }
        isDM() {
            return this.type === E.ChannelTypes.DM
        }
        isSystemDM() {
            return !1
        }
        isArchivedThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0
        }
        isLockedThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0
        }
        isScheduledForDeletion() {
            return this.hasFlag(I.ChannelFlags.IS_SCHEDULED_FOR_DELETION)
        }
        isBroadcastChannel() {
            return this.hasFlag(I.ChannelFlags.IS_BROADCASTING)
        }
        isArchivedLockedThread() {
            var e, t;
            return k.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0
        }
        isForumPost() {
            return this.type === E.ChannelTypes.PUBLIC_THREAD && null != this.parentChannelThreadType && E.ChannelTypesSets.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        }
        isCategory() {
            return this.type === E.ChannelTypes.GUILD_CATEGORY
        }
        isVocal() {
            return G(this.type)
        }
        isGuildVocal() {
            return g(this.type)
        }
        isGuildVocalOrThread() {
            return this.isGuildVocal() || this.isVocalThread()
        }
        isGuildVoice() {
            return this.type === E.ChannelTypes.GUILD_VOICE
        }
        isGuildStageVoice() {
            return this.type === E.ChannelTypes.GUILD_STAGE_VOICE
        }
        isListenModeCapable() {
            return this.isGuildStageVoice()
        }
        isThread() {
            return F(this.type)
        }
        isAnnouncementThread() {
            return this.type === E.ChannelTypes.ANNOUNCEMENT_THREAD
        }
        isVocalThread() {
            return this.type === E.ChannelTypes.PUBLIC_THREAD || this.type === E.ChannelTypes.PRIVATE_THREAD
        }
        isActiveThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0
        }
        isDirectory() {
            return this.type === E.ChannelTypes.GUILD_DIRECTORY
        }
        isForumLikeChannel() {
            return this.isForumChannel() || this.isMediaChannel()
        }
        isForumChannel() {
            return this.type === E.ChannelTypes.GUILD_FORUM
        }
        isMediaChannel() {
            return this.type === E.ChannelTypes.GUILD_MEDIA
        }
        isMediaPost() {
            return this.type === E.ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === E.ChannelTypes.GUILD_MEDIA
        }
        isRoleSubscriptionTemplatePreviewChannel() {
            return this.hasFlag(I.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
        }
        isOwner(e) {
            return this.ownerId === e
        }
        getGuildId() {
            return this.guild_id
        }
        getApplicationId() {
            return this.application_id
        }
        getDefaultSortOrder() {
            var e;
            return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : a.ThreadSortOrder.LATEST_ACTIVITY
        }
        getDefaultLayout() {
            return this.isMediaChannel() ? s.ForumLayout.GRID : null == this.defaultForumLayout || this.defaultForumLayout === s.ForumLayout.DEFAULT ? s.ForumLayout.LIST : this.defaultForumLayout
        }
        get accessPermissions() {
            return eo(this.type)
        }
        hasFlag(e) {
            return (0, _.hasFlag)(this.flags, e)
        }
    }
    class eE extends ec {
        static fromServer(e, t) {
            var n, i, r;
            let s = {
                application_id: e.application_id,
                appliedTags: e.applied_tags,
                availableTags: null != e.available_tags ? en(e.available_tags) : void 0,
                bitrate_: e.bitrate,
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultForumLayout: e.default_forum_layout,
                defaultReactionEmoji: null != e.default_reaction_emoji ? {
                    emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                    emojiName: e.default_reaction_emoji.emoji_name
                } : void 0,
                defaultSortOrder: e.default_sort_order,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                icon: e.icon,
                iconEmoji: ei(e.icon_emoji),
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: e.is_spam,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                member: null != e.member ? {
                    flags: e.member.flags,
                    muted: e.member.muted,
                    muteConfig: e.member.mute_config,
                    joinTimestamp: e.member.join_timestamp
                } : void 0,
                memberCount: e.member_count,
                memberIdsPreview: e.member_ids_preview,
                memberListId: e.member_list_id,
                messageCount: e.message_count,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nicks: et(e.nicks),
                nsfw_: e.nsfw,
                originChannelId: e.origin_channel_id,
                ownerId: e.owner_id,
                parent_id: e.parent_id,
                parentChannelThreadType: void 0,
                permissionOverwrites_: ee(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: e.rate_limit_per_user,
                rawRecipients: null != e.recipients ? e.recipients : [],
                recipients: null != e.recipients ? e.recipients.map(e => e.id) : [],
                rtcRegion: e.rtc_region,
                safetyWarnings: e.safety_warnings,
                template: e.template,
                themeColor: e.theme_color,
                threadMetadata: null != e.thread_metadata ? {
                    archived: e.thread_metadata.archived,
                    autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                    archiveTimestamp: e.thread_metadata.archive_timestamp,
                    createTimestamp: e.thread_metadata.create_timestamp,
                    locked: e.thread_metadata.locked,
                    invitable: null === (r = e.thread_metadata.invitable) || void 0 === r || r
                } : void 0,
                topic_: e.topic,
                totalMessageSent: e.total_message_sent,
                type: null != e.type ? e.type : E.ChannelTypes.UNKNOWN,
                userLimit_: e.user_limit,
                version: e.version,
                videoQualityMode: e.video_quality_mode,
                voiceBackgroundDisplay: er(e.voice_background_display)
            };
            return (0, l.dangerouslyCast)(s, eE)
        }
        constructor(e) {
            super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.voiceBackgroundDisplay = e.voiceBackgroundDisplay
        }
    }
    class eI extends ec {
        static fromServer(e, t) {
            var n, i, r, s;
            return eR({
                application_id: e.application_id,
                bitrate_: e.bitrate,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: ei(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                originChannelId: e.origin_channel_id,
                parent_id: e.parent_id,
                permissionOverwrites_: ee(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
                rtcRegion: e.rtc_region,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : E.ChannelTypes.GUILD_VOICE,
                userLimit_: e.user_limit,
                version: e.version,
                videoQualityMode: e.video_quality_mode,
                voiceBackgroundDisplay: er(e.voice_background_display)
            })
        }
        constructor(e) {
            var t;
            super(e), this.application_id = e.application_id, this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.voiceBackgroundDisplay = e.voiceBackgroundDisplay
        }
    }
    class eT extends ec {
        static fromServer(e, t) {
            var n, i, r, s;
            return eR({
                application_id: e.application_id,
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: ei(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                parent_id: e.parent_id,
                permissionOverwrites_: ee(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : E.ChannelTypes.GUILD_TEXT,
                version: e.version
            })
        }
        constructor(e) {
            var t;
            super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
        }
    }
    class ef extends ec {
        static fromServer(e, t) {
            var n, i, r, s;
            let a = {
                availableTags: null != e.available_tags ? en(e.available_tags) : [],
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultForumLayout: e.default_forum_layout,
                defaultReactionEmoji: null != e.default_reaction_emoji ? {
                    emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                    emojiName: e.default_reaction_emoji.emoji_name
                } : void 0,
                defaultSortOrder: e.default_sort_order,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: ei(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                parent_id: e.parent_id,
                permissionOverwrites_: ee(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
                template: e.template,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : E.ChannelTypes.GUILD_TEXT,
                version: e.version
            };
            return (0, l.dangerouslyCast)(a, ef)
        }
        constructor(e) {
            var t, n;
            super(e), this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
        }
    }
    class eS extends ec {
        static sortRecipients(e) {
            return [...null != e ? e : []].sort((e, t) => c.default.compare(e.id, t.id))
        }
        static fromServer(e) {
            var t, n;
            let i = eS.sortRecipients(e.recipients),
                r = {
                    application_id: e.application_id,
                    flags_: e.flags,
                    guild_id: null,
                    icon: e.icon,
                    id: e.id,
                    isMessageRequest: e.is_message_request,
                    isMessageRequestTimestamp: e.is_message_request_timestamp,
                    isSpam: null !== (t = e.is_spam) && void 0 !== t && t,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp,
                    name: null !== (n = e.name) && void 0 !== n ? n : "",
                    nicks: et(e.nicks),
                    ownerId: e.owner_id,
                    rawRecipients: i,
                    recipients: i.map(e => e.id),
                    safetyWarnings: e.safety_warnings,
                    type: null != e.type ? e.type : E.ChannelTypes.DM
                };
            return (0, l.dangerouslyCast)(r, eS)
        }
        isSystemDM() {
            let e = this.rawRecipients[0];
            return this.type === E.ChannelTypes.DM && null != e && !0 === e.system
        }
        getRecipientId() {
            return this.recipients[0]
        }
        addRecipient(e, t, n) {
            if (e === n) return this;
            {
                var i;
                let n = this.set("recipients", r().uniq([...null !== (i = this.recipients) && void 0 !== i ? i : [], e]).sort(c.default.compare));
                return null == t ? n : n.set("nicks", {
                    ...n.nicks,
                    [e]: t
                })
            }
        }
        removeRecipient(e) {
            return this.set("recipients", r().without(this.recipients, e))
        }
        constructor(e) {
            var t, n;
            super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = eS.sortRecipients(e.rawRecipients), this.recipients = [...null !== (t = e.recipients) && void 0 !== t ? t : []].sort(c.default.compare), this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []
        }
    }
    class eA extends eS {}
    class eh extends ec {
        static fromServer(e, t) {
            var n, i, r, s, a;
            let o = {
                appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
                bitrate_: e.bitrate,
                flags_: e.flags,
                guild_id: null !== (i = null != t ? t : e.guild_id) && void 0 !== i ? i : null,
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                member: null != e.member ? {
                    flags: e.member.flags,
                    muted: e.member.muted,
                    muteConfig: e.member.mute_config,
                    joinTimestamp: e.member.join_timestamp
                } : void 0,
                memberCount: e.member_count,
                memberIdsPreview: e.member_ids_preview,
                messageCount: e.message_count,
                name: null !== (r = e.name) && void 0 !== r ? r : "",
                nsfw_: null !== (s = e.nsfw) && void 0 !== s && s,
                ownerId: e.owner_id,
                parent_id: e.parent_id,
                parentChannelThreadType: e.parentChannelThreadType,
                rateLimitPerUser_: e.rate_limit_per_user,
                rtcRegion: e.rtc_region,
                threadMetadata: null != e.thread_metadata ? {
                    archived: e.thread_metadata.archived,
                    autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                    archiveTimestamp: e.thread_metadata.archive_timestamp,
                    createTimestamp: e.thread_metadata.create_timestamp,
                    locked: e.thread_metadata.locked,
                    invitable: null === (a = e.thread_metadata.invitable) || void 0 === a || a
                } : void 0,
                totalMessageSent: e.total_message_sent,
                type: null != e.type ? e.type : E.ChannelTypes.PUBLIC_THREAD,
                userLimit_: e.user_limit,
                videoQualityMode: e.video_quality_mode
            };
            return (0, l.dangerouslyCast)(o, eh)
        }
        constructor(e) {
            var t;
            super(e), this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
        }
    }
    let em = {
        [E.ChannelTypes.DM]: eS.fromServer,
        [E.ChannelTypes.GROUP_DM]: eS.fromServer,
        [E.ChannelTypes.GUILD_TEXT]: eT.fromServer,
        [E.ChannelTypes.GUILD_VOICE]: eI.fromServer,
        [E.ChannelTypes.GUILD_STAGE_VOICE]: eI.fromServer,
        [E.ChannelTypes.GUILD_CATEGORY]: eT.fromServer,
        [E.ChannelTypes.GUILD_ANNOUNCEMENT]: eT.fromServer,
        [E.ChannelTypes.GUILD_STORE]: eT.fromServer,
        [E.ChannelTypes.ANNOUNCEMENT_THREAD]: eh.fromServer,
        [E.ChannelTypes.PUBLIC_THREAD]: eh.fromServer,
        [E.ChannelTypes.PRIVATE_THREAD]: eh.fromServer,
        [E.ChannelTypes.GUILD_DIRECTORY]: eT.fromServer,
        [E.ChannelTypes.GUILD_FORUM]: ef.fromServer,
        [E.ChannelTypes.GUILD_MEDIA]: ef.fromServer
    };

    function eN(e, t) {
        var n, i;
        return (null !== (i = em[null !== (n = e.type) && void 0 !== n ? n : E.ChannelTypes.GUILD_TEXT]) && void 0 !== i ? i : eE.fromServer)(e, t)
    }

    function eO(e) {
        return eC(e)
    }
    let ep = {
        [E.ChannelTypes.DM]: eA,
        [E.ChannelTypes.GROUP_DM]: class e extends eS {},
        [E.ChannelTypes.GUILD_TEXT]: class e extends eT {},
        [E.ChannelTypes.GUILD_VOICE]: class e extends eI {},
        [E.ChannelTypes.GUILD_STAGE_VOICE]: class e extends eI {},
        [E.ChannelTypes.GUILD_CATEGORY]: class e extends eT {},
        [E.ChannelTypes.GUILD_ANNOUNCEMENT]: class e extends eT {},
        [E.ChannelTypes.GUILD_STORE]: class e extends eT {},
        [E.ChannelTypes.ANNOUNCEMENT_THREAD]: eh,
        [E.ChannelTypes.PUBLIC_THREAD]: eh,
        [E.ChannelTypes.PRIVATE_THREAD]: eh,
        [E.ChannelTypes.GUILD_DIRECTORY]: class e extends eT {},
        [E.ChannelTypes.GUILD_FORUM]: ef,
        [E.ChannelTypes.GUILD_MEDIA]: ef
    };

    function eR(e) {
        var t, n;
        let i = null !== (n = ep[null !== (t = e.type) && void 0 !== t ? t : E.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eE;
        return (0, l.dangerouslyCast)(e, i)
    }

    function eC(e) {
        var t, n;
        return new(null !== (n = ep[null !== (t = e.type) && void 0 !== t ? t : E.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eE)(ed(e))
    }
}
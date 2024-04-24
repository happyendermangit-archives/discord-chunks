function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ALL_CHANNEL_TYPES: function() {
            return N
        },
        CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: function() {
            return ee
        },
        CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: function() {
            return q
        },
        ChannelRecordBase: function() {
            return eI
        },
        DMChannelRecord: function() {
            return eO
        },
        EDITABLE_CHANNEL_TYPES: function() {
            return K
        },
        EDITABLE_VOICE_SETTINGS_TYPES: function() {
            return J
        },
        GUILD_CHANNEL_TYPES: function() {
            return C
        },
        GUILD_FAVORITES_CHANNEL_TYPES: function() {
            return et
        },
        GUILD_NON_CATEGORY_CHANNEL_TYPES: function() {
            return W
        },
        GUILD_VOCAL_CHANNEL_TYPES: function() {
            return L
        },
        GUILD_WEBHOOK_CHANNEL_TYPES: function() {
            return R
        },
        GuildTextualChannelRecord: function() {
            return eS
        },
        NSFW_CHANNEL_TYPES: function() {
            return Q
        },
        PrivateChannelRecord: function() {
            return ep
        },
        SILENT_JOIN_LEAVE_CHANNEL_TYPES: function() {
            return v
        },
        SLOWMODE_CHANNEL_TYPES: function() {
            return Z
        },
        TEXT_CHANNEL_TYPES: function() {
            return b
        },
        THREADED_CHANNEL_TYPES: function() {
            return F
        },
        THREAD_CHANNEL_TYPES: function() {
            return x
        },
        TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: function() {
            return z
        },
        TOPIC_CHANNEL_TYPES: function() {
            return X
        },
        UnknownChannelRecord: function() {
            return eT
        },
        VOICE_THREAD_PARENT_CHANNEL_TYPES: function() {
            return $
        },
        castChannelRecord: function() {
            return ev
        },
        createChannelRecord: function() {
            return eM
        },
        createChannelRecordFromInvite: function() {
            return eL
        },
        createChannelRecordFromServer: function() {
            return eg
        },
        getAccessPermissions: function() {
            return eu
        },
        getBasicAccessPermissions: function() {
            return ed
        },
        isGuildChannelType: function() {
            return g
        },
        isGuildReadableType: function() {
            return V
        },
        isGuildSelectableChannelType: function() {
            return m
        },
        isGuildTextChannelType: function() {
            return O
        },
        isGuildVocalChannelType: function() {
            return D
        },
        isMultiUserDM: function() {
            return U
        },
        isPrivate: function() {
            return y
        },
        isReadableType: function() {
            return j
        },
        isTextChannel: function() {
            return G
        },
        isThread: function() {
            return H
        },
        isVoiceChannel: function() {
            return k
        }
    }), n("47120"), n("724458"), n("411104"), n("789020");
    var i = n("392711"),
        r = n.n(i),
        s = n("31775"),
        a = n.n(s),
        o = n("313361"),
        l = n("683860"),
        u = n("149765"),
        d = n("283693"),
        _ = n("146085"),
        c = n("427679"),
        E = n("630388"),
        I = n("709054"),
        T = n("981631"),
        f = n("176505"),
        S = n("423219");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM]);

    function m(e) {
        return A.has(e)
    }
    let N = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
        p = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]);

    function O(e) {
        return p.has(e)
    }
    let R = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
        C = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]);

    function g(e) {
        return C.has(e)
    }
    T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA;
    let L = new Set([T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]);

    function D(e) {
        return "SELECTABLE" !== e && L.has(e)
    }
    let v = new Set([T.ChannelTypes.GUILD_STAGE_VOICE]),
        M = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM]);

    function y(e) {
        return M.has(e)
    }
    let P = new Set([T.ChannelTypes.GROUP_DM]);

    function U(e) {
        return P.has(e)
    }
    let b = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]);

    function G(e) {
        return b.has(e)
    }
    let w = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]);

    function k(e) {
        return w.has(e)
    }
    let B = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM]);

    function V(e) {
        return B.has(e)
    }
    let x = new Set([T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]),
        F = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]);

    function H(e) {
        return x.has(e)
    }
    let Y = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]);

    function j(e) {
        return Y.has(e)
    }
    let W = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
        K = new Set([T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
        z = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT]),
        X = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
        Q = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
        q = new Set([T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.ANNOUNCEMENT_THREAD]),
        Z = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
        J = new Set([T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
        $ = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
        ee = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_ANNOUNCEMENT]),
        et = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_VOICE]);

    function en(e) {
        let t = {};
        return null == e || e.forEach(e => {
            t[e.id] = {
                id: e.id,
                type: e.type,
                allow: u.deserialize(e.allow),
                deny: u.deserialize(e.deny)
            }
        }), t
    }

    function ei(e) {
        return null == e ? {} : r().reduce(e, (e, t) => (e[t.id] = t.nick, e), {})
    }

    function er(e) {
        return null == e ? [] : e.map(e => ({
            id: e.id,
            name: e.name,
            emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
            emojiName: e.emoji_name,
            moderated: e.moderated
        }))
    }

    function es(e) {
        return null != e ? {
            id: e.id,
            name: e.name
        } : void 0
    }

    function ea(e) {
        if (null == e) return null;
        switch (e.type) {
            case S.VoiceCallBackgroundTypes.EMPTY:
                return {
                    type: e.type
                };
            case S.VoiceCallBackgroundTypes.GRADIENT:
                return {
                    type: e.type, resourceId: e.resource_id
                };
            default:
                throw Error("unknown voice background display type")
        }
    }
    let eo = u.combine(T.Permissions.CONNECT, T.Permissions.VIEW_CHANNEL),
        el = T.BasicPermissions.CONNECT | T.BasicPermissions.VIEW_CHANNEL;

    function eu(e) {
        return D(e) ? eo : T.Permissions.VIEW_CHANNEL
    }

    function ed(e) {
        return D(e) ? el : T.BasicPermissions.VIEW_CHANNEL
    }
    class e_ {
        constructor(e) {
            var t, n, i;
            h(this, "id", void 0), h(this, "type", void 0), h(this, "name", void 0), h(this, "guild_id", void 0), h(this, "topic_", void 0), h(this, "position_", void 0), h(this, "permissionOverwrites_", void 0), h(this, "bitrate_", void 0), h(this, "rtcRegion", void 0), h(this, "videoQualityMode", void 0), h(this, "userLimit_", void 0), h(this, "recipients", void 0), h(this, "rawRecipients", void 0), h(this, "ownerId", void 0), h(this, "icon", void 0), h(this, "application_id", void 0), h(this, "nicks", void 0), h(this, "nsfw_", void 0), h(this, "parent_id", void 0), h(this, "memberListId", void 0), h(this, "rateLimitPerUser_", void 0), h(this, "defaultThreadRateLimitPerUser", void 0), h(this, "defaultAutoArchiveDuration", void 0), h(this, "flags_", void 0), h(this, "originChannelId", void 0), h(this, "lastMessageId", void 0), h(this, "lastPinTimestamp", void 0), h(this, "availableTags", void 0), h(this, "appliedTags", void 0), h(this, "messageCount", void 0), h(this, "memberCount", void 0), h(this, "threadMetadata", void 0), h(this, "memberIdsPreview", void 0), h(this, "member", void 0), h(this, "parentChannelThreadType", void 0), h(this, "template", void 0), h(this, "defaultReactionEmoji", void 0), h(this, "isMessageRequest", void 0), h(this, "isMessageRequestTimestamp", void 0), h(this, "isSpam", void 0), h(this, "totalMessageSent", void 0), h(this, "defaultSortOrder", void 0), h(this, "version", void 0), h(this, "defaultForumLayout", void 0), h(this, "iconEmoji", void 0), h(this, "themeColor", void 0), h(this, "safetyWarnings", void 0), h(this, "voiceBackgroundDisplay", void 0), this.id = e.id, this.type = null !== (t = e.type) && void 0 !== t ? t : T.ChannelTypes.GUILD_TEXT, this.name = null !== (n = e.name) && void 0 !== n ? n : "", this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null
        }
    }

    function ec(e) {
        return "topic" in e && (e.topic_ = e.topic, delete e.topic), "position" in e && (e.position_ = e.position, delete e.position), "permissionOverwrites" in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (e.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (e.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (e.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (e.flags_ = e.flags, delete e.flags), e
    }
    let eE = Object.freeze({});
    class eI extends e_ {
        get permissionOverwrites() {
            var e;
            return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : eE
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
            return null !== (e = this.bitrate_) && void 0 !== e ? e : T.BITRATE_DEFAULT
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
            return this.merge(ec({
                [e]: t
            }))
        }
        merge(e) {
            let t = null,
                n = ec(e);
            for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
            return null != t ? new this.constructor(t) : this
        }
        computeLurkerPermissionsAllowList() {
            if (this.isGuildStageVoice() && c.default.isPublic(this.id)) return _.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST
        }
        isNSFW() {
            return this.nsfw
        }
        isManaged() {
            return null != this.application_id
        }
        isPrivate() {
            return y(this.type)
        }
        isGroupDM() {
            return this.type === T.ChannelTypes.GROUP_DM
        }
        isMultiUserDM() {
            return U(this.type)
        }
        isDM() {
            return this.type === T.ChannelTypes.DM
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
            return this.hasFlag(f.ChannelFlags.IS_SCHEDULED_FOR_DELETION)
        }
        isBroadcastChannel() {
            return this.hasFlag(f.ChannelFlags.IS_BROADCASTING)
        }
        isArchivedLockedThread() {
            var e, t;
            return x.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0
        }
        isForumPost() {
            return this.type === T.ChannelTypes.PUBLIC_THREAD && null != this.parentChannelThreadType && T.ChannelTypesSets.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        }
        isCategory() {
            return this.type === T.ChannelTypes.GUILD_CATEGORY
        }
        isVocal() {
            return k(this.type)
        }
        isGuildVocal() {
            return D(this.type)
        }
        isGuildVocalOrThread() {
            return this.isGuildVocal() || this.isVocalThread()
        }
        isGuildVoice() {
            return this.type === T.ChannelTypes.GUILD_VOICE
        }
        isGuildStageVoice() {
            return this.type === T.ChannelTypes.GUILD_STAGE_VOICE
        }
        isListenModeCapable() {
            return this.isGuildStageVoice()
        }
        isThread() {
            return H(this.type)
        }
        isAnnouncementThread() {
            return this.type === T.ChannelTypes.ANNOUNCEMENT_THREAD
        }
        isVocalThread() {
            return this.type === T.ChannelTypes.PUBLIC_THREAD || this.type === T.ChannelTypes.PRIVATE_THREAD
        }
        isActiveThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0
        }
        isDirectory() {
            return this.type === T.ChannelTypes.GUILD_DIRECTORY
        }
        isForumLikeChannel() {
            return this.isForumChannel() || this.isMediaChannel()
        }
        isForumChannel() {
            return this.type === T.ChannelTypes.GUILD_FORUM
        }
        isMediaChannel() {
            return this.type === T.ChannelTypes.GUILD_MEDIA
        }
        isMediaPost() {
            return this.type === T.ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === T.ChannelTypes.GUILD_MEDIA
        }
        isRoleSubscriptionTemplatePreviewChannel() {
            return this.hasFlag(f.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
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
            return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : l.ThreadSortOrder.LATEST_ACTIVITY
        }
        getDefaultLayout() {
            return this.isMediaChannel() ? o.ForumLayout.GRID : null == this.defaultForumLayout || this.defaultForumLayout === o.ForumLayout.DEFAULT ? o.ForumLayout.LIST : this.defaultForumLayout
        }
        get accessPermissions() {
            return eu(this.type)
        }
        hasFlag(e) {
            return (0, E.hasFlag)(this.flags, e)
        }
    }
    class eT extends eI {
        static fromServer(e, t) {
            var n, i, r;
            let s = {
                application_id: e.application_id,
                appliedTags: e.applied_tags,
                availableTags: null != e.available_tags ? er(e.available_tags) : void 0,
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
                iconEmoji: es(e.icon_emoji),
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
                nicks: ei(e.nicks),
                nsfw_: e.nsfw,
                originChannelId: e.origin_channel_id,
                ownerId: e.owner_id,
                parent_id: e.parent_id,
                parentChannelThreadType: void 0,
                permissionOverwrites_: en(e.permission_overwrites),
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
                type: null != e.type ? e.type : T.ChannelTypes.UNKNOWN,
                userLimit_: e.user_limit,
                version: e.version,
                videoQualityMode: e.video_quality_mode,
                voiceBackgroundDisplay: ea(e.voice_background_display)
            };
            return (0, d.dangerouslyCast)(s, eT)
        }
        constructor(e) {
            super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.voiceBackgroundDisplay = e.voiceBackgroundDisplay
        }
    }
    class ef extends eI {
        static fromServer(e, t) {
            var n, i, r, s;
            return ev({
                application_id: e.application_id,
                bitrate_: e.bitrate,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: es(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                originChannelId: e.origin_channel_id,
                parent_id: e.parent_id,
                permissionOverwrites_: en(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
                rtcRegion: e.rtc_region,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : T.ChannelTypes.GUILD_VOICE,
                userLimit_: e.user_limit,
                version: e.version,
                videoQualityMode: e.video_quality_mode,
                voiceBackgroundDisplay: ea(e.voice_background_display)
            })
        }
        constructor(e) {
            var t;
            super(e), this.application_id = e.application_id, this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.voiceBackgroundDisplay = e.voiceBackgroundDisplay
        }
    }
    class eS extends eI {
        static fromServer(e, t) {
            var n, i, r, s;
            return ev({
                application_id: e.application_id,
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: es(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                parent_id: e.parent_id,
                permissionOverwrites_: en(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : T.ChannelTypes.GUILD_TEXT,
                version: e.version
            })
        }
        constructor(e) {
            var t;
            super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
        }
    }
    class eh extends eI {
        static fromServer(e, t) {
            var n, i, r, s;
            let a = {
                availableTags: null != e.available_tags ? er(e.available_tags) : [],
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
                iconEmoji: es(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                parent_id: e.parent_id,
                permissionOverwrites_: en(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
                template: e.template,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : T.ChannelTypes.GUILD_TEXT,
                version: e.version
            };
            return (0, d.dangerouslyCast)(a, eh)
        }
        constructor(e) {
            var t, n;
            super(e), this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
        }
    }
    class eA {
        getOrCompute(e) {
            let t = this.cache.get(e);
            if (null != t) return t;
            {
                let t = parseInt(e, 10);
                return this.cache.set(e, t), t
            }
        }
        constructor(e = 100) {
            h(this, "cache", void 0), this.cache = new(a())(e)
        }
    }
    let em = new eA,
        eN = new eA;
    class ep extends eI {
        static sortRecipients(e, t) {
            let n = em.getOrCompute(t);
            return [...null != e ? e : []].sort((e, t) => {
                let i = eN.getOrCompute(e.id);
                return (i ^ n) - (eN.getOrCompute(t.id) ^ n)
            })
        }
        static fromServer(e) {
            var t, n;
            let i = ep.sortRecipients(e.recipients, e.id),
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
                    nicks: ei(e.nicks),
                    ownerId: e.owner_id,
                    rawRecipients: i,
                    recipients: i.map(e => e.id),
                    safetyWarnings: e.safety_warnings,
                    type: null != e.type ? e.type : T.ChannelTypes.DM
                };
            return (0, d.dangerouslyCast)(r, ep)
        }
        isSystemDM() {
            let e = this.rawRecipients[0];
            return this.type === T.ChannelTypes.DM && null != e && !0 === e.system
        }
        getRecipientId() {
            return this.recipients[0]
        }
        addRecipient(e, t, n) {
            if (e === n) return this;
            {
                var i;
                let n = this.set("recipients", r().uniq([...null !== (i = this.recipients) && void 0 !== i ? i : [], e]).sort(I.default.compare));
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
            super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = ep.sortRecipients(e.rawRecipients, this.id), this.recipients = [...null !== (t = e.recipients) && void 0 !== t ? t : []].sort(I.default.compare), this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []
        }
    }
    class eO extends ep {}
    class eR extends eI {
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
                type: null != e.type ? e.type : T.ChannelTypes.PUBLIC_THREAD,
                userLimit_: e.user_limit,
                videoQualityMode: e.video_quality_mode
            };
            return (0, d.dangerouslyCast)(o, eR)
        }
        constructor(e) {
            var t;
            super(e), this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
        }
    }
    let eC = {
        [T.ChannelTypes.DM]: ep.fromServer,
        [T.ChannelTypes.GROUP_DM]: ep.fromServer,
        [T.ChannelTypes.GUILD_TEXT]: eS.fromServer,
        [T.ChannelTypes.GUILD_VOICE]: ef.fromServer,
        [T.ChannelTypes.GUILD_STAGE_VOICE]: ef.fromServer,
        [T.ChannelTypes.GUILD_CATEGORY]: eS.fromServer,
        [T.ChannelTypes.GUILD_ANNOUNCEMENT]: eS.fromServer,
        [T.ChannelTypes.GUILD_STORE]: eS.fromServer,
        [T.ChannelTypes.ANNOUNCEMENT_THREAD]: eR.fromServer,
        [T.ChannelTypes.PUBLIC_THREAD]: eR.fromServer,
        [T.ChannelTypes.PRIVATE_THREAD]: eR.fromServer,
        [T.ChannelTypes.GUILD_DIRECTORY]: eS.fromServer,
        [T.ChannelTypes.GUILD_FORUM]: eh.fromServer,
        [T.ChannelTypes.GUILD_MEDIA]: eh.fromServer
    };

    function eg(e, t) {
        var n, i;
        return (null !== (i = eC[null !== (n = e.type) && void 0 !== n ? n : T.ChannelTypes.GUILD_TEXT]) && void 0 !== i ? i : eT.fromServer)(e, t)
    }

    function eL(e) {
        return eM(e)
    }
    let eD = {
        [T.ChannelTypes.DM]: eO,
        [T.ChannelTypes.GROUP_DM]: class e extends ep {},
        [T.ChannelTypes.GUILD_TEXT]: class e extends eS {},
        [T.ChannelTypes.GUILD_VOICE]: class e extends ef {},
        [T.ChannelTypes.GUILD_STAGE_VOICE]: class e extends ef {},
        [T.ChannelTypes.GUILD_CATEGORY]: class e extends eS {},
        [T.ChannelTypes.GUILD_ANNOUNCEMENT]: class e extends eS {},
        [T.ChannelTypes.GUILD_STORE]: class e extends eS {},
        [T.ChannelTypes.ANNOUNCEMENT_THREAD]: eR,
        [T.ChannelTypes.PUBLIC_THREAD]: eR,
        [T.ChannelTypes.PRIVATE_THREAD]: eR,
        [T.ChannelTypes.GUILD_DIRECTORY]: class e extends eS {},
        [T.ChannelTypes.GUILD_FORUM]: eh,
        [T.ChannelTypes.GUILD_MEDIA]: eh
    };

    function ev(e) {
        var t, n;
        let i = null !== (n = eD[null !== (t = e.type) && void 0 !== t ? t : T.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eT;
        return (0, d.dangerouslyCast)(e, i)
    }

    function eM(e) {
        var t, n;
        return new(null !== (n = eD[null !== (t = e.type) && void 0 !== t ? t : T.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eT)(ec(e))
    }
}
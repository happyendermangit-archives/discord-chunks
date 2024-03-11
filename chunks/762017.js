function(e, _, E) {
    "use strict";
    E.r(_);
    var t = E("695291");
    let o = {
        AppAnalyticsManager: {
            inlineRequire: () => E("588788").default,
            hasStoreChangeListeners: !0
        },
        AudioSettingsManager: {
            actions: ["POST_CONNECTION_OPEN", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE"],
            inlineRequire: () => E("801290").default
        },
        BlockedDomainManager: {
            inlineRequire: () => E("24966").default,
            loadAfterConnectionOpen: !0
        },
        CallIdleManager: {
            actions: ["VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_DISCONNECT", "CONNECTION_CLOSED"],
            inlineRequire: () => E("357168").default
        },
        ChangelogManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("228495").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ChannelCallManager: {
            inlineRequire: () => E("728966").default,
            hasStoreChangeListeners: !0
        },
        ChannelSafetyWarningsManager: {
            actions: ["CHANNEL_SELECT", "CHANNEL_UPDATES"],
            inlineRequire: () => E("578165").default,
            neverLoadBeforeConnectionOpen: !0
        },
        CommunicationDisabledManager: {
            inlineRequire: () => E("658536").default,
            loadAfterConnectionOpen: !0
        },
        ContentProtectionManager: {
            inlineRequire: () => E("447868").default,
            loadRightBeforeConnectionOpen: !0,
            hasStoreChangeListeners: !0
        },
        CustomStatusManager: {
            actions: ["USER_SETTINGS_PROTO_UPDATE", "POST_CONNECTION_OPEN"],
            inlineRequire: () => E("864088").default,
            loadAfterConnectionOpen: !0
        },
        DeadchatPromptManager: {
            actions: ["POST_CONNECTION_OPEN", "IDLE"],
            inlineRequire: () => E("111276").default,
            loadAfterConnectionOpen: !0
        },
        TopEmojisDataManager: {
            actions: ["EMOJI_INTERACTION_INITIATED"],
            inlineRequire: () => E("120273").default
        },
        EmojiCaptionsDataManager: {
            actions: ["EMOJI_INTERACTION_INITIATED"],
            inlineRequire: () => E("531150").default
        },
        EntityVersionsManager: {
            actions: ["GUILD_CREATE", "DELETED_ENTITY_IDS"],
            inlineRequire: () => E("382022").default,
            loadRightBeforeConnectionOpen: !0
        },
        ExplicitMediaManager: {
            actions: ["CHANNEL_SELECT", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_UPDATE", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "LOAD_FORUM_POSTS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_THREADS_SUCCESS", "LOGOUT", "LOAD_PINNED_MESSAGES_SUCCESS", "USER_SETTINGS_PROTO_UPDATE", "CHANNEL_RTC_UPDATE_CHAT_OPEN"],
            inlineRequire: () => E("983850").default,
            neverLoadBeforeConnectionOpen: !0
        },
        FeedbackManager: {
            actions: ["VOICE_CHANNEL_SHOW_FEEDBACK", "STREAM_CLOSE", "EMBEDDED_ACTIVITY_CLOSE", "VIDEO_BACKGROUND_SHOW_FEEDBACK", "IN_APP_REPORTS_SHOW_FEEDBACK"],
            inlineRequire: () => E("828787").default
        },
        ForumGuidelinesManager: {
            inlineRequire: () => E("706065").default,
            loadAfterConnectionOpen: !0
        },
        ForumManager: {
            actions: ["CHANNEL_PRELOAD"],
            inlineRequire: () => E("62649").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ForumImagePreloadManager: {
            actions: ["CHANNEL_PRELOAD"],
            inlineRequire: () => E("144320").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ForumPostAnalyticsManager: {
            actions: ["CHANNEL_SELECT", "THREAD_CREATE"],
            inlineRequire: () => E("589641").default,
            neverLoadBeforeConnectionOpen: !0
        },
        FrecencyUserSettingsManager: {
            actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED"],
            inlineRequire: () => E("679404").default
        },
        GuildOnboardingHomeManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "MESSAGE_CREATE", "THREAD_CREATE", "GUILD_MEMBER_UPDATE", "GUILD_DELETE"],
            inlineRequire: () => E("902801").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildOnboardingManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "GUILD_DELETE"],
            inlineRequire: () => E("999243").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildOnboardingUpsellManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT"],
            inlineRequire: () => E("99628").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GameConsoleManager: {
            actions: ["WAIT_FOR_REMOTE_SESSION", "POST_CONNECTION_OPEN", "SESSIONS_REPLACE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "VOICE_STATE_UPDATES", "CONSOLE_COMMAND_UPDATE", "PASSIVE_UPDATE_V1", "REMOTE_SESSION_DISCONNECT"],
            inlineRequire: () => E("508412").default
        },
        GuildHomeManager: {
            actions: ["CHANNEL_PRELOAD"],
            inlineRequire: () => E("168263").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildScheduledEventManager: {
            actions: ["POST_CONNECTION_OPEN", "GUILD_DELETE", "GUILD_UNAVAILABLE", "INVITE_RESOLVE_SUCCESS", "CHANNEL_SELECT"],
            inlineRequire: () => E("933326").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildVerificationManager: {
            actions: ["INVITE_ACCEPT_SUCCESS"],
            inlineRequire: () => E("589636").default
        },
        HangStatusManager: {
            actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "GUILD_MEMBER_UPDATE"],
            inlineRequire: () => E("360557").default,
            hasStoreChangeListeners: !0
        },
        InteractionModalManager: {
            actions: ["INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CLOSE", "RPC_APP_DISCONNECTED"],
            inlineRequire: () => E("858402").default
        },
        LocalizedPricingPromoManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("53808").default
        },
        LoginRequiredActionManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("126115").default
        },
        MemberSafetySearchManager: {
            actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_DELETE", "MEMBER_SAFETY_SEARCH_STATE_UPDATE", "MEMBER_SAFETY_PAGINATION_UPDATE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH"],
            inlineRequire: () => E("804160").default
        },
        MemberSafetyStoreBatchUpdateManager: {
            actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS"],
            inlineRequire: () => E("332336").default
        },
        MessageCodedLinkManager: {
            actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "GUILD_FEED_FETCH_SUCCESS"],
            inlineRequire: () => E("149681").default
        },
        MessageManager: {
            actions: ["APP_STATE_UPDATE", "OVERLAY_INITIALIZE", "CHANNEL_SELECT", "VOICE_CHANNEL_SELECT", "THREAD_CREATE", "THREAD_LIST_SYNC", "CHANNEL_CREATE", "CHANNEL_PRELOAD", "THREAD_CREATE_LOCAL", "GUILD_CREATE", "MESSAGE_END_EDIT", "LOAD_MESSAGES_SUCCESS", "UPLOAD_FAIL", "CHANNEL_DELETE", "THREAD_DELETE"],
            inlineRequire: () => E("341329").default,
            neverLoadBeforeConnectionOpen: !0,
            hasStoreChangeListeners: !0,
            loadRightBeforeConnectionOpen: !0
        },
        MultiAccountManager: {
            actions: ["LOGOUT"],
            inlineRequire: () => E("390680").default,
            loadAfterConnectionOpen: !0
        },
        OverlayUsageStatsManager: {
            actions: __OVERLAY__ ? ["MESSAGE_ACKED", "MESSAGE_CREATE"] : ["OVERLAY_FOCUSED", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SET_UI_LOCKED", "OVERLAY_WIDGET_CHANGED", "OVERLAY_MESSAGE_EVENT_ACTION", "RUNNING_GAMES_CHANGE", "SOUNDBOARD_SET_OVERLAY_ENABLED", "MESSAGE_ACKED", "MESSAGE_CREATE", "WINDOW_FOCUS", "RTC_CONNECTION_STATE", "AUDIO_TOGGLE_SELF_MUTE"],
            inlineRequire: () => E("488507").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ParticipantFocusManager: {
            inlineRequire: () => E("272708").default,
            hasStoreChangeListeners: !0
        },
        PomeloManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("485627").default
        },
        PromotionsManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("922030").default
        },
        RelationshipManager: {
            actions: ["RELATIONSHIP_ADD", "FRIEND_REQUEST_ACCEPTED"],
            inlineRequire: () => E("50733").default
        },
        RTCLatencyTestManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("937827").default
        },
        MessageRemindersManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("205277").default,
            neverLoadBeforeConnectionOpen: !0
        },
        MessageRemindersNotificationManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("741887").default,
            neverLoadBeforeConnectionOpen: !0
        },
        SearchManager: {
            actions: ["USER_SETTINGS_PROTO_UPDATE", "I18N_LOAD_SUCCESS", "POST_CONNECTION_OPEN"],
            inlineRequire: () => E("739362").default,
            neverLoadBeforeConnectionOpen: !0
        },
        SelectedChannelManager: {
            actions: ["GUILD_CREATE", "CHANNEL_CREATE", "LOGOUT"],
            inlineRequire: () => E("990629").default
        },
        SelfPresenceStoreManager: {
            inlineRequire: () => E("608421").default,
            hasStoreChangeListeners: !0
        },
        StageChannelRequestToSpeakMessageManager: {
            actions: ["VOICE_STATE_UPDATES"],
            inlineRequire: () => E("728863").default
        },
        StageMusicManager: {
            actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "STAGE_MUSIC_MUTE", "STAGE_MUSIC_PLAY", "VOICE_STATE_UPDATES", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_SELF_DEAF"],
            inlineRequire: () => E("924872").default
        },
        SubscriptionRemindersManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("606162").default
        },
        ThreadManager: {
            actions: ["CHANNEL_DELETE", "MESSAGE_CREATE"],
            inlineRequire: () => E("708130").default,
            neverLoadBeforeConnectionOpen: !0
        },
        UrgentSystemDMManagerBase: {
            actions: ["POST_CONNECTION_OPEN", "MESSAGE_CREATE", "CHANNEL_SELECT"],
            inlineRequire: () => E("507331").default,
            neverLoadBeforeConnectionOpen: !0
        },
        UserGuildSettingsManager: {
            actions: ["CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CATEGORY_COLLAPSE_ALL", "CATEGORY_EXPAND_ALL", "POST_CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
            inlineRequire: () => E("679428").default
        },
        UserSearchManager: {
            actions: ["LOGOUT", "POST_CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "OVERLAY_INITIALIZE", "CURRENT_USER_UPDATE", "GUILD_CREATE", "GUILD_MEMBERS_CHUNK", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "RELATIONSHIP_ADD", "RELATIONSHIP_UPDATE", "RELATIONSHIP_REMOVE", "CHANNEL_CREATE", "CHANNEL_UPDATES", "CHANNEL_RECIPIENT_ADD", "PASSIVE_UPDATE_V1"],
            inlineRequire: () => E("447909").default
        },
        UserSettingsManager: {
            actions: ["POST_CONNECTION_OPEN", "OVERLAY_INITIALIZE", "USER_SETTINGS_PROTO_UPDATE"],
            inlineRequire: () => E("761834").default
        },
        VoiceChannelSettingsManager: {
            actions: ["CHANNEL_UPDATES", "VOICE_STATE_UPDATES"],
            inlineRequire: () => E("783252").default
        },
        VoiceChannelNotificationsManager: {
            actions: ["VOICE_CHANNEL_SELECT"],
            inlineRequire: () => E("778727").default
        },
        VoicePermissionManager: {
            actions: ["VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
            inlineRequire: () => E("310045").default
        },
        VoiceProcessingErrorManager: {
            actions: ["MEDIA_ENGINE_NOISE_CANCELLATION_ERROR"],
            inlineRequire: () => E("104545").default
        },
        GPUWorkaroundManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("41377").default
        },
        HighFiveManager: {
            actions: ["VOICE_CHANNEL_EFFECT_SEND", "HIGH_FIVE_COMPLETE"],
            inlineRequire: () => E("536813").default
        },
        NativeCrashManager: {
            actions: ["RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "MEDIA_SESSION_JOINED"],
            inlineRequire: () => E("352690").default
        },
        GuestManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("129040").default
        },
        ClipsManager: {
            actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_USER_CREATE", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "RUNNING_GAME_TOGGLE_DETECTION", "RUNNING_GAMES_CHANGE", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO", "MEDIA_ENGINE_SET_HARDWARE_H264"],
            inlineRequire: () => E("332491").default
        },
        BroadcastingManager: {
            actions: ["RUNNING_GAMES_CHANGE", "STREAM_CREATE", "STREAM_STOP", "START_BROADCAST_STREAM", "CALL_CREATE", "RTC_CONNECTION_STATE", "CHANNEL_DELETE", "MESSAGE_CREATE"],
            inlineRequire: () => E("612541").default,
            neverLoadBeforeConnectionOpen: !0
        },
        CustomCallSoundsManager: {
            actions: ["RTC_CONNECTION_STATE", "SOUNDBOARD_MUTE_JOIN_SOUND", "VOICE_STATE_UPDATES"],
            inlineRequire: () => E("202014").default
        },
        NotificationMigrationManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("748021").default
        },
        AnnouncementViewTrackingManager: {
            actions: ["CHANNEL_SELECT"],
            inlineRequire: () => E("596512").default,
            neverLoadBeforeConnectionOpen: !0
        },
        DetectableGamesManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => E("597090").default,
            neverLoadBeforeConnectionOpen: !0
        },
        MidjourneyOnboardingManager: {
            actions: ["CHANNEL_CREATE"],
            inlineRequire: () => E("643857").default,
            neverLoadBeforeConnectionOpen: !0
        },
        QuestsManager: {
            actions: ["POST_CONNECTION_OPEN", "QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V1", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_INBOUND_UPDATE", "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2"],
            inlineRequire: () => E("319405").default,
            neverLoadBeforeConnectionOpen: !0
        },
        VoiceChannelGameActivityManager: {
            actions: ["RUNNING_GAMES_CHANGE", "VOICE_CHANNEL_SELECT"],
            inlineRequire: () => E("282655").default,
            neverLoadBeforeConnectionOpen: !0
        },
        InappropriateConversationsManager: {
            actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
            inlineRequire: () => E("874200").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ContentInventoryManager: {
            actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED"],
            inlineRequire: () => E("389295").default,
            neverLoadBeforeConnectionOpen: !0
        }
    };
    (0, t.initialize)(o)
}
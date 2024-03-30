function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("132454");
    let r = {
        AppAnalyticsManager: {
            inlineRequire: () => n("98302").default,
            hasStoreChangeListeners: !0
        },
        AudioSettingsManager: {
            actions: ["POST_CONNECTION_OPEN", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE"],
            inlineRequire: () => n("345953").default
        },
        BlockedDomainManager: {
            inlineRequire: () => n("399907").default,
            loadAfterConnectionOpen: !0
        },
        CallIdleManager: {
            actions: ["VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_DISCONNECT", "CONNECTION_CLOSED"],
            inlineRequire: () => n("288444").default
        },
        ChangelogManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("688798").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ChannelCallManager: {
            inlineRequire: () => n("258833").default,
            hasStoreChangeListeners: !0
        },
        ChannelSafetyWarningsManager: {
            actions: ["CHANNEL_SELECT", "CHANNEL_UPDATES"],
            inlineRequire: () => n("397776").default,
            neverLoadBeforeConnectionOpen: !0
        },
        CommunicationDisabledManager: {
            inlineRequire: () => n("202107").default,
            loadAfterConnectionOpen: !0
        },
        ContentProtectionManager: {
            inlineRequire: () => n("725140").default,
            loadRightBeforeConnectionOpen: !0,
            hasStoreChangeListeners: !0
        },
        CustomStatusManager: {
            actions: ["USER_SETTINGS_PROTO_UPDATE", "POST_CONNECTION_OPEN"],
            inlineRequire: () => n("215739").default,
            loadAfterConnectionOpen: !0
        },
        DeadchatPromptManager: {
            actions: ["POST_CONNECTION_OPEN", "IDLE"],
            inlineRequire: () => n("146661").default,
            loadAfterConnectionOpen: !0
        },
        TopEmojisDataManager: {
            actions: ["EMOJI_INTERACTION_INITIATED"],
            inlineRequire: () => n("496207").default
        },
        EmojiCaptionsDataManager: {
            actions: ["EMOJI_INTERACTION_INITIATED"],
            inlineRequire: () => n("570310").default
        },
        EntityVersionsManager: {
            actions: ["GUILD_CREATE", "DELETED_ENTITY_IDS"],
            inlineRequire: () => n("992713").default,
            loadRightBeforeConnectionOpen: !0
        },
        ExplicitMediaManager: {
            actions: ["CHANNEL_SELECT", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_UPDATE", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "LOAD_FORUM_POSTS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_THREADS_SUCCESS", "LOGOUT", "LOAD_PINNED_MESSAGES_SUCCESS", "USER_SETTINGS_PROTO_UPDATE", "CHANNEL_RTC_UPDATE_CHAT_OPEN", "POST_CONNECTION_OPEN"],
            inlineRequire: () => n("948561").default,
            neverLoadBeforeConnectionOpen: !0
        },
        FeedbackManager: {
            actions: ["VOICE_CHANNEL_SHOW_FEEDBACK", "STREAM_CLOSE", "EMBEDDED_ACTIVITY_CLOSE", "VIDEO_BACKGROUND_SHOW_FEEDBACK", "IN_APP_REPORTS_SHOW_FEEDBACK"],
            inlineRequire: () => n("169223").default
        },
        ForumGuidelinesManager: {
            inlineRequire: () => n("945141").default,
            loadAfterConnectionOpen: !0
        },
        ForumManager: {
            actions: ["CHANNEL_PRELOAD"],
            inlineRequire: () => n("716896").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ForumImagePreloadManager: {
            actions: ["CHANNEL_PRELOAD"],
            inlineRequire: () => n("222044").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ForumPostAnalyticsManager: {
            actions: ["CHANNEL_SELECT", "THREAD_CREATE"],
            inlineRequire: () => n("474387").default,
            neverLoadBeforeConnectionOpen: !0
        },
        FrecencyUserSettingsManager: {
            actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED"],
            inlineRequire: () => n("888875").default
        },
        GuildOnboardingHomeManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "MESSAGE_CREATE", "THREAD_CREATE", "GUILD_MEMBER_UPDATE", "GUILD_DELETE"],
            inlineRequire: () => n("218315").default,
            neverLoadBeforeConnectionOpen: !0
        },
        SignUpManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT"],
            inlineRequire: () => n("207269").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildOnboardingManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "GUILD_DELETE"],
            inlineRequire: () => n("495649").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildOnboardingUpsellManager: {
            actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT"],
            inlineRequire: () => n("983529").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GameConsoleManager: {
            actions: ["WAIT_FOR_REMOTE_SESSION", "POST_CONNECTION_OPEN", "SESSIONS_REPLACE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "VOICE_STATE_UPDATES", "CONSOLE_COMMAND_UPDATE", "PASSIVE_UPDATE_V1", "REMOTE_SESSION_DISCONNECT"],
            inlineRequire: () => n("902304").default
        },
        GuildHomeManager: {
            actions: ["CHANNEL_PRELOAD"],
            inlineRequire: () => n("657513").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildScheduledEventManager: {
            actions: ["POST_CONNECTION_OPEN", "GUILD_DELETE", "GUILD_UNAVAILABLE", "INVITE_RESOLVE_SUCCESS", "CHANNEL_SELECT"],
            inlineRequire: () => n("897285").default,
            neverLoadBeforeConnectionOpen: !0
        },
        GuildVerificationManager: {
            actions: ["INVITE_ACCEPT_SUCCESS"],
            inlineRequire: () => n("950143").default
        },
        HangStatusManager: {
            actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "GUILD_MEMBER_UPDATE"],
            inlineRequire: () => n("500272").default,
            hasStoreChangeListeners: !0
        },
        InteractionModalManager: {
            actions: ["INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CLOSE", "RPC_APP_DISCONNECTED"],
            inlineRequire: () => n("189334").default
        },
        LocalizedPricingPromoManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("519143").default
        },
        LoginRequiredActionManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("858386").default
        },
        MemberSafetySearchManager: {
            actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_DELETE", "MEMBER_SAFETY_SEARCH_STATE_UPDATE", "MEMBER_SAFETY_PAGINATION_UPDATE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH"],
            inlineRequire: () => n("201070").default
        },
        MemberSafetyStoreBatchUpdateManager: {
            actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS"],
            inlineRequire: () => n("313298").default
        },
        MessageCodedLinkManager: {
            actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "GUILD_FEED_FETCH_SUCCESS"],
            inlineRequire: () => n("891274").default
        },
        MessageManager: {
            actions: ["APP_STATE_UPDATE", "OVERLAY_INITIALIZE", "CHANNEL_SELECT", "VOICE_CHANNEL_SELECT", "THREAD_CREATE", "THREAD_LIST_SYNC", "CHANNEL_CREATE", "CHANNEL_PRELOAD", "THREAD_CREATE_LOCAL", "GUILD_CREATE", "MESSAGE_END_EDIT", "LOAD_MESSAGES_SUCCESS", "UPLOAD_FAIL", "CHANNEL_DELETE", "THREAD_DELETE"],
            inlineRequire: () => n("348245").default,
            neverLoadBeforeConnectionOpen: !0,
            hasStoreChangeListeners: !0,
            loadRightBeforeConnectionOpen: !0
        },
        MultiAccountManager: {
            actions: ["LOGOUT"],
            inlineRequire: () => n("1627").default,
            loadAfterConnectionOpen: !0
        },
        OverlayUsageStatsManager: {
            actions: __OVERLAY__ ? ["MESSAGE_ACKED", "MESSAGE_CREATE"] : ["OVERLAY_FOCUSED", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SET_UI_LOCKED", "OVERLAY_WIDGET_CHANGED", "OVERLAY_MESSAGE_EVENT_ACTION", "RUNNING_GAMES_CHANGE", "SOUNDBOARD_SET_OVERLAY_ENABLED", "MESSAGE_ACKED", "MESSAGE_CREATE", "WINDOW_FOCUS", "RTC_CONNECTION_STATE", "AUDIO_TOGGLE_SELF_MUTE", "OVERLAY_SUCCESSFULLY_SHOWN"],
            inlineRequire: () => n("645644").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ParticipantFocusManager: {
            inlineRequire: () => n("14516").default,
            hasStoreChangeListeners: !0
        },
        PomeloManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("736401").default
        },
        PromotionsManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("349540").default
        },
        RelationshipManager: {
            actions: ["RELATIONSHIP_ADD", "FRIEND_REQUEST_ACCEPTED"],
            inlineRequire: () => n("859099").default
        },
        RTCLatencyTestManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("70655").default
        },
        MessageRemindersManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("652244").default,
            neverLoadBeforeConnectionOpen: !0
        },
        MessageRemindersNotificationManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("211040").default,
            neverLoadBeforeConnectionOpen: !0
        },
        SearchManager: {
            actions: ["USER_SETTINGS_PROTO_UPDATE", "I18N_LOAD_SUCCESS", "POST_CONNECTION_OPEN"],
            inlineRequire: () => n("941467").default,
            neverLoadBeforeConnectionOpen: !0
        },
        SelectedChannelManager: {
            actions: ["GUILD_CREATE", "CHANNEL_CREATE", "LOGOUT"],
            inlineRequire: () => n("149770").default
        },
        SelfPresenceStoreManager: {
            inlineRequire: () => n("613402").default,
            hasStoreChangeListeners: !0
        },
        StageChannelRequestToSpeakMessageManager: {
            actions: ["VOICE_STATE_UPDATES"],
            inlineRequire: () => n("834332").default
        },
        StageMusicManager: {
            actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "STAGE_MUSIC_MUTE", "STAGE_MUSIC_PLAY", "VOICE_STATE_UPDATES", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_SELF_DEAF"],
            inlineRequire: () => n("485287").default
        },
        SubscriptionRemindersManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("177082").default
        },
        ThreadManager: {
            actions: ["CHANNEL_DELETE", "MESSAGE_CREATE"],
            inlineRequire: () => n("359915").default,
            neverLoadBeforeConnectionOpen: !0
        },
        UrgentSystemDMManagerBase: {
            actions: ["POST_CONNECTION_OPEN", "MESSAGE_CREATE", "CHANNEL_SELECT"],
            inlineRequire: () => n("559523").default,
            neverLoadBeforeConnectionOpen: !0
        },
        UserGuildSettingsManager: {
            actions: ["CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CATEGORY_COLLAPSE_ALL", "CATEGORY_EXPAND_ALL", "POST_CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
            inlineRequire: () => n("149071").default
        },
        UserSearchManager: {
            actions: ["LOGOUT", "POST_CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "OVERLAY_INITIALIZE", "CURRENT_USER_UPDATE", "GUILD_CREATE", "GUILD_MEMBERS_CHUNK", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "RELATIONSHIP_ADD", "RELATIONSHIP_UPDATE", "RELATIONSHIP_REMOVE", "CHANNEL_CREATE", "CHANNEL_UPDATES", "CHANNEL_RECIPIENT_ADD", "PASSIVE_UPDATE_V1"],
            inlineRequire: () => n("279779").default
        },
        UserSettingsManager: {
            actions: ["POST_CONNECTION_OPEN", "OVERLAY_INITIALIZE", "USER_SETTINGS_PROTO_UPDATE"],
            inlineRequire: () => n("151742").default
        },
        VoiceChannelSettingsManager: {
            actions: ["CHANNEL_UPDATES", "VOICE_STATE_UPDATES"],
            inlineRequire: () => n("583523").default
        },
        VoiceChannelNotificationsManager: {
            actions: ["VOICE_CHANNEL_SELECT"],
            inlineRequire: () => n("538215").default
        },
        VoicePermissionManager: {
            actions: ["VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
            inlineRequire: () => n("17300").default
        },
        VoiceProcessingErrorManager: {
            actions: ["MEDIA_ENGINE_NOISE_CANCELLATION_ERROR"],
            inlineRequire: () => n("681694").default
        },
        GPUWorkaroundManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("703767").default
        },
        HighFiveManager: {
            actions: ["VOICE_CHANNEL_EFFECT_SEND", "HIGH_FIVE_COMPLETE"],
            inlineRequire: () => n("294270").default
        },
        NativeCrashManager: {
            actions: ["RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "MEDIA_SESSION_JOINED"],
            inlineRequire: () => n("902558").default
        },
        GuestManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("978684").default
        },
        ClipsManager: {
            actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_USER_CREATE", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "RUNNING_GAME_TOGGLE_DETECTION", "RUNNING_GAMES_CHANGE", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO", "MEDIA_ENGINE_SET_HARDWARE_H264"],
            inlineRequire: () => n("220122").default
        },
        BroadcastingManager: {
            actions: ["RUNNING_GAMES_CHANGE", "STREAM_CREATE", "STREAM_STOP", "START_BROADCAST_STREAM", "CALL_CREATE", "RTC_CONNECTION_STATE", "CHANNEL_DELETE", "MESSAGE_CREATE"],
            inlineRequire: () => n("85717").default,
            neverLoadBeforeConnectionOpen: !0
        },
        CustomCallSoundsManager: {
            actions: ["RTC_CONNECTION_STATE", "SOUNDBOARD_MUTE_JOIN_SOUND", "VOICE_STATE_UPDATES"],
            inlineRequire: () => n("783295").default
        },
        NotificationMigrationManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("392888").default
        },
        AnnouncementViewTrackingManager: {
            actions: ["CHANNEL_SELECT"],
            inlineRequire: () => n("529726").default,
            neverLoadBeforeConnectionOpen: !0
        },
        DetectableGamesManager: {
            actions: ["POST_CONNECTION_OPEN"],
            inlineRequire: () => n("114957").default,
            neverLoadBeforeConnectionOpen: !0
        },
        MidjourneyOnboardingManager: {
            actions: ["CHANNEL_CREATE"],
            inlineRequire: () => n("175255").default,
            neverLoadBeforeConnectionOpen: !0
        },
        QuestsManager: {
            actions: ["POST_CONNECTION_OPEN", "QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "STREAM_START", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V1", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_INBOUND_UPDATE", "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2"],
            inlineRequire: () => n("313122").default,
            neverLoadBeforeConnectionOpen: !0
        },
        VoiceChannelGameActivityManager: {
            actions: ["RUNNING_GAMES_CHANGE", "VOICE_CHANNEL_SELECT"],
            inlineRequire: () => n("981668").default,
            neverLoadBeforeConnectionOpen: !0
        },
        InappropriateConversationsManager: {
            actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
            inlineRequire: () => n("752290").default,
            neverLoadBeforeConnectionOpen: !0
        },
        ContentInventoryManager: {
            actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "IDLE", "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN"],
            inlineRequire: () => n("342879").default,
            neverLoadBeforeConnectionOpen: !0
        },
        RunningGameHeartbeatManager: {
            actions: ["RUNNING_GAMES_CHANGE", "LOGOUT", "CONNECTION_CLOSED", "POST_CONNECTION_OPEN"],
            inlineRequire: () => n("696287").default,
            neverLoadBeforeConnectionOpen: !0
        },
        TenureRewardManager: {
            actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", "ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE", "LOGOUT"],
            inlineRequire: () => n("944880").default,
            neverLoadBeforeConnectionOpen: !0
        }
    };
    (0, i.initialize)(r)
}
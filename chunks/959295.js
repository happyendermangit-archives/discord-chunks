function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("180082"),
        o = {
            AppAnalyticsManager: {
                inlineRequire: function() {
                    return n("913455").default
                },
                hasStoreChangeListeners: !0
            },
            AudioSettingsManager: {
                actions: ["POST_CONNECTION_OPEN", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE"],
                inlineRequire: function() {
                    return n("723721").default
                }
            },
            BlockedDomainManager: {
                inlineRequire: function() {
                    return n("926001").default
                },
                loadAfterConnectionOpen: !0
            },
            CallIdleManager: {
                actions: ["VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_DISCONNECT", "CONNECTION_CLOSED"],
                inlineRequire: function() {
                    return n("140052").default
                }
            },
            ChangelogManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("225429").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            ChannelCallManager: {
                inlineRequire: function() {
                    return n("189408").default
                },
                hasStoreChangeListeners: !0
            },
            ChannelSafetyWarningsManager: {
                actions: ["CHANNEL_SELECT", "CHANNEL_UPDATES"],
                inlineRequire: function() {
                    return n("151482").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            CommunicationDisabledManager: {
                inlineRequire: function() {
                    return n("289205").default
                },
                loadAfterConnectionOpen: !0
            },
            ContentProtectionManager: {
                inlineRequire: function() {
                    return n("836959").default
                },
                loadRightBeforeConnectionOpen: !0,
                hasStoreChangeListeners: !0
            },
            CustomStatusManager: {
                actions: ["USER_SETTINGS_PROTO_UPDATE", "POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("826936").default
                },
                loadAfterConnectionOpen: !0
            },
            DeadchatPromptManager: {
                actions: ["POST_CONNECTION_OPEN", "IDLE"],
                inlineRequire: function() {
                    return n("161958").default
                },
                loadAfterConnectionOpen: !0
            },
            TopEmojisDataManager: {
                actions: ["EMOJI_INTERACTION_INITIATED"],
                inlineRequire: function() {
                    return n("793742").default
                }
            },
            EmojiCaptionsDataManager: {
                actions: ["EMOJI_INTERACTION_INITIATED"],
                inlineRequire: function() {
                    return n("912860").default
                }
            },
            EntityVersionsManager: {
                actions: ["GUILD_CREATE", "DELETED_ENTITY_IDS"],
                inlineRequire: function() {
                    return n("368593").default
                },
                loadRightBeforeConnectionOpen: !0
            },
            ExplicitMediaManager: {
                actions: ["CHANNEL_SELECT", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_UPDATE", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "LOAD_FORUM_POSTS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_THREADS_SUCCESS", "LOGOUT", "LOAD_PINNED_MESSAGES_SUCCESS", "USER_SETTINGS_PROTO_UPDATE", "CHANNEL_RTC_UPDATE_CHAT_OPEN", "POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("438030").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            FeedbackManager: {
                actions: ["VOICE_CHANNEL_SHOW_FEEDBACK", "STREAM_CLOSE", "EMBEDDED_ACTIVITY_CLOSE", "VIDEO_BACKGROUND_SHOW_FEEDBACK", "IN_APP_REPORTS_SHOW_FEEDBACK"],
                inlineRequire: function() {
                    return n("807688").default
                }
            },
            ForumGuidelinesManager: {
                inlineRequire: function() {
                    return n("66680").default
                },
                loadAfterConnectionOpen: !0
            },
            ForumManager: {
                actions: ["CHANNEL_PRELOAD"],
                inlineRequire: function() {
                    return n("326181").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            ForumImagePreloadManager: {
                actions: ["CHANNEL_PRELOAD"],
                inlineRequire: function() {
                    return n("885658").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            ForumPostAnalyticsManager: {
                actions: ["CHANNEL_SELECT", "THREAD_CREATE"],
                inlineRequire: function() {
                    return n("807074").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            FrecencyUserSettingsManager: {
                actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED"],
                inlineRequire: function() {
                    return n("230285").default
                }
            },
            GuildOnboardingHomeManager: {
                actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "MESSAGE_CREATE", "THREAD_CREATE", "GUILD_MEMBER_UPDATE", "GUILD_DELETE"],
                inlineRequire: function() {
                    return n("294669").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            SignUpManager: {
                actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("641300").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            GuildOnboardingManager: {
                actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "GUILD_DELETE"],
                inlineRequire: function() {
                    return n("236521").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            GuildOnboardingUpsellManager: {
                actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("305872").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            GameConsoleManager: {
                actions: ["WAIT_FOR_REMOTE_SESSION", "POST_CONNECTION_OPEN", "SESSIONS_REPLACE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "VOICE_STATE_UPDATES", "CONSOLE_COMMAND_UPDATE", "PASSIVE_UPDATE_V1", "REMOTE_SESSION_DISCONNECT"],
                inlineRequire: function() {
                    return n("666717").default
                }
            },
            GuildHomeManager: {
                actions: ["CHANNEL_PRELOAD"],
                inlineRequire: function() {
                    return n("675819").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            GuildScheduledEventManager: {
                actions: ["POST_CONNECTION_OPEN", "GUILD_DELETE", "GUILD_UNAVAILABLE", "INVITE_RESOLVE_SUCCESS", "CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("320355").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            GuildVerificationManager: {
                actions: ["INVITE_ACCEPT_SUCCESS"],
                inlineRequire: function() {
                    return n("40909").default
                }
            },
            HangStatusManager: {
                actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "GUILD_MEMBER_UPDATE"],
                inlineRequire: function() {
                    return n("527559").default
                },
                hasStoreChangeListeners: !0
            },
            InteractionModalManager: {
                actions: ["INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CLOSE", "RPC_APP_DISCONNECTED"],
                inlineRequire: function() {
                    return n("425327").default
                }
            },
            LocalizedPricingPromoManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("377272").default
                }
            },
            LoginRequiredActionManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("590399").default
                }
            },
            MemberSafetySearchManager: {
                actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_DELETE", "MEMBER_SAFETY_SEARCH_STATE_UPDATE", "MEMBER_SAFETY_PAGINATION_UPDATE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH"],
                inlineRequire: function() {
                    return n("808620").default
                }
            },
            MemberSafetyStoreBatchUpdateManager: {
                actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS"],
                inlineRequire: function() {
                    return n("864001").default
                }
            },
            MessageCodedLinkManager: {
                actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "GUILD_FEED_FETCH_SUCCESS"],
                inlineRequire: function() {
                    return n("213362").default
                }
            },
            MessageManager: {
                actions: ["APP_STATE_UPDATE", "OVERLAY_INITIALIZE", "CHANNEL_SELECT", "VOICE_CHANNEL_SELECT", "THREAD_CREATE", "THREAD_LIST_SYNC", "CHANNEL_CREATE", "CHANNEL_PRELOAD", "THREAD_CREATE_LOCAL", "GUILD_CREATE", "MESSAGE_END_EDIT", "LOAD_MESSAGES_SUCCESS", "UPLOAD_FAIL", "CHANNEL_DELETE", "THREAD_DELETE"],
                inlineRequire: function() {
                    return n("850334").default
                },
                neverLoadBeforeConnectionOpen: !0,
                hasStoreChangeListeners: !0,
                loadRightBeforeConnectionOpen: !0
            },
            MultiAccountManager: {
                actions: ["LOGOUT"],
                inlineRequire: function() {
                    return n("273387").default
                },
                loadAfterConnectionOpen: !0
            },
            OverlayUsageStatsManager: {
                actions: __OVERLAY__ ? ["MESSAGE_ACKED", "MESSAGE_CREATE"] : ["OVERLAY_FOCUSED", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SET_UI_LOCKED", "OVERLAY_WIDGET_CHANGED", "OVERLAY_MESSAGE_EVENT_ACTION", "RUNNING_GAMES_CHANGE", "SOUNDBOARD_SET_OVERLAY_ENABLED", "MESSAGE_ACKED", "MESSAGE_CREATE", "WINDOW_FOCUS", "RTC_CONNECTION_STATE", "AUDIO_TOGGLE_SELF_MUTE", "OVERLAY_SUCCESSFULLY_SHOWN"],
                inlineRequire: function() {
                    return n("709850").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            ParticipantFocusManager: {
                inlineRequire: function() {
                    return n("870043").default
                },
                hasStoreChangeListeners: !0
            },
            PomeloManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("257914").default
                }
            },
            PromotionsManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("212277").default
                }
            },
            RelationshipManager: {
                actions: ["RELATIONSHIP_ADD", "FRIEND_REQUEST_ACCEPTED"],
                inlineRequire: function() {
                    return n("304003").default
                }
            },
            RTCLatencyTestManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("99107").default
                }
            },
            MessageRemindersManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("120557").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            MessageRemindersNotificationManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("648429").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            SearchManager: {
                actions: ["USER_SETTINGS_PROTO_UPDATE", "I18N_LOAD_SUCCESS", "POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("183693").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            SelectedChannelManager: {
                actions: ["GUILD_CREATE", "CHANNEL_CREATE", "LOGOUT"],
                inlineRequire: function() {
                    return n("915020").default
                }
            },
            SelfPresenceStoreManager: {
                inlineRequire: function() {
                    return n("897719").default
                },
                hasStoreChangeListeners: !0
            },
            StageChannelRequestToSpeakMessageManager: {
                actions: ["VOICE_STATE_UPDATES"],
                inlineRequire: function() {
                    return n("150943").default
                }
            },
            StageMusicManager: {
                actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "STAGE_MUSIC_MUTE", "STAGE_MUSIC_PLAY", "VOICE_STATE_UPDATES", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_SELF_DEAF"],
                inlineRequire: function() {
                    return n("579145").default
                }
            },
            SubscriptionRemindersManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("563515").default
                }
            },
            ThreadManager: {
                actions: ["CHANNEL_DELETE", "MESSAGE_CREATE"],
                inlineRequire: function() {
                    return n("832418").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            UrgentSystemDMManagerBase: {
                actions: ["POST_CONNECTION_OPEN", "MESSAGE_CREATE", "CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("49469").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            UserGuildSettingsManager: {
                actions: ["CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CATEGORY_COLLAPSE_ALL", "CATEGORY_EXPAND_ALL", "POST_CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
                inlineRequire: function() {
                    return n("844565").default
                }
            },
            UserSearchManager: {
                actions: ["LOGOUT", "POST_CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "OVERLAY_INITIALIZE", "CURRENT_USER_UPDATE", "GUILD_CREATE", "GUILD_MEMBERS_CHUNK", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "RELATIONSHIP_ADD", "RELATIONSHIP_UPDATE", "RELATIONSHIP_REMOVE", "CHANNEL_CREATE", "CHANNEL_UPDATES", "CHANNEL_RECIPIENT_ADD", "PASSIVE_UPDATE_V1"],
                inlineRequire: function() {
                    return n("967610").default
                }
            },
            UserSettingsManager: {
                actions: ["POST_CONNECTION_OPEN", "OVERLAY_INITIALIZE", "USER_SETTINGS_PROTO_UPDATE"],
                inlineRequire: function() {
                    return n("924973").default
                }
            },
            VoiceChannelSettingsManager: {
                actions: ["CHANNEL_UPDATES", "VOICE_STATE_UPDATES"],
                inlineRequire: function() {
                    return n("199553").default
                }
            },
            VoiceChannelNotificationsManager: {
                actions: ["VOICE_CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("585528").default
                }
            },
            VoicePermissionManager: {
                actions: ["VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
                inlineRequire: function() {
                    return n("735524").default
                }
            },
            VoiceProcessingErrorManager: {
                actions: ["MEDIA_ENGINE_NOISE_CANCELLATION_ERROR"],
                inlineRequire: function() {
                    return n("417456").default
                }
            },
            GPUWorkaroundManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("326537").default
                }
            },
            HighFiveManager: {
                actions: ["VOICE_CHANNEL_EFFECT_SEND", "HIGH_FIVE_COMPLETE"],
                inlineRequire: function() {
                    return n("38889").default
                }
            },
            NativeCrashManager: {
                actions: ["RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "MEDIA_SESSION_JOINED"],
                inlineRequire: function() {
                    return n("204603").default
                }
            },
            GuestManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("354560").default
                }
            },
            ClipsManager: {
                actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_USER_CREATE", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "RUNNING_GAME_TOGGLE_DETECTION", "RUNNING_GAMES_CHANGE", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO", "MEDIA_ENGINE_SET_HARDWARE_H264"],
                inlineRequire: function() {
                    return n("440864").default
                }
            },
            BroadcastingManager: {
                actions: ["RUNNING_GAMES_CHANGE", "STREAM_CREATE", "STREAM_STOP", "START_BROADCAST_STREAM", "CALL_CREATE", "RTC_CONNECTION_STATE", "CHANNEL_DELETE", "MESSAGE_CREATE"],
                inlineRequire: function() {
                    return n("761272").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            CustomCallSoundsManager: {
                actions: ["RTC_CONNECTION_STATE", "SOUNDBOARD_MUTE_JOIN_SOUND", "VOICE_STATE_UPDATES"],
                inlineRequire: function() {
                    return n("12397").default
                }
            },
            NotificationMigrationManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("764410").default
                }
            },
            AnnouncementViewTrackingManager: {
                actions: ["CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("337614").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            DetectableGamesManager: {
                actions: ["POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("655852").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            MidjourneyOnboardingManager: {
                actions: ["CHANNEL_CREATE"],
                inlineRequire: function() {
                    return n("465594").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            QuestsManager: {
                actions: ["POST_CONNECTION_OPEN", "QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "STREAM_START", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V1", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_INBOUND_UPDATE", "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2"],
                inlineRequire: function() {
                    return n("779672").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            VoiceChannelGameActivityManager: {
                actions: ["RUNNING_GAMES_CHANGE", "VOICE_CHANNEL_SELECT"],
                inlineRequire: function() {
                    return n("662932").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            InappropriateConversationsManager: {
                actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
                inlineRequire: function() {
                    return n("726090").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            ContentInventoryManager: {
                actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "IDLE", "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN"],
                inlineRequire: function() {
                    return n("208799").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            RunningGameHeartbeatManager: {
                actions: ["RUNNING_GAMES_CHANGE", "LOGOUT", "CONNECTION_CLOSED", "POST_CONNECTION_OPEN"],
                inlineRequire: function() {
                    return n("993664").default
                },
                neverLoadBeforeConnectionOpen: !0
            },
            TenureRewardManager: {
                actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", "ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE", "LOGOUT"],
                inlineRequire: function() {
                    return n("224380").default
                },
                neverLoadBeforeConnectionOpen: !0
            }
        };
    (0, r.initialize)(o)
}
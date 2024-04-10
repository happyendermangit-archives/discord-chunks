function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AllGuildSettings: function() {
            return b
        },
        AudioContextSetting: function() {
            return eD
        },
        BackgroundGradientPresetId: function() {
            return c
        },
        ChannelSettings: function() {
            return F
        },
        DebugSettings: function() {
            return er
        },
        DismissibleContent: function() {
            return o
        },
        DismissibleGuildContent: function() {
            return a
        },
        DmSpamFilterV2: function() {
            return u
        },
        ExplicitContentRedaction: function() {
            return l
        },
        FavoriteChannel: function() {
            return eg
        },
        FavoriteChannelType: function() {
            return E
        },
        GameLibrarySettings: function() {
            return ea
        },
        GuildActivityStatusRestrictionDefault: function() {
            return d
        },
        GuildFolder: function() {
            return eO
        },
        GuildOnboardingProgress: function() {
            return s
        },
        GuildSettings: function() {
            return w
        },
        InboxSettings: function() {
            return P
        },
        InboxTab: function() {
            return i
        },
        NotificationSettings: function() {
            return ee
        },
        PreloadedUserSettings: function() {
            return M
        },
        PrivacySettings: function() {
            return en
        },
        TextAndImagesSettings: function() {
            return Z
        },
        Theme: function() {
            return _
        },
        UserContentSettings: function() {
            return H
        },
        VoiceAndVideoSettings: function() {
            return X
        }
    }), n("47120"), n("411104"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("653041");
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, A, h, m, N, O, p, R, C = n("578012"),
        g = n("381499"),
        L = n("835913"),
        D = n("397696");
    (I = i || (i = {}))[I.UNSPECIFIED = 0] = "UNSPECIFIED", I[I.MENTIONS = 1] = "MENTIONS", I[I.UNREADS = 2] = "UNREADS", I[I.TODOS = 3] = "TODOS", I[I.FOR_YOU = 4] = "FOR_YOU", I[I.GAME_INVITES = 5] = "GAME_INVITES", (T = r || (r = {}))[T.NO_PROGRESS = 0] = "NO_PROGRESS", T[T.JOIN_GUILD = 1] = "JOIN_GUILD", T[T.INVITE_USER = 2] = "INVITE_USER", T[T.CONTACT_SYNC = 4] = "CONTACT_SYNC", (f = s || (s = {}))[f.NO_GUILD_ONBOARDING = 0] = "NO_GUILD_ONBOARDING", f[f.GUILD_NOTICE_SHOWN = 1] = "GUILD_NOTICE_SHOWN", f[f.GUILD_NOTICE_CLEARED = 2] = "GUILD_NOTICE_CLEARED", (S = a || (a = {}))[S.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE = 0] = "DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE", S[S.CLYDE_GUILD_NOTICE_NUX = 1] = "CLYDE_GUILD_NOTICE_NUX", S[S.SUMMARIES_NOTICE = 2] = "SUMMARIES_NOTICE", S[S.SUMMARIES_ENABLED_NOTICE = 3] = "SUMMARIES_ENABLED_NOTICE", (A = o || (o = {}))[A.HUB_WAITLIST_UPSELL = 0] = "HUB_WAITLIST_UPSELL", A[A.APPLICATION_COMMAND_TOOLTIP = 1] = "APPLICATION_COMMAND_TOOLTIP", A[A.HUB_EVENT_HEADER_UPSELL = 2] = "HUB_EVENT_HEADER_UPSELL", A[A.CHANNELINFO_CHANNELBANNER_NOTICE = 3] = "CHANNELINFO_CHANNELBANNER_NOTICE", A[A.ACCOUNT_MULTIACCOUNT_TOOLTIP = 4] = "ACCOUNT_MULTIACCOUNT_TOOLTIP", A[A.SEASONALGIFTING_CHANNELBUTTON_POPUP = 5] = "SEASONALGIFTING_CHANNELBUTTON_POPUP", A[A.CHANNEL_NOTICE_INVITE = 6] = "CHANNEL_NOTICE_INVITE", A[A.CHANNEL_NOTICE_HUBLINK = 7] = "CHANNEL_NOTICE_HUBLINK", A[A.CHANNEL_NOTICE_QUICKSWITCHER = 8] = "CHANNEL_NOTICE_QUICKSWITCHER", A[A.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION = 9] = "CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION", A[A.CHANNEL_NOTICE_GUILD_BANNER = 11] = "CHANNEL_NOTICE_GUILD_BANNER", A[A.GUILD_HEADER_EVENT_UPSELL = 12] = "GUILD_HEADER_EVENT_UPSELL", A[A.GUILD_HEADER_PREMIUM_GUILD_PROGRESS = 14] = "GUILD_HEADER_PREMIUM_GUILD_PROGRESS", A[A.GUILD_HEADER_ANIMATED_GUILD_BANNER = 15] = "GUILD_HEADER_ANIMATED_GUILD_BANNER", A[A.NAGBAR_NOTICE_DOWNLOAD = 16] = "NAGBAR_NOTICE_DOWNLOAD", A[A.NAGBAR_NOTICE_CONNECT_SPOTIFY = 17] = "NAGBAR_NOTICE_CONNECT_SPOTIFY", A[A.NAGBAR_NOTICE_CONNECT_PLAYSTATION = 18] = "NAGBAR_NOTICE_CONNECT_PLAYSTATION", A[A.NAGBAR_NOTICE_MFA_SMS_BACKUP = 19] = "NAGBAR_NOTICE_MFA_SMS_BACKUP", A[A.ACTIVITIES_SUNSET_COACH_MARK = 20] = "ACTIVITIES_SUNSET_COACH_MARK", A[A.NAGBAR_NOTICE_PREMIUM_PROMO = 21] = "NAGBAR_NOTICE_PREMIUM_PROMO", A[A.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING = 22] = "NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING", A[A.NAGBAR_NOTICE_PREMIUM_REACTIVATE = 23] = "NAGBAR_NOTICE_PREMIUM_REACTIVATE", A[A.PREMIUM_5TH_ANNIVERSARY_MODAL = 24] = "PREMIUM_5TH_ANNIVERSARY_MODAL", A[A.GUILD_JOIN_FEEDBACK_MODAL = 25] = "GUILD_JOIN_FEEDBACK_MODAL", A[A.VOICE_QUALITY_BOOSTING_UPSELL_TOOLTIP = 26] = "VOICE_QUALITY_BOOSTING_UPSELL_TOOLTIP", A[A.ACTIVITIES_EARLY_USER_COACH_MARK = 27] = "ACTIVITIES_EARLY_USER_COACH_MARK", A[A.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP = 28] = "GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP", A[A.ACTIVITIES_TUTORIAL_COACH_MARK = 29] = "ACTIVITIES_TUTORIAL_COACH_MARK", A[A.GUILD_HEADER_INVITE_SPLASH = 31] = "GUILD_HEADER_INVITE_SPLASH", A[A.NAGBAR_NOTICE_LOCALIZED_PRICING = 33] = "NAGBAR_NOTICE_LOCALIZED_PRICING", A[A.SOUNDBOARD_EDUCATION = 35] = "SOUNDBOARD_EDUCATION", A[A.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK = 36] = "GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK", A[A.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL = 37] = "GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL", A[A.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK = 38] = "CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK", A[A.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL = 39] = "GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL", A[A.GUILD_INSIGHTS_ACCESS_RATE_NEW = 40] = "GUILD_INSIGHTS_ACCESS_RATE_NEW", A[A.NOW_PLAYING_CONSENT_CARD = 41] = "NOW_PLAYING_CONSENT_CARD", A[A.GUILD_HEADER_BOOSTING_LOW_PRICE_EXPERIMENT_TOOLTIP = 42] = "GUILD_HEADER_BOOSTING_LOW_PRICE_EXPERIMENT_TOOLTIP", A[A.FORUM_CHANNEL_UPSELL_MODAL = 44] = "FORUM_CHANNEL_UPSELL_MODAL", A[A.POGGERMODE_BIRTHDAY_EDUCATION_TOOLTIP = 46] = "POGGERMODE_BIRTHDAY_EDUCATION_TOOLTIP", A[A.MWEB_APP_DOWNLOAD_HALFSHEET = 47] = "MWEB_APP_DOWNLOAD_HALFSHEET", A[A.MWEB_APP_DOWNLOAD_NAGBAR_THEMED = 48] = "MWEB_APP_DOWNLOAD_NAGBAR_THEMED", A[A.MWEB_APP_DOWNLOAD_NAGBAR_BLURPLE = 49] = "MWEB_APP_DOWNLOAD_NAGBAR_BLURPLE", A[A.GUILD_FEED_NUX_CARD = 50] = "GUILD_FEED_NUX_CARD", A[A.GUILD_HEADER_FREE_STICKER_SLOTS_TOOLTIP = 52] = "GUILD_HEADER_FREE_STICKER_SLOTS_TOOLTIP", A[A.ACTIVITIES_NITRO_TUTORIAL_COACH_MARK_V2 = 53] = "ACTIVITIES_NITRO_TUTORIAL_COACH_MARK_V2", A[A.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES = 55] = "ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES", A[A.GUILD_DELETE_FEEDBACK = 56] = "GUILD_DELETE_FEEDBACK", A[A.GUILD_LEAVE_FEEDBACK = 57] = "GUILD_LEAVE_FEEDBACK", A[A.AUTH_SESSIONS_NEW = 63] = "AUTH_SESSIONS_NEW", A[A.DONUT_MOBILE_NUX = 65] = "DONUT_MOBILE_NUX", A[A.GUILD_ROLE_SUBSCRIPTION_MWEB_PURCHASE_UPSELL = 66] = "GUILD_ROLE_SUBSCRIPTION_MWEB_PURCHASE_UPSELL", A[A.FORUM_CHANNEL_HELPER_CARD = 67] = "FORUM_CHANNEL_HELPER_CARD", A[A.PASSPORT_USER_SETTINGS = 70] = "PASSPORT_USER_SETTINGS", A[A.SUMMER_BOGO_ANNOUNCEMENT = 71] = "SUMMER_BOGO_ANNOUNCEMENT", A[A.COMMANDS_MIGRATION_UPSELL_MODAL = 72] = "COMMANDS_MIGRATION_UPSELL_MODAL", A[A.FILE_LIMIT_UPLOAD_COACH_MARK = 73] = "FILE_LIMIT_UPLOAD_COACH_MARK", A[A.DONUT_DESKTOP_NUX = 77] = "DONUT_DESKTOP_NUX", A[A.GUILD_ROLE_SUBSCRIPTION_EMOJI_UPSELL = 79] = "GUILD_ROLE_SUBSCRIPTION_EMOJI_UPSELL", A[A.PREMIUM_SUBSCRIPTION_UPSELL_EMOJI_PICKER_TOP_OF_LIST = 80] = "PREMIUM_SUBSCRIPTION_UPSELL_EMOJI_PICKER_TOP_OF_LIST", A[A.STAGE_RAISED_HAND_MOVED = 81] = "STAGE_RAISED_HAND_MOVED", A[A.XBOX_ONE_WAY_RECONNECT = 82] = "XBOX_ONE_WAY_RECONNECT", A[A.XBOX_VOICE_DESKTOP_SETTINGS_UPSELL_POPOUT = 84] = "XBOX_VOICE_DESKTOP_SETTINGS_UPSELL_POPOUT", A[A.HUB_BACK_TO_SCHOOL_UPSELL = 85] = "HUB_BACK_TO_SCHOOL_UPSELL", A[A.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP = 86] = "STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP", A[A.ACTIVITIES_MOBILE_VOICE_CONTROLS_TOGGLE_NUX = 89] = "ACTIVITIES_MOBILE_VOICE_CONTROLS_TOGGLE_NUX", A[A.PROFILE_THEMES_SETTINGS_VIEWED_V2 = 92] = "PROFILE_THEMES_SETTINGS_VIEWED_V2", A[A.GUILD_HEADER_ACTIVE_THREADS_NOTICE = 93] = "GUILD_HEADER_ACTIVE_THREADS_NOTICE", A[A.CHANNEL_LIST_OPT_IN_NUX = 94] = "CHANNEL_LIST_OPT_IN_NUX", A[A.ACTIVITIES_MOBILE_NUX = 95] = "ACTIVITIES_MOBILE_NUX", A[A.PROFILE_THEMES_NEW_BADGE = 96] = "PROFILE_THEMES_NEW_BADGE", A[A.GUILD_AUTOMOD_DEFAULT_ON_UPSELL = 97] = "GUILD_AUTOMOD_DEFAULT_ON_UPSELL", A[A.CHANNEL_BROWSER_NUX = 98] = "CHANNEL_BROWSER_NUX", A[A.RNA_CHANGELOG_HC_NOTICE = 99] = "RNA_CHANGELOG_HC_NOTICE", A[A.MESSAGE_REQUEST_SETTINGS_COACH_MARK = 100] = "MESSAGE_REQUEST_SETTINGS_COACH_MARK", A[A.GUILD_AUTOMOD_DEFAULT_ON_UPSELL_2 = 101] = "GUILD_AUTOMOD_DEFAULT_ON_UPSELL_2", A[A.GUILD_AUTOMOD_REGEX_UPSELL = 102] = "GUILD_AUTOMOD_REGEX_UPSELL", A[A.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP = 103] = "VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP", A[A.CONNECTIONS_NUX = 108] = "CONNECTIONS_NUX", A[A.XBOX_VOICE_SURVEY_NAGBAR = 110] = "XBOX_VOICE_SURVEY_NAGBAR", A[A.PS_ONE_WAY_RECONNECT = 112] = "PS_ONE_WAY_RECONNECT", A[A.HALLOWEEN_2022_ACTIVITIES_COACH_MARK = 115] = "HALLOWEEN_2022_ACTIVITIES_COACH_MARK", A[A.NITRODUCTION_STEP_PROFILE_CUSTOMIZATION = 116] = "NITRODUCTION_STEP_PROFILE_CUSTOMIZATION", A[A.NITRODUCTION_STEP_BOOSTING = 117] = "NITRODUCTION_STEP_BOOSTING", A[A.NITRODUCTION_STEP_CUSTOM_EMOJI = 118] = "NITRODUCTION_STEP_CUSTOM_EMOJI", A[A.NEW_CRUNCHYROLL_CONNECTION = 119] = "NEW_CRUNCHYROLL_CONNECTION", A[A.APP_DIRECTORY_UPSELL_MODAL = 121] = "APP_DIRECTORY_UPSELL_MODAL", A[A.BASH_OUT_COACH_MARK = 123] = "BASH_OUT_COACH_MARK", A[A.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL = 124] = "GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL", A[A.COMMUNITY_ONBOARDING_NEW_BADGE = 125] = "COMMUNITY_ONBOARDING_NEW_BADGE", A[A.CHURRO_LINK_UPSELL = 126] = "CHURRO_LINK_UPSELL", A[A.VERIFIED_ROLES_COACH_MARK = 127] = "VERIFIED_ROLES_COACH_MARK", A[A.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP = 129] = "PROFILE_THEMES_ACCESSIBILITY_TOOLTIP", A[A.BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL = 130] = "BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL", A[A.USER_SAFETY_SAFE_DIRECT_MESSAGING = 131] = "USER_SAFETY_SAFE_DIRECT_MESSAGING", A[A.GG_ANNOUNCEMENT = 132] = "GG_ANNOUNCEMENT", A[A.CHANNEL_BROWSER_NEW_BADGE_NUX = 133] = "CHANNEL_BROWSER_NEW_BADGE_NUX", A[A.CREATOR_PROMO_PAGE_COACH_MARK = 134] = "CREATOR_PROMO_PAGE_COACH_MARK", A[A.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL = 136] = "CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL", A[A.GUILD_ONBOARDING_UPSELL_MODAL = 137] = "GUILD_ONBOARDING_UPSELL_MODAL", A[A.NAGBAR_NOTICE_ONE_TIME_PAYMENT_PAST_DUE = 138] = "NAGBAR_NOTICE_ONE_TIME_PAYMENT_PAST_DUE", A[A.DROPS_GO_LIVE_BANNER_NOTICE_HALO = 139] = "DROPS_GO_LIVE_BANNER_NOTICE_HALO", A[A.DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP_HALO = 140] = "DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP_HALO", A[A.DROPS_QUEST_COMPLETION_TOOLTIP_HALO = 141] = "DROPS_QUEST_COMPLETION_TOOLTIP_HALO", A[A.SEASONAL_GIFTING_COACHMARK_2022 = 146] = "SEASONAL_GIFTING_COACHMARK_2022", A[A.NAGBAR_BOUNCED_EMAIL_NOTICE = 147] = "NAGBAR_BOUNCED_EMAIL_NOTICE", A[A.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE = 151] = "GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE", A[A.CONSOLE_PTT_DISABLE_ALERT = 152] = "CONSOLE_PTT_DISABLE_ALERT", A[A.ACTIVITIES_MINI_SHELF_SPARKLES = 153] = "ACTIVITIES_MINI_SHELF_SPARKLES", A[A.DROPS_ENDED_INCOMPLETE_HALO = 154] = "DROPS_ENDED_INCOMPLETE_HALO", A[A.GDM_INVITE_REMINDER = 157] = "GDM_INVITE_REMINDER", A[A.USER_SAFETY_CONSUMER_EDUCATION_BLOCK = 161] = "USER_SAFETY_CONSUMER_EDUCATION_BLOCK", A[A.USER_SAFETY_CONSUMER_EDUCATION_MUTE = 162] = "USER_SAFETY_CONSUMER_EDUCATION_MUTE", A[A.LINKED_ROLE_ADMIN_GUILD = 163] = "LINKED_ROLE_ADMIN_GUILD", A[A.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION = 164] = "NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION", A[A.BURST_REACTION_BUTTON_SPARKLE = 165] = "BURST_REACTION_BUTTON_SPARKLE", A[A.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING = 166] = "NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING", A[A.VC_TILE_ACTIVITIES_ENTRY_POINT = 167] = "VC_TILE_ACTIVITIES_ENTRY_POINT", A[A.BURST_REACTION_COACHMARK = 169] = "BURST_REACTION_COACHMARK", A[A.BURST_REACTIONS_REMOVE_MODAL = 170] = "BURST_REACTIONS_REMOVE_MODAL", A[A.BURST_REACTION_NITRO_TOOLTIP = 171] = "BURST_REACTION_NITRO_TOOLTIP", A[A.CLIENT_THEMES_SETTINGS_BADGE = 173] = "CLIENT_THEMES_SETTINGS_BADGE", A[A.CLIENT_THEMES_COACHMARK = 174] = "CLIENT_THEMES_COACHMARK", A[A.CLIENT_THEMES_SPARKLE_PREVIEW = 175] = "CLIENT_THEMES_SPARKLE_PREVIEW", A[A.STAGE_V2_UPSELL = 176] = "STAGE_V2_UPSELL", A[A.QUEST_1_ENROLLMENT_TOOLTIP = 177] = "QUEST_1_ENROLLMENT_TOOLTIP", A[A.QUEST_1_COMPLETION_TOOLTIP = 178] = "QUEST_1_COMPLETION_TOOLTIP", A[A.QUEST_1_GO_LIVE_BANNER = 179] = "QUEST_1_GO_LIVE_BANNER", A[A.QUEST_1_ENDED_INCOMPLETE = 180] = "QUEST_1_ENDED_INCOMPLETE", A[A.PREMIUM_TUTORIAL_EXPERIENCE = 181] = "PREMIUM_TUTORIAL_EXPERIENCE", A[A.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL = 182] = "APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL", A[A.PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP = 183] = "PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP", A[A.PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP = 184] = "PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP", A[A.PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP = 185] = "PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP", A[A.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP = 186] = "PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP", A[A.TABS_V2_ANNOUNCEMENT_SHEET = 188] = "TABS_V2_ANNOUNCEMENT_SHEET", A[A.VOICE_MESSAGE_UPSELL_DM = 189] = "VOICE_MESSAGE_UPSELL_DM", A[A.SUPER_REACTIONS_NITRO_MARKETING = 190] = "SUPER_REACTIONS_NITRO_MARKETING", A[A.NITRO_DROP_2023_04_ANNOUNCEMENT_MODAL = 191] = "NITRO_DROP_2023_04_ANNOUNCEMENT_MODAL", A[A.CLYDE_GUILD_HEADER_NUX = 193] = "CLYDE_GUILD_HEADER_NUX", A[A.CLYDE_CHAT_BAR_NUX = 194] = "CLYDE_CHAT_BAR_NUX", A[A.VOICE_MESSAGE_UPSELL_GUILD = 195] = "VOICE_MESSAGE_UPSELL_GUILD", A[A.ACTIVITY_GDM_CALL_TOOLTIP = 196] = "ACTIVITY_GDM_CALL_TOOLTIP", A[A.ACTIVITY_GDM_ROCKET_SPARKLE = 197] = "ACTIVITY_GDM_ROCKET_SPARKLE", A[A.NITRO_DROP_2023_04_NITRO_TAB_BADGE = 205] = "NITRO_DROP_2023_04_NITRO_TAB_BADGE", A[A.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL = 206] = "GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL", A[A.ACTIVITIES_MOBILE_PIP_FAB_NUX = 208] = "ACTIVITIES_MOBILE_PIP_FAB_NUX", A[A.GUILD_HEADER_SOUNDBOARD_PERMISSION = 209] = "GUILD_HEADER_SOUNDBOARD_PERMISSION", A[A.GUILD_ONBOARDING_UPSELL_HEADER = 210] = "GUILD_ONBOARDING_UPSELL_HEADER", A[A.ACTIVITIES_COACH_MARK_GAME_NIGHT = 211] = "ACTIVITIES_COACH_MARK_GAME_NIGHT", A[A.GUILD_ONBOARDING_UPSELL_NAGBAR = 212] = "GUILD_ONBOARDING_UPSELL_NAGBAR", A[A.GUILD_ONBOARDING_UPSELL_MODAL_V2 = 213] = "GUILD_ONBOARDING_UPSELL_MODAL_V2", A[A.SUPER_REACTIONS_FREE_USER_FIRST_SENT = 214] = "SUPER_REACTIONS_FREE_USER_FIRST_SENT", A[A.SUPER_REACTIONS_TOOLTIP_COACHMARK = 215] = "SUPER_REACTIONS_TOOLTIP_COACHMARK", A[A.SOUNDBOARD_VOLUME_EDUCATION = 216] = "SOUNDBOARD_VOLUME_EDUCATION", A[A.NAGBAR_NOTICE_POMELO = 217] = "NAGBAR_NOTICE_POMELO", A[A.APP_DIRECTORY_GUILD_SETTINGS_NEW_INDICATOR = 218] = "APP_DIRECTORY_GUILD_SETTINGS_NEW_INDICATOR", A[A.APP_DIRECTORY_GUILD_SETTINGS_CONTEXT_MENU_NEW_INDICATOR = 219] = "APP_DIRECTORY_GUILD_SETTINGS_CONTEXT_MENU_NEW_INDICATOR", A[A.SUPER_REACTIONS_TAB_SPARKLE = 220] = "SUPER_REACTIONS_TAB_SPARKLE", A[A.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES = 221] = "ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES", A[A.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES = 222] = "ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES", A[A.MJ_NEW_USER_CHAT_BAR = 223] = "MJ_NEW_USER_CHAT_BAR", A[A.CHANNEL_NOTICE_CLYDE_NUX = 224] = "CHANNEL_NOTICE_CLYDE_NUX", A[A.USER_SAFETY_CONSUMER_EDUCATION_REPORTING = 225] = "USER_SAFETY_CONSUMER_EDUCATION_REPORTING", A[A.SUPER_REACTIONS_FIRST_SENT = 227] = "SUPER_REACTIONS_FIRST_SENT", A[A.COMMUNITY_GUILD_SETTINGS_SAFETY = 228] = "COMMUNITY_GUILD_SETTINGS_SAFETY", A[A.FRIEND_FINDER_FIRST_TIME_BADGE = 229] = "FRIEND_FINDER_FIRST_TIME_BADGE", A[A.SHARE_NITRO_BUTTON_SPARKLES = 230] = "SHARE_NITRO_BUTTON_SPARKLES", A[A.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE = 231] = "PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE", A[A.SOUNDBOARD_KEYBIND_TIP = 232] = "SOUNDBOARD_KEYBIND_TIP", A[A.QUEST_2_ENROLLMENT_TOOLTIP = 234] = "QUEST_2_ENROLLMENT_TOOLTIP", A[A.QUEST_2_COMPLETION_TOOLTIP = 235] = "QUEST_2_COMPLETION_TOOLTIP", A[A.QUEST_2_GO_LIVE_BANNER = 236] = "QUEST_2_GO_LIVE_BANNER", A[A.QUEST_2_ENDED_INCOMPLETE = 237] = "QUEST_2_ENDED_INCOMPLETE", A[A.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES = 238] = "GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES", A[A.MEDIA_CHANNEL_UPSELL = 243] = "MEDIA_CHANNEL_UPSELL", A[A.ADD_FRIENDS_WIDGET = 244] = "ADD_FRIENDS_WIDGET", A[A.YOU_TAB_AVATAR_ONBOARDING = 245] = "YOU_TAB_AVATAR_ONBOARDING", A[A.YOU_TAB_ABOUT_ME_ONBOARDING = 246] = "YOU_TAB_ABOUT_ME_ONBOARDING", A[A.GUILD_HEADER_SUMMARIES_UPSELL = 247] = "GUILD_HEADER_SUMMARIES_UPSELL", A[A.SUPER_REACTIONS_COACHMARK_MOBILE = 250] = "SUPER_REACTIONS_COACHMARK_MOBILE", A[A.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE = 251] = "SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE", A[A.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL = 252] = "SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL", A[A.EMOJI_PICKER_FAVORITE_EMOJIS_TIP = 253] = "EMOJI_PICKER_FAVORITE_EMOJIS_TIP", A[A.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE = 254] = "SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE", A[A.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS = 255] = "SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS", A[A.FAMILY_CENTER_NEW_BADGE = 256] = "FAMILY_CENTER_NEW_BADGE", A[A.CONSOLE_LOCAL_DETECT_CTA = 257] = "CONSOLE_LOCAL_DETECT_CTA", A[A.REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE = 263] = "REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE", A[A.GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE = 264] = "GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE", A[A.REMIXING_ENTRYPOINT_OPEN_MEDIA_KEYBOARD_UPSELL_MOBILE = 265] = "REMIXING_ENTRYPOINT_OPEN_MEDIA_KEYBOARD_UPSELL_MOBILE", A[A.GUILD_MEMBER_SAFETY_BANNER_NOTICE = 266] = "GUILD_MEMBER_SAFETY_BANNER_NOTICE", A[A.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL = 270] = "SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL", A[A.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK = 271] = "INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK", A[A.CUSTOM_CALL_SOUNDS_PICKER_UPSELL = 272] = "CUSTOM_CALL_SOUNDS_PICKER_UPSELL", A[A.CUSTOM_CALL_SOUNDS_SPARKLES = 274] = "CUSTOM_CALL_SOUNDS_SPARKLES", A[A.SOUNDBOARD_MOBILE_FLOATING_CTA = 275] = "SOUNDBOARD_MOBILE_FLOATING_CTA", A[A.SOUNDBOARD_MOBILE_NEW_BADGE = 276] = "SOUNDBOARD_MOBILE_NEW_BADGE", A[A.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 = 277] = "PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2", A[A.VOICE_PANEL_BAD_CONNECTION_CTA = 278] = "VOICE_PANEL_BAD_CONNECTION_CTA", A[A.PREMIUM_TRIAL_OFFER_MOBILE_ACTION_SHEET = 279] = "PREMIUM_TRIAL_OFFER_MOBILE_ACTION_SHEET", A[A.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE = 280] = "MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE", A[A.CLIPS_ONBOARDING_GO_LIVE_COACHMARK = 281] = "CLIPS_ONBOARDING_GO_LIVE_COACHMARK", A[A.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK = 282] = "CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK", A[A.CUSTOM_APP_ICONS_COACHMARK = 283] = "CUSTOM_APP_ICONS_COACHMARK", A[A.CUSTOM_APP_ICONS_NEW_BADGE = 284] = "CUSTOM_APP_ICONS_NEW_BADGE", A[A.BROADCASTING_BROADCASTER_TOOLTIP = 285] = "BROADCASTING_BROADCASTER_TOOLTIP", A[A.BROADCASTING_VIEWER_TOOLTIP = 286] = "BROADCASTING_VIEWER_TOOLTIP", A[A.SERVER_SHOP_UPSELL = 288] = "SERVER_SHOP_UPSELL", A[A.LAUNCH_PAD_PULL_TAB_NUX = 289] = "LAUNCH_PAD_PULL_TAB_NUX", A[A.CLIPS_SETTINGS_BETA_TAG = 290] = "CLIPS_SETTINGS_BETA_TAG", A[A.WHATS_NEW_AVATAR_DECOS_FLIP = 292] = "WHATS_NEW_AVATAR_DECOS_FLIP", A[A.WHATS_NEW_PROFILE_EFFECTS_FLIP = 293] = "WHATS_NEW_PROFILE_EFFECTS_FLIP", A[A.MEMBERS_LAUNCH_UPSELL = 294] = "MEMBERS_LAUNCH_UPSELL", A[A.SERVER_SHOP_PHANTOM_PREVIEW = 295] = "SERVER_SHOP_PHANTOM_PREVIEW", A[A.RECURRING_CONTACT_SYNC_PROMPT = 297] = "RECURRING_CONTACT_SYNC_PROMPT", A[A.INVENTORY_TRY_PACKS_MODAL = 302] = "INVENTORY_TRY_PACKS_MODAL", A[A.DEPRECATE_WIN32_MESSAGE = 305] = "DEPRECATE_WIN32_MESSAGE", A[A.DEKSTOP_CUSTOM_APP_ICON_COACHMARK = 306] = "DEKSTOP_CUSTOM_APP_ICON_COACHMARK", A[A.DEKSTOP_CUSTOM_APP_ICON_BADGE = 307] = "DEKSTOP_CUSTOM_APP_ICON_BADGE", A[A.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE = 309] = "WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE", A[A.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE = 310] = "WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE", A[A.CLYDE_AI_PERSONALITIES_NUX_MODAL = 312] = "CLYDE_AI_PERSONALITIES_NUX_MODAL", A[A.NUX_GUILD_CHANNEL_EXPLAINER = 313] = "NUX_GUILD_CHANNEL_EXPLAINER", A[A.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP = 316] = "SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP", A[A.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE = 317] = "SUPER_REACTION_TOGGLE_EDUCATION_MOBILE", A[A.SEEN_LAUNCH_WELCOME_OR_REDESIGN = 325] = "SEEN_LAUNCH_WELCOME_OR_REDESIGN", A[A.SEEN_OLD_DESIGN = 326] = "SEEN_OLD_DESIGN", A[A.SEASONAL_GIFTING_COACHMARK_2023 = 328] = "SEASONAL_GIFTING_COACHMARK_2023", A[A.SHOP_FOR_ALL_USER_POPOUT_UPSELL = 329] = "SHOP_FOR_ALL_USER_POPOUT_UPSELL", A[A.COLLECTIBLES_GIFTING_COACHMARK = 334] = "COLLECTIBLES_GIFTING_COACHMARK", A[A.SEEN_LAUNCH_WELCOME = 335] = "SEEN_LAUNCH_WELCOME", A[A.FAVORITE_SERVER_ADD_TO_FAVORITES_COACHMARK = 336] = "FAVORITE_SERVER_ADD_TO_FAVORITES_COACHMARK", A[A.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK = 337] = "INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK", A[A.FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS = 338] = "FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS", A[A.OVERLAY_KEYBIND_NOTIFICATION = 340] = "OVERLAY_KEYBIND_NOTIFICATION", A[A.CHANNEL_LIST_V2_BROWSE_CHANNELS_NUX = 343] = "CHANNEL_LIST_V2_BROWSE_CHANNELS_NUX", A[A.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE = 344] = "COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE", A[A.UU_MIGRATION_NOTICE = 345] = "UU_MIGRATION_NOTICE", A[A.HANG_STATUS_NEW_BADGE = 346] = "HANG_STATUS_NEW_BADGE", A[A.VOICE_CALL_BG_PICKER_TOOLTIP = 347] = "VOICE_CALL_BG_PICKER_TOOLTIP", A[A.VOICE_CALL_BG_PICKER_NEW_BADGE = 348] = "VOICE_CALL_BG_PICKER_NEW_BADGE", A[A.SWIPE_TO_REPLY_COACHMARK = 349] = "SWIPE_TO_REPLY_COACHMARK", A[A.MOBILE_ACCESSIBILITY_COLOR_SETTINGS = 350] = "MOBILE_ACCESSIBILITY_COLOR_SETTINGS", A[A.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP = 351] = "COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP", A[A.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP = 352] = "COLLECTIBLES_SHOP_ELEMENTS_COACHTIP", A[A.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP = 353] = "COLLECTIBLES_SHOP_ANIME_V2_COACHTIP", A[A.POLLS_CHAT_INPUT_COACHMARK = 354] = "POLLS_CHAT_INPUT_COACHMARK", A[A.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK = 355] = "PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK", A[A.LOOTBOXES_ENTRYPOINT = 358] = "LOOTBOXES_ENTRYPOINT", A[A.TENURE_REWARD_PENDING = 360] = "TENURE_REWARD_PENDING", A[A.TENURE_REWARD_REDEEMABLE = 361] = "TENURE_REWARD_REDEEMABLE", A[A.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP = 362] = "COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP", A[A.TENURE_REWARD_REDEEMABLE_CONFETTI = 363] = "TENURE_REWARD_REDEEMABLE_CONFETTI", A[A.GAME_ONE_USER_SIGNUPS = 364] = "GAME_ONE_USER_SIGNUPS", A[A.COLLECTIBLES_SHOP_SHY_COACHTIP = 365] = "COLLECTIBLES_SHOP_SHY_COACHTIP", A[A.APP_LAUNCHER_ONBOARDING_BOTS_BANNER = 366] = "APP_LAUNCHER_ONBOARDING_BOTS_BANNER", A[A.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER = 367] = "APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER", A[A.APP_LAUNCHER_ONBOARDING_APPS_BANNER = 368] = "APP_LAUNCHER_ONBOARDING_APPS_BANNER", A[A.COLLECTIBLES_MOBILE_SHOP_MARKETING = 369] = "COLLECTIBLES_MOBILE_SHOP_MARKETING", A[A.COLLECTIBLES_MOBILE_SHOP_HALF_SHEET = 370] = "COLLECTIBLES_MOBILE_SHOP_HALF_SHEET", A[A.GENSHIN_USER_SIGNUPS = 371] = "GENSHIN_USER_SIGNUPS", A[A.ACTIVITIES_CHAT_BUTTON_NUX_V2 = 372] = "ACTIVITIES_CHAT_BUTTON_NUX_V2", A[A.ACTIVITIES_CHAT_MENU_NEW_BADGE = 373] = "ACTIVITIES_CHAT_MENU_NEW_BADGE", A[A.PREMIUM_2024_APRIL_MARKETING_MODAL = 374] = "PREMIUM_2024_APRIL_MARKETING_MODAL", A[A.PREMIUM_2024_APRIL_MARKETING_BADGE = 375] = "PREMIUM_2024_APRIL_MARKETING_BADGE", A[A.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK = 376] = "PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK", (h = l || (l = {}))[h.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = "UNSET_EXPLICIT_CONTENT_REDACTION", h[h.SHOW = 1] = "SHOW", h[h.BLUR = 2] = "BLUR", h[h.BLOCK = 3] = "BLOCK", (m = u || (u = {}))[m.DEFAULT_UNSET = 0] = "DEFAULT_UNSET", m[m.DISABLED = 1] = "DISABLED", m[m.NON_FRIENDS = 2] = "NON_FRIENDS", m[m.FRIENDS_AND_NON_FRIENDS = 3] = "FRIENDS_AND_NON_FRIENDS", (N = d || (d = {}))[N.OFF = 0] = "OFF", N[N.ON_FOR_LARGE_GUILDS = 1] = "ON_FOR_LARGE_GUILDS", (O = _ || (_ = {}))[O.UNSET = 0] = "UNSET", O[O.DARK = 1] = "DARK", O[O.LIGHT = 2] = "LIGHT", (p = c || (c = {}))[p.MINT_APPLE = 0] = "MINT_APPLE", p[p.CITRUS_SHERBERT = 1] = "CITRUS_SHERBERT", p[p.RETRO_RAINCLOUD = 2] = "RETRO_RAINCLOUD", p[p.HANAMI = 3] = "HANAMI", p[p.SUNRISE = 4] = "SUNRISE", p[p.COTTON_CANDY = 5] = "COTTON_CANDY", p[p.LOFI_VIBES = 6] = "LOFI_VIBES", p[p.DESERT_KHAKI = 7] = "DESERT_KHAKI", p[p.SUNSET = 8] = "SUNSET", p[p.CHROMA_GLOW = 9] = "CHROMA_GLOW", p[p.FOREST = 10] = "FOREST", p[p.CRIMSON_MOON = 11] = "CRIMSON_MOON", p[p.MIDNIGHT_BLURPLE = 12] = "MIDNIGHT_BLURPLE", p[p.MARS = 13] = "MARS", p[p.DUSK = 14] = "DUSK", p[p.UNDER_THE_SEA = 15] = "UNDER_THE_SEA", p[p.EASTER_EGG = 16] = "EASTER_EGG", p[p.RETRO_STORM = 17] = "RETRO_STORM", p[p.NEON_NIGHTS = 18] = "NEON_NIGHTS", p[p.SEPIA = 19] = "SEPIA", p[p.STRAWBERRY_LEMONADE = 20] = "STRAWBERRY_LEMONADE", p[p.AURORA = 21] = "AURORA", (R = E || (E = {}))[R.UNSET_FAVORITE_CHANNEL_TYPE = 0] = "UNSET_FAVORITE_CHANNEL_TYPE", R[R.REFERENCE_ORIGINAL = 1] = "REFERENCE_ORIGINAL", R[R.CATEGORY = 2] = "CATEGORY";
    class v extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.versions = D.Versions.internalBinaryRead(e, e.uint32(), n, r.versions);
                        break;
                    case 2:
                        r.inbox = P.internalBinaryRead(e, e.uint32(), n, r.inbox);
                        break;
                    case 3:
                        r.guilds = b.internalBinaryRead(e, e.uint32(), n, r.guilds);
                        break;
                    case 4:
                        r.userContent = H.internalBinaryRead(e, e.uint32(), n, r.userContent);
                        break;
                    case 5:
                        r.voiceAndVideo = X.internalBinaryRead(e, e.uint32(), n, r.voiceAndVideo);
                        break;
                    case 6:
                        r.textAndImages = Z.internalBinaryRead(e, e.uint32(), n, r.textAndImages);
                        break;
                    case 7:
                        r.notifications = ee.internalBinaryRead(e, e.uint32(), n, r.notifications);
                        break;
                    case 8:
                        r.privacy = en.internalBinaryRead(e, e.uint32(), n, r.privacy);
                        break;
                    case 9:
                        r.debug = er.internalBinaryRead(e, e.uint32(), n, r.debug);
                        break;
                    case 10:
                        r.gameLibrary = ea.internalBinaryRead(e, e.uint32(), n, r.gameLibrary);
                        break;
                    case 11:
                        r.status = el.internalBinaryRead(e, e.uint32(), n, r.status);
                        break;
                    case 12:
                        r.localization = ec.internalBinaryRead(e, e.uint32(), n, r.localization);
                        break;
                    case 13:
                        r.appearance = ef.internalBinaryRead(e, e.uint32(), n, r.appearance);
                        break;
                    case 14:
                        r.guildFolders = em.internalBinaryRead(e, e.uint32(), n, r.guildFolders);
                        break;
                    case 15:
                        r.favorites = eR.internalBinaryRead(e, e.uint32(), n, r.favorites);
                        break;
                    case 16:
                        r.audioContextSettings = eM.internalBinaryRead(e, e.uint32(), n, r.audioContextSettings);
                        break;
                    case 17:
                        r.communities = eP.internalBinaryRead(e, e.uint32(), n, r.communities);
                        break;
                    case 18:
                        r.broadcast = eB.internalBinaryRead(e, e.uint32(), n, r.broadcast);
                        break;
                    case 19:
                        r.clips = eF.internalBinaryRead(e, e.uint32(), n, r.clips);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.versions && D.Versions.internalBinaryWrite(e.versions, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.inbox && P.internalBinaryWrite(e.inbox, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.guilds && b.internalBinaryWrite(e.guilds, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), e.userContent && H.internalBinaryWrite(e.userContent, t.tag(4, C.WireType.LengthDelimited).fork(), n).join(), e.voiceAndVideo && X.internalBinaryWrite(e.voiceAndVideo, t.tag(5, C.WireType.LengthDelimited).fork(), n).join(), e.textAndImages && Z.internalBinaryWrite(e.textAndImages, t.tag(6, C.WireType.LengthDelimited).fork(), n).join(), e.notifications && ee.internalBinaryWrite(e.notifications, t.tag(7, C.WireType.LengthDelimited).fork(), n).join(), e.privacy && en.internalBinaryWrite(e.privacy, t.tag(8, C.WireType.LengthDelimited).fork(), n).join(), e.debug && er.internalBinaryWrite(e.debug, t.tag(9, C.WireType.LengthDelimited).fork(), n).join(), e.gameLibrary && ea.internalBinaryWrite(e.gameLibrary, t.tag(10, C.WireType.LengthDelimited).fork(), n).join(), e.status && el.internalBinaryWrite(e.status, t.tag(11, C.WireType.LengthDelimited).fork(), n).join(), e.localization && ec.internalBinaryWrite(e.localization, t.tag(12, C.WireType.LengthDelimited).fork(), n).join(), e.appearance && ef.internalBinaryWrite(e.appearance, t.tag(13, C.WireType.LengthDelimited).fork(), n).join(), e.guildFolders && em.internalBinaryWrite(e.guildFolders, t.tag(14, C.WireType.LengthDelimited).fork(), n).join(), e.favorites && eR.internalBinaryWrite(e.favorites, t.tag(15, C.WireType.LengthDelimited).fork(), n).join(), e.audioContextSettings && eM.internalBinaryWrite(e.audioContextSettings, t.tag(16, C.WireType.LengthDelimited).fork(), n).join(), e.communities && eP.internalBinaryWrite(e.communities, t.tag(17, C.WireType.LengthDelimited).fork(), n).join(), e.broadcast && eB.internalBinaryWrite(e.broadcast, t.tag(18, C.WireType.LengthDelimited).fork(), n).join(), e.clips && eF.internalBinaryWrite(e.clips, t.tag(19, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.PreloadedUserSettings", [{
                no: 1,
                name: "versions",
                kind: "message",
                T: () => D.Versions
            }, {
                no: 2,
                name: "inbox",
                kind: "message",
                T: () => P
            }, {
                no: 3,
                name: "guilds",
                kind: "message",
                T: () => b
            }, {
                no: 4,
                name: "user_content",
                kind: "message",
                T: () => H
            }, {
                no: 5,
                name: "voice_and_video",
                kind: "message",
                T: () => X
            }, {
                no: 6,
                name: "text_and_images",
                kind: "message",
                T: () => Z
            }, {
                no: 7,
                name: "notifications",
                kind: "message",
                T: () => ee
            }, {
                no: 8,
                name: "privacy",
                kind: "message",
                T: () => en
            }, {
                no: 9,
                name: "debug",
                kind: "message",
                T: () => er
            }, {
                no: 10,
                name: "game_library",
                kind: "message",
                T: () => ea
            }, {
                no: 11,
                name: "status",
                kind: "message",
                T: () => el
            }, {
                no: 12,
                name: "localization",
                kind: "message",
                T: () => ec
            }, {
                no: 13,
                name: "appearance",
                kind: "message",
                T: () => ef
            }, {
                no: 14,
                name: "guild_folders",
                kind: "message",
                T: () => em
            }, {
                no: 15,
                name: "favorites",
                kind: "message",
                T: () => eR
            }, {
                no: 16,
                name: "audio_context_settings",
                kind: "message",
                T: () => eM
            }, {
                no: 17,
                name: "communities",
                kind: "message",
                T: () => eP
            }, {
                no: 18,
                name: "broadcast",
                kind: "message",
                T: () => eB
            }, {
                no: 19,
                name: "clips",
                kind: "message",
                T: () => eF
            }])
        }
    }
    let M = new v;
    class y extends C.MessageType {
        create(e) {
            let t = {
                currentTab: 0,
                viewedTutorial: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.currentTab = e.int32();
                        break;
                    case 2:
                        r.viewedTutorial = e.bool();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.currentTab && t.tag(1, C.WireType.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && t.tag(2, C.WireType.Varint).bool(e.viewedTutorial);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.InboxSettings", [{
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.InboxTab", i, "INBOX_TAB_"]
            }, {
                no: 2,
                name: "viewed_tutorial",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let P = new y;
    class U extends C.MessageType {
        create(e) {
            let t = {
                guilds: {}
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.guilds, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                s, a;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        s = t.fixed64().toString();
                        break;
                    case 2:
                        a = w.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds")
                }
            }
            e[null != s ? s : "0"] = null != a ? a : w.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.guilds)) t.tag(1, C.WireType.LengthDelimited).fork().tag(1, C.WireType.Bit64).fixed64(i), t.tag(2, C.WireType.LengthDelimited).fork(), w.internalBinaryWrite(e.guilds[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.AllGuildSettings", [{
                no: 1,
                name: "guilds",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => w
                }
            }])
        }
    }
    let b = new U;
    class G extends C.MessageType {
        create(e) {
            let t = {
                channels: {},
                hubProgress: 0,
                guildOnboardingProgress: 0,
                dismissedGuildContent: new Uint8Array(0),
                disableRaidAlertPush: !1,
                disableRaidAlertNag: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        this.binaryReadMap1(r.channels, e, n);
                        break;
                    case 2:
                        r.hubProgress = e.uint32();
                        break;
                    case 3:
                        r.guildOnboardingProgress = e.uint32();
                        break;
                    case 4:
                        r.guildRecentsDismissedAt = L.Timestamp.internalBinaryRead(e, e.uint32(), n, r.guildRecentsDismissedAt);
                        break;
                    case 5:
                        r.dismissedGuildContent = e.bytes();
                        break;
                    case 6:
                        r.joinSound = ew.internalBinaryRead(e, e.uint32(), n, r.joinSound);
                        break;
                    case 7:
                        r.mobileRedesignChannelListSettings = eI.internalBinaryRead(e, e.uint32(), n, r.mobileRedesignChannelListSettings);
                        break;
                    case 8:
                        r.disableRaidAlertPush = e.bool();
                        break;
                    case 9:
                        r.disableRaidAlertNag = e.bool();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                s, a;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        s = t.fixed64().toString();
                        break;
                    case 2:
                        a = F.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels")
                }
            }
            e[null != s ? s : "0"] = null != a ? a : F.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.channels)) t.tag(1, C.WireType.LengthDelimited).fork().tag(1, C.WireType.Bit64).fixed64(i), t.tag(2, C.WireType.LengthDelimited).fork(), F.internalBinaryWrite(e.channels[i], t, n), t.join().join();
            0 !== e.hubProgress && t.tag(2, C.WireType.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && t.tag(3, C.WireType.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && L.Timestamp.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, C.WireType.LengthDelimited).fork(), n).join(), e.dismissedGuildContent.length && t.tag(5, C.WireType.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && ew.internalBinaryWrite(e.joinSound, t.tag(6, C.WireType.LengthDelimited).fork(), n).join(), e.mobileRedesignChannelListSettings && eI.internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, C.WireType.LengthDelimited).fork(), n).join(), !1 !== e.disableRaidAlertPush && t.tag(8, C.WireType.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && t.tag(9, C.WireType.Varint).bool(e.disableRaidAlertNag);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildSettings", [{
                no: 1,
                name: "channels",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => F
                }
            }, {
                no: 2,
                name: "hub_progress",
                kind: "scalar",
                T: 13
            }, {
                no: 3,
                name: "guild_onboarding_progress",
                kind: "scalar",
                T: 13
            }, {
                no: 4,
                name: "guild_recents_dismissed_at",
                kind: "message",
                T: () => L.Timestamp
            }, {
                no: 5,
                name: "dismissed_guild_content",
                kind: "scalar",
                T: 12
            }, {
                no: 6,
                name: "join_sound",
                kind: "message",
                T: () => ew
            }, {
                no: 7,
                name: "mobile_redesign_channel_list_settings",
                kind: "message",
                T: () => eI
            }, {
                no: 8,
                name: "disable_raid_alert_push",
                kind: "scalar",
                T: 8
            }, {
                no: 9,
                name: "disable_raid_alert_nag",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let w = new G;
    class k extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.id = g.UInt64Value.internalBinaryRead(e, e.uint32(), n, r.id);
                        break;
                    case 2:
                        r.name = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.name);
                        break;
                    case 3:
                        r.color = g.UInt64Value.internalBinaryRead(e, e.uint32(), n, r.color);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.id && g.UInt64Value.internalBinaryWrite(e.id, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.name && g.StringValue.internalBinaryWrite(e.name, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.color && g.UInt64Value.internalBinaryWrite(e.color, t.tag(3, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ChannelIconEmoji", [{
                no: 1,
                name: "id",
                kind: "message",
                T: () => g.UInt64Value
            }, {
                no: 2,
                name: "name",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 3,
                name: "color",
                kind: "message",
                T: () => g.UInt64Value
            }])
        }
    }
    let B = new k;
    class V extends C.MessageType {
        create(e) {
            let t = {
                collapsedInInbox: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.collapsedInInbox = e.bool();
                        break;
                    case 2:
                        r.iconEmoji = B.internalBinaryRead(e, e.uint32(), n, r.iconEmoji);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            !1 !== e.collapsedInInbox && t.tag(1, C.WireType.Varint).bool(e.collapsedInInbox), e.iconEmoji && B.internalBinaryWrite(e.iconEmoji, t.tag(2, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ChannelSettings", [{
                no: 1,
                name: "collapsed_in_inbox",
                kind: "scalar",
                T: 8
            }, {
                no: 2,
                name: "icon_emoji",
                kind: "message",
                T: () => B
            }])
        }
    }
    let F = new V;
    class x extends C.MessageType {
        create(e) {
            let t = {
                dismissedContents: new Uint8Array(0)
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.dismissedContents = e.bytes();
                        break;
                    case 2:
                        r.lastDismissedOutboundPromotionStartDate = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.lastDismissedOutboundPromotionStartDate);
                        break;
                    case 3:
                        r.premiumTier0ModalDismissedAt = L.Timestamp.internalBinaryRead(e, e.uint32(), n, r.premiumTier0ModalDismissedAt);
                        break;
                    case 4:
                        r.guildOnboardingUpsellDismissedAt = L.Timestamp.internalBinaryRead(e, e.uint32(), n, r.guildOnboardingUpsellDismissedAt);
                        break;
                    case 5:
                        r.safetyUserSentimentNoticeDismissedAt = L.Timestamp.internalBinaryRead(e, e.uint32(), n, r.safetyUserSentimentNoticeDismissedAt);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.dismissedContents.length && t.tag(1, C.WireType.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && g.StringValue.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.premiumTier0ModalDismissedAt && L.Timestamp.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), e.guildOnboardingUpsellDismissedAt && L.Timestamp.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, t.tag(4, C.WireType.LengthDelimited).fork(), n).join(), e.safetyUserSentimentNoticeDismissedAt && L.Timestamp.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, t.tag(5, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.UserContentSettings", [{
                no: 1,
                name: "dismissed_contents",
                kind: "scalar",
                T: 12
            }, {
                no: 2,
                name: "last_dismissed_outbound_promotion_start_date",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 3,
                name: "premium_tier_0_modal_dismissed_at",
                kind: "message",
                T: () => L.Timestamp
            }, {
                no: 4,
                name: "guild_onboarding_upsell_dismissed_at",
                kind: "message",
                T: () => L.Timestamp
            }, {
                no: 5,
                name: "safety_user_sentiment_notice_dismissed_at",
                kind: "message",
                T: () => L.Timestamp
            }])
        }
    }
    let H = new x;
    class Y extends C.MessageType {
        create(e) {
            let t = {
                id: "0",
                assetHash: ""
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.id = e.fixed64().toString();
                        break;
                    case 2:
                        r.assetHash = e.string();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            "0" !== e.id && t.tag(1, C.WireType.Bit64).fixed64(e.id), "" !== e.assetHash && t.tag(2, C.WireType.LengthDelimited).string(e.assetHash);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.VideoFilterAsset", [{
                no: 1,
                name: "id",
                kind: "scalar",
                T: 6
            }, {
                no: 2,
                name: "asset_hash",
                kind: "scalar",
                T: 9
            }])
        }
    }
    let j = new Y;
    class W extends C.MessageType {
        create(e) {
            let t = {
                useBlur: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) r.useBlur = e.bool();
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            !1 !== e.useBlur && t.tag(1, C.WireType.Varint).bool(e.useBlur);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [{
                no: 1,
                name: "use_blur",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let K = new W;
    class z extends C.MessageType {
        create(e) {
            let t = {
                videoBackgroundFilterDesktop: {
                    oneofKind: void 0
                }
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.videoBackgroundFilterDesktop = {
                            oneofKind: "blur",
                            blur: K.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.blur)
                        };
                        break;
                    case 2:
                        r.videoBackgroundFilterDesktop = {
                            oneofKind: "presetOption",
                            presetOption: e.uint32()
                        };
                        break;
                    case 3:
                        r.videoBackgroundFilterDesktop = {
                            oneofKind: "customAsset",
                            customAsset: j.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.customAsset)
                        };
                        break;
                    case 5:
                        r.alwaysPreviewVideo = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.alwaysPreviewVideo);
                        break;
                    case 6:
                        r.afkTimeout = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.afkTimeout);
                        break;
                    case 7:
                        r.streamNotificationsEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.streamNotificationsEnabled);
                        break;
                    case 8:
                        r.nativePhoneIntegrationEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.nativePhoneIntegrationEnabled);
                        break;
                    case 9:
                        r.soundboardSettings = eb.internalBinaryRead(e, e.uint32(), n, r.soundboardSettings);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            "blur" === e.videoBackgroundFilterDesktop.oneofKind && K.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), "presetOption" === e.videoBackgroundFilterDesktop.oneofKind && t.tag(2, C.WireType.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), "customAsset" === e.videoBackgroundFilterDesktop.oneofKind && j.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), e.alwaysPreviewVideo && g.BoolValue.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, C.WireType.LengthDelimited).fork(), n).join(), e.afkTimeout && g.UInt32Value.internalBinaryWrite(e.afkTimeout, t.tag(6, C.WireType.LengthDelimited).fork(), n).join(), e.streamNotificationsEnabled && g.BoolValue.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, C.WireType.LengthDelimited).fork(), n).join(), e.nativePhoneIntegrationEnabled && g.BoolValue.internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, C.WireType.LengthDelimited).fork(), n).join(), e.soundboardSettings && eb.internalBinaryWrite(e.soundboardSettings, t.tag(9, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [{
                no: 1,
                name: "blur",
                kind: "message",
                oneof: "videoBackgroundFilterDesktop",
                T: () => K
            }, {
                no: 2,
                name: "preset_option",
                kind: "scalar",
                oneof: "videoBackgroundFilterDesktop",
                T: 13
            }, {
                no: 3,
                name: "custom_asset",
                kind: "message",
                oneof: "videoBackgroundFilterDesktop",
                T: () => j
            }, {
                no: 5,
                name: "always_preview_video",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 6,
                name: "afk_timeout",
                kind: "message",
                T: () => g.UInt32Value
            }, {
                no: 7,
                name: "stream_notifications_enabled",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 8,
                name: "native_phone_integration_enabled",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 9,
                name: "soundboard_settings",
                kind: "message",
                T: () => eb
            }])
        }
    }
    let X = new z;
    class Q extends C.MessageType {
        create(e) {
            let t = {
                explicitContentGuilds: 0,
                explicitContentFriendDm: 0,
                explicitContentNonFriendDm: 0
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.explicitContentGuilds = e.int32();
                        break;
                    case 2:
                        r.explicitContentFriendDm = e.int32();
                        break;
                    case 3:
                        r.explicitContentNonFriendDm = e.int32();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.explicitContentGuilds && t.tag(1, C.WireType.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && t.tag(2, C.WireType.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && t.tag(3, C.WireType.Varint).int32(e.explicitContentNonFriendDm);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ExplicitContentSettings", [{
                no: 1,
                name: "explicit_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", l]
            }, {
                no: 2,
                name: "explicit_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", l]
            }, {
                no: 3,
                name: "explicit_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", l]
            }])
        }
    }
    let q = new Q;
    class J extends C.MessageType {
        create(e) {
            let t = {
                emojiPickerCollapsedSections: [],
                stickerPickerCollapsedSections: [],
                soundboardPickerCollapsedSections: [],
                dmSpamFilterV2: 0
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.diversitySurrogate = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.diversitySurrogate);
                        break;
                    case 2:
                        r.useRichChatInput = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.useRichChatInput);
                        break;
                    case 3:
                        r.useThreadSidebar = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.useThreadSidebar);
                        break;
                    case 4:
                        r.renderSpoilers = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.renderSpoilers);
                        break;
                    case 5:
                        r.emojiPickerCollapsedSections.push(e.string());
                        break;
                    case 6:
                        r.stickerPickerCollapsedSections.push(e.string());
                        break;
                    case 7:
                        r.viewImageDescriptions = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.viewImageDescriptions);
                        break;
                    case 8:
                        r.showCommandSuggestions = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.showCommandSuggestions);
                        break;
                    case 9:
                        r.inlineAttachmentMedia = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.inlineAttachmentMedia);
                        break;
                    case 10:
                        r.inlineEmbedMedia = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.inlineEmbedMedia);
                        break;
                    case 11:
                        r.gifAutoPlay = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.gifAutoPlay);
                        break;
                    case 12:
                        r.renderEmbeds = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.renderEmbeds);
                        break;
                    case 13:
                        r.renderReactions = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.renderReactions);
                        break;
                    case 14:
                        r.animateEmoji = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.animateEmoji);
                        break;
                    case 15:
                        r.animateStickers = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.animateStickers);
                        break;
                    case 16:
                        r.enableTtsCommand = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.enableTtsCommand);
                        break;
                    case 17:
                        r.messageDisplayCompact = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.messageDisplayCompact);
                        break;
                    case 19:
                        r.explicitContentFilter = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.explicitContentFilter);
                        break;
                    case 20:
                        r.viewNsfwGuilds = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.viewNsfwGuilds);
                        break;
                    case 21:
                        r.convertEmoticons = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.convertEmoticons);
                        break;
                    case 22:
                        r.expressionSuggestionsEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.expressionSuggestionsEnabled);
                        break;
                    case 23:
                        r.viewNsfwCommands = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.viewNsfwCommands);
                        break;
                    case 24:
                        r.useLegacyChatInput = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.useLegacyChatInput);
                        break;
                    case 25:
                        r.soundboardPickerCollapsedSections.push(e.string());
                        break;
                    case 26:
                        r.dmSpamFilter = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.dmSpamFilter);
                        break;
                    case 27:
                        r.dmSpamFilterV2 = e.int32();
                        break;
                    case 28:
                        r.includeStickersInAutocomplete = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.includeStickersInAutocomplete);
                        break;
                    case 29:
                        r.explicitContentSettings = q.internalBinaryRead(e, e.uint32(), n, r.explicitContentSettings);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.diversitySurrogate && g.StringValue.internalBinaryWrite(e.diversitySurrogate, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.useRichChatInput && g.BoolValue.internalBinaryWrite(e.useRichChatInput, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.useThreadSidebar && g.BoolValue.internalBinaryWrite(e.useThreadSidebar, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), e.renderSpoilers && g.StringValue.internalBinaryWrite(e.renderSpoilers, t.tag(4, C.WireType.LengthDelimited).fork(), n).join();
            for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++) t.tag(5, C.WireType.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
            for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++) t.tag(6, C.WireType.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
            e.viewImageDescriptions && g.BoolValue.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, C.WireType.LengthDelimited).fork(), n).join(), e.showCommandSuggestions && g.BoolValue.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, C.WireType.LengthDelimited).fork(), n).join(), e.inlineAttachmentMedia && g.BoolValue.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, C.WireType.LengthDelimited).fork(), n).join(), e.inlineEmbedMedia && g.BoolValue.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, C.WireType.LengthDelimited).fork(), n).join(), e.gifAutoPlay && g.BoolValue.internalBinaryWrite(e.gifAutoPlay, t.tag(11, C.WireType.LengthDelimited).fork(), n).join(), e.renderEmbeds && g.BoolValue.internalBinaryWrite(e.renderEmbeds, t.tag(12, C.WireType.LengthDelimited).fork(), n).join(), e.renderReactions && g.BoolValue.internalBinaryWrite(e.renderReactions, t.tag(13, C.WireType.LengthDelimited).fork(), n).join(), e.animateEmoji && g.BoolValue.internalBinaryWrite(e.animateEmoji, t.tag(14, C.WireType.LengthDelimited).fork(), n).join(), e.animateStickers && g.UInt32Value.internalBinaryWrite(e.animateStickers, t.tag(15, C.WireType.LengthDelimited).fork(), n).join(), e.enableTtsCommand && g.BoolValue.internalBinaryWrite(e.enableTtsCommand, t.tag(16, C.WireType.LengthDelimited).fork(), n).join(), e.messageDisplayCompact && g.BoolValue.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, C.WireType.LengthDelimited).fork(), n).join(), e.explicitContentFilter && g.UInt32Value.internalBinaryWrite(e.explicitContentFilter, t.tag(19, C.WireType.LengthDelimited).fork(), n).join(), e.viewNsfwGuilds && g.BoolValue.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, C.WireType.LengthDelimited).fork(), n).join(), e.convertEmoticons && g.BoolValue.internalBinaryWrite(e.convertEmoticons, t.tag(21, C.WireType.LengthDelimited).fork(), n).join(), e.expressionSuggestionsEnabled && g.BoolValue.internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, C.WireType.LengthDelimited).fork(), n).join(), e.viewNsfwCommands && g.BoolValue.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, C.WireType.LengthDelimited).fork(), n).join(), e.useLegacyChatInput && g.BoolValue.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, C.WireType.LengthDelimited).fork(), n).join();
            for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++) t.tag(25, C.WireType.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
            e.dmSpamFilter && g.UInt32Value.internalBinaryWrite(e.dmSpamFilter, t.tag(26, C.WireType.LengthDelimited).fork(), n).join(), 0 !== e.dmSpamFilterV2 && t.tag(27, C.WireType.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && g.BoolValue.internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, C.WireType.LengthDelimited).fork(), n).join(), e.explicitContentSettings && q.internalBinaryWrite(e.explicitContentSettings, t.tag(29, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.TextAndImagesSettings", [{
                no: 1,
                name: "diversity_surrogate",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 2,
                name: "use_rich_chat_input",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 3,
                name: "use_thread_sidebar",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 4,
                name: "render_spoilers",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 5,
                name: "emoji_picker_collapsed_sections",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {
                no: 6,
                name: "sticker_picker_collapsed_sections",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {
                no: 7,
                name: "view_image_descriptions",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 8,
                name: "show_command_suggestions",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 9,
                name: "inline_attachment_media",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 10,
                name: "inline_embed_media",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 11,
                name: "gif_auto_play",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 12,
                name: "render_embeds",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 13,
                name: "render_reactions",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 14,
                name: "animate_emoji",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 15,
                name: "animate_stickers",
                kind: "message",
                T: () => g.UInt32Value
            }, {
                no: 16,
                name: "enable_tts_command",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 17,
                name: "message_display_compact",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 19,
                name: "explicit_content_filter",
                kind: "message",
                T: () => g.UInt32Value
            }, {
                no: 20,
                name: "view_nsfw_guilds",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 21,
                name: "convert_emoticons",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 22,
                name: "expression_suggestions_enabled",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 23,
                name: "view_nsfw_commands",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 24,
                name: "use_legacy_chat_input",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 25,
                name: "soundboard_picker_collapsed_sections",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {
                no: 26,
                name: "dm_spam_filter",
                kind: "message",
                T: () => g.UInt32Value
            }, {
                no: 27,
                name: "dm_spam_filter_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", u]
            }, {
                no: 28,
                name: "include_stickers_in_autocomplete",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 29,
                name: "explicit_content_settings",
                kind: "message",
                T: () => q
            }])
        }
    }
    let Z = new J;
    class $ extends C.MessageType {
        create(e) {
            let t = {
                notificationCenterAckedBeforeId: "0",
                focusModeExpiresAtMs: "0"
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.showInAppNotifications = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.showInAppNotifications);
                        break;
                    case 2:
                        r.notifyFriendsOnGoLive = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.notifyFriendsOnGoLive);
                        break;
                    case 3:
                        r.notificationCenterAckedBeforeId = e.fixed64().toString();
                        break;
                    case 4:
                        r.enableBurstReactionNotifications = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.enableBurstReactionNotifications);
                        break;
                    case 5:
                        r.quietMode = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.quietMode);
                        break;
                    case 6:
                        r.focusModeExpiresAtMs = e.fixed64().toString();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.showInAppNotifications && g.BoolValue.internalBinaryWrite(e.showInAppNotifications, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.notifyFriendsOnGoLive && g.BoolValue.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), "0" !== e.notificationCenterAckedBeforeId && t.tag(3, C.WireType.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && g.BoolValue.internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, C.WireType.LengthDelimited).fork(), n).join(), e.quietMode && g.BoolValue.internalBinaryWrite(e.quietMode, t.tag(5, C.WireType.LengthDelimited).fork(), n).join(), "0" !== e.focusModeExpiresAtMs && t.tag(6, C.WireType.Bit64).fixed64(e.focusModeExpiresAtMs);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.NotificationSettings", [{
                no: 1,
                name: "show_in_app_notifications",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 2,
                name: "notify_friends_on_go_live",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 3,
                name: "notification_center_acked_before_id",
                kind: "scalar",
                T: 6
            }, {
                no: 4,
                name: "enable_burst_reaction_notifications",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 5,
                name: "quiet_mode",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 6,
                name: "focus_mode_expires_at_ms",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let ee = new $;
    class et extends C.MessageType {
        create(e) {
            let t = {
                restrictedGuildIds: [],
                defaultGuildsRestricted: !1,
                allowAccessibilityDetection: !1,
                activityRestrictedGuildIds: [],
                defaultGuildsActivityRestricted: 0,
                activityJoiningRestrictedGuildIds: [],
                messageRequestRestrictedGuildIds: []
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.allowActivityPartyPrivacyFriends = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowActivityPartyPrivacyFriends);
                        break;
                    case 2:
                        r.allowActivityPartyPrivacyVoiceChannel = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowActivityPartyPrivacyVoiceChannel);
                        break;
                    case 3:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.restrictedGuildIds.push(e.fixed64().toString());
                        else r.restrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 4:
                        r.defaultGuildsRestricted = e.bool();
                        break;
                    case 7:
                        r.allowAccessibilityDetection = e.bool();
                        break;
                    case 8:
                        r.detectPlatformAccounts = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.detectPlatformAccounts);
                        break;
                    case 9:
                        r.passwordless = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.passwordless);
                        break;
                    case 10:
                        r.contactSyncEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.contactSyncEnabled);
                        break;
                    case 11:
                        r.friendSourceFlags = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.friendSourceFlags);
                        break;
                    case 12:
                        r.friendDiscoveryFlags = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.friendDiscoveryFlags);
                        break;
                    case 13:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.activityRestrictedGuildIds.push(e.fixed64().toString());
                        else r.activityRestrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 14:
                        r.defaultGuildsActivityRestricted = e.int32();
                        break;
                    case 15:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                        else r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 16:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                        else r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 17:
                        r.defaultMessageRequestRestricted = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.defaultMessageRequestRestricted);
                        break;
                    case 18:
                        r.dropsOptedOut = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.dropsOptedOut);
                        break;
                    case 19:
                        r.nonSpamRetrainingOptIn = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.nonSpamRetrainingOptIn);
                        break;
                    case 20:
                        r.familyCenterEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabled);
                        break;
                    case 21:
                        r.familyCenterEnabledV2 = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabledV2);
                        break;
                    case 22:
                        r.hideLegacyUsername = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.hideLegacyUsername);
                        break;
                    case 23:
                        r.inappropriateConversationWarnings = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.inappropriateConversationWarnings);
                        break;
                    case 24:
                        r.recentGamesEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.recentGamesEnabled);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            if (e.allowActivityPartyPrivacyFriends && g.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.allowActivityPartyPrivacyVoiceChannel && g.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.restrictedGuildIds.length) {
                t.tag(3, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
                t.join()
            }
            if (!1 !== e.defaultGuildsRestricted && t.tag(4, C.WireType.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && t.tag(7, C.WireType.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && g.BoolValue.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, C.WireType.LengthDelimited).fork(), n).join(), e.passwordless && g.BoolValue.internalBinaryWrite(e.passwordless, t.tag(9, C.WireType.LengthDelimited).fork(), n).join(), e.contactSyncEnabled && g.BoolValue.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, C.WireType.LengthDelimited).fork(), n).join(), e.friendSourceFlags && g.UInt32Value.internalBinaryWrite(e.friendSourceFlags, t.tag(11, C.WireType.LengthDelimited).fork(), n).join(), e.friendDiscoveryFlags && g.UInt32Value.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, C.WireType.LengthDelimited).fork(), n).join(), e.activityRestrictedGuildIds.length) {
                t.tag(13, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
                t.join()
            }
            if (0 !== e.defaultGuildsActivityRestricted && t.tag(14, C.WireType.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
                t.tag(15, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++) t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
                t.join()
            }
            if (e.messageRequestRestrictedGuildIds.length) {
                t.tag(16, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++) t.fixed64(e.messageRequestRestrictedGuildIds[n]);
                t.join()
            }
            e.defaultMessageRequestRestricted && g.BoolValue.internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, C.WireType.LengthDelimited).fork(), n).join(), e.dropsOptedOut && g.BoolValue.internalBinaryWrite(e.dropsOptedOut, t.tag(18, C.WireType.LengthDelimited).fork(), n).join(), e.nonSpamRetrainingOptIn && g.BoolValue.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, C.WireType.LengthDelimited).fork(), n).join(), e.familyCenterEnabled && g.BoolValue.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, C.WireType.LengthDelimited).fork(), n).join(), e.familyCenterEnabledV2 && g.BoolValue.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, C.WireType.LengthDelimited).fork(), n).join(), e.hideLegacyUsername && g.BoolValue.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, C.WireType.LengthDelimited).fork(), n).join(), e.inappropriateConversationWarnings && g.BoolValue.internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, C.WireType.LengthDelimited).fork(), n).join(), e.recentGamesEnabled && g.BoolValue.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.PrivacySettings", [{
                no: 1,
                name: "allow_activity_party_privacy_friends",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 2,
                name: "allow_activity_party_privacy_voice_channel",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 3,
                name: "restricted_guild_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 4,
                name: "default_guilds_restricted",
                kind: "scalar",
                T: 8
            }, {
                no: 7,
                name: "allow_accessibility_detection",
                kind: "scalar",
                T: 8
            }, {
                no: 8,
                name: "detect_platform_accounts",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 9,
                name: "passwordless",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 10,
                name: "contact_sync_enabled",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 11,
                name: "friend_source_flags",
                kind: "message",
                T: () => g.UInt32Value
            }, {
                no: 12,
                name: "friend_discovery_flags",
                kind: "message",
                T: () => g.UInt32Value
            }, {
                no: 13,
                name: "activity_restricted_guild_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 14,
                name: "default_guilds_activity_restricted",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", d]
            }, {
                no: 15,
                name: "activity_joining_restricted_guild_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 16,
                name: "message_request_restricted_guild_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 17,
                name: "default_message_request_restricted",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 18,
                name: "drops_opted_out",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 19,
                name: "non_spam_retraining_opt_in",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 20,
                name: "family_center_enabled",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 21,
                name: "family_center_enabled_v2",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 22,
                name: "hide_legacy_username",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 23,
                name: "inappropriate_conversation_warnings",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 24,
                name: "recent_games_enabled",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let en = new et;
    class ei extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) r.rtcPanelShowVoiceStates = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.rtcPanelShowVoiceStates);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.rtcPanelShowVoiceStates && g.BoolValue.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.DebugSettings", [{
                no: 1,
                name: "rtc_panel_show_voice_states",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let er = new ei;
    class es extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.installShortcutDesktop = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.installShortcutDesktop);
                        break;
                    case 2:
                        r.installShortcutStartMenu = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.installShortcutStartMenu);
                        break;
                    case 3:
                        r.disableGamesTab = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.disableGamesTab);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.installShortcutDesktop && g.BoolValue.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.installShortcutStartMenu && g.BoolValue.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.disableGamesTab && g.BoolValue.internalBinaryWrite(e.disableGamesTab, t.tag(3, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.GameLibrarySettings", [{
                no: 1,
                name: "install_shortcut_desktop",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 2,
                name: "install_shortcut_start_menu",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 3,
                name: "disable_games_tab",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let ea = new es;
    class eo extends C.MessageType {
        create(e) {
            let t = {
                statusExpiresAtMs: "0"
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.status = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.status);
                        break;
                    case 2:
                        r.customStatus = ed.internalBinaryRead(e, e.uint32(), n, r.customStatus);
                        break;
                    case 3:
                        r.showCurrentGame = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.showCurrentGame);
                        break;
                    case 4:
                        r.statusExpiresAtMs = e.fixed64().toString();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.status && g.StringValue.internalBinaryWrite(e.status, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.customStatus && ed.internalBinaryWrite(e.customStatus, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.showCurrentGame && g.BoolValue.internalBinaryWrite(e.showCurrentGame, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), "0" !== e.statusExpiresAtMs && t.tag(4, C.WireType.Bit64).fixed64(e.statusExpiresAtMs);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.StatusSettings", [{
                no: 1,
                name: "status",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 2,
                name: "custom_status",
                kind: "message",
                T: () => ed
            }, {
                no: 3,
                name: "show_current_game",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 4,
                name: "status_expires_at_ms",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let el = new eo;
    class eu extends C.MessageType {
        create(e) {
            let t = {
                text: "",
                emojiId: "0",
                emojiName: "",
                expiresAtMs: "0"
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.text = e.string();
                        break;
                    case 2:
                        r.emojiId = e.fixed64().toString();
                        break;
                    case 3:
                        r.emojiName = e.string();
                        break;
                    case 4:
                        r.expiresAtMs = e.fixed64().toString();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            "" !== e.text && t.tag(1, C.WireType.LengthDelimited).string(e.text), "0" !== e.emojiId && t.tag(2, C.WireType.Bit64).fixed64(e.emojiId), "" !== e.emojiName && t.tag(3, C.WireType.LengthDelimited).string(e.emojiName), "0" !== e.expiresAtMs && t.tag(4, C.WireType.Bit64).fixed64(e.expiresAtMs);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.CustomStatus", [{
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "emoji_id",
                kind: "scalar",
                T: 6
            }, {
                no: 3,
                name: "emoji_name",
                kind: "scalar",
                T: 9
            }, {
                no: 4,
                name: "expires_at_ms",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let ed = new eu;
    class e_ extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.locale = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.locale);
                        break;
                    case 2:
                        r.timezoneOffset = g.Int32Value.internalBinaryRead(e, e.uint32(), n, r.timezoneOffset);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.locale && g.StringValue.internalBinaryWrite(e.locale, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.timezoneOffset && g.Int32Value.internalBinaryWrite(e.timezoneOffset, t.tag(2, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.LocalizationSettings", [{
                no: 1,
                name: "locale",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 2,
                name: "timezone_offset",
                kind: "message",
                T: () => g.Int32Value
            }])
        }
    }
    let ec = new e_;
    class eE extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.layout = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.layout);
                        break;
                    case 2:
                        r.messagePreviews = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.layout && g.StringValue.internalBinaryWrite(e.layout, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.messagePreviews && g.StringValue.internalBinaryWrite(e.messagePreviews, t.tag(2, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ChannelListSettings", [{
                no: 1,
                name: "layout",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 2,
                name: "message_previews",
                kind: "message",
                T: () => g.StringValue
            }])
        }
    }
    let eI = new eE;
    class eT extends C.MessageType {
        create(e) {
            let t = {
                theme: 0,
                developerMode: !1,
                mobileRedesignDisabled: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.theme = e.int32();
                        break;
                    case 2:
                        r.developerMode = e.bool();
                        break;
                    case 3:
                        r.clientThemeSettings = eA.internalBinaryRead(e, e.uint32(), n, r.clientThemeSettings);
                        break;
                    case 4:
                        r.mobileRedesignDisabled = e.bool();
                        break;
                    case 6:
                        r.channelListLayout = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.channelListLayout);
                        break;
                    case 7:
                        r.messagePreviews = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
                        break;
                    case 8:
                        r.searchResultExactCountEnabled = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.searchResultExactCountEnabled);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.theme && t.tag(1, C.WireType.Varint).int32(e.theme), !1 !== e.developerMode && t.tag(2, C.WireType.Varint).bool(e.developerMode), e.clientThemeSettings && eA.internalBinaryWrite(e.clientThemeSettings, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), !1 !== e.mobileRedesignDisabled && t.tag(4, C.WireType.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && g.StringValue.internalBinaryWrite(e.channelListLayout, t.tag(6, C.WireType.LengthDelimited).fork(), n).join(), e.messagePreviews && g.StringValue.internalBinaryWrite(e.messagePreviews, t.tag(7, C.WireType.LengthDelimited).fork(), n).join(), e.searchResultExactCountEnabled && g.BoolValue.internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.AppearanceSettings", [{
                no: 1,
                name: "theme",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.Theme", _]
            }, {
                no: 2,
                name: "developer_mode",
                kind: "scalar",
                T: 8
            }, {
                no: 3,
                name: "client_theme_settings",
                kind: "message",
                T: () => eA
            }, {
                no: 4,
                name: "mobile_redesign_disabled",
                kind: "scalar",
                T: 8
            }, {
                no: 6,
                name: "channel_list_layout",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 7,
                name: "message_previews",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 8,
                name: "search_result_exact_count_enabled",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let ef = new eT;
    class eS extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (2 === t) r.backgroundGradientPresetId = g.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.backgroundGradientPresetId);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.backgroundGradientPresetId && g.UInt32Value.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ClientThemeSettings", [{
                no: 2,
                name: "background_gradient_preset_id",
                kind: "message",
                T: () => g.UInt32Value
            }])
        }
    }
    let eA = new eS;
    class eh extends C.MessageType {
        create(e) {
            let t = {
                folders: [],
                guildPositions: []
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.folders.push(eO.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 2:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.guildPositions.push(e.fixed64().toString());
                        else r.guildPositions.push(e.fixed64().toString());
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            for (let i = 0; i < e.folders.length; i++) eO.internalBinaryWrite(e.folders[i], t.tag(1, C.WireType.LengthDelimited).fork(), n).join();
            if (e.guildPositions.length) {
                t.tag(2, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildFolders", [{
                no: 1,
                name: "folders",
                kind: "message",
                repeat: 1,
                T: () => eO
            }, {
                no: 2,
                name: "guild_positions",
                kind: "scalar",
                repeat: 1,
                T: 6
            }])
        }
    }
    let em = new eh;
    class eN extends C.MessageType {
        create(e) {
            let t = {
                guildIds: []
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.guildIds.push(e.fixed64().toString());
                        else r.guildIds.push(e.fixed64().toString());
                        break;
                    case 2:
                        r.id = g.Int64Value.internalBinaryRead(e, e.uint32(), n, r.id);
                        break;
                    case 3:
                        r.name = g.StringValue.internalBinaryRead(e, e.uint32(), n, r.name);
                        break;
                    case 4:
                        r.color = g.UInt64Value.internalBinaryRead(e, e.uint32(), n, r.color);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            if (e.guildIds.length) {
                t.tag(1, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
                t.join()
            }
            e.id && g.Int64Value.internalBinaryWrite(e.id, t.tag(2, C.WireType.LengthDelimited).fork(), n).join(), e.name && g.StringValue.internalBinaryWrite(e.name, t.tag(3, C.WireType.LengthDelimited).fork(), n).join(), e.color && g.UInt64Value.internalBinaryWrite(e.color, t.tag(4, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildFolder", [{
                no: 1,
                name: "guild_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 2,
                name: "id",
                kind: "message",
                T: () => g.Int64Value
            }, {
                no: 3,
                name: "name",
                kind: "message",
                T: () => g.StringValue
            }, {
                no: 4,
                name: "color",
                kind: "message",
                T: () => g.UInt64Value
            }])
        }
    }
    let eO = new eN;
    class ep extends C.MessageType {
        create(e) {
            let t = {
                favoriteChannels: {},
                muted: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        this.binaryReadMap1(r.favoriteChannels, e, n);
                        break;
                    case 2:
                        r.muted = e.bool();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                s, a;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        s = t.fixed64().toString();
                        break;
                    case 2:
                        a = eg.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels")
                }
            }
            e[null != s ? s : "0"] = null != a ? a : eg.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.favoriteChannels)) t.tag(1, C.WireType.LengthDelimited).fork().tag(1, C.WireType.Bit64).fixed64(i), t.tag(2, C.WireType.LengthDelimited).fork(), eg.internalBinaryWrite(e.favoriteChannels[i], t, n), t.join().join();
            !1 !== e.muted && t.tag(2, C.WireType.Varint).bool(e.muted);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.Favorites", [{
                no: 1,
                name: "favorite_channels",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => eg
                }
            }, {
                no: 2,
                name: "muted",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let eR = new ep;
    class eC extends C.MessageType {
        create(e) {
            let t = {
                nickname: "",
                type: 0,
                position: 0,
                parentId: "0"
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.nickname = e.string();
                        break;
                    case 2:
                        r.type = e.int32();
                        break;
                    case 3:
                        r.position = e.uint32();
                        break;
                    case 4:
                        r.parentId = e.fixed64().toString();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            "" !== e.nickname && t.tag(1, C.WireType.LengthDelimited).string(e.nickname), 0 !== e.type && t.tag(2, C.WireType.Varint).int32(e.type), 0 !== e.position && t.tag(3, C.WireType.Varint).uint32(e.position), "0" !== e.parentId && t.tag(4, C.WireType.Bit64).fixed64(e.parentId);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteChannel", [{
                no: 1,
                name: "nickname",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", E]
            }, {
                no: 3,
                name: "position",
                kind: "scalar",
                T: 13
            }, {
                no: 4,
                name: "parent_id",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let eg = new eC;
    class eL extends C.MessageType {
        create(e) {
            let t = {
                muted: !1,
                volume: 0,
                modifiedAt: "0",
                soundboardMuted: !1
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.muted = e.bool();
                        break;
                    case 2:
                        r.volume = e.float();
                        break;
                    case 3:
                        r.modifiedAt = e.fixed64().toString();
                        break;
                    case 4:
                        r.soundboardMuted = e.bool();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            !1 !== e.muted && t.tag(1, C.WireType.Varint).bool(e.muted), 0 !== e.volume && t.tag(2, C.WireType.Bit32).float(e.volume), "0" !== e.modifiedAt && t.tag(3, C.WireType.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && t.tag(4, C.WireType.Varint).bool(e.soundboardMuted);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.AudioContextSetting", [{
                no: 1,
                name: "muted",
                kind: "scalar",
                T: 8
            }, {
                no: 2,
                name: "volume",
                kind: "scalar",
                T: 2
            }, {
                no: 3,
                name: "modified_at",
                kind: "scalar",
                T: 6
            }, {
                no: 4,
                name: "soundboard_muted",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let eD = new eL;
    class ev extends C.MessageType {
        create(e) {
            let t = {
                user: {},
                stream: {}
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        this.binaryReadMap1(r.user, e, n);
                        break;
                    case 2:
                        this.binaryReadMap2(r.stream, e, n);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                s, a;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        s = t.fixed64().toString();
                        break;
                    case 2:
                        a = eD.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user")
                }
            }
            e[null != s ? s : "0"] = null != a ? a : eD.create()
        }
        binaryReadMap2(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                s, a;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        s = t.fixed64().toString();
                        break;
                    case 2:
                        a = eD.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream")
                }
            }
            e[null != s ? s : "0"] = null != a ? a : eD.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.user)) t.tag(1, C.WireType.LengthDelimited).fork().tag(1, C.WireType.Bit64).fixed64(i), t.tag(2, C.WireType.LengthDelimited).fork(), eD.internalBinaryWrite(e.user[i], t, n), t.join().join();
            for (let i of Object.keys(e.stream)) t.tag(2, C.WireType.LengthDelimited).fork().tag(1, C.WireType.Bit64).fixed64(i), t.tag(2, C.WireType.LengthDelimited).fork(), eD.internalBinaryWrite(e.stream[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.AudioSettings", [{
                no: 1,
                name: "user",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => eD
                }
            }, {
                no: 2,
                name: "stream",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => eD
                }
            }])
        }
    }
    let eM = new ev;
    class ey extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) r.disableHomeAutoNav = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.disableHomeAutoNav);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.disableHomeAutoNav && g.BoolValue.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.CommunitiesSettings", [{
                no: 1,
                name: "disable_home_auto_nav",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let eP = new ey;
    class eU extends C.MessageType {
        create(e) {
            let t = {
                volume: 0
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) r.volume = e.float();
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.volume && t.tag(1, C.WireType.Bit32).float(e.volume);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.SoundboardSettings", [{
                no: 1,
                name: "volume",
                kind: "scalar",
                T: 2
            }])
        }
    }
    let eb = new eU;
    class eG extends C.MessageType {
        create(e) {
            let t = {
                soundId: "0",
                guildId: "0"
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.soundId = e.fixed64().toString();
                        break;
                    case 2:
                        r.guildId = e.fixed64().toString();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            "0" !== e.soundId && t.tag(1, C.WireType.Bit64).fixed64(e.soundId), "0" !== e.guildId && t.tag(2, C.WireType.Bit64).fixed64(e.guildId);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.CustomCallSound", [{
                no: 1,
                name: "sound_id",
                kind: "scalar",
                T: 6
            }, {
                no: 2,
                name: "guild_id",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let ew = new eG;
    class ek extends C.MessageType {
        create(e) {
            let t = {
                allowedGuildIds: [],
                allowedUserIds: []
            };
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.allowFriends = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowFriends);
                        break;
                    case 2:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.allowedGuildIds.push(e.fixed64().toString());
                        else r.allowedGuildIds.push(e.fixed64().toString());
                        break;
                    case 3:
                        if (i === C.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.allowedUserIds.push(e.fixed64().toString());
                        else r.allowedUserIds.push(e.fixed64().toString());
                        break;
                    case 4:
                        r.autoBroadcast = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.autoBroadcast);
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let a = e.skip(i);
                        !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            if (e.allowFriends && g.BoolValue.internalBinaryWrite(e.allowFriends, t.tag(1, C.WireType.LengthDelimited).fork(), n).join(), e.allowedGuildIds.length) {
                t.tag(2, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
                t.join()
            }
            if (e.allowedUserIds.length) {
                t.tag(3, C.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
                t.join()
            }
            e.autoBroadcast && g.BoolValue.internalBinaryWrite(e.autoBroadcast, t.tag(4, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.BroadcastSettings", [{
                no: 1,
                name: "allow_friends",
                kind: "message",
                T: () => g.BoolValue
            }, {
                no: 2,
                name: "allowed_guild_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 3,
                name: "allowed_user_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }, {
                no: 4,
                name: "auto_broadcast",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let eB = new ek;
    class eV extends C.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, C.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, C.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) r.allowVoiceRecording = g.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowVoiceRecording);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? C.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.allowVoiceRecording && g.BoolValue.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, C.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? C.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ClipsSettings", [{
                no: 1,
                name: "allow_voice_recording",
                kind: "message",
                T: () => g.BoolValue
            }])
        }
    }
    let eF = new eV
}
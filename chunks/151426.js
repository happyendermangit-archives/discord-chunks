function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        InboxTab: function() {
            return t
        },
        GuildOnboardingProgress: function() {
            return n
        },
        DismissibleGuildContent: function() {
            return r
        },
        DismissibleContent: function() {
            return a
        },
        ExplicitContentRedaction: function() {
            return i
        },
        DmSpamFilterV2: function() {
            return I
        },
        GuildActivityStatusRestrictionDefault: function() {
            return s
        },
        Theme: function() {
            return T
        },
        BackgroundGradientPresetId: function() {
            return S
        },
        FavoriteChannelType: function() {
            return N
        },
        PreloadedUserSettings: function() {
            return p
        },
        InboxSettings: function() {
            return y
        },
        AllGuildSettings: function() {
            return f
        },
        GuildSettings: function() {
            return v
        },
        ChannelSettings: function() {
            return Y
        },
        UserContentSettings: function() {
            return k
        },
        VoiceAndVideoSettings: function() {
            return Q
        },
        TextAndImagesSettings: function() {
            return $
        },
        NotificationSettings: function() {
            return ee
        },
        PrivacySettings: function() {
            return eE
        },
        DebugSettings: function() {
            return eo
        },
        GameLibrarySettings: function() {
            return er
        },
        GuildFolder: function() {
            return ec
        },
        FavoriteChannel: function() {
            return eh
        },
        AudioContextSetting: function() {
            return em
        }
    }), E("222007"), E("70102"), E("311790"), E("477657"), E("811875"), E("90301"), E("652153"), E("28797"), E("817884"), E("597349"), E("667536"), E("690341"), E("424973");
    var t, o, n, r, a, i, I, s, T, S, N, O, A, R, l, u, L, C, D, c, d, U, M = E("849266"),
        h = E("750028"),
        P = E("801340"),
        m = E("959714");
    (O = t || (t = {}))[O.UNSPECIFIED = 0] = "UNSPECIFIED", O[O.MENTIONS = 1] = "MENTIONS", O[O.UNREADS = 2] = "UNREADS", O[O.TODOS = 3] = "TODOS", O[O.FOR_YOU = 4] = "FOR_YOU", O[O.GAME_INVITES = 5] = "GAME_INVITES", (A = o || (o = {}))[A.NO_PROGRESS = 0] = "NO_PROGRESS", A[A.JOIN_GUILD = 1] = "JOIN_GUILD", A[A.INVITE_USER = 2] = "INVITE_USER", A[A.CONTACT_SYNC = 4] = "CONTACT_SYNC", (R = n || (n = {}))[R.NO_GUILD_ONBOARDING = 0] = "NO_GUILD_ONBOARDING", R[R.GUILD_NOTICE_SHOWN = 1] = "GUILD_NOTICE_SHOWN", R[R.GUILD_NOTICE_CLEARED = 2] = "GUILD_NOTICE_CLEARED", (l = r || (r = {}))[l.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE = 0] = "DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE", l[l.CLYDE_GUILD_NOTICE_NUX = 1] = "CLYDE_GUILD_NOTICE_NUX", l[l.SUMMARIES_NOTICE = 2] = "SUMMARIES_NOTICE", l[l.SUMMARIES_ENABLED_NOTICE = 3] = "SUMMARIES_ENABLED_NOTICE", (u = a || (a = {}))[u.HUB_WAITLIST_UPSELL = 0] = "HUB_WAITLIST_UPSELL", u[u.APPLICATION_COMMAND_TOOLTIP = 1] = "APPLICATION_COMMAND_TOOLTIP", u[u.HUB_EVENT_HEADER_UPSELL = 2] = "HUB_EVENT_HEADER_UPSELL", u[u.CHANNELINFO_CHANNELBANNER_NOTICE = 3] = "CHANNELINFO_CHANNELBANNER_NOTICE", u[u.ACCOUNT_MULTIACCOUNT_TOOLTIP = 4] = "ACCOUNT_MULTIACCOUNT_TOOLTIP", u[u.SEASONALGIFTING_CHANNELBUTTON_POPUP = 5] = "SEASONALGIFTING_CHANNELBUTTON_POPUP", u[u.CHANNEL_NOTICE_INVITE = 6] = "CHANNEL_NOTICE_INVITE", u[u.CHANNEL_NOTICE_HUBLINK = 7] = "CHANNEL_NOTICE_HUBLINK", u[u.CHANNEL_NOTICE_QUICKSWITCHER = 8] = "CHANNEL_NOTICE_QUICKSWITCHER", u[u.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION = 9] = "CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION", u[u.CHANNEL_NOTICE_GUILD_BANNER = 11] = "CHANNEL_NOTICE_GUILD_BANNER", u[u.GUILD_HEADER_EVENT_UPSELL = 12] = "GUILD_HEADER_EVENT_UPSELL", u[u.GUILD_HEADER_PREMIUM_GUILD_PROGRESS = 14] = "GUILD_HEADER_PREMIUM_GUILD_PROGRESS", u[u.GUILD_HEADER_ANIMATED_GUILD_BANNER = 15] = "GUILD_HEADER_ANIMATED_GUILD_BANNER", u[u.NAGBAR_NOTICE_DOWNLOAD = 16] = "NAGBAR_NOTICE_DOWNLOAD", u[u.NAGBAR_NOTICE_CONNECT_SPOTIFY = 17] = "NAGBAR_NOTICE_CONNECT_SPOTIFY", u[u.NAGBAR_NOTICE_CONNECT_PLAYSTATION = 18] = "NAGBAR_NOTICE_CONNECT_PLAYSTATION", u[u.NAGBAR_NOTICE_MFA_SMS_BACKUP = 19] = "NAGBAR_NOTICE_MFA_SMS_BACKUP", u[u.ACTIVITIES_SUNSET_COACH_MARK = 20] = "ACTIVITIES_SUNSET_COACH_MARK", u[u.NAGBAR_NOTICE_PREMIUM_PROMO = 21] = "NAGBAR_NOTICE_PREMIUM_PROMO", u[u.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING = 22] = "NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING", u[u.NAGBAR_NOTICE_PREMIUM_REACTIVATE = 23] = "NAGBAR_NOTICE_PREMIUM_REACTIVATE", u[u.PREMIUM_5TH_ANNIVERSARY_MODAL = 24] = "PREMIUM_5TH_ANNIVERSARY_MODAL", u[u.GUILD_JOIN_FEEDBACK_MODAL = 25] = "GUILD_JOIN_FEEDBACK_MODAL", u[u.VOICE_QUALITY_BOOSTING_UPSELL_TOOLTIP = 26] = "VOICE_QUALITY_BOOSTING_UPSELL_TOOLTIP", u[u.ACTIVITIES_EARLY_USER_COACH_MARK = 27] = "ACTIVITIES_EARLY_USER_COACH_MARK", u[u.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP = 28] = "GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP", u[u.ACTIVITIES_TUTORIAL_COACH_MARK = 29] = "ACTIVITIES_TUTORIAL_COACH_MARK", u[u.GUILD_HEADER_INVITE_SPLASH = 31] = "GUILD_HEADER_INVITE_SPLASH", u[u.NAGBAR_NOTICE_LOCALIZED_PRICING = 33] = "NAGBAR_NOTICE_LOCALIZED_PRICING", u[u.SOUNDBOARD_EDUCATION = 35] = "SOUNDBOARD_EDUCATION", u[u.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK = 36] = "GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK", u[u.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL = 37] = "GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL", u[u.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK = 38] = "CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK", u[u.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL = 39] = "GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL", u[u.GUILD_INSIGHTS_ACCESS_RATE_NEW = 40] = "GUILD_INSIGHTS_ACCESS_RATE_NEW", u[u.NOW_PLAYING_CONSENT_CARD = 41] = "NOW_PLAYING_CONSENT_CARD", u[u.GUILD_HEADER_BOOSTING_LOW_PRICE_EXPERIMENT_TOOLTIP = 42] = "GUILD_HEADER_BOOSTING_LOW_PRICE_EXPERIMENT_TOOLTIP", u[u.FORUM_CHANNEL_UPSELL_MODAL = 44] = "FORUM_CHANNEL_UPSELL_MODAL", u[u.POGGERMODE_BIRTHDAY_EDUCATION_TOOLTIP = 46] = "POGGERMODE_BIRTHDAY_EDUCATION_TOOLTIP", u[u.MWEB_APP_DOWNLOAD_HALFSHEET = 47] = "MWEB_APP_DOWNLOAD_HALFSHEET", u[u.MWEB_APP_DOWNLOAD_NAGBAR_THEMED = 48] = "MWEB_APP_DOWNLOAD_NAGBAR_THEMED", u[u.MWEB_APP_DOWNLOAD_NAGBAR_BLURPLE = 49] = "MWEB_APP_DOWNLOAD_NAGBAR_BLURPLE", u[u.GUILD_FEED_NUX_CARD = 50] = "GUILD_FEED_NUX_CARD", u[u.GUILD_HEADER_FREE_STICKER_SLOTS_TOOLTIP = 52] = "GUILD_HEADER_FREE_STICKER_SLOTS_TOOLTIP", u[u.ACTIVITIES_NITRO_TUTORIAL_COACH_MARK_V2 = 53] = "ACTIVITIES_NITRO_TUTORIAL_COACH_MARK_V2", u[u.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES = 55] = "ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES", u[u.GUILD_DELETE_FEEDBACK = 56] = "GUILD_DELETE_FEEDBACK", u[u.GUILD_LEAVE_FEEDBACK = 57] = "GUILD_LEAVE_FEEDBACK", u[u.AUTH_SESSIONS_NEW = 63] = "AUTH_SESSIONS_NEW", u[u.DONUT_MOBILE_NUX = 65] = "DONUT_MOBILE_NUX", u[u.GUILD_ROLE_SUBSCRIPTION_MWEB_PURCHASE_UPSELL = 66] = "GUILD_ROLE_SUBSCRIPTION_MWEB_PURCHASE_UPSELL", u[u.FORUM_CHANNEL_HELPER_CARD = 67] = "FORUM_CHANNEL_HELPER_CARD", u[u.PASSPORT_USER_SETTINGS = 70] = "PASSPORT_USER_SETTINGS", u[u.SUMMER_BOGO_ANNOUNCEMENT = 71] = "SUMMER_BOGO_ANNOUNCEMENT", u[u.COMMANDS_MIGRATION_UPSELL_MODAL = 72] = "COMMANDS_MIGRATION_UPSELL_MODAL", u[u.FILE_LIMIT_UPLOAD_COACH_MARK = 73] = "FILE_LIMIT_UPLOAD_COACH_MARK", u[u.DONUT_DESKTOP_NUX = 77] = "DONUT_DESKTOP_NUX", u[u.GUILD_ROLE_SUBSCRIPTION_EMOJI_UPSELL = 79] = "GUILD_ROLE_SUBSCRIPTION_EMOJI_UPSELL", u[u.PREMIUM_SUBSCRIPTION_UPSELL_EMOJI_PICKER_TOP_OF_LIST = 80] = "PREMIUM_SUBSCRIPTION_UPSELL_EMOJI_PICKER_TOP_OF_LIST", u[u.STAGE_RAISED_HAND_MOVED = 81] = "STAGE_RAISED_HAND_MOVED", u[u.XBOX_ONE_WAY_RECONNECT = 82] = "XBOX_ONE_WAY_RECONNECT", u[u.XBOX_VOICE_DESKTOP_SETTINGS_UPSELL_POPOUT = 84] = "XBOX_VOICE_DESKTOP_SETTINGS_UPSELL_POPOUT", u[u.HUB_BACK_TO_SCHOOL_UPSELL = 85] = "HUB_BACK_TO_SCHOOL_UPSELL", u[u.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP = 86] = "STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP", u[u.ACTIVITIES_MOBILE_VOICE_CONTROLS_TOGGLE_NUX = 89] = "ACTIVITIES_MOBILE_VOICE_CONTROLS_TOGGLE_NUX", u[u.PROFILE_THEMES_SETTINGS_VIEWED_V2 = 92] = "PROFILE_THEMES_SETTINGS_VIEWED_V2", u[u.GUILD_HEADER_ACTIVE_THREADS_NOTICE = 93] = "GUILD_HEADER_ACTIVE_THREADS_NOTICE", u[u.CHANNEL_LIST_OPT_IN_NUX = 94] = "CHANNEL_LIST_OPT_IN_NUX", u[u.ACTIVITIES_MOBILE_NUX = 95] = "ACTIVITIES_MOBILE_NUX", u[u.PROFILE_THEMES_NEW_BADGE = 96] = "PROFILE_THEMES_NEW_BADGE", u[u.GUILD_AUTOMOD_DEFAULT_ON_UPSELL = 97] = "GUILD_AUTOMOD_DEFAULT_ON_UPSELL", u[u.CHANNEL_BROWSER_NUX = 98] = "CHANNEL_BROWSER_NUX", u[u.RNA_CHANGELOG_HC_NOTICE = 99] = "RNA_CHANGELOG_HC_NOTICE", u[u.MESSAGE_REQUEST_SETTINGS_COACH_MARK = 100] = "MESSAGE_REQUEST_SETTINGS_COACH_MARK", u[u.GUILD_AUTOMOD_DEFAULT_ON_UPSELL_2 = 101] = "GUILD_AUTOMOD_DEFAULT_ON_UPSELL_2", u[u.GUILD_AUTOMOD_REGEX_UPSELL = 102] = "GUILD_AUTOMOD_REGEX_UPSELL", u[u.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP = 103] = "VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP", u[u.CONNECTIONS_NUX = 108] = "CONNECTIONS_NUX", u[u.XBOX_VOICE_SURVEY_NAGBAR = 110] = "XBOX_VOICE_SURVEY_NAGBAR", u[u.PS_ONE_WAY_RECONNECT = 112] = "PS_ONE_WAY_RECONNECT", u[u.HALLOWEEN_2022_ACTIVITIES_COACH_MARK = 115] = "HALLOWEEN_2022_ACTIVITIES_COACH_MARK", u[u.NITRODUCTION_STEP_PROFILE_CUSTOMIZATION = 116] = "NITRODUCTION_STEP_PROFILE_CUSTOMIZATION", u[u.NITRODUCTION_STEP_BOOSTING = 117] = "NITRODUCTION_STEP_BOOSTING", u[u.NITRODUCTION_STEP_CUSTOM_EMOJI = 118] = "NITRODUCTION_STEP_CUSTOM_EMOJI", u[u.NEW_CRUNCHYROLL_CONNECTION = 119] = "NEW_CRUNCHYROLL_CONNECTION", u[u.APP_DIRECTORY_UPSELL_MODAL = 121] = "APP_DIRECTORY_UPSELL_MODAL", u[u.BASH_OUT_COACH_MARK = 123] = "BASH_OUT_COACH_MARK", u[u.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL = 124] = "GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL", u[u.COMMUNITY_ONBOARDING_NEW_BADGE = 125] = "COMMUNITY_ONBOARDING_NEW_BADGE", u[u.CHURRO_LINK_UPSELL = 126] = "CHURRO_LINK_UPSELL", u[u.VERIFIED_ROLES_COACH_MARK = 127] = "VERIFIED_ROLES_COACH_MARK", u[u.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP = 129] = "PROFILE_THEMES_ACCESSIBILITY_TOOLTIP", u[u.BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL = 130] = "BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL", u[u.USER_SAFETY_SAFE_DIRECT_MESSAGING = 131] = "USER_SAFETY_SAFE_DIRECT_MESSAGING", u[u.GG_ANNOUNCEMENT = 132] = "GG_ANNOUNCEMENT", u[u.CHANNEL_BROWSER_NEW_BADGE_NUX = 133] = "CHANNEL_BROWSER_NEW_BADGE_NUX", u[u.CREATOR_PROMO_PAGE_COACH_MARK = 134] = "CREATOR_PROMO_PAGE_COACH_MARK", u[u.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL = 136] = "CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL", u[u.GUILD_ONBOARDING_UPSELL_MODAL = 137] = "GUILD_ONBOARDING_UPSELL_MODAL", u[u.NAGBAR_NOTICE_ONE_TIME_PAYMENT_PAST_DUE = 138] = "NAGBAR_NOTICE_ONE_TIME_PAYMENT_PAST_DUE", u[u.DROPS_GO_LIVE_BANNER_NOTICE_HALO = 139] = "DROPS_GO_LIVE_BANNER_NOTICE_HALO", u[u.DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP_HALO = 140] = "DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP_HALO", u[u.DROPS_QUEST_COMPLETION_TOOLTIP_HALO = 141] = "DROPS_QUEST_COMPLETION_TOOLTIP_HALO", u[u.SEASONAL_GIFTING_COACHMARK_2022 = 146] = "SEASONAL_GIFTING_COACHMARK_2022", u[u.NAGBAR_BOUNCED_EMAIL_NOTICE = 147] = "NAGBAR_BOUNCED_EMAIL_NOTICE", u[u.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE = 151] = "GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE", u[u.CONSOLE_PTT_DISABLE_ALERT = 152] = "CONSOLE_PTT_DISABLE_ALERT", u[u.ACTIVITIES_MINI_SHELF_SPARKLES = 153] = "ACTIVITIES_MINI_SHELF_SPARKLES", u[u.DROPS_ENDED_INCOMPLETE_HALO = 154] = "DROPS_ENDED_INCOMPLETE_HALO", u[u.GDM_INVITE_REMINDER = 157] = "GDM_INVITE_REMINDER", u[u.USER_SAFETY_CONSUMER_EDUCATION_BLOCK = 161] = "USER_SAFETY_CONSUMER_EDUCATION_BLOCK", u[u.USER_SAFETY_CONSUMER_EDUCATION_MUTE = 162] = "USER_SAFETY_CONSUMER_EDUCATION_MUTE", u[u.LINKED_ROLE_ADMIN_GUILD = 163] = "LINKED_ROLE_ADMIN_GUILD", u[u.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION = 164] = "NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION", u[u.BURST_REACTION_BUTTON_SPARKLE = 165] = "BURST_REACTION_BUTTON_SPARKLE", u[u.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING = 166] = "NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING", u[u.VC_TILE_ACTIVITIES_ENTRY_POINT = 167] = "VC_TILE_ACTIVITIES_ENTRY_POINT", u[u.BURST_REACTION_COACHMARK = 169] = "BURST_REACTION_COACHMARK", u[u.BURST_REACTIONS_REMOVE_MODAL = 170] = "BURST_REACTIONS_REMOVE_MODAL", u[u.BURST_REACTION_NITRO_TOOLTIP = 171] = "BURST_REACTION_NITRO_TOOLTIP", u[u.CLIENT_THEMES_SETTINGS_BADGE = 173] = "CLIENT_THEMES_SETTINGS_BADGE", u[u.CLIENT_THEMES_COACHMARK = 174] = "CLIENT_THEMES_COACHMARK", u[u.CLIENT_THEMES_SPARKLE_PREVIEW = 175] = "CLIENT_THEMES_SPARKLE_PREVIEW", u[u.STAGE_V2_UPSELL = 176] = "STAGE_V2_UPSELL", u[u.QUEST_1_ENROLLMENT_TOOLTIP = 177] = "QUEST_1_ENROLLMENT_TOOLTIP", u[u.QUEST_1_COMPLETION_TOOLTIP = 178] = "QUEST_1_COMPLETION_TOOLTIP", u[u.QUEST_1_GO_LIVE_BANNER = 179] = "QUEST_1_GO_LIVE_BANNER", u[u.QUEST_1_ENDED_INCOMPLETE = 180] = "QUEST_1_ENDED_INCOMPLETE", u[u.PREMIUM_TUTORIAL_EXPERIENCE = 181] = "PREMIUM_TUTORIAL_EXPERIENCE", u[u.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL = 182] = "APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL", u[u.PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP = 183] = "PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP", u[u.PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP = 184] = "PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP", u[u.PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP = 185] = "PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP", u[u.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP = 186] = "PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP", u[u.TABS_V2_ANNOUNCEMENT_SHEET = 188] = "TABS_V2_ANNOUNCEMENT_SHEET", u[u.VOICE_MESSAGE_UPSELL_DM = 189] = "VOICE_MESSAGE_UPSELL_DM", u[u.SUPER_REACTIONS_NITRO_MARKETING = 190] = "SUPER_REACTIONS_NITRO_MARKETING", u[u.NITRO_DROP_2023_04_ANNOUNCEMENT_MODAL = 191] = "NITRO_DROP_2023_04_ANNOUNCEMENT_MODAL", u[u.CLYDE_GUILD_HEADER_NUX = 193] = "CLYDE_GUILD_HEADER_NUX", u[u.CLYDE_CHAT_BAR_NUX = 194] = "CLYDE_CHAT_BAR_NUX", u[u.VOICE_MESSAGE_UPSELL_GUILD = 195] = "VOICE_MESSAGE_UPSELL_GUILD", u[u.ACTIVITY_GDM_CALL_TOOLTIP = 196] = "ACTIVITY_GDM_CALL_TOOLTIP", u[u.ACTIVITY_GDM_ROCKET_SPARKLE = 197] = "ACTIVITY_GDM_ROCKET_SPARKLE", u[u.NITRO_DROP_2023_04_NITRO_TAB_BADGE = 205] = "NITRO_DROP_2023_04_NITRO_TAB_BADGE", u[u.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL = 206] = "GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL", u[u.ACTIVITIES_MOBILE_PIP_FAB_NUX = 208] = "ACTIVITIES_MOBILE_PIP_FAB_NUX", u[u.GUILD_HEADER_SOUNDBOARD_PERMISSION = 209] = "GUILD_HEADER_SOUNDBOARD_PERMISSION", u[u.GUILD_ONBOARDING_UPSELL_HEADER = 210] = "GUILD_ONBOARDING_UPSELL_HEADER", u[u.ACTIVITIES_COACH_MARK_GAME_NIGHT = 211] = "ACTIVITIES_COACH_MARK_GAME_NIGHT", u[u.GUILD_ONBOARDING_UPSELL_NAGBAR = 212] = "GUILD_ONBOARDING_UPSELL_NAGBAR", u[u.GUILD_ONBOARDING_UPSELL_MODAL_V2 = 213] = "GUILD_ONBOARDING_UPSELL_MODAL_V2", u[u.SUPER_REACTIONS_FREE_USER_FIRST_SENT = 214] = "SUPER_REACTIONS_FREE_USER_FIRST_SENT", u[u.SUPER_REACTIONS_TOOLTIP_COACHMARK = 215] = "SUPER_REACTIONS_TOOLTIP_COACHMARK", u[u.SOUNDBOARD_VOLUME_EDUCATION = 216] = "SOUNDBOARD_VOLUME_EDUCATION", u[u.NAGBAR_NOTICE_POMELO = 217] = "NAGBAR_NOTICE_POMELO", u[u.APP_DIRECTORY_GUILD_SETTINGS_NEW_INDICATOR = 218] = "APP_DIRECTORY_GUILD_SETTINGS_NEW_INDICATOR", u[u.APP_DIRECTORY_GUILD_SETTINGS_CONTEXT_MENU_NEW_INDICATOR = 219] = "APP_DIRECTORY_GUILD_SETTINGS_CONTEXT_MENU_NEW_INDICATOR", u[u.SUPER_REACTIONS_TAB_SPARKLE = 220] = "SUPER_REACTIONS_TAB_SPARKLE", u[u.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES = 221] = "ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES", u[u.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES = 222] = "ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES", u[u.MJ_NEW_USER_CHAT_BAR = 223] = "MJ_NEW_USER_CHAT_BAR", u[u.CHANNEL_NOTICE_CLYDE_NUX = 224] = "CHANNEL_NOTICE_CLYDE_NUX", u[u.USER_SAFETY_CONSUMER_EDUCATION_REPORTING = 225] = "USER_SAFETY_CONSUMER_EDUCATION_REPORTING", u[u.SUPER_REACTIONS_FIRST_SENT = 227] = "SUPER_REACTIONS_FIRST_SENT", u[u.COMMUNITY_GUILD_SETTINGS_SAFETY = 228] = "COMMUNITY_GUILD_SETTINGS_SAFETY", u[u.FRIEND_FINDER_FIRST_TIME_BADGE = 229] = "FRIEND_FINDER_FIRST_TIME_BADGE", u[u.SHARE_NITRO_BUTTON_SPARKLES = 230] = "SHARE_NITRO_BUTTON_SPARKLES", u[u.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE = 231] = "PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE", u[u.SOUNDBOARD_KEYBIND_TIP = 232] = "SOUNDBOARD_KEYBIND_TIP", u[u.QUEST_2_ENROLLMENT_TOOLTIP = 234] = "QUEST_2_ENROLLMENT_TOOLTIP", u[u.QUEST_2_COMPLETION_TOOLTIP = 235] = "QUEST_2_COMPLETION_TOOLTIP", u[u.QUEST_2_GO_LIVE_BANNER = 236] = "QUEST_2_GO_LIVE_BANNER", u[u.QUEST_2_ENDED_INCOMPLETE = 237] = "QUEST_2_ENDED_INCOMPLETE", u[u.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES = 238] = "GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES", u[u.MEDIA_CHANNEL_UPSELL = 243] = "MEDIA_CHANNEL_UPSELL", u[u.ADD_FRIENDS_WIDGET = 244] = "ADD_FRIENDS_WIDGET", u[u.YOU_TAB_AVATAR_ONBOARDING = 245] = "YOU_TAB_AVATAR_ONBOARDING", u[u.YOU_TAB_ABOUT_ME_ONBOARDING = 246] = "YOU_TAB_ABOUT_ME_ONBOARDING", u[u.GUILD_HEADER_SUMMARIES_UPSELL = 247] = "GUILD_HEADER_SUMMARIES_UPSELL", u[u.SUPER_REACTIONS_COACHMARK_MOBILE = 250] = "SUPER_REACTIONS_COACHMARK_MOBILE", u[u.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE = 251] = "SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE", u[u.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL = 252] = "SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL", u[u.EMOJI_PICKER_FAVORITE_EMOJIS_TIP = 253] = "EMOJI_PICKER_FAVORITE_EMOJIS_TIP", u[u.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE = 254] = "SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE", u[u.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS = 255] = "SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS", u[u.FAMILY_CENTER_NEW_BADGE = 256] = "FAMILY_CENTER_NEW_BADGE", u[u.CONSOLE_LOCAL_DETECT_CTA = 257] = "CONSOLE_LOCAL_DETECT_CTA", u[u.REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE = 263] = "REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE", u[u.GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE = 264] = "GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE", u[u.REMIXING_ENTRYPOINT_OPEN_MEDIA_KEYBOARD_UPSELL_MOBILE = 265] = "REMIXING_ENTRYPOINT_OPEN_MEDIA_KEYBOARD_UPSELL_MOBILE", u[u.GUILD_MEMBER_SAFETY_BANNER_NOTICE = 266] = "GUILD_MEMBER_SAFETY_BANNER_NOTICE", u[u.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL = 270] = "SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL", u[u.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK = 271] = "INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK", u[u.CUSTOM_CALL_SOUNDS_PICKER_UPSELL = 272] = "CUSTOM_CALL_SOUNDS_PICKER_UPSELL", u[u.CUSTOM_CALL_SOUNDS_SPARKLES = 274] = "CUSTOM_CALL_SOUNDS_SPARKLES", u[u.SOUNDBOARD_MOBILE_FLOATING_CTA = 275] = "SOUNDBOARD_MOBILE_FLOATING_CTA", u[u.SOUNDBOARD_MOBILE_NEW_BADGE = 276] = "SOUNDBOARD_MOBILE_NEW_BADGE", u[u.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 = 277] = "PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2", u[u.VOICE_PANEL_BAD_CONNECTION_CTA = 278] = "VOICE_PANEL_BAD_CONNECTION_CTA", u[u.PREMIUM_TRIAL_OFFER_MOBILE_ACTION_SHEET = 279] = "PREMIUM_TRIAL_OFFER_MOBILE_ACTION_SHEET", u[u.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE = 280] = "MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE", u[u.CLIPS_ONBOARDING_GO_LIVE_COACHMARK = 281] = "CLIPS_ONBOARDING_GO_LIVE_COACHMARK", u[u.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK = 282] = "CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK", u[u.CUSTOM_APP_ICONS_COACHMARK = 283] = "CUSTOM_APP_ICONS_COACHMARK", u[u.CUSTOM_APP_ICONS_NEW_BADGE = 284] = "CUSTOM_APP_ICONS_NEW_BADGE", u[u.BROADCASTING_BROADCASTER_TOOLTIP = 285] = "BROADCASTING_BROADCASTER_TOOLTIP", u[u.BROADCASTING_VIEWER_TOOLTIP = 286] = "BROADCASTING_VIEWER_TOOLTIP", u[u.SERVER_SHOP_UPSELL = 288] = "SERVER_SHOP_UPSELL", u[u.LAUNCH_PAD_PULL_TAB_NUX = 289] = "LAUNCH_PAD_PULL_TAB_NUX", u[u.CLIPS_SETTINGS_BETA_TAG = 290] = "CLIPS_SETTINGS_BETA_TAG", u[u.WHATS_NEW_AVATAR_DECOS_FLIP = 292] = "WHATS_NEW_AVATAR_DECOS_FLIP", u[u.WHATS_NEW_PROFILE_EFFECTS_FLIP = 293] = "WHATS_NEW_PROFILE_EFFECTS_FLIP", u[u.MEMBERS_LAUNCH_UPSELL = 294] = "MEMBERS_LAUNCH_UPSELL", u[u.SERVER_SHOP_PHANTOM_PREVIEW = 295] = "SERVER_SHOP_PHANTOM_PREVIEW", u[u.RECURRING_CONTACT_SYNC_PROMPT = 297] = "RECURRING_CONTACT_SYNC_PROMPT", u[u.INVENTORY_TRY_PACKS_MODAL = 302] = "INVENTORY_TRY_PACKS_MODAL", u[u.DEPRECATE_WIN32_MESSAGE = 305] = "DEPRECATE_WIN32_MESSAGE", u[u.DEKSTOP_CUSTOM_APP_ICON_COACHMARK = 306] = "DEKSTOP_CUSTOM_APP_ICON_COACHMARK", u[u.DEKSTOP_CUSTOM_APP_ICON_BADGE = 307] = "DEKSTOP_CUSTOM_APP_ICON_BADGE", u[u.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE = 309] = "WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE", u[u.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE = 310] = "WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE", u[u.CLYDE_AI_PERSONALITIES_NUX_MODAL = 312] = "CLYDE_AI_PERSONALITIES_NUX_MODAL", u[u.NUX_GUILD_CHANNEL_EXPLAINER = 313] = "NUX_GUILD_CHANNEL_EXPLAINER", u[u.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP = 316] = "SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP", u[u.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE = 317] = "SUPER_REACTION_TOGGLE_EDUCATION_MOBILE", u[u.SEEN_LAUNCH_WELCOME_OR_REDESIGN = 325] = "SEEN_LAUNCH_WELCOME_OR_REDESIGN", u[u.SEEN_OLD_DESIGN = 326] = "SEEN_OLD_DESIGN", u[u.SEASONAL_GIFTING_COACHMARK_2023 = 328] = "SEASONAL_GIFTING_COACHMARK_2023", u[u.SHOP_FOR_ALL_USER_POPOUT_UPSELL = 329] = "SHOP_FOR_ALL_USER_POPOUT_UPSELL", u[u.COLLECTIBLES_GIFTING_COACHMARK = 334] = "COLLECTIBLES_GIFTING_COACHMARK", u[u.SEEN_LAUNCH_WELCOME = 335] = "SEEN_LAUNCH_WELCOME", u[u.FAVORITE_SERVER_ADD_TO_FAVORITES_COACHMARK = 336] = "FAVORITE_SERVER_ADD_TO_FAVORITES_COACHMARK", u[u.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK = 337] = "INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK", u[u.FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS = 338] = "FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS", u[u.OVERLAY_KEYBIND_NOTIFICATION = 340] = "OVERLAY_KEYBIND_NOTIFICATION", u[u.CHANNEL_LIST_V2_BROWSE_CHANNELS_NUX = 343] = "CHANNEL_LIST_V2_BROWSE_CHANNELS_NUX", u[u.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE = 344] = "COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE", u[u.UU_MIGRATION_NOTICE = 345] = "UU_MIGRATION_NOTICE", u[u.HANG_STATUS_NEW_BADGE = 346] = "HANG_STATUS_NEW_BADGE", u[u.VOICE_CALL_BG_PICKER_TOOLTIP = 347] = "VOICE_CALL_BG_PICKER_TOOLTIP", u[u.VOICE_CALL_BG_PICKER_NEW_BADGE = 348] = "VOICE_CALL_BG_PICKER_NEW_BADGE", u[u.SWIPE_TO_REPLY_COACHMARK = 349] = "SWIPE_TO_REPLY_COACHMARK", u[u.MOBILE_ACCESSIBILITY_COLOR_SETTINGS = 350] = "MOBILE_ACCESSIBILITY_COLOR_SETTINGS", u[u.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP = 351] = "COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP", u[u.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP = 352] = "COLLECTIBLES_SHOP_ELEMENTS_COACHTIP", u[u.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP = 353] = "COLLECTIBLES_SHOP_ANIME_V2_COACHTIP", u[u.POLLS_CHAT_INPUT_COACHMARK = 354] = "POLLS_CHAT_INPUT_COACHMARK", u[u.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK = 355] = "PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK", u[u.ACTIVITIES_OMNIBUTTON_NUX = 356] = "ACTIVITIES_OMNIBUTTON_NUX", u[u.ACTIVITIES_OMNIMENU_NEW_BADGE = 357] = "ACTIVITIES_OMNIMENU_NEW_BADGE", (L = i || (i = {}))[L.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = "UNSET_EXPLICIT_CONTENT_REDACTION", L[L.SHOW = 1] = "SHOW", L[L.BLUR = 2] = "BLUR", L[L.BLOCK = 3] = "BLOCK", (C = I || (I = {}))[C.DEFAULT_UNSET = 0] = "DEFAULT_UNSET", C[C.DISABLED = 1] = "DISABLED", C[C.NON_FRIENDS = 2] = "NON_FRIENDS", C[C.FRIENDS_AND_NON_FRIENDS = 3] = "FRIENDS_AND_NON_FRIENDS", (D = s || (s = {}))[D.OFF = 0] = "OFF", D[D.ON_FOR_LARGE_GUILDS = 1] = "ON_FOR_LARGE_GUILDS", (c = T || (T = {}))[c.UNSET = 0] = "UNSET", c[c.DARK = 1] = "DARK", c[c.LIGHT = 2] = "LIGHT", (d = S || (S = {}))[d.MINT_APPLE = 0] = "MINT_APPLE", d[d.CITRUS_SHERBERT = 1] = "CITRUS_SHERBERT", d[d.RETRO_RAINCLOUD = 2] = "RETRO_RAINCLOUD", d[d.HANAMI = 3] = "HANAMI", d[d.SUNRISE = 4] = "SUNRISE", d[d.COTTON_CANDY = 5] = "COTTON_CANDY", d[d.LOFI_VIBES = 6] = "LOFI_VIBES", d[d.DESERT_KHAKI = 7] = "DESERT_KHAKI", d[d.SUNSET = 8] = "SUNSET", d[d.CHROMA_GLOW = 9] = "CHROMA_GLOW", d[d.FOREST = 10] = "FOREST", d[d.CRIMSON_MOON = 11] = "CRIMSON_MOON", d[d.MIDNIGHT_BLURPLE = 12] = "MIDNIGHT_BLURPLE", d[d.MARS = 13] = "MARS", d[d.DUSK = 14] = "DUSK", d[d.UNDER_THE_SEA = 15] = "UNDER_THE_SEA", d[d.EASTER_EGG = 16] = "EASTER_EGG", d[d.RETRO_STORM = 17] = "RETRO_STORM", d[d.NEON_NIGHTS = 18] = "NEON_NIGHTS", d[d.SEPIA = 19] = "SEPIA", d[d.STRAWBERRY_LEMONADE = 20] = "STRAWBERRY_LEMONADE", d[d.AURORA = 21] = "AURORA", (U = N || (N = {}))[U.UNSET_FAVORITE_CHANNEL_TYPE = 0] = "UNSET_FAVORITE_CHANNEL_TYPE", U[U.REFERENCE_ORIGINAL = 1] = "REFERENCE_ORIGINAL", U[U.CATEGORY = 2] = "CATEGORY";
    class G extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.versions = m.Versions.internalBinaryRead(e, e.uint32(), E, o.versions);
                        break;
                    case 2:
                        o.inbox = y.internalBinaryRead(e, e.uint32(), E, o.inbox);
                        break;
                    case 3:
                        o.guilds = f.internalBinaryRead(e, e.uint32(), E, o.guilds);
                        break;
                    case 4:
                        o.userContent = k.internalBinaryRead(e, e.uint32(), E, o.userContent);
                        break;
                    case 5:
                        o.voiceAndVideo = Q.internalBinaryRead(e, e.uint32(), E, o.voiceAndVideo);
                        break;
                    case 6:
                        o.textAndImages = $.internalBinaryRead(e, e.uint32(), E, o.textAndImages);
                        break;
                    case 7:
                        o.notifications = ee.internalBinaryRead(e, e.uint32(), E, o.notifications);
                        break;
                    case 8:
                        o.privacy = eE.internalBinaryRead(e, e.uint32(), E, o.privacy);
                        break;
                    case 9:
                        o.debug = eo.internalBinaryRead(e, e.uint32(), E, o.debug);
                        break;
                    case 10:
                        o.gameLibrary = er.internalBinaryRead(e, e.uint32(), E, o.gameLibrary);
                        break;
                    case 11:
                        o.status = ei.internalBinaryRead(e, e.uint32(), E, o.status);
                        break;
                    case 12:
                        o.localization = eS.internalBinaryRead(e, e.uint32(), E, o.localization);
                        break;
                    case 13:
                        o.appearance = eR.internalBinaryRead(e, e.uint32(), E, o.appearance);
                        break;
                    case 14:
                        o.guildFolders = eC.internalBinaryRead(e, e.uint32(), E, o.guildFolders);
                        break;
                    case 15:
                        o.favorites = eU.internalBinaryRead(e, e.uint32(), E, o.favorites);
                        break;
                    case 16:
                        o.audioContextSettings = ep.internalBinaryRead(e, e.uint32(), E, o.audioContextSettings);
                        break;
                    case 17:
                        o.communities = ey.internalBinaryRead(e, e.uint32(), E, o.communities);
                        break;
                    case 18:
                        o.broadcast = ew.internalBinaryRead(e, e.uint32(), E, o.broadcast);
                        break;
                    case 19:
                        o.clips = eY.internalBinaryRead(e, e.uint32(), E, o.clips);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.versions && m.Versions.internalBinaryWrite(e.versions, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.inbox && y.internalBinaryWrite(e.inbox, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.guilds && f.internalBinaryWrite(e.guilds, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), e.userContent && k.internalBinaryWrite(e.userContent, _.tag(4, M.WireType.LengthDelimited).fork(), E).join(), e.voiceAndVideo && Q.internalBinaryWrite(e.voiceAndVideo, _.tag(5, M.WireType.LengthDelimited).fork(), E).join(), e.textAndImages && $.internalBinaryWrite(e.textAndImages, _.tag(6, M.WireType.LengthDelimited).fork(), E).join(), e.notifications && ee.internalBinaryWrite(e.notifications, _.tag(7, M.WireType.LengthDelimited).fork(), E).join(), e.privacy && eE.internalBinaryWrite(e.privacy, _.tag(8, M.WireType.LengthDelimited).fork(), E).join(), e.debug && eo.internalBinaryWrite(e.debug, _.tag(9, M.WireType.LengthDelimited).fork(), E).join(), e.gameLibrary && er.internalBinaryWrite(e.gameLibrary, _.tag(10, M.WireType.LengthDelimited).fork(), E).join(), e.status && ei.internalBinaryWrite(e.status, _.tag(11, M.WireType.LengthDelimited).fork(), E).join(), e.localization && eS.internalBinaryWrite(e.localization, _.tag(12, M.WireType.LengthDelimited).fork(), E).join(), e.appearance && eR.internalBinaryWrite(e.appearance, _.tag(13, M.WireType.LengthDelimited).fork(), E).join(), e.guildFolders && eC.internalBinaryWrite(e.guildFolders, _.tag(14, M.WireType.LengthDelimited).fork(), E).join(), e.favorites && eU.internalBinaryWrite(e.favorites, _.tag(15, M.WireType.LengthDelimited).fork(), E).join(), e.audioContextSettings && ep.internalBinaryWrite(e.audioContextSettings, _.tag(16, M.WireType.LengthDelimited).fork(), E).join(), e.communities && ey.internalBinaryWrite(e.communities, _.tag(17, M.WireType.LengthDelimited).fork(), E).join(), e.broadcast && ew.internalBinaryWrite(e.broadcast, _.tag(18, M.WireType.LengthDelimited).fork(), E).join(), e.clips && eY.internalBinaryWrite(e.clips, _.tag(19, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.PreloadedUserSettings", [{
                no: 1,
                name: "versions",
                kind: "message",
                T: () => m.Versions
            }, {
                no: 2,
                name: "inbox",
                kind: "message",
                T: () => y
            }, {
                no: 3,
                name: "guilds",
                kind: "message",
                T: () => f
            }, {
                no: 4,
                name: "user_content",
                kind: "message",
                T: () => k
            }, {
                no: 5,
                name: "voice_and_video",
                kind: "message",
                T: () => Q
            }, {
                no: 6,
                name: "text_and_images",
                kind: "message",
                T: () => $
            }, {
                no: 7,
                name: "notifications",
                kind: "message",
                T: () => ee
            }, {
                no: 8,
                name: "privacy",
                kind: "message",
                T: () => eE
            }, {
                no: 9,
                name: "debug",
                kind: "message",
                T: () => eo
            }, {
                no: 10,
                name: "game_library",
                kind: "message",
                T: () => er
            }, {
                no: 11,
                name: "status",
                kind: "message",
                T: () => ei
            }, {
                no: 12,
                name: "localization",
                kind: "message",
                T: () => eS
            }, {
                no: 13,
                name: "appearance",
                kind: "message",
                T: () => eR
            }, {
                no: 14,
                name: "guild_folders",
                kind: "message",
                T: () => eC
            }, {
                no: 15,
                name: "favorites",
                kind: "message",
                T: () => eU
            }, {
                no: 16,
                name: "audio_context_settings",
                kind: "message",
                T: () => ep
            }, {
                no: 17,
                name: "communities",
                kind: "message",
                T: () => ey
            }, {
                no: 18,
                name: "broadcast",
                kind: "message",
                T: () => ew
            }, {
                no: 19,
                name: "clips",
                kind: "message",
                T: () => eY
            }])
        }
    }
    let p = new G;
    class g extends M.MessageType {
        create(e) {
            let _ = {
                currentTab: 0,
                viewedTutorial: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.currentTab = e.int32();
                        break;
                    case 2:
                        o.viewedTutorial = e.bool();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.currentTab && _.tag(1, M.WireType.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && _.tag(2, M.WireType.Varint).bool(e.viewedTutorial);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.InboxSettings", [{
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.InboxTab", t, "INBOX_TAB_"]
            }, {
                no: 2,
                name: "viewed_tutorial",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let y = new g;
    class B extends M.MessageType {
        create(e) {
            let _ = {
                guilds: {}
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.guilds, e, E);
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = v.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : v.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.guilds)) _.tag(1, M.WireType.LengthDelimited).fork().tag(1, M.WireType.Bit64).fixed64(t), _.tag(2, M.WireType.LengthDelimited).fork(), v.internalBinaryWrite(e.guilds[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.AllGuildSettings", [{
                no: 1,
                name: "guilds",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => v
                }
            }])
        }
    }
    let f = new B;
    class H extends M.MessageType {
        create(e) {
            let _ = {
                channels: {},
                hubProgress: 0,
                guildOnboardingProgress: 0,
                dismissedGuildContent: new Uint8Array(0),
                disableRaidAlertPush: !1,
                disableRaidAlertNag: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        this.binaryReadMap1(o.channels, e, E);
                        break;
                    case 2:
                        o.hubProgress = e.uint32();
                        break;
                    case 3:
                        o.guildOnboardingProgress = e.uint32();
                        break;
                    case 4:
                        o.guildRecentsDismissedAt = P.Timestamp.internalBinaryRead(e, e.uint32(), E, o.guildRecentsDismissedAt);
                        break;
                    case 5:
                        o.dismissedGuildContent = e.bytes();
                        break;
                    case 6:
                        o.joinSound = ev.internalBinaryRead(e, e.uint32(), E, o.joinSound);
                        break;
                    case 7:
                        o.mobileRedesignChannelListSettings = eO.internalBinaryRead(e, e.uint32(), E, o.mobileRedesignChannelListSettings);
                        break;
                    case 8:
                        o.disableRaidAlertPush = e.bool();
                        break;
                    case 9:
                        o.disableRaidAlertNag = e.bool();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = Y.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : Y.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.channels)) _.tag(1, M.WireType.LengthDelimited).fork().tag(1, M.WireType.Bit64).fixed64(t), _.tag(2, M.WireType.LengthDelimited).fork(), Y.internalBinaryWrite(e.channels[t], _, E), _.join().join();
            0 !== e.hubProgress && _.tag(2, M.WireType.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && _.tag(3, M.WireType.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && P.Timestamp.internalBinaryWrite(e.guildRecentsDismissedAt, _.tag(4, M.WireType.LengthDelimited).fork(), E).join(), e.dismissedGuildContent.length && _.tag(5, M.WireType.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && ev.internalBinaryWrite(e.joinSound, _.tag(6, M.WireType.LengthDelimited).fork(), E).join(), e.mobileRedesignChannelListSettings && eO.internalBinaryWrite(e.mobileRedesignChannelListSettings, _.tag(7, M.WireType.LengthDelimited).fork(), E).join(), !1 !== e.disableRaidAlertPush && _.tag(8, M.WireType.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && _.tag(9, M.WireType.Varint).bool(e.disableRaidAlertNag);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildSettings", [{
                no: 1,
                name: "channels",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => Y
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
                T: () => P.Timestamp
            }, {
                no: 5,
                name: "dismissed_guild_content",
                kind: "scalar",
                T: 12
            }, {
                no: 6,
                name: "join_sound",
                kind: "message",
                T: () => ev
            }, {
                no: 7,
                name: "mobile_redesign_channel_list_settings",
                kind: "message",
                T: () => eO
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
    let v = new H;
    class b extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.id = h.UInt64Value.internalBinaryRead(e, e.uint32(), E, o.id);
                        break;
                    case 2:
                        o.name = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.name);
                        break;
                    case 3:
                        o.color = h.UInt64Value.internalBinaryRead(e, e.uint32(), E, o.color);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.id && h.UInt64Value.internalBinaryWrite(e.id, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.name && h.StringValue.internalBinaryWrite(e.name, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.color && h.UInt64Value.internalBinaryWrite(e.color, _.tag(3, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ChannelIconEmoji", [{
                no: 1,
                name: "id",
                kind: "message",
                T: () => h.UInt64Value
            }, {
                no: 2,
                name: "name",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 3,
                name: "color",
                kind: "message",
                T: () => h.UInt64Value
            }])
        }
    }
    let w = new b;
    class F extends M.MessageType {
        create(e) {
            let _ = {
                collapsedInInbox: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.collapsedInInbox = e.bool();
                        break;
                    case 2:
                        o.iconEmoji = w.internalBinaryRead(e, e.uint32(), E, o.iconEmoji);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            !1 !== e.collapsedInInbox && _.tag(1, M.WireType.Varint).bool(e.collapsedInInbox), e.iconEmoji && w.internalBinaryWrite(e.iconEmoji, _.tag(2, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
                T: () => w
            }])
        }
    }
    let Y = new F;
    class V extends M.MessageType {
        create(e) {
            let _ = {
                dismissedContents: new Uint8Array(0)
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.dismissedContents = e.bytes();
                        break;
                    case 2:
                        o.lastDismissedOutboundPromotionStartDate = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.lastDismissedOutboundPromotionStartDate);
                        break;
                    case 3:
                        o.premiumTier0ModalDismissedAt = P.Timestamp.internalBinaryRead(e, e.uint32(), E, o.premiumTier0ModalDismissedAt);
                        break;
                    case 4:
                        o.guildOnboardingUpsellDismissedAt = P.Timestamp.internalBinaryRead(e, e.uint32(), E, o.guildOnboardingUpsellDismissedAt);
                        break;
                    case 5:
                        o.safetyUserSentimentNoticeDismissedAt = P.Timestamp.internalBinaryRead(e, e.uint32(), E, o.safetyUserSentimentNoticeDismissedAt);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.dismissedContents.length && _.tag(1, M.WireType.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && h.StringValue.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.premiumTier0ModalDismissedAt && P.Timestamp.internalBinaryWrite(e.premiumTier0ModalDismissedAt, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), e.guildOnboardingUpsellDismissedAt && P.Timestamp.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, _.tag(4, M.WireType.LengthDelimited).fork(), E).join(), e.safetyUserSentimentNoticeDismissedAt && P.Timestamp.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, _.tag(5, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
                T: () => h.StringValue
            }, {
                no: 3,
                name: "premium_tier_0_modal_dismissed_at",
                kind: "message",
                T: () => P.Timestamp
            }, {
                no: 4,
                name: "guild_onboarding_upsell_dismissed_at",
                kind: "message",
                T: () => P.Timestamp
            }, {
                no: 5,
                name: "safety_user_sentiment_notice_dismissed_at",
                kind: "message",
                T: () => P.Timestamp
            }])
        }
    }
    let k = new V;
    class W extends M.MessageType {
        create(e) {
            let _ = {
                id: "0",
                assetHash: ""
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.id = e.fixed64().toString();
                        break;
                    case 2:
                        o.assetHash = e.string();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            "0" !== e.id && _.tag(1, M.WireType.Bit64).fixed64(e.id), "" !== e.assetHash && _.tag(2, M.WireType.LengthDelimited).string(e.assetHash);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let K = new W;
    class x extends M.MessageType {
        create(e) {
            let _ = {
                useBlur: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (1 === _) o.useBlur = e.bool();
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            !1 !== e.useBlur && _.tag(1, M.WireType.Varint).bool(e.useBlur);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let j = new x;
    class X extends M.MessageType {
        create(e) {
            let _ = {
                videoBackgroundFilterDesktop: {
                    oneofKind: void 0
                }
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.videoBackgroundFilterDesktop = {
                            oneofKind: "blur",
                            blur: j.internalBinaryRead(e, e.uint32(), E, o.videoBackgroundFilterDesktop.blur)
                        };
                        break;
                    case 2:
                        o.videoBackgroundFilterDesktop = {
                            oneofKind: "presetOption",
                            presetOption: e.uint32()
                        };
                        break;
                    case 3:
                        o.videoBackgroundFilterDesktop = {
                            oneofKind: "customAsset",
                            customAsset: K.internalBinaryRead(e, e.uint32(), E, o.videoBackgroundFilterDesktop.customAsset)
                        };
                        break;
                    case 5:
                        o.alwaysPreviewVideo = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.alwaysPreviewVideo);
                        break;
                    case 6:
                        o.afkTimeout = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.afkTimeout);
                        break;
                    case 7:
                        o.streamNotificationsEnabled = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.streamNotificationsEnabled);
                        break;
                    case 8:
                        o.nativePhoneIntegrationEnabled = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.nativePhoneIntegrationEnabled);
                        break;
                    case 9:
                        o.soundboardSettings = ef.internalBinaryRead(e, e.uint32(), E, o.soundboardSettings);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            "blur" === e.videoBackgroundFilterDesktop.oneofKind && j.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), "presetOption" === e.videoBackgroundFilterDesktop.oneofKind && _.tag(2, M.WireType.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), "customAsset" === e.videoBackgroundFilterDesktop.oneofKind && K.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), e.alwaysPreviewVideo && h.BoolValue.internalBinaryWrite(e.alwaysPreviewVideo, _.tag(5, M.WireType.LengthDelimited).fork(), E).join(), e.afkTimeout && h.UInt32Value.internalBinaryWrite(e.afkTimeout, _.tag(6, M.WireType.LengthDelimited).fork(), E).join(), e.streamNotificationsEnabled && h.BoolValue.internalBinaryWrite(e.streamNotificationsEnabled, _.tag(7, M.WireType.LengthDelimited).fork(), E).join(), e.nativePhoneIntegrationEnabled && h.BoolValue.internalBinaryWrite(e.nativePhoneIntegrationEnabled, _.tag(8, M.WireType.LengthDelimited).fork(), E).join(), e.soundboardSettings && ef.internalBinaryWrite(e.soundboardSettings, _.tag(9, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [{
                no: 1,
                name: "blur",
                kind: "message",
                oneof: "videoBackgroundFilterDesktop",
                T: () => j
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
                T: () => K
            }, {
                no: 5,
                name: "always_preview_video",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 6,
                name: "afk_timeout",
                kind: "message",
                T: () => h.UInt32Value
            }, {
                no: 7,
                name: "stream_notifications_enabled",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 8,
                name: "native_phone_integration_enabled",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 9,
                name: "soundboard_settings",
                kind: "message",
                T: () => ef
            }])
        }
    }
    let Q = new X;
    class J extends M.MessageType {
        create(e) {
            let _ = {
                explicitContentGuilds: 0,
                explicitContentFriendDm: 0,
                explicitContentNonFriendDm: 0
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.explicitContentGuilds = e.int32();
                        break;
                    case 2:
                        o.explicitContentFriendDm = e.int32();
                        break;
                    case 3:
                        o.explicitContentNonFriendDm = e.int32();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.explicitContentGuilds && _.tag(1, M.WireType.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && _.tag(2, M.WireType.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && _.tag(3, M.WireType.Varint).int32(e.explicitContentNonFriendDm);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ExplicitContentSettings", [{
                no: 1,
                name: "explicit_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", i]
            }, {
                no: 2,
                name: "explicit_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", i]
            }, {
                no: 3,
                name: "explicit_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", i]
            }])
        }
    }
    let q = new J;
    class z extends M.MessageType {
        create(e) {
            let _ = {
                emojiPickerCollapsedSections: [],
                stickerPickerCollapsedSections: [],
                soundboardPickerCollapsedSections: [],
                dmSpamFilterV2: 0
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.diversitySurrogate = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.diversitySurrogate);
                        break;
                    case 2:
                        o.useRichChatInput = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.useRichChatInput);
                        break;
                    case 3:
                        o.useThreadSidebar = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.useThreadSidebar);
                        break;
                    case 4:
                        o.renderSpoilers = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.renderSpoilers);
                        break;
                    case 5:
                        o.emojiPickerCollapsedSections.push(e.string());
                        break;
                    case 6:
                        o.stickerPickerCollapsedSections.push(e.string());
                        break;
                    case 7:
                        o.viewImageDescriptions = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.viewImageDescriptions);
                        break;
                    case 8:
                        o.showCommandSuggestions = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.showCommandSuggestions);
                        break;
                    case 9:
                        o.inlineAttachmentMedia = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.inlineAttachmentMedia);
                        break;
                    case 10:
                        o.inlineEmbedMedia = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.inlineEmbedMedia);
                        break;
                    case 11:
                        o.gifAutoPlay = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.gifAutoPlay);
                        break;
                    case 12:
                        o.renderEmbeds = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.renderEmbeds);
                        break;
                    case 13:
                        o.renderReactions = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.renderReactions);
                        break;
                    case 14:
                        o.animateEmoji = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.animateEmoji);
                        break;
                    case 15:
                        o.animateStickers = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.animateStickers);
                        break;
                    case 16:
                        o.enableTtsCommand = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.enableTtsCommand);
                        break;
                    case 17:
                        o.messageDisplayCompact = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.messageDisplayCompact);
                        break;
                    case 19:
                        o.explicitContentFilter = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.explicitContentFilter);
                        break;
                    case 20:
                        o.viewNsfwGuilds = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.viewNsfwGuilds);
                        break;
                    case 21:
                        o.convertEmoticons = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.convertEmoticons);
                        break;
                    case 22:
                        o.expressionSuggestionsEnabled = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.expressionSuggestionsEnabled);
                        break;
                    case 23:
                        o.viewNsfwCommands = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.viewNsfwCommands);
                        break;
                    case 24:
                        o.useLegacyChatInput = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.useLegacyChatInput);
                        break;
                    case 25:
                        o.soundboardPickerCollapsedSections.push(e.string());
                        break;
                    case 26:
                        o.dmSpamFilter = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.dmSpamFilter);
                        break;
                    case 27:
                        o.dmSpamFilterV2 = e.int32();
                        break;
                    case 28:
                        o.includeStickersInAutocomplete = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.includeStickersInAutocomplete);
                        break;
                    case 29:
                        o.explicitContentSettings = q.internalBinaryRead(e, e.uint32(), E, o.explicitContentSettings);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.diversitySurrogate && h.StringValue.internalBinaryWrite(e.diversitySurrogate, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.useRichChatInput && h.BoolValue.internalBinaryWrite(e.useRichChatInput, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.useThreadSidebar && h.BoolValue.internalBinaryWrite(e.useThreadSidebar, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), e.renderSpoilers && h.StringValue.internalBinaryWrite(e.renderSpoilers, _.tag(4, M.WireType.LengthDelimited).fork(), E).join();
            for (let E = 0; E < e.emojiPickerCollapsedSections.length; E++) _.tag(5, M.WireType.LengthDelimited).string(e.emojiPickerCollapsedSections[E]);
            for (let E = 0; E < e.stickerPickerCollapsedSections.length; E++) _.tag(6, M.WireType.LengthDelimited).string(e.stickerPickerCollapsedSections[E]);
            e.viewImageDescriptions && h.BoolValue.internalBinaryWrite(e.viewImageDescriptions, _.tag(7, M.WireType.LengthDelimited).fork(), E).join(), e.showCommandSuggestions && h.BoolValue.internalBinaryWrite(e.showCommandSuggestions, _.tag(8, M.WireType.LengthDelimited).fork(), E).join(), e.inlineAttachmentMedia && h.BoolValue.internalBinaryWrite(e.inlineAttachmentMedia, _.tag(9, M.WireType.LengthDelimited).fork(), E).join(), e.inlineEmbedMedia && h.BoolValue.internalBinaryWrite(e.inlineEmbedMedia, _.tag(10, M.WireType.LengthDelimited).fork(), E).join(), e.gifAutoPlay && h.BoolValue.internalBinaryWrite(e.gifAutoPlay, _.tag(11, M.WireType.LengthDelimited).fork(), E).join(), e.renderEmbeds && h.BoolValue.internalBinaryWrite(e.renderEmbeds, _.tag(12, M.WireType.LengthDelimited).fork(), E).join(), e.renderReactions && h.BoolValue.internalBinaryWrite(e.renderReactions, _.tag(13, M.WireType.LengthDelimited).fork(), E).join(), e.animateEmoji && h.BoolValue.internalBinaryWrite(e.animateEmoji, _.tag(14, M.WireType.LengthDelimited).fork(), E).join(), e.animateStickers && h.UInt32Value.internalBinaryWrite(e.animateStickers, _.tag(15, M.WireType.LengthDelimited).fork(), E).join(), e.enableTtsCommand && h.BoolValue.internalBinaryWrite(e.enableTtsCommand, _.tag(16, M.WireType.LengthDelimited).fork(), E).join(), e.messageDisplayCompact && h.BoolValue.internalBinaryWrite(e.messageDisplayCompact, _.tag(17, M.WireType.LengthDelimited).fork(), E).join(), e.explicitContentFilter && h.UInt32Value.internalBinaryWrite(e.explicitContentFilter, _.tag(19, M.WireType.LengthDelimited).fork(), E).join(), e.viewNsfwGuilds && h.BoolValue.internalBinaryWrite(e.viewNsfwGuilds, _.tag(20, M.WireType.LengthDelimited).fork(), E).join(), e.convertEmoticons && h.BoolValue.internalBinaryWrite(e.convertEmoticons, _.tag(21, M.WireType.LengthDelimited).fork(), E).join(), e.expressionSuggestionsEnabled && h.BoolValue.internalBinaryWrite(e.expressionSuggestionsEnabled, _.tag(22, M.WireType.LengthDelimited).fork(), E).join(), e.viewNsfwCommands && h.BoolValue.internalBinaryWrite(e.viewNsfwCommands, _.tag(23, M.WireType.LengthDelimited).fork(), E).join(), e.useLegacyChatInput && h.BoolValue.internalBinaryWrite(e.useLegacyChatInput, _.tag(24, M.WireType.LengthDelimited).fork(), E).join();
            for (let E = 0; E < e.soundboardPickerCollapsedSections.length; E++) _.tag(25, M.WireType.LengthDelimited).string(e.soundboardPickerCollapsedSections[E]);
            e.dmSpamFilter && h.UInt32Value.internalBinaryWrite(e.dmSpamFilter, _.tag(26, M.WireType.LengthDelimited).fork(), E).join(), 0 !== e.dmSpamFilterV2 && _.tag(27, M.WireType.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && h.BoolValue.internalBinaryWrite(e.includeStickersInAutocomplete, _.tag(28, M.WireType.LengthDelimited).fork(), E).join(), e.explicitContentSettings && q.internalBinaryWrite(e.explicitContentSettings, _.tag(29, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.TextAndImagesSettings", [{
                no: 1,
                name: "diversity_surrogate",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 2,
                name: "use_rich_chat_input",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 3,
                name: "use_thread_sidebar",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 4,
                name: "render_spoilers",
                kind: "message",
                T: () => h.StringValue
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
                T: () => h.BoolValue
            }, {
                no: 8,
                name: "show_command_suggestions",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 9,
                name: "inline_attachment_media",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 10,
                name: "inline_embed_media",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 11,
                name: "gif_auto_play",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 12,
                name: "render_embeds",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 13,
                name: "render_reactions",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 14,
                name: "animate_emoji",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 15,
                name: "animate_stickers",
                kind: "message",
                T: () => h.UInt32Value
            }, {
                no: 16,
                name: "enable_tts_command",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 17,
                name: "message_display_compact",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 19,
                name: "explicit_content_filter",
                kind: "message",
                T: () => h.UInt32Value
            }, {
                no: 20,
                name: "view_nsfw_guilds",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 21,
                name: "convert_emoticons",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 22,
                name: "expression_suggestions_enabled",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 23,
                name: "view_nsfw_commands",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 24,
                name: "use_legacy_chat_input",
                kind: "message",
                T: () => h.BoolValue
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
                T: () => h.UInt32Value
            }, {
                no: 27,
                name: "dm_spam_filter_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", I]
            }, {
                no: 28,
                name: "include_stickers_in_autocomplete",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 29,
                name: "explicit_content_settings",
                kind: "message",
                T: () => q
            }])
        }
    }
    let $ = new z;
    class Z extends M.MessageType {
        create(e) {
            let _ = {
                notificationCenterAckedBeforeId: "0",
                focusModeExpiresAtMs: "0"
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.showInAppNotifications = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.showInAppNotifications);
                        break;
                    case 2:
                        o.notifyFriendsOnGoLive = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.notifyFriendsOnGoLive);
                        break;
                    case 3:
                        o.notificationCenterAckedBeforeId = e.fixed64().toString();
                        break;
                    case 4:
                        o.enableBurstReactionNotifications = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.enableBurstReactionNotifications);
                        break;
                    case 5:
                        o.quietMode = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.quietMode);
                        break;
                    case 6:
                        o.focusModeExpiresAtMs = e.fixed64().toString();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.showInAppNotifications && h.BoolValue.internalBinaryWrite(e.showInAppNotifications, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.notifyFriendsOnGoLive && h.BoolValue.internalBinaryWrite(e.notifyFriendsOnGoLive, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), "0" !== e.notificationCenterAckedBeforeId && _.tag(3, M.WireType.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && h.BoolValue.internalBinaryWrite(e.enableBurstReactionNotifications, _.tag(4, M.WireType.LengthDelimited).fork(), E).join(), e.quietMode && h.BoolValue.internalBinaryWrite(e.quietMode, _.tag(5, M.WireType.LengthDelimited).fork(), E).join(), "0" !== e.focusModeExpiresAtMs && _.tag(6, M.WireType.Bit64).fixed64(e.focusModeExpiresAtMs);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.NotificationSettings", [{
                no: 1,
                name: "show_in_app_notifications",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 2,
                name: "notify_friends_on_go_live",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 3,
                name: "notification_center_acked_before_id",
                kind: "scalar",
                T: 6
            }, {
                no: 4,
                name: "enable_burst_reaction_notifications",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 5,
                name: "quiet_mode",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 6,
                name: "focus_mode_expires_at_ms",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let ee = new Z;
    class e_ extends M.MessageType {
        create(e) {
            let _ = {
                restrictedGuildIds: [],
                defaultGuildsRestricted: !1,
                allowAccessibilityDetection: !1,
                activityRestrictedGuildIds: [],
                defaultGuildsActivityRestricted: 0,
                activityJoiningRestrictedGuildIds: [],
                messageRequestRestrictedGuildIds: []
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.allowActivityPartyPrivacyFriends = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.allowActivityPartyPrivacyFriends);
                        break;
                    case 2:
                        o.allowActivityPartyPrivacyVoiceChannel = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.allowActivityPartyPrivacyVoiceChannel);
                        break;
                    case 3:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.restrictedGuildIds.push(e.fixed64().toString());
                        else o.restrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 4:
                        o.defaultGuildsRestricted = e.bool();
                        break;
                    case 7:
                        o.allowAccessibilityDetection = e.bool();
                        break;
                    case 8:
                        o.detectPlatformAccounts = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.detectPlatformAccounts);
                        break;
                    case 9:
                        o.passwordless = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.passwordless);
                        break;
                    case 10:
                        o.contactSyncEnabled = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.contactSyncEnabled);
                        break;
                    case 11:
                        o.friendSourceFlags = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.friendSourceFlags);
                        break;
                    case 12:
                        o.friendDiscoveryFlags = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.friendDiscoveryFlags);
                        break;
                    case 13:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.activityRestrictedGuildIds.push(e.fixed64().toString());
                        else o.activityRestrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 14:
                        o.defaultGuildsActivityRestricted = e.int32();
                        break;
                    case 15:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                        else o.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 16:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                        else o.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                        break;
                    case 17:
                        o.defaultMessageRequestRestricted = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.defaultMessageRequestRestricted);
                        break;
                    case 18:
                        o.dropsOptedOut = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.dropsOptedOut);
                        break;
                    case 19:
                        o.nonSpamRetrainingOptIn = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.nonSpamRetrainingOptIn);
                        break;
                    case 20:
                        o.familyCenterEnabled = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.familyCenterEnabled);
                        break;
                    case 21:
                        o.familyCenterEnabledV2 = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.familyCenterEnabledV2);
                        break;
                    case 22:
                        o.hideLegacyUsername = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.hideLegacyUsername);
                        break;
                    case 23:
                        o.inappropriateConversationWarnings = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.inappropriateConversationWarnings);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            if (e.allowActivityPartyPrivacyFriends && h.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.allowActivityPartyPrivacyVoiceChannel && h.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.restrictedGuildIds.length) {
                _.tag(3, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.restrictedGuildIds.length; E++) _.fixed64(e.restrictedGuildIds[E]);
                _.join()
            }
            if (!1 !== e.defaultGuildsRestricted && _.tag(4, M.WireType.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && _.tag(7, M.WireType.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && h.BoolValue.internalBinaryWrite(e.detectPlatformAccounts, _.tag(8, M.WireType.LengthDelimited).fork(), E).join(), e.passwordless && h.BoolValue.internalBinaryWrite(e.passwordless, _.tag(9, M.WireType.LengthDelimited).fork(), E).join(), e.contactSyncEnabled && h.BoolValue.internalBinaryWrite(e.contactSyncEnabled, _.tag(10, M.WireType.LengthDelimited).fork(), E).join(), e.friendSourceFlags && h.UInt32Value.internalBinaryWrite(e.friendSourceFlags, _.tag(11, M.WireType.LengthDelimited).fork(), E).join(), e.friendDiscoveryFlags && h.UInt32Value.internalBinaryWrite(e.friendDiscoveryFlags, _.tag(12, M.WireType.LengthDelimited).fork(), E).join(), e.activityRestrictedGuildIds.length) {
                _.tag(13, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.activityRestrictedGuildIds.length; E++) _.fixed64(e.activityRestrictedGuildIds[E]);
                _.join()
            }
            if (0 !== e.defaultGuildsActivityRestricted && _.tag(14, M.WireType.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
                _.tag(15, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.activityJoiningRestrictedGuildIds.length; E++) _.fixed64(e.activityJoiningRestrictedGuildIds[E]);
                _.join()
            }
            if (e.messageRequestRestrictedGuildIds.length) {
                _.tag(16, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.messageRequestRestrictedGuildIds.length; E++) _.fixed64(e.messageRequestRestrictedGuildIds[E]);
                _.join()
            }
            e.defaultMessageRequestRestricted && h.BoolValue.internalBinaryWrite(e.defaultMessageRequestRestricted, _.tag(17, M.WireType.LengthDelimited).fork(), E).join(), e.dropsOptedOut && h.BoolValue.internalBinaryWrite(e.dropsOptedOut, _.tag(18, M.WireType.LengthDelimited).fork(), E).join(), e.nonSpamRetrainingOptIn && h.BoolValue.internalBinaryWrite(e.nonSpamRetrainingOptIn, _.tag(19, M.WireType.LengthDelimited).fork(), E).join(), e.familyCenterEnabled && h.BoolValue.internalBinaryWrite(e.familyCenterEnabled, _.tag(20, M.WireType.LengthDelimited).fork(), E).join(), e.familyCenterEnabledV2 && h.BoolValue.internalBinaryWrite(e.familyCenterEnabledV2, _.tag(21, M.WireType.LengthDelimited).fork(), E).join(), e.hideLegacyUsername && h.BoolValue.internalBinaryWrite(e.hideLegacyUsername, _.tag(22, M.WireType.LengthDelimited).fork(), E).join(), e.inappropriateConversationWarnings && h.BoolValue.internalBinaryWrite(e.inappropriateConversationWarnings, _.tag(23, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.PrivacySettings", [{
                no: 1,
                name: "allow_activity_party_privacy_friends",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 2,
                name: "allow_activity_party_privacy_voice_channel",
                kind: "message",
                T: () => h.BoolValue
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
                T: () => h.BoolValue
            }, {
                no: 9,
                name: "passwordless",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 10,
                name: "contact_sync_enabled",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 11,
                name: "friend_source_flags",
                kind: "message",
                T: () => h.UInt32Value
            }, {
                no: 12,
                name: "friend_discovery_flags",
                kind: "message",
                T: () => h.UInt32Value
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
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", s]
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
                T: () => h.BoolValue
            }, {
                no: 18,
                name: "drops_opted_out",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 19,
                name: "non_spam_retraining_opt_in",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 20,
                name: "family_center_enabled",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 21,
                name: "family_center_enabled_v2",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 22,
                name: "hide_legacy_username",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 23,
                name: "inappropriate_conversation_warnings",
                kind: "message",
                T: () => h.BoolValue
            }])
        }
    }
    let eE = new e_;
    class et extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (1 === _) o.rtcPanelShowVoiceStates = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.rtcPanelShowVoiceStates);
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.rtcPanelShowVoiceStates && h.BoolValue.internalBinaryWrite(e.rtcPanelShowVoiceStates, _.tag(1, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.DebugSettings", [{
                no: 1,
                name: "rtc_panel_show_voice_states",
                kind: "message",
                T: () => h.BoolValue
            }])
        }
    }
    let eo = new et;
    class en extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.installShortcutDesktop = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.installShortcutDesktop);
                        break;
                    case 2:
                        o.installShortcutStartMenu = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.installShortcutStartMenu);
                        break;
                    case 3:
                        o.disableGamesTab = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.disableGamesTab);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.installShortcutDesktop && h.BoolValue.internalBinaryWrite(e.installShortcutDesktop, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.installShortcutStartMenu && h.BoolValue.internalBinaryWrite(e.installShortcutStartMenu, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.disableGamesTab && h.BoolValue.internalBinaryWrite(e.disableGamesTab, _.tag(3, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.GameLibrarySettings", [{
                no: 1,
                name: "install_shortcut_desktop",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 2,
                name: "install_shortcut_start_menu",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 3,
                name: "disable_games_tab",
                kind: "message",
                T: () => h.BoolValue
            }])
        }
    }
    let er = new en;
    class ea extends M.MessageType {
        create(e) {
            let _ = {
                statusExpiresAtMs: "0"
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.status = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.status);
                        break;
                    case 2:
                        o.customStatus = es.internalBinaryRead(e, e.uint32(), E, o.customStatus);
                        break;
                    case 3:
                        o.showCurrentGame = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.showCurrentGame);
                        break;
                    case 4:
                        o.statusExpiresAtMs = e.fixed64().toString();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.status && h.StringValue.internalBinaryWrite(e.status, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.customStatus && es.internalBinaryWrite(e.customStatus, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.showCurrentGame && h.BoolValue.internalBinaryWrite(e.showCurrentGame, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), "0" !== e.statusExpiresAtMs && _.tag(4, M.WireType.Bit64).fixed64(e.statusExpiresAtMs);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.StatusSettings", [{
                no: 1,
                name: "status",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 2,
                name: "custom_status",
                kind: "message",
                T: () => es
            }, {
                no: 3,
                name: "show_current_game",
                kind: "message",
                T: () => h.BoolValue
            }, {
                no: 4,
                name: "status_expires_at_ms",
                kind: "scalar",
                T: 6
            }])
        }
    }
    let ei = new ea;
    class eI extends M.MessageType {
        create(e) {
            let _ = {
                text: "",
                emojiId: "0",
                emojiName: "",
                expiresAtMs: "0"
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.text = e.string();
                        break;
                    case 2:
                        o.emojiId = e.fixed64().toString();
                        break;
                    case 3:
                        o.emojiName = e.string();
                        break;
                    case 4:
                        o.expiresAtMs = e.fixed64().toString();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            "" !== e.text && _.tag(1, M.WireType.LengthDelimited).string(e.text), "0" !== e.emojiId && _.tag(2, M.WireType.Bit64).fixed64(e.emojiId), "" !== e.emojiName && _.tag(3, M.WireType.LengthDelimited).string(e.emojiName), "0" !== e.expiresAtMs && _.tag(4, M.WireType.Bit64).fixed64(e.expiresAtMs);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let es = new eI;
    class eT extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.locale = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.locale);
                        break;
                    case 2:
                        o.timezoneOffset = h.Int32Value.internalBinaryRead(e, e.uint32(), E, o.timezoneOffset);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.locale && h.StringValue.internalBinaryWrite(e.locale, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.timezoneOffset && h.Int32Value.internalBinaryWrite(e.timezoneOffset, _.tag(2, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.LocalizationSettings", [{
                no: 1,
                name: "locale",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 2,
                name: "timezone_offset",
                kind: "message",
                T: () => h.Int32Value
            }])
        }
    }
    let eS = new eT;
    class eN extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.layout = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.layout);
                        break;
                    case 2:
                        o.messagePreviews = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.messagePreviews);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.layout && h.StringValue.internalBinaryWrite(e.layout, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.messagePreviews && h.StringValue.internalBinaryWrite(e.messagePreviews, _.tag(2, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ChannelListSettings", [{
                no: 1,
                name: "layout",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 2,
                name: "message_previews",
                kind: "message",
                T: () => h.StringValue
            }])
        }
    }
    let eO = new eN;
    class eA extends M.MessageType {
        create(e) {
            let _ = {
                theme: 0,
                developerMode: !1,
                mobileRedesignDisabled: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.theme = e.int32();
                        break;
                    case 2:
                        o.developerMode = e.bool();
                        break;
                    case 3:
                        o.clientThemeSettings = eu.internalBinaryRead(e, e.uint32(), E, o.clientThemeSettings);
                        break;
                    case 4:
                        o.mobileRedesignDisabled = e.bool();
                        break;
                    case 6:
                        o.channelListLayout = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.channelListLayout);
                        break;
                    case 7:
                        o.messagePreviews = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.messagePreviews);
                        break;
                    case 8:
                        o.searchResultExactCountEnabled = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.searchResultExactCountEnabled);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.theme && _.tag(1, M.WireType.Varint).int32(e.theme), !1 !== e.developerMode && _.tag(2, M.WireType.Varint).bool(e.developerMode), e.clientThemeSettings && eu.internalBinaryWrite(e.clientThemeSettings, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), !1 !== e.mobileRedesignDisabled && _.tag(4, M.WireType.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && h.StringValue.internalBinaryWrite(e.channelListLayout, _.tag(6, M.WireType.LengthDelimited).fork(), E).join(), e.messagePreviews && h.StringValue.internalBinaryWrite(e.messagePreviews, _.tag(7, M.WireType.LengthDelimited).fork(), E).join(), e.searchResultExactCountEnabled && h.BoolValue.internalBinaryWrite(e.searchResultExactCountEnabled, _.tag(8, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.AppearanceSettings", [{
                no: 1,
                name: "theme",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.Theme", T]
            }, {
                no: 2,
                name: "developer_mode",
                kind: "scalar",
                T: 8
            }, {
                no: 3,
                name: "client_theme_settings",
                kind: "message",
                T: () => eu
            }, {
                no: 4,
                name: "mobile_redesign_disabled",
                kind: "scalar",
                T: 8
            }, {
                no: 6,
                name: "channel_list_layout",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 7,
                name: "message_previews",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 8,
                name: "search_result_exact_count_enabled",
                kind: "message",
                T: () => h.BoolValue
            }])
        }
    }
    let eR = new eA;
    class el extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (2 === _) o.backgroundGradientPresetId = h.UInt32Value.internalBinaryRead(e, e.uint32(), E, o.backgroundGradientPresetId);
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.backgroundGradientPresetId && h.UInt32Value.internalBinaryWrite(e.backgroundGradientPresetId, _.tag(2, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ClientThemeSettings", [{
                no: 2,
                name: "background_gradient_preset_id",
                kind: "message",
                T: () => h.UInt32Value
            }])
        }
    }
    let eu = new el;
    class eL extends M.MessageType {
        create(e) {
            let _ = {
                folders: [],
                guildPositions: []
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.folders.push(ec.internalBinaryRead(e, e.uint32(), E));
                        break;
                    case 2:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.guildPositions.push(e.fixed64().toString());
                        else o.guildPositions.push(e.fixed64().toString());
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            for (let t = 0; t < e.folders.length; t++) ec.internalBinaryWrite(e.folders[t], _.tag(1, M.WireType.LengthDelimited).fork(), E).join();
            if (e.guildPositions.length) {
                _.tag(2, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.guildPositions.length; E++) _.fixed64(e.guildPositions[E]);
                _.join()
            }
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildFolders", [{
                no: 1,
                name: "folders",
                kind: "message",
                repeat: 1,
                T: () => ec
            }, {
                no: 2,
                name: "guild_positions",
                kind: "scalar",
                repeat: 1,
                T: 6
            }])
        }
    }
    let eC = new eL;
    class eD extends M.MessageType {
        create(e) {
            let _ = {
                guildIds: []
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.guildIds.push(e.fixed64().toString());
                        else o.guildIds.push(e.fixed64().toString());
                        break;
                    case 2:
                        o.id = h.Int64Value.internalBinaryRead(e, e.uint32(), E, o.id);
                        break;
                    case 3:
                        o.name = h.StringValue.internalBinaryRead(e, e.uint32(), E, o.name);
                        break;
                    case 4:
                        o.color = h.UInt64Value.internalBinaryRead(e, e.uint32(), E, o.color);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            if (e.guildIds.length) {
                _.tag(1, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.guildIds.length; E++) _.fixed64(e.guildIds[E]);
                _.join()
            }
            e.id && h.Int64Value.internalBinaryWrite(e.id, _.tag(2, M.WireType.LengthDelimited).fork(), E).join(), e.name && h.StringValue.internalBinaryWrite(e.name, _.tag(3, M.WireType.LengthDelimited).fork(), E).join(), e.color && h.UInt64Value.internalBinaryWrite(e.color, _.tag(4, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
                T: () => h.Int64Value
            }, {
                no: 3,
                name: "name",
                kind: "message",
                T: () => h.StringValue
            }, {
                no: 4,
                name: "color",
                kind: "message",
                T: () => h.UInt64Value
            }])
        }
    }
    let ec = new eD;
    class ed extends M.MessageType {
        create(e) {
            let _ = {
                favoriteChannels: {},
                muted: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        this.binaryReadMap1(o.favoriteChannels, e, E);
                        break;
                    case 2:
                        o.muted = e.bool();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = eh.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : eh.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.favoriteChannels)) _.tag(1, M.WireType.LengthDelimited).fork().tag(1, M.WireType.Bit64).fixed64(t), _.tag(2, M.WireType.LengthDelimited).fork(), eh.internalBinaryWrite(e.favoriteChannels[t], _, E), _.join().join();
            !1 !== e.muted && _.tag(2, M.WireType.Varint).bool(e.muted);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.Favorites", [{
                no: 1,
                name: "favorite_channels",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => eh
                }
            }, {
                no: 2,
                name: "muted",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let eU = new ed;
    class eM extends M.MessageType {
        create(e) {
            let _ = {
                nickname: "",
                type: 0,
                position: 0,
                parentId: "0"
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.nickname = e.string();
                        break;
                    case 2:
                        o.type = e.int32();
                        break;
                    case 3:
                        o.position = e.uint32();
                        break;
                    case 4:
                        o.parentId = e.fixed64().toString();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            "" !== e.nickname && _.tag(1, M.WireType.LengthDelimited).string(e.nickname), 0 !== e.type && _.tag(2, M.WireType.Varint).int32(e.type), 0 !== e.position && _.tag(3, M.WireType.Varint).uint32(e.position), "0" !== e.parentId && _.tag(4, M.WireType.Bit64).fixed64(e.parentId);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
                T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", N]
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
    let eh = new eM;
    class eP extends M.MessageType {
        create(e) {
            let _ = {
                muted: !1,
                volume: 0,
                modifiedAt: "0",
                soundboardMuted: !1
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.muted = e.bool();
                        break;
                    case 2:
                        o.volume = e.float();
                        break;
                    case 3:
                        o.modifiedAt = e.fixed64().toString();
                        break;
                    case 4:
                        o.soundboardMuted = e.bool();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            !1 !== e.muted && _.tag(1, M.WireType.Varint).bool(e.muted), 0 !== e.volume && _.tag(2, M.WireType.Bit32).float(e.volume), "0" !== e.modifiedAt && _.tag(3, M.WireType.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && _.tag(4, M.WireType.Varint).bool(e.soundboardMuted);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let em = new eP;
    class eG extends M.MessageType {
        create(e) {
            let _ = {
                user: {},
                stream: {}
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        this.binaryReadMap1(o.user, e, E);
                        break;
                    case 2:
                        this.binaryReadMap2(o.stream, e, E);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = em.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : em.create()
        }
        binaryReadMap2(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = em.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : em.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.user)) _.tag(1, M.WireType.LengthDelimited).fork().tag(1, M.WireType.Bit64).fixed64(t), _.tag(2, M.WireType.LengthDelimited).fork(), em.internalBinaryWrite(e.user[t], _, E), _.join().join();
            for (let t of Object.keys(e.stream)) _.tag(2, M.WireType.LengthDelimited).fork().tag(1, M.WireType.Bit64).fixed64(t), _.tag(2, M.WireType.LengthDelimited).fork(), em.internalBinaryWrite(e.stream[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.AudioSettings", [{
                no: 1,
                name: "user",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => em
                }
            }, {
                no: 2,
                name: "stream",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => em
                }
            }])
        }
    }
    let ep = new eG;
    class eg extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (1 === _) o.disableHomeAutoNav = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.disableHomeAutoNav);
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.disableHomeAutoNav && h.BoolValue.internalBinaryWrite(e.disableHomeAutoNav, _.tag(1, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.CommunitiesSettings", [{
                no: 1,
                name: "disable_home_auto_nav",
                kind: "message",
                T: () => h.BoolValue
            }])
        }
    }
    let ey = new eg;
    class eB extends M.MessageType {
        create(e) {
            let _ = {
                volume: 0
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (1 === _) o.volume = e.float();
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.volume && _.tag(1, M.WireType.Bit32).float(e.volume);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let ef = new eB;
    class eH extends M.MessageType {
        create(e) {
            let _ = {
                soundId: "0",
                guildId: "0"
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.soundId = e.fixed64().toString();
                        break;
                    case 2:
                        o.guildId = e.fixed64().toString();
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            "0" !== e.soundId && _.tag(1, M.WireType.Bit64).fixed64(e.soundId), "0" !== e.guildId && _.tag(2, M.WireType.Bit64).fixed64(e.guildId);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let ev = new eH;
    class eb extends M.MessageType {
        create(e) {
            let _ = {
                allowedGuildIds: [],
                allowedUserIds: []
            };
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.allowFriends = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.allowFriends);
                        break;
                    case 2:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.allowedGuildIds.push(e.fixed64().toString());
                        else o.allowedGuildIds.push(e.fixed64().toString());
                        break;
                    case 3:
                        if (t === M.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.allowedUserIds.push(e.fixed64().toString());
                        else o.allowedUserIds.push(e.fixed64().toString());
                        break;
                    case 4:
                        o.autoBroadcast = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.autoBroadcast);
                        break;
                    default:
                        let n = E.readUnknownField;
                        if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let r = e.skip(t);
                        !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            if (e.allowFriends && h.BoolValue.internalBinaryWrite(e.allowFriends, _.tag(1, M.WireType.LengthDelimited).fork(), E).join(), e.allowedGuildIds.length) {
                _.tag(2, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.allowedGuildIds.length; E++) _.fixed64(e.allowedGuildIds[E]);
                _.join()
            }
            if (e.allowedUserIds.length) {
                _.tag(3, M.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.allowedUserIds.length; E++) _.fixed64(e.allowedUserIds[E]);
                _.join()
            }
            e.autoBroadcast && h.BoolValue.internalBinaryWrite(e.autoBroadcast, _.tag(4, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.BroadcastSettings", [{
                no: 1,
                name: "allow_friends",
                kind: "message",
                T: () => h.BoolValue
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
                T: () => h.BoolValue
            }])
        }
    }
    let ew = new eb;
    class eF extends M.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, M.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, M.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                n = e.pos + _;
            for (; e.pos < n;) {
                let [_, t] = e.tag();
                if (1 === _) o.allowVoiceRecording = h.BoolValue.internalBinaryRead(e, e.uint32(), E, o.allowVoiceRecording);
                else {
                    let n = E.readUnknownField;
                    if ("throw" === n) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let r = e.skip(t);
                    !1 !== n && (!0 === n ? M.UnknownFieldHandler.onRead : n)(this.typeName, o, _, t, r)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.allowVoiceRecording && h.BoolValue.internalBinaryWrite(e.allowVoiceRecording, _.tag(1, M.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? M.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ClipsSettings", [{
                no: 1,
                name: "allow_voice_recording",
                kind: "message",
                T: () => h.BoolValue
            }])
        }
    }
    let eY = new eF
}
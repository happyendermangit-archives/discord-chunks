function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AllGuildSettings: function() {
            return F
        },
        AudioContextSetting: function() {
            return ec
        },
        BackgroundGradientPresetId: function() {
            return v
        },
        ChannelSettings: function() {
            return x
        },
        DebugSettings: function() {
            return Z
        },
        DismissibleContent: function() {
            return I
        },
        DismissibleGuildContent: function() {
            return y
        },
        DmSpamFilterV2: function() {
            return O
        },
        ExplicitContentRedaction: function() {
            return h
        },
        FavoriteChannel: function() {
            return el
        },
        FavoriteChannelType: function() {
            return g
        },
        GameLibrarySettings: function() {
            return $
        },
        GuildActivityStatusRestrictionDefault: function() {
            return T
        },
        GuildFolder: function() {
            return eu
        },
        GuildOnboardingProgress: function() {
            return m
        },
        GuildSettings: function() {
            return V
        },
        InboxSettings: function() {
            return j
        },
        InboxTab: function() {
            return E
        },
        NotificationSettings: function() {
            return Q
        },
        PreloadedUserSettings: function() {
            return B
        },
        PrivacySettings: function() {
            return J
        },
        TextAndImagesSettings: function() {
            return q
        },
        Theme: function() {
            return S
        },
        UserContentSettings: function() {
            return Y
        },
        VoiceAndVideoSettings: function() {
            return z
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O, T, S, v, g, A = n("578012"),
        b = n("700449"),
        N = n("991161"),
        R = n("28178");

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function P(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function D(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function L(e, t, n) {
        return t && D(e.prototype, t), n && D(e, n), e
    }

    function M(e) {
        return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function U(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && w(e, t)
    }

    function w(e, t) {
        return (w = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function k(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return C(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function G(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = M(e);
            if (t) {
                var a = M(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n)
        }
    }(r = E || (E = {}))[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.MENTIONS = 1] = "MENTIONS", r[r.UNREADS = 2] = "UNREADS", r[r.TODOS = 3] = "TODOS", r[r.FOR_YOU = 4] = "FOR_YOU", r[r.GAME_INVITES = 5] = "GAME_INVITES", (o = p || (p = {}))[o.NO_PROGRESS = 0] = "NO_PROGRESS", o[o.JOIN_GUILD = 1] = "JOIN_GUILD", o[o.INVITE_USER = 2] = "INVITE_USER", o[o.CONTACT_SYNC = 4] = "CONTACT_SYNC", (i = m || (m = {}))[i.NO_GUILD_ONBOARDING = 0] = "NO_GUILD_ONBOARDING", i[i.GUILD_NOTICE_SHOWN = 1] = "GUILD_NOTICE_SHOWN", i[i.GUILD_NOTICE_CLEARED = 2] = "GUILD_NOTICE_CLEARED", (a = y || (y = {}))[a.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE = 0] = "DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE", a[a.CLYDE_GUILD_NOTICE_NUX = 1] = "CLYDE_GUILD_NOTICE_NUX", a[a.SUMMARIES_NOTICE = 2] = "SUMMARIES_NOTICE", a[a.SUMMARIES_ENABLED_NOTICE = 3] = "SUMMARIES_ENABLED_NOTICE", (u = I || (I = {}))[u.HUB_WAITLIST_UPSELL = 0] = "HUB_WAITLIST_UPSELL", u[u.APPLICATION_COMMAND_TOOLTIP = 1] = "APPLICATION_COMMAND_TOOLTIP", u[u.HUB_EVENT_HEADER_UPSELL = 2] = "HUB_EVENT_HEADER_UPSELL", u[u.CHANNELINFO_CHANNELBANNER_NOTICE = 3] = "CHANNELINFO_CHANNELBANNER_NOTICE", u[u.ACCOUNT_MULTIACCOUNT_TOOLTIP = 4] = "ACCOUNT_MULTIACCOUNT_TOOLTIP", u[u.SEASONALGIFTING_CHANNELBUTTON_POPUP = 5] = "SEASONALGIFTING_CHANNELBUTTON_POPUP", u[u.CHANNEL_NOTICE_INVITE = 6] = "CHANNEL_NOTICE_INVITE", u[u.CHANNEL_NOTICE_HUBLINK = 7] = "CHANNEL_NOTICE_HUBLINK", u[u.CHANNEL_NOTICE_QUICKSWITCHER = 8] = "CHANNEL_NOTICE_QUICKSWITCHER", u[u.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION = 9] = "CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION", u[u.CHANNEL_NOTICE_GUILD_BANNER = 11] = "CHANNEL_NOTICE_GUILD_BANNER", u[u.GUILD_HEADER_EVENT_UPSELL = 12] = "GUILD_HEADER_EVENT_UPSELL", u[u.GUILD_HEADER_PREMIUM_GUILD_PROGRESS = 14] = "GUILD_HEADER_PREMIUM_GUILD_PROGRESS", u[u.GUILD_HEADER_ANIMATED_GUILD_BANNER = 15] = "GUILD_HEADER_ANIMATED_GUILD_BANNER", u[u.NAGBAR_NOTICE_DOWNLOAD = 16] = "NAGBAR_NOTICE_DOWNLOAD", u[u.NAGBAR_NOTICE_CONNECT_SPOTIFY = 17] = "NAGBAR_NOTICE_CONNECT_SPOTIFY", u[u.NAGBAR_NOTICE_CONNECT_PLAYSTATION = 18] = "NAGBAR_NOTICE_CONNECT_PLAYSTATION", u[u.NAGBAR_NOTICE_MFA_SMS_BACKUP = 19] = "NAGBAR_NOTICE_MFA_SMS_BACKUP", u[u.ACTIVITIES_SUNSET_COACH_MARK = 20] = "ACTIVITIES_SUNSET_COACH_MARK", u[u.NAGBAR_NOTICE_PREMIUM_PROMO = 21] = "NAGBAR_NOTICE_PREMIUM_PROMO", u[u.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING = 22] = "NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING", u[u.NAGBAR_NOTICE_PREMIUM_REACTIVATE = 23] = "NAGBAR_NOTICE_PREMIUM_REACTIVATE", u[u.PREMIUM_5TH_ANNIVERSARY_MODAL = 24] = "PREMIUM_5TH_ANNIVERSARY_MODAL", u[u.GUILD_JOIN_FEEDBACK_MODAL = 25] = "GUILD_JOIN_FEEDBACK_MODAL", u[u.VOICE_QUALITY_BOOSTING_UPSELL_TOOLTIP = 26] = "VOICE_QUALITY_BOOSTING_UPSELL_TOOLTIP", u[u.ACTIVITIES_EARLY_USER_COACH_MARK = 27] = "ACTIVITIES_EARLY_USER_COACH_MARK", u[u.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP = 28] = "GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP", u[u.ACTIVITIES_TUTORIAL_COACH_MARK = 29] = "ACTIVITIES_TUTORIAL_COACH_MARK", u[u.GUILD_HEADER_INVITE_SPLASH = 31] = "GUILD_HEADER_INVITE_SPLASH", u[u.NAGBAR_NOTICE_LOCALIZED_PRICING = 33] = "NAGBAR_NOTICE_LOCALIZED_PRICING", u[u.SOUNDBOARD_EDUCATION = 35] = "SOUNDBOARD_EDUCATION", u[u.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK = 36] = "GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK", u[u.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL = 37] = "GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL", u[u.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK = 38] = "CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK", u[u.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL = 39] = "GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL", u[u.GUILD_INSIGHTS_ACCESS_RATE_NEW = 40] = "GUILD_INSIGHTS_ACCESS_RATE_NEW", u[u.NOW_PLAYING_CONSENT_CARD = 41] = "NOW_PLAYING_CONSENT_CARD", u[u.GUILD_HEADER_BOOSTING_LOW_PRICE_EXPERIMENT_TOOLTIP = 42] = "GUILD_HEADER_BOOSTING_LOW_PRICE_EXPERIMENT_TOOLTIP", u[u.FORUM_CHANNEL_UPSELL_MODAL = 44] = "FORUM_CHANNEL_UPSELL_MODAL", u[u.POGGERMODE_BIRTHDAY_EDUCATION_TOOLTIP = 46] = "POGGERMODE_BIRTHDAY_EDUCATION_TOOLTIP", u[u.MWEB_APP_DOWNLOAD_HALFSHEET = 47] = "MWEB_APP_DOWNLOAD_HALFSHEET", u[u.MWEB_APP_DOWNLOAD_NAGBAR_THEMED = 48] = "MWEB_APP_DOWNLOAD_NAGBAR_THEMED", u[u.MWEB_APP_DOWNLOAD_NAGBAR_BLURPLE = 49] = "MWEB_APP_DOWNLOAD_NAGBAR_BLURPLE", u[u.GUILD_FEED_NUX_CARD = 50] = "GUILD_FEED_NUX_CARD", u[u.GUILD_HEADER_FREE_STICKER_SLOTS_TOOLTIP = 52] = "GUILD_HEADER_FREE_STICKER_SLOTS_TOOLTIP", u[u.ACTIVITIES_NITRO_TUTORIAL_COACH_MARK_V2 = 53] = "ACTIVITIES_NITRO_TUTORIAL_COACH_MARK_V2", u[u.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES = 55] = "ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES", u[u.GUILD_DELETE_FEEDBACK = 56] = "GUILD_DELETE_FEEDBACK", u[u.GUILD_LEAVE_FEEDBACK = 57] = "GUILD_LEAVE_FEEDBACK", u[u.AUTH_SESSIONS_NEW = 63] = "AUTH_SESSIONS_NEW", u[u.DONUT_MOBILE_NUX = 65] = "DONUT_MOBILE_NUX", u[u.GUILD_ROLE_SUBSCRIPTION_MWEB_PURCHASE_UPSELL = 66] = "GUILD_ROLE_SUBSCRIPTION_MWEB_PURCHASE_UPSELL", u[u.FORUM_CHANNEL_HELPER_CARD = 67] = "FORUM_CHANNEL_HELPER_CARD", u[u.PASSPORT_USER_SETTINGS = 70] = "PASSPORT_USER_SETTINGS", u[u.SUMMER_BOGO_ANNOUNCEMENT = 71] = "SUMMER_BOGO_ANNOUNCEMENT", u[u.COMMANDS_MIGRATION_UPSELL_MODAL = 72] = "COMMANDS_MIGRATION_UPSELL_MODAL", u[u.FILE_LIMIT_UPLOAD_COACH_MARK = 73] = "FILE_LIMIT_UPLOAD_COACH_MARK", u[u.DONUT_DESKTOP_NUX = 77] = "DONUT_DESKTOP_NUX", u[u.GUILD_ROLE_SUBSCRIPTION_EMOJI_UPSELL = 79] = "GUILD_ROLE_SUBSCRIPTION_EMOJI_UPSELL", u[u.PREMIUM_SUBSCRIPTION_UPSELL_EMOJI_PICKER_TOP_OF_LIST = 80] = "PREMIUM_SUBSCRIPTION_UPSELL_EMOJI_PICKER_TOP_OF_LIST", u[u.STAGE_RAISED_HAND_MOVED = 81] = "STAGE_RAISED_HAND_MOVED", u[u.XBOX_ONE_WAY_RECONNECT = 82] = "XBOX_ONE_WAY_RECONNECT", u[u.XBOX_VOICE_DESKTOP_SETTINGS_UPSELL_POPOUT = 84] = "XBOX_VOICE_DESKTOP_SETTINGS_UPSELL_POPOUT", u[u.HUB_BACK_TO_SCHOOL_UPSELL = 85] = "HUB_BACK_TO_SCHOOL_UPSELL", u[u.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP = 86] = "STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP", u[u.ACTIVITIES_MOBILE_VOICE_CONTROLS_TOGGLE_NUX = 89] = "ACTIVITIES_MOBILE_VOICE_CONTROLS_TOGGLE_NUX", u[u.PROFILE_THEMES_SETTINGS_VIEWED_V2 = 92] = "PROFILE_THEMES_SETTINGS_VIEWED_V2", u[u.GUILD_HEADER_ACTIVE_THREADS_NOTICE = 93] = "GUILD_HEADER_ACTIVE_THREADS_NOTICE", u[u.CHANNEL_LIST_OPT_IN_NUX = 94] = "CHANNEL_LIST_OPT_IN_NUX", u[u.ACTIVITIES_MOBILE_NUX = 95] = "ACTIVITIES_MOBILE_NUX", u[u.PROFILE_THEMES_NEW_BADGE = 96] = "PROFILE_THEMES_NEW_BADGE", u[u.GUILD_AUTOMOD_DEFAULT_ON_UPSELL = 97] = "GUILD_AUTOMOD_DEFAULT_ON_UPSELL", u[u.CHANNEL_BROWSER_NUX = 98] = "CHANNEL_BROWSER_NUX", u[u.RNA_CHANGELOG_HC_NOTICE = 99] = "RNA_CHANGELOG_HC_NOTICE", u[u.MESSAGE_REQUEST_SETTINGS_COACH_MARK = 100] = "MESSAGE_REQUEST_SETTINGS_COACH_MARK", u[u.GUILD_AUTOMOD_DEFAULT_ON_UPSELL_2 = 101] = "GUILD_AUTOMOD_DEFAULT_ON_UPSELL_2", u[u.GUILD_AUTOMOD_REGEX_UPSELL = 102] = "GUILD_AUTOMOD_REGEX_UPSELL", u[u.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP = 103] = "VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP", u[u.CONNECTIONS_NUX = 108] = "CONNECTIONS_NUX", u[u.XBOX_VOICE_SURVEY_NAGBAR = 110] = "XBOX_VOICE_SURVEY_NAGBAR", u[u.PS_ONE_WAY_RECONNECT = 112] = "PS_ONE_WAY_RECONNECT", u[u.HALLOWEEN_2022_ACTIVITIES_COACH_MARK = 115] = "HALLOWEEN_2022_ACTIVITIES_COACH_MARK", u[u.NITRODUCTION_STEP_PROFILE_CUSTOMIZATION = 116] = "NITRODUCTION_STEP_PROFILE_CUSTOMIZATION", u[u.NITRODUCTION_STEP_BOOSTING = 117] = "NITRODUCTION_STEP_BOOSTING", u[u.NITRODUCTION_STEP_CUSTOM_EMOJI = 118] = "NITRODUCTION_STEP_CUSTOM_EMOJI", u[u.NEW_CRUNCHYROLL_CONNECTION = 119] = "NEW_CRUNCHYROLL_CONNECTION", u[u.APP_DIRECTORY_UPSELL_MODAL = 121] = "APP_DIRECTORY_UPSELL_MODAL", u[u.BASH_OUT_COACH_MARK = 123] = "BASH_OUT_COACH_MARK", u[u.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL = 124] = "GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL", u[u.COMMUNITY_ONBOARDING_NEW_BADGE = 125] = "COMMUNITY_ONBOARDING_NEW_BADGE", u[u.CHURRO_LINK_UPSELL = 126] = "CHURRO_LINK_UPSELL", u[u.VERIFIED_ROLES_COACH_MARK = 127] = "VERIFIED_ROLES_COACH_MARK", u[u.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP = 129] = "PROFILE_THEMES_ACCESSIBILITY_TOOLTIP", u[u.BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL = 130] = "BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL", u[u.USER_SAFETY_SAFE_DIRECT_MESSAGING = 131] = "USER_SAFETY_SAFE_DIRECT_MESSAGING", u[u.GG_ANNOUNCEMENT = 132] = "GG_ANNOUNCEMENT", u[u.CHANNEL_BROWSER_NEW_BADGE_NUX = 133] = "CHANNEL_BROWSER_NEW_BADGE_NUX", u[u.CREATOR_PROMO_PAGE_COACH_MARK = 134] = "CREATOR_PROMO_PAGE_COACH_MARK", u[u.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL = 136] = "CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL", u[u.GUILD_ONBOARDING_UPSELL_MODAL = 137] = "GUILD_ONBOARDING_UPSELL_MODAL", u[u.NAGBAR_NOTICE_ONE_TIME_PAYMENT_PAST_DUE = 138] = "NAGBAR_NOTICE_ONE_TIME_PAYMENT_PAST_DUE", u[u.DROPS_GO_LIVE_BANNER_NOTICE_HALO = 139] = "DROPS_GO_LIVE_BANNER_NOTICE_HALO", u[u.DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP_HALO = 140] = "DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP_HALO", u[u.DROPS_QUEST_COMPLETION_TOOLTIP_HALO = 141] = "DROPS_QUEST_COMPLETION_TOOLTIP_HALO", u[u.SEASONAL_GIFTING_COACHMARK_2022 = 146] = "SEASONAL_GIFTING_COACHMARK_2022", u[u.NAGBAR_BOUNCED_EMAIL_NOTICE = 147] = "NAGBAR_BOUNCED_EMAIL_NOTICE", u[u.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE = 151] = "GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE", u[u.CONSOLE_PTT_DISABLE_ALERT = 152] = "CONSOLE_PTT_DISABLE_ALERT", u[u.ACTIVITIES_MINI_SHELF_SPARKLES = 153] = "ACTIVITIES_MINI_SHELF_SPARKLES", u[u.DROPS_ENDED_INCOMPLETE_HALO = 154] = "DROPS_ENDED_INCOMPLETE_HALO", u[u.GDM_INVITE_REMINDER = 157] = "GDM_INVITE_REMINDER", u[u.USER_SAFETY_CONSUMER_EDUCATION_BLOCK = 161] = "USER_SAFETY_CONSUMER_EDUCATION_BLOCK", u[u.USER_SAFETY_CONSUMER_EDUCATION_MUTE = 162] = "USER_SAFETY_CONSUMER_EDUCATION_MUTE", u[u.LINKED_ROLE_ADMIN_GUILD = 163] = "LINKED_ROLE_ADMIN_GUILD", u[u.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION = 164] = "NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION", u[u.BURST_REACTION_BUTTON_SPARKLE = 165] = "BURST_REACTION_BUTTON_SPARKLE", u[u.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING = 166] = "NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING", u[u.VC_TILE_ACTIVITIES_ENTRY_POINT = 167] = "VC_TILE_ACTIVITIES_ENTRY_POINT", u[u.BURST_REACTION_COACHMARK = 169] = "BURST_REACTION_COACHMARK", u[u.BURST_REACTIONS_REMOVE_MODAL = 170] = "BURST_REACTIONS_REMOVE_MODAL", u[u.BURST_REACTION_NITRO_TOOLTIP = 171] = "BURST_REACTION_NITRO_TOOLTIP", u[u.CLIENT_THEMES_SETTINGS_BADGE = 173] = "CLIENT_THEMES_SETTINGS_BADGE", u[u.CLIENT_THEMES_COACHMARK = 174] = "CLIENT_THEMES_COACHMARK", u[u.CLIENT_THEMES_SPARKLE_PREVIEW = 175] = "CLIENT_THEMES_SPARKLE_PREVIEW", u[u.STAGE_V2_UPSELL = 176] = "STAGE_V2_UPSELL", u[u.QUEST_1_ENROLLMENT_TOOLTIP = 177] = "QUEST_1_ENROLLMENT_TOOLTIP", u[u.QUEST_1_COMPLETION_TOOLTIP = 178] = "QUEST_1_COMPLETION_TOOLTIP", u[u.QUEST_1_GO_LIVE_BANNER = 179] = "QUEST_1_GO_LIVE_BANNER", u[u.QUEST_1_ENDED_INCOMPLETE = 180] = "QUEST_1_ENDED_INCOMPLETE", u[u.PREMIUM_TUTORIAL_EXPERIENCE = 181] = "PREMIUM_TUTORIAL_EXPERIENCE", u[u.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL = 182] = "APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL", u[u.PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP = 183] = "PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP", u[u.PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP = 184] = "PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP", u[u.PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP = 185] = "PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP", u[u.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP = 186] = "PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP", u[u.TABS_V2_ANNOUNCEMENT_SHEET = 188] = "TABS_V2_ANNOUNCEMENT_SHEET", u[u.VOICE_MESSAGE_UPSELL_DM = 189] = "VOICE_MESSAGE_UPSELL_DM", u[u.SUPER_REACTIONS_NITRO_MARKETING = 190] = "SUPER_REACTIONS_NITRO_MARKETING", u[u.NITRO_DROP_2023_04_ANNOUNCEMENT_MODAL = 191] = "NITRO_DROP_2023_04_ANNOUNCEMENT_MODAL", u[u.CLYDE_GUILD_HEADER_NUX = 193] = "CLYDE_GUILD_HEADER_NUX", u[u.CLYDE_CHAT_BAR_NUX = 194] = "CLYDE_CHAT_BAR_NUX", u[u.VOICE_MESSAGE_UPSELL_GUILD = 195] = "VOICE_MESSAGE_UPSELL_GUILD", u[u.ACTIVITY_GDM_CALL_TOOLTIP = 196] = "ACTIVITY_GDM_CALL_TOOLTIP", u[u.ACTIVITY_GDM_ROCKET_SPARKLE = 197] = "ACTIVITY_GDM_ROCKET_SPARKLE", u[u.NITRO_DROP_2023_04_NITRO_TAB_BADGE = 205] = "NITRO_DROP_2023_04_NITRO_TAB_BADGE", u[u.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL = 206] = "GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL", u[u.ACTIVITIES_MOBILE_PIP_FAB_NUX = 208] = "ACTIVITIES_MOBILE_PIP_FAB_NUX", u[u.GUILD_HEADER_SOUNDBOARD_PERMISSION = 209] = "GUILD_HEADER_SOUNDBOARD_PERMISSION", u[u.GUILD_ONBOARDING_UPSELL_HEADER = 210] = "GUILD_ONBOARDING_UPSELL_HEADER", u[u.ACTIVITIES_COACH_MARK_GAME_NIGHT = 211] = "ACTIVITIES_COACH_MARK_GAME_NIGHT", u[u.GUILD_ONBOARDING_UPSELL_NAGBAR = 212] = "GUILD_ONBOARDING_UPSELL_NAGBAR", u[u.GUILD_ONBOARDING_UPSELL_MODAL_V2 = 213] = "GUILD_ONBOARDING_UPSELL_MODAL_V2", u[u.SUPER_REACTIONS_FREE_USER_FIRST_SENT = 214] = "SUPER_REACTIONS_FREE_USER_FIRST_SENT", u[u.SUPER_REACTIONS_TOOLTIP_COACHMARK = 215] = "SUPER_REACTIONS_TOOLTIP_COACHMARK", u[u.SOUNDBOARD_VOLUME_EDUCATION = 216] = "SOUNDBOARD_VOLUME_EDUCATION", u[u.NAGBAR_NOTICE_POMELO = 217] = "NAGBAR_NOTICE_POMELO", u[u.APP_DIRECTORY_GUILD_SETTINGS_NEW_INDICATOR = 218] = "APP_DIRECTORY_GUILD_SETTINGS_NEW_INDICATOR", u[u.APP_DIRECTORY_GUILD_SETTINGS_CONTEXT_MENU_NEW_INDICATOR = 219] = "APP_DIRECTORY_GUILD_SETTINGS_CONTEXT_MENU_NEW_INDICATOR", u[u.SUPER_REACTIONS_TAB_SPARKLE = 220] = "SUPER_REACTIONS_TAB_SPARKLE", u[u.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES = 221] = "ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES", u[u.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES = 222] = "ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES", u[u.MJ_NEW_USER_CHAT_BAR = 223] = "MJ_NEW_USER_CHAT_BAR", u[u.CHANNEL_NOTICE_CLYDE_NUX = 224] = "CHANNEL_NOTICE_CLYDE_NUX", u[u.USER_SAFETY_CONSUMER_EDUCATION_REPORTING = 225] = "USER_SAFETY_CONSUMER_EDUCATION_REPORTING", u[u.SUPER_REACTIONS_FIRST_SENT = 227] = "SUPER_REACTIONS_FIRST_SENT", u[u.COMMUNITY_GUILD_SETTINGS_SAFETY = 228] = "COMMUNITY_GUILD_SETTINGS_SAFETY", u[u.FRIEND_FINDER_FIRST_TIME_BADGE = 229] = "FRIEND_FINDER_FIRST_TIME_BADGE", u[u.SHARE_NITRO_BUTTON_SPARKLES = 230] = "SHARE_NITRO_BUTTON_SPARKLES", u[u.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE = 231] = "PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE", u[u.SOUNDBOARD_KEYBIND_TIP = 232] = "SOUNDBOARD_KEYBIND_TIP", u[u.QUEST_2_ENROLLMENT_TOOLTIP = 234] = "QUEST_2_ENROLLMENT_TOOLTIP", u[u.QUEST_2_COMPLETION_TOOLTIP = 235] = "QUEST_2_COMPLETION_TOOLTIP", u[u.QUEST_2_GO_LIVE_BANNER = 236] = "QUEST_2_GO_LIVE_BANNER", u[u.QUEST_2_ENDED_INCOMPLETE = 237] = "QUEST_2_ENDED_INCOMPLETE", u[u.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES = 238] = "GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES", u[u.MEDIA_CHANNEL_UPSELL = 243] = "MEDIA_CHANNEL_UPSELL", u[u.ADD_FRIENDS_WIDGET = 244] = "ADD_FRIENDS_WIDGET", u[u.YOU_TAB_AVATAR_ONBOARDING = 245] = "YOU_TAB_AVATAR_ONBOARDING", u[u.YOU_TAB_ABOUT_ME_ONBOARDING = 246] = "YOU_TAB_ABOUT_ME_ONBOARDING", u[u.GUILD_HEADER_SUMMARIES_UPSELL = 247] = "GUILD_HEADER_SUMMARIES_UPSELL", u[u.SUPER_REACTIONS_COACHMARK_MOBILE = 250] = "SUPER_REACTIONS_COACHMARK_MOBILE", u[u.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE = 251] = "SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE", u[u.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL = 252] = "SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL", u[u.EMOJI_PICKER_FAVORITE_EMOJIS_TIP = 253] = "EMOJI_PICKER_FAVORITE_EMOJIS_TIP", u[u.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE = 254] = "SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE", u[u.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS = 255] = "SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS", u[u.FAMILY_CENTER_NEW_BADGE = 256] = "FAMILY_CENTER_NEW_BADGE", u[u.CONSOLE_LOCAL_DETECT_CTA = 257] = "CONSOLE_LOCAL_DETECT_CTA", u[u.REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE = 263] = "REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE", u[u.GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE = 264] = "GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE", u[u.REMIXING_ENTRYPOINT_OPEN_MEDIA_KEYBOARD_UPSELL_MOBILE = 265] = "REMIXING_ENTRYPOINT_OPEN_MEDIA_KEYBOARD_UPSELL_MOBILE", u[u.GUILD_MEMBER_SAFETY_BANNER_NOTICE = 266] = "GUILD_MEMBER_SAFETY_BANNER_NOTICE", u[u.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL = 270] = "SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL", u[u.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK = 271] = "INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK", u[u.CUSTOM_CALL_SOUNDS_PICKER_UPSELL = 272] = "CUSTOM_CALL_SOUNDS_PICKER_UPSELL", u[u.CUSTOM_CALL_SOUNDS_SPARKLES = 274] = "CUSTOM_CALL_SOUNDS_SPARKLES", u[u.SOUNDBOARD_MOBILE_FLOATING_CTA = 275] = "SOUNDBOARD_MOBILE_FLOATING_CTA", u[u.SOUNDBOARD_MOBILE_NEW_BADGE = 276] = "SOUNDBOARD_MOBILE_NEW_BADGE", u[u.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 = 277] = "PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2", u[u.VOICE_PANEL_BAD_CONNECTION_CTA = 278] = "VOICE_PANEL_BAD_CONNECTION_CTA", u[u.PREMIUM_TRIAL_OFFER_MOBILE_ACTION_SHEET = 279] = "PREMIUM_TRIAL_OFFER_MOBILE_ACTION_SHEET", u[u.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE = 280] = "MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE", u[u.CLIPS_ONBOARDING_GO_LIVE_COACHMARK = 281] = "CLIPS_ONBOARDING_GO_LIVE_COACHMARK", u[u.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK = 282] = "CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK", u[u.CUSTOM_APP_ICONS_COACHMARK = 283] = "CUSTOM_APP_ICONS_COACHMARK", u[u.CUSTOM_APP_ICONS_NEW_BADGE = 284] = "CUSTOM_APP_ICONS_NEW_BADGE", u[u.BROADCASTING_BROADCASTER_TOOLTIP = 285] = "BROADCASTING_BROADCASTER_TOOLTIP", u[u.BROADCASTING_VIEWER_TOOLTIP = 286] = "BROADCASTING_VIEWER_TOOLTIP", u[u.SERVER_SHOP_UPSELL = 288] = "SERVER_SHOP_UPSELL", u[u.LAUNCH_PAD_PULL_TAB_NUX = 289] = "LAUNCH_PAD_PULL_TAB_NUX", u[u.CLIPS_SETTINGS_BETA_TAG = 290] = "CLIPS_SETTINGS_BETA_TAG", u[u.WHATS_NEW_AVATAR_DECOS_FLIP = 292] = "WHATS_NEW_AVATAR_DECOS_FLIP", u[u.WHATS_NEW_PROFILE_EFFECTS_FLIP = 293] = "WHATS_NEW_PROFILE_EFFECTS_FLIP", u[u.MEMBERS_LAUNCH_UPSELL = 294] = "MEMBERS_LAUNCH_UPSELL", u[u.SERVER_SHOP_PHANTOM_PREVIEW = 295] = "SERVER_SHOP_PHANTOM_PREVIEW", u[u.RECURRING_CONTACT_SYNC_PROMPT = 297] = "RECURRING_CONTACT_SYNC_PROMPT", u[u.INVENTORY_TRY_PACKS_MODAL = 302] = "INVENTORY_TRY_PACKS_MODAL", u[u.DEPRECATE_WIN32_MESSAGE = 305] = "DEPRECATE_WIN32_MESSAGE", u[u.DEKSTOP_CUSTOM_APP_ICON_COACHMARK = 306] = "DEKSTOP_CUSTOM_APP_ICON_COACHMARK", u[u.DEKSTOP_CUSTOM_APP_ICON_BADGE = 307] = "DEKSTOP_CUSTOM_APP_ICON_BADGE", u[u.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE = 309] = "WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE", u[u.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE = 310] = "WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE", u[u.CLYDE_AI_PERSONALITIES_NUX_MODAL = 312] = "CLYDE_AI_PERSONALITIES_NUX_MODAL", u[u.NUX_GUILD_CHANNEL_EXPLAINER = 313] = "NUX_GUILD_CHANNEL_EXPLAINER", u[u.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP = 316] = "SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP", u[u.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE = 317] = "SUPER_REACTION_TOGGLE_EDUCATION_MOBILE", u[u.SEEN_LAUNCH_WELCOME_OR_REDESIGN = 325] = "SEEN_LAUNCH_WELCOME_OR_REDESIGN", u[u.SEEN_OLD_DESIGN = 326] = "SEEN_OLD_DESIGN", u[u.SEASONAL_GIFTING_COACHMARK_2023 = 328] = "SEASONAL_GIFTING_COACHMARK_2023", u[u.SHOP_FOR_ALL_USER_POPOUT_UPSELL = 329] = "SHOP_FOR_ALL_USER_POPOUT_UPSELL", u[u.COLLECTIBLES_GIFTING_COACHMARK = 334] = "COLLECTIBLES_GIFTING_COACHMARK", u[u.SEEN_LAUNCH_WELCOME = 335] = "SEEN_LAUNCH_WELCOME", u[u.FAVORITE_SERVER_ADD_TO_FAVORITES_COACHMARK = 336] = "FAVORITE_SERVER_ADD_TO_FAVORITES_COACHMARK", u[u.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK = 337] = "INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK", u[u.FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS = 338] = "FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS", u[u.OVERLAY_KEYBIND_NOTIFICATION = 340] = "OVERLAY_KEYBIND_NOTIFICATION", u[u.CHANNEL_LIST_V2_BROWSE_CHANNELS_NUX = 343] = "CHANNEL_LIST_V2_BROWSE_CHANNELS_NUX", u[u.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE = 344] = "COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE", u[u.UU_MIGRATION_NOTICE = 345] = "UU_MIGRATION_NOTICE", u[u.HANG_STATUS_NEW_BADGE = 346] = "HANG_STATUS_NEW_BADGE", u[u.VOICE_CALL_BG_PICKER_TOOLTIP = 347] = "VOICE_CALL_BG_PICKER_TOOLTIP", u[u.VOICE_CALL_BG_PICKER_NEW_BADGE = 348] = "VOICE_CALL_BG_PICKER_NEW_BADGE", u[u.SWIPE_TO_REPLY_COACHMARK = 349] = "SWIPE_TO_REPLY_COACHMARK", u[u.MOBILE_ACCESSIBILITY_COLOR_SETTINGS = 350] = "MOBILE_ACCESSIBILITY_COLOR_SETTINGS", u[u.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP = 351] = "COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP", u[u.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP = 352] = "COLLECTIBLES_SHOP_ELEMENTS_COACHTIP", u[u.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP = 353] = "COLLECTIBLES_SHOP_ANIME_V2_COACHTIP", u[u.POLLS_CHAT_INPUT_COACHMARK = 354] = "POLLS_CHAT_INPUT_COACHMARK", u[u.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK = 355] = "PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK", u[u.ACTIVITIES_OMNIMENU_NEW_BADGE = 357] = "ACTIVITIES_OMNIMENU_NEW_BADGE", u[u.LOOTBOXES_ENTRYPOINT = 358] = "LOOTBOXES_ENTRYPOINT", u[u.ACTIVITIES_CHAT_BUTTON_NUX = 359] = "ACTIVITIES_CHAT_BUTTON_NUX", u[u.TENURE_REWARD_PENDING = 360] = "TENURE_REWARD_PENDING", u[u.TENURE_REWARD_REDEEMABLE = 361] = "TENURE_REWARD_REDEEMABLE", u[u.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP = 362] = "COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP", u[u.TENURE_REWARD_REDEEMABLE_CONFETTI = 363] = "TENURE_REWARD_REDEEMABLE_CONFETTI", u[u.GAME_ONE_USER_SIGNUPS = 364] = "GAME_ONE_USER_SIGNUPS", u[u.COLLECTIBLES_SHOP_SHY_COACHTIP = 365] = "COLLECTIBLES_SHOP_SHY_COACHTIP", u[u.APP_LAUNCHER_ONBOARDING_BOTS_BANNER = 366] = "APP_LAUNCHER_ONBOARDING_BOTS_BANNER", u[u.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER = 367] = "APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER", u[u.APP_LAUNCHER_ONBOARDING_APPS_BANNER = 368] = "APP_LAUNCHER_ONBOARDING_APPS_BANNER", u[u.COLLECTIBLES_MOBILE_SHOP_MARKETING = 369] = "COLLECTIBLES_MOBILE_SHOP_MARKETING", (s = h || (h = {}))[s.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = "UNSET_EXPLICIT_CONTENT_REDACTION", s[s.SHOW = 1] = "SHOW", s[s.BLUR = 2] = "BLUR", s[s.BLOCK = 3] = "BLOCK", (l = O || (O = {}))[l.DEFAULT_UNSET = 0] = "DEFAULT_UNSET", l[l.DISABLED = 1] = "DISABLED", l[l.NON_FRIENDS = 2] = "NON_FRIENDS", l[l.FRIENDS_AND_NON_FRIENDS = 3] = "FRIENDS_AND_NON_FRIENDS", (c = T || (T = {}))[c.OFF = 0] = "OFF", c[c.ON_FOR_LARGE_GUILDS = 1] = "ON_FOR_LARGE_GUILDS", (f = S || (S = {}))[f.UNSET = 0] = "UNSET", f[f.DARK = 1] = "DARK", f[f.LIGHT = 2] = "LIGHT", (d = v || (v = {}))[d.MINT_APPLE = 0] = "MINT_APPLE", d[d.CITRUS_SHERBERT = 1] = "CITRUS_SHERBERT", d[d.RETRO_RAINCLOUD = 2] = "RETRO_RAINCLOUD", d[d.HANAMI = 3] = "HANAMI", d[d.SUNRISE = 4] = "SUNRISE", d[d.COTTON_CANDY = 5] = "COTTON_CANDY", d[d.LOFI_VIBES = 6] = "LOFI_VIBES", d[d.DESERT_KHAKI = 7] = "DESERT_KHAKI", d[d.SUNSET = 8] = "SUNSET", d[d.CHROMA_GLOW = 9] = "CHROMA_GLOW", d[d.FOREST = 10] = "FOREST", d[d.CRIMSON_MOON = 11] = "CRIMSON_MOON", d[d.MIDNIGHT_BLURPLE = 12] = "MIDNIGHT_BLURPLE", d[d.MARS = 13] = "MARS", d[d.DUSK = 14] = "DUSK", d[d.UNDER_THE_SEA = 15] = "UNDER_THE_SEA", d[d.EASTER_EGG = 16] = "EASTER_EGG", d[d.RETRO_STORM = 17] = "RETRO_STORM", d[d.NEON_NIGHTS = 18] = "NEON_NIGHTS", d[d.SEPIA = 19] = "SEPIA", d[d.STRAWBERRY_LEMONADE = 20] = "STRAWBERRY_LEMONADE", d[d.AURORA = 21] = "AURORA", (_ = g || (g = {}))[_.UNSET_FAVORITE_CHANNEL_TYPE = 0] = "UNSET_FAVORITE_CHANNEL_TYPE", _[_.REFERENCE_ORIGINAL = 1] = "REFERENCE_ORIGINAL", _[_.CATEGORY = 2] = "CATEGORY";
    var B = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.PreloadedUserSettings", [{
                    no: 1,
                    name: "versions",
                    kind: "message",
                    T: function() {
                        return R.Versions
                    }
                }, {
                    no: 2,
                    name: "inbox",
                    kind: "message",
                    T: function() {
                        return j
                    }
                }, {
                    no: 3,
                    name: "guilds",
                    kind: "message",
                    T: function() {
                        return F
                    }
                }, {
                    no: 4,
                    name: "user_content",
                    kind: "message",
                    T: function() {
                        return Y
                    }
                }, {
                    no: 5,
                    name: "voice_and_video",
                    kind: "message",
                    T: function() {
                        return z
                    }
                }, {
                    no: 6,
                    name: "text_and_images",
                    kind: "message",
                    T: function() {
                        return q
                    }
                }, {
                    no: 7,
                    name: "notifications",
                    kind: "message",
                    T: function() {
                        return Q
                    }
                }, {
                    no: 8,
                    name: "privacy",
                    kind: "message",
                    T: function() {
                        return J
                    }
                }, {
                    no: 9,
                    name: "debug",
                    kind: "message",
                    T: function() {
                        return Z
                    }
                }, {
                    no: 10,
                    name: "game_library",
                    kind: "message",
                    T: function() {
                        return $
                    }
                }, {
                    no: 11,
                    name: "status",
                    kind: "message",
                    T: function() {
                        return ee
                    }
                }, {
                    no: 12,
                    name: "localization",
                    kind: "message",
                    T: function() {
                        return en
                    }
                }, {
                    no: 13,
                    name: "appearance",
                    kind: "message",
                    T: function() {
                        return eo
                    }
                }, {
                    no: 14,
                    name: "guild_folders",
                    kind: "message",
                    T: function() {
                        return ea
                    }
                }, {
                    no: 15,
                    name: "favorites",
                    kind: "message",
                    T: function() {
                        return es
                    }
                }, {
                    no: 16,
                    name: "audio_context_settings",
                    kind: "message",
                    T: function() {
                        return ef
                    }
                }, {
                    no: 17,
                    name: "communities",
                    kind: "message",
                    T: function() {
                        return ed
                    }
                }, {
                    no: 18,
                    name: "broadcast",
                    kind: "message",
                    T: function() {
                        return ep
                    }
                }, {
                    no: 19,
                    name: "clips",
                    kind: "message",
                    T: function() {
                        return em
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.versions = R.Versions.internalBinaryRead(e, e.uint32(), n, o.versions);
                                break;
                            case 2:
                                o.inbox = j.internalBinaryRead(e, e.uint32(), n, o.inbox);
                                break;
                            case 3:
                                o.guilds = F.internalBinaryRead(e, e.uint32(), n, o.guilds);
                                break;
                            case 4:
                                o.userContent = Y.internalBinaryRead(e, e.uint32(), n, o.userContent);
                                break;
                            case 5:
                                o.voiceAndVideo = z.internalBinaryRead(e, e.uint32(), n, o.voiceAndVideo);
                                break;
                            case 6:
                                o.textAndImages = q.internalBinaryRead(e, e.uint32(), n, o.textAndImages);
                                break;
                            case 7:
                                o.notifications = Q.internalBinaryRead(e, e.uint32(), n, o.notifications);
                                break;
                            case 8:
                                o.privacy = J.internalBinaryRead(e, e.uint32(), n, o.privacy);
                                break;
                            case 9:
                                o.debug = Z.internalBinaryRead(e, e.uint32(), n, o.debug);
                                break;
                            case 10:
                                o.gameLibrary = $.internalBinaryRead(e, e.uint32(), n, o.gameLibrary);
                                break;
                            case 11:
                                o.status = ee.internalBinaryRead(e, e.uint32(), n, o.status);
                                break;
                            case 12:
                                o.localization = en.internalBinaryRead(e, e.uint32(), n, o.localization);
                                break;
                            case 13:
                                o.appearance = eo.internalBinaryRead(e, e.uint32(), n, o.appearance);
                                break;
                            case 14:
                                o.guildFolders = ea.internalBinaryRead(e, e.uint32(), n, o.guildFolders);
                                break;
                            case 15:
                                o.favorites = es.internalBinaryRead(e, e.uint32(), n, o.favorites);
                                break;
                            case 16:
                                o.audioContextSettings = ef.internalBinaryRead(e, e.uint32(), n, o.audioContextSettings);
                                break;
                            case 17:
                                o.communities = ed.internalBinaryRead(e, e.uint32(), n, o.communities);
                                break;
                            case 18:
                                o.broadcast = ep.internalBinaryRead(e, e.uint32(), n, o.broadcast);
                                break;
                            case 19:
                                o.clips = em.internalBinaryRead(e, e.uint32(), n, o.clips);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.versions && R.Versions.internalBinaryWrite(e.versions, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.inbox && j.internalBinaryWrite(e.inbox, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.guilds && F.internalBinaryWrite(e.guilds, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), e.userContent && Y.internalBinaryWrite(e.userContent, t.tag(4, A.WireType.LengthDelimited).fork(), n).join(), e.voiceAndVideo && z.internalBinaryWrite(e.voiceAndVideo, t.tag(5, A.WireType.LengthDelimited).fork(), n).join(), e.textAndImages && q.internalBinaryWrite(e.textAndImages, t.tag(6, A.WireType.LengthDelimited).fork(), n).join(), e.notifications && Q.internalBinaryWrite(e.notifications, t.tag(7, A.WireType.LengthDelimited).fork(), n).join(), e.privacy && J.internalBinaryWrite(e.privacy, t.tag(8, A.WireType.LengthDelimited).fork(), n).join(), e.debug && Z.internalBinaryWrite(e.debug, t.tag(9, A.WireType.LengthDelimited).fork(), n).join(), e.gameLibrary && $.internalBinaryWrite(e.gameLibrary, t.tag(10, A.WireType.LengthDelimited).fork(), n).join(), e.status && ee.internalBinaryWrite(e.status, t.tag(11, A.WireType.LengthDelimited).fork(), n).join(), e.localization && en.internalBinaryWrite(e.localization, t.tag(12, A.WireType.LengthDelimited).fork(), n).join(), e.appearance && eo.internalBinaryWrite(e.appearance, t.tag(13, A.WireType.LengthDelimited).fork(), n).join(), e.guildFolders && ea.internalBinaryWrite(e.guildFolders, t.tag(14, A.WireType.LengthDelimited).fork(), n).join(), e.favorites && es.internalBinaryWrite(e.favorites, t.tag(15, A.WireType.LengthDelimited).fork(), n).join(), e.audioContextSettings && ef.internalBinaryWrite(e.audioContextSettings, t.tag(16, A.WireType.LengthDelimited).fork(), n).join(), e.communities && ed.internalBinaryWrite(e.communities, t.tag(17, A.WireType.LengthDelimited).fork(), n).join(), e.broadcast && ep.internalBinaryWrite(e.broadcast, t.tag(18, A.WireType.LengthDelimited).fork(), n).join(), e.clips && em.internalBinaryWrite(e.clips, t.tag(19, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        j = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.InboxSettings", [{
                    no: 1,
                    name: "current_tab",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.InboxTab", E, "INBOX_TAB_"]
                    }
                }, {
                    no: 2,
                    name: "viewed_tutorial",
                    kind: "scalar",
                    T: 8
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        currentTab: 0,
                        viewedTutorial: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.currentTab = e.int32();
                                break;
                            case 2:
                                o.viewedTutorial = e.bool();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.currentTab && t.tag(1, A.WireType.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && t.tag(2, A.WireType.Varint).bool(e.viewedTutorial);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        F = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.AllGuildSettings", [{
                    no: 1,
                    name: "guilds",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return V
                        }
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        guilds: {}
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (1 === u) this.binaryReadMap1(o.guilds, e, n);
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = k(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = V.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : V.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = Object.keys(e.guilds)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            t.tag(1, A.WireType.LengthDelimited).fork().tag(1, A.WireType.Bit64).fixed64(s), t.tag(2, A.WireType.LengthDelimited).fork(), V.internalBinaryWrite(e.guilds[s], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    var l = n.writeUnknownFields;
                    return !1 !== l && (!0 == l ? A.UnknownFieldHandler.onWrite : l)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        V = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.GuildSettings", [{
                    no: 1,
                    name: "channels",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return x
                        }
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
                    T: function() {
                        return N.Timestamp
                    }
                }, {
                    no: 5,
                    name: "dismissed_guild_content",
                    kind: "scalar",
                    T: 12
                }, {
                    no: 6,
                    name: "join_sound",
                    kind: "message",
                    T: function() {
                        return eE
                    }
                }, {
                    no: 7,
                    name: "mobile_redesign_channel_list_settings",
                    kind: "message",
                    T: function() {
                        return er
                    }
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
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        channels: {},
                        hubProgress: 0,
                        guildOnboardingProgress: 0,
                        dismissedGuildContent: new Uint8Array(0),
                        disableRaidAlertPush: !1,
                        disableRaidAlertNag: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                this.binaryReadMap1(o.channels, e, n);
                                break;
                            case 2:
                                o.hubProgress = e.uint32();
                                break;
                            case 3:
                                o.guildOnboardingProgress = e.uint32();
                                break;
                            case 4:
                                o.guildRecentsDismissedAt = N.Timestamp.internalBinaryRead(e, e.uint32(), n, o.guildRecentsDismissedAt);
                                break;
                            case 5:
                                o.dismissedGuildContent = e.bytes();
                                break;
                            case 6:
                                o.joinSound = eE.internalBinaryRead(e, e.uint32(), n, o.joinSound);
                                break;
                            case 7:
                                o.mobileRedesignChannelListSettings = er.internalBinaryRead(e, e.uint32(), n, o.mobileRedesignChannelListSettings);
                                break;
                            case 8:
                                o.disableRaidAlertPush = e.bool();
                                break;
                            case 9:
                                o.disableRaidAlertNag = e.bool();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = k(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = x.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : x.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = Object.keys(e.channels)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            t.tag(1, A.WireType.LengthDelimited).fork().tag(1, A.WireType.Bit64).fixed64(s), t.tag(2, A.WireType.LengthDelimited).fork(), x.internalBinaryWrite(e.channels[s], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    0 !== e.hubProgress && t.tag(2, A.WireType.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && t.tag(3, A.WireType.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && N.Timestamp.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, A.WireType.LengthDelimited).fork(), n).join(), e.dismissedGuildContent.length && t.tag(5, A.WireType.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && eE.internalBinaryWrite(e.joinSound, t.tag(6, A.WireType.LengthDelimited).fork(), n).join(), e.mobileRedesignChannelListSettings && er.internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, A.WireType.LengthDelimited).fork(), n).join(), !1 !== e.disableRaidAlertPush && t.tag(8, A.WireType.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && t.tag(9, A.WireType.Varint).bool(e.disableRaidAlertNag);
                    var l = n.writeUnknownFields;
                    return !1 !== l && (!0 == l ? A.UnknownFieldHandler.onWrite : l)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        H = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.ChannelIconEmoji", [{
                    no: 1,
                    name: "id",
                    kind: "message",
                    T: function() {
                        return b.UInt64Value
                    }
                }, {
                    no: 2,
                    name: "name",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 3,
                    name: "color",
                    kind: "message",
                    T: function() {
                        return b.UInt64Value
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.id = b.UInt64Value.internalBinaryRead(e, e.uint32(), n, o.id);
                                break;
                            case 2:
                                o.name = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.name);
                                break;
                            case 3:
                                o.color = b.UInt64Value.internalBinaryRead(e, e.uint32(), n, o.color);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.id && b.UInt64Value.internalBinaryWrite(e.id, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.name && b.StringValue.internalBinaryWrite(e.name, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.color && b.UInt64Value.internalBinaryWrite(e.color, t.tag(3, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        x = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.ChannelSettings", [{
                    no: 1,
                    name: "collapsed_in_inbox",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 2,
                    name: "icon_emoji",
                    kind: "message",
                    T: function() {
                        return H
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        collapsedInInbox: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.collapsedInInbox = e.bool();
                                break;
                            case 2:
                                o.iconEmoji = H.internalBinaryRead(e, e.uint32(), n, o.iconEmoji);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    !1 !== e.collapsedInInbox && t.tag(1, A.WireType.Varint).bool(e.collapsedInInbox), e.iconEmoji && H.internalBinaryWrite(e.iconEmoji, t.tag(2, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        Y = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.UserContentSettings", [{
                    no: 1,
                    name: "dismissed_contents",
                    kind: "scalar",
                    T: 12
                }, {
                    no: 2,
                    name: "last_dismissed_outbound_promotion_start_date",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 3,
                    name: "premium_tier_0_modal_dismissed_at",
                    kind: "message",
                    T: function() {
                        return N.Timestamp
                    }
                }, {
                    no: 4,
                    name: "guild_onboarding_upsell_dismissed_at",
                    kind: "message",
                    T: function() {
                        return N.Timestamp
                    }
                }, {
                    no: 5,
                    name: "safety_user_sentiment_notice_dismissed_at",
                    kind: "message",
                    T: function() {
                        return N.Timestamp
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        dismissedContents: new Uint8Array(0)
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.dismissedContents = e.bytes();
                                break;
                            case 2:
                                o.lastDismissedOutboundPromotionStartDate = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.lastDismissedOutboundPromotionStartDate);
                                break;
                            case 3:
                                o.premiumTier0ModalDismissedAt = N.Timestamp.internalBinaryRead(e, e.uint32(), n, o.premiumTier0ModalDismissedAt);
                                break;
                            case 4:
                                o.guildOnboardingUpsellDismissedAt = N.Timestamp.internalBinaryRead(e, e.uint32(), n, o.guildOnboardingUpsellDismissedAt);
                                break;
                            case 5:
                                o.safetyUserSentimentNoticeDismissedAt = N.Timestamp.internalBinaryRead(e, e.uint32(), n, o.safetyUserSentimentNoticeDismissedAt);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.dismissedContents.length && t.tag(1, A.WireType.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && b.StringValue.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.premiumTier0ModalDismissedAt && N.Timestamp.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), e.guildOnboardingUpsellDismissedAt && N.Timestamp.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, t.tag(4, A.WireType.LengthDelimited).fork(), n).join(), e.safetyUserSentimentNoticeDismissedAt && N.Timestamp.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, t.tag(5, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        W = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.VideoFilterAsset", [{
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
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        id: "0",
                        assetHash: ""
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.id = e.fixed64().toString();
                                break;
                            case 2:
                                o.assetHash = e.string();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "0" !== e.id && t.tag(1, A.WireType.Bit64).fixed64(e.id), "" !== e.assetHash && t.tag(2, A.WireType.LengthDelimited).string(e.assetHash);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        K = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [{
                    no: 1,
                    name: "use_blur",
                    kind: "scalar",
                    T: 8
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        useBlur: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (1 === u) o.useBlur = e.bool();
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    !1 !== e.useBlur && t.tag(1, A.WireType.Varint).bool(e.useBlur);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        z = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.VoiceAndVideoSettings", [{
                    no: 1,
                    name: "blur",
                    kind: "message",
                    oneof: "videoBackgroundFilterDesktop",
                    T: function() {
                        return K
                    }
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
                    T: function() {
                        return W
                    }
                }, {
                    no: 5,
                    name: "always_preview_video",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 6,
                    name: "afk_timeout",
                    kind: "message",
                    T: function() {
                        return b.UInt32Value
                    }
                }, {
                    no: 7,
                    name: "stream_notifications_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 8,
                    name: "native_phone_integration_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 9,
                    name: "soundboard_settings",
                    kind: "message",
                    T: function() {
                        return e_
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        videoBackgroundFilterDesktop: {
                            oneofKind: void 0
                        }
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.videoBackgroundFilterDesktop = {
                                    oneofKind: "blur",
                                    blur: K.internalBinaryRead(e, e.uint32(), n, o.videoBackgroundFilterDesktop.blur)
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
                                    customAsset: W.internalBinaryRead(e, e.uint32(), n, o.videoBackgroundFilterDesktop.customAsset)
                                };
                                break;
                            case 5:
                                o.alwaysPreviewVideo = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.alwaysPreviewVideo);
                                break;
                            case 6:
                                o.afkTimeout = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.afkTimeout);
                                break;
                            case 7:
                                o.streamNotificationsEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.streamNotificationsEnabled);
                                break;
                            case 8:
                                o.nativePhoneIntegrationEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.nativePhoneIntegrationEnabled);
                                break;
                            case 9:
                                o.soundboardSettings = e_.internalBinaryRead(e, e.uint32(), n, o.soundboardSettings);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "blur" === e.videoBackgroundFilterDesktop.oneofKind && K.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), "presetOption" === e.videoBackgroundFilterDesktop.oneofKind && t.tag(2, A.WireType.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), "customAsset" === e.videoBackgroundFilterDesktop.oneofKind && W.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), e.alwaysPreviewVideo && b.BoolValue.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, A.WireType.LengthDelimited).fork(), n).join(), e.afkTimeout && b.UInt32Value.internalBinaryWrite(e.afkTimeout, t.tag(6, A.WireType.LengthDelimited).fork(), n).join(), e.streamNotificationsEnabled && b.BoolValue.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, A.WireType.LengthDelimited).fork(), n).join(), e.nativePhoneIntegrationEnabled && b.BoolValue.internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, A.WireType.LengthDelimited).fork(), n).join(), e.soundboardSettings && e_.internalBinaryWrite(e.soundboardSettings, t.tag(9, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        X = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.ExplicitContentSettings", [{
                    no: 1,
                    name: "explicit_content_guilds",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.ExplicitContentRedaction", h]
                    }
                }, {
                    no: 2,
                    name: "explicit_content_friend_dm",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.ExplicitContentRedaction", h]
                    }
                }, {
                    no: 3,
                    name: "explicit_content_non_friend_dm",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.ExplicitContentRedaction", h]
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        explicitContentGuilds: 0,
                        explicitContentFriendDm: 0,
                        explicitContentNonFriendDm: 0
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
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
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.explicitContentGuilds && t.tag(1, A.WireType.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && t.tag(2, A.WireType.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && t.tag(3, A.WireType.Varint).int32(e.explicitContentNonFriendDm);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        q = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.TextAndImagesSettings", [{
                    no: 1,
                    name: "diversity_surrogate",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 2,
                    name: "use_rich_chat_input",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 3,
                    name: "use_thread_sidebar",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 4,
                    name: "render_spoilers",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
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
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 8,
                    name: "show_command_suggestions",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 9,
                    name: "inline_attachment_media",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 10,
                    name: "inline_embed_media",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 11,
                    name: "gif_auto_play",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 12,
                    name: "render_embeds",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 13,
                    name: "render_reactions",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 14,
                    name: "animate_emoji",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 15,
                    name: "animate_stickers",
                    kind: "message",
                    T: function() {
                        return b.UInt32Value
                    }
                }, {
                    no: 16,
                    name: "enable_tts_command",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 17,
                    name: "message_display_compact",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 19,
                    name: "explicit_content_filter",
                    kind: "message",
                    T: function() {
                        return b.UInt32Value
                    }
                }, {
                    no: 20,
                    name: "view_nsfw_guilds",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 21,
                    name: "convert_emoticons",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 22,
                    name: "expression_suggestions_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 23,
                    name: "view_nsfw_commands",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 24,
                    name: "use_legacy_chat_input",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
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
                    T: function() {
                        return b.UInt32Value
                    }
                }, {
                    no: 27,
                    name: "dm_spam_filter_v2",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.DmSpamFilterV2", O]
                    }
                }, {
                    no: 28,
                    name: "include_stickers_in_autocomplete",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 29,
                    name: "explicit_content_settings",
                    kind: "message",
                    T: function() {
                        return X
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        emojiPickerCollapsedSections: [],
                        stickerPickerCollapsedSections: [],
                        soundboardPickerCollapsedSections: [],
                        dmSpamFilterV2: 0
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.diversitySurrogate = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.diversitySurrogate);
                                break;
                            case 2:
                                o.useRichChatInput = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.useRichChatInput);
                                break;
                            case 3:
                                o.useThreadSidebar = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.useThreadSidebar);
                                break;
                            case 4:
                                o.renderSpoilers = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.renderSpoilers);
                                break;
                            case 5:
                                o.emojiPickerCollapsedSections.push(e.string());
                                break;
                            case 6:
                                o.stickerPickerCollapsedSections.push(e.string());
                                break;
                            case 7:
                                o.viewImageDescriptions = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.viewImageDescriptions);
                                break;
                            case 8:
                                o.showCommandSuggestions = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.showCommandSuggestions);
                                break;
                            case 9:
                                o.inlineAttachmentMedia = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.inlineAttachmentMedia);
                                break;
                            case 10:
                                o.inlineEmbedMedia = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.inlineEmbedMedia);
                                break;
                            case 11:
                                o.gifAutoPlay = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.gifAutoPlay);
                                break;
                            case 12:
                                o.renderEmbeds = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.renderEmbeds);
                                break;
                            case 13:
                                o.renderReactions = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.renderReactions);
                                break;
                            case 14:
                                o.animateEmoji = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.animateEmoji);
                                break;
                            case 15:
                                o.animateStickers = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.animateStickers);
                                break;
                            case 16:
                                o.enableTtsCommand = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.enableTtsCommand);
                                break;
                            case 17:
                                o.messageDisplayCompact = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.messageDisplayCompact);
                                break;
                            case 19:
                                o.explicitContentFilter = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.explicitContentFilter);
                                break;
                            case 20:
                                o.viewNsfwGuilds = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.viewNsfwGuilds);
                                break;
                            case 21:
                                o.convertEmoticons = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.convertEmoticons);
                                break;
                            case 22:
                                o.expressionSuggestionsEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.expressionSuggestionsEnabled);
                                break;
                            case 23:
                                o.viewNsfwCommands = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.viewNsfwCommands);
                                break;
                            case 24:
                                o.useLegacyChatInput = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.useLegacyChatInput);
                                break;
                            case 25:
                                o.soundboardPickerCollapsedSections.push(e.string());
                                break;
                            case 26:
                                o.dmSpamFilter = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.dmSpamFilter);
                                break;
                            case 27:
                                o.dmSpamFilterV2 = e.int32();
                                break;
                            case 28:
                                o.includeStickersInAutocomplete = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.includeStickersInAutocomplete);
                                break;
                            case 29:
                                o.explicitContentSettings = X.internalBinaryRead(e, e.uint32(), n, o.explicitContentSettings);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.diversitySurrogate && b.StringValue.internalBinaryWrite(e.diversitySurrogate, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.useRichChatInput && b.BoolValue.internalBinaryWrite(e.useRichChatInput, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.useThreadSidebar && b.BoolValue.internalBinaryWrite(e.useThreadSidebar, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), e.renderSpoilers && b.StringValue.internalBinaryWrite(e.renderSpoilers, t.tag(4, A.WireType.LengthDelimited).fork(), n).join();
                    for (var r = 0; r < e.emojiPickerCollapsedSections.length; r++) t.tag(5, A.WireType.LengthDelimited).string(e.emojiPickerCollapsedSections[r]);
                    for (var o = 0; o < e.stickerPickerCollapsedSections.length; o++) t.tag(6, A.WireType.LengthDelimited).string(e.stickerPickerCollapsedSections[o]);
                    e.viewImageDescriptions && b.BoolValue.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, A.WireType.LengthDelimited).fork(), n).join(), e.showCommandSuggestions && b.BoolValue.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, A.WireType.LengthDelimited).fork(), n).join(), e.inlineAttachmentMedia && b.BoolValue.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, A.WireType.LengthDelimited).fork(), n).join(), e.inlineEmbedMedia && b.BoolValue.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, A.WireType.LengthDelimited).fork(), n).join(), e.gifAutoPlay && b.BoolValue.internalBinaryWrite(e.gifAutoPlay, t.tag(11, A.WireType.LengthDelimited).fork(), n).join(), e.renderEmbeds && b.BoolValue.internalBinaryWrite(e.renderEmbeds, t.tag(12, A.WireType.LengthDelimited).fork(), n).join(), e.renderReactions && b.BoolValue.internalBinaryWrite(e.renderReactions, t.tag(13, A.WireType.LengthDelimited).fork(), n).join(), e.animateEmoji && b.BoolValue.internalBinaryWrite(e.animateEmoji, t.tag(14, A.WireType.LengthDelimited).fork(), n).join(), e.animateStickers && b.UInt32Value.internalBinaryWrite(e.animateStickers, t.tag(15, A.WireType.LengthDelimited).fork(), n).join(), e.enableTtsCommand && b.BoolValue.internalBinaryWrite(e.enableTtsCommand, t.tag(16, A.WireType.LengthDelimited).fork(), n).join(), e.messageDisplayCompact && b.BoolValue.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, A.WireType.LengthDelimited).fork(), n).join(), e.explicitContentFilter && b.UInt32Value.internalBinaryWrite(e.explicitContentFilter, t.tag(19, A.WireType.LengthDelimited).fork(), n).join(), e.viewNsfwGuilds && b.BoolValue.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, A.WireType.LengthDelimited).fork(), n).join(), e.convertEmoticons && b.BoolValue.internalBinaryWrite(e.convertEmoticons, t.tag(21, A.WireType.LengthDelimited).fork(), n).join(), e.expressionSuggestionsEnabled && b.BoolValue.internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, A.WireType.LengthDelimited).fork(), n).join(), e.viewNsfwCommands && b.BoolValue.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, A.WireType.LengthDelimited).fork(), n).join(), e.useLegacyChatInput && b.BoolValue.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, A.WireType.LengthDelimited).fork(), n).join();
                    for (var i = 0; i < e.soundboardPickerCollapsedSections.length; i++) t.tag(25, A.WireType.LengthDelimited).string(e.soundboardPickerCollapsedSections[i]);
                    e.dmSpamFilter && b.UInt32Value.internalBinaryWrite(e.dmSpamFilter, t.tag(26, A.WireType.LengthDelimited).fork(), n).join(), 0 !== e.dmSpamFilterV2 && t.tag(27, A.WireType.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && b.BoolValue.internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, A.WireType.LengthDelimited).fork(), n).join(), e.explicitContentSettings && X.internalBinaryWrite(e.explicitContentSettings, t.tag(29, A.WireType.LengthDelimited).fork(), n).join();
                    var a = n.writeUnknownFields;
                    return !1 !== a && (!0 == a ? A.UnknownFieldHandler.onWrite : a)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        Q = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.NotificationSettings", [{
                    no: 1,
                    name: "show_in_app_notifications",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 2,
                    name: "notify_friends_on_go_live",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 3,
                    name: "notification_center_acked_before_id",
                    kind: "scalar",
                    T: 6
                }, {
                    no: 4,
                    name: "enable_burst_reaction_notifications",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 5,
                    name: "quiet_mode",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 6,
                    name: "focus_mode_expires_at_ms",
                    kind: "scalar",
                    T: 6
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        notificationCenterAckedBeforeId: "0",
                        focusModeExpiresAtMs: "0"
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.showInAppNotifications = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.showInAppNotifications);
                                break;
                            case 2:
                                o.notifyFriendsOnGoLive = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.notifyFriendsOnGoLive);
                                break;
                            case 3:
                                o.notificationCenterAckedBeforeId = e.fixed64().toString();
                                break;
                            case 4:
                                o.enableBurstReactionNotifications = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.enableBurstReactionNotifications);
                                break;
                            case 5:
                                o.quietMode = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.quietMode);
                                break;
                            case 6:
                                o.focusModeExpiresAtMs = e.fixed64().toString();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.showInAppNotifications && b.BoolValue.internalBinaryWrite(e.showInAppNotifications, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.notifyFriendsOnGoLive && b.BoolValue.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), "0" !== e.notificationCenterAckedBeforeId && t.tag(3, A.WireType.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && b.BoolValue.internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, A.WireType.LengthDelimited).fork(), n).join(), e.quietMode && b.BoolValue.internalBinaryWrite(e.quietMode, t.tag(5, A.WireType.LengthDelimited).fork(), n).join(), "0" !== e.focusModeExpiresAtMs && t.tag(6, A.WireType.Bit64).fixed64(e.focusModeExpiresAtMs);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        J = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.PrivacySettings", [{
                    no: 1,
                    name: "allow_activity_party_privacy_friends",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 2,
                    name: "allow_activity_party_privacy_voice_channel",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
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
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 9,
                    name: "passwordless",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 10,
                    name: "contact_sync_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 11,
                    name: "friend_source_flags",
                    kind: "message",
                    T: function() {
                        return b.UInt32Value
                    }
                }, {
                    no: 12,
                    name: "friend_discovery_flags",
                    kind: "message",
                    T: function() {
                        return b.UInt32Value
                    }
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
                    T: function() {
                        return ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", T]
                    }
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
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 18,
                    name: "drops_opted_out",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 19,
                    name: "non_spam_retraining_opt_in",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 20,
                    name: "family_center_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 21,
                    name: "family_center_enabled_v2",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 22,
                    name: "hide_legacy_username",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 23,
                    name: "inappropriate_conversation_warnings",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 24,
                    name: "recent_games_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        restrictedGuildIds: [],
                        defaultGuildsRestricted: !1,
                        allowAccessibilityDetection: !1,
                        activityRestrictedGuildIds: [],
                        defaultGuildsActivityRestricted: 0,
                        activityJoiningRestrictedGuildIds: [],
                        messageRequestRestrictedGuildIds: []
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.allowActivityPartyPrivacyFriends = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.allowActivityPartyPrivacyFriends);
                                break;
                            case 2:
                                o.allowActivityPartyPrivacyVoiceChannel = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.allowActivityPartyPrivacyVoiceChannel);
                                break;
                            case 3:
                                if (s === A.WireType.LengthDelimited)
                                    for (var l = e.int32() + e.pos; e.pos < l;) o.restrictedGuildIds.push(e.fixed64().toString());
                                else o.restrictedGuildIds.push(e.fixed64().toString());
                                break;
                            case 4:
                                o.defaultGuildsRestricted = e.bool();
                                break;
                            case 7:
                                o.allowAccessibilityDetection = e.bool();
                                break;
                            case 8:
                                o.detectPlatformAccounts = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.detectPlatformAccounts);
                                break;
                            case 9:
                                o.passwordless = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.passwordless);
                                break;
                            case 10:
                                o.contactSyncEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.contactSyncEnabled);
                                break;
                            case 11:
                                o.friendSourceFlags = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.friendSourceFlags);
                                break;
                            case 12:
                                o.friendDiscoveryFlags = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.friendDiscoveryFlags);
                                break;
                            case 13:
                                if (s === A.WireType.LengthDelimited)
                                    for (var c = e.int32() + e.pos; e.pos < c;) o.activityRestrictedGuildIds.push(e.fixed64().toString());
                                else o.activityRestrictedGuildIds.push(e.fixed64().toString());
                                break;
                            case 14:
                                o.defaultGuildsActivityRestricted = e.int32();
                                break;
                            case 15:
                                if (s === A.WireType.LengthDelimited)
                                    for (var f = e.int32() + e.pos; e.pos < f;) o.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                                else o.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                                break;
                            case 16:
                                if (s === A.WireType.LengthDelimited)
                                    for (var d = e.int32() + e.pos; e.pos < d;) o.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                                else o.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                                break;
                            case 17:
                                o.defaultMessageRequestRestricted = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.defaultMessageRequestRestricted);
                                break;
                            case 18:
                                o.dropsOptedOut = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.dropsOptedOut);
                                break;
                            case 19:
                                o.nonSpamRetrainingOptIn = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.nonSpamRetrainingOptIn);
                                break;
                            case 20:
                                o.familyCenterEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.familyCenterEnabled);
                                break;
                            case 21:
                                o.familyCenterEnabledV2 = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.familyCenterEnabledV2);
                                break;
                            case 22:
                                o.hideLegacyUsername = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.hideLegacyUsername);
                                break;
                            case 23:
                                o.inappropriateConversationWarnings = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.inappropriateConversationWarnings);
                                break;
                            case 24:
                                o.recentGamesEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.recentGamesEnabled);
                                break;
                            default:
                                var _ = n.readUnknownField;
                                if ("throw" === _) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var E = e.skip(s);
                                !1 !== _ && (!0 === _ ? A.UnknownFieldHandler.onRead : _)(this.typeName, o, u, s, E)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    if (e.allowActivityPartyPrivacyFriends && b.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.allowActivityPartyPrivacyVoiceChannel && b.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.restrictedGuildIds.length) {
                        t.tag(3, A.WireType.LengthDelimited).fork();
                        for (var r = 0; r < e.restrictedGuildIds.length; r++) t.fixed64(e.restrictedGuildIds[r]);
                        t.join()
                    }
                    if (!1 !== e.defaultGuildsRestricted && t.tag(4, A.WireType.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && t.tag(7, A.WireType.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && b.BoolValue.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, A.WireType.LengthDelimited).fork(), n).join(), e.passwordless && b.BoolValue.internalBinaryWrite(e.passwordless, t.tag(9, A.WireType.LengthDelimited).fork(), n).join(), e.contactSyncEnabled && b.BoolValue.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, A.WireType.LengthDelimited).fork(), n).join(), e.friendSourceFlags && b.UInt32Value.internalBinaryWrite(e.friendSourceFlags, t.tag(11, A.WireType.LengthDelimited).fork(), n).join(), e.friendDiscoveryFlags && b.UInt32Value.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, A.WireType.LengthDelimited).fork(), n).join(), e.activityRestrictedGuildIds.length) {
                        t.tag(13, A.WireType.LengthDelimited).fork();
                        for (var o = 0; o < e.activityRestrictedGuildIds.length; o++) t.fixed64(e.activityRestrictedGuildIds[o]);
                        t.join()
                    }
                    if (0 !== e.defaultGuildsActivityRestricted && t.tag(14, A.WireType.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
                        t.tag(15, A.WireType.LengthDelimited).fork();
                        for (var i = 0; i < e.activityJoiningRestrictedGuildIds.length; i++) t.fixed64(e.activityJoiningRestrictedGuildIds[i]);
                        t.join()
                    }
                    if (e.messageRequestRestrictedGuildIds.length) {
                        t.tag(16, A.WireType.LengthDelimited).fork();
                        for (var a = 0; a < e.messageRequestRestrictedGuildIds.length; a++) t.fixed64(e.messageRequestRestrictedGuildIds[a]);
                        t.join()
                    }
                    e.defaultMessageRequestRestricted && b.BoolValue.internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, A.WireType.LengthDelimited).fork(), n).join(), e.dropsOptedOut && b.BoolValue.internalBinaryWrite(e.dropsOptedOut, t.tag(18, A.WireType.LengthDelimited).fork(), n).join(), e.nonSpamRetrainingOptIn && b.BoolValue.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, A.WireType.LengthDelimited).fork(), n).join(), e.familyCenterEnabled && b.BoolValue.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, A.WireType.LengthDelimited).fork(), n).join(), e.familyCenterEnabledV2 && b.BoolValue.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, A.WireType.LengthDelimited).fork(), n).join(), e.hideLegacyUsername && b.BoolValue.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, A.WireType.LengthDelimited).fork(), n).join(), e.inappropriateConversationWarnings && b.BoolValue.internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, A.WireType.LengthDelimited).fork(), n).join(), e.recentGamesEnabled && b.BoolValue.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, A.WireType.LengthDelimited).fork(), n).join();
                    var u = n.writeUnknownFields;
                    return !1 !== u && (!0 == u ? A.UnknownFieldHandler.onWrite : u)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        Z = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.DebugSettings", [{
                    no: 1,
                    name: "rtc_panel_show_voice_states",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (1 === u) o.rtcPanelShowVoiceStates = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.rtcPanelShowVoiceStates);
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.rtcPanelShowVoiceStates && b.BoolValue.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        $ = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.GameLibrarySettings", [{
                    no: 1,
                    name: "install_shortcut_desktop",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 2,
                    name: "install_shortcut_start_menu",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 3,
                    name: "disable_games_tab",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.installShortcutDesktop = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.installShortcutDesktop);
                                break;
                            case 2:
                                o.installShortcutStartMenu = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.installShortcutStartMenu);
                                break;
                            case 3:
                                o.disableGamesTab = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.disableGamesTab);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.installShortcutDesktop && b.BoolValue.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.installShortcutStartMenu && b.BoolValue.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.disableGamesTab && b.BoolValue.internalBinaryWrite(e.disableGamesTab, t.tag(3, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ee = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.StatusSettings", [{
                    no: 1,
                    name: "status",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 2,
                    name: "custom_status",
                    kind: "message",
                    T: function() {
                        return et
                    }
                }, {
                    no: 3,
                    name: "show_current_game",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }, {
                    no: 4,
                    name: "status_expires_at_ms",
                    kind: "scalar",
                    T: 6
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        statusExpiresAtMs: "0"
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.status = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.status);
                                break;
                            case 2:
                                o.customStatus = et.internalBinaryRead(e, e.uint32(), n, o.customStatus);
                                break;
                            case 3:
                                o.showCurrentGame = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.showCurrentGame);
                                break;
                            case 4:
                                o.statusExpiresAtMs = e.fixed64().toString();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.status && b.StringValue.internalBinaryWrite(e.status, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.customStatus && et.internalBinaryWrite(e.customStatus, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.showCurrentGame && b.BoolValue.internalBinaryWrite(e.showCurrentGame, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), "0" !== e.statusExpiresAtMs && t.tag(4, A.WireType.Bit64).fixed64(e.statusExpiresAtMs);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        et = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.CustomStatus", [{
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
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        text: "",
                        emojiId: "0",
                        emojiName: "",
                        expiresAtMs: "0"
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
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
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "" !== e.text && t.tag(1, A.WireType.LengthDelimited).string(e.text), "0" !== e.emojiId && t.tag(2, A.WireType.Bit64).fixed64(e.emojiId), "" !== e.emojiName && t.tag(3, A.WireType.LengthDelimited).string(e.emojiName), "0" !== e.expiresAtMs && t.tag(4, A.WireType.Bit64).fixed64(e.expiresAtMs);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        en = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.LocalizationSettings", [{
                    no: 1,
                    name: "locale",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 2,
                    name: "timezone_offset",
                    kind: "message",
                    T: function() {
                        return b.Int32Value
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.locale = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.locale);
                                break;
                            case 2:
                                o.timezoneOffset = b.Int32Value.internalBinaryRead(e, e.uint32(), n, o.timezoneOffset);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.locale && b.StringValue.internalBinaryWrite(e.locale, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.timezoneOffset && b.Int32Value.internalBinaryWrite(e.timezoneOffset, t.tag(2, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        er = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.ChannelListSettings", [{
                    no: 1,
                    name: "layout",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 2,
                    name: "message_previews",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.layout = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.layout);
                                break;
                            case 2:
                                o.messagePreviews = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.messagePreviews);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.layout && b.StringValue.internalBinaryWrite(e.layout, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.messagePreviews && b.StringValue.internalBinaryWrite(e.messagePreviews, t.tag(2, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        eo = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.AppearanceSettings", [{
                    no: 1,
                    name: "theme",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.Theme", S]
                    }
                }, {
                    no: 2,
                    name: "developer_mode",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 3,
                    name: "client_theme_settings",
                    kind: "message",
                    T: function() {
                        return ei
                    }
                }, {
                    no: 4,
                    name: "mobile_redesign_disabled",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 6,
                    name: "channel_list_layout",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 7,
                    name: "message_previews",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 8,
                    name: "search_result_exact_count_enabled",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        theme: 0,
                        developerMode: !1,
                        mobileRedesignDisabled: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.theme = e.int32();
                                break;
                            case 2:
                                o.developerMode = e.bool();
                                break;
                            case 3:
                                o.clientThemeSettings = ei.internalBinaryRead(e, e.uint32(), n, o.clientThemeSettings);
                                break;
                            case 4:
                                o.mobileRedesignDisabled = e.bool();
                                break;
                            case 6:
                                o.channelListLayout = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.channelListLayout);
                                break;
                            case 7:
                                o.messagePreviews = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.messagePreviews);
                                break;
                            case 8:
                                o.searchResultExactCountEnabled = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.searchResultExactCountEnabled);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.theme && t.tag(1, A.WireType.Varint).int32(e.theme), !1 !== e.developerMode && t.tag(2, A.WireType.Varint).bool(e.developerMode), e.clientThemeSettings && ei.internalBinaryWrite(e.clientThemeSettings, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), !1 !== e.mobileRedesignDisabled && t.tag(4, A.WireType.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && b.StringValue.internalBinaryWrite(e.channelListLayout, t.tag(6, A.WireType.LengthDelimited).fork(), n).join(), e.messagePreviews && b.StringValue.internalBinaryWrite(e.messagePreviews, t.tag(7, A.WireType.LengthDelimited).fork(), n).join(), e.searchResultExactCountEnabled && b.BoolValue.internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ei = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.ClientThemeSettings", [{
                    no: 2,
                    name: "background_gradient_preset_id",
                    kind: "message",
                    T: function() {
                        return b.UInt32Value
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (2 === u) o.backgroundGradientPresetId = b.UInt32Value.internalBinaryRead(e, e.uint32(), n, o.backgroundGradientPresetId);
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.backgroundGradientPresetId && b.UInt32Value.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ea = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.GuildFolders", [{
                    no: 1,
                    name: "folders",
                    kind: "message",
                    repeat: 1,
                    T: function() {
                        return eu
                    }
                }, {
                    no: 2,
                    name: "guild_positions",
                    kind: "scalar",
                    repeat: 1,
                    T: 6
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        folders: [],
                        guildPositions: []
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.folders.push(eu.internalBinaryRead(e, e.uint32(), n));
                                break;
                            case 2:
                                if (s === A.WireType.LengthDelimited)
                                    for (var l = e.int32() + e.pos; e.pos < l;) o.guildPositions.push(e.fixed64().toString());
                                else o.guildPositions.push(e.fixed64().toString());
                                break;
                            default:
                                var c = n.readUnknownField;
                                if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var f = e.skip(s);
                                !1 !== c && (!0 === c ? A.UnknownFieldHandler.onRead : c)(this.typeName, o, u, s, f)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    for (var r = 0; r < e.folders.length; r++) eu.internalBinaryWrite(e.folders[r], t.tag(1, A.WireType.LengthDelimited).fork(), n).join();
                    if (e.guildPositions.length) {
                        t.tag(2, A.WireType.LengthDelimited).fork();
                        for (var o = 0; o < e.guildPositions.length; o++) t.fixed64(e.guildPositions[o]);
                        t.join()
                    }
                    var i = n.writeUnknownFields;
                    return !1 !== i && (!0 == i ? A.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        eu = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.GuildFolder", [{
                    no: 1,
                    name: "guild_ids",
                    kind: "scalar",
                    repeat: 1,
                    T: 6
                }, {
                    no: 2,
                    name: "id",
                    kind: "message",
                    T: function() {
                        return b.Int64Value
                    }
                }, {
                    no: 3,
                    name: "name",
                    kind: "message",
                    T: function() {
                        return b.StringValue
                    }
                }, {
                    no: 4,
                    name: "color",
                    kind: "message",
                    T: function() {
                        return b.UInt64Value
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        guildIds: []
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                if (s === A.WireType.LengthDelimited)
                                    for (var l = e.int32() + e.pos; e.pos < l;) o.guildIds.push(e.fixed64().toString());
                                else o.guildIds.push(e.fixed64().toString());
                                break;
                            case 2:
                                o.id = b.Int64Value.internalBinaryRead(e, e.uint32(), n, o.id);
                                break;
                            case 3:
                                o.name = b.StringValue.internalBinaryRead(e, e.uint32(), n, o.name);
                                break;
                            case 4:
                                o.color = b.UInt64Value.internalBinaryRead(e, e.uint32(), n, o.color);
                                break;
                            default:
                                var c = n.readUnknownField;
                                if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var f = e.skip(s);
                                !1 !== c && (!0 === c ? A.UnknownFieldHandler.onRead : c)(this.typeName, o, u, s, f)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    if (e.guildIds.length) {
                        t.tag(1, A.WireType.LengthDelimited).fork();
                        for (var r = 0; r < e.guildIds.length; r++) t.fixed64(e.guildIds[r]);
                        t.join()
                    }
                    e.id && b.Int64Value.internalBinaryWrite(e.id, t.tag(2, A.WireType.LengthDelimited).fork(), n).join(), e.name && b.StringValue.internalBinaryWrite(e.name, t.tag(3, A.WireType.LengthDelimited).fork(), n).join(), e.color && b.UInt64Value.internalBinaryWrite(e.color, t.tag(4, A.WireType.LengthDelimited).fork(), n).join();
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? A.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        es = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.Favorites", [{
                    no: 1,
                    name: "favorite_channels",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return el
                        }
                    }
                }, {
                    no: 2,
                    name: "muted",
                    kind: "scalar",
                    T: 8
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        favoriteChannels: {},
                        muted: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                this.binaryReadMap1(o.favoriteChannels, e, n);
                                break;
                            case 2:
                                o.muted = e.bool();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = k(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = el.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : el.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = Object.keys(e.favoriteChannels)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            t.tag(1, A.WireType.LengthDelimited).fork().tag(1, A.WireType.Bit64).fixed64(s), t.tag(2, A.WireType.LengthDelimited).fork(), el.internalBinaryWrite(e.favoriteChannels[s], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }!1 !== e.muted && t.tag(2, A.WireType.Varint).bool(e.muted);
                    var l = n.writeUnknownFields;
                    return !1 !== l && (!0 == l ? A.UnknownFieldHandler.onWrite : l)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        el = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.FavoriteChannel", [{
                    no: 1,
                    name: "nickname",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "type",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.FavoriteChannelType", g]
                    }
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
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        nickname: "",
                        type: 0,
                        position: 0,
                        parentId: "0"
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
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
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "" !== e.nickname && t.tag(1, A.WireType.LengthDelimited).string(e.nickname), 0 !== e.type && t.tag(2, A.WireType.Varint).int32(e.type), 0 !== e.position && t.tag(3, A.WireType.Varint).uint32(e.position), "0" !== e.parentId && t.tag(4, A.WireType.Bit64).fixed64(e.parentId);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ec = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.AudioContextSetting", [{
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
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        muted: !1,
                        volume: 0,
                        modifiedAt: "0",
                        soundboardMuted: !1
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
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
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    !1 !== e.muted && t.tag(1, A.WireType.Varint).bool(e.muted), 0 !== e.volume && t.tag(2, A.WireType.Bit32).float(e.volume), "0" !== e.modifiedAt && t.tag(3, A.WireType.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && t.tag(4, A.WireType.Varint).bool(e.soundboardMuted);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ef = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.AudioSettings", [{
                    no: 1,
                    name: "user",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return ec
                        }
                    }
                }, {
                    no: 2,
                    name: "stream",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return ec
                        }
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        user: {},
                        stream: {}
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                this.binaryReadMap1(o.user, e, n);
                                break;
                            case 2:
                                this.binaryReadMap2(o.stream, e, n);
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = k(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = ec.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : ec.create()
                }
            }, {
                key: "binaryReadMap2",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = k(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = ec.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : ec.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = Object.keys(e.user)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            t.tag(1, A.WireType.LengthDelimited).fork().tag(1, A.WireType.Bit64).fixed64(s), t.tag(2, A.WireType.LengthDelimited).fork(), ec.internalBinaryWrite(e.user[s], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    var l = !0,
                        c = !1,
                        f = void 0;
                    try {
                        for (var d, _ = Object.keys(e.stream)[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                            var E = d.value;
                            t.tag(2, A.WireType.LengthDelimited).fork().tag(1, A.WireType.Bit64).fixed64(E), t.tag(2, A.WireType.LengthDelimited).fork(), ec.internalBinaryWrite(e.stream[E], t, n), t.join().join()
                        }
                    } catch (e) {
                        c = !0, f = e
                    } finally {
                        try {
                            !l && null != _.return && _.return()
                        } finally {
                            if (c) throw f
                        }
                    }
                    var p = n.writeUnknownFields;
                    return !1 !== p && (!0 == p ? A.UnknownFieldHandler.onWrite : p)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ed = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.CommunitiesSettings", [{
                    no: 1,
                    name: "disable_home_auto_nav",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (1 === u) o.disableHomeAutoNav = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.disableHomeAutoNav);
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.disableHomeAutoNav && b.BoolValue.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        e_ = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.SoundboardSettings", [{
                    no: 1,
                    name: "volume",
                    kind: "scalar",
                    T: 2
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        volume: 0
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (1 === u) o.volume = e.float();
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.volume && t.tag(1, A.WireType.Bit32).float(e.volume);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        eE = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.CustomCallSound", [{
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
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        soundId: "0",
                        guildId: "0"
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.soundId = e.fixed64().toString();
                                break;
                            case 2:
                                o.guildId = e.fixed64().toString();
                                break;
                            default:
                                var l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var c = e.skip(s);
                                !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "0" !== e.soundId && t.tag(1, A.WireType.Bit64).fixed64(e.soundId), "0" !== e.guildId && t.tag(2, A.WireType.Bit64).fixed64(e.guildId);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        ep = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.BroadcastSettings", [{
                    no: 1,
                    name: "allow_friends",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
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
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        allowedGuildIds: [],
                        allowedUserIds: []
                    };
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        switch (u) {
                            case 1:
                                o.allowFriends = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.allowFriends);
                                break;
                            case 2:
                                if (s === A.WireType.LengthDelimited)
                                    for (var l = e.int32() + e.pos; e.pos < l;) o.allowedGuildIds.push(e.fixed64().toString());
                                else o.allowedGuildIds.push(e.fixed64().toString());
                                break;
                            case 3:
                                if (s === A.WireType.LengthDelimited)
                                    for (var c = e.int32() + e.pos; e.pos < c;) o.allowedUserIds.push(e.fixed64().toString());
                                else o.allowedUserIds.push(e.fixed64().toString());
                                break;
                            case 4:
                                o.autoBroadcast = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.autoBroadcast);
                                break;
                            default:
                                var f = n.readUnknownField;
                                if ("throw" === f) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                                var d = e.skip(s);
                                !1 !== f && (!0 === f ? A.UnknownFieldHandler.onRead : f)(this.typeName, o, u, s, d)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    if (e.allowFriends && b.BoolValue.internalBinaryWrite(e.allowFriends, t.tag(1, A.WireType.LengthDelimited).fork(), n).join(), e.allowedGuildIds.length) {
                        t.tag(2, A.WireType.LengthDelimited).fork();
                        for (var r = 0; r < e.allowedGuildIds.length; r++) t.fixed64(e.allowedGuildIds[r]);
                        t.join()
                    }
                    if (e.allowedUserIds.length) {
                        t.tag(3, A.WireType.LengthDelimited).fork();
                        for (var o = 0; o < e.allowedUserIds.length; o++) t.fixed64(e.allowedUserIds[o]);
                        t.join()
                    }
                    e.autoBroadcast && b.BoolValue.internalBinaryWrite(e.autoBroadcast, t.tag(4, A.WireType.LengthDelimited).fork(), n).join();
                    var i = n.writeUnknownFields;
                    return !1 !== i && (!0 == i ? A.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType)),
        em = new(function(e) {
            U(n, e);
            var t = G(n);

            function n() {
                return P(this, n), t.call(this, "discord_protos.discord_users.v1.ClipsSettings", [{
                    no: 1,
                    name: "allow_voice_recording",
                    kind: "message",
                    T: function() {
                        return b.BoolValue
                    }
                }])
            }
            return L(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, A.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, A.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), i = e.pos + t; e.pos < i;) {
                        var a = k(e.tag(), 2),
                            u = a[0],
                            s = a[1];
                        if (1 === u) o.allowVoiceRecording = b.BoolValue.internalBinaryRead(e, e.uint32(), n, o.allowVoiceRecording);
                        else {
                            var l = n.readUnknownField;
                            if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(u, " (wire type ").concat(s, ") for ").concat(this.typeName));
                            var c = e.skip(s);
                            !1 !== l && (!0 === l ? A.UnknownFieldHandler.onRead : l)(this.typeName, o, u, s, c)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.allowVoiceRecording && b.BoolValue.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, A.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? A.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(A.MessageType))
}
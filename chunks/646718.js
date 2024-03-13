function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumTypes: function() {
            return i
        },
        UNSELECTED_PREMIUM_TYPE_OVERRIDE: function() {
            return B
        },
        PREMIUM_TYPE_OVERRIDE_OPTIONS: function() {
            return H
        },
        PremiumTypeOrder: function() {
            return Y
        },
        PREMIUM_SUBSCRIPTION_APPLICATION: function() {
            return j
        },
        PremiumSubscriptionSKUs: function() {
            return s
        },
        ACTIVE_PREMIUM_SKUS: function() {
            return W
        },
        PremiumSubscriptionSKUToPremiumType: function() {
            return K
        },
        SubscriptionPlans: function() {
            return r
        },
        PREMIUM_PLANS: function() {
            return z
        },
        PREMIUM_TIER_2_PLANS: function() {
            return q
        },
        PREMIUM_GUILD_SUBSCRIPTION_PLANS: function() {
            return X
        },
        MULTI_MONTH_PLANS: function() {
            return Q
        },
        PREMIUM_MONTHLY_PLANS: function() {
            return Z
        },
        PREMIUM_SKU_TO_MONTHLY_PLAN: function() {
            return J
        },
        PREMIUM_SKU_TO_YEARLY_PLAN: function() {
            return $
        },
        SubscriptionIntervalTypes: function() {
            return a
        },
        DiscountUserUsageLimitIntervalTypes: function() {
            return o
        },
        SubscriptionPlanInfo: function() {
            return ee
        },
        GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: function() {
            return et
        },
        NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: function() {
            return en
        },
        DEFAULT_MAX_GRACE_PERIOD_DAYS: function() {
            return ei
        },
        PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: function() {
            return es
        },
        MAX_ACCOUNT_HOLD_DAYS: function() {
            return er
        },
        BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID: function() {
            return ea
        },
        STICKERS_GIFT_CODE_BATCH_ID: function() {
            return eo
        },
        USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD: function() {
            return el
        },
        MAX_PAYMENT_PROCESSING_TIME_DAYS: function() {
            return eu
        },
        PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: function() {
            return ed
        },
        PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: function() {
            return ec
        },
        PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID: function() {
            return ef
        },
        PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: function() {
            return e_
        },
        PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID: function() {
            return eh
        },
        PREMIUM_TIER_2_AUTH3_TRIAL_ID: function() {
            return eE
        },
        PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: function() {
            return em
        },
        PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: function() {
            return ep
        },
        PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: function() {
            return eS
        },
        PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: function() {
            return ev
        },
        PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: function() {
            return eT
        },
        PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: function() {
            return eI
        },
        PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: function() {
            return eC
        },
        SubscriptionTrials: function() {
            return eA
        },
        PremiumUpsellTypes: function() {
            return l
        },
        PurchasedFlags: function() {
            return u
        },
        SKU_ID_PURCHASED_FLAGS: function() {
            return ey
        },
        MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE: function() {
            return eN
        },
        IncrementalStickerCountsByTier: function() {
            return eR
        },
        TotalStickerCountsByTier: function() {
            return eO
        },
        TotalSoundboardSoundCountsByTier: function() {
            return eD
        },
        BoostedGuildFeatures: function() {
            return eP
        },
        ORDERED_PREMIUM_SUBSCRIPTION_PLANS: function() {
            return eM
        },
        AnalyticsPremiumFeatureNames: function() {
            return d
        },
        AnalyticsPremiumFeatureTiers: function() {
            return c
        },
        DISCOUNTS: function() {
            return eL
        },
        StreamQualities: function() {
            return f
        },
        StreamQualitiesToPremiumType: function() {
            return eb
        },
        PremiumMarketingEntrypoints: function() {
            return _
        },
        PremiumHeaderThemes: function() {
            return h
        },
        PremiumGiftStyles: function() {
            return E
        },
        InboundPromotionErrorCodes: function() {
            return g
        },
        PromotionFlags: function() {
            return eU
        },
        PremiumUserLimits: function() {
            return ew
        },
        BoostingUpsellAction: function() {
            return S
        },
        ReferralTrialsAnalyticSteps: function() {
            return v
        },
        LegacyPricingCountries: function() {
            return ek
        },
        LegacySeasonalGiftStyles: function() {
            return eV
        },
        STANDARD_GIFT_OPTIONS: function() {
            return eG
        },
        SeasonalGiftStyles2023: function() {
            return eF
        },
        AllSeasonalGiftStyles: function() {
            return ex
        },
        CUSTOM_GIFT_MESSAGE_MAX_LENGTH: function() {
            return eB
        },
        DISCOUNT_DURATION_FALLBACK: function() {
            return eH
        },
        DISCOUNT_PERCENTAGE_FALLBACK: function() {
            return eY
        }
    }), n("222007");
    var i, s, r, a, o, l, u, d, c, f, _, h, E, g, m, p, S, v, T, I, C, A, y, N, R, O, D, P, M, L, b, U, w, k, V, G, F = n("49111"),
        x = n("958706");
    (T = i || (i = {}))[T.TIER_1 = 1] = "TIER_1", T[T.TIER_2 = 2] = "TIER_2", T[T.TIER_0 = 3] = "TIER_0";
    let B = void 0,
        H = [{
            value: null,
            label: "Non-Nitro"
        }, {
            value: 3,
            label: "Basic"
        }, {
            value: 1,
            label: "Classic"
        }, {
            value: 2,
            label: "Standard"
        }],
        Y = Object.freeze({
            3: 0,
            1: 1,
            2: 2
        }),
        j = "521842831262875670";
    (I = s || (s = {})).NONE = "628379670982688768", I.TIER_0 = "978380684370378762", I.TIER_1 = "521846918637420545", I.TIER_2 = "521847234246082599", I.GUILD = "590663762298667008", I.LEGACY = "521842865731534868";
    let W = ["628379670982688768", "978380684370378762", "521846918637420545", "521847234246082599", "590663762298667008"],
        K = Object.freeze({
            "978380684370378762": 3,
            "521846918637420545": 1,
            "521847234246082599": 2,
            "628379670982688768": 2,
            "521842865731534868": 2
        });
    (C = r || (r = {})).NONE_MONTH = "628379151761408000", C.NONE_YEAR = "628381571568631808", C.PREMIUM_MONTH_TIER_0 = "978380692553465866", C.PREMIUM_YEAR_TIER_0 = "1024422698568122368", C.PREMIUM_MONTH_TIER_1 = "511651871736201216", C.PREMIUM_YEAR_TIER_1 = "511651876987469824", C.PREMIUM_MONTH_TIER_2 = "511651880837840896", C.PREMIUM_YEAR_TIER_2 = "511651885459963904", C.PREMIUM_MONTH_GUILD = "590665532894740483", C.PREMIUM_YEAR_GUILD = "590665538238152709", C.NONE_3_MONTH = "944265614527037440", C.NONE_6_MONTH = "944265636643602432", C.PREMIUM_3_MONTH_TIER_2 = "642251038925127690", C.PREMIUM_6_MONTH_TIER_2 = "944037208325619722", C.PREMIUM_3_MONTH_GUILD = "944037355453415424", C.PREMIUM_6_MONTH_GUILD = "944037391444738048", C.PREMIUM_MONTH_LEGACY = "511651856145973248", C.PREMIUM_YEAR_LEGACY = "511651860671627264";
    let z = new Set(["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904", "511651856145973248", "511651860671627264"]),
        q = new Set(["511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"]),
        X = new Set(["590665532894740483", "944037355453415424", "944037391444738048", "590665538238152709"]),
        Q = new Set(["642251038925127690", "944037208325619722", "944037355453415424", "944037391444738048"]),
        Z = new Set(["978380692553465866", "511651871736201216", "511651880837840896"]),
        J = Object.freeze({
            "978380684370378762": "978380692553465866",
            "521846918637420545": "511651871736201216",
            "521847234246082599": "511651880837840896",
            "628379670982688768": void 0,
            "590663762298667008": void 0,
            "521842865731534868": void 0
        }),
        $ = Object.freeze({
            "978380684370378762": "1024422698568122368",
            "521846918637420545": "511651876987469824",
            "521847234246082599": "511651885459963904",
            "628379670982688768": void 0,
            "590663762298667008": void 0,
            "521842865731534868": void 0
        });
    (A = a || (a = {}))[A.MONTH = 1] = "MONTH", A[A.YEAR = 2] = "YEAR", A[A.DAY = 3] = "DAY", (y = o || (o = {}))[y.DAY = 1] = "DAY", y[y.WEEK = 2] = "WEEK", y[y.MONTH = 3] = "MONTH", y[y.YEAR = 4] = "YEAR";
    let ee = Object.freeze({
            "628379151761408000": {
                id: "628379151761408000",
                name: "None Monthly",
                skuId: "628379670982688768",
                interval: 1,
                intervalCount: 1
            },
            "628381571568631808": {
                id: "628381571568631808",
                name: "None Yearly",
                skuId: "628379670982688768",
                interval: 2,
                intervalCount: 1
            },
            "978380692553465866": {
                id: "978380692553465866",
                name: "Nitro Basic Monthly",
                premiumType: 3,
                skuId: "978380684370378762",
                interval: 1,
                intervalCount: 1
            },
            "1024422698568122368": {
                id: "1024422698568122368",
                name: "Nitro Basic Yearly",
                premiumType: 3,
                skuId: "978380684370378762",
                interval: 2,
                intervalCount: 1
            },
            "511651871736201216": {
                id: "511651871736201216",
                name: "Nitro Classic Monthly",
                premiumType: 1,
                skuId: "521846918637420545",
                interval: 1,
                intervalCount: 1
            },
            "511651876987469824": {
                id: "511651876987469824",
                name: "Nitro Classic Yearly",
                premiumType: 1,
                skuId: "521846918637420545",
                interval: 2,
                intervalCount: 1
            },
            "511651880837840896": {
                id: "511651880837840896",
                name: "Nitro Monthly",
                premiumType: 2,
                skuId: "521847234246082599",
                interval: 1,
                intervalCount: 1
            },
            "511651885459963904": {
                id: "511651885459963904",
                name: "Nitro Yearly",
                premiumType: 2,
                skuId: "521847234246082599",
                interval: 2,
                intervalCount: 1
            },
            "590665532894740483": {
                id: "590665532894740483",
                name: "Nitro Server Boost Monthly",
                skuId: "590663762298667008",
                interval: 1,
                intervalCount: 1
            },
            "590665538238152709": {
                id: "590665538238152709",
                name: "Nitro Server Boost Yearly",
                skuId: "590663762298667008",
                interval: 2,
                intervalCount: 1
            },
            "642251038925127690": {
                id: "642251038925127690",
                name: "Nitro Three Month",
                premiumType: 2,
                skuId: "521847234246082599",
                interval: 1,
                intervalCount: 3
            },
            "944037208325619722": {
                id: "944037208325619722",
                name: "Nitro Six Month",
                premiumType: 2,
                skuId: "521847234246082599",
                interval: 1,
                intervalCount: 6
            },
            "944037355453415424": {
                id: "944037355453415424",
                name: "Nitro Server Boost Three Month",
                skuId: "590663762298667008",
                interval: 1,
                intervalCount: 3
            },
            "944037391444738048": {
                id: "944037391444738048",
                name: "Nitro Server Boost Six Month",
                skuId: "590663762298667008",
                interval: 1,
                intervalCount: 6
            },
            "944265614527037440": {
                id: "944265614527037440",
                name: "None Three Month",
                skuId: "628379670982688768",
                interval: 1,
                intervalCount: 3
            },
            "944265636643602432": {
                id: "944265636643602432",
                name: "None Six Month",
                skuId: "628379670982688768",
                interval: 1,
                intervalCount: 6
            },
            "511651856145973248": {
                id: "511651856145973248",
                name: "Nitro Monthly (Legacy)",
                premiumType: 2,
                skuId: "521842865731534868",
                interval: 1,
                intervalCount: 1
            },
            "511651860671627264": {
                id: "511651860671627264",
                name: "Nitro Classic Yearly (Legacy)",
                premiumType: 2,
                skuId: "521842865731534868",
                interval: 2,
                intervalCount: 1
            }
        }),
        et = 30,
        en = 2,
        ei = 3,
        es = 7,
        er = 30,
        ea = "775514091874680832",
        eo = "845031178288889946",
        el = 432e6,
        eu = 14,
        ed = "520373071933079552",
        ec = "902329034132684800",
        ef = "983601860436819968",
        e_ = "983601860436819969",
        eh = "984244797441048577",
        eE = "1004850445463584768",
        eg = "1073698058383917056",
        em = "1070132870233980928",
        ep = "1150904354090532864",
        eS = "1199128659810582528",
        ev = "1204865493622587392",
        eT = "1204867673024888832",
        eI = "1215346678383509504",
        eC = "1215366184820539392",
        eA = Object.freeze({
            [ed]: {
                id: ed,
                skus: ["521847234246082599"]
            },
            [ec]: {
                id: ec,
                skus: ["521847234246082599"]
            },
            [ef]: {
                id: ef,
                skus: ["521847234246082599"]
            },
            [e_]: {
                id: e_,
                skus: ["521847234246082599"]
            },
            [eh]: {
                id: eh,
                skus: ["521847234246082599"]
            },
            [eE]: {
                id: eE,
                skus: ["521847234246082599"]
            },
            [em]: {
                id: em,
                skus: ["978380684370378762"]
            },
            [eg]: {
                id: eg,
                skus: ["521847234246082599"]
            }
        });
    (N = l || (l = {})).ANIMATED_GUILD_BANNER_TOOLTIP = "animated_guild_banner_tooltip", N.EMOJI_PICKER_SEARCH = "emoji_picker_search", N.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked", N.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked", N.EMOJI_PICKER_REACTION_EMOJI_CLICKED = "emoji_picker_reaction_emoji_clicked", N.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = "emoji_picker_super_reaction_emoji_clicked", N.EMOJI_PICKER_STATUS_EMOJI_CLICKED = "emoji_picker_status_emoji_clicked", N.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = "emoji_picker_top_server_emoji_clicked", N.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = "emoji_picker_newly_added_emoji_clicked", N.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked", N.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline", N.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal", N.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover", N.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover", N.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover", N.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = "emoji_in_burst_reaction_hover_upsell", N.EMOJI_PICKER_FLOATING_UPSELL = "emoji_picker_floating_upsell", N.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover", N.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell", N.STREAM_QUALITY_INDICATOR = "stream_quality_indicator", N.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator", N.STREAM_QUALITY_UPSELL = "stream_quality_upsell", N.MESSAGE_LENGTH_UPSELL = "message_length_upsell", N.MESSAGE_LENGTH_IN_EDITOR_UPSELL = "message_length_in_editor_upsell", N.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal", N.CUSTOM_PROFILE_TRY_OUT_UPSELL = "try out custom profile in settings upsell", N.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal", N.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline", N.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list", N.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal", N.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal", N.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell", N.PREMIUM_GUILD_IDENTITY_MODAL = "premium guild identity upsell alert", N.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = "custom profiles settings banner upsell", N.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL = "custom profiles profile banner social upsell", N.STICKER_PICKER_UPSELL = "sticker_picker_upsell", N.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = "animated avatar preview gif modal", N.PREMIUM_PROGRESS_BAR = "premium_progress_bar_tooltip", N.INVITE_SPLASH_UPSELL = "premium_invite_splash_upsell", N.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal", N.UPLOAD_ERROR_UPSELL = "upload error upsell", N.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = "premium guild member profile upsell inline", N.CONCURRENT_ACTIVITIES = "Concurrent Activities", N.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = "premium_uncancel_winback_modal_viewed", N.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = "animated_video_background_new_preset", N.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip", N.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell", N.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji", N.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "profile customization", N.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "hd streaming", N.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "larger file uploads", N.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo", N.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell", N.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = "Voice Channel Effect Bar Emoji Upsell", N.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = "voice_channel_effects_toggle_clicked", N.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = "voice_channel_effects_toggle_clicked_expanded", N.PROFILE_THEME_UPSELL_MODAL = "profile_theme_upsell_modal", N.PROFILE_EFFECTS_INLINE_SETTINGS = "profile_effects_inline_settings", N.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = "profile_effects_inline_settings_mobile", N.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell", N.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out", N.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell", N.BURST_REACTION_UPSELL = "burst_reaction_upsell", N.BURST_REACTION_QUICK_ACTION_UPSELL = "burst_reaction_quick_action_upsell", N.BURST_REACTION_CONTEXT_MENU_UPSELL = "burst_reaction_context_menu_upsell", N.PREMIUM_CLIENT_THEME_TRY_IT_OUT = "premium_client_theme_try_it_out", N.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = "premium_client_theme_settings_upsell", N.VIDEO_STAGE_LIMIT = "video_stage_limit", N.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked", N.APP_ICON_UPSELL = "app_icon_upsell", N.COLLECTIBLES_SHOP = "collectibles_shop", N.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles_profile_settings_upsell", N.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles_premium_marketing_page_upsell", N.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = "clips_guild_sidebar_coachmark_premium_early_access_upsell", N.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = "clips_go_live_premium_early_access_roadblock_upsell", (R = u || (u = {}))[R.PREMIUM_TIER_1 = 1] = "PREMIUM_TIER_1", R[R.PREMIUM_TIER_2 = 2] = "PREMIUM_TIER_2", R[R.GUILD_BOOST = 4] = "GUILD_BOOST", R[R.PREMIUM_TIER_0 = 8] = "PREMIUM_TIER_0";
    let ey = Object.freeze({
            "978380684370378762": 8,
            "521846918637420545": 1,
            "521847234246082599": 2,
            "590663762298667008": 4
        }),
        eN = 52428800,
        eR = {
            [F.BoostedGuildTiers.NONE]: 5,
            [F.BoostedGuildTiers.TIER_1]: 10,
            [F.BoostedGuildTiers.TIER_2]: 15,
            [F.BoostedGuildTiers.TIER_3]: 30
        },
        eO = {
            [F.BoostedGuildTiers.NONE]: eR[F.BoostedGuildTiers.NONE],
            [F.BoostedGuildTiers.TIER_1]: eR[F.BoostedGuildTiers.NONE] + eR[F.BoostedGuildTiers.TIER_1],
            [F.BoostedGuildTiers.TIER_2]: eR[F.BoostedGuildTiers.NONE] + eR[F.BoostedGuildTiers.TIER_1] + eR[F.BoostedGuildTiers.TIER_2],
            [F.BoostedGuildTiers.TIER_3]: eR[F.BoostedGuildTiers.NONE] + eR[F.BoostedGuildTiers.TIER_1] + eR[F.BoostedGuildTiers.TIER_2] + eR[F.BoostedGuildTiers.TIER_3]
        },
        eD = {
            [F.BoostedGuildTiers.NONE]: 8,
            [F.BoostedGuildTiers.TIER_1]: 24,
            [F.BoostedGuildTiers.TIER_2]: 36,
            [F.BoostedGuildTiers.TIER_3]: 48
        },
        eP = Object.freeze({
            [F.BoostedGuildTiers.NONE]: {
                features: [],
                limits: {
                    emoji: x.EMOJI_MAX_SLOTS,
                    bitrate: F.BITRATE_MAX,
                    fileSize: F.MAX_ATTACHMENT_SIZE,
                    screenShareQualityFramerate: 30,
                    screenShareQualityResolution: "720p",
                    soundboardSounds: eD[F.BoostedGuildTiers.NONE],
                    maxConcurrentActivities: 2,
                    stickers: eO[F.BoostedGuildTiers.NONE],
                    stageVideoUsers: F.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
                }
            },
            [F.BoostedGuildTiers.TIER_1]: {
                features: [F.GuildFeatures.INVITE_SPLASH, F.GuildFeatures.ANIMATED_ICON],
                limits: {
                    emoji: 100,
                    bitrate: 128e3,
                    fileSize: F.MAX_ATTACHMENT_SIZE,
                    screenShareQualityFramerate: 60,
                    screenShareQualityResolution: "720p",
                    soundboardSounds: eD[F.BoostedGuildTiers.TIER_1],
                    maxConcurrentActivities: 3,
                    stickers: eO[F.BoostedGuildTiers.TIER_1],
                    stageVideoUsers: F.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
                }
            },
            [F.BoostedGuildTiers.TIER_2]: {
                features: [F.GuildFeatures.INVITE_SPLASH, F.GuildFeatures.ANIMATED_ICON, F.GuildFeatures.BANNER, F.GuildFeatures.ROLE_ICONS],
                limits: {
                    emoji: 150,
                    bitrate: 256e3,
                    fileSize: 52428800,
                    screenShareQualityFramerate: 60,
                    screenShareQualityResolution: "1080p",
                    soundboardSounds: eD[F.BoostedGuildTiers.TIER_2],
                    maxConcurrentActivities: 5,
                    stickers: eO[F.BoostedGuildTiers.TIER_2],
                    stageVideoUsers: F.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                }
            },
            [F.BoostedGuildTiers.TIER_3]: {
                features: [F.GuildFeatures.INVITE_SPLASH, F.GuildFeatures.ANIMATED_ICON, F.GuildFeatures.BANNER, F.GuildFeatures.ANIMATED_BANNER, F.GuildFeatures.VANITY_URL, F.GuildFeatures.ROLE_ICONS],
                limits: {
                    emoji: 250,
                    bitrate: 384e3,
                    fileSize: 104857600,
                    screenShareQualityFramerate: 60,
                    screenShareQualityResolution: "1080p",
                    soundboardSounds: eD[F.BoostedGuildTiers.TIER_3],
                    maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
                    stickers: eO[F.BoostedGuildTiers.TIER_3],
                    stageVideoUsers: F.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                }
            }
        }),
        eM = ["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"];
    (O = d || (d = {})).SOUNDBOARD_PLAY = "soundboard play", O.PROFILE_THEME_COLOR = "profile_theme_color", O.PROFILE_BANNER = "profile_banner", O.ANIMATED_AVATAR = "animated_avatar", O.AVATAR_DECORATION = "avatar_decoration", O.CLIENT_THEME = "client_theme", O.SHARED_CANVAS = "shared_canvas", O.PROFILE_EFFECT = "profile_effect", (D = c || (c = {})).FREE = "free", D.PREMIUM_STANDARD = "premium-standard";
    let eL = {
        "1024422698568122368": 16,
        "511651876987469824": 16,
        "511651885459963904": 16,
        "944037208325619722": 8,
        "642251038925127690": 5
    };
    (P = f || (f = {})).HIGH_STREAMING_QUALITY = "high_streaming_quality", P.MID_STREAMING_QUALITY = "mid_streaming_quality";
    let eb = Object.freeze({
        high_streaming_quality: 2,
        mid_streaming_quality: 1
    });
    (M = _ || (_ = {}))[M.UserSettings = 0] = "UserSettings", M[M.ApplicationStoreHome = 1] = "ApplicationStoreHome", (L = h || (h = {}))[L.DEFAULT = 0] = "DEFAULT", L[L.WINTER = 1] = "WINTER", (b = E || (E = {}))[b.SNOWGLOBE = 1] = "SNOWGLOBE", b[b.BOX = 2] = "BOX", b[b.CUP = 3] = "CUP", b[b.STANDARD_BOX = 4] = "STANDARD_BOX", b[b.CAKE = 5] = "CAKE", b[b.CHEST = 6] = "CHEST", b[b.COFFEE = 7] = "COFFEE", b[b.SEASONAL_STANDARD_BOX = 8] = "SEASONAL_STANDARD_BOX", b[b.SEASONAL_CAKE = 9] = "SEASONAL_CAKE", b[b.SEASONAL_CHEST = 10] = "SEASONAL_CHEST", b[b.SEASONAL_COFFEE = 11] = "SEASONAL_COFFEE", (U = g || (g = {})).USER_NOT_VERIFIED = "user_not_verified", U.NO_CODE_BODY = "no_code_body", U.NO_PROMOTION = "no_promotion", U.CODE_CLAIMED = "code_claimed", U.EXISTING_SUBSCRIBER = "existing_subscriber", U.PREVIOUS_SUBSCRIBER = "previous_subscriber", U.BLOCKED_PAYMENT = "blocked_payment";
    let eU = Object.freeze({
            IS_BLOCKED_IOS: 32,
            IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
            SUPPRESS_NOTIFICATION: 128
        }),
        ew = Object.freeze({
            3: {
                fileSize: eN
            },
            1: {
                fileSize: 52428800
            },
            2: {
                fileSize: 524288e3
            }
        });
    (w = m || (m = {})).EXPLORE_ALL_PERKS_CLICKED = "explore_all_perks_clicked", w.HELPER_COLLAPSED = "helper_collapsed", w.HELPER_UNCOLLAPSED = "helper_uncollapsed", w.UNLOCK_EMOJI_CLICKED = "unlock_emoji_clicked", w.CUSTOM_PROFILES_CLICKED = "custom_profiles_clicked", w.SERVER_BOOSTS_CLICKED = "server_boosts_clicked", w.HELPER_DISMISSED = "premium_feature_helper_dismissed", w.HELPER_RENDERED = "premium_feature_helper_rendered", (k = p || (p = {})).EMOJI_TUTORIAL_STARTED = "emoji_tutorial_started", k.EMOJI_INTRO_VIEWED = "emoji_intro_viewed", k.EMOJI_PROMPT_VIEWED = "emoji_prompt_viewed", k.CUSTOM_PROFILE_TUTORIAL_STARTED = "custom_profile_tutorial_started", k.CUSTOM_PROFILE_AVATAR_INTRO_VIEWED = "custom_profile_avatar_intro_viewed", k.CUSTOM_PROFILE_AVATAR_DECORATIONS_VIEWED = "custom_profile_avatar_decorations_viewed", k.CUSTOM_PROFILE_BANNER_INTRO_VIEWED = "custom_profile_banner_intro_viewed", k.CUSTOM_PROFILE_THEME_INTRO_VIEWED = "custom_profile_theme_intro_viewed", k.SERVER_PROFILE_INTRO_VIEWED = "server_profile_intro_viewed", k.SERVER_BOOST_TUTORIAL_STARTED = "server_boost_tutorial_started", k.BOOST_INTRO_VIEWED = "boost_intro_viewed", k.BOOST_PROMPT_VIEWED = "boost_prompt_viewed", (V = S || (S = {})).BOOST = "boost", V.DISMISS = "dismiss", (G = v || (v = {})).BADGE_TOOLTIP_VIEWED = "share_nitro_bagde_tooltip_viewed", G.BADGE_CLICKED = "share_nitro_badge_clicked", G.FLOW_STARTED = "share_nitro_flow_started", G.FLOW_COMPLETED = "share_nitro_flow_completed";
    let ek = new Set(["PL", "TR"]),
        eV = [1, 2, 3],
        eG = [4, 5, 7, 6],
        eF = [8, 9, 11, 10],
        ex = eF.concat(eV),
        eB = 190,
        eH = 3,
        eY = 30
}
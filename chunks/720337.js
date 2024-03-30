function(_, E, e) {
    "use strict";

    function o(_, E, e) {
        return E in _ ? Object.defineProperty(_, E, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[E] = e, _
    }
    e.r(E), e.d(E, {
        Color: function() {
            return I
        },
        ColorDetails: function() {
            return r
        }
    }), (t = I || (I = {})).APPLICATION_SUBSCRIPTION_END = "application-subscription-end", t.APPLICATION_SUBSCRIPTION_START = "application-subscription-start", t.BATTLENET = "battlenet", t.BG_GRADIENT_AURORA_1 = "bg-gradient-aurora-1", t.BG_GRADIENT_AURORA_2 = "bg-gradient-aurora-2", t.BG_GRADIENT_AURORA_3 = "bg-gradient-aurora-3", t.BG_GRADIENT_AURORA_4 = "bg-gradient-aurora-4", t.BG_GRADIENT_AURORA_5 = "bg-gradient-aurora-5", t.BG_GRADIENT_CHROMA_GLOW_1 = "bg-gradient-chroma-glow-1", t.BG_GRADIENT_CHROMA_GLOW_2 = "bg-gradient-chroma-glow-2", t.BG_GRADIENT_CHROMA_GLOW_3 = "bg-gradient-chroma-glow-3", t.BG_GRADIENT_CHROMA_GLOW_4 = "bg-gradient-chroma-glow-4", t.BG_GRADIENT_CHROMA_GLOW_5 = "bg-gradient-chroma-glow-5", t.BG_GRADIENT_CITRUS_SHERBERT_1 = "bg-gradient-citrus-sherbert-1", t.BG_GRADIENT_CITRUS_SHERBERT_2 = "bg-gradient-citrus-sherbert-2", t.BG_GRADIENT_COTTON_CANDY_1 = "bg-gradient-cotton-candy-1", t.BG_GRADIENT_COTTON_CANDY_2 = "bg-gradient-cotton-candy-2", t.BG_GRADIENT_CRIMSON_MOON_1 = "bg-gradient-crimson-moon-1", t.BG_GRADIENT_CRIMSON_MOON_2 = "bg-gradient-crimson-moon-2", t.BG_GRADIENT_DESERT_KHAKI_1 = "bg-gradient-desert-khaki-1", t.BG_GRADIENT_DESERT_KHAKI_2 = "bg-gradient-desert-khaki-2", t.BG_GRADIENT_DESERT_KHAKI_3 = "bg-gradient-desert-khaki-3", t.BG_GRADIENT_DUSK_1 = "bg-gradient-dusk-1", t.BG_GRADIENT_DUSK_2 = "bg-gradient-dusk-2", t.BG_GRADIENT_EASTER_EGG_1 = "bg-gradient-easter-egg-1", t.BG_GRADIENT_EASTER_EGG_2 = "bg-gradient-easter-egg-2", t.BG_GRADIENT_FOREST_1 = "bg-gradient-forest-1", t.BG_GRADIENT_FOREST_2 = "bg-gradient-forest-2", t.BG_GRADIENT_FOREST_3 = "bg-gradient-forest-3", t.BG_GRADIENT_FOREST_4 = "bg-gradient-forest-4", t.BG_GRADIENT_FOREST_5 = "bg-gradient-forest-5", t.BG_GRADIENT_HANAMI_1 = "bg-gradient-hanami-1", t.BG_GRADIENT_HANAMI_2 = "bg-gradient-hanami-2", t.BG_GRADIENT_HANAMI_3 = "bg-gradient-hanami-3", t.BG_GRADIENT_LOFI_VIBES_1 = "bg-gradient-lofi-vibes-1", t.BG_GRADIENT_LOFI_VIBES_2 = "bg-gradient-lofi-vibes-2", t.BG_GRADIENT_LOFI_VIBES_3 = "bg-gradient-lofi-vibes-3", t.BG_GRADIENT_LOFI_VIBES_4 = "bg-gradient-lofi-vibes-4", t.BG_GRADIENT_MARS_1 = "bg-gradient-mars-1", t.BG_GRADIENT_MARS_2 = "bg-gradient-mars-2", t.BG_GRADIENT_MIDNIGHT_BLURPLE_1 = "bg-gradient-midnight-blurple-1", t.BG_GRADIENT_MIDNIGHT_BLURPLE_2 = "bg-gradient-midnight-blurple-2", t.BG_GRADIENT_MINT_APPLE_1 = "bg-gradient-mint-apple-1", t.BG_GRADIENT_MINT_APPLE_2 = "bg-gradient-mint-apple-2", t.BG_GRADIENT_MINT_APPLE_3 = "bg-gradient-mint-apple-3", t.BG_GRADIENT_NEON_NIGHTS_1 = "bg-gradient-neon-nights-1", t.BG_GRADIENT_NEON_NIGHTS_2 = "bg-gradient-neon-nights-2", t.BG_GRADIENT_NEON_NIGHTS_3 = "bg-gradient-neon-nights-3", t.BG_GRADIENT_RETRO_RAINCLOUD_1 = "bg-gradient-retro-raincloud-1", t.BG_GRADIENT_RETRO_RAINCLOUD_2 = "bg-gradient-retro-raincloud-2", t.BG_GRADIENT_RETRO_STORM_1 = "bg-gradient-retro-storm-1", t.BG_GRADIENT_RETRO_STORM_2 = "bg-gradient-retro-storm-2", t.BG_GRADIENT_SEPIA_1 = "bg-gradient-sepia-1", t.BG_GRADIENT_SEPIA_2 = "bg-gradient-sepia-2", t.BG_GRADIENT_STRAWBERRY_LEMONADE_1 = "bg-gradient-strawberry-lemonade-1", t.BG_GRADIENT_STRAWBERRY_LEMONADE_2 = "bg-gradient-strawberry-lemonade-2", t.BG_GRADIENT_STRAWBERRY_LEMONADE_3 = "bg-gradient-strawberry-lemonade-3", t.BG_GRADIENT_SUNRISE_1 = "bg-gradient-sunrise-1", t.BG_GRADIENT_SUNRISE_2 = "bg-gradient-sunrise-2", t.BG_GRADIENT_SUNRISE_3 = "bg-gradient-sunrise-3", t.BG_GRADIENT_SUNSET_1 = "bg-gradient-sunset-1", t.BG_GRADIENT_SUNSET_2 = "bg-gradient-sunset-2", t.BG_GRADIENT_UNDER_THE_SEA_1 = "bg-gradient-under-the-sea-1", t.BG_GRADIENT_UNDER_THE_SEA_2 = "bg-gradient-under-the-sea-2", t.BG_GRADIENT_UNDER_THE_SEA_3 = "bg-gradient-under-the-sea-3", t.BLACK_100 = "black-100", t.BLACK_130 = "black-130", t.BLACK_160 = "black-160", t.BLACK_200 = "black-200", t.BLACK_230 = "black-230", t.BLACK_260 = "black-260", t.BLACK_300 = "black-300", t.BLACK_330 = "black-330", t.BLACK_345 = "black-345", t.BLACK_360 = "black-360", t.BLACK_400 = "black-400", t.BLACK_430 = "black-430", t.BLACK_460 = "black-460", t.BLACK_500 = "black-500", t.BLACK_530 = "black-530", t.BLACK_560 = "black-560", t.BLACK_600 = "black-600", t.BLACK_630 = "black-630", t.BLACK_660 = "black-660", t.BLACK_700 = "black-700", t.BLACK_730 = "black-730", t.BLACK_760 = "black-760", t.BLACK_800 = "black-800", t.BLACK_830 = "black-830", t.BLACK_860 = "black-860", t.BLACK_900 = "black-900", t.BLUE_100 = "blue-100", t.BLUE_130 = "blue-130", t.BLUE_160 = "blue-160", t.BLUE_200 = "blue-200", t.BLUE_230 = "blue-230", t.BLUE_260 = "blue-260", t.BLUE_300 = "blue-300", t.BLUE_330 = "blue-330", t.BLUE_345 = "blue-345", t.BLUE_360 = "blue-360", t.BLUE_400 = "blue-400", t.BLUE_430 = "blue-430", t.BLUE_460 = "blue-460", t.BLUE_500 = "blue-500", t.BLUE_530 = "blue-530", t.BLUE_560 = "blue-560", t.BLUE_600 = "blue-600", t.BLUE_630 = "blue-630", t.BLUE_660 = "blue-660", t.BLUE_700 = "blue-700", t.BLUE_730 = "blue-730", t.BLUE_760 = "blue-760", t.BLUE_800 = "blue-800", t.BLUE_830 = "blue-830", t.BLUE_860 = "blue-860", t.BLUE_900 = "blue-900", t.BRAND_100 = "brand-100", t.BRAND_130 = "brand-130", t.BRAND_160 = "brand-160", t.BRAND_200 = "brand-200", t.BRAND_230 = "brand-230", t.BRAND_260 = "brand-260", t.BRAND_300 = "brand-300", t.BRAND_330 = "brand-330", t.BRAND_345 = "brand-345", t.BRAND_360 = "brand-360", t.BRAND_400 = "brand-400", t.BRAND_430 = "brand-430", t.BRAND_460 = "brand-460", t.BRAND_500 = "brand-500", t.BRAND_530 = "brand-530", t.BRAND_560 = "brand-560", t.BRAND_600 = "brand-600", t.BRAND_630 = "brand-630", t.BRAND_660 = "brand-660", t.BRAND_700 = "brand-700", t.BRAND_730 = "brand-730", t.BRAND_760 = "brand-760", t.BRAND_800 = "brand-800", t.BRAND_830 = "brand-830", t.BRAND_860 = "brand-860", t.BRAND_900 = "brand-900", t.BUNGIE = "bungie", t.CRUNCHYROLL = "crunchyroll", t.DISCORD_8TH_BDAY_BLUE = "discord-8th-bday-blue", t.DISCORD_8TH_BDAY_DARK_BLUE = "discord-8th-bday-dark-blue", t.DISCORD_8TH_BDAY_GREEN = "discord-8th-bday-green", t.DISCORD_8TH_BDAY_LIGHT_BLUE = "discord-8th-bday-light-blue", t.DISCORD_8TH_BDAY_PINK = "discord-8th-bday-pink", t.DISCORD_8TH_BDAY_PURPLE = "discord-8th-bday-purple", t.DISCORD_8TH_BDAY_YELLOW = "discord-8th-bday-yellow", t.EBAY = "ebay", t.EPIC_GAMES = "epic-games", t.FACEBOOK = "facebook", t.GITHUB = "github", t.GOLD = "gold", t.GREEN_100 = "green-100", t.GREEN_130 = "green-130", t.GREEN_160 = "green-160", t.GREEN_200 = "green-200", t.GREEN_230 = "green-230", t.GREEN_260 = "green-260", t.GREEN_300 = "green-300", t.GREEN_330 = "green-330", t.GREEN_345 = "green-345", t.GREEN_360 = "green-360", t.GREEN_400 = "green-400", t.GREEN_430 = "green-430", t.GREEN_460 = "green-460", t.GREEN_500 = "green-500", t.GREEN_530 = "green-530", t.GREEN_560 = "green-560", t.GREEN_600 = "green-600", t.GREEN_630 = "green-630", t.GREEN_660 = "green-660", t.GREEN_700 = "green-700", t.GREEN_730 = "green-730", t.GREEN_760 = "green-760", t.GREEN_800 = "green-800", t.GREEN_830 = "green-830", t.GREEN_860 = "green-860", t.GREEN_900 = "green-900", t.GUILD_BOOSTING_BLUE = "guild-boosting-blue", t.GUILD_BOOSTING_BLUE_FOR_GRADIENTS = "guild-boosting-blue-for-gradients", t.GUILD_BOOSTING_PINK = "guild-boosting-pink", t.GUILD_BOOSTING_PURPLE = "guild-boosting-purple", t.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS = "guild-boosting-purple-for-gradients", t.HYPESQUAD_HOUSE_1 = "hypesquad-house-1", t.HYPESQUAD_HOUSE_2 = "hypesquad-house-2", t.HYPESQUAD_HOUSE_3 = "hypesquad-house-3", t.INPUT_PLACEHOLDER_TEXT_DARK = "input-placeholder-text-dark", t.LOL = "lol", t.ORANGE_100 = "orange-100", t.ORANGE_130 = "orange-130", t.ORANGE_160 = "orange-160", t.ORANGE_200 = "orange-200", t.ORANGE_230 = "orange-230", t.ORANGE_260 = "orange-260", t.ORANGE_300 = "orange-300", t.ORANGE_330 = "orange-330", t.ORANGE_345 = "orange-345", t.ORANGE_360 = "orange-360", t.ORANGE_400 = "orange-400", t.ORANGE_430 = "orange-430", t.ORANGE_460 = "orange-460", t.ORANGE_500 = "orange-500", t.ORANGE_530 = "orange-530", t.ORANGE_560 = "orange-560", t.ORANGE_600 = "orange-600", t.ORANGE_630 = "orange-630", t.ORANGE_660 = "orange-660", t.ORANGE_700 = "orange-700", t.ORANGE_730 = "orange-730", t.ORANGE_760 = "orange-760", t.ORANGE_800 = "orange-800", t.ORANGE_830 = "orange-830", t.ORANGE_860 = "orange-860", t.ORANGE_900 = "orange-900", t.PARTNER = "partner", t.PAYPAL = "paypal", t.PLAYSTATION = "playstation", t.PLUM_23_ALPHA = "plum-23-alpha", t.PLUM_0 = "plum-0", t.PLUM_1 = "plum-1", t.PLUM_10 = "plum-10", t.PLUM_11 = "plum-11", t.PLUM_12 = "plum-12", t.PLUM_13 = "plum-13", t.PLUM_14 = "plum-14", t.PLUM_15 = "plum-15", t.PLUM_16 = "plum-16", t.PLUM_17 = "plum-17", t.PLUM_18 = "plum-18", t.PLUM_19 = "plum-19", t.PLUM_2 = "plum-2", t.PLUM_20 = "plum-20", t.PLUM_21 = "plum-21", t.PLUM_22 = "plum-22", t.PLUM_23 = "plum-23", t.PLUM_24 = "plum-24", t.PLUM_25 = "plum-25", t.PLUM_26 = "plum-26", t.PLUM_3 = "plum-3", t.PLUM_4 = "plum-4", t.PLUM_5 = "plum-5", t.PLUM_6 = "plum-6", t.PLUM_7 = "plum-7", t.PLUM_8 = "plum-8", t.PLUM_9 = "plum-9", t.PREMIUM_PERK_BLUE = "premium-perk-blue", t.PREMIUM_PERK_BLUE_ALT = "premium-perk-blue-alt", t.PREMIUM_PERK_DARK_BLUE = "premium-perk-dark-blue", t.PREMIUM_PERK_GOLD = "premium-perk-gold", t.PREMIUM_PERK_GREEN = "premium-perk-green", t.PREMIUM_PERK_LIGHT_BLUE = "premium-perk-light-blue", t.PREMIUM_PERK_ORANGE = "premium-perk-orange", t.PREMIUM_PERK_PINK = "premium-perk-pink", t.PREMIUM_PERK_PURPLE = "premium-perk-purple", t.PREMIUM_PERK_YELLOW = "premium-perk-yellow", t.PREMIUM_TIER_0_BLUE = "premium-tier-0-blue", t.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS = "premium-tier-0-blue-for-gradients", t.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 = "premium-tier-0-blue-for-gradients-2", t.PREMIUM_TIER_0_HEADER_GRADIENT_1 = "premium-tier-0-header-gradient-1", t.PREMIUM_TIER_0_HEADER_GRADIENT_2 = "premium-tier-0-header-gradient-2", t.PREMIUM_TIER_0_HEADER_GRADIENT_3 = "premium-tier-0-header-gradient-3", t.PREMIUM_TIER_0_HEADER_GRADIENT_4 = "premium-tier-0-header-gradient-4", t.PREMIUM_TIER_0_HEADER_GRADIENT_5 = "premium-tier-0-header-gradient-5", t.PREMIUM_TIER_0_PURPLE = "premium-tier-0-purple", t.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS = "premium-tier-0-purple-for-gradients", t.PREMIUM_TIER_1_BLUE = "premium-tier-1-blue", t.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS = "premium-tier-1-blue-for-gradients", t.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS = "premium-tier-1-dark-blue-for-gradients", t.PREMIUM_TIER_1_PURPLE = "premium-tier-1-purple", t.PREMIUM_TIER_2_PINK = "premium-tier-2-pink", t.PREMIUM_TIER_2_PINK_FOR_GRADIENTS = "premium-tier-2-pink-for-gradients", t.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2 = "premium-tier-2-pink-for-gradients-2", t.PREMIUM_TIER_2_PURPLE = "premium-tier-2-purple", t.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS = "premium-tier-2-purple-for-gradients", t.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2 = "premium-tier-2-purple-for-gradients-2", t.PRIMARY_100 = "primary-100", t.PRIMARY_130 = "primary-130", t.PRIMARY_160 = "primary-160", t.PRIMARY_200 = "primary-200", t.PRIMARY_230 = "primary-230", t.PRIMARY_260 = "primary-260", t.PRIMARY_300 = "primary-300", t.PRIMARY_330 = "primary-330", t.PRIMARY_345 = "primary-345", t.PRIMARY_360 = "primary-360", t.PRIMARY_400 = "primary-400", t.PRIMARY_430 = "primary-430", t.PRIMARY_460 = "primary-460", t.PRIMARY_500 = "primary-500", t.PRIMARY_530 = "primary-530", t.PRIMARY_560 = "primary-560", t.PRIMARY_600 = "primary-600", t.PRIMARY_630 = "primary-630", t.PRIMARY_645 = "primary-645", t.PRIMARY_660 = "primary-660", t.PRIMARY_700 = "primary-700", t.PRIMARY_730 = "primary-730", t.PRIMARY_760 = "primary-760", t.PRIMARY_800 = "primary-800", t.PRIMARY_830 = "primary-830", t.PRIMARY_860 = "primary-860", t.PRIMARY_900 = "primary-900", t.RED_100 = "red-100", t.RED_130 = "red-130", t.RED_160 = "red-160", t.RED_200 = "red-200", t.RED_230 = "red-230", t.RED_260 = "red-260", t.RED_300 = "red-300", t.RED_330 = "red-330", t.RED_345 = "red-345", t.RED_360 = "red-360", t.RED_400 = "red-400", t.RED_430 = "red-430", t.RED_460 = "red-460", t.RED_500 = "red-500", t.RED_530 = "red-530", t.RED_560 = "red-560", t.RED_600 = "red-600", t.RED_630 = "red-630", t.RED_660 = "red-660", t.RED_700 = "red-700", t.RED_730 = "red-730", t.RED_760 = "red-760", t.RED_800 = "red-800", t.RED_830 = "red-830", t.RED_860 = "red-860", t.RED_900 = "red-900", t.REDDIT = "reddit", t.RIOT_GAMES = "riot-games", t.ROLE_BLUE = "role-blue", t.ROLE_BROWN = "role-brown", t.ROLE_BURGUNDY = "role-burgundy", t.ROLE_DARK_BLUE = "role-dark-blue", t.ROLE_DARK_GREY = "role-dark-grey", t.ROLE_DARK_PURPLE = "role-dark-purple", t.ROLE_DARK_TEAL = "role-dark-teal", t.ROLE_DEFAULT = "role-default", t.ROLE_GREEN = "role-green", t.ROLE_GREY = "role-grey", t.ROLE_LIGHT_BLUE = "role-light-blue", t.ROLE_LIGHT_GREEN = "role-light-green", t.ROLE_LIGHT_GREY = "role-light-grey", t.ROLE_MAGENTA = "role-magenta", t.ROLE_ORANGE = "role-orange", t.ROLE_PURPLE = "role-purple", t.ROLE_SALMON = "role-salmon", t.ROLE_SKY_BLUE = "role-sky-blue", t.ROLE_TAN = "role-tan", t.ROLE_TEAL = "role-teal", t.ROLE_TERRACOTTA = "role-terracotta", t.ROLE_YELLOW = "role-yellow", t.SAMSUNG = "samsung", t.SKYPE = "skype", t.SPOTIFY = "spotify", t.STEAM = "steam", t.TEAL_100 = "teal-100", t.TEAL_130 = "teal-130", t.TEAL_160 = "teal-160", t.TEAL_200 = "teal-200", t.TEAL_230 = "teal-230", t.TEAL_260 = "teal-260", t.TEAL_300 = "teal-300", t.TEAL_330 = "teal-330", t.TEAL_345 = "teal-345", t.TEAL_360 = "teal-360", t.TEAL_400 = "teal-400", t.TEAL_430 = "teal-430", t.TEAL_460 = "teal-460", t.TEAL_500 = "teal-500", t.TEAL_530 = "teal-530", t.TEAL_560 = "teal-560", t.TEAL_600 = "teal-600", t.TEAL_630 = "teal-630", t.TEAL_660 = "teal-660", t.TEAL_700 = "teal-700", t.TEAL_730 = "teal-730", t.TEAL_760 = "teal-760", t.TEAL_800 = "teal-800", t.TEAL_830 = "teal-830", t.TEAL_860 = "teal-860", t.TEAL_900 = "teal-900", t.TRANSPARENT = "transparent", t.TWITCH = "twitch", t.TWITTER = "twitter", t.WHITE_100 = "white-100", t.WHITE_130 = "white-130", t.WHITE_160 = "white-160", t.WHITE_200 = "white-200", t.WHITE_230 = "white-230", t.WHITE_260 = "white-260", t.WHITE_300 = "white-300", t.WHITE_330 = "white-330", t.WHITE_345 = "white-345", t.WHITE_360 = "white-360", t.WHITE_400 = "white-400", t.WHITE_430 = "white-430", t.WHITE_460 = "white-460", t.WHITE_500 = "white-500", t.WHITE_530 = "white-530", t.WHITE_560 = "white-560", t.WHITE_600 = "white-600", t.WHITE_630 = "white-630", t.WHITE_660 = "white-660", t.WHITE_700 = "white-700", t.WHITE_730 = "white-730", t.WHITE_760 = "white-760", t.WHITE_800 = "white-800", t.WHITE_830 = "white-830", t.WHITE_860 = "white-860", t.WHITE_900 = "white-900", t.XBOX = "xbox", t.YELLOW_100 = "yellow-100", t.YELLOW_130 = "yellow-130", t.YELLOW_160 = "yellow-160", t.YELLOW_200 = "yellow-200", t.YELLOW_230 = "yellow-230", t.YELLOW_260 = "yellow-260", t.YELLOW_300 = "yellow-300", t.YELLOW_330 = "yellow-330", t.YELLOW_345 = "yellow-345", t.YELLOW_360 = "yellow-360", t.YELLOW_400 = "yellow-400", t.YELLOW_430 = "yellow-430", t.YELLOW_460 = "yellow-460", t.YELLOW_500 = "yellow-500", t.YELLOW_530 = "yellow-530", t.YELLOW_560 = "yellow-560", t.YELLOW_600 = "yellow-600", t.YELLOW_630 = "yellow-630", t.YELLOW_660 = "yellow-660", t.YELLOW_700 = "yellow-700", t.YELLOW_730 = "yellow-730", t.YELLOW_760 = "yellow-760", t.YELLOW_800 = "yellow-800", t.YELLOW_830 = "yellow-830", t.YELLOW_860 = "yellow-860", t.YELLOW_900 = "yellow-900", t.YOUTUBE = "youtube";
    var t, I, a, r = (o(a = {}, "application-subscription-end", {
        hex: "#0177a4"
    }), o(a, "application-subscription-start", {
        hex: "#3442d9"
    }), o(a, "battlenet", {
        hex: "#009ae5"
    }), o(a, "bg-gradient-aurora-1", {
        hex: "#062053"
    }), o(a, "bg-gradient-aurora-2", {
        hex: "#191fbb"
    }), o(a, "bg-gradient-aurora-3", {
        hex: "#13929a"
    }), o(a, "bg-gradient-aurora-4", {
        hex: "#218573"
    }), o(a, "bg-gradient-aurora-5", {
        hex: "#051a81"
    }), o(a, "bg-gradient-chroma-glow-1", {
        hex: "#0eb5bf"
    }), o(a, "bg-gradient-chroma-glow-2", {
        hex: "#4c0ce0"
    }), o(a, "bg-gradient-chroma-glow-3", {
        hex: "#a308a7"
    }), o(a, "bg-gradient-chroma-glow-4", {
        hex: "#9a53ff"
    }), o(a, "bg-gradient-chroma-glow-5", {
        hex: "#218be0"
    }), o(a, "bg-gradient-citrus-sherbert-1", {
        hex: "#f3b336"
    }), o(a, "bg-gradient-citrus-sherbert-2", {
        hex: "#ee8558"
    }), o(a, "bg-gradient-cotton-candy-1", {
        hex: "#f4abb8"
    }), o(a, "bg-gradient-cotton-candy-2", {
        hex: "#b1c2fc"
    }), o(a, "bg-gradient-crimson-moon-1", {
        hex: "#950909"
    }), o(a, "bg-gradient-crimson-moon-2", {
        hex: "#000000"
    }), o(a, "bg-gradient-desert-khaki-1", {
        hex: "#e7dbd0"
    }), o(a, "bg-gradient-desert-khaki-2", {
        hex: "#dfd0b2"
    }), o(a, "bg-gradient-desert-khaki-3", {
        hex: "#e0d6a3"
    }), o(a, "bg-gradient-dusk-1", {
        hex: "#665069"
    }), o(a, "bg-gradient-dusk-2", {
        hex: "#91a3d1"
    }), o(a, "bg-gradient-easter-egg-1", {
        hex: "#7289da"
    }), o(a, "bg-gradient-easter-egg-2", {
        hex: "#4e5d94"
    }), o(a, "bg-gradient-forest-1", {
        hex: "#142215"
    }), o(a, "bg-gradient-forest-2", {
        hex: "#2d4d39"
    }), o(a, "bg-gradient-forest-3", {
        hex: "#454c32"
    }), o(a, "bg-gradient-forest-4", {
        hex: "#5a7c58"
    }), o(a, "bg-gradient-forest-5", {
        hex: "#a98e4b"
    }), o(a, "bg-gradient-hanami-1", {
        hex: "#efaab3"
    }), o(a, "bg-gradient-hanami-2", {
        hex: "#efd696"
    }), o(a, "bg-gradient-hanami-3", {
        hex: "#a6daa2"
    }), o(a, "bg-gradient-lofi-vibes-1", {
        hex: "#a4c0f7"
    }), o(a, "bg-gradient-lofi-vibes-2", {
        hex: "#a9e4e8"
    }), o(a, "bg-gradient-lofi-vibes-3", {
        hex: "#b0e2b8"
    }), o(a, "bg-gradient-lofi-vibes-4", {
        hex: "#cfdfa2"
    }), o(a, "bg-gradient-mars-1", {
        hex: "#895240"
    }), o(a, "bg-gradient-mars-2", {
        hex: "#8f4343"
    }), o(a, "bg-gradient-midnight-blurple-1", {
        hex: "#5348ca"
    }), o(a, "bg-gradient-midnight-blurple-2", {
        hex: "#140730"
    }), o(a, "bg-gradient-mint-apple-1", {
        hex: "#56b69f"
    }), o(a, "bg-gradient-mint-apple-2", {
        hex: "#63bc61"
    }), o(a, "bg-gradient-mint-apple-3", {
        hex: "#9eca67"
    }), o(a, "bg-gradient-neon-nights-1", {
        hex: "#01a89e"
    }), o(a, "bg-gradient-neon-nights-2", {
        hex: "#7d60ba"
    }), o(a, "bg-gradient-neon-nights-3", {
        hex: "#b43898"
    }), o(a, "bg-gradient-retro-raincloud-1", {
        hex: "#3a7ca1"
    }), o(a, "bg-gradient-retro-raincloud-2", {
        hex: "#7f7eb9"
    }), o(a, "bg-gradient-retro-storm-1", {
        hex: "#3a7ca1"
    }), o(a, "bg-gradient-retro-storm-2", {
        hex: "#58579a"
    }), o(a, "bg-gradient-sepia-1", {
        hex: "#857664"
    }), o(a, "bg-gradient-sepia-2", {
        hex: "#5b4421"
    }), o(a, "bg-gradient-strawberry-lemonade-1", {
        hex: "#af1a6c"
    }), o(a, "bg-gradient-strawberry-lemonade-2", {
        hex: "#c26b20"
    }), o(a, "bg-gradient-strawberry-lemonade-3", {
        hex: "#e7a525"
    }), o(a, "bg-gradient-sunrise-1", {
        hex: "#9f4175"
    }), o(a, "bg-gradient-sunrise-2", {
        hex: "#c49064"
    }), o(a, "bg-gradient-sunrise-3", {
        hex: "#a6953d"
    }), o(a, "bg-gradient-sunset-1", {
        hex: "#48288c"
    }), o(a, "bg-gradient-sunset-2", {
        hex: "#db7f4b"
    }), o(a, "bg-gradient-under-the-sea-1", {
        hex: "#647962"
    }), o(a, "bg-gradient-under-the-sea-2", {
        hex: "#588575"
    }), o(a, "bg-gradient-under-the-sea-3", {
        hex: "#6a8482"
    }), o(a, "black-100", {
        hex: "#f2f2f2"
    }), o(a, "black-130", {
        hex: "#e8e8e8"
    }), o(a, "black-160", {
        hex: "#dadada"
    }), o(a, "black-200", {
        hex: "#cccccc"
    }), o(a, "black-230", {
        hex: "#bdbdbd"
    }), o(a, "black-260", {
        hex: "#acacac"
    }), o(a, "black-300", {
        hex: "#999999"
    }), o(a, "black-330", {
        hex: "#7a7a7a"
    }), o(a, "black-345", {
        hex: "#666666"
    }), o(a, "black-360", {
        hex: "#5c5c5c"
    }), o(a, "black-400", {
        hex: "#333333"
    }), o(a, "black-430", {
        hex: "#252525"
    }), o(a, "black-460", {
        hex: "#141414"
    }), o(a, "black-500", {
        hex: "#000000"
    }), o(a, "black-530", {
        hex: "#000000"
    }), o(a, "black-560", {
        hex: "#000000"
    }), o(a, "black-600", {
        hex: "#000000"
    }), o(a, "black-630", {
        hex: "#000000"
    }), o(a, "black-660", {
        hex: "#000000"
    }), o(a, "black-700", {
        hex: "#000000"
    }), o(a, "black-730", {
        hex: "#000000"
    }), o(a, "black-760", {
        hex: "#000000"
    }), o(a, "black-800", {
        hex: "#000000"
    }), o(a, "black-830", {
        hex: "#000000"
    }), o(a, "black-860", {
        hex: "#000000"
    }), o(a, "black-900", {
        hex: "#000000"
    }), o(a, "blue-100", {
        hex: "#f6fafe"
    }), o(a, "blue-130", {
        hex: "#f0f7fe"
    }), o(a, "blue-160", {
        hex: "#e2f0fd"
    }), o(a, "blue-200", {
        hex: "#cde8fd"
    }), o(a, "blue-230", {
        hex: "#b2ddfc"
    }), o(a, "blue-260", {
        hex: "#94d2fc"
    }), o(a, "blue-300", {
        hex: "#66c4fd"
    }), o(a, "blue-330", {
        hex: "#2eb6ff"
    }), o(a, "blue-345", {
        hex: "#00aafc"
    }), o(a, "blue-360", {
        hex: "#0097f2"
    }), o(a, "blue-400", {
        hex: "#0082eb"
    }), o(a, "blue-430", {
        hex: "#006be7"
    }), o(a, "blue-460", {
        hex: "#005cd1"
    }), o(a, "blue-500", {
        hex: "#0051b6"
    }), o(a, "blue-530", {
        hex: "#00489b"
    }), o(a, "blue-560", {
        hex: "#004088"
    }), o(a, "blue-600", {
        hex: "#003976"
    }), o(a, "blue-630", {
        hex: "#00336a"
    }), o(a, "blue-660", {
        hex: "#002d5f"
    }), o(a, "blue-700", {
        hex: "#002855"
    }), o(a, "blue-730", {
        hex: "#002348"
    }), o(a, "blue-760", {
        hex: "#001e3f"
    }), o(a, "blue-800", {
        hex: "#001a36"
    }), o(a, "blue-830", {
        hex: "#001630"
    }), o(a, "blue-860", {
        hex: "#00132b"
    }), o(a, "blue-900", {
        hex: "#001024"
    }), o(a, "brand-100", {
        hex: "#f7f7fe"
    }), o(a, "brand-130", {
        hex: "#f0f1fe"
    }), o(a, "brand-160", {
        hex: "#e7e9fd"
    }), o(a, "brand-200", {
        hex: "#dee0fc"
    }), o(a, "brand-230", {
        hex: "#d4d7fc"
    }), o(a, "brand-260", {
        hex: "#c9cdfb"
    }), o(a, "brand-300", {
        hex: "#bcc1fa"
    }), o(a, "brand-330", {
        hex: "#a8aff8"
    }), o(a, "brand-345", {
        hex: "#9ba3f7"
    }), o(a, "brand-360", {
        hex: "#949cf7"
    }), o(a, "brand-400", {
        hex: "#7984f5"
    }), o(a, "brand-430", {
        hex: "#707bf4"
    }), o(a, "brand-460", {
        hex: "#6571f3"
    }), o(a, "brand-500", {
        hex: "#5865f2"
    }), o(a, "brand-530", {
        hex: "#505cdc"
    }), o(a, "brand-560", {
        hex: "#4752c4"
    }), o(a, "brand-600", {
        hex: "#3c45a5"
    }), o(a, "brand-630", {
        hex: "#343b8f"
    }), o(a, "brand-660", {
        hex: "#2d347d"
    }), o(a, "brand-700", {
        hex: "#232861"
    }), o(a, "brand-730", {
        hex: "#21265b"
    }), o(a, "brand-760", {
        hex: "#1e2353"
    }), o(a, "brand-800", {
        hex: "#1a1e49"
    }), o(a, "brand-830", {
        hex: "#141738"
    }), o(a, "brand-860", {
        hex: "#0d0f24"
    }), o(a, "brand-900", {
        hex: "#04050c"
    }), o(a, "bungie", {
        hex: "#00a3e3"
    }), o(a, "crunchyroll", {
        hex: "#f78b24"
    }), o(a, "discord-8th-bday-blue", {
        hex: "#5665f9"
    }), o(a, "discord-8th-bday-dark-blue", {
        hex: "#3241e0"
    }), o(a, "discord-8th-bday-green", {
        hex: "#a4ef00"
    }), o(a, "discord-8th-bday-light-blue", {
        hex: "#5e8fff"
    }), o(a, "discord-8th-bday-pink", {
        hex: "#ff52d2"
    }), o(a, "discord-8th-bday-purple", {
        hex: "#5665F9"
    }), o(a, "discord-8th-bday-yellow", {
        hex: "#ffff00"
    }), o(a, "ebay", {
        hex: "#0064d2"
    }), o(a, "epic-games", {
        hex: "#3c3935"
    }), o(a, "facebook", {
        hex: "#355089"
    }), o(a, "github", {
        hex: "#191717"
    }), o(a, "gold", {
        hex: "#ffc819"
    }), o(a, "green-100", {
        hex: "#ecfef1"
    }), o(a, "green-130", {
        hex: "#defee7"
    }), o(a, "green-160", {
        hex: "#bdfcd3"
    }), o(a, "green-200", {
        hex: "#88fbb5"
    }), o(a, "green-230", {
        hex: "#58f39c"
    }), o(a, "green-260", {
        hex: "#48e58b"
    }), o(a, "green-300", {
        hex: "#3bd67f"
    }), o(a, "green-330", {
        hex: "#2dc771"
    }), o(a, "green-345", {
        hex: "#26b968"
    }), o(a, "green-360", {
        hex: "#23a55a"
    }), o(a, "green-400", {
        hex: "#24934e"
    }), o(a, "green-430", {
        hex: "#248045"
    }), o(a, "green-460", {
        hex: "#1f703c"
    }), o(a, "green-500", {
        hex: "#1a6334"
    }), o(a, "green-530", {
        hex: "#15562b"
    }), o(a, "green-560", {
        hex: "#124c24"
    }), o(a, "green-600", {
        hex: "#0e431f"
    }), o(a, "green-630", {
        hex: "#0c3c1c"
    }), o(a, "green-660", {
        hex: "#0a3618"
    }), o(a, "green-700", {
        hex: "#072f15"
    }), o(a, "green-730", {
        hex: "#052910"
    }), o(a, "green-760", {
        hex: "#03240e"
    }), o(a, "green-800", {
        hex: "#031f0c"
    }), o(a, "green-830", {
        hex: "#031b0a"
    }), o(a, "green-860", {
        hex: "#041708"
    }), o(a, "green-900", {
        hex: "#051307"
    }), o(a, "guild-boosting-blue", {
        hex: "#3e70dd"
    }), o(a, "guild-boosting-blue-for-gradients", {
        hex: "#3442d9"
    }), o(a, "guild-boosting-pink", {
        hex: "#ff73fa"
    }), o(a, "guild-boosting-purple", {
        hex: "#b377f3"
    }), o(a, "guild-boosting-purple-for-gradients", {
        hex: "#9b44f7"
    }), o(a, "hypesquad-house-1", {
        hex: "#9c84ef"
    }), o(a, "hypesquad-house-2", {
        hex: "#f47b67"
    }), o(a, "hypesquad-house-3", {
        hex: "#45ddc0"
    }), o(a, "input-placeholder-text-dark", {
        hex: "#87898c"
    }), o(a, "lol", {
        hex: "#021f25"
    }), o(a, "orange-100", {
        hex: "#fff8f5"
    }), o(a, "orange-130", {
        hex: "#fff4ed"
    }), o(a, "orange-160", {
        hex: "#feeadf"
    }), o(a, "orange-200", {
        hex: "#fddecd"
    }), o(a, "orange-230", {
        hex: "#fccfb2"
    }), o(a, "orange-260", {
        hex: "#fcbd95"
    }), o(a, "orange-300", {
        hex: "#fbab70"
    }), o(a, "orange-330", {
        hex: "#fa9746"
    }), o(a, "orange-345", {
        hex: "#f1882a"
    }), o(a, "orange-360", {
        hex: "#db7628"
    }), o(a, "orange-400", {
        hex: "#c46926"
    }), o(a, "orange-430", {
        hex: "#ac591f"
    }), o(a, "orange-460", {
        hex: "#9b4c19"
    }), o(a, "orange-500", {
        hex: "#8c4013"
    }), o(a, "orange-530", {
        hex: "#7b3710"
    }), o(a, "orange-560", {
        hex: "#6d300e"
    }), o(a, "orange-600", {
        hex: "#5f2b0b"
    }), o(a, "orange-630", {
        hex: "#56260a"
    }), o(a, "orange-660", {
        hex: "#4c2209"
    }), o(a, "orange-700", {
        hex: "#431e09"
    }), o(a, "orange-730", {
        hex: "#3b1a07"
    }), o(a, "orange-760", {
        hex: "#331606"
    }), o(a, "orange-800", {
        hex: "#2d1305"
    }), o(a, "orange-830", {
        hex: "#261005"
    }), o(a, "orange-860", {
        hex: "#200e05"
    }), o(a, "orange-900", {
        hex: "#190d04"
    }), o(a, "partner", {
        hex: "#4087ed"
    }), o(a, "paypal", {
        hex: "#13216b"
    }), o(a, "playstation", {
        hex: "#032f87"
    }), o(a, "plum-23-alpha", {
        hex: "#A5B0E9"
    }), o(a, "plum-0", {
        hex: "#f9f9fa"
    }), o(a, "plum-1", {
        hex: "#f3f3f4"
    }), o(a, "plum-10", {
        hex: "#818491"
    }), o(a, "plum-11", {
        hex: "#6c6f7c"
    }), o(a, "plum-12", {
        hex: "#5b5e6a"
    }), o(a, "plum-13", {
        hex: "#4d505b"
    }), o(a, "plum-14", {
        hex: "#41434d"
    }), o(a, "plum-15", {
        hex: "#383a43"
    }), o(a, "plum-16", {
        hex: "#31323b"
    }), o(a, "plum-17", {
        hex: "#2c2d35"
    }), o(a, "plum-18", {
        hex: "#26272f"
    }), o(a, "plum-19", {
        hex: "#212229"
    }), o(a, "plum-2", {
        hex: "#ecedef"
    }), o(a, "plum-20", {
        hex: "#1c1d23"
    }), o(a, "plum-21", {
        hex: "#18191f"
    }), o(a, "plum-22", {
        hex: "#16161c"
    }), o(a, "plum-23", {
        hex: "#131318"
    }), o(a, "plum-24", {
        hex: "#0f1014"
    }), o(a, "plum-25", {
        hex: "#0c0c10"
    }), o(a, "plum-26", {
        hex: "#08080b"
    }), o(a, "plum-3", {
        hex: "#e4e5e8"
    }), o(a, "plum-4", {
        hex: "#dddee1"
    }), o(a, "plum-5", {
        hex: "#d3d5d9"
    }), o(a, "plum-6", {
        hex: "#c7c8ce"
    }), o(a, "plum-7", {
        hex: "#b8bac1"
    }), o(a, "plum-8", {
        hex: "#a8aab4"
    }), o(a, "plum-9", {
        hex: "#9597a3"
    }), o(a, "premium-perk-blue", {
        hex: "#80a6ff"
    }), o(a, "premium-perk-blue-alt", {
        hex: "#9cb8ff"
    }), o(a, "premium-perk-dark-blue", {
        hex: "#4173da"
    }), o(a, "premium-perk-gold", {
        hex: "#faa61a"
    }), o(a, "premium-perk-green", {
        hex: "#86dcc5"
    }), o(a, "premium-perk-light-blue", {
        hex: "#aec7ff"
    }), o(a, "premium-perk-orange", {
        hex: "#fc964b"
    }), o(a, "premium-perk-pink", {
        hex: "#ff80f4"
    }), o(a, "premium-perk-purple", {
        hex: "#d09aff"
    }), o(a, "premium-perk-yellow", {
        hex: "#fed648"
    }), o(a, "premium-tier-0-blue", {
        hex: "#007cc2"
    }), o(a, "premium-tier-0-blue-for-gradients", {
        hex: "#007cc2"
    }), o(a, "premium-tier-0-blue-for-gradients-2", {
        hex: "#1776cf"
    }), o(a, "premium-tier-0-header-gradient-1", {
        hex: "#3736bb"
    }), o(a, "premium-tier-0-header-gradient-2", {
        hex: "#4670e8"
    }), o(a, "premium-tier-0-header-gradient-3", {
        hex: "#8377eb"
    }), o(a, "premium-tier-0-header-gradient-4", {
        hex: "#e782f1"
    }), o(a, "premium-tier-0-header-gradient-5", {
        hex: "#df90af"
    }), o(a, "premium-tier-0-purple", {
        hex: "#5865f2"
    }), o(a, "premium-tier-0-purple-for-gradients", {
        hex: "#5865f2"
    }), o(a, "premium-tier-1-blue", {
        hex: "#738ef5"
    }), o(a, "premium-tier-1-blue-for-gradients", {
        hex: "#5865f2"
    }), o(a, "premium-tier-1-dark-blue-for-gradients", {
        hex: "#3442d9"
    }), o(a, "premium-tier-1-purple", {
        hex: "#b3aeff"
    }), o(a, "premium-tier-2-pink", {
        hex: "#e292aa"
    }), o(a, "premium-tier-2-pink-for-gradients", {
        hex: "#ab5d8a"
    }), o(a, "premium-tier-2-pink-for-gradients-2", {
        hex: "#b73ec1"
    }), o(a, "premium-tier-2-purple", {
        hex: "#b473f5"
    }), o(a, "premium-tier-2-purple-for-gradients", {
        hex: "#8547c6"
    }), o(a, "premium-tier-2-purple-for-gradients-2", {
        hex: "#b845c1"
    }), o(a, "primary-100", {
        hex: "#f9f9f9"
    }), o(a, "primary-130", {
        hex: "#f2f3f5"
    }), o(a, "primary-160", {
        hex: "#ebedef"
    }), o(a, "primary-200", {
        hex: "#e3e5e8"
    }), o(a, "primary-230", {
        hex: "#dbdee1"
    }), o(a, "primary-260", {
        hex: "#d2d5d9"
    }), o(a, "primary-300", {
        hex: "#c4c9ce"
    }), o(a, "primary-330", {
        hex: "#b5bac1"
    }), o(a, "primary-345", {
        hex: "#a5abb3"
    }), o(a, "primary-360", {
        hex: "#949ba4"
    }), o(a, "primary-400", {
        hex: "#80848e"
    }), o(a, "primary-430", {
        hex: "#6d6f78"
    }), o(a, "primary-460", {
        hex: "#5c5e66"
    }), o(a, "primary-500", {
        hex: "#4e5058"
    }), o(a, "primary-530", {
        hex: "#41434a"
    }), o(a, "primary-560", {
        hex: "#383a40"
    }), o(a, "primary-600", {
        hex: "#313338"
    }), o(a, "primary-630", {
        hex: "#2b2d31"
    }), o(a, "primary-645", {
        hex: "#282a2e"
    }), o(a, "primary-660", {
        hex: "#232428"
    }), o(a, "primary-700", {
        hex: "#1e1f22"
    }), o(a, "primary-730", {
        hex: "#1a1b1e"
    }), o(a, "primary-760", {
        hex: "#161719"
    }), o(a, "primary-800", {
        hex: "#111214"
    }), o(a, "primary-830", {
        hex: "#0c0c0d"
    }), o(a, "primary-860", {
        hex: "#060607"
    }), o(a, "primary-900", {
        hex: "#020202"
    }), o(a, "red-100", {
        hex: "#fef8f9"
    }), o(a, "red-130", {
        hex: "#fef4f4"
    }), o(a, "red-160", {
        hex: "#feeaea"
    }), o(a, "red-200", {
        hex: "#fdddde"
    }), o(a, "red-230", {
        hex: "#fbcdce"
    }), o(a, "red-260", {
        hex: "#fbbabb"
    }), o(a, "red-300", {
        hex: "#fba6a8"
    }), o(a, "red-330", {
        hex: "#fa9193"
    }), o(a, "red-345", {
        hex: "#fa777b"
    }), o(a, "red-360", {
        hex: "#f85b5f"
    }), o(a, "red-400", {
        hex: "#f23f43"
    }), o(a, "red-430", {
        hex: "#da373c"
    }), o(a, "red-460", {
        hex: "#bb3033"
    }), o(a, "red-500", {
        hex: "#a12829"
    }), o(a, "red-530", {
        hex: "#8f2022"
    }), o(a, "red-560", {
        hex: "#7f1c1e"
    }), o(a, "red-600", {
        hex: "#70181a"
    }), o(a, "red-630", {
        hex: "#651517"
    }), o(a, "red-660", {
        hex: "#5a1314"
    }), o(a, "red-700", {
        hex: "#501012"
    }), o(a, "red-730", {
        hex: "#460e0f"
    }), o(a, "red-760", {
        hex: "#3f0b0c"
    }), o(a, "red-800", {
        hex: "#360a0b"
    }), o(a, "red-830", {
        hex: "#2e090a"
    }), o(a, "red-860", {
        hex: "#280808"
    }), o(a, "red-900", {
        hex: "#220606"
    }), o(a, "reddit", {
        hex: "#ff4500"
    }), o(a, "riot-games", {
        hex: "#ea0029"
    }), o(a, "role-blue", {
        hex: "#206694"
    }), o(a, "role-brown", {
        hex: "#a84300"
    }), o(a, "role-burgundy", {
        hex: "#ad1457"
    }), o(a, "role-dark-blue", {
        hex: "#546e7a"
    }), o(a, "role-dark-grey", {
        hex: "#607d8b"
    }), o(a, "role-dark-purple", {
        hex: "#71368a"
    }), o(a, "role-dark-teal", {
        hex: "#11806a"
    }), o(a, "role-default", {
        hex: "#99aab5"
    }), o(a, "role-green", {
        hex: "#1f8b4c"
    }), o(a, "role-grey", {
        hex: "#979c9f"
    }), o(a, "role-light-blue", {
        hex: "#99aab5"
    }), o(a, "role-light-green", {
        hex: "#2ecc71"
    }), o(a, "role-light-grey", {
        hex: "#95a5a6"
    }), o(a, "role-magenta", {
        hex: "#e91e63"
    }), o(a, "role-orange", {
        hex: "#e67e22"
    }), o(a, "role-purple", {
        hex: "#9b59b6"
    }), o(a, "role-salmon", {
        hex: "#e74c3c"
    }), o(a, "role-sky-blue", {
        hex: "#3498db"
    }), o(a, "role-tan", {
        hex: "#c27c0e"
    }), o(a, "role-teal", {
        hex: "#1abc9c"
    }), o(a, "role-terracotta", {
        hex: "#992d22"
    }), o(a, "role-yellow", {
        hex: "#f1c40f"
    }), o(a, "samsung", {
        hex: "#1429a0"
    }), o(a, "skype", {
        hex: "#009dd7"
    }), o(a, "spotify", {
        hex: "#1db954"
    }), o(a, "steam", {
        hex: "#182332"
    }), o(a, "teal-100", {
        hex: "#f4fbfd"
    }), o(a, "teal-130", {
        hex: "#e9f9fd"
    }), o(a, "teal-160", {
        hex: "#d3f4fb"
    }), o(a, "teal-200", {
        hex: "#b1eff9"
    }), o(a, "teal-230", {
        hex: "#7ee7f7"
    }), o(a, "teal-260", {
        hex: "#5edbef"
    }), o(a, "teal-300", {
        hex: "#47cbe2"
    }), o(a, "teal-330", {
        hex: "#35bcd5"
    }), o(a, "teal-345", {
        hex: "#2eb0c9"
    }), o(a, "teal-360", {
        hex: "#289fb6"
    }), o(a, "teal-400", {
        hex: "#248da1"
    }), o(a, "teal-430", {
        hex: "#207a8d"
    }), o(a, "teal-460", {
        hex: "#1b6b7c"
    }), o(a, "teal-500", {
        hex: "#175e6d"
    }), o(a, "teal-530", {
        hex: "#13525f"
    }), o(a, "teal-560", {
        hex: "#0f4954"
    }), o(a, "teal-600", {
        hex: "#0c4049"
    }), o(a, "teal-630", {
        hex: "#0a3942"
    }), o(a, "teal-660", {
        hex: "#08333a"
    }), o(a, "teal-700", {
        hex: "#062d34"
    }), o(a, "teal-730", {
        hex: "#05272d"
    }), o(a, "teal-760", {
        hex: "#042227"
    }), o(a, "teal-800", {
        hex: "#031d21"
    }), o(a, "teal-830", {
        hex: "#02191d"
    }), o(a, "teal-860", {
        hex: "#021619"
    }), o(a, "teal-900", {
        hex: "#011215"
    }), o(a, "transparent", {
        hex: "#00000000"
    }), o(a, "twitch", {
        hex: "#593695"
    }), o(a, "twitter", {
        hex: "#1da1f2"
    }), o(a, "white-100", {
        hex: "#ffffff"
    }), o(a, "white-130", {
        hex: "#ffffff"
    }), o(a, "white-160", {
        hex: "#ffffff"
    }), o(a, "white-200", {
        hex: "#ffffff"
    }), o(a, "white-230", {
        hex: "#ffffff"
    }), o(a, "white-260", {
        hex: "#ffffff"
    }), o(a, "white-300", {
        hex: "#ffffff"
    }), o(a, "white-330", {
        hex: "#ffffff"
    }), o(a, "white-345", {
        hex: "#ffffff"
    }), o(a, "white-360", {
        hex: "#ffffff"
    }), o(a, "white-400", {
        hex: "#ffffff"
    }), o(a, "white-430", {
        hex: "#ffffff"
    }), o(a, "white-460", {
        hex: "#ffffff"
    }), o(a, "white-500", {
        hex: "#ffffff"
    }), o(a, "white-530", {
        hex: "#e8e8e8"
    }), o(a, "white-560", {
        hex: "#cfcfcf"
    }), o(a, "white-600", {
        hex: "#adadad"
    }), o(a, "white-630", {
        hex: "#969696"
    }), o(a, "white-660", {
        hex: "#838383"
    }), o(a, "white-700", {
        hex: "#666666"
    }), o(a, "white-730", {
        hex: "#5f5f5f"
    }), o(a, "white-760", {
        hex: "#585858"
    }), o(a, "white-800", {
        hex: "#4d4d4d"
    }), o(a, "white-830", {
        hex: "#3b3b3b"
    }), o(a, "white-860", {
        hex: "#262626"
    }), o(a, "white-900", {
        hex: "#0d0d0d"
    }), o(a, "xbox", {
        hex: "#107c10"
    }), o(a, "yellow-100", {
        hex: "#fff8ef"
    }), o(a, "yellow-130", {
        hex: "#fff4e8"
    }), o(a, "yellow-160", {
        hex: "#ffebd3"
    }), o(a, "yellow-200", {
        hex: "#fee0b6"
    }), o(a, "yellow-230", {
        hex: "#fdd18c"
    }), o(a, "yellow-260", {
        hex: "#fcc145"
    }), o(a, "yellow-300", {
        hex: "#f0b232"
    }), o(a, "yellow-330", {
        hex: "#e1a42a"
    }), o(a, "yellow-345", {
        hex: "#d49824"
    }), o(a, "yellow-360", {
        hex: "#bf861c"
    }), o(a, "yellow-400", {
        hex: "#af7615"
    }), o(a, "yellow-430", {
        hex: "#9a650d"
    }), o(a, "yellow-460", {
        hex: "#8a5709"
    }), o(a, "yellow-500", {
        hex: "#7c4b04"
    }), o(a, "yellow-530", {
        hex: "#6d4104"
    }), o(a, "yellow-560", {
        hex: "#613803"
    }), o(a, "yellow-600", {
        hex: "#543203"
    }), o(a, "yellow-630", {
        hex: "#4c2d03"
    }), o(a, "yellow-660", {
        hex: "#432803"
    }), o(a, "yellow-700", {
        hex: "#3b2303"
    }), o(a, "yellow-730", {
        hex: "#351e02"
    }), o(a, "yellow-760", {
        hex: "#2e1a02"
    }), o(a, "yellow-800", {
        hex: "#271602"
    }), o(a, "yellow-830", {
        hex: "#221302"
    }), o(a, "yellow-860", {
        hex: "#1c1002"
    }), o(a, "yellow-900", {
        hex: "#160e02"
    }), o(a, "youtube", {
        hex: "#cb2120"
    }), a)
}
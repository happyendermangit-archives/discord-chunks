function(e, t, n) {
    "use strict";
    var i, r, a, s, o, l, u, d;
    n.r(t), n.d(t, {
        EMOJI_PICKER_TAB_ID: function() {
            return I
        },
        EMOJI_PICKER_TAB_PANEL_ID: function() {
            return E
        },
        EMOJI_ROW_SIZE: function() {
            return m
        },
        EMOJI_SIZE_MAP: function() {
            return A
        },
        EmojiCategories: function() {
            return r
        },
        EmojiCategoryTypes: function() {
            return i
        },
        EmojiSize: function() {
            return s
        },
        EmojiSubCategory: function() {
            return a
        },
        GIF_PICKER_TAB_ID: function() {
            return h
        },
        GIF_PICKER_TAB_PANEL_ID: function() {
            return S
        },
        GRID_NAVIGATOR_ID: function() {
            return _
        },
        INACTIVE_CATEGORY_INDEX: function() {
            return c
        },
        SOUNDBOARD_PICKER_TAB_ID: function() {
            return f
        },
        SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
            return T
        }
    }), (o = i || (i = {})).GUILD = "GUILD", o.UNICODE = "UNICODE", o.RECENT = "RECENT", o.CUSTOM = "CUSTOM", o.SEARCH_RESULTS = "SEARCH_RESULTS", o.FAVORITES = "FAVORITES", o.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", o.PREMIUM_UPSELL = "PREMIUM_UPSELL";
    let _ = "emoji-picker-grid";
    (l = r || (r = {})).RECENT = "recent", l.FAVORITES = "favorites", l.TOP_GUILD_EMOJI = "top guild emoji", l.CUSTOM = "custom", l.PEOPLE = "people", l.NATURE = "nature", l.FOOD = "food", l.ACTIVITY = "activity", l.TRAVEL = "travel", l.OBJECTS = "objects", l.SYMBOLS = "symbols", l.FLAGS = "flags", l.PREMIUM_UPSELL = "premium emoji", (u = a || (a = {})).NONE = "", u.TOP_GUILD_EMOJI = "top_server", u.NEWLY_ADDED_EMOJI = "newly_added";
    let c = -1;
    (d = s || (s = {}))[d.MEDIUM = 40] = "MEDIUM", d[d.LARGE = 48] = "LARGE";
    let E = "emoji-picker-tab-panel",
        I = "emoji-picker-tab",
        T = "soundboard-picker-tab-panel",
        f = "soundboard-picker-tab",
        S = "gif-picker-tab-panel",
        h = "gif-picker-tab",
        A = {
            reaction: 32,
            default: 44,
            jumbo: 96
        },
        m = 9
}
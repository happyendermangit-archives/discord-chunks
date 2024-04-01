function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d, _, c;
    n.r(t), n.d(t, {
        EMOJI_PICKER_TAB_ID: function() {
            return f
        },
        EMOJI_PICKER_TAB_PANEL_ID: function() {
            return T
        },
        EMOJI_ROW_SIZE: function() {
            return O
        },
        EMOJI_SIZE_MAP: function() {
            return N
        },
        EmojiCategories: function() {
            return r
        },
        EmojiCategoryTypes: function() {
            return i
        },
        EmojiSize: function() {
            return o
        },
        EmojiSubCategory: function() {
            return s
        },
        GIF_PICKER_TAB_ID: function() {
            return m
        },
        GIF_PICKER_TAB_PANEL_ID: function() {
            return A
        },
        GRID_NAVIGATOR_ID: function() {
            return E
        },
        INACTIVE_CATEGORY_INDEX: function() {
            return I
        },
        SOUNDBOARD_PICKER_TAB_ID: function() {
            return h
        },
        SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
            return S
        }
    }), (l = i || (i = {})).GUILD = "GUILD", l.UNICODE = "UNICODE", l.RECENT = "RECENT", l.CUSTOM = "CUSTOM", l.SEARCH_RESULTS = "SEARCH_RESULTS", l.FAVORITES = "FAVORITES", l.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", l.PREMIUM_UPSELL = "PREMIUM_UPSELL";
    let E = "emoji-picker-grid";
    (u = r || (r = {})).RECENT = "recent", u.FAVORITES = "favorites", u.TOP_GUILD_EMOJI = "top guild emoji", u.CUSTOM = "custom", u.PEOPLE = "people", u.NATURE = "nature", u.FOOD = "food", u.ACTIVITY = "activity", u.TRAVEL = "travel", u.OBJECTS = "objects", u.SYMBOLS = "symbols", u.FLAGS = "flags", u.PREMIUM_UPSELL = "premium emoji", (d = s || (s = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (_ = a || (a = {}))[_.EMOJI = 0] = "EMOJI", _[_.NSFW = 1] = "NSFW";
    let I = -1;
    (c = o || (o = {}))[c.MEDIUM = 40] = "MEDIUM", c[c.LARGE = 48] = "LARGE";
    let T = "emoji-picker-tab-panel",
        f = "emoji-picker-tab",
        S = "soundboard-picker-tab-panel",
        h = "soundboard-picker-tab",
        A = "gif-picker-tab-panel",
        m = "gif-picker-tab",
        N = {
            reaction: 32,
            default: 44,
            jumbo: 96
        },
        O = 9
}
function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, c;
    n.r(t), n.d(t, {
        EMOJI_MAX_SLOTS: function() {
            return d
        },
        EMOJI_MAX_LENGTH: function() {
            return f
        },
        EMOJI_RE: function() {
            return E
        },
        EMOJI_MAX_FILESIZE_KB: function() {
            return p
        },
        EMOJI_MAX_FILESIZE: function() {
            return h
        },
        EmojiSprites: function() {
            return i
        },
        EmojiDisabledReasons: function() {
            return r
        },
        EmojiIntention: function() {
            return s
        },
        EmojiInteractionPoint: function() {
            return a
        },
        isExternalEmojiAllowedForIntention: function() {
            return S
        }
    }), n("222007");
    let d = 50,
        f = 32,
        E = /[^a-zA-Z0-9_]/g,
        p = 256,
        h = 1024 * p;
    (o = i || (i = {}))[o.NonDiversityPerRow = 42] = "NonDiversityPerRow", o[o.DiversityPerRow = 10] = "DiversityPerRow", o[o.PickerPerRow = 11] = "PickerPerRow", o[o.PickerCount = 50] = "PickerCount", (l = r || (r = {}))[l.DISALLOW_EXTERNAL = 0] = "DISALLOW_EXTERNAL", l[l.GUILD_SUBSCRIPTION_UNAVAILABLE = 1] = "GUILD_SUBSCRIPTION_UNAVAILABLE", l[l.PREMIUM_LOCKED = 2] = "PREMIUM_LOCKED", l[l.ONLY_GUILD_EMOJIS_ALLOWED = 3] = "ONLY_GUILD_EMOJIS_ALLOWED", l[l.ROLE_SUBSCRIPTION_LOCKED = 4] = "ROLE_SUBSCRIPTION_LOCKED", l[l.ROLE_SUBSCRIPTION_UNAVAILABLE = 5] = "ROLE_SUBSCRIPTION_UNAVAILABLE", (u = s || (s = {}))[u.REACTION = 0] = "REACTION", u[u.STATUS = 1] = "STATUS", u[u.COMMUNITY_CONTENT = 2] = "COMMUNITY_CONTENT", u[u.CHAT = 3] = "CHAT", u[u.GUILD_STICKER_RELATED_EMOJI = 4] = "GUILD_STICKER_RELATED_EMOJI", u[u.GUILD_ROLE_BENEFIT_EMOJI = 5] = "GUILD_ROLE_BENEFIT_EMOJI", u[u.COMMUNITY_CONTENT_ONLY = 6] = "COMMUNITY_CONTENT_ONLY", u[u.SOUNDBOARD = 7] = "SOUNDBOARD", u[u.VOICE_CHANNEL_TOPIC = 8] = "VOICE_CHANNEL_TOPIC", u[u.GIFT = 9] = "GIFT", u[u.AUTO_SUGGESTION = 10] = "AUTO_SUGGESTION", u[u.POLLS = 11] = "POLLS";
    let _ = new Set([2, 6, 4, 5, 7, 9]);

    function S(e) {
        return !_.has(e)
    }(c = a || (a = {})).EmojiButtonMouseEntered = "EMOJI_BUTTON_MOUSE_ENTERED", c.EmojiButtonFocused = "EMOJI_BUTTON_FOCUSED", c.ChatInputExpressionPressed = "CHAT_INPUT_EXPRESSION_PRESSED", c.ChatInputSuggestionsShown = "CHAT_INPUT_SUGGESTIONS_SHOWN", c.SearchEmojiKeybindPressed = "SEARCH_EMOJI_KEYBIND_PRESSED", c.AutocompleteTyped = "AUTOCOMPLETE_TYPED", c.AutocompleteWrapperShown = "AUTOCOMPLETE_WRAPPER_SHOWN", c.GuildLeaveModalShown = "GUILD_LEAVE_MODAL_SHOWN", c.AddReactionPopoutMouseEntered = "ADD_REACTION_POPOUT_MOUSE_ENTERED", c.AddReactionPopoutFocused = "ADD_REACTION_POPOUT_FOCUSED", c.MessageContextMenuMouseEntered = "MESSAGE_CONTEXT_MENU_MOUSE_ENTERED", c.EmojiPickerActionSheetOpened = "EMOJI_PICKER_ACTION_SHEET_OPENED", c.TrackOpenPopoutUsed = "TRACK_OPEN_POPOUT_USED", c.CustomEmojiTooltipShown = "CUSTOM_EMOJI_TOOLTIP_SHOWN"
}
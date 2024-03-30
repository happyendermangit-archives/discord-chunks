function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMOJI_MAX_FILESIZE: function() {
            return p
        },
        EMOJI_MAX_FILESIZE_KB: function() {
            return E
        },
        EMOJI_MAX_LENGTH: function() {
            return d
        },
        EMOJI_MAX_SLOTS: function() {
            return f
        },
        EMOJI_RE: function() {
            return _
        },
        EmojiDisabledReasons: function() {
            return s
        },
        EmojiIntention: function() {
            return l
        },
        EmojiInteractionPoint: function() {
            return c
        },
        EmojiSprites: function() {
            return u
        },
        isExternalEmojiAllowedForIntention: function() {
            return y
        }
    });
    var r, o, i, a, u, s, l, c, f = 50,
        d = 32,
        _ = /[^a-zA-Z0-9_]/g,
        E = 256,
        p = 262144;
    (r = u || (u = {}))[r.NonDiversityPerRow = 42] = "NonDiversityPerRow", r[r.DiversityPerRow = 10] = "DiversityPerRow", r[r.PickerPerRow = 11] = "PickerPerRow", r[r.PickerCount = 50] = "PickerCount", (o = s || (s = {}))[o.DISALLOW_EXTERNAL = 0] = "DISALLOW_EXTERNAL", o[o.GUILD_SUBSCRIPTION_UNAVAILABLE = 1] = "GUILD_SUBSCRIPTION_UNAVAILABLE", o[o.PREMIUM_LOCKED = 2] = "PREMIUM_LOCKED", o[o.ONLY_GUILD_EMOJIS_ALLOWED = 3] = "ONLY_GUILD_EMOJIS_ALLOWED", o[o.ROLE_SUBSCRIPTION_LOCKED = 4] = "ROLE_SUBSCRIPTION_LOCKED", o[o.ROLE_SUBSCRIPTION_UNAVAILABLE = 5] = "ROLE_SUBSCRIPTION_UNAVAILABLE", (i = l || (l = {}))[i.REACTION = 0] = "REACTION", i[i.STATUS = 1] = "STATUS", i[i.COMMUNITY_CONTENT = 2] = "COMMUNITY_CONTENT", i[i.CHAT = 3] = "CHAT", i[i.GUILD_STICKER_RELATED_EMOJI = 4] = "GUILD_STICKER_RELATED_EMOJI", i[i.GUILD_ROLE_BENEFIT_EMOJI = 5] = "GUILD_ROLE_BENEFIT_EMOJI", i[i.COMMUNITY_CONTENT_ONLY = 6] = "COMMUNITY_CONTENT_ONLY", i[i.SOUNDBOARD = 7] = "SOUNDBOARD", i[i.VOICE_CHANNEL_TOPIC = 8] = "VOICE_CHANNEL_TOPIC", i[i.GIFT = 9] = "GIFT", i[i.AUTO_SUGGESTION = 10] = "AUTO_SUGGESTION", i[i.POLLS = 11] = "POLLS";
    var m = new Set([2, 6, 4, 5, 7, 9]);

    function y(e) {
        return !m.has(e)
    }(a = c || (c = {})).EmojiButtonMouseEntered = "EMOJI_BUTTON_MOUSE_ENTERED", a.EmojiButtonFocused = "EMOJI_BUTTON_FOCUSED", a.ChatInputExpressionPressed = "CHAT_INPUT_EXPRESSION_PRESSED", a.ChatInputSuggestionsShown = "CHAT_INPUT_SUGGESTIONS_SHOWN", a.SearchEmojiKeybindPressed = "SEARCH_EMOJI_KEYBIND_PRESSED", a.AutocompleteTyped = "AUTOCOMPLETE_TYPED", a.AutocompleteWrapperShown = "AUTOCOMPLETE_WRAPPER_SHOWN", a.GuildLeaveModalShown = "GUILD_LEAVE_MODAL_SHOWN", a.AddReactionPopoutMouseEntered = "ADD_REACTION_POPOUT_MOUSE_ENTERED", a.AddReactionPopoutFocused = "ADD_REACTION_POPOUT_FOCUSED", a.MessageContextMenuMouseEntered = "MESSAGE_CONTEXT_MENU_MOUSE_ENTERED", a.EmojiPickerActionSheetOpened = "EMOJI_PICKER_ACTION_SHEET_OPENED", a.TrackOpenPopoutUsed = "TRACK_OPEN_POPOUT_USED", a.CustomEmojiTooltipShown = "CUSTOM_EMOJI_TOOLTIP_SHOWN"
}
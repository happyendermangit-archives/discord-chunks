function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d;
    n.r(t), n.d(t, {
        EMOJI_MAX_SLOTS: function() {
            return c
        },
        EMOJI_MAX_LENGTH: function() {
            return f
        },
        EMOJI_RE: function() {
            return _
        },
        EMOJI_MAX_FILESIZE_KB: function() {
            return h
        },
        EMOJI_MAX_FILESIZE: function() {
            return E
        },
        EmojiSprites: function() {
            return i
        },
        EmojiDisabledReasons: function() {
            return s
        },
        EmojiIntention: function() {
            return r
        },
        EmojiInteractionPoint: function() {
            return a
        },
        isExternalEmojiAllowedForIntention: function() {
            return m
        }
    }), n("222007");
    let c = 50,
        f = 32,
        _ = /[^a-zA-Z0-9_]/g,
        h = 256,
        E = 1024 * h;
    (o = i || (i = {}))[o.NonDiversityPerRow = 42] = "NonDiversityPerRow", o[o.DiversityPerRow = 10] = "DiversityPerRow", o[o.PickerPerRow = 11] = "PickerPerRow", o[o.PickerCount = 50] = "PickerCount", (l = s || (s = {}))[l.DISALLOW_EXTERNAL = 0] = "DISALLOW_EXTERNAL", l[l.GUILD_SUBSCRIPTION_UNAVAILABLE = 1] = "GUILD_SUBSCRIPTION_UNAVAILABLE", l[l.PREMIUM_LOCKED = 2] = "PREMIUM_LOCKED", l[l.ONLY_GUILD_EMOJIS_ALLOWED = 3] = "ONLY_GUILD_EMOJIS_ALLOWED", l[l.ROLE_SUBSCRIPTION_LOCKED = 4] = "ROLE_SUBSCRIPTION_LOCKED", l[l.ROLE_SUBSCRIPTION_UNAVAILABLE = 5] = "ROLE_SUBSCRIPTION_UNAVAILABLE", (u = r || (r = {}))[u.REACTION = 0] = "REACTION", u[u.STATUS = 1] = "STATUS", u[u.COMMUNITY_CONTENT = 2] = "COMMUNITY_CONTENT", u[u.CHAT = 3] = "CHAT", u[u.GUILD_STICKER_RELATED_EMOJI = 4] = "GUILD_STICKER_RELATED_EMOJI", u[u.GUILD_ROLE_BENEFIT_EMOJI = 5] = "GUILD_ROLE_BENEFIT_EMOJI", u[u.COMMUNITY_CONTENT_ONLY = 6] = "COMMUNITY_CONTENT_ONLY", u[u.SOUNDBOARD = 7] = "SOUNDBOARD", u[u.VOICE_CHANNEL_TOPIC = 8] = "VOICE_CHANNEL_TOPIC", u[u.GIFT = 9] = "GIFT", u[u.AUTO_SUGGESTION = 10] = "AUTO_SUGGESTION", u[u.POLLS = 11] = "POLLS";
    let g = new Set([2, 6, 4, 5, 7, 9]);

    function m(e) {
        return !g.has(e)
    }(d = a || (a = {})).EmojiButtonMouseEntered = "EMOJI_BUTTON_MOUSE_ENTERED", d.EmojiButtonFocused = "EMOJI_BUTTON_FOCUSED", d.ChatInputExpressionPressed = "CHAT_INPUT_EXPRESSION_PRESSED", d.ChatInputSuggestionsShown = "CHAT_INPUT_SUGGESTIONS_SHOWN", d.SearchEmojiKeybindPressed = "SEARCH_EMOJI_KEYBIND_PRESSED", d.AutocompleteTyped = "AUTOCOMPLETE_TYPED", d.AutocompleteWrapperShown = "AUTOCOMPLETE_WRAPPER_SHOWN", d.GuildLeaveModalShown = "GUILD_LEAVE_MODAL_SHOWN", d.AddReactionPopoutMouseEntered = "ADD_REACTION_POPOUT_MOUSE_ENTERED", d.AddReactionPopoutFocused = "ADD_REACTION_POPOUT_FOCUSED", d.MessageContextMenuMouseEntered = "MESSAGE_CONTEXT_MENU_MOUSE_ENTERED", d.EmojiPickerActionSheetOpened = "EMOJI_PICKER_ACTION_SHEET_OPENED", d.TrackOpenPopoutUsed = "TRACK_OPEN_POPOUT_USED", d.CustomEmojiTooltipShown = "CUSTOM_EMOJI_TOOLTIP_SHOWN"
}
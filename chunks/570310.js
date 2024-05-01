function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("430871"),
        s = n("185923");
    let a = new Set([s.EmojiInteractionPoint.EmojiButtonMouseEntered, s.EmojiInteractionPoint.ChatInputExpressionPressed, s.EmojiInteractionPoint.ChatInputSuggestionsShown, s.EmojiInteractionPoint.SearchEmojiKeybindPressed, s.EmojiInteractionPoint.AutocompleteTyped, s.EmojiInteractionPoint.GuildLeaveModalShown, s.EmojiInteractionPoint.AddReactionPopoutMouseEntered, s.EmojiInteractionPoint.AddReactionPopoutFocused, s.EmojiInteractionPoint.MessageContextMenuMouseEntered, s.EmojiInteractionPoint.AutocompleteWrapperShown]);
    class o extends i.default {
        handleInteraction(e) {
            let {
                interaction: t
            } = e;
            a.has(t) && (0, r.maybeGetEmojiCaptionsForUser)(t)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                EMOJI_INTERACTION_INITIATED: this.handleInteraction
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new o
}
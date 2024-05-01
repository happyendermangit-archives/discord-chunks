function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("430871"),
        a = n("185923");
    let s = new Set([a.EmojiInteractionPoint.EmojiButtonMouseEntered, a.EmojiInteractionPoint.ChatInputExpressionPressed, a.EmojiInteractionPoint.ChatInputSuggestionsShown, a.EmojiInteractionPoint.SearchEmojiKeybindPressed, a.EmojiInteractionPoint.AutocompleteTyped, a.EmojiInteractionPoint.GuildLeaveModalShown, a.EmojiInteractionPoint.AddReactionPopoutMouseEntered, a.EmojiInteractionPoint.AddReactionPopoutFocused, a.EmojiInteractionPoint.MessageContextMenuMouseEntered, a.EmojiInteractionPoint.AutocompleteWrapperShown]);
    class o extends i.default {
        handleInteraction(e) {
            let {
                interaction: t
            } = e;
            s.has(t) && (0, r.maybeGetEmojiCaptionsForUser)(t)
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
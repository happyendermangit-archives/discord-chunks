function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    }), E("222007");
    var t = E("689988"),
        o = E("765969"),
        n = E("958706");
    let r = new Set([n.EmojiInteractionPoint.EmojiButtonMouseEntered, n.EmojiInteractionPoint.ChatInputExpressionPressed, n.EmojiInteractionPoint.ChatInputSuggestionsShown, n.EmojiInteractionPoint.SearchEmojiKeybindPressed, n.EmojiInteractionPoint.AutocompleteTyped, n.EmojiInteractionPoint.GuildLeaveModalShown, n.EmojiInteractionPoint.AddReactionPopoutMouseEntered, n.EmojiInteractionPoint.AddReactionPopoutFocused, n.EmojiInteractionPoint.MessageContextMenuMouseEntered, n.EmojiInteractionPoint.AutocompleteWrapperShown]);
    class a extends t.default {
        handleInteraction(e) {
            let {
                interaction: _
            } = e;
            r.has(_) && (0, o.maybeGetEmojiCaptionsForUser)(_)
        }
        constructor(...e) {
            super(...e), this.actions = {
                EMOJI_INTERACTION_INITIATED: this.handleInteraction
            }
        }
    }
    var i = new a
}
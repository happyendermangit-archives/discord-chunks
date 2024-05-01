function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addReactionPickerAnimation: function() {
            return r
        },
        clearReactionPickerAnimation: function() {
            return s
        }
    });
    var i = n("570140");

    function r(e, t, n, r) {
        i.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_ADD",
            messageId: e,
            emojiName: t,
            emojiId: n,
            startPosition: r
        })
    }

    function s(e, t, n) {
        i.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
            messageId: e,
            emojiName: t,
            emojiId: n
        })
    }
}
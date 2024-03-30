function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addReactionPickerAnimation: function() {
            return o
        },
        clearReactionPickerAnimation: function() {
            return i
        }
    });
    var r = n("629815");

    function o(e, t, n, o) {
        r.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_ADD",
            messageId: e,
            emojiName: t,
            emojiId: n,
            startPosition: o
        })
    }

    function i(e, t, n) {
        r.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
            messageId: e,
            emojiName: t,
            emojiId: n
        })
    }
}
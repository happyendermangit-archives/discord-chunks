function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addReactionPickerAnimation: function() {
            return l
        },
        clearReactionPickerAnimation: function() {
            return a
        }
    });
    var i = n("913144");

    function l(e, t, n, l) {
        i.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_ADD",
            messageId: e,
            emojiName: t,
            emojiId: n,
            startPosition: l
        })
    }

    function a(e, t, n) {
        i.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
            messageId: e,
            emojiName: t,
            emojiId: n
        })
    }
}
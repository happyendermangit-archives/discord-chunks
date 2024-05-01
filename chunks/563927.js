function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("706454"),
        a = n("689938");

    function s(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.locale.startsWith("en-"));
        return ":pizza:" === e && t ? a.default.Messages.POLLS_MARKETING_EASTER_EGG_PIZZA_EMOJI_DESCRIPTION.format({
            emojiName: e
        }) : e
    }
}
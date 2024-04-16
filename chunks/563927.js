function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("442837"),
        r = n("706454"),
        s = n("689938");

    function a(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.locale.startsWith("en-"));
        return ":pizza:" === e && t ? s.default.Messages.POLLS_MARKETING_EASTER_EGG_PIZZA_EMOJI_DESCRIPTION.format({
            emojiName: e
        }) : e
    }
}
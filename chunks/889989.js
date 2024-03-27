function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBenefitIcon: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("187753"),
        s = n("596454"),
        a = n("73346");

    function o(e, t) {
        if (null != t) switch (t.type) {
            case r.IconType.STORE_ASSET:
                let n = (0, a.getAssetURL)(e, t.store_asset_id);
                return (0, i.jsx)("img", {
                    src: n,
                    alt: "",
                    className: "emoji"
                });
            case r.IconType.EMOJI:
                return (0, i.jsx)(s.default, {
                    emojiName: t.emoji
                })
        }
    }
}
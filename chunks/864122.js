function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBenefitIcon: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("978721"),
        i = n("765457"),
        a = n("329903");

    function u(e, t) {
        if (null != t) switch (t.type) {
            case o.IconType.STORE_ASSET:
                var n = (0, a.getAssetURL)(e, t.store_asset_id);
                return r.createElement("img", {
                    src: n,
                    alt: "",
                    className: "emoji"
                });
            case o.IconType.EMOJI:
                return r.createElement(i.default, {
                    emojiName: t.emoji
                })
        }
    }
}
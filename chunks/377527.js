function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBenefitIcon: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("336110"),
        s = n("430568"),
        r = n("271560");

    function l(e, t) {
        if (null != t) switch (t.type) {
            case a.IconType.STORE_ASSET:
                let n = (0, r.getAssetURL)(e, t.store_asset_id);
                return (0, i.jsx)("img", {
                    src: n,
                    alt: "",
                    className: "emoji"
                });
            case a.IconType.EMOJI:
                return (0, i.jsx)(s.default, {
                    emojiName: t.emoji
                })
        }
    }
}
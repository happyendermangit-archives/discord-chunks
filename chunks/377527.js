function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBenefitIcon: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("336110"),
        a = n("430568"),
        s = n("271560");

    function r(e, t) {
        if (null != t) switch (t.type) {
            case l.IconType.STORE_ASSET:
                let n = (0, s.getAssetURL)(e, t.store_asset_id);
                return (0, i.jsx)("img", {
                    src: n,
                    alt: "",
                    className: "emoji"
                });
            case l.IconType.EMOJI:
                return (0, i.jsx)(a.default, {
                    emojiName: t.emoji
                })
        }
    }
}
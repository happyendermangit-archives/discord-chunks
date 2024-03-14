function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLootboxes: function() {
            return d
        },
        LOOTBOX_COUNT_INTERPOLATE_START: function() {
            return c
        },
        LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN: function() {
            return f
        },
        LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX: function() {
            return g
        },
        IS_LOOTBOXES_READY: function() {
            return m
        },
        getLootboxPrizeAvatarDecoration: function() {
            return h
        }
    });
    var a, i, s = n("265586"),
        l = n("718517"),
        o = n("782340"),
        r = n("262228");
    let u = n("22247");
    (a = i || (i = {})).ITEM_1 = "1214340999644446720", a.ITEM_2 = "1214340999644446721", a.ITEM_3 = "1214340999644446722", a.ITEM_4 = "1214340999644446723", a.ITEM_5 = "1214340999644446724", a.ITEM_6 = "1214340999644446725", a.ITEM_7 = "1214340999644446726", a.ITEM_8 = "1214340999644446727", a.ITEM_9 = "1214340999644446728";
    let d = () => ({
            "1214340999644446720": {
                name: o.default.Messages.PACKAGE_ITEM_1_NAME,
                image: r,
                sound: u
            },
            "1214340999644446721": {
                name: o.default.Messages.PACKAGE_ITEM_2_NAME,
                image: r,
                sound: u
            },
            "1214340999644446722": {
                name: o.default.Messages.PACKAGE_ITEM_3_NAME,
                image: r,
                sound: u
            },
            "1214340999644446723": {
                name: o.default.Messages.PACKAGE_ITEM_4_NAME,
                image: r,
                sound: u
            },
            "1214340999644446724": {
                name: o.default.Messages.PACKAGE_ITEM_5_NAME,
                image: r,
                sound: u
            },
            "1214340999644446725": {
                name: o.default.Messages.PACKAGE_ITEM_6_NAME,
                image: r,
                sound: u
            },
            "1214340999644446726": {
                name: o.default.Messages.PACKAGE_ITEM_7_NAME,
                image: r,
                sound: u
            },
            "1214340999644446727": {
                name: o.default.Messages.PACKAGE_ITEM_8_NAME,
                image: r,
                sound: u
            },
            "1214340999644446728": {
                name: o.default.Messages.PACKAGE_ITEM_9_NAME,
                image: r,
                sound: u
            }
        }),
        c = l.default.Millis.SECOND,
        f = l.default.Millis.MINUTE,
        g = l.default.Millis.MINUTE + 10 * l.default.Millis.SECOND,
        m = !1;

    function h() {
        return {
            type: s.CollectiblesItemType.AVATAR_DECORATION,
            id: "1216909016681156768",
            skuId: "1216908559548289084",
            asset: "",
            label: ""
        }
    }
}
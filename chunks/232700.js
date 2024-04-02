function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BoxAnimationSceneSegments: function() {
            return D
        },
        BoxAnimationScenes: function() {
            return a
        },
        LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX: function() {
            return P
        },
        LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN: function() {
            return y
        },
        LOOTBOX_MAIN_ENTRYPOINT_LAST_SHOWN_TIME: function() {
            return b
        },
        LOOTBOX_PRIZE_ID: function() {
            return v
        },
        LOOTBOX_PRIZE_SKU_ID: function() {
            return M
        },
        LOOTBOX_VIDEO_URL: function() {
            return U
        },
        getLootboxes: function() {
            return L
        }
    });
    var i, r, s, a, o = n("70956"),
        l = n("689938"),
        u = n("584806"),
        d = n("931509"),
        _ = n("828866"),
        c = n("814739"),
        E = n("343773"),
        I = n("446823"),
        T = n("571178"),
        f = n("22514"),
        S = n("112686");
    let h = n("787691"),
        A = n("199834"),
        m = n("746491"),
        N = n("399636"),
        O = n("280067"),
        p = n("674861"),
        R = n("251952"),
        C = n("56651"),
        g = n("437752");
    (i = s || (s = {})).ITEM_1 = "1214340999644446720", i.ITEM_2 = "1214340999644446721", i.ITEM_3 = "1214340999644446722", i.ITEM_4 = "1214340999644446723", i.ITEM_5 = "1214340999644446724", i.ITEM_6 = "1214340999644446725", i.ITEM_7 = "1214340999644446726", i.ITEM_8 = "1214340999644446727", i.ITEM_9 = "1214340999644446728";
    let L = () => ({
        "1214340999644446720": {
            name: l.default.Messages.PACKAGE_ITEM_1_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: u,
            sound: h
        },
        "1214340999644446721": {
            name: l.default.Messages.PACKAGE_ITEM_2_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: d,
            sound: A
        },
        "1214340999644446722": {
            name: l.default.Messages.PACKAGE_ITEM_3_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: _,
            sound: m
        },
        "1214340999644446723": {
            name: l.default.Messages.PACKAGE_ITEM_4_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: c,
            sound: N
        },
        "1214340999644446724": {
            name: l.default.Messages.PACKAGE_ITEM_5_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: E,
            sound: O
        },
        "1214340999644446725": {
            name: l.default.Messages.PACKAGE_ITEM_6_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: I,
            sound: p
        },
        "1214340999644446726": {
            name: l.default.Messages.PACKAGE_ITEM_7_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: T,
            sound: R
        },
        "1214340999644446727": {
            name: l.default.Messages.PACKAGE_ITEM_8_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED_AN,
            image: f,
            sound: C
        },
        "1214340999644446728": {
            name: l.default.Messages.PACKAGE_ITEM_9_NAME,
            receivedCopy: l.default.Messages.PACKAGES_OPEN_PACKAGE_ITEM_OPENED,
            image: S,
            sound: g
        }
    });
    (r = a || (a = {})).ENTRY = "ENTRY", r.IDLE = "IDLE", r.OPEN = "OPEN", r.OPENED = "OPENED";
    let D = {
            ENTRY: {
                BEG: 1,
                END: 47
            },
            IDLE: {
                BEG: 48,
                END: 95,
                shouldForcePlayAfter: !0
            },
            OPEN: {
                BEG: 96,
                END: 150
            },
            OPENED: {
                BEG: 151,
                END: 222,
                shouldForcePlayAfter: !0
            }
        },
        v = "1216909016681156768",
        M = "1216908559548289084",
        y = o.default.Millis.MINUTE,
        P = o.default.Millis.MINUTE + 10 * o.default.Millis.SECOND,
        U = "https://www.youtube.com/watch?v=".concat("cc2-4ci4G84"),
        b = new Date("2024-04-02T02:00:00.000-07:00")
}
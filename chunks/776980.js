function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchCountStat: function() {
            return _
        },
        fetchUserLootboxData: function() {
            return o
        },
        openLootbox: function() {
            return l
        },
        redeemPrize: function() {
            return d
        },
        reportFinishedOpeningLootbox: function() {
            return u
        },
        showLootboxSettings: function() {
            return a
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("981631");

    function a() {
        r.default.dispatch({
            type: "LOOTBOX_SHOW_LOOTBOX_SETTINGS"
        })
    }
    async function o() {
        r.default.dispatch({
            type: "USER_LOOTBOX_DATA_FETCH"
        });
        try {
            let e = await i.HTTP.get({
                url: s.Endpoints.USER_LOOTBOX_DATA
            });
            if (e.ok && null != e.body) {
                let {
                    user_id: t,
                    opened_items: n,
                    redeemed_prize: i
                } = e.body;
                r.default.dispatch({
                    type: "USER_LOOTBOX_DATA_FETCH_SUCCESS",
                    userId: t,
                    openedItems: n,
                    redeemedPrize: i
                })
            } else r.default.dispatch({
                type: "USER_LOOTBOX_DATA_FETCH_FAILURE"
            })
        } catch (e) {
            r.default.dispatch({
                type: "USER_LOOTBOX_DATA_FETCH_FAILURE"
            })
        }
    }
    async function l() {
        let e = await i.HTTP.post({
            url: s.Endpoints.USER_LOOTBOX_OPEN_ITEM
        });
        if (e.ok && null != e.body) {
            let {
                user_lootbox_data: t,
                opened_item: n
            } = e.body, {
                user_id: i,
                opened_items: r,
                redeemed_prize: s
            } = t;
            return {
                userLootboxData: {
                    userId: i,
                    openedItems: r,
                    redeemedPrize: s
                },
                openedItem: n
            }
        }
        return null
    }

    function u(e, t) {
        r.default.dispatch({
            type: "USER_LOOTBOX_REPORT_FINISHED_OPENED_ITEM",
            userLootboxData: e,
            openedItem: t
        })
    }
    async function d() {
        let e = await i.HTTP.post({
            url: s.Endpoints.USER_LOOTBOX_REDEEM_PRIZE
        });
        if (e.ok && null != e.body) {
            let {
                user_id: t,
                opened_items: n,
                redeemed_prize: i
            } = e.body;
            r.default.dispatch({
                type: "USER_LOOTBOX_DATA_FETCH_SUCCESS",
                userId: t,
                openedItems: n,
                redeemedPrize: i
            })
        }
    }
    async function _() {
        let e = await i.HTTP.get({
            url: s.Endpoints.LOOTBOX_COUNT
        });
        r.default.dispatch({
            type: "LOOTBOX_COUNT_STAT_FETCHED",
            currentCount: e.body.current_count,
            previousCount: e.body.previous_count
        })
    }
}
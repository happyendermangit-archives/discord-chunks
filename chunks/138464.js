function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setCanPlayWowMoment: function() {
            return r
        }
    });
    var i = n("570140");
    let r = e => {
        i.default.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
            value: e
        })
    }
}
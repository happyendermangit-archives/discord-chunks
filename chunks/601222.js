function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("347672"),
        s = n("214647");
    async function r() {
        let e = null;
        try {
            e = await i.default.getThermalState()
        } catch (e) {
            if (e.message === s.GET_THERMAL_STATE_NOT_IMPLEMENTED_ERROR_MESSAGE) return Promise.resolve(null);
            throw e
        }
        return Promise.resolve(e)
    }
}
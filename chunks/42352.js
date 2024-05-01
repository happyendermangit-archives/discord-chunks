function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("75060"),
        r = n("991240");
    async function a() {
        let e = null;
        try {
            e = await i.default.getThermalState()
        } catch (e) {
            if (e.message === r.GET_THERMAL_STATE_NOT_IMPLEMENTED_ERROR_MESSAGE) return Promise.resolve(null);
            throw e
        }
        return Promise.resolve(e)
    }
}
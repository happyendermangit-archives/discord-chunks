function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("570140"),
        a = n("147913");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends a.default {
        _terminate() {
            this.clearErrorTimeout.stop()
        }
        constructor(...e) {
            super(...e), s(this, "clearErrorTimeout", new i.Timeout), s(this, "actions", {
                MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
            }), s(this, "handleNoiseCancellationError", () => {
                this.clearErrorTimeout.start(3e3, () => r.default.dispatch({
                    type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
                }))
            })
        }
    }
    t.default = new o
}
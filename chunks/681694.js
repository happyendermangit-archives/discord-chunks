function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("570140"),
        s = n("147913");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends s.default {
        _terminate() {
            this.clearErrorTimeout.stop()
        }
        constructor(...e) {
            super(...e), a(this, "clearErrorTimeout", new i.Timeout), a(this, "actions", {
                MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
            }), a(this, "handleNoiseCancellationError", () => {
                this.clearErrorTimeout.start(3e3, () => r.default.dispatch({
                    type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
                }))
            })
        }
    }
    t.default = new o
}
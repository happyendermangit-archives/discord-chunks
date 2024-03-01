function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    }), E("222007");
    var t = E("862337"),
        o = E("913144"),
        n = E("689988");
    class r extends n.default {
        _terminate() {
            this.clearErrorTimeout.stop()
        }
        constructor(...e) {
            super(...e), this.clearErrorTimeout = new t.Timeout, this.actions = {
                MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
            }, this.handleNoiseCancellationError = () => {
                this.clearErrorTimeout.start(3e3, () => o.default.dispatch({
                    type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
                }))
            }
        }
    }
    var i = new r
}
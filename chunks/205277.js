function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    }), E("222007");
    var t = E("689988"),
        o = E("718517"),
        n = E("931318"),
        r = E("979268");
    class i extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }, this.handlePostConnectionOpen = () => {
                ! function e() {
                    r.default.getCurrentConfig({
                        location: "e391b1_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders && (0, n.fetchAndUpdateSavedMessages)().then(() => setTimeout(e, 15 * o.default.Millis.MINUTE))
                }()
            }
        }
    }
    var a = new i
}
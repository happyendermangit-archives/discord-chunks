function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("70956"),
        s = n("822893"),
        a = n("641051");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class l extends i.default {
        constructor(...e) {
            super(...e), o(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }), o(this, "handlePostConnectionOpen", () => {
                ! function e() {
                    a.default.getCurrentConfig({
                        location: "e391b1_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders && (0, s.fetchAndUpdateSavedMessages)().then(() => setTimeout(e, 15 * r.default.Millis.MINUTE))
                }()
            })
        }
    }
    t.default = new l
}
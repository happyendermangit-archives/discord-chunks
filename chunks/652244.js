function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("70956"),
        a = n("822893"),
        s = n("641051");

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
                    s.default.getCurrentConfig({
                        location: "e391b1_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders && (0, a.fetchAndUpdateSavedMessages)().then(() => setTimeout(e, 15 * r.default.Millis.MINUTE))
                }()
            })
        }
    }
    t.default = new l
}
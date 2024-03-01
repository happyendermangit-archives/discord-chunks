function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("913144"),
        i = n("492397"),
        r = {
            openNativeAppModal(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                !i.CONFERENCE_MODE_ENABLED && (s.default.dispatch({
                    type: "NATIVE_APP_MODAL_OPENING",
                    code: e
                }), n.el("43982").then(n.bind(n, "43982")).then(n => {
                    let {
                        default: s
                    } = n;
                    s.request(t, {
                        code: e,
                        ...r
                    }).then(t => {
                        var n;
                        this.nativeModalOpened(null !== (n = null == t ? void 0 : t.code) && void 0 !== n ? n : e)
                    }).catch(() => this.nativeModalOpenFailed(e)).then(() => s.disconnect())
                }))
            },
            nativeModalOpened(e) {
                s.default.dispatch({
                    type: "NATIVE_APP_MODAL_OPENED",
                    code: e
                })
            },
            nativeModalOpenFailed(e) {
                s.default.dispatch({
                    type: "NATIVE_APP_MODAL_OPEN_FAILED",
                    code: e
                })
            }
        }
}
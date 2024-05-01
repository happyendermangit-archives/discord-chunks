function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("188785");
    t.default = {
        openNativeAppModal(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !r.CONFERENCE_MODE_ENABLED && (i.default.dispatch({
                type: "NATIVE_APP_MODAL_OPENING",
                code: e
            }), Promise.resolve().then(n.bind(n, "536285")).then(n => {
                let {
                    default: i
                } = n;
                i.request(t, {
                    code: e,
                    ...s
                }).then(t => {
                    var n;
                    this.nativeModalOpened(null !== (n = null == t ? void 0 : t.code) && void 0 !== n ? n : e)
                }).catch(() => this.nativeModalOpenFailed(e)).then(() => i.disconnect())
            }))
        },
        nativeModalOpened(e) {
            i.default.dispatch({
                type: "NATIVE_APP_MODAL_OPENED",
                code: e
            })
        },
        nativeModalOpenFailed(e) {
            i.default.dispatch({
                type: "NATIVE_APP_MODAL_OPEN_FAILED",
                code: e
            })
        }
    }
}
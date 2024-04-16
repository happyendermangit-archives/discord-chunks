function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE: function() {
            return d
        }
    }), n("47120");
    var i = n("147913"),
        r = n("282397"),
        s = n("626135"),
        a = n("131595"),
        o = n("475774"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = "interaction_iframe_modal";
    async function _(e) {
        let {
            openInteractionModal: t
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("8739"), n.e("58286"), n.e("30243"), n.e("80621")]).then(n.bind(n, "440934"));
        t(e), s.default.track(l.AnalyticEvents.OPEN_MODAL, {
            type: "interaction_modal",
            application_id: e.application.id
        })
    }
    class c extends i.default {
        constructor(...e) {
            super(...e), u(this, "iframeModalOpenTimeMs", void 0), u(this, "actions", {
                INTERACTION_MODAL_CREATE: e => {
                    _(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: e => {
                    var t;
                    this.iframeModalOpenTimeMs = Date.now(), t = e, (0, o.default)(t), s.default.track(l.AnalyticEvents.OPEN_MODAL, {
                        type: d,
                        application_id: t.application.id
                    })
                },
                INTERACTION_IFRAME_MODAL_CLOSE: e => {
                    ! function(e, t) {
                        let n = null != t ? Date.now() - t : void 0;
                        s.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                            type: d,
                            application_id: e.applicationId,
                            duration_open_ms: n
                        })
                    }(e, this.iframeModalOpenTimeMs), this.iframeModalOpenTimeMs = void 0
                },
                RPC_APP_DISCONNECTED: e => {
                    ! function(e) {
                        let {
                            application: t
                        } = e, n = r.default.getIFrameModalApplicationId(), i = r.default.getIFrameModalKey();
                        t.id === n && null != n && (0, a.default)(n, i)
                    }(e)
                }
            })
        }
    }
    t.default = new c
}
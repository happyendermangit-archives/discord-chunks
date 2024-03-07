function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE: function() {
            return I
        },
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("689988"),
        o = E("809810"),
        n = E("599110"),
        r = E("533686"),
        a = E("62355"),
        i = E("49111");
    let I = "interaction_iframe_modal";
    async function T(e) {
        let {
            openInteractionModal: _
        } = await E.el("394816").then(E.bind(E, "394816"));
        _(e), n.default.track(i.AnalyticEvents.OPEN_MODAL, {
            type: "interaction_modal",
            application_id: e.application.id
        })
    }
    class s extends t.default {
        constructor(...e) {
            super(...e), this.iframeModalOpenTimeMs = void 0, this.actions = {
                INTERACTION_MODAL_CREATE: e => {
                    T(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: e => {
                    var _;
                    this.iframeModalOpenTimeMs = Date.now(), _ = e, (0, a.default)(_), n.default.track(i.AnalyticEvents.OPEN_MODAL, {
                        type: I,
                        application_id: _.application.id
                    })
                },
                INTERACTION_IFRAME_MODAL_CLOSE: e => {
                    ! function(e, _) {
                        let E = null != _ ? Date.now() - _ : void 0;
                        n.default.track(i.AnalyticEvents.MODAL_DISMISSED, {
                            type: I,
                            application_id: e.applicationId,
                            duration_open_ms: E
                        })
                    }(e, this.iframeModalOpenTimeMs), this.iframeModalOpenTimeMs = void 0
                },
                RPC_APP_DISCONNECTED: e => {
                    ! function(e) {
                        let {
                            application: _
                        } = e, E = o.default.getIFrameModalApplicationId(), t = o.default.getIFrameModalKey();
                        _.id === E && null != E && (0, r.default)(E, t)
                    }(e)
                }
            }
        }
    }
    var S = new s
}
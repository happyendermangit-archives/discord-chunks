function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return l
        }
    }), E("222007");
    var t = E("37983");
    E("884691");
    var o = E("151426"),
        n = E("77078"),
        r = E("689988"),
        i = E("10641"),
        a = E("18494"),
        I = E("162771"),
        s = E("599110"),
        T = E("179803"),
        S = E("49111"),
        N = E("994428");
    let O = "GUILD_ONBOARDING_UPSELL_MODAL",
        A = (e, _) => {
            if (__OVERLAY__ || null == e || null == _) return;
            let r = (0, T.shouldShowGuildOnboardingUpsell)(e, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2);
            if (!r) return;
            (0, i.requestMarkDismissibleContentAsShown)(o.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2);
            let a = function() {
                let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.ContentDismissActionType.DISMISS;
                s.default.track(S.AnalyticEvents.UPSELL_CLICKED, {
                    type: o.DismissibleContent[o.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                    action: "dismiss"
                }), (0, T.dismissedGuildOnboardingUpsell)(e, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2), (0, i.markDismissibleContentAsDismissed)(o.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, {
                    dismissAction: _
                })
            };
            (0, n.openModalLazy)(async () => {
                let {
                    default: _
                } = await E.el("790255").then(E.bind(E, "790255"));
                return E => (0, t.jsx)(_, {
                    ...E,
                    guildId: e,
                    onClose: e => {
                        a(e), E.onClose()
                    }
                })
            }, {
                modalKey: O,
                onCloseRequest: () => {
                    a(), (0, n.closeModal)(O)
                }
            })
        };
    class R extends r.default {
        handleChannelSelect(e) {
            let {
                guildId: _,
                channelId: E
            } = e;
            A(_, E)
        }
        handlePostConnectionOpen() {
            let e = a.default.getCurrentlySelectedChannelId(),
                _ = I.default.getGuildId();
            A(_, e)
        }
        constructor(...e) {
            super(...e), this.actions = {
                CHANNEL_SELECT: this.handleChannelSelect,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }
        }
    }
    var l = new R
}
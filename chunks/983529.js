function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("524437"),
        a = n("481060"),
        s = n("147913"),
        o = n("605236"),
        l = n("944486"),
        u = n("914010"),
        d = n("626135"),
        _ = n("150340"),
        c = n("981631"),
        E = n("921944");
    let I = "GUILD_ONBOARDING_UPSELL_MODAL",
        T = (e, t) => {
            if (__OVERLAY__ || null == e || null == t || !(0, _.shouldShowGuildOnboardingUpsell)(e, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2)) return;
            (0, o.requestMarkDismissibleContentAsShown)(r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2);
            let s = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.ContentDismissActionType.DISMISS;
                d.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
                    type: r.DismissibleContent[r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                    action: "dismiss"
                }), (0, _.dismissedGuildOnboardingUpsell)(e, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2), (0, o.markDismissibleContentAsDismissed)(r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, {
                    dismissAction: t
                })
            };
            (0, a.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("99387"), n.e("93776")]).then(n.bind(n, "563288"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: e,
                    onClose: e => {
                        s(e), n.onClose()
                    }
                })
            }, {
                modalKey: I,
                onCloseRequest: () => {
                    s(), (0, a.closeModal)(I)
                }
            })
        };
    class f extends s.default {
        handleChannelSelect(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            T(t, n)
        }
        handlePostConnectionOpen() {
            let e = l.default.getCurrentlySelectedChannelId();
            T(u.default.getGuildId(), e)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_SELECT: this.handleChannelSelect,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new f
}
function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140"),
        a = n("594174"),
        o = n("626135"),
        l = n("74538"),
        u = n("997945"),
        d = n("981631"),
        _ = n("921944"),
        c = n("474936");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = {
            client: {
                desktop: u.FreemiumAppIconIds.DEFAULT,
                coachmarkImpressions: 0
            }
        },
        T = !1,
        f = !0,
        S = () => {
            f = !l.default.canUsePremiumAppIcons(a.default.getCurrentUser())
        },
        h = e => {
            if (I.client.desktop = e, !f) {
                var t;
                o.default.track(d.AnalyticEvents.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
                    icon_premium_tier: e !== u.FreemiumAppIconIds.DEFAULT ? c.PremiumTypes.TIER_2 : null
                })
            }
        };

    function A() {
        f && (I.client = {
            desktop: u.FreemiumAppIconIds.DEFAULT,
            coachmarkImpressions: 2
        }), T = !1
    }
    class m extends(i = r.default.PersistedStore) {
        initialize(e) {
            null != e && (I = e), this.waitFor(a.default), this.syncWith([a.default], S)
        }
        get isEditorOpen() {
            return T
        }
        get isUpsellPreview() {
            return f
        }
        getState() {
            return I
        }
        getCurrentDesktopIcon() {
            var e;
            return null == I ? void 0 : null === (e = I.client) || void 0 === e ? void 0 : e.desktop
        }
    }
    E(m, "displayName", "AppIconPersistedStoreState"), E(m, "persistKey", "AppIconPersistedStoreState"), t.default = new m(s.default, {
        APP_ICON_UPDATED: function(e) {
            let {
                id: t
            } = e;
            null != t && h(t)
        },
        APP_ICON_EDITOR_OPEN: function() {
            T = !0
        },
        APP_ICON_EDITOR_CLOSE: A,
        APP_ICON_TRACK_IMPRESSION: function(e) {
            let {
                markAsDismissed: t
            } = e;
            I.client.coachmarkImpressions += 1, I.client.coachmarkImpressions >= 2 && (null == t || t(_.ContentDismissActionType.UNKNOWN), A())
        }
    })
}
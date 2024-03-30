function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("208454"),
        u = n("870331"),
        s = n("830721"),
        l = n("774335"),
        c = n("281767"),
        f = n("348201"),
        d = n("868615");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {
            client: {
                desktop: l.FreemiumAppIconIds.DEFAULT,
                coachmarkImpressions: 0
            }
        },
        I = !1,
        h = !0,
        O = function() {
            h = !s.default.canUsePremiumAppIcons(a.default.getCurrentUser())
        },
        T = function(e) {
            if (y.client.desktop = e, !h) {
                var t;
                u.default.track(c.AnalyticEvents.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
                    icon_premium_tier: e !== l.FreemiumAppIconIds.DEFAULT ? d.PremiumTypes.TIER_2 : null
                })
            }
        };

    function S() {
        h && (y.client = {
            desktop: l.FreemiumAppIconIds.DEFAULT,
            coachmarkImpressions: 2
        }), I = !1
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function(e) {
                null != e && (y = e), this.waitFor(a.default), this.syncWith([a.default], O)
            }
        }, {
            key: "isEditorOpen",
            get: function() {
                return I
            }
        }, {
            key: "isUpsellPreview",
            get: function() {
                return h
            }
        }, {
            key: "getState",
            value: function() {
                return y
            }
        }, {
            key: "getCurrentDesktopIcon",
            value: function() {
                var e;
                return null == y ? void 0 : null === (e = y.client) || void 0 === e ? void 0 : e.desktop
            }
        }], _(r.prototype, o), i && _(r, i), s
    }(o.default.PersistedStore);
    E(v, "displayName", "AppIconPersistedStoreState"), E(v, "persistKey", "AppIconPersistedStoreState"), t.default = new v(i.default, {
        APP_ICON_UPDATED: function(e) {
            var t = e.id;
            null != t && T(t)
        },
        APP_ICON_EDITOR_OPEN: function() {
            I = !0
        },
        APP_ICON_EDITOR_CLOSE: S,
        APP_ICON_TRACK_IMPRESSION: function(e) {
            var t = e.markAsDismissed;
            y.client.coachmarkImpressions += 1, y.client.coachmarkImpressions >= 2 && (null == t || t(f.ContentDismissActionType.UNKNOWN), S())
        }
    })
}
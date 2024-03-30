function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("526329"),
        u = n("216239"),
        s = n("52907"),
        l = n("378515"),
        c = n("944218"),
        f = n("644463"),
        d = n("825986"),
        _ = n("227289"),
        E = n("903716"),
        p = n("948739"),
        m = n("535585"),
        y = n("877987"),
        I = n("281767"),
        h = n("941504"),
        O = n("220862");

    function T(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function S(e) {
        var t = e.user,
            n = e.guildId,
            i = (0, o.useStateFromStores)([E.default], function() {
                var e;
                return null === (e = E.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
            }),
            u = null != i && (0, _.canInstallApplication)({
                customInstallUrl: i.customInstallUrl,
                installParams: i.installParams,
                integrationTypesConfig: i.integrationTypesConfig
            }),
            s = (0, p.default)({
                user: t,
                guildId: n
            }),
            l = s.botUpgradeable,
            c = s.subscriptionGroupListing,
            f = a.appStorefrontExperiment.useExperiment({
                location: "BotButtonsSection"
            }).enabled;
        return u || l ? r.createElement(y.default, null, r.createElement("div", {
            className: O.buttonsContainer
        }, r.createElement(m.default, {
            application: i,
            className: O.button
        }), l && (f ? r.createElement(g, {
            app: i,
            listing: null != c ? c : void 0,
            guildId: n
        }) : r.createElement(v, {
            guildId: n,
            listing: c
        })))) : null
    }

    function v(e) {
        var t = e.listing,
            n = e.guildId,
            o = null != t ? (0, u.getPayableSubscriptionListing)(t) : null,
            i = (0, c.default)({
                listing: o,
                guildId: n,
                groupListingId: null == t ? void 0 : t.id,
                showBenefitsFirst: !0,
                analyticsLocation: I.AnalyticsLocations.BOT_PROFILE_POPOUT
            }).openModal;
        return r.createElement(s.default, {
            onClick: i,
            className: O.button
        }, r.createElement("div", {
            className: O.botUpgradeButtonContent
        }, r.createElement(d.default, {
            width: 16,
            height: 16
        }), r.createElement(f.default, {
            size: 4,
            horizontal: !0
        }), h.default.Messages.BOT_PROFILE_UPGRADE_CTA))
    }

    function g(e) {
        var t = e.app,
            o = e.listing,
            a = e.guildId;
        return null == t || null == a ? null : r.createElement(l.StorefrontButton, {
            onClick: function() {
                return function(e, t, o) {
                    var a;
                    (0, i.openModalLazy)((a = function() {
                        var i;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("97950"), n.e("91902")]).then(n.bind(n, "197263"))];
                                case 1:
                                    return i = a.sent().default, [2, function(n) {
                                        return r.createElement(i, {
                                            transitionState: n.transitionState,
                                            onClose: n.onClose,
                                            appId: e.id,
                                            subscriptionGroupListing: t,
                                            guildId: o
                                        })
                                    }]
                            }
                        })
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, r) {
                            var o = a.apply(e, t);

                            function i(e) {
                                T(o, n, r, i, u, "next", e)
                            }

                            function u(e) {
                                T(o, n, r, i, u, "throw", e)
                            }
                            i(void 0)
                        })
                    }))
                }(t, o, a)
            },
            className: O.button,
            size: i.ButtonSizes.SMALL
        })
    }
}
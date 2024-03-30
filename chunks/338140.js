function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createExecutable: function() {
            return y
        },
        default: function() {
            return I
        }
    });
    var r, o = n("994977"),
        i = n("864842"),
        a = n("299529"),
        u = n("13119"),
        s = n("428009"),
        l = n("997133");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = (_(r = {}, l.POKER_NIGHT_APPLICATION_ID, 7), _(r, l.END_GAME_APPLICATION_ID, 12), r);

    function y(e) {
        var t = {
            os: e.os,
            name: e.name
        };
        return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(h, e);
        var t, n, r, i, l, I = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function h(e) {
            var t, n, r, i, a;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), _(f(t = I.call(this)), "id", void 0), _(f(t), "name", void 0), _(f(t), "icon", void 0), _(f(t), "splash", void 0), _(f(t), "overlay", void 0), _(f(t), "overlayWarn", void 0), _(f(t), "overlayCompatibilityHook", void 0), _(f(t), "overlayMethods", void 0), _(f(t), "hook", void 0), _(f(t), "aliases", void 0), _(f(t), "publishers", void 0), _(f(t), "developers", void 0), _(f(t), "primarySkuId", void 0), _(f(t), "storeListingSkuId", void 0), _(f(t), "thirdPartySkus", void 0), _(f(t), "guildId", void 0), _(f(t), "guild", void 0), _(f(t), "executables", void 0), _(f(t), "hashes", void 0), _(f(t), "description", void 0), _(f(t), "eulaId", void 0), _(f(t), "slug", void 0), _(f(t), "coverImage", void 0), _(f(t), "bot", void 0), _(f(t), "flags", void 0), _(f(t), "maxParticipants", void 0), _(f(t), "tags", void 0), _(f(t), "embeddedActivityConfig", void 0), _(f(t), "type", void 0), _(f(t), "team", void 0), _(f(t), "roleConnectionsVerificationUrl", void 0), _(f(t), "integrationTypesConfig", void 0), _(f(t), "isMonetized", void 0), t.id = e.id, t.name = e.name, t.icon = e.icon || null, t.splash = e.splash || null, t.overlay = e.overlay || !1, t.overlayWarn = e.overlayWarn || !1, t.overlayCompatibilityHook = e.overlayCompatibilityHook || !1, t.overlayMethods = null !== (n = e.overlayMethods) && void 0 !== n ? n : o.ApplicationOverlayMethodFlags.DEFAULT, t.hook = null === (r = e.hook) || void 0 === r || r, t.aliases = e.aliases || [], t.publishers = e.publishers || [], t.developers = e.developers || [], t.primarySkuId = e.primarySkuId, t.storeListingSkuId = e.storeListingSkuId, t.guildId = e.guildId || null, t.guild = e.guild || null, t.thirdPartySkus = e.thirdPartySkus || [], t.executables = (e.executables || []).map(y), t.hashes = e.hashes || [], t.description = e.description || null, t.eulaId = e.eulaId || null, t.slug = e.slug || null, t.bot = e.bot || null, t.coverImage = e.coverImage || null, t.flags = null !== (i = e.flags) && void 0 !== i ? i : 0, t.tags = null !== (a = e.tags) && void 0 !== a ? a : [], t.maxParticipants = e.maxParticipants, t.embeddedActivityConfig = e.embedded_activity_config, t.type = e.type, t.team = e.team, t.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl, t.integrationTypesConfig = e.integrationTypesConfig, t.isMonetized = e.is_monetized, t
        }
        return r = h, i = [{
            key: "getIconURL",
            value: function(e, t) {
                return null != this.icon ? a.default.getGameAssetURL({
                    id: this.id,
                    hash: this.icon,
                    size: e,
                    format: t
                }) : null
            }
        }, {
            key: "getIconSource",
            value: function(e, t) {
                return null != this.icon ? a.default.getGameAssetSource({
                    id: this.id,
                    hash: this.icon,
                    size: e,
                    format: t
                }) : null
            }
        }, {
            key: "getSplashURL",
            value: function(e, t) {
                return null != this.splash ? a.default.getGameAssetURL({
                    id: this.id,
                    hash: this.splash,
                    size: e,
                    keepAspectRatio: !0,
                    format: t
                }) : null
            }
        }, {
            key: "getCoverImageURL",
            value: function(e) {
                return null != this.coverImage ? a.default.getApplicationIconURL({
                    id: this.id,
                    icon: this.coverImage,
                    size: e
                }) : null
            }
        }, {
            key: "getMaxParticipants",
            value: function() {
                var e, t;
                return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : m[this.id]) && void 0 !== t ? t : 0
            }
        }, {
            key: "supportsIntegrationTypes",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = this.integrationTypesConfig;
                return null != r && t.every(function(e) {
                    return e in r
                })
            }
        }, {
            key: "destinationSkuId",
            get: function() {
                return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId
            }
        }, {
            key: "supportsOutOfProcessOverlay",
            get: function() {
                return h.supportsOutOfProcessOverlay(this.overlayMethods)
            }
        }], l = [{
            key: "createFromServer",
            value: function(e) {
                var t, n, r, i;
                return new h((r = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            _(e, t, n[t])
                        })
                    }
                    return e
                }({}, e), i = (i = {
                    thirdPartySkus: e.third_party_skus,
                    overlayWarn: e.overlay_warn,
                    overlayCompatibilityHook: e.overlay_compatibility_hook,
                    overlayMethods: null !== (t = e.overlay_methods) && void 0 !== t ? t : o.ApplicationOverlayMethodFlags.DEFAULT,
                    hook: e.hook,
                    primarySkuId: e.primary_sku_id,
                    storeListingSkuId: e.store_listing_sku_id,
                    guildId: e.guild_id,
                    guild: e.guild,
                    publishers: null != e.publishers ? e.publishers.map(u.default.createFromServer) : [],
                    developers: null != e.developers ? e.developers.map(u.default.createFromServer) : [],
                    eulaId: e.eula_id,
                    slug: e.slug,
                    coverImage: e.cover_image,
                    bot: null != e.bot ? new s.default(e.bot) : null,
                    flags: null !== (n = e.flags) && void 0 !== n ? n : 0,
                    maxParticipants: e.max_participants,
                    tags: e.tags,
                    embeddedActivityConfig: e.embedded_activity_config,
                    roleConnectionsVerificationUrl: e.role_connections_verification_url,
                    integrationTypesConfig: null != e.integration_types_config ? Object.fromEntries(Object.entries(e.integration_types_config).map(function(e) {
                        var t, n, r = (n = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(t = e) || function(e, t) {
                                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var i = [],
                                        a = !0,
                                        u = !1;
                                    try {
                                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                    } catch (e) {
                                        u = !0, r = e
                                    } finally {
                                        try {
                                            !a && null != o.return && o.return()
                                        } finally {
                                            if (u) throw r
                                        }
                                    }
                                    return i
                                }
                            }(t, n) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return c(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                                }
                            }(t, n) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            o = r[0],
                            i = r[1];
                        return [o, {
                            oauth2InstallParams: (null != i ? i : {}).oauth2_install_params
                        }]
                    })) : null
                }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                }), r))
            }
        }, {
            key: "supportsOutOfProcessOverlay",
            value: function(e) {
                var t = o.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
                return null != e && (e & t) === t
            }
        }], i && d(r.prototype, i), l && d(r, l), h
    }(i.default)
}
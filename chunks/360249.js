function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("864842"),
        o = n("92000"),
        i = n("428009");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(E, e);
        var t, n, r, f, d, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function E(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), s(a(t = _.call(this)), "id", void 0), s(a(t), "skuId", void 0), s(a(t), "summary", void 0), s(a(t), "tagline", void 0), s(a(t), "flavorText", void 0), s(a(t), "description", void 0), s(a(t), "carouselItems", void 0), s(a(t), "childSkuIds", void 0), s(a(t), "alternativeSkuIds", void 0), s(a(t), "assets", void 0), s(a(t), "staffNotes", void 0), s(a(t), "guild", void 0), s(a(t), "thumbnail", void 0), s(a(t), "boxArt", void 0), s(a(t), "previewVideo", void 0), s(a(t), "headerBackground", void 0), s(a(t), "headerLogoDarkTheme", void 0), s(a(t), "headerLogoLightTheme", void 0), s(a(t), "heroBackground", void 0), s(a(t), "heroVideo", void 0), s(a(t), "entitlementBranchId", void 0), s(a(t), "benefits", void 0), t.id = e.id, t.skuId = e.skuId, t.summary = e.summary, t.tagline = e.tagline, t.flavorText = e.flavorText, t.description = e.description, t.carouselItems = e.carouselItems || [], t.childSkuIds = e.childSkuIds || [], t.alternativeSkuIds = e.alternativeSkuIds || [], t.assets = e.assets || [], t.staffNotes = e.staffNotes, t.guild = e.guild, t.thumbnail = e.thumbnail || null, t.boxArt = e.boxArt || null, t.previewVideo = e.previewVideo || null, t.headerBackground = e.headerBackground || null, t.headerLogoDarkTheme = e.headerLogoDarkTheme || null, t.headerLogoLightTheme = e.headerLogoLightTheme || null, t.heroBackground = e.heroBackground || null, t.heroVideo = e.heroVideo || null, t.entitlementBranchId = e.entitlementBranchId || null, t.benefits = e.benefits || [], t
        }
        return r = E, f = [{
            key: "isSlimDirectoryVersion",
            value: function() {
                return null == this.description
            }
        }], d = [{
            key: "createFromServer",
            value: function(e) {
                var t = e.staff_notes;
                return new E({
                    id: e.id,
                    skuId: e.sku.id,
                    summary: e.summary,
                    tagline: e.tagline,
                    flavorText: e.flavor_text,
                    description: e.description,
                    childSkuIds: null != e.child_skus ? e.child_skus.map(function(e) {
                        return e.id
                    }) : null,
                    alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map(function(e) {
                        return e.id
                    }) : null,
                    carouselItems: null != e.carousel_items ? e.carousel_items.map(function(e) {
                        return {
                            assetId: e.asset_id,
                            youtubeVideoId: e.youtube_video_id
                        }
                    }) : null,
                    assets: null != e.assets ? e.assets.map(o.transformStoreAssetFromServer) : null,
                    staffNotes: null != t ? {
                        content: t.content,
                        user: null != t.user ? new i.default(t.user) : null
                    } : null,
                    guild: null != e.guild ? {
                        id: e.guild.id,
                        name: e.guild.name,
                        icon: e.guild.icon,
                        approximateMemberCount: e.guild.approximate_member_count,
                        approximatePresenceCount: e.guild.approximate_presence_count
                    } : null,
                    thumbnail: null != e.thumbnail ? (0, o.transformStoreAssetFromServer)(e.thumbnail) : null,
                    previewVideo: null != e.preview_video ? (0, o.transformStoreAssetFromServer)(e.preview_video) : null,
                    headerBackground: null != e.header_background ? (0, o.transformStoreAssetFromServer)(e.header_background) : null,
                    headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, o.transformStoreAssetFromServer)(e.header_logo_dark_theme) : null,
                    headerLogoLightTheme: null != e.header_logo_light_theme ? (0, o.transformStoreAssetFromServer)(e.header_logo_light_theme) : null,
                    boxArt: null != e.box_art ? (0, o.transformStoreAssetFromServer)(e.box_art) : null,
                    heroBackground: null != e.hero_background ? (0, o.transformStoreAssetFromServer)(e.hero_background) : null,
                    heroVideo: null != e.hero_video ? (0, o.transformStoreAssetFromServer)(e.hero_video) : null,
                    entitlementBranchId: e.entitlement_branch_id,
                    benefits: e.benefits
                })
            }
        }], f && u(r.prototype, f), d && u(r, d), E
    }(r.default)
}
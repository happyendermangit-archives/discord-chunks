function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("864842"),
        a = n("342942"),
        u = n("947248"),
        s = n("660560"),
        l = n("281767");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(y, e);
        var t, n, r, i, p, m = (t = y, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function y(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), d(c(t = m.call(this)), "id", void 0), d(c(t), "branchId", void 0), d(c(t), "flags", void 0), d(c(t), "createdAt", void 0), d(c(t), "entitlements", void 0), d(c(t), "branch", void 0), d(c(t), "sku", void 0), d(c(t), "isTestMode", void 0), t.id = e.id, t.createdAt = e.createdAt, t.flags = e.flags, t.branchId = e.branchId, t.entitlements = e.entitlements, t.branch = e.branch, t.sku = e.sku, t.isTestMode = e.isTestMode || !1, t
        }
        return r = y, i = [{
            key: "getFlags",
            value: function() {
                return this.flags
            }
        }, {
            key: "hasFlag",
            value: function(e) {
                return u.hasFlag(this.flags, e)
            }
        }, {
            key: "isHidden",
            value: function() {
                return this.hasFlag(l.LibraryApplicationFlags.HIDDEN)
            }
        }, {
            key: "isOverlayEnabled",
            value: function() {
                return !this.hasFlag(l.LibraryApplicationFlags.OVERLAY_DISABLED)
            }
        }, {
            key: "isMasterBranch",
            value: function() {
                return this.branchId === this.id
            }
        }, {
            key: "isDiscordApplication",
            value: function() {
                return !0
            }
        }, {
            key: "isEntitled",
            value: function(e, t) {
                var n = this;
                return !!this.isTestMode || this.entitlements.some(function(r) {
                    return r.isValid(e, t, n.branchId)
                })
            }
        }, {
            key: "isPreorder",
            value: function() {
                return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate
            }
        }, {
            key: "getDistributor",
            value: function() {
                return l.Distributors.DISCORD
            }
        }, {
            key: "getBranchName",
            value: function() {
                return null != this.branch ? this.branch.name : "master"
            }
        }, {
            key: "getBranchedName",
            value: function(e) {
                return this.isMasterBranch() || null == this.branch ? e.name : "".concat(e.name, " (").concat(this.branch.name, ")")
            }
        }, {
            key: "getSkuIdForAnalytics",
            value: function() {
                return this.sku.id
            }
        }, {
            key: "getAnalyticsData",
            value: function() {
                var e = a.default.getApplication(this.id);
                return {
                    application_id: null != e ? e.id : null,
                    application_name: null != e ? e.name : null,
                    sku_id: this.getSkuIdForAnalytics(),
                    launcher_platform: this.getDistributor()
                }
            }
        }], p = [{
            key: "createFromServer",
            value: function(e) {
                return new y({
                    id: e.application.id,
                    branchId: e.branch_id,
                    entitlements: null != e.entitlements ? e.entitlements.map(function(e) {
                        return s.default.createFromServer(e)
                    }) : [],
                    branch: e.branch,
                    flags: e.flags,
                    createdAt: e.created_at,
                    sku: {
                        id: e.sku.id,
                        type: e.sku.type,
                        premium: e.sku.premium,
                        preorderReleaseAt: null != e.sku.preorder_release_at ? o()(e.sku.preorder_release_at) : null,
                        preorderApproximateReleaseDate: null != e.sku.preorder_approximate_release_date ? e.sku.preorder_approximate_release_date : null
                    }
                })
            }
        }, {
            key: "createForTestMode",
            value: function(e) {
                return new y({
                    id: e.id,
                    entitlements: [],
                    branchId: e.branch.id,
                    branch: e.branch,
                    flags: l.LibraryApplicationFlags.ENTITLED,
                    createdAt: e.branch.created_at,
                    sku: {
                        id: e.skuId,
                        type: l.SKUTypes.DURABLE_PRIMARY,
                        premium: !1
                    },
                    isTestMode: !0
                })
            }
        }], i && f(r.prototype, i), p && f(r, p), y
    }(i.default)
}
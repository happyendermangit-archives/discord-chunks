function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("789020");
    var i = n("913527"),
        r = n.n(i),
        s = n("81825"),
        a = n("812206"),
        o = n("630388"),
        l = n("959546"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class _ extends s.default {
        static createFromServer(e) {
            return new _({
                id: e.application.id,
                branchId: e.branch_id,
                entitlements: null != e.entitlements ? e.entitlements.map(e => l.default.createFromServer(e)) : [],
                branch: e.branch,
                flags: e.flags,
                createdAt: e.created_at,
                sku: {
                    id: e.sku.id,
                    type: e.sku.type,
                    premium: e.sku.premium,
                    preorderReleaseAt: null != e.sku.preorder_release_at ? r()(e.sku.preorder_release_at) : null,
                    preorderApproximateReleaseDate: null != e.sku.preorder_approximate_release_date ? e.sku.preorder_approximate_release_date : null
                }
            })
        }
        static createForTestMode(e) {
            return new _({
                id: e.id,
                entitlements: [],
                branchId: e.branch.id,
                branch: e.branch,
                flags: u.LibraryApplicationFlags.ENTITLED,
                createdAt: e.branch.created_at,
                sku: {
                    id: e.skuId,
                    type: u.SKUTypes.DURABLE_PRIMARY,
                    premium: !1
                },
                isTestMode: !0
            })
        }
        getFlags() {
            return this.flags
        }
        hasFlag(e) {
            return o.hasFlag(this.flags, e)
        }
        isHidden() {
            return this.hasFlag(u.LibraryApplicationFlags.HIDDEN)
        }
        isOverlayEnabled() {
            return !this.hasFlag(u.LibraryApplicationFlags.OVERLAY_DISABLED)
        }
        isMasterBranch() {
            return this.branchId === this.id
        }
        isDiscordApplication() {
            return !0
        }
        isEntitled(e, t) {
            return !!this.isTestMode || this.entitlements.some(n => n.isValid(e, t, this.branchId))
        }
        isPreorder() {
            return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate
        }
        getDistributor() {
            return u.Distributors.DISCORD
        }
        getBranchName() {
            return null != this.branch ? this.branch.name : "master"
        }
        getBranchedName(e) {
            return this.isMasterBranch() || null == this.branch ? e.name : "".concat(e.name, " (").concat(this.branch.name, ")")
        }
        getSkuIdForAnalytics() {
            return this.sku.id
        }
        getAnalyticsData() {
            let e = a.default.getApplication(this.id);
            return {
                application_id: null != e ? e.id : null,
                application_name: null != e ? e.name : null,
                sku_id: this.getSkuIdForAnalytics(),
                launcher_platform: this.getDistributor()
            }
        }
        constructor(e) {
            super(), d(this, "id", void 0), d(this, "branchId", void 0), d(this, "flags", void 0), d(this, "createdAt", void 0), d(this, "entitlements", void 0), d(this, "branch", void 0), d(this, "sku", void 0), d(this, "isTestMode", void 0), this.id = e.id, this.createdAt = e.createdAt, this.flags = e.flags, this.branchId = e.branchId, this.entitlements = e.entitlements, this.branch = e.branch, this.sku = e.sku, this.isTestMode = e.isTestMode || !1
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("702976");
    var i, r = n("866227"),
        s = n.n(r),
        a = n("666038"),
        o = n("299285"),
        l = n("568734"),
        u = n("984273"),
        c = n("49111");
    i = class e extends a.default {
        static createFromServer(t) {
            return new e({
                id: t.application.id,
                branchId: t.branch_id,
                entitlements: null != t.entitlements ? t.entitlements.map(e => u.default.createFromServer(e)) : [],
                branch: t.branch,
                flags: t.flags,
                createdAt: t.created_at,
                sku: {
                    id: t.sku.id,
                    type: t.sku.type,
                    premium: t.sku.premium,
                    preorderReleaseAt: null != t.sku.preorder_release_at ? s(t.sku.preorder_release_at) : null,
                    preorderApproximateReleaseDate: null != t.sku.preorder_approximate_release_date ? t.sku.preorder_approximate_release_date : null
                }
            })
        }
        static createForTestMode(t) {
            return new e({
                id: t.id,
                entitlements: [],
                branchId: t.branch.id,
                branch: t.branch,
                flags: c.LibraryApplicationFlags.ENTITLED,
                createdAt: t.branch.created_at,
                sku: {
                    id: t.skuId,
                    type: c.SKUTypes.DURABLE_PRIMARY,
                    premium: !1
                },
                isTestMode: !0
            })
        }
        getFlags() {
            return this.flags
        }
        hasFlag(e) {
            return l.hasFlag(this.flags, e)
        }
        isHidden() {
            return this.hasFlag(c.LibraryApplicationFlags.HIDDEN)
        }
        isOverlayEnabled() {
            return !this.hasFlag(c.LibraryApplicationFlags.OVERLAY_DISABLED)
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
            return c.Distributors.DISCORD
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
            let e = o.default.getApplication(this.id);
            return {
                application_id: null != e ? e.id : null,
                application_name: null != e ? e.name : null,
                sku_id: this.getSkuIdForAnalytics(),
                launcher_platform: this.getDistributor()
            }
        }
        constructor(e) {
            super(), this.id = e.id, this.createdAt = e.createdAt, this.flags = e.flags, this.branchId = e.branchId, this.entitlements = e.entitlements, this.branch = e.branch, this.sku = e.sku, this.isTestMode = e.isTestMode || !1
        }
    }
}
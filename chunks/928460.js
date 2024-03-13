function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return i
        }
    });
    var i, r = n("666038"),
        u = n("560350"),
        l = n("766274");
    i = class t extends r.default {
        static createFromServer(e) {
            let n = e.staff_notes;
            return new t({
                id: e.id,
                skuId: e.sku.id,
                summary: e.summary,
                tagline: e.tagline,
                flavorText: e.flavor_text,
                description: e.description,
                childSkuIds: null != e.child_skus ? e.child_skus.map(t => t.id) : null,
                alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map(t => t.id) : null,
                carouselItems: null != e.carousel_items ? e.carousel_items.map(t => ({
                    assetId: t.asset_id,
                    youtubeVideoId: t.youtube_video_id
                })) : null,
                assets: null != e.assets ? e.assets.map(u.transformStoreAssetFromServer) : null,
                staffNotes: null != n ? {
                    content: n.content,
                    user: null != n.user ? new l.default(n.user) : null
                } : null,
                guild: null != e.guild ? {
                    id: e.guild.id,
                    name: e.guild.name,
                    icon: e.guild.icon,
                    approximateMemberCount: e.guild.approximate_member_count,
                    approximatePresenceCount: e.guild.approximate_presence_count
                } : null,
                thumbnail: null != e.thumbnail ? (0, u.transformStoreAssetFromServer)(e.thumbnail) : null,
                previewVideo: null != e.preview_video ? (0, u.transformStoreAssetFromServer)(e.preview_video) : null,
                headerBackground: null != e.header_background ? (0, u.transformStoreAssetFromServer)(e.header_background) : null,
                headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, u.transformStoreAssetFromServer)(e.header_logo_dark_theme) : null,
                headerLogoLightTheme: null != e.header_logo_light_theme ? (0, u.transformStoreAssetFromServer)(e.header_logo_light_theme) : null,
                boxArt: null != e.box_art ? (0, u.transformStoreAssetFromServer)(e.box_art) : null,
                heroBackground: null != e.hero_background ? (0, u.transformStoreAssetFromServer)(e.hero_background) : null,
                heroVideo: null != e.hero_video ? (0, u.transformStoreAssetFromServer)(e.hero_video) : null,
                entitlementBranchId: e.entitlement_branch_id
            })
        }
        isSlimDirectoryVersion() {
            return null == this.description
        }
        constructor(t) {
            super(), this.id = t.id, this.skuId = t.skuId, this.summary = t.summary, this.tagline = t.tagline, this.flavorText = t.flavorText, this.description = t.description, this.carouselItems = t.carouselItems || [], this.childSkuIds = t.childSkuIds || [], this.alternativeSkuIds = t.alternativeSkuIds || [], this.assets = t.assets || [], this.staffNotes = t.staffNotes, this.guild = t.guild, this.thumbnail = t.thumbnail || null, this.boxArt = t.boxArt || null, this.previewVideo = t.previewVideo || null, this.headerBackground = t.headerBackground || null, this.headerLogoDarkTheme = t.headerLogoDarkTheme || null, this.headerLogoLightTheme = t.headerLogoLightTheme || null, this.heroBackground = t.heroBackground || null, this.heroVideo = t.heroVideo || null, this.entitlementBranchId = t.entitlementBranchId || null, this.benefits = t.benefits || []
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildClanFromServer: function() {
            return a
        },
        getClanDiscoveryAffinity: function() {
            return u
        },
        isLoadedSearchResult: function() {
            return o
        },
        isUnloadedSearchResult: function() {
            return l
        }
    });
    var i = n("116175"),
        r = n("308083");

    function s(e, t) {
        return void 0 === e || "" === e ? t : e
    }

    function a(e) {
        let t = (0, i.getRandomClanBadgePreset)(),
            n = (0, r.getRandomClanBrandPreset)();
        return {
            id: e.id,
            name: e.name,
            icon: e.icon_hash,
            description: e.description,
            memberCount: e.member_count,
            games: e.game_ids,
            playstyle: e.playstyle,
            traits: e.search_terms,
            tag: e.tag,
            banner: e.banner,
            badge: {
                badgeKind: e.badge,
                primaryColor: s(e.badge_color_primary, t.primary),
                secondaryColor: s(e.badge_color_secondary, t.secondary)
            },
            branding: {
                primaryColor: s(e.brand_color_primary, n.primary),
                secondaryColor: s(e.brand_color_secondary, n.secondary)
            },
            wildcardDescriptors: e.wildcard_descriptors
        }
    }

    function o(e) {
        return "loaded" === e.status
    }

    function l(e) {
        return "unloaded" === e.status
    }

    function u(e, t) {
        let n = 0;
        return null != t.games && (n += 2 * t.games.filter(t => e.games.includes(t)).length), null != t.playstyle && (t.playstyle === e.playstyle ? n += 2 : r.PLAYSTYLE_GROUPS[e.playstyle] === r.PLAYSTYLE_GROUPS[t.playstyle] && (n += 1)), null != t.traits && (n += 2 * Array.from(t.traits).filter(t => e.traits.includes(t)).length), n
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildClanFromServer: function() {
            return o
        },
        getClanDiscoveryAffinity: function() {
            return d
        },
        isLoadedSearchResult: function() {
            return l
        },
        isUnloadedSearchResult: function() {
            return u
        }
    }), n("536091");
    var i = n("924801"),
        r = n("854698"),
        s = n("116175"),
        a = n("308083");

    function o(e) {
        return {
            id: e.id,
            name: e.name,
            icon: e.icon_hash,
            description: e.description,
            memberCount: e.member_count,
            games: e.game_ids,
            playstyle: e.playstyle,
            traits: e.search_terms,
            primetime: e.primetime,
            tag: e.tag,
            badge: {
                badgeKind: s.ClanBadgeKind.SWORD,
                primaryColor: "#FF69B4",
                secondaryColor: "#FF69B4"
            },
            branding: {
                primaryColor: "#FF69B4",
                secondaryColor: "#FF69B4"
            },
            location: a.PLACEHOLDER_CLAN_LOCATION,
            language: a.PLACEHOLDER_CLAN_LANGUAGE
        }
    }

    function l(e) {
        return "loaded" === e.status
    }

    function u(e) {
        return "unloaded" === e.status
    }

    function d(e, t) {
        let n = 0;
        if (null != t.games && (n += 2 * t.games.filter(t => e.games.includes(t)).length), null != t.playstyle && (t.playstyle === e.playstyle ? n += 2 : a.PLAYSTYLE_GROUPS[e.playstyle] === a.PLAYSTYLE_GROUPS[t.playstyle] && (n += 1)), null != t.traits && (n += 2 * Array.from(t.traits).filter(t => e.traits.includes(t)).length), null != t.primetimes) {
            let s = e.primetime.map(e => (0, r.getRRule)(e).between(new Date, new Date(Date.now() + 6048e5))).flat();
            n += 2 * (0, i.getTimeRangesInNextWeek)(t.primetimes).filter(e => s.some(t => e.start.subtract(1).isBefore(t) && e.end.add(1).isAfter(t))).length
        }
        return n
    }
}
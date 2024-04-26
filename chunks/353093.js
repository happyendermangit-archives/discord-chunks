function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatSelectionList: function() {
            return d
        },
        getAccessibleTextColor: function() {
            return _
        },
        getClanBadgeUrl: function() {
            return E
        },
        getUserClanData: function() {
            return o
        },
        isGuildAClan: function() {
            return l
        },
        isGuildAdoptedUserClanIdentity: function() {
            return u
        }
    });
    var i = n("481060"),
        r = n("308083"),
        s = n("981631"),
        a = n("689938");

    function o(e) {
        return null != e && e.identityEnabled ? {
            guildId: e.identityGuildId,
            tag: e.tag,
            badge: e.badge
        } : {}
    }

    function l(e) {
        return null != e && e.hasFeature(s.GuildFeatures.CLAN)
    }

    function u(e, t) {
        return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
    }
    let d = (e, t) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[1];
        if (2 === e.length) return a.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
            item1: e[0],
            item2: e[1]
        });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(", "),
                i = a.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
                    n: e.length - t
                });
            return a.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: n,
                last: i
            })
        } {
            let t = e.slice(0, -1).join(", "),
                n = e[e.length - 1];
            return a.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: t,
                last: n
            })
        }
    };

    function _(e) {
        let t = parseInt(e.substr(1, 2), 16),
            n = parseInt(e.substr(3, 2), 16),
            r = parseInt(e.substr(5, 2), 16);
        return (299 * t + 587 * n + 114 * r) / 1e3 < 128 ? i.tokens.colors.HEADER_PRIMARY.resolve({
            theme: "dark",
            saturation: 1
        }) : i.tokens.colors.HEADER_PRIMARY.resolve({
            theme: "light",
            saturation: 1
        })
    }
    let c = {
        [r.ClanTagBadgeSize.SIZE_12]: 16,
        [r.ClanTagBadgeSize.SIZE_16]: 16,
        [r.ClanTagBadgeSize.SIZE_24]: 24,
        [r.ClanTagBadgeSize.SIZE_36]: 40
    };

    function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.ClanTagBadgeSize.SIZE_12;
        if (null == t) return;
        let {
            CDN_HOST: i
        } = window.GLOBAL_ENV;
        if (null != i) return "".concat(location.protocol, "//").concat(i, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(c[n])
    }
}
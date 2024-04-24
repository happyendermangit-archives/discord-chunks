function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatSelectionList: function() {
            return c
        },
        getAccessibleTextColor: function() {
            return E
        },
        getGuildIdFromUserClan: function() {
            return l
        },
        getTagFromUserClan: function() {
            return o
        },
        isGuildAClan: function() {
            return u
        },
        isGuildAdoptedUserClanIdentity: function() {
            return _
        },
        userHasAdoptedAnyClanIdentity: function() {
            return d
        }
    });
    var i = n("481060"),
        r = n("981631"),
        s = n("689938");

    function a(e, t) {
        var n;
        return null != e && e.identityEnabled ? null !== (n = e[t]) && void 0 !== n ? n : null : null
    }

    function o(e) {
        return a(e, "tag")
    }

    function l(e) {
        return a(e, "identityGuildId")
    }

    function u(e) {
        return null != e && e.hasFeature(r.GuildFeatures.CLAN)
    }

    function d(e) {
        return null != e && !!e.identityEnabled
    }

    function _(e, t) {
        return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
    }
    let c = (e, t) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[1];
        if (2 === e.length) return s.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
            item1: e[0],
            item2: e[1]
        });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(", "),
                i = s.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
                    n: e.length - t
                });
            return s.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: n,
                last: i
            })
        } {
            let t = e.slice(0, -1).join(", "),
                n = e[e.length - 1];
            return s.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: t,
                last: n
            })
        }
    };

    function E(e) {
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
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatSelectionList: function() {
            return _
        },
        getGuildIdFromUserClan: function() {
            return o
        },
        getTagFromUserClan: function() {
            return a
        },
        isGuildAClan: function() {
            return l
        },
        isGuildAdoptedUserClanIdentity: function() {
            return d
        },
        userHasAdoptedAnyClanIdentity: function() {
            return u
        }
    });
    var i = n("981631"),
        r = n("689938");

    function s(e, t) {
        var n;
        return null != e && e.identityEnabled ? null !== (n = e[t]) && void 0 !== n ? n : null : null
    }

    function a(e) {
        return s(e, "tag")
    }

    function o(e) {
        return s(e, "identityGuildId")
    }

    function l(e) {
        return null != e && e.hasFeature(i.GuildFeatures.CLAN)
    }

    function u(e) {
        return null != e && !!e.identityEnabled
    }

    function d(e, t) {
        return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
    }
    let _ = (e, t) => {
        if (1 === e.length) return e[0];
        if (2 === e.length) return r.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
            item1: e[0],
            item2: e[1]
        });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(", "),
                i = r.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
                    n: e.length - t
                });
            return r.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: n,
                last: i
            })
        } {
            let t = e.slice(0, -1).join(", "),
                n = e[e.length - 1];
            return r.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: t,
                last: n
            })
        }
    }
}
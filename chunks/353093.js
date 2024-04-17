function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatSelectionList: function() {
            return l
        },
        getTagFromClan: function() {
            return s
        },
        isGuildAClan: function() {
            return a
        },
        isGuildAdoptedUserClanIdentity: function() {
            return o
        }
    });
    var i = n("981631"),
        r = n("689938");

    function s(e) {
        var t;
        return null != e && e.identityEnabled ? null !== (t = e.tag) && void 0 !== t ? t : null : null
    }

    function a(e) {
        return null != e && e.hasFeature(i.GuildFeatures.CLAN)
    }

    function o(e, t) {
        return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
    }
    let l = e => {
        if (1 === e.length) return e[0];
        if (2 === e.length) return r.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
            item1: e[0],
            item2: e[1]
        });
        {
            let t = e.slice(0, -1).join(", "),
                n = e[e.length - 1];
            return r.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
                items: t,
                last: n
            })
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("627445"),
        l = n.n(i),
        a = n("884351"),
        s = n("19766"),
        r = n("957255"),
        o = n("49111");
    let u = new RegExp(/@(:?everyone|here)/);

    function d(e, t) {
        let n = 0;
        if (t.isThread()) {
            var i;
            return null !== (i = t.memberCount) && void 0 !== i ? i : 0
        }
        let l = s.default.getProps(t.getGuildId(), t.id);
        return l.groups.forEach(t => {
            ("@everyone" === e || t.id !== o.StatusTypes.OFFLINE) && (n += t.count)
        }), n
    }
    var c = {
        shouldShowEveryoneGuard: function(e, t) {
            let n = t.getGuildId();
            l(n, "isGuildChannel with null guildId");
            let i = d(e, t);
            return i > 30 && r.default.can(o.Permissions.MENTION_EVERYONE, t)
        },
        everyoneMemberCount: d,
        extractEveryoneRole: function(e, t) {
            let n = a.default.parsePreprocessor(t, e);
            for (let e of n) {
                let t = function e(t) {
                    if ("string" == typeof t.content) {
                        var n;
                        if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                        let e = null === (n = t.content) || void 0 === n ? void 0 : n.match(u);
                        if (null != e) {
                            let [t] = e;
                            return t
                        }
                    } else if (Array.isArray(t.content))
                        for (let n of t.content) {
                            let t = e(n);
                            if (null != t) return t
                        }
                    return null
                }(e);
                if (null != t) return t
            }
            return null
        }
    }
}
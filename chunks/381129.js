function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("512722"),
        r = n.n(i),
        a = n("957730"),
        s = n("439170"),
        o = n("496675"),
        l = n("981631");
    let u = new RegExp(/@(:?everyone|here)/);

    function d(e, t) {
        let n = 0;
        if (t.isThread()) {
            var i;
            return null !== (i = t.memberCount) && void 0 !== i ? i : 0
        }
        return s.default.getProps(t.getGuildId(), t.id).groups.forEach(t => {
            ("@everyone" === e || t.id !== l.StatusTypes.OFFLINE) && (n += t.count)
        }), n
    }
    t.default = {
        shouldShowEveryoneGuard: function(e, t) {
            let n = t.getGuildId();
            return r()(n, "isGuildChannel with null guildId"), d(e, t) > 30 && o.default.can(l.Permissions.MENTION_EVERYONE, t)
        },
        everyoneMemberCount: d,
        extractEveryoneRole: function(e, t) {
            for (let n of a.default.parsePreprocessor(t, e)) {
                let e = function e(t) {
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
                }(n);
                if (null != e) return e
            }
            return null
        }
    }
}
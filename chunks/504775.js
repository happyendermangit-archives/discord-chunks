function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return o
        }
    });
    var n, r = a("470079"),
        l = a("283895"),
        s = a("334162"),
        u = a("465517"),
        E = a("243547"),
        i = a("912108");

    function c(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }
    var _ = (c(n = {}, E.InternalTemplateCodes.CLASSROOM, a("320440")), c(n, E.InternalTemplateCodes.LOCAL_COMMUNITIES, a("526916")), c(n, E.InternalTemplateCodes.CREATORS_HOBBIES, a("419185")), c(n, E.InternalTemplateCodes.GLOBAL_COMMUNITIES, a("540909")), c(n, E.InternalTemplateCodes.FRIENDS_FAMILY, a("826806")), c(n, E.InternalTemplateCodes.STUDY_GROUPS, a("29654")), c(n, E.InternalTemplateCodes.CREATE_FROM_SCRATCH, a("561030")), c(n, E.InternalTemplateCodes.CAMPUS_CLUBS, a("494207")), c(n, E.InternalTemplateCodes.LEAGUE_CLUBS, a("232454")), c(n, E.InternalTemplateCodes.GITHUB_HACKATHON, a("123013")), n);

    function o(e) {
        var t = e.headerId,
            a = e.guildTemplate,
            n = a.code,
            c = _[n];
        if (null != c) {
            var o, d = (0, s.default)(n),
                L = d.header,
                f = d.description,
                T = d.author;
            return r.createElement("div", null, r.createElement("img", {
                className: i.image,
                src: c,
                alt: ""
            }), r.createElement(l.Title, {
                className: i.header,
                id: t
            }, L), r.createElement(l.SubTitle, null, f), a.state === E.GuildTemplateStates.RESOLVED ? r.createElement(u.UsagePill, {
                className: i.usagePill,
                count: null !== (o = a.usageCount) && void 0 !== o ? o : 0,
                verifiedName: T
            }) : null)
        }
        return r.createElement(u.default, {
            pillClassName: i.usagePill,
            guildTemplate: a,
            tall: !0
        })
    }
}
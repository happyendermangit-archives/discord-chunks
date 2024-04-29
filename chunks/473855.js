function(e, s, a) {
    "use strict";
    a.r(s), a.d(s, {
        default: function() {
            return d
        }
    });
    var t = a("735250");
    a("470079");
    var l = a("819570"),
        n = a("837748"),
        E = a("306453"),
        r = a("58346"),
        _ = a("423767");
    let u = {
        [r.InternalTemplateCodes.CLASSROOM]: a("320440"),
        [r.InternalTemplateCodes.LOCAL_COMMUNITIES]: a("526916"),
        [r.InternalTemplateCodes.CREATORS_HOBBIES]: a("419185"),
        [r.InternalTemplateCodes.GLOBAL_COMMUNITIES]: a("540909"),
        [r.InternalTemplateCodes.FRIENDS_FAMILY]: a("826806"),
        [r.InternalTemplateCodes.STUDY_GROUPS]: a("29654"),
        [r.InternalTemplateCodes.CREATE_FROM_SCRATCH]: a("561030"),
        [r.InternalTemplateCodes.CAMPUS_CLUBS]: a("494207"),
        [r.InternalTemplateCodes.LEAGUE_CLUBS]: a("232454"),
        [r.InternalTemplateCodes.GITHUB_HACKATHON]: a("123013")
    };

    function d(e) {
        let {
            headerId: s,
            guildTemplate: a
        } = e, d = a.code, i = u[d];
        if (null != i) {
            var L;
            let {
                header: e,
                description: u,
                author: T
            } = (0, n.default)(d);
            return (0, t.jsxs)("div", {
                children: [(0, t.jsx)("img", {
                    className: _.image,
                    src: i,
                    alt: ""
                }), (0, t.jsx)(l.Title, {
                    className: _.header,
                    id: s,
                    children: e
                }), (0, t.jsx)(l.SubTitle, {
                    children: u
                }), a.state === r.GuildTemplateStates.RESOLVED ? (0, t.jsx)(E.UsagePill, {
                    className: _.usagePill,
                    count: null !== (L = a.usageCount) && void 0 !== L ? L : 0,
                    verifiedName: T
                }) : null]
            })
        }
        return (0, t.jsx)(E.default, {
            pillClassName: _.usagePill,
            guildTemplate: a,
            tall: !0
        })
    }
}
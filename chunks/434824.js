function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("124969"),
        l = n("5487"),
        r = n("473759"),
        i = n("579033"),
        o = n("223369");
    let u = {
        [i.InternalTemplateCodes.CLASSROOM]: n("251834"),
        [i.InternalTemplateCodes.LOCAL_COMMUNITIES]: n("787762"),
        [i.InternalTemplateCodes.CREATORS_HOBBIES]: n("41668"),
        [i.InternalTemplateCodes.GLOBAL_COMMUNITIES]: n("494323"),
        [i.InternalTemplateCodes.FRIENDS_FAMILY]: n("660389"),
        [i.InternalTemplateCodes.STUDY_GROUPS]: n("508971"),
        [i.InternalTemplateCodes.CREATE_FROM_SCRATCH]: n("800573"),
        [i.InternalTemplateCodes.CAMPUS_CLUBS]: n("97595"),
        [i.InternalTemplateCodes.LEAGUE_CLUBS]: n("556659"),
        [i.InternalTemplateCodes.GITHUB_HACKATHON]: n("212509")
    };

    function d(e) {
        let {
            headerId: t,
            guildTemplate: n
        } = e, d = n.code, c = u[d];
        if (null != c) {
            var E;
            let {
                header: e,
                description: u,
                author: f
            } = (0, l.default)(d);
            return (0, s.jsxs)("div", {
                children: [(0, s.jsx)("img", {
                    className: o.image,
                    src: c,
                    alt: ""
                }), (0, s.jsx)(a.Title, {
                    className: o.header,
                    id: t,
                    children: e
                }), (0, s.jsx)(a.SubTitle, {
                    children: u
                }), n.state === i.GuildTemplateStates.RESOLVED ? (0, s.jsx)(r.UsagePill, {
                    className: o.usagePill,
                    count: null !== (E = n.usageCount) && void 0 !== E ? E : 0,
                    verifiedName: f
                }) : null]
            })
        }
        return (0, s.jsx)(r.default, {
            pillClassName: o.usagePill,
            guildTemplate: n,
            tall: !0
        })
    }
}
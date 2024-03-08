function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return i
        }
    });
    var a = s("37983");
    s("884691");
    var l = s("124969"),
        n = s("5487"),
        r = s("473759"),
        u = s("579033"),
        E = s("223369");
    let d = {
        [u.InternalTemplateCodes.CLASSROOM]: s("251834"),
        [u.InternalTemplateCodes.LOCAL_COMMUNITIES]: s("787762"),
        [u.InternalTemplateCodes.CREATORS_HOBBIES]: s("41668"),
        [u.InternalTemplateCodes.GLOBAL_COMMUNITIES]: s("494323"),
        [u.InternalTemplateCodes.FRIENDS_FAMILY]: s("660389"),
        [u.InternalTemplateCodes.STUDY_GROUPS]: s("508971"),
        [u.InternalTemplateCodes.CREATE_FROM_SCRATCH]: s("800573"),
        [u.InternalTemplateCodes.CAMPUS_CLUBS]: s("97595"),
        [u.InternalTemplateCodes.LEAGUE_CLUBS]: s("556659"),
        [u.InternalTemplateCodes.GITHUB_HACKATHON]: s("212509")
    };

    function i(e) {
        let {
            headerId: t,
            guildTemplate: s
        } = e, i = s.code, _ = d[i];
        if (null != _) {
            var L;
            let {
                header: e,
                description: d,
                author: c
            } = (0, n.default)(i);
            return (0, a.jsxs)("div", {
                children: [(0, a.jsx)("img", {
                    className: E.image,
                    src: _,
                    alt: ""
                }), (0, a.jsx)(l.Title, {
                    className: E.header,
                    id: t,
                    children: e
                }), (0, a.jsx)(l.SubTitle, {
                    children: d
                }), s.state === u.GuildTemplateStates.RESOLVED ? (0, a.jsx)(r.UsagePill, {
                    className: E.usagePill,
                    count: null !== (L = s.usageCount) && void 0 !== L ? L : 0,
                    verifiedName: c
                }) : null]
            })
        }
        return (0, a.jsx)(r.default, {
            pillClassName: E.usagePill,
            guildTemplate: s,
            tall: !0
        })
    }
}
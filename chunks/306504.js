function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("302454"),
        o = n.n(r),
        i = n("94498"),
        a = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
        u = (0, i.createExperiment)({
            kind: "user",
            id: "2023-11_attachment_link_markup",
            label: "Attachment Link Config User Experiment",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Shows links to attachments as regular links",
                config: {
                    enabled: !1
                }
            }, {
                id: 2,
                label: 'Shows links to attachments as "mentions" of the filename',
                config: {
                    enabled: !0
                }
            }]
        }),
        s = {
            order: o().defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match: function(e) {
                var t = a.exec(e);
                return null === t || u.getCurrentConfig({
                    location: "markup"
                }).enabled ? t : null
            },
            parse: function(e, t, n) {
                var r, o = e[0];
                return {
                    type: "attachmentLink",
                    content: [{
                        type: "text",
                        content: r = e[1]
                    }],
                    attachmentUrl: o,
                    attachmentName: r
                }
            }
        };
    t.default = {
        attachmentLink: s
    }
}
function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i),
        s = n("818083");
    let a = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
        o = (0, s.createExperiment)({
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
        l = {
            order: r().defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match(e) {
                let t = a.exec(e);
                if (null !== t) {
                    let {
                        enabled: e
                    } = o.getCurrentConfig({
                        location: "markup"
                    });
                    if (!e) return null
                }
                return t
            },
            parse(e, t, n) {
                var i;
                let r = e[0];
                return {
                    type: "attachmentLink",
                    content: [{
                        type: "text",
                        content: i = e[1]
                    }],
                    attachmentUrl: r,
                    attachmentName: i
                }
            }
        };
    t.default = {
        attachmentLink: l
    }
}
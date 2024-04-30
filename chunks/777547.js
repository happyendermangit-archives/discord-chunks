function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubtextMarkdownUserExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_markdown_subtext",
        label: "Subtext Markdown",
        defaultConfig: {
            showSubtextMarkdown: !1
        },
        treatments: [{
            id: 1,
            label: "Show subtext markdown",
            config: {
                showSubtextMarkdown: !0
            }
        }]
    })
}
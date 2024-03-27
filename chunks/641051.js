function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2022-08_message_todos_staff_only",
        label: "Message TODO list",
        defaultConfig: {
            showReminders: !1
        },
        treatments: [{
            id: 1,
            label: "Show message TODOs CTA",
            config: {
                showReminders: !0
            }
        }]
    });
    t.default = i
}
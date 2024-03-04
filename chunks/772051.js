function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClydeExperimentState: function() {
            return s
        },
        default: function() {
            return o
        }
    });
    var i, s, r = n("862205");
    (i = s || (s = {}))[i.None = 0] = "None", i[i.DefaultOn = 1] = "DefaultOn", i[i.DefaultOff = 2] = "DefaultOff", i[i.ComingSoon = 3] = "ComingSoon", i[i.ClydeProfiles = 4] = "ClydeProfiles";
    let a = (0, r.createExperiment)({
        kind: "guild",
        id: "2023-03_clyde_ai",
        label: "ClydeAI",
        defaultConfig: {
            experimentState: 0
        },
        treatments: [{
            id: 1,
            label: "Enabled (Default Off)",
            config: {
                experimentState: 2
            }
        }, {
            id: 3,
            label: "Enabled (Default On)",
            config: {
                experimentState: 1
            }
        }, {
            id: 4,
            label: "Coming Soon",
            config: {
                experimentState: 3
            }
        }, {
            id: 5,
            label: "Clyde Profiles",
            config: {
                experimentState: 4
            }
        }]
    });
    var o = a
}
function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-04_call_experience_enhanced",
        label: "call experience enhanced",
        defaultConfig: {
            bucket: 0
        },
        treatments: [{
            id: 1,
            label: "bucket 5",
            config: {
                bucket: 5
            }
        }, {
            id: 2,
            label: "bucket 6",
            config: {
                bucket: 6
            }
        }, {
            id: 3,
            label: "bucket 7",
            config: {
                bucket: 7
            }
        }, {
            id: 4,
            label: "bucket 8",
            config: {
                bucket: 8
            }
        }]
    })
}
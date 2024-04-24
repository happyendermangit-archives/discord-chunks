function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-04_call_experience",
        label: "call experience",
        defaultConfig: {
            bucket: 0
        },
        treatments: [{
            id: 1,
            label: "bucket 1",
            config: {
                bucket: 1
            }
        }, {
            id: 2,
            label: "bucket 2",
            config: {
                bucket: 2
            }
        }, {
            id: 3,
            label: "bucket 3",
            config: {
                bucket: 3
            }
        }, {
            id: 4,
            label: "bucket 4",
            config: {
                bucket: 4
            }
        }]
    })
}
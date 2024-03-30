function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BodyWave: function() {
            return s
        },
        HeaderWave: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("153832"),
        i = n("168184");

    function a() {
        return r.createElement("svg", {
            className: i.headerWave,
            version: "1.1",
            preserveAspectRatio: "none",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1512 510",
            xmlSpace: "preserve"
        }, r.createElement("path", {
            style: {
                fill: "currentColor"
            },
            d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4  v154.4h1512V25.1z"
        }))
    }
    var u = (0, o.v4)();

    function s() {
        return r.createElement("svg", {
            className: i.bodyWave,
            version: "1.1",
            preserveAspectRatio: "none",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1512 1619",
            xmlSpace: "preserve"
        }, r.createElement("linearGradient", {
            id: u,
            gradientUnits: "userSpaceOnUse",
            x1: "-13.3959",
            y1: "82.1225",
            x2: "1221.1846",
            y2: "1689.3361"
        }, r.createElement("stop", {
            offset: "0",
            className: i.bodyWaveGradientStop1
        }), r.createElement("stop", {
            offset: "0.5",
            className: i.bodyWaveGradientStop2
        }), r.createElement("stop", {
            offset: "1",
            className: i.bodyWaveGradientStop3
        })), r.createElement("path", {
            style: {
                fill: "url(#".concat(u, ")")
            },
            d: "M0,1619c507-247.2,1154.7-241,1512-194.7V548.5c-150.9,56.4-400.3,51.2-691-222.6C506.6,29.9,186.8-16.5,0,4.3  V1619z"
        }))
    }
}
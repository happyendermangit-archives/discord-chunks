function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("960201"),
        u = n("314850");
    t.default = function(e) {
        var t = e.showImage,
            n = r.useMemo(function() {
                return {
                    usageWidth: i().random(60, 120),
                    descriptionWidth: i().random(200, 600),
                    sourceWidth: i().random(45, 90)
                }
            }, []),
            o = n.usageWidth,
            s = n.descriptionWidth,
            l = n.sourceWidth;
        return r.createElement("div", {
            className: u.wrapper
        }, t ? r.createElement("div", {
            className: u.image
        }) : null, r.createElement("div", {
            className: u.infoWrapper
        }, r.createElement("div", {
            style: {
                maxWidth: (0, a.pxToRem)(o)
            },
            className: u.usageWrapper
        }), r.createElement("div", {
            style: {
                maxWidth: (0, a.pxToRem)(s)
            },
            className: u.description
        })), r.createElement("div", {
            style: {
                width: (0, a.pxToRem)(l)
            },
            className: u.source
        }))
    }
}
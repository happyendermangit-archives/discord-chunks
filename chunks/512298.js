function(t, e, n) {
    "use strict";
    var r = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        i = ["Webkit", "ms", "Moz", "O"];
    Object.keys(r).forEach(function(t) {
        i.forEach(function(e) {
            var n;
            r[e + (n = t).charAt(0).toUpperCase() + n.substring(1)] = r[t]
        })
    });
    var o = {
            isUnitlessNumber: r,
            shorthandPropertyExpansions: {
                background: {
                    backgroundAttachment: !0,
                    backgroundColor: !0,
                    backgroundImage: !0,
                    backgroundPositionX: !0,
                    backgroundPositionY: !0,
                    backgroundRepeat: !0
                },
                backgroundPosition: {
                    backgroundPositionX: !0,
                    backgroundPositionY: !0
                },
                border: {
                    borderWidth: !0,
                    borderStyle: !0,
                    borderColor: !0
                },
                borderBottom: {
                    borderBottomWidth: !0,
                    borderBottomStyle: !0,
                    borderBottomColor: !0
                },
                borderLeft: {
                    borderLeftWidth: !0,
                    borderLeftStyle: !0,
                    borderLeftColor: !0
                },
                borderRight: {
                    borderRightWidth: !0,
                    borderRightStyle: !0,
                    borderRightColor: !0
                },
                borderTop: {
                    borderTopWidth: !0,
                    borderTopStyle: !0,
                    borderTopColor: !0
                },
                font: {
                    fontStyle: !0,
                    fontVariant: !0,
                    fontWeight: !0,
                    fontSize: !0,
                    lineHeight: !0,
                    fontFamily: !0
                },
                outline: {
                    outlineWidth: !0,
                    outlineStyle: !0,
                    outlineColor: !0
                }
            }
        },
        a = !!("undefined" != typeof window && window.document && window.document.createElement),
        u = {
            canUseDOM: a,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
            canUseViewport: a && !!window.screen,
            isInWorker: !a
        },
        s = o.isUnitlessNumber;

    function c(t) {
        return function() {
            return t
        }
    }
    var l = function() {};
    l.thatReturns = c, l.thatReturnsFalse = c(!1), l.thatReturnsTrue = c(!0), l.thatReturnsNull = c(null), l.thatReturnsThis = function() {
        return this
    }, l.thatReturnsArgument = function(t) {
        return t
    };
    var f = !1;
    if (u.canUseDOM) {
        var h = document.createElement("div").style;
        try {
            h.font = ""
        } catch (t) {
            f = !0
        }
    }
    t.exports = {
        createDangerousStringForStyles: function(t) {},
        setValueForStyles: function(t, e, n) {
            var r = t.style;
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var a, u, c, l = 0 === i.indexOf("--");
                    var h = (a = i, u = e[i], c = l, null == u || "boolean" == typeof u || "" === u ? "" : c || "number" != typeof u || 0 === u || s.hasOwnProperty(a) && s[a] ? ("" + u).trim() : u + "px");
                    if ("float" === i && (i = "cssFloat"), l) r.setProperty(i, h);
                    else if (h) r[i] = h;
                    else {
                        var p = f && o.shorthandPropertyExpansions[i];
                        if (p)
                            for (var d in p) r[d] = "";
                        else r[i] = ""
                    }
                }
        }
    }
}
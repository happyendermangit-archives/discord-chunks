function(e) {
    "use strict";
    var t = {
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
        n = ["Webkit", "ms", "Moz", "O"];
    Object.keys(t).forEach(function(e) {
        n.forEach(function(n) {
            var r;
            t[n + (r = e).charAt(0).toUpperCase() + r.substring(1)] = t[e]
        })
    });
    var r = {
            isUnitlessNumber: t,
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
        i = !!("undefined" != typeof window && window.document && window.document.createElement),
        a = {
            canUseDOM: i,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: i && !!(window.addEventListener || window.attachEvent),
            canUseViewport: i && !!window.screen,
            isInWorker: !i
        },
        o = r.isUnitlessNumber;

    function s(e) {
        return function() {
            return e
        }
    }
    var u = function() {};
    u.thatReturns = s, u.thatReturnsFalse = s(!1), u.thatReturnsTrue = s(!0), u.thatReturnsNull = s(null), u.thatReturnsThis = function() {
        return this
    }, u.thatReturnsArgument = function(e) {
        return e
    };
    var c = !1;
    if (a.canUseDOM) {
        var l = document.createElement("div").style;
        try {
            l.font = ""
        } catch (e) {
            c = !0
        }
    }
    e.exports = {
        createDangerousStringForStyles: function(e) {},
        setValueForStyles: function(e, t, n) {
            var i = e.style;
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var s, u, l, d = 0 === a.indexOf("--");
                    var f = (s = a, u = t[a], l = d, null == u || "boolean" == typeof u || "" === u ? "" : l || "number" != typeof u || 0 === u || o.hasOwnProperty(s) && o[s] ? ("" + u).trim() : u + "px");
                    if ("float" === a && (a = "cssFloat"), d) i.setProperty(a, f);
                    else if (f) i[a] = f;
                    else {
                        var p = c && r.shorthandPropertyExpansions[a];
                        if (p)
                            for (var h in p) i[h] = "";
                        else i[a] = ""
                    }
                }
        }
    }
}
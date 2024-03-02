function(e, t, n) {
    "use strict";
    n("70102"), n("424973"), n("843762"), n("781738");
    var i = n("133331").forEach;
    e.exports = function(e) {
        var t = (e = e || {}).reporter,
            n = e.batchProcessor,
            r = e.stateHandler.getState;
        e.stateHandler.hasState;
        var o = e.idHandler;
        if (!n) throw Error("Missing required dependency: batchProcessor");
        if (!t) throw Error("Missing required dependency: reporter.");
        var a = function() {
                var e = document.createElement("div");
                e.style.cssText = c(["position: absolute", "width: 1000px", "height: 1000px", "visibility: hidden", "margin: 0", "padding: 0"]);
                var t = document.createElement("div");
                t.style.cssText = c(["position: absolute", "width: 500px", "height: 500px", "overflow: scroll", "visibility: none", "top: -1500px", "left: -1500px", "visibility: hidden", "margin: 0", "padding: 0"]), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
                var n = 500 - t.clientWidth,
                    i = 500 - t.clientHeight;
                return document.body.removeChild(t), {
                    width: n,
                    height: i
                }
            }(),
            s = "erd_scroll_detection_container";

        function l(e) {
            (function(e, t, n) {
                if (!e.getElementById(t)) {
                    var i, r, o, a = n + "_animation",
                        s = "/* Created by the element-resize-detector library. */\n";
                    s += "." + n + " > div::-webkit-scrollbar { " + c(["display: none"]) + " }\n\n" + ("." + n + "_animation_active { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + a, "animation-name: " + a]) + " }\n") + ("@-webkit-keyframes " + a + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n") + ("@keyframes " + a + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }"), i = s, r = r || function(t) {
                        e.head.appendChild(t)
                    }, (o = e.createElement("style")).innerHTML = i, o.id = t, r(o)
                }
            })(e, "erd_scroll_detection_scrollbar_style", s)
        }

        function c(t) {
            var n = e.important ? " !important; " : "; ";
            return (t.join(n) + n).trim()
        }
        l(window.document);

        function d(e, n, i) {
            if (e.addEventListener) e.addEventListener(n, i);
            else {
                if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                e.attachEvent("on" + n, i)
            }
        }

        function u(e, n, i) {
            if (e.removeEventListener) e.removeEventListener(n, i);
            else {
                if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                e.detachEvent("on" + n, i)
            }
        }

        function f(e) {
            return r(e).container.childNodes[0].childNodes[0].childNodes[0]
        }

        function h(e) {
            return r(e).container.childNodes[0].childNodes[0].childNodes[1]
        }
        return {
            makeDetectable: function(e, l, u) {
                var p, m, g;

                function v() {
                    if (e.debug) {
                        var n = Array.prototype.slice.call(arguments);
                        if (n.unshift(o.get(l), "Scroll: "), t.log.apply) t.log.apply(null, n);
                        else
                            for (var i = 0; i < n.length; i++) t.log(n[i])
                    }
                }!u && (u = l, l = e, e = null), e = e || {};

                function b(e) {
                    var t = r(e).container.childNodes[0],
                        n = window.getComputedStyle(t);
                    return !n.width || -1 === n.width.indexOf("px")
                }

                function y() {
                    var e = window.getComputedStyle(l),
                        t = {};
                    return t.position = e.position, t.width = l.offsetWidth, t.height = l.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                }

                function w() {
                    if (v("storeStyle invoked."), !r(l)) {
                        v("Aborting because element has been uninstalled");
                        return
                    }
                    var e = y();
                    r(l).style = e
                }

                function E(e, t, n) {
                    r(e).lastWidth = t, r(e).lastHeight = n
                }

                function S() {
                    return 2 * a.width + 1
                }

                function x() {
                    return 2 * a.height + 1
                }

                function k(e) {
                    return e + 10 + S()
                }

                function O(e) {
                    return e + 10 + x()
                }

                function z(e, t, n) {
                    var i = f(e),
                        r = h(e),
                        o = t + 10 + S(),
                        a = n + 10 + x(),
                        s = 2 * t + S(),
                        l = 2 * n + x();
                    i.scrollLeft = o, i.scrollTop = a, r.scrollLeft = s, r.scrollTop = l
                }

                function A() {
                    var e = r(l).container;
                    if (!e) {
                        (e = document.createElement("div")).className = s, e.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), r(l).container = e, t = e, t.className += " " + s + "_animation_active", l.appendChild(e);
                        var t, n = function() {
                            r(l).onRendered && r(l).onRendered()
                        };
                        d(e, "animationstart", n), r(l).onAnimationStart = n
                    }
                    return e
                }

                function D() {
                    if (v("Injecting elements"), !r(l)) {
                        v("Aborting because element has been uninstalled");
                        return
                    }! function() {
                        var n = r(l).style;
                        if ("static" === n.position) {
                            l.style.setProperty("position", "relative", e.important ? "important" : "");
                            var i = function(e, t, n, i) {
                                var r = n[i];
                                if ("auto" !== r && "0" !== r.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + i + "=" + r + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0
                            };
                            i(t, l, n, "top"), i(t, l, n, "right"), i(t, l, n, "bottom"), i(t, l, n, "left")
                        }
                    }();
                    var n, i, o, u, f = r(l).container;
                    !f && (f = A());
                    var h = a.width,
                        p = a.height,
                        m = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
                    var g = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat((n = -(1 + h), i = -(1 + p), o = -p, ["left: " + (n = n ? n + "px" : "0"), "top: " + (i = i ? i + "px" : "0"), "right: " + (u = (u = -h) ? u + "px" : "0"), "bottom: " + (o = o ? o + "px" : "0")]))),
                        b = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                        y = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                        w = c(["position: absolute", "left: 0", "top: 0"]),
                        E = c(["position: absolute", "width: 200%", "height: 200%"]),
                        S = document.createElement("div"),
                        x = document.createElement("div"),
                        k = document.createElement("div"),
                        O = document.createElement("div"),
                        z = document.createElement("div"),
                        D = document.createElement("div");

                    function T() {
                        var e = r(l);
                        e && e.onExpand ? e.onExpand() : v("Aborting expand scroll handler: element has been uninstalled")
                    }

                    function j() {
                        var e = r(l);
                        e && e.onShrink ? e.onShrink() : v("Aborting shrink scroll handler: element has been uninstalled")
                    }
                    S.dir = "ltr", S.style.cssText = m, S.className = s, x.className = s, x.style.cssText = g, k.style.cssText = b, O.style.cssText = w, z.style.cssText = y, D.style.cssText = E, k.appendChild(O), z.appendChild(D), x.appendChild(k), x.appendChild(z), S.appendChild(x), f.appendChild(S), d(k, "scroll", T), d(z, "scroll", j), r(l).onExpandScroll = T, r(l).onShrinkScroll = j
                }

                function T() {
                    function a(t, n, i) {
                        var r = f(t).childNodes[0],
                            o = n + 10 + S(),
                            a = i + 10 + x();
                        r.style.setProperty("width", o + "px", e.important ? "important" : ""), r.style.setProperty("height", a + "px", e.important ? "important" : "")
                    }

                    function s(i) {
                        var s = l.offsetWidth,
                            d = l.offsetHeight,
                            u = s !== r(l).lastWidth || d !== r(l).lastHeight;
                        v("Storing current size", s, d), E(l, s, d), n.add(0, function() {
                            if (u) {
                                if (!r(l)) {
                                    v("Aborting because element has been uninstalled");
                                    return
                                }
                                if (!c()) {
                                    v("Aborting because element container has not been initialized");
                                    return
                                }
                                if (e.debug) {
                                    var n = l.offsetWidth,
                                        i = l.offsetHeight;
                                    (n !== s || i !== d) && t.warn(o.get(l), "Scroll: Size changed before updating detector elements.")
                                }
                                a(l, s, d)
                            }
                        }), n.add(1, function() {
                            if (!r(l)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }
                            if (!c()) {
                                v("Aborting because element container has not been initialized");
                                return
                            }
                            z(l, s, d)
                        }), u && i && n.add(2, function() {
                            if (!r(l)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }
                            if (!c()) {
                                v("Aborting because element container has not been initialized");
                                return
                            }
                            i()
                        })
                    }

                    function c() {
                        return !!r(l).container
                    }

                    function d() {
                        v("notifyListenersIfNeeded invoked");
                        var e = r(l);
                        return void 0 === r(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? v("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? v("Not notifying: Size already notified") : void(v("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, i(r(l).listeners, function(e) {
                            e(l)
                        }))
                    }

                    function u() {
                        if (v("Scroll detected."), b(l)) {
                            v("Scroll event fired while unrendered. Ignoring...");
                            return
                        }
                        s(d)
                    }
                    if (v("registerListenersAndPositionElements invoked."), !r(l)) {
                        v("Aborting because element has been uninstalled");
                        return
                    }
                    r(l).onRendered = function() {
                        if (v("startanimation triggered."), b(l)) {
                            v("Ignoring since element is still unrendered...");
                            return
                        }
                        v("Element rendered.");
                        var e = f(l),
                            t = h(l);
                        (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (v("Scrollbars out of sync. Updating detector elements..."), s(d))
                    }, r(l).onExpand = u, r(l).onShrink = u;
                    var p = r(l).style;
                    a(l, p.width, p.height)
                }

                function j() {
                    if (v("finalizeDomMutation invoked."), !r(l)) {
                        v("Aborting because element has been uninstalled");
                        return
                    }
                    var e = r(l).style;
                    E(l, e.width, e.height), z(l, e.width, e.height)
                }

                function I() {
                    u(l)
                }

                function N() {
                    var e;
                    v("Installing..."), r(l).listeners = [], e = y(), r(l).startSize = {
                        width: e.width,
                        height: e.height
                    }, v("Element start size", r(l).startSize), n.add(0, w), n.add(1, D), n.add(2, T), n.add(3, j), n.add(4, I)
                }
                if (v("Making detectable..."), (g = (m = p = l).getRootNode && m.getRootNode().contains(m), (m === m.ownerDocument.body || m.ownerDocument.body.contains(m) || g) && null !== window.getComputedStyle(p)) ? 1 : 0) N();
                else v("Element is detached"), A(), v("Waiting until element is attached..."), r(l).onRendered = function() {
                    v("Element is now attached"), N()
                }
            },
            addListener: function(e, t) {
                if (!r(e).listeners.push) throw Error("Cannot add listener to an element that is not detectable.");
                r(e).listeners.push(t)
            },
            uninstall: function(e) {
                var t = r(e);
                t && (t.onExpandScroll && u(f(e), "scroll", t.onExpandScroll), t.onShrinkScroll && u(h(e), "scroll", t.onShrinkScroll), t.onAnimationStart && u(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
            },
            initDocument: l
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfirmModal: function() {
            return f
        },
        DeclarativeConfirmModal: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("608036"),
        u = n("556026"),
        s = n("88921"),
        l = n("284918");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e) {
        var t, n, o, f = e.header,
            d = e.children,
            _ = e.confirmText,
            E = e.cancelText,
            p = e.className,
            m = e.onConfirm,
            y = e.onCancel,
            I = e.onClose,
            h = e.onCloseCallback,
            O = e.bodyClassName,
            T = e.transitionState,
            S = e.loading,
            v = void 0 !== S && S,
            g = e.confirmButtonColor,
            A = void 0 === g ? a.Button.Colors.RED : g,
            b = e.focusCancel,
            N = void 0 !== b && b,
            R = r.useRef(null);
        if (r.useEffect(function() {
                !N && setTimeout(function() {
                    var e;
                    return null === (e = R.current) || void 0 === e ? void 0 : e.focus()
                }, 0)
            }, [N]), r.useLayoutEffect(function() {
                return function() {
                    return null == h ? void 0 : h()
                }
            }), null != E && (n = r.createElement(a.Button, {
                type: "button",
                look: a.Button.Looks.LINK,
                color: a.Button.Colors.PRIMARY,
                disabled: v,
                onClick: function() {
                    null == y || y(), I()
                },
                autoFocus: N
            }, E)), null != _) {
            ;
            o = r.createElement(a.Button, {
                buttonRef: R,
                type: "submit",
                color: A,
                submitting: v,
                onClick: (t = function() {
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, null == m ? void 0 : m()];
                            case 1:
                                return e.sent(), I(), [3, 3];
                            case 2:
                                throw e.sent();
                            case 3:
                                return [2]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            c(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            c(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }),
                autoFocus: !N
            }, _)
        }
        return r.createElement(s.ModalRoot, {
            className: p,
            transitionState: T
        }, null != f ? r.createElement(s.ModalHeader, {
            separator: !1
        }, r.createElement(u.Heading, {
            variant: "heading-lg/semibold"
        }, f)) : null, r.createElement(s.ModalContent, {
            className: i()(l.content, O)
        }, d), r.createElement(s.ModalFooter, null, o, n))
    }

    function d(e) {
        return r.createElement(s.Modal, {
            onCloseRequest: e.dismissable ? e.onCancel : null,
            renderModal: function(t) {
                return r.createElement(f, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({}, t, e))
            }
        })
    }
}
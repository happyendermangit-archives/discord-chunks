function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComponentDispatchGroupContext: function() {
            return o
        },
        ComponentDispatchGroupProvider: function() {
            return u
        },
        useComponentAction: function() {
            return d
        },
        ComponentAction: function() {
            return c
        }
    }), n("222007"), n("70102");
    var l = n("37983"),
        i = n("884691"),
        a = n("44170"),
        s = n("659500");
    class r {
        subscribe(e, t) {
            s.ComponentDispatch.subscribe(e, t), this.emitter.on(e, t)
        }
        unsubscribe(e, t) {
            s.ComponentDispatch.unsubscribe(e, t), this.emitter.off(e, t)
        }
        bumpDispatchPriority() {
            for (let e of this.emitter.eventNames())
                for (let t of this.emitter.listeners(e)) s.ComponentDispatch.resubscribe(e, t)
        }
        constructor() {
            this.emitter = new a.EventEmitter
        }
    }
    let o = i.createContext(new class e {
            subscribe(e, t) {
                s.ComponentDispatch.subscribe(e, t)
            }
            unsubscribe(e, t) {
                s.ComponentDispatch.unsubscribe(e, t)
            }
            bumpDispatchPriority() {}
        }),
        u = i.forwardRef(function(e, t) {
            let {
                children: n
            } = e, a = i.useRef(null);

            function s() {
                return null === a.current && (a.current = new r), a.current
            }
            return i.useImperativeHandle(t, s), (0, l.jsx)(o.Provider, {
                value: s(),
                children: n
            })
        });

    function d(e) {
        let {
            event: t,
            handler: n
        } = e, l = i.useContext(o), a = i.useRef(n);
        i.useEffect(() => {
            a.current = n
        }, [n]);
        let s = null == n;
        return i.useEffect(() => {
            if (s) return;
            let e = function() {
                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                null === (e = a.current) || void 0 === e || e.call(a, ...n)
            };
            return l.subscribe(t, e), () => {
                l.unsubscribe(t, e)
            }
        }, [l, t, s]), null
    }

    function c(e) {
        return d(e), null
    }
}
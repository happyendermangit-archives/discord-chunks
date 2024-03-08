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
    var i = n("37983"),
        l = n("884691"),
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
    let o = l.createContext(new class e {
            subscribe(e, t) {
                s.ComponentDispatch.subscribe(e, t)
            }
            unsubscribe(e, t) {
                s.ComponentDispatch.unsubscribe(e, t)
            }
            bumpDispatchPriority() {}
        }),
        u = l.forwardRef(function(e, t) {
            let {
                children: n
            } = e, a = l.useRef(null);

            function s() {
                return null === a.current && (a.current = new r), a.current
            }
            return l.useImperativeHandle(t, s), (0, i.jsx)(o.Provider, {
                value: s(),
                children: n
            })
        });

    function d(e) {
        let {
            event: t,
            handler: n
        } = e, i = l.useContext(o), a = l.useRef(n);
        l.useEffect(() => {
            a.current = n
        }, [n]);
        let s = null == n;
        return l.useEffect(() => {
            if (s) return;
            let e = function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                null === (e = a.current) || void 0 === e || e.call(a, ...n)
            };
            return i.subscribe(t, e), () => {
                i.unsubscribe(t, e)
            }
        }, [i, t, s]), null
    }

    function c(e) {
        return d(e), null
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
            return a
        },
        MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
            return l
        },
        MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
            return s
        },
        IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
            return o
        },
        insertAccessibilityLabelElements: function() {
            return u
        }
    });
    var r = n("476765"),
        i = n("782340");
    let a = (0, r.uid)(),
        l = (0, r.uid)(),
        s = (0, r.uid)(),
        o = (0, r.uid)();

    function u() {
        [{
            id: a,
            text: ","
        }, {
            id: l,
            text: ","
        }, {
            id: s,
            text: i.default.Messages.REACTIONS
        }, {
            id: o,
            text: i.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
        }].forEach(e => {
            let {
                id: t,
                text: n
            } = e, r = document.getElementById(t);
            null == r && ((r = document.createElement("div")).setAttribute("id", t), r.innerText = n, r.style.display = "none", document.body.appendChild(r))
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
            return s
        },
        MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
            return i
        },
        MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
            return a
        },
        MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
            return u
        },
        insertAccessibilityLabelElements: function() {
            return l
        }
    });
    var r = n("719328"),
        o = n("941504"),
        i = (0, r.uid)(),
        a = (0, r.uid)(),
        u = (0, r.uid)(),
        s = (0, r.uid)();

    function l() {
        [{
            id: i,
            text: ","
        }, {
            id: a,
            text: ","
        }, {
            id: u,
            text: o.default.Messages.REACTIONS
        }, {
            id: s,
            text: o.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
        }].forEach(function(e) {
            var t = e.id,
                n = e.text,
                r = document.getElementById(t);
            null == r && ((r = document.createElement("div")).setAttribute("id", t), r.innerText = n, r.style.display = "none", document.body.appendChild(r))
        })
    }
}
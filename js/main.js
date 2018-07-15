'use strict';

let settings = {
    "mount": "#dialMenu",
    "dials": [{
            "name": "ADD",
            "color": Colors.BLUE1,
            "iconName": "upload",
            "items": [{ "name": "capture", "iconName": "capture" },
                { "name": "photos", "iconName": "photo" },
                { "name": "file", "iconName": "file" },
                { "name": "plan", "iconName": "plan" },
                { "name": "survey", "iconName": "survey" },

            ],
        },
        {
            "name": "CREATE",
            "color": Colors.SLATE1,
            "iconName": "icon-discussion",
            "items": [0, 1]
        },
        {},
        {},
        {},
        {},
    ],
};

let dm = new DialMenu(settings);
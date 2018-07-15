'use strict';

class Dial {
    constructor(menuItems) {
        this.canvas = document.querySelector("#dial1");
        console.log("Dial initialized", menuItems);


        let ptOrigin = new Point(this.canvas.width / 2, this.canvas.height / 2);
        this.drawDial(ptOrigin);

        let numButtons = menuItems.length;
        this.drawButtons(ptOrigin, this.canvas.width / 2, menuItems);
    }

    // stub
    options() {
        return {
            txtLabelOffsetRatio: 0.2,
            iconOffsetRaio: 0.43,
        }
    }

    drawDial(pt) {
        var c = this.canvas.getContext('2d');
        c.fillStyle = Colors.ARCTIC;
        c.strokeStyle = Colors.SLATE5;
        c.beginPath();
        c.arc(pt.x, pt.y, 400, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
    }

    drawButtons(pt, radius, menuItems) {
        let c = this.canvas.getContext('2d');
        let theta = Math.PI * 2 / menuItems.length;
        var opts = this.options();
        

        c.beginPath();

        // draw lines first, rotate if needed, then draw menu items..
        var item,
            tmLabel,
            tmIcon;

        for (var i = 0; i < menuItems.length; i++) {
            item = menuItems[i];

            // draw text label
            if (item.name) {
                c.fillStyle = item.color;
                c.font = "500 24px museo-sans-rounded";
                tmLabel = c.measureText(item.name);
                c.fillText(item.name, pt.x - tmLabel.width / 2, opts.txtLabelOffsetRatio * radius);
            }

            // draw icon
            if (item.iconName) {
                c.font = "72px unearth";
                tmIcon = c.measureText(item.iconName);
                c.fillText(item.iconName, pt.x - tmIcon.width / 2, opts.iconOffsetRaio * radius);
            }

            // draw borders
            // first menu item text should always be displayed at 0 degrees
            // after 4 menu items, even configurations of buttons require rotation by 50% of theta
            if (menuItems.length > 3 && menuItems.length % 2 == 0) {
                console.log("twist lines");
            }

            c.fillStyle = Colors.SLATE5;
            c.fillRect(pt.x, pt.y, 2, radius - 1);
            c.fillStyle = Colors.WHITE;
            c.fillRect(pt.x - 3, pt.y, 3, radius - 1);

            // spin the dial one item
            c.translate(radius, radius);
            c.rotate(-theta);
            c.translate(-radius, -radius);

        }

    }
}
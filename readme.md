# Dial Menu

The Dial menu is a user interface component enabling mobile users to quickly access Unearth capabilities quickly, ergonomically, and efficiently. 

## Vocabulary

* Disc - an interactive circular shape that contains content
* Dial - a disc that when rotated will trigger an action
* Dial Notch - a small triangle present on an active dial informing the user of the current selected choice
* DiscButton - discs and dials may contain buttons that when tapped or clicked trigger an action
* DiscGesture - a touch gesture allowing users to trigger actions from the Dial by simply swiping a path. All disc gestures are comprised of three events phases executed by a user:
  * Start: when the user taps the initiator disc
  * Trace: when the user traces a path with their finger to navigate the dial interface
  * End: when the user lifts their finger
* Tracer - a component that decodes the vector path created by the user during the Trace phase into an action that will be completed



## Requirements

* remember position of dials



## Architecture

**Classes**

* DialMenu - main class
  * create()
  * open()
  * close()
  * destroy()
  * friction - Number [0-1] that determines the rate of decay in dial velocity after being spun by the user
* Disc
  * radius
  * scale(radius)
  * content
* Dial
* DiscButton
* Point
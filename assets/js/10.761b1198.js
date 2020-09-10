(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{432:function(t,e,a){t.exports=a.p+"assets/img/1.8580d359.png"},433:function(t,e,a){t.exports=a.p+"assets/img/2.b60105fc.png"},434:function(t,e,a){t.exports=a.p+"assets/img/3.f74b9a1a.png"},435:function(t,e,a){t.exports=a.p+"assets/img/4.3a1b1f85.png"},436:function(t,e,a){t.exports=a.p+"assets/img/5.e33635e8.png"},437:function(t,e,a){t.exports=a.p+"assets/img/6.1208fa55.png"},438:function(t,e,a){t.exports=a.p+"assets/img/7.98d4f3d3.png"},439:function(t,e,a){t.exports=a.p+"assets/img/8.2ad484be.png"},440:function(t,e,a){t.exports=a.p+"assets/img/9.d2e1fef1.png"},441:function(t,e,a){t.exports=a.p+"assets/img/10.56aafffb.png"},442:function(t,e,a){t.exports=a.p+"assets/img/11.540b3a23.png"},443:function(t,e,a){t.exports=a.p+"assets/img/12.cbdc472b.png"},444:function(t,e,a){t.exports=a.p+"assets/img/13.f0e06df0.png"},543:function(t,e,a){"use strict";a.r(e);var s=a(33),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"activate-update-mode-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activate-update-mode-manually"}},[t._v("#")]),t._v(" Activate Update Mode Manually")]),t._v(" "),s("p",[s("strong",[t._v("Note: The following steps are only necessary if you are using Windows 10 Build 1809 (or higher) and Nitrokey Storage with firmware 0.52 or older. In all other cases, or if you have access to another system, the regular update as described "),s("a",{attrs:{href:"https://www.nitrokey.com/en/documentation/firmware-update-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" is sufficient and easier.")])]),t._v(" "),s("h2",{attrs:{id:"what-is-needed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-needed"}},[t._v("#")]),t._v(" What is needed")]),t._v(" "),s("p",[t._v("To put the Nitrokey Storage manually into Update Mode (without using the Nitrokey App), the following is required:")]),t._v(" "),s("ul",[s("li",[t._v("A USB stick ("),s("strong",[t._v("All data on the USB stick will be lost! Please make a backup of the creation before!")]),t._v(")")]),t._v(" "),s("li",[t._v('The "'),s("a",{attrs:{href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Balena Etcher"),s("OutboundLink")],1),t._v('" software')]),t._v(" "),s("li",[t._v("The "),s("a",{attrs:{href:"https://github.com/Nitrokey/nitrokey-storage-update-boot/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("USB Image"),s("OutboundLink")],1),t._v(' we created for this purpose. Please download only the file ending with ".img.zip".')])]),t._v(" "),s("h2",{attrs:{id:"install-balena-etcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-balena-etcher"}},[t._v("#")]),t._v(" Install Balena Etcher")]),t._v(" "),s("p",[t._v("Balena Etcher helps us to install the USB image on the USB stick. Please double click on the "),s("a",{attrs:{href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"}},[t._v("previously downloaded installation file"),s("OutboundLink")],1),t._v(" and follow the instructions.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(432),alt:"img1"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(433),alt:"img2"}})]),t._v(" "),s("h2",{attrs:{id:"installing-the-usb-image-with-balena-etcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-usb-image-with-balena-etcher"}},[t._v("#")]),t._v(" Installing the USB image with Balena Etcher")]),t._v(" "),s("p",[t._v("The program usually opens immediately after installation. If not, you will find a shortcut on the desktop. Using the application, select the "),s("a",{attrs:{href:"https://github.com/Nitrokey/nitrokey-storage-update-boot/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("previously downloaded image file"),s("OutboundLink")],1),t._v(', which ends with ".img.zip". Now insert the USB stick. It should be recognized automatically. Press "Flash!" to proceed.')]),t._v(" "),s("p",[s("img",{attrs:{src:a(434),alt:"img3"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(435),alt:"img4"}}),t._v("\nYou must allow the application to make changes.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(436),alt:"img5"}}),t._v(" "),s("img",{attrs:{src:a(437),alt:"img6"}}),t._v(" "),s("img",{attrs:{src:a(438),alt:"img7"}}),t._v(" "),s("img",{attrs:{src:a(439),alt:"img8"}})]),t._v(" "),s("p",[t._v("After the image has been successfully transferred, Windows may ask if the device should be formatted. "),s("ins",[t._v('It is important that you click "Cancel", otherwise the USB stick will be overwritten by Windows.')])]),t._v(" "),s("p",[s("img",{attrs:{src:a(440),alt:"img9"}})]),t._v(" "),s("h2",{attrs:{id:"booting-from-the-usb-stick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#booting-from-the-usb-stick"}},[t._v("#")]),t._v(" Booting from the USB stick")]),t._v(" "),s("p",[t._v('Now the system must be restarted. The USB stick must remain in the USB port so that the system can be started on the USB stick. Some devices are configured to start automatically from USB stick if it contains a system. If Windows instead of the USB image is booting right after the restart, you have to set your BIOS to boot from USB. On many systems this can be done with the Escape key, the F10, F11 or F12 key. Often, when starting the device there is also a hint which key to use the so-called "boot menu".')]),t._v(" "),s("p",[t._v("After the system has started, please choose the language by typing 1 (English) and hit Enter.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(441),alt:"img10"}})]),t._v(" "),s("p",[t._v("Please insert the Nitrokey Storage when asked to.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(442),alt:"img11"}})]),t._v(" "),s("p",[t._v("The Firmware Update Mode will be started automatically if the standard password is set. Otherwise you need to input your password and hit enter.")]),t._v(" "),s("p",[t._v("!"),s("img",{attrs:{src:a(443),alt:"img12"}})]),t._v(" "),s("p",[t._v("After the system has activated the firmware update on the Nitrokey Storage, a restart is issued after 60 seconds. Please remove the USB Stick. Afterwards you can use the Nitrokey Update Tool in Windows as described "),s("a",{attrs:{href:"https://www.nitrokey.com/en/documentation/firmware-update-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"restoring-the-usb-stick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restoring-the-usb-stick"}},[t._v("#")]),t._v(" Restoring the USB Stick")]),t._v(" "),s("p",[t._v("Windows should automatically ask to format your USB Stick as soon as you insert the USB Stick the first time again in Windows. Just accept the request for being able to use the USB Stick as previously.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(444),alt:"img13"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);
var xr_bd,xr_fc,xr_bc,xr_tr,xr_menuoffx,xr_menuoffy,xr_frames;var xr_nspeed;var xr_ma=new Array();var xr_mx=new Array();var xr_my=new Array();var xr_mc=new Array();var xr_mpos=new Array();var xr_mal=0;var xr_main=0;var xr_menuw=200;var xr_psrc=0;var xr_pname="";var xr_gd=0;var xr_gx,xr_gy;var xr_d=document;var xr_NS7=(!xr_d.all&&xr_d.getElementById);var xr_NS4=(!xr_d.getElementById);var xr_IE5=(!xr_NS4&&!xr_NS7&&(navigator.userAgent.indexOf('MSIE 5.0')!=-1||navigator.userAgent.indexOf('MSIE 5.2')!=-1));var xr_IE5p5=(!xr_NS4&&!xr_NS7&&navigator.userAgent.indexOf('MSIE 5.5')!=-1);var xr_NS6=(xr_NS7&&navigator.userAgent.indexOf('Netscape6')!=-1);var xr_SAF=navigator.userAgent.indexOf('Safari')!=-1;var xr_ifr=(!xr_NS7&&!xr_NS4&&!xr_IE5&&!xr_IE5p5);var xr_quirk=(xr_d.compatMode&&xr_d.compatMode=="BackCompat")||xr_IE5||xr_IE5p5;var xr_IE8=((navigator.userAgent.indexOf('MSIE 8')!=-1 || navigator.userAgent.indexOf('MSIE 9')!=-1)&& xr_d.documentMode>7);var xr_p=navigator.userAgent.indexOf('Opera');var xr_opera=xr_p!=-1;if(xr_p>-1){xr_p=navigator.userAgent.charAt(xr_p+6);if(xr_p>6)xr_NS7=1;else xr_NS4=1;};if((navigator.userAgent.indexOf('MSIE 10')!=-1)) xr_NS7=1;function xr_mainMenuItem(name,ext,h,w,url,tar,alt,dir,state,s){if(xr_NS4&&xr_main==0)return;if(xr_main==1)xr_d.write("<tr>");if(xr_main==1||xr_main==2)xr_d.write("<td"+xr_mal+">");xr_d.write("<a ");xr_d.write("href=\""+url+"\" ");if(tar!="")xr_d.write("target=\""+tar+"\" ");xr_d.write("onmouseout=\"");if(dir>0)xr_d.write("xr_tidyMenu(event);");xr_d.write("\" onmouseover=\"");if(dir>0)xr_d.write("xr_openMenu(event, '"+name+"',"+dir+","+xr_bc+","+xr_fc+");");xr_d.write("return false;\"");xr_d.write(" class=\""+s+"\" style=\"width:"+(w>0?w:xr_menuw)+"px\"");xr_d.write(">");xr_d.write("&nbsp;"+ext+"&nbsp;");xr_d.write("</a>");if(xr_main==1||xr_main==2)d.write("</td>");if(xr_main==1)d.write("</tr>");if(xr_main==3)d.write("<br />");};function xr_startSubmenu(name,style,sw){var depth=name.split("_").length+1000;if(sw>0)xr_menuw=sw;xr_d.write("<div id=\""+name+"\" class=\""+style+"\"  style=\"z-index:"+depth+";width:"+(xr_menuw+(xr_bd*2))+"px\">");};function xr_endSubmenu(name){xr_d.write("</div>");xr_d.getElementById(name).onmouseout=xr_tidyMenu;};function xr_submenuItem(text,url,tar,s){if(text=="---") xr_d.write("<div class=\""+s+"\" style=\"width:"+xr_menuw+"px\"><center><img src=\"index_htm_files/"+xr_menusep+"\" height=\"7\" width=\""+(xr_menuw-6-(2*xr_bd))+"\" border=0/></center></div>");else{xr_d.write("<a ");if(url!="")xr_d.write("href=\""+url+"\" ");if(tar!="")xr_d.write("target=\""+tar+"\" ");xr_d.write("class=\""+s+"\" style=\"width:"+xr_menuw+"px\">&nbsp;"+text+"&nbsp;</a>");};};function xr_openMenux(event,id,pos,bc,fc){if(!xr_mal>0 || xr_ma[0]!=id){xr_closeMenus("");xr_openMenu(event,id,pos,bc,fc);};};function xr_openMenu(event,id,pos,bc,fc){var el,x,y,dx,dy;var bwidth;if(xr_gd==0||xr_mal==0){var xr_p=xr_d.getElementById(id);xr_gx=0;xr_gy=0;while(xr_p&&xr_p.offsetParent){xr_p=xr_p.offsetParent;xr_gx+=xr_p.offsetLeft;xr_gy+=xr_p.offsetTop;};if(xr_p)xr_gd=1;};if(xr_mal>0){el=xr_d.getElementById(xr_ma[xr_mal-1]);if(xr_mx[xr_mal-1]!=el.offsetLeft||xr_my[xr_mal-1]!=el.offsetTop){el.style.left=xr_mx[xr_mal-1]+"px";el.style.top=xr_my[xr_mal-1]+"px";}xr_tidyMenu(event);};if(xr_mal>1)pos=xr_mpos[xr_mal-1];if(xr_NS7){bwidth=window.innerWidth;var xr_p=event.target;if(xr_p.nodeName!="A"&&xr_p.nodeName!="IMG"&&xr_p.parentNode.nodeName=="A")xr_p=xr_p.parentNode;dx=xr_p.offsetWidth;dy=xr_p.offsetHeight;if(xr_mal==0){x=xr_p.x;y=xr_p.y;if(typeof(xr_p.x)=="undefined"||(!xr_NS6&&!xr_SAF)){x=xr_p.offsetLeft;y=xr_p.offsetTop;while(!xr_NS6&&xr_p.parentNode.nodeName!="BODY"){xr_p=xr_p.parentNode;if(xr_p.nodeName=="TD"||xr_p.nodeName=="TABLE"){x+=xr_p.offsetLeft;y+=xr_p.offsetTop;};};}else if(xr_SAF){x=xr_p.offsetLeft;y=xr_p.offsetTop;while(xr_p.parentNode.offsetParent){xr_p=xr_p.offsetParent;x+=xr_p.offsetLeft;y+=xr_p.offsetTop;};};}else{el=xr_d.getElementById(xr_ma[xr_mal-1]);x=el.offsetLeft;y=el.offsetTop+xr_p.offsetTop;};if(pos!=3)x-=xr_bd;if(pos==3&&xr_mal>0)x+=xr_bd;}else{bwidth=document.body.clientWidth;x=event.clientX-event.offsetX-xr_d.body.clientLeft-xr_gx;y=event.clientY-event.offsetY-xr_d.body.clientTop-xr_gy;dx=event.srcElement.offsetWidth;dy=event.srcElement.offsetHeight;if(!xr_quirk){x+=xr_d.documentElement.scrollLeft-2;y+=xr_d.documentElement.scrollTop-2;}else{x+=xr_d.body.scrollLeft;y+=xr_d.body.scrollTop;};if(xr_IE8){x+=2;y+=2;};if(xr_mal>0){y-=xr_bd;};if(pos!=3)x-=xr_bd;var o=document.getElementById("xr_xrii");if(o){x+=o.scrollLeft;y+=o.scrollTop;};};if(xr_mal==0 && xr_SAF){x-=xr_gx;y-=xr_gy;};el=xr_d.getElementById(id);xr_nspeed=100;if(el&&el.style.visibility!="visible"){if(pos==1){x+=dx;if(xr_frames) xr_nspeed=el.offsetWidth/xr_frames;el.style.left=x-el.offsetWidth+xr_nspeed+"px";el.style.top=y+"px";if(x+xr_gx+el.offsetWidth>bwidth){x-=dx;pos=3;};};if(pos==2){y+=dy;if(xr_frames) xr_nspeed=el.offsetHeight/xr_frames;el.style.left=x+"px";el.style.top=y-el.offsetHeight+xr_nspeed+"px";};if(pos==3){x-=el.offsetWidth;if(xr_frames) xr_nspeed=el.offsetWidth/xr_frames;el.style.left=x+el.offsetWidth-xr_nspeed+"px";el.style.top=y+"px";if(x+xr_gx<0){x+=el.offsetWidth;pos=1;x+=dx;el.style.left=x-el.offsetWidth+xr_nspeed+"px";el.style.top=y+"px";};};if(!xr_mal>0){x+=xr_menuoffx;y+=xr_menuoffy;};xr_mx[xr_mal]=x;xr_my[xr_mal]=y;if(xr_opera||xr_frames==0){el.style.left=x+"px";el.style.top=y+"px";};if(!xr_IE5)xr_clipMenu(xr_mal,el);el.style.visibility="visible";xr_ma[xr_mal]=id;xr_mpos[xr_mal]=pos;if(xr_NS7){var xr_p=event.target;if(xr_p.nodeName!="A"&&xr_p.parentNode.nodeName=="A")xr_p=xr_p.parentNode;xr_mc[xr_mal]=xr_p.style;if(!xr_NS6&&xr_mal>0){var s=bc.toString(16);while(s.length<6) s="0"+s;xr_mc[xr_mal].backgroundColor="#"+s;s=fc.toString(16);while(s.length<6) s="0"+s;xr_mc[xr_mal].color="#"+s;};el.onmouseout=xr_tidyMenu;}else{xr_mc[xr_mal]=event.srcElement.style;if(xr_mal>0){xr_mc[xr_mal].backgroundColor=bc;xr_mc[xr_mal].color=fc;};};xr_mal++;};if(xr_ifr&&el&&xr_frames==0&&(typeof(xr_tr)=="undefined"||xr_tr=="")){var xr_p=xr_d.getElementById(id+"i");if(xr_p){xr_p.style.top=y+"px";xr_p.style.left=x+"px";xr_p.style.width=el.style.width;xr_p.style.height=el.offsetHeight+"px";xr_p.style.display="block";}else{xr_ifr="<iframe id=\""+id+"i\" style=\"position:absolute;left:"+x+"px;width:"+el.style.width+";height:"+el.offsetHeight+"px;top:"+y+"px;z-index:998;display:block;\" scrolling=\"no\" frameborder=\"0\"></iframe>";el.insertAdjacentHTML('beforeBegin',xr_ifr);};};};function xr_overMenu(x,y){x-=xr_gx;y-=xr_gy;var o=document.getElementById("xr_xrii");if(o){x+=o.scrollLeft;y+=o.scrollTop;};if(xr_scale && !xr_spaold){if(!xr_chrome){if(xr_scof){if(xr_scale>1)x=xr_ox+((x-xr_ox)/xr_scale);else x=x/xr_scale;y=((y-xr_oy)/xr_scale)+xr_oy;}else{x=xr_ox+((x-xr_ox)/xr_scale);y=y/xr_scale;};}else{x=((x+xr_dx)/xr_scale)-xr_dx;y=((y+document.getElementById("xr_xr").offsetTop)/xr_scale)-document.getElementById("xr_xr").offsetTop;};};for(i=xr_mal-1;i>=0;i--){var el=xr_d.getElementById(xr_ma[i]);if(Math.min(xr_mx[i],el.offsetLeft)+el.offsetWidth+1>x && Math.max(xr_mx[i],el.offsetLeft)-1<=x && Math.min(xr_my[i],el.offsetTop)+el.offsetHeight+1>y && Math.max(xr_my[i],el.offsetTop)-1<=y){return xr_ma[i];};}return "";};function xr_closeMenus(t){var om=0;for(i=0;i<xr_mal;i++){var mail=xr_ma[i].length;if(mail>t.length||t.substring(0,mail)!=xr_ma[i]){var el=xr_d.getElementById(xr_ma[i]);el.style.visibility="hidden";xr_mc[i].backgroundColor="";xr_mc[i].color="";if(xr_ifr){var xr_p=xr_d.getElementById(xr_ma[i]+"i");if(xr_p)xr_p.style.display="none";};}else{xr_ma[om]=xr_ma[i];xr_mx[om]=xr_mx[i];xr_my[om]=xr_my[i];om++;};};xr_mal=om;if(xr_mal==0&&xr_psrc)xr_psrc.src=xr_pname;};function xr_tidyMenu(e){if(xr_NS7){t=xr_overMenu(e.pageX,e.pageY);if(t!=""&&(e.target.firstChild==e.relatedTarget||e.target==e.relatedTarget.firstChild))return;}else{var x=event.clientX-xr_d.body.clientLeft;var y=event.clientY-xr_d.body.clientTop;if(!xr_quirk){x+=xr_d.documentElement.scrollLeft-2;y+=xr_d.documentElement.scrollTop-2;}else{x+=xr_d.body.scrollLeft;y+=xr_d.body.scrollTop;};if(xr_IE8){x+=2;y+=2;};t=xr_overMenu(x,y);}if(xr_ms==1 && t==""){if(xr_mal>0) xr_closeMenus(xr_ma[0]);}else xr_closeMenus(t);};function xr_tidyMenu1(e){if(xr_NS7){t=xr_overMenu(e.pageX,e.pageY);if(t!=""&&(e.target.firstChild==e.relatedTarget||e.target==e.relatedTarget.firstChild))return;}else{var x=event.clientX-xr_d.body.clientLeft;var y=event.clientY-xr_d.body.clientTop;if(!xr_quirk){x+=xr_d.documentElement.scrollLeft-2;y+=xr_d.documentElement.scrollTop-2;}else{x+=xr_d.body.scrollLeft;y+=xr_d.body.scrollTop;};if(xr_IE8){x+=2;y+=2;};t=xr_overMenu(x,y);};if(t=="") xr_closeMenus(t);};function xr_animate(){for(i=0;i<xr_mal;i++){var el=xr_d.getElementById(xr_ma[i]);if(el.style.visibility=="visible"){if(el.offsetLeft<xr_mx[i])el.style.left=Math.min(el.offsetLeft+xr_nspeed,xr_mx[i])+"px";if(el.offsetLeft>xr_mx[i])el.style.left=Math.max(el.offsetLeft-xr_nspeed,xr_mx[i])+"px";if(el.offsetTop<xr_my[i])el.style.top=Math.min(el.offsetTop+xr_nspeed,xr_my[i])+"px";xr_clipMenu(i,el);};};if(xr_mal!=0||xr_frames!=0)setTimeout("xr_animate()",50);};function xr_clipMenu(i,el){if(el.offsetLeft>xr_mx[i])el.style.clip="rect("+(xr_my[i]-el.offsetTop)+"px "+(el.offsetWidth+(xr_mx[i]-el.offsetLeft))+"px "+el.offsetHeight+"px "+0+"px)";else el.style.clip="rect("+(xr_my[i]-el.offsetTop)+"px "+el.offsetWidth+"px "+el.offsetHeight+"px "+(xr_mx[i]-el.offsetLeft)+"px)";};
